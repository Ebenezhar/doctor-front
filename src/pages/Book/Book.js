import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import instance from '../../API/api';
import { userActionCreators } from '../../Redux/Action-creators';
import './Book.css'
import moment from 'moment';
import ms from 'ms';


function Book() {
    const minSec = ms('10d');
    const today = moment().format('YYYY-MM-DD');
    const nmaxDay = new Date(+new Date(today) + minSec).toDateString();
    const maxDay = moment(nmaxDay).format('YYYY-MM-DD');
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const doctorList = useSelector(state => state.userReducer)
    const { bookDoctor } = bindActionCreators(userActionCreators, dispatch);
    const index = doctorList.data.findIndex(obj => obj._id === id);
    const [date, setDate] = useState("");
    const [token, setToken] = useState(false);
    const doc_id = doctorList.data[index]._id;
    const checkAvailability = async () => {
        try {
            const response = await instance.post(`/portal/checkAvailability/${doc_id}`, { date });
            alert(response.data.message);
            if (response.status === 200) {
                setToken(true);
            }
        } catch (error) {
            alert(error.response.data.message);
        }

    }

    const formik = useFormik({
        initialValues: {
            doctorId: doctorList.data[index]._id,
            patientName: '',
            age: '',
            gender: '',
            appoinmentDate: '',
            userId: localStorage.getItem('userId')
        },
        validate: (values) => {
            let errors = {};
            values.appoinmentDate = date;
            if (!values.appoinmentDate) {
                errors.appoinmentDate = 'Please Select Date for Appoinment';
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                bookDoctor(values);
                navigate('/portal/user');
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <div className='book-body'>
            <div className='book-body-header'>
                Book  {`${doctorList.data[index].firstName}`}
            </div>
            <div className='book-body-content'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='book-input-box'>
                        <label className='label-name' for="appointment">Select Date:</label>
                        <input className='value-box' type="date" id="appointment" name="appointment" min={`${today}`} max={`${maxDay}`} placeholder="dd-mm-yyyy" onChange={(e) => setDate(e.target.value)} />
                        <button className='availability-button' type={"button"} onClick={() => checkAvailability(date)}>Check availablity*</button>
                    </div>
                    <p className='book-info'>**Please check the Availability </p>
                    {
                        token ? <><div className='book-input-box'>
                            <label className='label-name' >Patient Name:</label>
                            <input
                                className='value-box'
                                type={"text"}
                                name={"patientName"}
                                onChange={formik.handleChange}
                                value={formik.values.patientName}
                                placeholder="John"
                            /></div>

                            <div className='book-input-box'>
                                <label className='label-name' >Age:</label>
                                <input
                                    className='value-box'
                                    type={"Number"}
                                    name={"age"}
                                    onChange={formik.handleChange}
                                    value={formik.values.age}
                                />
                            </div>
                            <div className='book-input-box'>
                                <label className='label-name'>Gender:</label>
                                <select className='value-box' id="gender" name="gender" onClick={formik.handleChange}>
                                    <option id="gender" name="gender">
                                    </option>
                                    <option id="gender" name="gender" value="Male">
                                        Male
                                    </option>
                                    <option id="gender" name="gender" value="Female">
                                        Female
                                    </option>
                                    <option id="gender" name="gender" value="Other">
                                        Other
                                    </option>
                                </select>
                            </div>
                            <div className='book-input-box submit-box'>
                                <button type={"submit"} className='submit-button'>Submit</button>
                            </div></> : null
                    }

                </form>
            </div>

        </div >
    )
}

export default Book