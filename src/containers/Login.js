import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/action';

class Login extends Component {
    componentDidMount(){
        const { auth, history } = this.props
        console.log("PROPS IN LOGIN COMPONENT", auth)
        console.log("PROPS IN LOGIN COMPONENT", history)
        // this.props.loginAction()
    }

    componentWillReceiveProps(nextProps){
        console.log("NEXTPROPS", nextProps)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default  connect(mapStateToProps, { loginAction })(Login);