import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function ProtectedRoute({component: Component, render: Render, ...rest}) {
    return(
        <Route {...rest} render={props => {
            if (localStorage.getItem('token')) {
                if (Component) return <Component {...props} />
                if (Render) return Render(props)
            }
            return <Redirect to='/' />
        }} />
    )
}