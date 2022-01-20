import React from 'react';
import {useFormik} from 'formik';

function Login() {
    const initialValues = {
        username: "",
        password: "",
    }

    const onSubmit = (values) => {
        console.log('submit clicked');
    }

    const validate = (values) => {
        console.log('validation')
    }
    
    return <div>Login</div>;
}

export default Login;
