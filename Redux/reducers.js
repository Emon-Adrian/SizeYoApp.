/* eslint-disable prettier/prettier */
import * as all from './actions';
//import *  from './actions';


const initialState = {
    username:'',
    middlename:'',
    lastname:'',
    email:'',
    gender:'',
    dob:'',
    maritalstatus:'',
    country:'',
    nin:'',
    phone:'',
    password:'',
    address:'',
    profileImage:'',
    nationalID:'',
};

function userReducer(state = initialState, action){
    switch (action.type){
        case all.SET_USER_NAME:
            return {...state, username:action.payload};
        case all.SET_MIDDLE_NAME:
            return {...state, middlename:action.payload};    
            default:
                return state;
    }
};

export default userReducer;