import { LOGIN, CLICKED_AIRPORT, CLOSE_MODAL } from "../Constants";
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
    const URL = `https://${data.username}:${data.password}@opensky-network.org/api/flights/arrival?airport=${data.airport}&begin=${data.begin}&end=${data.end}`
    axios.get(URL)
        .then(res => {
            console.log(res.data)
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