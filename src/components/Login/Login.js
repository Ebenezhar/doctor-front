import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaStethoscope } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
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
        <div className='body-content'>
            <div className='container-box'>
                <div className='title'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heartbeat" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
                        <path d="M3 13h2l2 3l2 -6l1 3h3" />
                    </svg>
                    <h1 className="title-text">Doctor-Patient</h1>
                </div>
                <h1 className='subtopic'> Login As</h1>
                <div className="content">
                    <button onClick={() => handleNavigate("/login/asdoctor")} className='button' >
                        <FaStethoscope />
                        <p className='button-content'>Doctor</p></button>
                    <button onClick={() => handleNavigate("/login/asuser")} className='button'>
                        <HiOutlineUserGroup />
                        <p className='button-content'>User</p></button>
                </div>
                <div className='signup-line'>
                    <p className='signup-head'>Don't have an account? </p>
                    <div className='signup-link'>
                        <Link className='link-tag' to='/DoctorRegister'> Sign up as doctor</Link>
                        <br />
                        <Link className='link-tag' to='/UserRegister'> Sign up as User</Link>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default Login