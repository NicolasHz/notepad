import React from 'react';
import * as classes from './note-list.css';
import NoteItem from './note-item/note-item'
import TransitionGroup from 'react-transition-group/TransitionGroup';

const noteList = (props) => {
    let items;
    props.notes ? items = props.notes.map(note => 
    <NoteItem delete={() => props.deleteNote(note.id)} enterTime={400} exitTime={800} key={note.id} noteMessage={note.message} />)
    : items = null;

    return (<TransitionGroup className={[classes.NoteList, classes.Swing].join(' ')}>
                {items}
            </TransitionGroup>)
}

export default noteList;