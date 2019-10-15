import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

export function Friend(props) {
    const {name, age, email} = props.friend
    
    return (
        <Card className='col-sm-6 p-0'>
            <CardHeader>
                <h4>{name}</h4>
            </CardHeader>
            <CardBody>
                <p>Age: {age}</p>
                <p>E-mail: {email}</p>
            </CardBody>
        </Card>
    )
}