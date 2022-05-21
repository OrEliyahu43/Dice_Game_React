import React from "react";
import './WinnerNote.css'

const WinnerNote = (props) => {
    return (

        <div className="winner-container">

            <h2>
                The winner is: {props.winner}<br></br>
                congrats!
            </h2>
        </div>
    )


}

export default WinnerNote;