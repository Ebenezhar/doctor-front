import React from 'react'
import './TokenCard.css'

function TokenCard(props) {
    return (
        <div className='card-body'>
            <div className='user-details-box'>
                <h6 className='name-text'>Patient Name: {`${props.data.patientName}`} </h6>
                <h6 className='name-text'>Token Number: {`${props.data.token}`} </h6>
                <p className='addl-text'>Appointment Date: <strong>{`${props.data.appoinmentDate}`}</strong> </p>
                <p className='addl-text'>Gender: {`${props.data.gender}`}</p>
                <p className='addl-text'>Doctor Name: {`${props.data.docDet.firstName}`}</p>
                <p className='addl-text'>Specialties: {`${props.data.docDet.identity}`}</p>
            </div>
            <div className='action-box'>
                <button onClick={() => props.handledelete(props.data._id)} className='cancel-button'>Cancel Token</button>
            </div>
        </div>
    )
}

export default TokenCard