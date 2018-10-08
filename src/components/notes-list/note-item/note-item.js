import React from 'react';
import * as classes from './note-item.css'
import CSSTransition from "react-transition-group/CSSTransition";

const noteItem = (props) => {
    const animationTiming = {
        enter: props.enterTime,
        exit: props.exitTime
    };
    return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={props.in}
                timeout={animationTiming}
                classNames={{
                    enter: classes.enter,
                    enterActive: classes.entered,
                    exit: classes.hide
                }}>
                <div className={[classes.Note].join(' ')}>
                    <p>{props.noteMessage}</p>
                    <span className={classes.Delete} onClick={props.delete}/>
                </div>
            </CSSTransition>

    )
}

export default noteItem;