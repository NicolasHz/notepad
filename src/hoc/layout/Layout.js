import React, { Component } from 'react';
import Auxiliar from '../auxiliar/auxiliar'
import * as classes from './Layout.css'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Components
import NotePadButton from '../../components/UI/buttons/notePadButton/notePadButton'
import NotePad from '../../components/notepad/notePad'

class Layout extends Component {
    render() {
        return <Auxiliar>
            <div className={classes.Layout}>
                <NotePad/>
                <div className={classes.NotePadButtonWrapper}>
                    <NotePadButton toggleNotePad={()=> {this.props.showNotepad? this.props.onHideNotepad() : this.props.onShowNotepad()}}/>
                </div>
                {this.props.children}
            </div>
        </Auxiliar>
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesState.notes,
        showNotepad: state.UIState.show
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (noteToAdd) => dispatch(actions.addNote(noteToAdd)),
        onRemoveNote: (noteId) => dispatch(actions.removeNote(noteId)),
        onShowNotepad: () => dispatch(actions.showNotePad()),
        onHideNotepad: () => dispatch(actions.hideNotePad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);