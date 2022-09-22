import React from 'react'
import './CSS/DoctorCard.css'

function DoctorCard() {
    return (
        <div className='doctor-card-container'>
            <div className='details'>
                <h3>Name</h3>
                <h5>Age</h5>
                <h5>Gender</h5>
                <p>Description</p>
            </div>
            <div className='book-button'>
                <button>Book</button>
            </div>
        </div>
    )
}

export default DoctorCard