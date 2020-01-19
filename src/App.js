import React from 'react';
import './App.css';

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: 0</span> 
    </header>
  );
}

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}
  
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player">✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Chris",
        id: 1
      },
      {
        name: "Gary",
        id: 2
      },
      {
        name: "Carlos",
        id: 3
      },
      {
        name: "Dean",
        id: 4
      }
    ]
  };


  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={100} 
        />
      </div>
    );
  }
}

export default App;
