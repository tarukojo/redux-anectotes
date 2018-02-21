import React from 'react';


class App extends React.Component {

  vote = (id) => () => {
    this.props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  addData = (event) => {
    event.preventDefault()
    console.log(event.target.anecdote.value)
    this.props.store.dispatch({
      type: 'NEW_ANEC',
      data: {
        content: event.target.anecdote.value,
        id: (100000*Math.random()).toFixed(0),
        votes: 0
      }
    })
    event.target.anecdote.value = ''
  }

  render() {
    const anecdotes = this.props.store.getState()

    anecdotes.sort(function (a, b) {
      return b.votes - a.votes;
    });
    
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addData}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App