import React from 'react'


const PlayerWin = (props)=>{
return (
    <div class="result">
        <h1>Player Win The Game! <span role="img" aria-label="smiling-eyes">😊</span></h1>
        <p><b>Player : Computer </b> {props.playerScore} : {props.computerScore}</p>
        <button class="btn_restart" onClick = {props.restart}>Restart</button>
    </div>
    )
}

export default PlayerWin;