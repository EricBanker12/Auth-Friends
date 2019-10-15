import React from 'react'
import { axiosWithAuth } from '../utils'


export function FriendsList(props) {
    const [friends, setFriends] = React.useState([])

    React.useEffect(() => {
        // get friends on mount
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(console.log)
            .catch(console.error)
    },[])

    return (
        <div>
            {/* map friends */}
            hello world
        </div>
    )
}