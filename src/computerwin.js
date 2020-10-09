import React from 'react';
import "./ComputerWin.css"

const ComputerWin = (props) =>{

    return (
        <div class="result">
            <h1>Computer Win The Game! <span role="img" aria-label="cold-sweat">😓 </span></h1>
            <p><b>Player : Computer </b>{props.playerScore} : {props.computerScore}</p>
            <button class="btn_restart" onClick = {props.restart}>Restart</button>
        </div>
        );
};

export default ComputerWin;

