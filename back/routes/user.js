const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');

// 로그인
router.post('/login', (req, res, next) => {
    console.log("로그인 요청 확인(routes/user.js) : ", req.body);
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }

        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            // return res.status(200).json(user);
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

router.post('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

// register
router.post('/', async (req, res, next) => { // POST /user/

    console.log("req.body.password : ", req.body.password);

    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        console.log("hasedPassword : ", hashedPassword);

        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');

    } catch (error) {
        console.error(error);
        next(error); // status 500
    }
});


module.exports = router;