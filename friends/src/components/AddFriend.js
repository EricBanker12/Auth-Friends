import React from 'react'
import { FriendForm } from '../components';

export function AddFriend({setFriends}) {
    const [show, setShow] = React.useState(false)

    return (
        <>
        <button onClick={()=>{setShow(true)}}>Add a friend</button>
        <FriendForm {...{show, setShow, setFriends}} />
        </>
    )
}