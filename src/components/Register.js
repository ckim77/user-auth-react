import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';

function Register() {
    const initialValues = {
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    const onSubmit = (values) => {
        axios.post('https://localhost:4000/register', values)
        .then(res => {
            console.log(res.data);
        })
    }

    //validation part, pretty much checks for data entry on the front end
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username Required";
        }
        
        if(!values.password) {
            errors.password = "Password Required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be longer than 7 characters";
        }

        if(!values.name) {
            errors.name = "A name must be entered"
        }

        if(!values.confirmPassword) {
            errors.confirmPassword = "Please confirm password"
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password must match";
        }

        return errors;
    }

    const formik = useFormik ({
        initialValues,
        onSubmit,
        validate
    })
  
  return <div>
    <h2>Register</h2>
    <form onSubmit={formik.handleSubmit}>
            <input 
                type="text" 
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Name"
            />

            <input 
                type="text" 
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Username"
            />

            <input 
                type="password" 
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
            />

            <input 
                type="password" 
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Confirm Password"
            />  

            <button type="submit" disabled={!formik.isValid}>Submit</button>
    </form>
    <div>
        {/* this is the validation textcontent */}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
    </div>
  </div>
}

export default Register;
