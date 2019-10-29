import { TEST_CONSTANT } from "../Constants";
import axios from "axios";

export const testAction = () => dispatch => {
    dispatch({
        type: TEST_CONSTANT,
        payload: 'TEST VALUE'
    })
}

export const loginAction = data => dispatch => {
    console.log("LOGIN DATA", data)
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