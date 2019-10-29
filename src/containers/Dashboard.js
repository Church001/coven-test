import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component {

    componentDidMount(){
        console.log("PROPS IN DASHBOARD COMPONENT", this.props.basicState)
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        basicState: state.reducer
    }
}

export default connect(mapStateToProps, {})(Dashboard);