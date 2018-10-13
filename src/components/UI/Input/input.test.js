import React from 'react';
import ReactDOM from 'react-dom';
import input from './input';
import * as classes from './input.css';

const inputMockprops = {
    elementType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'Your note here'
    },
    value: '',
    validation: {},// here you could add validation...
    valid: false,
    touched: false,
    label: '',
    changed: (event) => { }
}

describe('Input works', () => {
    it('renders expected input', () => {
        const div = document.createElement('div');
        const inputElem = input(inputMockprops)
        ReactDOM.render(
            expect(inputElem).toEqual(
                <div className={classes.Input}>
                    <label className={""}>{inputMockprops.label}</label>
                    <input
                        className={""}
                        {...inputMockprops.elementConfig}
                        value=""
                        onChange={inputMockprops.changed} />
                </div>
            )
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
});