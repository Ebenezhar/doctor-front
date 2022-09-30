import React from 'react'
import './UserCardList.css'

function UserListCard({ data }) {
    return (
        <div className='card-body'>
            <div className='user-details-box'>
                <h6 className='name-text'>Name:{`${data.firstName}`}</h6>
                <p className='addl-text'>Age:{`${data.age}`}</p>
                <p className='addl-text'>Gender:{`${data.gender}`}</p>
            </div>
            <div className='action-box'>
                <button className='visited-button'>visited</button>
            </div>
        </div>
    )
}

export default UserListCard

