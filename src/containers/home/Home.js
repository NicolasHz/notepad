import React, { Component } from 'react';
import Auxiliar from '../../hoc/auxiliar/auxiliar'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Components
import NoteList from '../../components/notes-list/note-list'

class Home extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }

    componentWillReceiveProps(newProps) {
        setTimeout(() => {
            this.setState({ notes: newProps.notes })
        }, 2000);
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