import { TEST_CONSTANT, LOGIN } from "../Constants";
import axios from "axios";
import history from "../../utils/history";

export const testAction = () => dispatch => {
    dispatch({
        type: TEST_CONSTANT,
        payload: 'TEST VALUE'
    })
}

export const loginAction = data => dispatch => {
    console.log("LOGIN DATA", history)
    const data = "logged in"
    localStorage.setItem("token-coven",data )
    dispatch({
        type: LOGIN
    })
    history.push("/")
}

export const fetchAllFlights = () => {
    axios.get()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
} 