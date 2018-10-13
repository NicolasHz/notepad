import React from 'react';
import ReactDOM from 'react-dom';
import { NotePad } from './notePad';
import renderer from 'react-test-renderer';

const notesMock = [{
    message: "Remember buy carrots?",
    id: 1,
    errors: []
}];
describe('Notepad works', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <NotePad />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should change with a new note', () => {
        let component = renderer.create(<NotePad showNotepad={true} notes={[]}/>)
        let jsonTree = component.toJSON();
        expect(jsonTree).toMatchSnapshot();
        
        component = renderer.create(<NotePad showNotepad={true} notes={notesMock}/>)
        jsonTree = component.toJSON();
        expect(jsonTree).toMatchSnapshot();
    });
});