import React from 'react'
import { Button } from 'reactstrap'

import { FriendForm } from '../components';

export function EditFriend({friend, setFriends}) {
    const [show, setShow] = React.useState(false)

    return (
        <>
        <Button className='btn-sm btn-info ml-auto' onClick={()=>{setShow(true)}}>Edit</Button>
        <FriendForm {...{show, setShow, edit: friend, setFriends}} />
        </>
    )
}