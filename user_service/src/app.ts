import express, {Request, Response} from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (_: Request, res: Response) => {
  res.send("welcome to user service!");
});

export {app}

// 페이지접근 > 로그인 여부를 검사 > 로그인 페이지로 이동 > 깃허브, 구글 ... 소셜로그인 버튼
// > 구글, 네이버 > 네이버 로그인 url 로 이동 > 로그인
// 키값으로 소셜로그인한유저의 프로필 정보 > 닉네임 이메일 전화번호 등등 >