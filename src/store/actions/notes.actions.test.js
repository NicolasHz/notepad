import * as actions from './notes.actions'
import * as types from './actionTypes.actions'
const noteMock = {
    message: "Remember buy carrots?",
    id: 1,
    errors: []
}
describe('actions', () => {
    it('should create an action to add a note', () => {
        const expectedAction = {
            type: types.ADD_NOTE,
            note: noteMock
        }
        expect(actions.addNote(noteMock)).toEqual(expectedAction)
    })
    it('should create an action to remove a note', () => {
        const expectedAction = {
            type: types.REMOVE_NOTE,
            noteId: noteMock.id
        }
        expect(actions.removeNote(noteMock.id)).toEqual(expectedAction)
    })
})
