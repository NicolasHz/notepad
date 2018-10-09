import React, { Component } from 'react';
import Auxiliar from '../../hoc/auxiliar/auxiliar'
import * as classes from './Home.css'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Components
import NoteList from '../../components/notes-list/note-list'
// Utility
import { delayedProps } from '../../shared/utility';
class Home extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }

    componentWillReceiveProps(newProps) {
        delayedProps.call(this,newProps,2000)
    }

    render() {
        return (<Auxiliar>
            <NoteList deleteNote={(noteId) => this.props.onRemoveNote(noteId)} notes={this.state.notes} />
        </Auxiliar>)
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