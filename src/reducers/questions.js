import {
    ASK_QUESTION, QUESTION_ERROR
} from '../actions/types'

const initialState = {
    questions: [],
    question: null
}


function questionReducer(state = initialState, action){
    const { type, payload } = action

    switch (type){
        case ASK_QUESTION:
            return {
                ...state,
                questions: [...state.questions, payload]
            }
         case QUESTION_ERROR:
             return {
                 ...state,
                 question: null
             }   
            default:
                return state    
    } 
}

export default questionReducer 