import React from 'react'
import { Button } from 'reactstrap'

import { axiosWithAuth } from '../utils'

export function DeleteFriend({friend, setFriends}) {
    
    function deleteFriend() {
        axiosWithAuth().delete(`/api/friends/${friend.id}`)
            .then(resp => {
                console.log(resp)
                setFriends(resp.data)
            })
            .catch(console.error)
    }
    
    return (
        <Button className='btn-sm btn-danger ml-2' onClick={deleteFriend}>Delete</Button>
    )
}