import * as process from 'process';

const config = {
  naver: {
    CLIENT_ID: process.env.NAVER_CLIENT_ID,
    CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
  },
};

export default config;
