import reducer from './note-pad.reducer'
import * as types from '../actions/actionTypes.actions'

describe('notepad reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        show: false
      })
  })

  it('should handle SHOW_NOTEPAD', () => {
    expect(
      reducer({}, {
        type: types.SHOW_NOTEPAD
      })
    ).toEqual({
        show: true
      })

    expect(
      reducer(
          {
            show: false
          },
        {
          type: types.SHOW_NOTEPAD
        }
      )
    ).toEqual({
        show: true
    })
  })
  it('should handle HIDE_NOTEPAD', () => {
    expect(
      reducer({}, {
        type: types.HIDE_NOTEPAD
      })
    ).toEqual({
        show: false
      })

    expect(
      reducer(
          {
            show: true
          },
        {
          type: types.HIDE_NOTEPAD
        }
      )
    ).toEqual({
        show: false
    })
  })
})