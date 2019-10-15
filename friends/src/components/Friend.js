import React from 'react'

export function Friend(props) {
    const {name, age, email} = props.friend
    
    return (
        <div>
            <h4>{name}</h4>
            <p>Age: {age}</p>
            <p>E-mail: {email}</p>
        </div>
    )
}