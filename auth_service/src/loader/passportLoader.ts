import { PassportStatic } from 'passport';
import config from '../config/config';
import { Strategy as NaverStrategy, Profile as NaverProfile } from 'passport-naver-v2';
import crypto from 'crypto';
import axios, { AxiosResponse } from 'axios';
import jwt from 'jsonwebtoken';
import { randomColor, randomColorShade } from '../utils/func';

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
            done(null, token, 'login');
          }
        } catch (err: any) {
          if (err.response.status === 404) {
            const { data, status } = await axios.post('http://deqah_verify_service:8082/api/verify/token', {
              key: sns_id,
              value: {
                sns_id,
                email,
                nickname: email && email.split('@')[0],
                profile: { initial: email && email[0].toUpperCase(), color: randomColor(), shade: randomColorShade() },
              },
              expire: 600,
            });
            if (status === 200) {
              done(null, sns_id, 'not found');
            }
            if (status === 500) {
              done(null, false);
            }
          }
          done(null, false);
        }
      },
    ),
  );
};
