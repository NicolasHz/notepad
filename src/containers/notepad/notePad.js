import React, { Component } from 'react';
import * as classes from './notePad.css'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import CSSTransition from "react-transition-group/CSSTransition";
// Components
import Auxiliar from '../../hoc/auxiliar/auxiliar';
import NotepadForm from './notepadForm/notepad-form';
import NoteList from '../../components/notes-list/note-list';
// Utility
import { delayedProps } from '../../shared/utility';
import Backdrop from '../../components/UI/backdrop/backdrop';

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
        this.NotePadListRef = React.createRef();
    }

    componentWillReceiveProps(newProps) {
        delayedProps.call(this, newProps, 1000)
    }

    componentDidUpdate(prevState) {
        prevState.notes.length === this.state.notes.length &&
            setTimeout(() => {
                this.NotePadListRef.current && this.NotePadListRef.current.scrollTo({
                    top: this.NotePadListRef.current.scrollHeight,
                    behavior: "smooth"
                });
            }, 800);
    }

    render() {
        console.log(this.props)
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
                    <div className={classes.NotePad} style={{ top: this.props.top || "unset", right: this.props.right || "5vmax;", bottom: this.props.bottom || "7em", left: this.props.left || "unset" }}>
                        <div className={classes.NotePadListWrapper} ref={this.NotePadListRef}>
                            <NoteList showNoteErrors deleteNote={(noteId) => this.props.onRemoveNote(noteId)} notes={this.state.notes} />
                        </div>
                        <div className={classes.NotePadFormWrapper}>
                            <NotepadForm onAddNoteHandler={(note) => { this.props.onAddNote(note) }} />
                        </div>
                    </div>
                </CSSTransition>
                {this.props.showNotepad && <Backdrop clicked={() => { this.props.onHideNotepad() }} />}
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