import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Components
import NoteList from '../../components/notes-list/note-list'
// Utility
import { delayedProps } from '../../shared/utility';
export class Home extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }

    componentWillReceiveProps(newProps) {
        delayedProps.call(this, newProps, 2000)
    }

    render() {
        return <NoteList showNoteErrors deleteNote={(noteId) => this.props.onRemoveNote(noteId)} notes={this.state.notes} />
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notesState.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveNote: (noteId) => dispatch(actions.removeNote(noteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);