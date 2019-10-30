import { LOGIN } from "../Constants";
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
    const URL = `https://${data.username}:${data.password}@opensky-network.org/api/flights/all?begin=${data.begin}&end=${data.end}`
    axios.get(URL)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
} 