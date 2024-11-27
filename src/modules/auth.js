// 1. action type
import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: ''
    }
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
        })
    }, initialState
);

export default auth;