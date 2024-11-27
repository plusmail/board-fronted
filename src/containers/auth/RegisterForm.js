import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm} from "../../modules/auth";
import {useEffect} from "react";
import AuthForm from "../../components/auth/AuthForm";


const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
            form: auth.register
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
        console.log("onSubmit 실행")


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