import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm} from "../../modules/auth";
import {useEffect} from "react";
import AuthForm from "../../components/auth/AuthForm";


const LoginForm = ()=> {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form :auth.login
        })
    )

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

    const onSubmit = e=>{
        e.preventDefault()
        console.log("onSubmit 실행")


    }

    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch]);

    return (
        <AuthForm
            type={'login'}
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            />
    )
}

export default LoginForm;