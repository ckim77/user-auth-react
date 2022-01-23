import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import './Register.css';


function Register() {
    const initialValues = {
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
    }

    const onSubmit = (values) => {
        axios.post('http://localhost:4000/register', values)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('username', res.data[0][0].username)
            localStorage.setItem('id', res.data[0][0].id)
            localStorage.setItem('name', res.data[0][0].name)
        })
        .catch(err => console.log(err.response.data))
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
  
  return <div className="register">
    <h2>Create Your Account</h2>
    <form onSubmit={formik.handleSubmit}>
            <label>Enter your name:
            <input 
                type="text" 
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Name"
            /></label>
            
            <label> Enter your username:
            <input 
                type="text" 
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Username"
            /></label>

            <label> Enter your password:
            <input 
                type="password" 
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
            /></label>

            <label> Confirm your password:
            <input 
                type="password" 
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Confirm Password"
            /></label>
            


    <div className="warning-container">
        {/* this is the validation textcontent */}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
    </div>

        <label> What is the purpose of your account?
        <fieldset>
            <label><input class="inline" type="radio" name="account-type" />Personal Account</label>
            <label><input class="inline" type="radio" name="account-type" />Business Account</label>
            <label><input class="inline" type="checkbox" name="termasandconditions"/>I accept the terms and conditions</label>
        </fieldset>
        </label>

        <fieldset>
            <label>Upload a profile picture: <input name="profilepicture" type="file" /></label>
            <label>Input your age (years): <input name="age" type="number" min="13" max="120" /></label>
            <label> How did you hear about us?
                <select name="about">
                    <option value="">(Select One)</option>
                    <option value="1">Friend</option>
                    <option value="2">Social Media</option>
                    <option value="3">Work</option>
                    <option value="4">Other</option>
                </select>
            </label>
            <label>Provide a bio: 
                <textarea rows="4" cols="50" placeholder="Enter Bio"></textarea>
            </label>
        </fieldset>
        
        <input type="submit" disabled={!formik.isValid} />
    </form>
  </div>
}

export default Register;
