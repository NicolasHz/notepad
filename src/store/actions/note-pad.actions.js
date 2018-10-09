import * as actionTypes from './actionTypes.actions';

export const showNotePad = ( ) => {
    return {
        type: actionTypes.SHOW_NOTEPAD
    };
};

export const hideNotePad = ( ) => {
    return {
        type: actionTypes.HIDE_NOTEPAD
    };
};