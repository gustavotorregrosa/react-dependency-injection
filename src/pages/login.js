import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import HttpContext from '../context/HttpContext'
import ButtonAppBar from '../components/login/navBar'
import LoginForm from '../components/login/loginForm'
import RegisterForm from '../components/login/registerForm'
import useForceUpdate from 'use-force-update';
import {Button} from '@material-ui/core';

const PageLogin = props => {

    
    const http = useContext(HttpContext)
    const user = useContext(UserContext)

    const forceUpdate = useForceUpdate()

   
    
    useEffect(() => {
        document.addEventListener('rerender-all', () => forceUpdate())
        // setTimeout(() => {
        //     alert('foi 3...')
        //     // forceUpdate()
        //     props.history.push("/1234567")
            
        // }, 6000)
    }, [])

    const changeName = () => {
        user.setName('fefe 2')
        http.setJwt('456')
        forceUpdate()
    }

    return(
        <div>
            <ButtonAppBar />
            <p>ola mundo {http.getJwt()} - {user.getName()}</p>
            <LoginForm {...props} />
            <RegisterForm />
            <Button onClick={() => changeName()} variant="contained" color="primary">Primary</Button>
        </div>
        )

}



export default PageLogin