import React from 'react'
import "./Dashboard.css"
import Weapons from './Weapons'

const Dashboard = (props) => {
    return (
        <div>
            <button class="btn_weapon" onClick = {props.handleClick} id = "rock" >
                    Rock
                </button>
                <button class="btn_weapon" onClick = {props.handleClick} id = "paper" >
                    Paper
                </button>
                <button class="btn_weapon" onClick = {props.handleClick} id = "scissor">
                    Scissor
                </button>
                <div class="result">
                    <p><b>Round:</b> {props.counter} out of {props.totalRounds}</p>
                    <p><b>The weapon Player selected:</b> {Weapons[props.index].emojiDec}</p> 
                    <p><b>The weapon Computer selected:</b> {props.computerSelected.emojiDec}</p>
                    <p><b>Result of this round:</b> {props.roundResult}</p>
                    <p><b>Player : Computer </b> {props.playerScore} : {props.computerScore}</p>
                </div>
        </div>
    );
};
export default Dashboard;