import React, { useState } from 'react'
import './Sidebar.css'
import { MdDashboard } from "react-icons/md"
import { AiTwotoneCalendar } from "react-icons/ai"
import { BiNotepad } from "react-icons/bi"
import { Link } from 'react-router-dom';

function DoctorSideBar() {
    const [show, setShow] = useState(true)
    return (
        <main className={` ${show ? 'space-toggle' : null} `}>
            {/* <header className={`header `}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <FaBars />
                </div>
            </header> */}
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='sidebar-nav'>
                    <div >
                        {/* <Link to='/portal/doctor' className='nav-logo'>
                            <div className='nav-logo-icon'><MdDashboard /></div>
                            <span className='nav-logo-name'>Dashboard</span>
                        </Link> */}
                        <div className='nav-list '>
                            <Link to='/portal/doctor' className='nav-link'>
                                <div className='nav-link-icon'><MdDashboard /></div>
                                <span className='nav-link-name'>Dashboard</span>
                            </Link>
                            <Link to='/portal/doctor/availability' className='nav-link'>
                                <span className='nav-link-icon'><AiTwotoneCalendar /></span>
                                <span className='nav-link-name'>Availability</span>
                            </Link>
                            {/* <Link to='/portal/doctor/prescription' className='nav-link'>
                                <span className='nav-link-icon'><BiNotepad /></span>
                                <span className='nav-link-name'>Prescription</span>
                            </Link> */}
                        </div>
                    </div>

                </nav>
            </aside>
        </main>
    )
}

export default DoctorSideBar