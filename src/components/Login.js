import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
//formik does all the "handle" stuff so we dont have to write it
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';



function Login(props) {
    let navigate = useNavigate();
    const initialValues = {
        username: "",
        password: ""
    }

    const onSubmit = (values) => {
        axios.post('http://localhost:4000/login', values)
        .then(res => {
            localStorage.setItem('username', res.data.username)
            localStorage.setItem('id', res.data.id)
            localStorage.setItem('name', res.data.name)
            props.logFunction();
            navigate('/account');
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }

    const validate = (values) => {
        const errors = [];
        if (!values.username) {
            errors.username = "Username Required";
        }
        
        if(!values.password) {
            errors.password = "Password Required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be longer than 7 characters";
        }    
    }

    const formik = useFormik ({
        initialValues,
        onSubmit,
        validate
    })

    return <div className="login">
        
        <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
            <input 
                className="username-window"
                type="text" 
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Username"
            />

            <input 
                className='password-window'
                type="password" 
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
            />
            <button className="login-button" type="submit" disabled={!formik.isValid}>Submit</button>
        </form>
            <Link to="/register" style={{ textDecoration: 'none' }}>
                <h3>Don't have an account? Click here to register.</h3>
            </Link>
        </div>

        <div class="penguin">
        <div class="penguin-head">
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="chin"></div>
            <div class="eye left">
                <div class="eye-lid"></div>
            </div>
            <div class="eye right">
                <div class="eye-lid"></div>
            </div>
            <div class="blush left"></div>
            <div class="blush right"></div>
            <div class="beak top"></div>
            <div class="beak bottom"></div>
        </div>
        <div class="shirt">
            <div></div>
        </div>
        <div class="penguin-body">
            <div class="arm left"></div>
            <div class="arm right"></div>
            <div class="foot left"></div>
            <div class="foot right"></div>
        </div>
    </div>

    </div>;

    

}

export default Login;
