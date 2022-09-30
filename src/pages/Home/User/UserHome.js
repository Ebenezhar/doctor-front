import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import React, { useEffect } from 'react';
import { userActionCreators } from '../../../Redux/Action-creators'
import DoctorCard from '../../../components/Cards/DoctorCard/DoctorCard'
import './index.css'

function UserHome() {
    const dispatch = useDispatch();
    const doctorList = useSelector(state => state.userReducer);
    console.log(doctorList);
    const { readDoctors } = bindActionCreators(userActionCreators, dispatch);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        readDoctors()
        // const res = await axios.get(`http://localhost:3001/read/doctors`)
        // console.log(res);
    }

    return (
        <div className='home-body'>
            <div className='home-body-header'>
                Doctor List
            </div>
            <div className='home-body-content'>
                {
                    doctorList.data.map((doctor) => {
                        return (
                            <DoctorCard data={doctor} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserHome