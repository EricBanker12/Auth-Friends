import React from 'react'
import { Form, Label, Input, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

import { axiosWithAuth } from '../utils'

export function FriendForm(props) {
    const [state, setState] = React.useState(() => {
        if (props.edit) return {
            ...props.edit,
            age: String(props.edit.age)
        }
        return {
            name: '',
            age: '',
            email: '',
        }
    })

    function submitHandler(e) {
        e.preventDefault()
        const {name, age, email} = state
        if (props.edit) {
            axiosWithAuth().put(`/api/friends/${props.edit.id}`, {name, age: Number(age), email})
            .then(resp => {
                console.log(resp)
                props.setFriends(resp.data)
                props.setShow(false)
            })
            .catch(console.error)
        }
        else {
            axiosWithAuth().post('/api/friends', {name, age: Number(age), email})
                .then(resp => {
                    console.log(resp)
                    props.setFriends(resp.data)
                    props.setShow(false)
                })
                .catch(console.error)
        }
    }

    function changeHAndler(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function cancelHandler(e) {
        e.preventDefault()
        props.setShow(false)
    }

    return (
        <Modal isOpen={props.show}>
            <Form onSubmit={submitHandler}>
                <ModalHeader>
                    {props.edit?'Edit':'Add'} a Friend
                </ModalHeader>
                <ModalBody>
                    <Label className='d-block'>
                        <h6>Name</h6>
                        <Input 
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={state.name}
                            onChange={changeHAndler}
                        />
                    </Label>
                    <Label className='d-block'>
                        <h6>Age</h6>
                        <Input 
                            type='number'
                            name='age'
                            placeholder='Age'
                            value={state.age}
                            onChange={changeHAndler}
                        />
                    </Label>
                    <Label className='d-block'>
                        <h6>E-mail</h6>
                        <Input 
                            type='email'
                            name='email'
                            placeholder='E-mail'
                            value={state.email}
                            onChange={changeHAndler}
                        />
                    </Label>
                </ModalBody>
                <ModalFooter>
                    <Button type='submit' className={props.edit?'btn-info':'btn-success'}>{props.edit?'Edit':'Add'} friend</Button>
                    <Button  type='button' className='btn-danger' onClick={cancelHandler}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
    )
}