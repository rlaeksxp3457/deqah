import { PassportStatic } from 'passport';
import config from '../config/config';
import { Strategy as NaverStrategy, Profile as NaverProfile } from 'passport-naver-v2';
import crypto from 'crypto';
import axios, { AxiosResponse } from 'axios';
import jwt from 'jsonwebtoken';

export const passportLoader = async (passport: PassportStatic) => {
  const { naver, JWT } = config;
  const jsonWebTokenSecret: string = JWT.SECRET || '';

  function generateToken(user_id: string) {
    if (jsonWebTokenSecret) {
      return jwt.sign({ user_id }, jsonWebTokenSecret, { expiresIn: '1h' });
    }
  }

  passport.use(
    'naver',
    new NaverStrategy(
      {
        clientID: naver.CLIENT_ID,
        clientSecret: naver.CLIENT_SECRET,
        callbackURL: `/api/auth/member/naver/callback`,
      },
      async (accessToken: string, refreshToken: string, profile: NaverProfile, done: any) => {
        const { email } = profile;
        const sns_id = crypto.createHash('sha256').update(profile.id).digest('hex');
        try {
          const { data, status } = await axios.post('http://deqah_user_service:8081/api/user/check', { sns_id });

          if (status === 200) {
            const token = generateToken(data.user_id);
            done(null, token);
          }
        } catch (err: any) {
          if (err.response.status === 404) {
            const { data } = await axios.post('http://deqah_user_service:8081/api/user', { sns_id, email });
            const token = generateToken(data.user.id);
            done(null, token);
          }
          done(null, false);
        }
      },
    ),
  );
};
