import reducer from './notes.reducer'
import * as types from '../actions/actionTypes.actions'

const initialState = {
    notes: [{
        message: "Remember buy carrots?",
        id: 1,
        errors: []
    }]
}

const noteMock = {
    message: "Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?😁",
    id: 2,
    errors: []
};

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_NOTE', () => {
        expect(
            reducer(initialState, {
                type: types.ADD_NOTE,
                note: noteMock
            })
        ).toEqual({
            notes: [{
                    message: "Remember buy carrots?",
                    id: 1,
                    errors: []
                },
                {
                    message: "Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?😁",
                    id: 2,
                    errors: ['Number of characters shouldn’t exceed 100', 'Shouldn’t contain emojis']
                }
            ]
        })
        expect(
            reducer({
                notes: [{
                        message: "Remember buy carrots?",
                        id: 1,
                        errors: []
                    },
                    {
                        message: "Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?😁",
                        id: 2,
                        errors: ['Number of characters shouldn’t exceed 100', 'Shouldn’t contain emojis']
                    }
                ]
            }, {
                type: types.ADD_NOTE,
                note: {
                    message: "🍊🍊 Remember buy oranges 🍊🍊",
                    id: 3,
                    errors: []
                }
            })
        ).toEqual({
            notes: [{
                    message: "Remember buy carrots?",
                    id: 1,
                    errors: []
                },
                {
                    message: "Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?Remember buy socks?😁",
                    id: 2,
                    errors: ['Number of characters shouldn’t exceed 100', 'Shouldn’t contain emojis']
                },
                {
                    message: "🍊🍊 Remember buy oranges 🍊🍊",
                    id: 3,
                    errors: ['Shouldn’t contain emojis']
                }
            ]
        })
    })
})