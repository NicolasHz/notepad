import React, { Component } from 'react';
import Auxiliar from '../auxiliar/auxiliar'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Layout extends Component {

    constructor(props) {
        super();
        this.state = {
            notes: props.notes
        }
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
        setTimeout(() => {
            this.props.onAddNote({ message: "asdasd", id: 2 })
            setTimeout(() => {
                this.props.onAddNote({ message: "ggfgrtre", id: 3 })
            }, 1000);
            setTimeout(() => {
                this.props.onAddNote({ message: "yuiyyui", id: 7 })
                this.props.onAddNote({ message: "jkljhlkjkl", id: 4 })
            }, 3000);
        }, 2000);

    }

    componentWillReceiveProps(newProps) {
        setTimeout(() => {
            this.setState({ notes: newProps.notes })
        }, 1000);
    }

    render() {
        return <Auxiliar>
            {this.props.children}
        </Auxiliar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);