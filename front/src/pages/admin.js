import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import HttpContext from '../context/HttpContext'
import LogoutDialog from '../components/logoutDialog'
import ButtonAppBar from '../components/navBar'

const Admin = props => {

    const http = useContext(HttpContext)
    const user = useContext(UserContext)

    useEffect(() => {
        if(!user.getName()){
            props.history.push('/')
        }
    }, [])

    return(
        <div>
            <ButtonAppBar />
            <p>admin {http.getJwt()} - {user.getName()}</p>
            <LogoutDialog {...props} />
           
        </div>
    )
}


export default Admin