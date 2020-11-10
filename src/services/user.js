import React, {Component} from 'react';

class User extends Component {

    state = {
        name: "",
        email: "",
        jwt: ""
    }

    // constructor(props){
    //     super(props)
    //     setTimeout(() => {
    //         alert("foi...")
    //        this.state = {
    //            name: 'fefe'
    //        }
    //     }, 2000)
    // }

    getName = () => this.state.name

    setName = name => {
        this.state = {
            ...this.state,
            name
        }
    }

    getJwt = () => this.state.jwt

    setJwt = jwt => {
        this.state = {
            ...this.state,
            jwt
        }
    }

    setUser = user => {
        this.state = {...user}
    }

}

export default User