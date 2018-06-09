import React, { Component } from 'react';
import QuestionsChart from './QuestionsInAGame';
import AllQuestionsChart from './AllQuestions';

export default class Stats extends Component {
  constructor() {
    super();
    this.state = {
      games: false,
      game: false
    };
    this.gamesState = this.gamesState.bind(this);
    this.gameState = this.gameState.bind(this);
  }
  gameState() {
    this.setState({ game: !this.state.game });
  }
  gamesState() {
    this.setState({ games: !this.state.games });
  }
  render() {
    const { games, game } = this.state;
    const { gamesState, gameState } = this;
    return (
      <div>
        <button onClick={() => gameState()}>Last game stats on/off</button>
        <button onClick={() => gamesState()}>all games stats on/off</button>
        {game && <QuestionsChart />}
        {games && <AllQuestionsChart />}
      </div>
    );
  }
}