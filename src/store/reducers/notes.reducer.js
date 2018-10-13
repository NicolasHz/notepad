import * as actionTypes from '../actions/actionTypes.actions';
import {
    updateObject,
    capitalizeFirstLetter,
    hasErrors
} from '../../shared/utility';

const initialState = {
    notes: [{
        message: "Remember buy carrots?",
        id: 1,
        errors: []
    }]
}

const addNote = (state, action) => {
    const newNote = {
        message: capitalizeFirstLetter(action.note.message),
        id: action.note.id,
        errors: hasErrors(
            action.note.message, {
                required: true,
                maxLength:100,
                containEmoji: true
            })
    }
    const updatedNotes = {
        notes: state.notes.concat(newNote),
    }
    return updateObject(state, updatedNotes);
}

const removeNote = (state, action) => {
    const updatedNotes = {
        notes: state.notes.filter(note => note.id !== action.noteId)
    }
    return updateObject(state, updatedNotes);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return addNote(state, action);
        case actionTypes.REMOVE_NOTE:
            return removeNote(state, action);
        default:
            return state;
    }
};

export default reducer;