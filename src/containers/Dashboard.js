import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbarr from '../components/Navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { fetchAllFlights } from '../redux/actions/action';
import Button from '@material-ui/core/Button';
import MyModal from '../components/Modal';
import MyGrid from '../components/Gridd';


class Dashboard extends Component {

    componentDidMount(){
        let t = 1200000
        let now = new Date();
        // let newNow = now + t
        console.log("NOW", now.getTime())
        console.log("ASSUMED 20 MINUTES AGO", now.setMinutes(20))
        const data = {
            username: 'demo',
            password: 'demo',
            begin: '1517227200',
            end:'1517230800'
        }
        this.props.fetchAllFlights(data)
    }   

    render() {
        const someData = {
            text:"sme sme"
        }
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
                        <h1>Flights</h1>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => alert("IT WS CLICKED")}
                        >
                            Modal
                        </Button>
                        <MyGrid
                            data={this.props.cities}
                        />
                    </Typography>
                    <MyModal
                        data={someData}
                    />
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps, {fetchAllFlights})(Dashboard);