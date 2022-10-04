import React from 'react'
import { useFormik } from 'formik';
import './LoginForm.css'
import { Link, useNavigate } from 'react-router-dom';
import instance from '../../API/api';


function DoctorLogin() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values) => {
            let errors = {};
            if (!values.email) {
                errors.email = "Please enter your email address";
            }
            if (!values.password) {
                errors.password = "Please enter the password";
            }
            return errors;
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                console.log(values);
                const login = await instance.post('/login/doctor', values);
                console.log("login", login);
                if (login) {
                    localStorage.setItem('token', login.data.token);
                    localStorage.setItem('logged_person', login.data.name);
                    localStorage.setItem('userId', login.data.id);
                }
                alert(login.data.message);
                navigate('/portal/doctor')
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <div className='body-content'>
            <div className='container-box'>
                <div className='title'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heartbeat" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
                        <path d="M3 13h2l2 3l2 -6l1 3h3" />
                    </svg>
                    <h1 className="title-text">Doctor-Patient</h1>
                </div>
                <h2 className='subtopic'> Login As Doctor</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className='login-form'>
                        <label className='label-text'>Email</label>
                        <input
                            className='input-box'
                            type={"text"}
                            name={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="abc@example.com"
                        />
                        {formik.errors.email ? <span style={{ color: "red" }}> {formik.errors.email} </span> : null}
                        <label className='label-text'>Password</label>
                        <input
                            className='input-box'
                            type={"text"}
                            name={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="**********"
                        />
                        {formik.errors.password ? <span style={{ color: "red" }}> {formik.errors.password} </span> : null}
                        {/* <button className="eye-logo"  >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                        </svg>
                    </button> */}
                        <div className="forgot-tag">
                            <p className='forgot-password'>
                                <button
                                // to="reset/forgotPassword"
                                >
                                    {" "}
                                    Forgot password ?
                                </button>
                            </p>
                        </div>
                        {/* <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label for="rememberMe">Remember me</label> */}

                    </div>
                    <div className='button-container-box'>
                        <button className='login-button'>Login</button>
                    </div>
                </form>

            </div>
        </div>

        // <div>
        //     <form onSubmit={formik.handleSubmit}>
        //         <div>
        //             <label>Email</label>
        //             <input
        //                 type={"text"}
        //                 name={"email"}
        //                 value={formik.values.email}
        //                 onChange={formik.handleChange}
        //                 placeholder="abc@example.com"
        //             />
        //             <label>Password</label>
        //             <input
        //                 type={"text"}
        //                 name={"password"}
        //                 value={formik.values.password}
        //                 onChange={formik.handleChange}
        //                 placeholder="**********"
        //             />
        //         </div>
        //         <button>Login</button>
        //     </form>
        // </div>
    )
}

export default DoctorLogin