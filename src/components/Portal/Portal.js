import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Portal.css'

function Portal() {
    return (
        <div className='portal'>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Portal