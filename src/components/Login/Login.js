import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const handleNavigate = (input) => {
        navigate(input);
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        }
    })
    return (
        <div className='container-box'>
            <div className='title'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heartbeat" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
                    <path d="M3 13h2l2 3l2 -6l1 3h3" />
                </svg>
                <h1c className="title-text">Doctor-Patient</h1c>
            </div>
            <h1 className='subtopic'> Login As</h1>
            <div className="content">
                <button onClick={() => handleNavigate("/login/asdoctor")} className='button' >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon button-icon icon-tabler icon-tabler-stethoscope" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
                        <path d="M8 15a6 6 0 1 0 12 0v-3" />
                        <path d="M11 3v2" />
                        <path d="M6 3v2" />
                        <circle cx="20" cy="10" r="2" />
                    </svg>
                    <p className='button-content'>Doctor</p></button>
                <button onClick={() => handleNavigate("/login/asuser")} className='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon button-icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <p className='button-content'>User</p></button>
            </div>
            <div className='signup-line'>
                <p>Don't have an account? </p>
                <Link className='link-tag' to='/register'> Sign up</Link>
            </div>
        </div>
    )
}

export default Login