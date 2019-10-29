import React,{ Component } from 'react'
import { 
    Route, 
    Link, 
    Switch,
    BrowserRouter as Router 
} from 'react-router-dom'
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import ProtectedRoute from './utils/ProtectedRoute';
import { connect } from 'react-redux';


class Routerr extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false
        }
    }
    
    componentDidMount(){
        console.log("AUTH", this.props.auth)
    }

    render(){
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        component={Login}
                    />
                    <ProtectedRoute
                        isAuthenticated={this.state.isAuthenticated}
                        exact
                        path="/"
                        component={Dashboard}
                    />
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, {})(Routerr);