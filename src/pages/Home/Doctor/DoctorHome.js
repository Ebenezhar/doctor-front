import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { doctorActionCreators } from '../../../Redux/Action-creators'
import UserListCard from '../../../components/Cards/UserCard/UserListCard'
import { bindActionCreators } from "redux";
import './index.css'
import axios from 'axios';

function DoctorHome() {
    const dispatch = useDispatch();
    const patientList = useSelector(state => state.doctorReducer);
    const { readPatients } = bindActionCreators(doctorActionCreators, dispatch);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        // const res = await axios.get(`http://localhost:3001/readpatients`)
        // console.log(res);
        readPatients();
    }
    return (
        <div className='home-body'>
            <div className='home-body-header'>
                Patient List
            </div>
            <div className='home-body-content'>
                {
                    patientList.data.map((patient) => {
                        return (
                            <UserListCard data={patient} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DoctorHome