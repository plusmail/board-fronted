import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, register} from "../../modules/auth";
import {useEffect} from "react";
import AuthForm from "../../components/auth/AuthForm";


const RegisterForm = () => {
    const dispatch = useDispatch();
    // useSelector는 Store에 있는 state 객체를 바로 접근해서 값을 가져 오는 기능.
    // useSelector({auth})  => auth 는 state는 initialState
    const {form, auth, authError} = useSelector(({auth}) => ({
            form: auth.register,
            auth: auth.auth,
            authError: auth.authError
        })
    )

    const onChange = e => {
        const {value, name} = e.target;
        console.log(value, name)
        dispatch((
            changeField({
                form: 'register',
                key: name,
                value
            })
        ))
    }

    const onSubmit = e => {
        e.preventDefault()
        const {
            mid,
            name,
            password,
            passwordConfirm,
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
            roles} = form;
        //form이 html 회원가입 form에 전송 된 데이터 필드

        console.log("onSubmit 실행", mid,
            name,
            password,
            passwordConfirm,
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
            roles)

        if( password !== passwordConfirm){

            return;
        }
        console.log("4444444444444444444444")
        dispatch(register({mid,
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
            roles}))
    }

    useEffect(() => {
        dispatch(initializeForm('register'))
    }, [dispatch]);

    return (
        <AuthForm
            type={'register'}
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default RegisterForm;