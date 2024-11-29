// 1. action type
import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import { takeLatest } from 'redux-saga/effects';


const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';


const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN'
)
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER'
)

// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
// const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const register = createAction(REGISTER, ({
    mid,
    name,
    password,
    email,
    phone,
    tel,
    retirement,
    social,
    zipCode,
    address,
    detailAddress,
    note,
    regDate,
    roles
}) =>({
    mid,
    name,
    password,
    email,
    phone,
    tel,
    retirement,
    social,
    zipCode,
    address,
    detailAddress,
    note,
    regDate,
    roles
}))

export const login = createAction(LOGIN, ({ username, password }) => ({
    username,
    password
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(REGISTER, registerSaga)
}

const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: ''
    },
    auth: null,
    authError: null
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) =>
            //immer로 불변성을 유하면서 state의 값을 변경
            produce(state, draft => {
                // form 은 initialState의 register 또는 login key는 register에서의 username 등
                // form login, register , key username , password
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
        // 로그인 성공
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth
        }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error
        }),
        [REGISTER_SUCCESS] : (state, {payload: auth}) => ({
            ...state,
            authError: null,
            auth,
        }),
        [REGISTER_FAILURE] : (state, {payload: error}) => ({
            ...state,
            authError: error,
        })
    }, initialState
);

export default auth;