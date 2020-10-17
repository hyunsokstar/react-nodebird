const express = require('express');
const postRouter = require('./routes/post');

const app = express();
const db = require('./models');

console.log("app.js 실행 check");

db.sequelize.sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch("error ::::: ", console.error)

app.use('/post', postRouter);


app.listen(3065, () => {
    console.log("Express Server is Excuting");
});
