import React, {Component} from 'react';
import Header from './components/Header.js';
import Player from './components/Player.js';
import './App.css';


class App extends Component {
	state = {
	    players: [
      {
        name: "Chris",
        score: 0,
        id: 1
      },
      {
        name: "Gary",
        score: 0,
        id: 2
      },
      {
        name: "Carlos",
        score: 0,
        id: 3
      },
      {
        name: "Dean",
        score: 0,
        id: 4
      }
    ]
	}


	handleScoreChange = (index, change) => { 
		this.setState( prevState => ({
			score: prevState.players[index].score += change
		}));
	}

	handleRemovePlayer = (id) => {
		this.setState( prevState => {
			return {
				players: prevState.players.filter(p => p.id !== id)
			};
		});
	}


	render() {
		return (
		  <div className="scoreboard">
		    <Header 
		      title="Scoreboard" 
		      totalPlayers={this.state.players.length} 
		    />
		    {this.state.players.map( (player, index) =>
		        <Player 
		        	name={player.name}
		        	score={player.score}
		        	id={player.id}
		        	key={player.id.toString()}
		        	index={index}
		        	removePlayer={this.handleRemovePlayer}
		        	changeScore={this.handleScoreChange}

		        />
		    )}

		  </div>
		);
	}
}

export default App;
