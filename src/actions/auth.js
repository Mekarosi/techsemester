import axios from 'axios'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'

export const register = ({ firstName, lastName, phone, email, password  }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application'
        }
    }
 
    const body = JSON.stringify({ firstName, lastName, phone, email, password })

    try {
        const res = await axios.post('https://c-sport.tk/api/users/auth/register/', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
    }
}