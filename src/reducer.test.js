import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe.skip('anecdote reducer', () => {
    
    const anecdotesAtStart = [
        {
            content: 'If it hurts, do it more often',
            id: 1,
            votes: 0
        },
        {   content: 'Adding manpower to a late software project makes it later!',
            id: 2,
            votes: 0
        }
    ]

    it('vote for first', () => {
        const action = {
          type: 'VOTE',
          data: 1
        }

        const state = anecdotesAtStart

        deepFreeze(state)
        const newState = counterReducer(state, action)
        const votesList = newState.map(anecdote=> anecdote.votes)
        expect(votesList).toContain(1)
    })
})
