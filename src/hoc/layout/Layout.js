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

    constructor(props) {
        super();
        this.state = {
            notes: props.notes
        }
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
        setTimeout(() => {
            this.props.onAddNote({ message: "Eat Pizza", id: 2 })
            setTimeout(() => {
                this.props.onAddNote({ message: "Go to the mall", id: 3 })
            }, 1000);
            setTimeout(() => {
                this.props.onAddNote({ message: "Mow the lawn", id: 7 })
                this.props.onAddNote({ message: "Eat more pizza!!", id: 4 })
                setTimeout(() => {
                    this.props.onAddNote({ message: "Mow the lawn", id: 8 })
                    this.props.onAddNote({ message: "Eat more pizza!!", id: 6 })
                }, 2000);
            }, 3000);
        }, 2000);

    }

    render() {
        return <Auxiliar>
            <div className={classes.Layout}>
                {this.props.children}
                <NotePad/>
                <div className={classes.NotePadButtonWrapper}>
                    <NotePadButton toggleNotePad={()=> {this.props.showNotepad? this.props.onHideNotepad() : this.props.onShowNotepad()}}/>
                </div>
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