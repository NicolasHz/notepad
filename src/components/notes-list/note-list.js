import React from 'react';
import * as classes from './note-list.css';
import NoteItem from './note-item/note-item'
import TransitionGroup from 'react-transition-group/TransitionGroup';

const noteList = (props) => {
    let items;
    let listItemsClasses = [classes.NoteList]
    props.animationRoot ? listItemsClasses.push(classes[props.animationRoot]) : listItemsClasses.push(classes.Swing);
    props.notes ?
        items = props.notes.map(note =>
            <NoteItem delete={() =>
                props.deleteNote(note.id)}
                animationNote={props.noteAnimation}
                animationError={props.noteErrorAnimation}
                enterTime={props.enterTime}
                exitTime={props.exitTime}
                key={note.id}
                showErrors={props.showNoteErrors}
                note={note} />)
        : items = null;

    return (<TransitionGroup className={listItemsClasses.join(' ')}>
        {items}
    </TransitionGroup>)
}

export default noteList;