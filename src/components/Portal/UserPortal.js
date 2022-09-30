import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import UserSideBar from '../Side bar/UserSideBar'
import './Portal.css'

function UserPortal() {
    return (
        <div className='portal'>
            <Navbar />
            <div className='portal-body'>
                <UserSideBar />
                <Outlet />
            </div>
        </div>
    )
}

export default UserPortal