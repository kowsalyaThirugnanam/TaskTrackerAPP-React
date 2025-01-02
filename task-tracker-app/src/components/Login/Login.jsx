import React from 'react'
import "./Login.css";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { LoginSchema } from './LoginSchema';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();

    // value - will give the form object
    // action parameter will return set of function
    //  in that resetForm is used to reset the form after submit
    const onSubmit = (value, action) => {
        console.log("submitted");
        console.log(value);
        console.log(action);
        setTimeout(() => {
            // after 2 sec form resetted.
            action.resetForm();
            navigate("/navbar/dashboard")
        }, 2000);

    }
    const { values, errors, touched,isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit

    });

    console.log(values);
    console.log("err==>", errors, touched);

    return (
        <div className='login-form-container'>
            <h3>
                Login
            </h3>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label className='form-label'> Email </label>
                    <br />
                    <input type="email" name="email" id="email" className={(errors.email && touched.email) ? 'error-input' : 'form-input'}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {(errors.email && touched.email) && <p className='error-display'>{errors.email}</p>}
                    <br />
                    <label className='form-label'> Password </label>
                    <br />
                    <input type="password" name="password" id="password" className={(errors.password && touched.password) ? 'error-input' : 'form-input'}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {(errors.password && touched.password) && <p className='error-display'>{errors.password}</p>}
                    <br />
                    <Button variant="outlined" color='white' type="submit" disabled={isSubmitting} className='login-button'>Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
