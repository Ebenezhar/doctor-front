import { useFormik } from 'formik'
import moment from 'moment';
import ms from 'ms';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import instance from '../../API/api';
import LeaveCard from '../../components/LeaveCard/LeaveCard';
import { doctorActionCreators } from '../../Redux/Action-creators';
import './DoctorAvailability.css'

function DoctorAvailability() {
    const dispatch = useDispatch();
    const doctorDet = useSelector(state => state.doctorReducer);
    console.log(doctorDet.date.notAvailable);
    const { readDoctor } = bindActionCreators(doctorActionCreators, dispatch);
    const [date, setDate] = useState();
    const minSec = ms('10d');
    const today = moment().format('YYYY-MM-DD');
    const nmaxDay = new Date(+new Date(today) + minSec).toDateString();
    const maxDay = moment(nmaxDay).format('YYYY-MM-DD');
    let id = localStorage.getItem('userId');
    useEffect(() => {
        fetchData(id);
    }, [])

    const fetchData = (id) => {
        readDoctor(id);
    }


    const formik = useFormik({
        initialValues: {
            notAvailableDate: '',
            comment: ''
        },
        validate: (values) => {
            let errors = {};
            values.notAvailableDate = date;
            if (!values.notAvailableDate) {
                errors.notAvailableDate = 'Please select a date';
            }
            return errors;
        },
        onSubmit: async (values) => {

            console.log(values);
            const result = await instance.put(`/portal/not-availability/${id}`, values);
            console.log(result);
            readDoctor(id);
        }
    })
    return (
        <div className='avail-body'>
            <div className='avail-body-header'>
                Not Available dates
            </div>
            <div className='avail-body-content'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='date-input-box'>
                        <div className='date-box'>
                            <label className='label-name' for="appointment">Select Date*</label>
                            <input className='value-box'
                                type="date" id="appointment"
                                name="appointment" min={`${today}`}
                                max={`${maxDay}`}
                                placeholder="dd-mm-yyyy"
                                onChange={(e) => setDate(e.target.value)} />
                        </div>
                        {formik.errors.notAvailableDate ? (
                            <span style={{ color: "red" }}>
                                {" "}
                                {formik.errors.notAvailableDate}
                            </span>
                        ) : null}
                        <textarea
                            className='value-box comment'
                            id='comment'
                            placeholder="comments"
                            onChange={formik.handleChange}
                            value={formik.values.comment}
                        />
                        <button className='add-date-button'
                            type={"submit"}
                        >
                            Add Date
                        </button>
                    </div>
                </form>
            </div>
            <div className='leave-table-box'>
                <h2><u>Leave Dates</u></h2>
                {
                    doctorDet.date.notAvailable ? doctorDet.date.notAvailable.map((date) => {
                        return <LeaveCard data={date} />
                    }
                    ) : null
                }
            </div>
        </div>
    )
}

export default DoctorAvailability