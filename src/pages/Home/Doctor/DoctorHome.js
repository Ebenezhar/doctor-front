import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { doctorActionCreators } from '../../../Redux/Action-creators'
import UserListCard from '../../../components/Cards/UserCard/UserListCard'
import { bindActionCreators } from "redux";
import './index.css'
import instance from '../../../API/api';


function DoctorHome() {
    // const [patients, setPatients] = useState()
    const dispatch = useDispatch();
    const patientList = useSelector(state => state.doctorReducer);
    // setPatients(patientList.data);
    console.log(patientList.data);
    const { readPatients } = bindActionCreators(doctorActionCreators, dispatch);
    const id = localStorage.getItem('userId');

    useEffect(() => {
        fetchData(id);
    }, [])
    let handleVisit = async (id) => {
        console.log(id);
        const visit = true;
        const response = await instance.put(`/portal/handle-visit/${id}`, { visit })
        console.log(response);
        readPatients(id)
        // fetchData(id);
        window.location.href = window.location.href;
    }
    const fetchData = async (id) => {
        readPatients(id);
    }
    return (
        <div className='home-body'>
            <div className='home-body-header'>
                Patient List
            </div>
            <div className='home-body-content'>
                {
                    patientList.data ? patientList.data.map((patient) => {
                        return (
                            <UserListCard data={patient} handleVisit={handleVisit} />
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default DoctorHome