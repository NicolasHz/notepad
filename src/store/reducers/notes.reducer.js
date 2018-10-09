import * as actionTypes from '../actions/actionTypes.actions';
import {updateObject} from '../../shared/utility';

const initialState = {
    notes: [
        {
            message: "Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola Hola ", id:1
        }
    ]
}

const addNote = (state, action) => {
    const updatedNotes = { 
        notes: state.notes.concat(action.note),
     }
     return updateObject( state, updatedNotes );
}

const removeNote = (state, action) => {
    const updatedNotes = { 
        notes: state.notes.filter(note => note.id !== action.noteId)
     }
     return updateObject( state, updatedNotes );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_NOTE: return addNote( state, action );
        case actionTypes.REMOVE_NOTE: return removeNote( state, action );
        default: return state;
    }
};

export default reducer;