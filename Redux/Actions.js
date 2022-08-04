/* eslint-disable prettier/prettier */
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_MIDDLE_NAME = 'SET_MIDDLE_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_GENDER = 'SET_GENDER';
export const SET_DATE_BIRTH = 'SET_DATE_BIRTH';
export const SET_MARITAL_STATUS = 'SET_MARITAL_STATUS';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_NIN_NUMBER = 'SET_NIN_NUMBER';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_PROFILE_IMAGE = 'SET_PROFILE_IMAGE';
export const SET_NATIONAL_ID = 'SET_NATIONAL_ID';


export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};
export const setMiddleName = middleName => dispatch => {
    dispatch({
        type: SET_MIDDLE_NAME,
        payload: middleName,
    });
};

