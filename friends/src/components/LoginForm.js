import React from 'react'
import axios from 'axios'

export function LoginForm(props) {
    const [state, setState] = React.useState({
        username: 'Lambda School',
        password: 'i<3Lambd4',
        loading: false,
        error: '',
    })

    function changeHandler(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    function submitHandler(e) {
        e.preventDefault()
        setState({...state, loading: true})
        const {username, password} = state
        axios.post('http://localhost:5000/api/login', {username, password})
            .then(resp => {
                console.log(resp)
                localStorage.setItem('token', resp.data.payload)
                props.history.push('/friends')
            })
            .catch(err => {
                setState({...state, loading: false, error: err.message})
            })
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <h6>Username</h6>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={state.username}
                    onChange={changeHandler}
                />
            </label>
            <label>
                <h6>Password</h6>
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={state.password}
                    onChange={changeHandler}
                />
            </label>
            <button type='submit' disabled={state.loading}>Log-in</button>
            <p>{state.error}</p>
        </form>
    )
}