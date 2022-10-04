import React from 'react'
import './UserCardList.css'

function UserListCard(props) {
    return (
        <div className='card-body'>
            <div className='user-details-box'>
                <h6 className='name-text'>Name:{`${props.data.patientName}`}</h6>
                <p className='addl-text'>Age:{`${props.data.age}`}</p>
                <p className='addl-text'>Gender:{`${props.data.gender}`}</p>
            </div>
            <div className='action-box'>
                <button className='visited-button' onClick={() => props.handleVisit(props.data._id)}>visited</button>
            </div>
        </div>
    )
}

export default UserListCard

