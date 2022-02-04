import { Switch } from 'react-router-dom'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case REGISTER_SUCCESS:
          localStorage.setItem('token', payload.token)
          return {
              ...state,
              ...payload,
              isAuthenticated: true
          }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false 
            }
        
        default:
            return state

    }
}