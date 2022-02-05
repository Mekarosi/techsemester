import axios from 'axios'
import {
    ASK_QUESTION, QUESTION_ERROR
} from './types'

// Ask Question

export const askQuestion = formData => async dispatch =>{
    const config = {
        headers: {
           'Content-Type' : 'application/json' 
        }
    }

    try {
     const res = await axios.post('https://c-sport.tk/api/question/', formData, config) 

        dispatch({
            type: ASK_QUESTION,
            payload: res.data
        })

      
    } catch (err) {
        dispatch({
            type: QUESTION_ERROR,
            payload: {
                msg: err.response.statusText, status: err.response.status
            }
        })
    }
}