import React from "react";
import './Player2.css'

const Player2 = (props) => {

    return (
        <div className="player-container">

        <div className="player-score">
            <h1>PLAYER 2</h1>
            <span className="score">{props.score}</span>
        
        </div>
        <div className="current-score-container">
            <span className="current-label">CURRENT</span>
            <span className="current-score">{props.temp}</span>

        </div>

    </div>
    )


}

export default Player2;