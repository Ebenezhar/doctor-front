import React from 'react'
import './LeaveCard.css'

function LeaveCard(props) {
    return (
        <div className='leave-card'>
            <h4 className='date-content'>Date: <span>{`${props.data.notAvailableDate}`}</span></h4>
            <p className='comment-content'><b>Comments:</b> {`${props.data.comment}`}</p>
        </div>
    )
}

export default LeaveCard