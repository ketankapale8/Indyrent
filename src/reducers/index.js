import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    CLOSE_REQUEST,
    CLOSE_SUCCESS,
    CLOSE_FAILURE
} from '../actions/action-types'

export const registerUser = (data) => ({
    type : REGISTER_SUCCESS,
    data 
})

 export const closeRequest = (data) =>({
    type : CLOSE_SUCCESS,
    data
})

const initialState = () =>({

    data : undefined,
    isStaffRequested : false,
    isregistrationSuccess : [],
    isRegistrationFailed : null,

    // isStaffClosingRequested = false,
    // isStaffClosedSuccess = [],
    // isStaffClosingFailure= null,

    // staffRegistrationRequest

})

export default (state=initialState , action) =>{
    switch (action.type){
        case REGISTER_REQUEST :{
            return {...state , isStaffRequested : true}

        }
        case REGISTER_SUCCESS :{
            return {...state , isregistrationSuccess : action.data}
        }

        case REGISTER_FAILURE :{
            return {...state , isRegistrationFailed : action.error}

        }
        default :{
            return state
        }
    }
}

