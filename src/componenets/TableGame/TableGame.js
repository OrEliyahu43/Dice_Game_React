import React from 'react';
import Player1 from '../Player1/Player1.js'
import Player2 from '../Player2/Player2.js'
import Monitor from '../Monitor/Monitor.js'
import './TableGame.css'
import WinnerNote from '../WinnerNote/WinnerNote.js'
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



    updateGame = (score, winner) => {
        if (this.state.currentPlayer === 'player1') {
            this.setState({
                player1Score: score,
                currentPlayer: 'player2',
                player1temp: 0,
                gameWinner: winner ? winner : ''

            })
            console.log(score,winner)
        }
        else {
            this.setState({
                player2Score: score,
                currentPlayer: 'player1',
                player2temp: 0,
                gameWinner: winner ? winner : ''
            })
        }

    }

    checkGame = () => {
        console.log(this.state.maxScore);
        let winner = ''
        if (this.state.currentPlayer === 'player1') {
            const score = this.state.player1Score + this.state.player1temp
            if (score === this.state.maxScore) {
                console.log(this.state.maxScore)
                winner = 'player1';
            }
            if (score > this.state.maxScore) {
                winner = 'player2'
            }
            this.updateGame(score, winner)
        }
        else {
            const score = this.state.player2Score + this.state.player2temp
            if (score === this.state.maxScore) {
                winner = 'player2';
            }
            if (score > this.state.maxScore) {
                winner = 'player1'
            }
            this.updateGame(score, winner)

        }
    }

    updateTemp = (tempscore) => {
        console.log(this.state.maxScore)
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

    setNewGame = () => {
        this.setState({
            currentPlayer: 'player1',
            player1Score: 0,
            player2Score: 0,
            player1temp: 0,
            player2temp: 0,
            maxScore: 100,
            gameWinner: ''

        })
    }


    render() {
        return (
            <div className='TableGame-container'>
                <Player1 temp={this.state.player1temp} score={this.state.player1Score} />
                <Monitor newGame={this.setNewGame} setMaxScore={this.setMaxScore} updateTemp={this.updateTemp} check={this.checkGame} />
                <Player2 temp={this.state.player2temp} score={this.state.player2Score} />
                {this.state.gameWinner && <WinnerNote winner={this.state.currentPlayer} />}


            </div>

        )
    }
}

// 

