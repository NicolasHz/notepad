import React, { Component } from 'react';
import { updateObject, checkValidity } from '../../../shared/utility';
import Input from '../../../components/UI/Input/Input';
import * as classes from './notepad-form.css'

class NotepadForm extends Component {
    state = {
        notePadForm: {
            message: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your note here'
                },
                value: '',
                validation: {},// here you could add validation...
                valid: false,
                touched: false,
                label: ''
            }
        },
        formIsValid: true
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.notePadForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.notePadForm[inputIdentifier].validation).isValid,
            touched: true,
            label: checkValidity(event.target.value, this.state.notePadForm[inputIdentifier].validation).message
        });
        const updatedNotepadForm = updateObject(this.state.notePadForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedNotepadForm) {
            formIsValid = updatedNotepadForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ notePadForm: updatedNotepadForm, formIsValid: formIsValid });
    }

    submitNoteHandler = (event) => {
        event.preventDefault()
        const note = {
            message: this.state.notePadForm.message.value.trim(),
            id: Date.now()
        };
        this.props.onAddNoteHandler(note);
        this.setState(prevState => ({
            ...prevState,
            notePadForm: {
                ...prevState.notePadForm,
                message: {
                    ...prevState.notePadForm.message,
                    value: '',
                    valid: false,
                    touched: false,
                }
            },
            formIsValid: false
        }));
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.notePadForm) {
            formElementsArray.push({
                id: key,
                config: this.state.notePadForm[key]
            });
        }
        let form = (
            <form onSubmit={(event) => { this.submitNoteHandler(event) }} className={classes.NotePadForm}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        label={formElement.config.label}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button className={classes.notePadFormBtn} disabled={!this.state.formIsValid}>Add Note</button>
            </form>
        );
        return form;
    }
}

export default NotepadForm;