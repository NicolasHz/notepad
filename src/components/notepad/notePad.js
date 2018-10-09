import React, { Component } from 'react';
import * as classes from './notePad.css'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import CSSTransition from "react-transition-group/CSSTransition";
// Components
import NoteList from '../notes-list/note-list'
class NotePad extends Component {

    constructor(props) {
        super();
        this.animationTiming = {
            enter: props.enterTime || 600,
            exit: props.exitTime || 800
        };
        this.state = { show: false }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true })
        }, 5000);
    }

    render() {
        return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={this.state.show}
                timeout={this.animationTiming}
                classNames={{
                    enter: this.props.animation ? classes[this.props.animation.enter] : classes.enter,
                    enterActive: this.props.animation ? classes[this.props.animation.entered] : classes.entered,
                    enterDone: this.props.animation ? classes[this.props.animation.show] : classes.show,
                    exit: this.props.animation ? classes[this.props.animation.hide] : classes.hide
                }}>
                <div className={classes.NotePad}>
                    <NoteList deleteNote={(noteId) => this.props.onRemoveNote(noteId)} notes={this.props.notes} />
                </div>
            </CSSTransition>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesState.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (noteToAdd) => dispatch(actions.addNote(noteToAdd)),
        onRemoveNote: (noteId) => dispatch(actions.removeNote(noteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePad);