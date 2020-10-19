import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,

} from '../reducers/user';
import axios from "axios";



function logInAPI(data) {
    console.log("login data(saga) : ", data);
    return axios.post('/user/login', data);
}

function* logIn(action) {
    try {
        // console.log('saga logIn');
        // yield delay(1000);
        const result = yield call(logInAPI , action.data);
        console.log("login response from backend : ", result);

        yield put({
            type: LOG_IN_SUCCESS,
            data: { ...action.data },
            data: result.data
            // data: { ...action.data },
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}


function logOutAPI(data) {
    return axios.post('/user/logout', data);
}

function* logOut(action) {
    try {
        const result = yield call(logOutAPI);
        console.log("logout result: ", result);
        // yield delay(2000);

        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function followAPI() {
    return axios.post('/api/follow');
}

function* follow(action) {
    try {
        // const result = yield call(followAPI);
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.post('/api/unfollow');
}

function* unfollow(action) {
    try {
        // const result = yield call(unfollowAPI);
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    console.log("saga signUpAPI 실행 확인 data :", data);
    return axios.post('/user', data);
}

function* signUp(action) {
    console.log("signup 실행 check");
    try {
        // yield delay(1000);
        const result = yield call(signUpAPI, action.data);
        console.log("result : " , result);

        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogOut() {
    console.log("saga watch 실행 check");
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchLogIn() {
    console.log("saga watch 실행 check");
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchSignUp),

    ]);
}