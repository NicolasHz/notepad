import React from 'react';
import * as classes from './note-item.css'
import CSSTransition from "react-transition-group/CSSTransition";
import Auxiliar from '../../../hoc/auxiliar/auxiliar';

const noteItem = (props) => {
    const animationTiming = {
        enter: props.enterTime || 400,
        exit: props.exitTime || 400
    };

    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            in={props.in}
            timeout={animationTiming}
            classNames={{
                appear: props.animationNote ? classes[props.animationNote.enter] : classes.enter,
                enter: props.animationNote ? classes[props.animationNote.enter] : classes.enter,
                enterActive: props.animationNote ? classes[props.animationNote.entered] : classes.entered,
                enterDone: props.animationNote ? classes[props.animationNote.show] : classes.show,
                exit: props.animationNote ? classes[props.animationNote.hide] : classes.hide
            }}>
            <Auxiliar>
                <div className={classes.Note}>
                    <p>{props.note.message}</p>
                    <span className={classes.Delete} onClick={props.delete} />
                </div>
                <CSSTransition
                    appear
                    mountOnEnter
                    unmountOnExit
                    in={props.in}
                    timeout={animationTiming}
                    classNames={{
                        appear: props.animationError ? classes[props.animationError.enter] : classes.enter,
                        enter: props.animationError ? classes[props.animationError.enter] : classes.enter,
                        enterActive: props.animationError ? classes[props.animationError.entered] : classes.entered,
                        enterDone: props.animationError ? classes[props.animationError.show] : classes.show,
                        exit: props.animationError ? classes[props.animationError.hide] : classes.hide
                    }}>
                    {props.note.errors.length > 0 && props.showErrors ?
                        <div className={classes.NoteErrors}>
                            {props.note.errors.map((errorMsg, i) => <p key={i}>Error: {errorMsg}</p>)}
                        </div> : <div />}
                </CSSTransition>
            </Auxiliar>
        </CSSTransition>
    )
}


export default noteItem;