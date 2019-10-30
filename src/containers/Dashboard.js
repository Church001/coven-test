import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbarr from '../components/Navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { fetchAllFlights } from '../redux/actions/action';
import MyModal from '../components/Modal';
import MyGrid from '../components/Gridd';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbarr/> 
                <Container maxWidth="xs=12">
                    <Typography 
                        component="div" 
                        style={{ 
                            backgroundColor: '#ffffff', 
                            height: '100vh' 
                        }} >
                        <MyGrid
                            data={this.props.cities}
                        />
                    </Typography>
                    <MyModal/>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        airport: state.reducer
    }
}

export default connect(mapStateToProps, {fetchAllFlights})(Dashboard);