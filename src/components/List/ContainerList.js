import React from 'react'
import './CSS/ContainerList.css'
import DoctorCard from './DoctorCard'
import UserCard from './UserCard'

function ContainerList() {
    return (
        <div className='list-container'>
            <DoctorCard />
            <UserCard />
        </div>
    )
}

export default ContainerList