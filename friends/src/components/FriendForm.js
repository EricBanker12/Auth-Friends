import React from 'react'

import { axiosWithAuth } from '../utils'

export function FriendForm(props) {
    const [state, setState] = React.useState({
        name: '',
        age: '',
        email: '',
    })

    function submitHandler(e) {
        e.preventDefault()
        const {name, age, email} = state
        axiosWithAuth().post('/api/friends', {name, age: Number(age), email})
            .then(resp => {
                console.log(resp)
                props.setFriends(resp.data)
            })
            .catch(console.error)
    }

    function changeHAndler(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <h6>Name</h6>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={state.name}
                    onChange={changeHAndler}
                />
            </label>
            <label>
                <h6>Age</h6>
                <input 
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={state.age}
                    onChange={changeHAndler}
                />
            </label>
            <label>
                <h6>E-mail</h6>
                <input 
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    value={state.email}
                    onChange={changeHAndler}
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}