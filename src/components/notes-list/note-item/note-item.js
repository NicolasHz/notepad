import React from 'react';
import * as classes from './note-item.css'
import CSSTransition from "react-transition-group/CSSTransition";

const noteItem = (props) => {
    const animationTiming = {
        enter: props.enterTime || 400,
        exit: props.exitTime || 400
    };
    return (
            <CSSTransition 
                appear={true}
                mountOnEnter
                unmountOnExit
                in={props.in}
                timeout={animationTiming}
                classNames={{
                    appear: props.animation? classes[props.animation.enter] : classes.enter,
                    enter: props.animation? classes[props.animation.enter] : classes.enter,
                    enterActive: props.animation? classes[props.animation.entered] : classes.entered,
                    enterDone: props.animation? classes[props.animation.show] : classes.show,
                    exit: props.animation? classes[props.animation.hide] : classes.hide
                }}>
                <div className={classes.Note}>
                    <p>{props.noteMessage}</p>
                    <span className={classes.Delete} onClick={props.delete}/>
                </div>
            </CSSTransition>

    )
}

export default noteItem;