import React from 'react';
import Player1 from '../Player1/Player1.js'
import Player2 from '../Player2/Player2.js'
import Monitor from '../Monitor/Monitor.js'
import './TableGame.css'
export default class TableGame extends React.Component {

    state = {
        currentPlayer: 'player1',
        player1Score: 0,
        player2Score: 0,
        player1temp: 0,
        player2temp: 0,
        maxScore: 100,
        gameWinner: ''

    }



    updateScore = () => {
        if (this.state.currentPlayer === 'player1') {
            this.setState({
                player1Score: this.state.player1Score + this.state.player1temp,
                currentPlayer: 'player2',
                player1temp: 0
            })
        }
        else {
            this.setState({
                player2Score: this.state.player2Score + this.state.player2temp,
                currentPlayer: 'player1',
                player2temp: 0
            })
        }

    }

    checkGame = () => {
         


    }

    updateTemp = (tempscore) => {
        if (tempscore === (6 + 6)) {
            this.looseHold();
            return
        }
        if (this.state.currentPlayer === 'player1') {
            this.setState({ player1temp: this.state.player1temp + tempscore })
        }
        else {
            this.setState({ player2temp: this.state.player2temp + tempscore })
        }

    }

    looseHold = () => {
        if (this.state.currentPlayer === 'player1') {
            this.setState({ player1temp: 0, currentPlayer: 'player2' });
        }
        else {
            this.setState({ player2temp: 0, currentPlayer: 'player1' });
        }
    }

    setMaxScore = (score) => {
        this.setState({ maxScore: score })
    }



    render() {
        return (
            <div className='TableGame-container'>
                <Player1 temp={this.state.player1temp} score={this.state.player1Score} />
                <Monitor setMaxScore={this.setMaxScore} updateTemp={this.updateTemp} updateScore={this.checkGame} />
                <Player2 temp={this.state.player2temp} score={this.state.player2Score} />
                {this.state.gameWinner && <h2>the winner is:{this.state.currentPlayer}</h2>}
            </div>

        )
    }
}

