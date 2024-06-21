import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/auth.slice";
import classes from './Login.module.css';

const LoginForm = (props) => {

    const loginFormFormik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        onSubmit: function (values) {
            props.onSubmit(values);
        },
        validate: function (values) {
            const errors = {};

            if (!values.login) {
                errors.login = 'Login required';
            }

            if (!values.password) {
                errors.password = 'password required';
            }

            return errors;
        }
    });

    return (
        <form onSubmit={loginFormFormik.handleSubmit}>
            <div>
                <label htmlFor="login">Email address</label>
                <input id='login' name='login' type="email" onChange={loginFormFormik.handleChange}
                    value={loginFormFormik.values.login} onBlur={loginFormFormik.handleBlur} />
                {loginFormFormik.touched.login && loginFormFormik.errors.login ? <div>{loginFormFormik.errors.login}</div> : null}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type="password" onChange={loginFormFormik.handleChange} value={loginFormFormik.values.password} onBlur={loginFormFormik.handleBlur} />
                {loginFormFormik.touched.password && loginFormFormik.errors.password ? <div>{loginFormFormik.errors.password}</div> : null}
            </div>
            <div>
                <span>Remember me: </span><input id='rememberMe' name='rememberMe' type="checkbox" onChange={loginFormFormik.handleChange} checked={loginFormFormik.values.rememberMe} onBlur={loginFormFormik.handleBlur} />
            </div>
            <div><button type="submit">Log In</button></div>
        </form>
    );
}

const Login = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            navigate(state?.path || "/");
        }
    });

    function handleLoginFormSubmit(values) {
        dispatch(loginAction({ email: values.login, password: values.password, rememberMe: values.rememberMe }));
    }

    return (
        <div className={classes.loginPageContainer}>
            <h1>Login</h1>
            <LoginForm onSubmit={handleLoginFormSubmit} />
        </div>
    );
}

export default Login;