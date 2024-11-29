import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, login} from "../../modules/auth";
import {useEffect, useState} from "react";
import AuthForm from "../../components/auth/AuthForm";


const LoginForm = ({history})=> {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
    }));

    const onChange = e=> {
        const {value,name} = e.target;

        console.log(value, name)

        dispatch((
            changeField({
                form: 'login',
                key: name,
                value
            })
        ))
    }

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form;
        console.log(username , password)
        dispatch(login({ username, password }));
    };

    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch]);

    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('오류 발생');
            console.log(authError);
            setError('로그인 실패');
            return;
        }
        if (auth) {
            console.log('로그인 성공');
            // dispatch(check());
        }
    }, [auth, authError, dispatch]);

    // useEffect(() => {
    //     if (user) {
    //         history.push('/');
    //     }
    // }, [history, user]);

    return (
        <AuthForm
            type={'login'}
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            />
    )
}

export default LoginForm;