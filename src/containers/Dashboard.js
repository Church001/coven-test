import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbarr from '../components/Navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Dashboard extends Component {

    componentDidMount(){
        console.log("PROPS IN DASHBOARD COMPONENT", this.props.basicState)
    }

    render() {
        return (
            <div>
                <Navbarr/> 
                <Container maxWidth="xs=12">
                    <Typography component="div" style={{ backgroundColor: '#ffffff', height: '100vh' }} />
                </Container>
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