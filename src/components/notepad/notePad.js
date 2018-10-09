import React, { Component } from 'react';
import * as classes from './notePad.css'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import CSSTransition from "react-transition-group/CSSTransition";
// Components
import NoteList from '../notes-list/note-list'
import Auxiliar from '../../hoc/auxiliar/auxiliar';
// Utility
import { delayedProps } from '../../shared/utility';
import Backdrop from '../UI/backdrop/backdrop';

class NotePad extends Component {

    constructor(props) {
        super();
        this.animationTiming = {
            enter: props.enterTime || 600,
            exit: props.exitTime || 800
        };
        this.state = {
            show: false,
            notes: []
        }
    }

    componentWillReceiveProps(newProps) {
        delayedProps.call(this, newProps, 1000)
    }

    render() {
        return (
            <Auxiliar>
                <CSSTransition
                    mountOnEnter
                    unmountOnExit
                    in={this.props.showNotepad}
                    timeout={this.animationTiming}
                    classNames={{
                        enter: this.props.animation ? classes[this.props.animation.enter] : classes.enter,
                        enterActive: this.props.animation ? classes[this.props.animation.entered] : classes.entered,
                        enterDone: this.props.animation ? classes[this.props.animation.show] : classes.show,
                        exit: this.props.animation ? classes[this.props.animation.hide] : classes.hide
                    }}>
                    <div className={classes.NotePad}>
                        <NoteList deleteNote={(noteId) => this.props.onRemoveNote(noteId)} notes={this.state.notes} />
                    </div>
                </CSSTransition>
                {this.props.showNotepad && <Backdrop clicked={() => { this.props.onHideNotepad()}}/>}
            </Auxiliar>
        )
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
        onHideNotepad: () => dispatch(actions.hideNotePad())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePad);