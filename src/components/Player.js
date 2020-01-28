import React, { PureComponent } from 'react';
import Counter from './Counter';
import Icon from './Icon';



class Player extends PureComponent {
  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => this.props.removePlayer(this.props.id) }>✖</button>
          { this.props.name }
          <Icon isHighScore={this.props.isHighScore} />
        </span>

        <Counter 
        	score={this.props.score} 
        	changeScore={this.props.changeScore}
        	index={this.props.index}

        />
      </div>
    );
  }
}

export default Player;