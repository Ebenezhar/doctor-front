import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import DoctorSideBar from '../Side bar/DoctorSideBar'
import './Portal.css'

function DoctorPortal() {
    return (
        <div className='portal'>
            <Navbar />
            <div className='portal-body'>
                <DoctorSideBar />
                <Outlet />
            </div>
        </div>
    )
}

export default DoctorPortal