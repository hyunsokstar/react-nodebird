import { all, fork } from 'redux-saga/effects';
import axios from "axios";
import postSaga from './post';
import userSaga from './user';
import { backUrl } from '../config/config.js';
// const dotenv = require('dotenv');
// dotenv.config();

// axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.baseURL = 'http://localhost:80';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}

