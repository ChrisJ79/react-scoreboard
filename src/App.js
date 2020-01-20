import React, {Component} from 'react';
import Header from './components/Header.js';
import Player from './components/Player.js';
import './App.css';


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
		    {this.state.players.map( player =>
		        <Player 
		        	name={player.name}
		        	key={player.id.toString}
		        	id={player.id}
		        	removePlayer={this.handleRemovePlayer}
		        />
		    )}

		  </div>
		);
	}
}

export default App;
