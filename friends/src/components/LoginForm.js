import React from 'react'
import axios from 'axios'
import { Form, Label, Input, Button } from 'reactstrap'

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
        <Form className='col-sm-6 mx-auto' onSubmit={submitHandler}>
            <h4>Log-in</h4>
            <Label className='d-block'>
                <h6>Username</h6>
                <Input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={state.username}
                    onChange={changeHandler}
                />
            </Label>
            <Label className='d-block'>
                <h6>Password</h6>
                <Input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={state.password}
                    onChange={changeHandler}
                />
            </Label>
            <Button type='submit' className='btn-info' disabled={state.loading}>Log-in</Button>
            <p className='text-danger'>{state.error}</p>
        </Form>
    )
}