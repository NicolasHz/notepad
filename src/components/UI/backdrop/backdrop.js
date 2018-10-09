import React from 'react';
import * as classes from './backdrop.css';

const backdrop = (props)=> (<div className={classes.Backdrop} onClick={props.clicked}/>)

export default backdrop;