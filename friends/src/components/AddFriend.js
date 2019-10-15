import React from 'react'
import { Button } from 'reactstrap'

import { FriendForm } from '../components';

export function AddFriend({setFriends}) {
    const [show, setShow] = React.useState(false)

    return (
        <>
        <Button className='btn-success' onClick={()=>{setShow(true)}}>Add a friend</Button>
        <FriendForm {...{show, setShow, setFriends}} />
        </>
    )
}