import React, { Component } from 'react'
import { connect } from 'react-redux';

class Login extends Component {
    componentDidMount(){
        console.log("PROPS IN LOGIN COMPONENT", this.props)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

export default  connect(null, {})(Login);