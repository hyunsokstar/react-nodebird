const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtag');


const cors = require('cors');
const db = require('./models');

// dotenv 임포트
const dotenv = require('dotenv');

// 패스포트 모듈 임포트 하기 
const passport = require('passport');
const passportConfig = require('./passport');
// 세션 임포트
const session = require('express-session');
//쿠키 파서 임포트
const cookieParser = require('cookie-parser');

const path = require('path');

// 익스프레스 서버 객체 생성
const app = express();

db.sequelize.sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch("error ::::: ", console.error)

// passport index.js 에 설정한것을 익스프레스에 적용
passportConfig();

// dotenv 설정을 파일에 적용
dotenv.config();

// cors 에러 방지를 위한 설정 
// app.use(cors({
//     origin: '*',
//     credentials: false,
// }));
// cors 설정 + 쿠키 설정
app.use(cors({
    origin: ['http://127.0.0.1:3000','http://localhost:3000', 'nodebird.com', 'http://3.34.125.120/'],
    credentials: true,
}));


// 파일 서빙 설정
app.use('/', express.static(path.join(__dirname, 'uploads')));

// 리덕스 사가에서 보낸 데이터를 req.body로 받기 위한 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie-parser 설정 추가 
// app.use(cookieParser('nodebirdsecret'));
app.use(cookieParser(process.env.COOKIE_SECRET));

// session 설정 추가 
app.use(session({
    saveUninitialized: false,
    resave: false,
    // secret: 'nodebirdsecret',
    secret: process.env.COOKIE_SECRET,
}));

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use(passport.initialize());
app.use(passport.session());

// 라우터 로직 분기
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);


// app.listen(3065, () => {
//     console.log("Express Server is Excuting");
// });

const port = process.env.NODE_ENV === 'production' ? 80 : 3065

app.listen(port , () => {
    console.log("Express Server is Excuting");
});
