import React from 'react'
import { useNavigate } from 'react-router-dom';
import './DoctorCard.css'

function DoctorCard({ data }) {
    const navigate = useNavigate();
    const handleView = (data) => {
        try {
            navigate(`/portal/user/book/${data._id}`)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='card-body'>
            <div className='user-details-box'>
                <h6 className='name-text'>Name: {`${data.firstName}`}</h6>
                <p className='addl-text'>Age: {`${data.age}`}</p>
                <p className='addl-text'>Gender: {`${data.gender}`}</p>
                <p className='addl-text'>Specialties: {`${data.identity}`}</p>
            </div>
            <div className='action-box'>
                <button className='book-button' onClick={() => handleView(data)}>Book</button>
            </div>
        </div>
    )
}

export default DoctorCard