import React from 'react'

import { axiosWithAuth } from '../utils'

import { Friend, AddFriend } from '../components'

export function FriendsList(props) {
    const [friends, setFriends] = React.useState([])

    React.useEffect(() => {
        // get friends on mount
        axiosWithAuth().get('/api/friends')
            .then(resp => {
                console.log(resp)
                setFriends(resp.data)
            })
            .catch(console.error)
    },[])

    return (
        <div>
            <h3>Friends</h3>
            <AddFriend setFriends={setFriends} />
            {friends.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>
    )
}