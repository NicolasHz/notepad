import * as actionTypes from '../actions/actionTypes.actions';
import {updateObject} from '../../shared/utility';

const initialState = {
    show: false
}

const showNotepad = (state, action) => {
    const updatedUI = { 
        show: true
     }
     return updateObject( state, updatedUI );
}

const hideNotepad = (state, action) => {
    const updatedUI = { 
        show: false
     }
     return updateObject( state, updatedUI );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SHOW_NOTEPAD: return showNotepad( state, action );
        case actionTypes.HIDE_NOTEPAD: return hideNotepad( state, action );
        default: return state;
    }
};

export default reducer;