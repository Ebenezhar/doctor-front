import React, { useEffect, useState } from 'react'
import instance from '../../API/api';
import TokenCard from '../../components/Token Card/TokenCard'
import './UserToken.css'

function UserToken() {
    const [tokens, setTokens] = useState();
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        fetchData();
    }, [])
    const handledelete = async (id) => {
        const result = await instance.delete(`/portal/delete-token/${id}`);
        console.log(result);
        fetchData();
        // console.log(id);
    }
    const fetchData = async () => {
        console.log(userId);
        const result = await instance.get(`/portal/read-tokens/${userId}`);
        setTokens(result.data);
    }

    return (
        <div className='token-body'>
            <div className='token-body-header'>
                Booked Tokens
            </div>
            <div className='token-body-content'>
                {
                    tokens ? tokens.map((token, i) => {
                        return (
                            <TokenCard data={token} key={i} handledelete={handledelete} />
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default UserToken