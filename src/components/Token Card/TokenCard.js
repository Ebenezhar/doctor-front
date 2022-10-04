import React from 'react'
import './TokenCard.css'

function TokenCard({ data }) {
    console.log(data);
    return (
        <div className='card-body'>
            <div className='user-details-box'>
                <h6 className='name-text'>Patient Name: {`${data.patientName}`} </h6>
                <h6 className='name-text'>Token Number: {`${data.token}`} </h6>
                <p className='addl-text'>Appointment Date: <strong>{`${data.appoinmentDate}`}</strong> </p>
                <p className='addl-text'>Gender: {`${data.gender}`}</p>
                <p className='addl-text'>Doctor Name: {`${data.docDet.firstName}`}</p>
                <p className='addl-text'>Specialties: {`${data.docDet.identity}`}</p>
            </div>
            <div className='action-box'>
                <button className='cancel-button'>Cancel Token</button>
            </div>
        </div>
    )
}

export default TokenCard