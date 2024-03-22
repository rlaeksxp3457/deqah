import express, { Request, Response, Router } from 'express';
import passport, { Strategy } from 'passport';

const memberRouter: Router = express.Router();

memberRouter.get('/member/naver', passport.authenticate('naver', { authType: 'reprompt' }));

memberRouter.get('/member/:platform/callback', async (req: Request, res: Response) => {
  try {
    const platformType = req.params.platform;
    // @ts-ignore
    const { token, state } = await authenticateUser(req, res, platformType);
    console.log(token, state);
    if (!token) res.json({ message: '로그인 실패' });
    if (state === 'login') return res.redirect(`/project/board?token=${token}`);
    if (state === 'not found') return res.redirect(`/auth/signup?token=${token}`);

    // else res.json({ message: '로그인 성공', response: token }); // res.redirect('/account/login/success?token=${token}');
    // @ts-ignore
  } catch {
    return res.redirect('/');
  }
});

function authenticateUser(req: Request, res: Response, platformType: string | Strategy | string[]) {
  return new Promise((resolve, reject) => {
    passport.authenticate(platformType, { failureRedirect: '/login' }, (error: any, token: any, state: any) => {
      if (error) {
        return reject(error);
      }

      resolve({ token, state });
    })(req, res);
  });
}

// passport.authenticate() 는 함수를 반환한다
// 그래서 아래와 같이 사용할 수 있다

// passport.authenticate = () => (request, response) => {
//   미들웨어로 동작하기 위해 함수를 반환하는거 같다.
//   console.log(request, response);
// };
//
// passport.authenticate()(req, res)
// const 인증 = passport.authenticate()
// 인증(req, res)
//example()(req, res);

export default memberRouter;
