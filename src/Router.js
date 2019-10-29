import React,{ Component } from 'react'
import { 
    Route,
    Switch,
    BrowserRouter as Router 
} from 'react-router-dom'
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import ProtectedRoute from './utils/ProtectedRoute';
import { connect } from 'react-redux';


class Routerr extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>
                <Switch>
                    <Route
                        path="/login"
                        exact
                        component={Login}
                    />
                    <ProtectedRoute
                        exact
                        isAuthenticated={this.props.auth.isAuthenticated}
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