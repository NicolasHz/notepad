import * as actions from './note-pad.actions'
import * as types from './actionTypes.actions'

describe('actions', () => {
  it('should create an action to show notepad', () => {
    const expectedAction = {
      type: types.SHOW_NOTEPAD
    }
    expect(actions.showNotePad()).toEqual(expectedAction)
  })
  it('should create an action to hide notepad', () => {
    const expectedAction = {
      type: types.HIDE_NOTEPAD
    }
    expect(actions.hideNotePad()).toEqual(expectedAction)
  })
})