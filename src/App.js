import React, { Component } from 'react';
import './App.css';

const App = () => {
	return(
		<div className="scoreboard">
			<Header />
			<Player />
		</div>
	);
}


const Header = () => {
    return (
      <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
      </header>
    );
}

const Player = () => {
	return(
		<div className="player">
			<span className="player-name">
				Chris
			</span>
			<Counter />
		</div>
	);
}

const Counter = () => {
	return(
		<div className="player">
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">0</span>
				<button className="counter-action increment"> + </button>
			</div>
		</div>
	);
}


export default App;
