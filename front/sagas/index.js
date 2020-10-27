import { all, fork } from 'redux-saga/effects';
import axios from "axios";
import postSaga from './post';
import userSaga from './user';
import { backUrl } from '../config/config.js';
// const dotenv = require('dotenv');
// dotenv.config();


// let port = process.env.NODE_ENV === 'production' ? 80 : 3065;
axios.defaults.baseURL = 'http://localhost:3065';
// axios.defaults.baseURL = `http://localhost:${port}`;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}

