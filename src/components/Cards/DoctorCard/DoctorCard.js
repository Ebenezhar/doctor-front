import React from 'react'
import './DoctorCard.css'

function DoctorCard({ data }) {
    return (
        <div className='card-body'>
            <div className='user-details-box'>
                <h6 className='name-text'>Name: {`${data.firstName}`}</h6>
                <p className='addl-text'>Age: {`${data.age}`}</p>
                <p className='addl-text'>Gender: {`${data.gender}`}</p>
                <p className='addl-text'>Specialties: {`${data.identity}`}</p>
            </div>
            <div className='action-box'>
                <button className='book-button'>Book</button>
            </div>
        </div>
    )
}

export default DoctorCard