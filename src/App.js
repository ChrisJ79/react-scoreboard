import React, {Component} from 'react';
import './App.css';

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players:{props.totalPlayers}</span> 
    </header>
  );
}


class Counter extends Component {

	state = {
		score: 0
	};

	incrementScore = () => { 
	this.setState( prevState => ({
		score: prevState.score + 1
	 }));
	}

	decrementScore = () => { 
	this.setState( prevState => ({
		score: prevState.score - 1
	}));
	}

	render() {
		return (
		  <div className="counter">
		    <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
		    <span className="counter-score">{ this.state.score }</span>
		    <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
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


class App extends Component {
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
	}

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
        {this.state.players.map( player =>
	        <Player 
	        	name={player.name}
	        	key={player.id.toString}
	        />
        )}

      </div>
    );
  }
}

export default App;
