import * as actionTypes from './actionTypes.actions';

export const addNote = ( note ) => {
    return {
        type: actionTypes.ADD_NOTE,
        note: note
    };
};

export const removeNote = ( noteId ) => {
    return {
        type: actionTypes.REMOVE_NOTE,
        noteId: noteId
    };
};