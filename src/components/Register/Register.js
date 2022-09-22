import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import instance from '../../API/api';
import './Register.css'

function Register() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            secondName: "",
            email: "",
            age: "",
            gender: '',
            contact: '',
            password: '',
            verpassword: '',
            identity: '',
        },
        validate: (values) => {
            let errors = {};
            if (!values.firstName) {
                errors.firstName = "Please enter your first name";
            }
            if (!values.secondName) {
                errors.secondName = "Please enter your second name";
            }
            if (!values.email) {
                errors.email = "Please enter your email address";
            }
            if (!values.age) {
                errors.age = "Please enter your age";
            }
            if (!values.gender) {
                errors.gender = "Please select your gender";
            }
            if (!values.contact) {
                errors.contact = "Please enter your contact details";
            }
            if (!values.password) {
                errors.password = "Please enter the password";
            }
            if (!values.verpassword) {
                errors.verpassword = "Please enter the password";
            } else if (values.password != values.verpassword) {
                errors.verpassword = "Password does not match";
            }
            return errors;
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                // const register = await axios.post('http://localhost:3001/register', values);
                const register = await instance.post('/register', values);
                console.log(register);
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        // <div className='container'>
        <>
            <div className='title'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heartbeat" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
                    <path d="M3 13h2l2 3l2 -6l1 3h3" />
                </svg>
                <h1 className="title-text">Doctor-Patient</h1>
            </div>
            <h3 className="subtitle-text">Register here </h3>
            <form className='form-container' onSubmit={formik.handleSubmit}>
                <div className='input-boxes'>
                    <label className='label-text'>First Name</label>
                    <input
                        className='input-box'
                        type={"text"}
                        name={"firstName"}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        placeholder="John"
                    />
                    {formik.errors.firstName ? <span style={{ color: "red" }}> {formik.errors.firstName} </span> : null}
                </div>
                <div className='input-boxes'>
                    <label className='label-text'>Second Name</label>
                    <input
                        className='input-box'
                        type={"text"}
                        name={"secondName"}
                        onChange={formik.handleChange}
                        value={formik.values.secondName}
                        placeholder="Wick"
                    />
                    {formik.errors.secondName ? <span style={{ color: "red" }}> {formik.errors.secondName} </span> : null}
                </div>
                <div className='input-boxes'>
                    <label className='label-text'>Email I'd</label>
                    <input
                        className='input-box'
                        type={"email"}
                        name={"email"}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="abc@gmail.com"
                    />
                    {formik.errors.email ? <span style={{ color: "red" }}> {formik.errors.email} </span> : null}
                </div>
                <div className='input-boxes'>
                    <label className='label-text'>Age</label>
                    <input
                        className='input-box'
                        type={"Number"}
                        name={"age"}
                        onChange={formik.handleChange}
                        value={formik.values.age}
                    />
                    {formik.errors.age ? <span style={{ color: "red" }}> {formik.errors.age} </span> : null}
                </div>
                <div className='input-boxes'>
                    <label className='label-text'>Contact</label>
                    <input
                        className='input-box'
                        type={"text"}
                        name={"contact"}
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                    />
                    {formik.errors.contact ? <span style={{ color: "red" }}> {formik.errors.contact} </span> : null}
                </div>
                <div className='select-boxes'>
                    <label className='label-text'>Gender</label>
                    <select className='select-box' id="gender" name="gender" onClick={formik.handleChange}>
                        <option id="gender" name="gender">
                        </option>
                        <option id="gender" name="gender" value="male">
                            Male
                        </option>
                        <option id="gender" name="gender" value="female">
                            Female
                        </option>
                        <option id="gender" name="gender" value="other">
                            Other
                        </option>
                    </select>
                    {formik.errors.gender ? <span style={{ color: "red" }}> {formik.errors.gender} </span> : null}
                </div>
                <div className='input-boxes'>
                    <label className='label-text'>Password</label>
                    <input
                        className='input-box'
                        type={"text"}
                        name={"password"}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <span style={{ color: "red" }}> {formik.errors.password} </span> : null}
                </div>
                <div className='input-boxes'>
                    <label className='label-text'>Verify Password</label>
                    <input
                        className='input-box'
                        type={"text"}
                        name={"verpassword"}
                        onChange={formik.handleChange}
                        value={formik.values.verpassword}
                    />
                    {formik.errors.verpassword ? <span style={{ color: "red" }}> {formik.errors.verpassword} </span> : null}
                </div>
                <div className='person-select-boxes'>
                    <label className='label-text'>Register As</label>
                    <select className='select-box' name="identity" onClick={formik.handleChange}>
                        <option id="identity" name="identity">
                        </option>
                        <option id="identity" name="identity" value="doctor">
                            Doctor
                        </option>
                        <option id="identity" name="identity" value="user">
                            User
                        </option>
                    </select>
                </div>
                <div className='button-container'>
                    <button type={"submit"} className='register-button'>Register</button>
                </div>
            </form>
        </>
        // </div>
    )
}

export default Register