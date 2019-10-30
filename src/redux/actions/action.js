import { LOGIN, CLICKED_AIRPORT, CLOSE_MODAL, FETCH_AIRLINES, IS_FETCHING } from "../Constants";
import axios from "axios";
import history from "../../utils/history";

export const loginAction = data => dispatch => {
    const data = "logged in"
    localStorage.setItem("token-coven",data )
    dispatch({
        type: LOGIN
    })
    history.push("/")
}

export const fetchAllFlights = data => dispatch => {
    console.log(data)
    let URL = ''
    if(data.name === 'arrival'){
        URL = `https://${data.username}:${data.password}@opensky-network.org/api/flights/arrival?airport=${data.airport}&begin=${data.begin}&end=${data.end}`
    }
    else {
        URL = `https://${data.username}:${data.password}@opensky-network.org/api/flights/departure?airport=${data.airport}&begin=${data.begin}&end=${data.end}`

    }
    axios.get(URL)
        .then(res => {
            dispatch({
                type: FETCH_AIRLINES,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
} 

export const clickAirport = data => dispatch => {
    dispatch({
        type: CLICKED_AIRPORT,
        payload: data
    })
}

export const clearAirport = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL
    })
}

export const toggleIsFetching = () => dispatch => {
    dispatch({
        type: IS_FETCHING
    })
}