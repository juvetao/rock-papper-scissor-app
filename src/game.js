import React from 'react';
import './game.css';

//An array stored weapons + en extra empty element (in order to initialize index in constructor state as 0)
const weapons = [
    {},
    {
        id: 0,
        name: "rock",
        emojiDec: '✊'
    },
    {
        id: 1,
        name: "paper",
        emojiDec: '✋'
    },
    {
        id: 2,
        name: "scissor",
        emojiDec:'✌'
    }
];

export class rivals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playerSelected : '', //string
            index: 0,
            computerSelected : [], //array
            playerScore : 0,
            computerScore: 0,
            roundResult: '', 
            counter: 0,
            totalRounds: 0,
            finalWinner: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //When select and click one of weapon buttons, both player and computer select their own weapon, and find the result of this round
    handleClick = (event) => {
        //player part
        let playerChoice = event.target.id;
        let tempIndex = weapons.findIndex( weapon => { 
            return weapon.name === event.target.id}
        );
        // console.log(tempIndex);
        this.setState(
            {
                playerSelected: playerChoice,
                index: tempIndex,
            }
        );

        //computer part
        let computerChoice = weapons[Math.floor(Math.random()*3)+1]; // get a random element between index 1 - 3
        this.setState(
            {
                computerSelected: computerChoice,
            }
        );

        //result part
        if (
            (playerChoice === "paper" && computerChoice.name === "rock") ||
            (playerChoice === "rock" && computerChoice.name === "scissor") ||
            (playerChoice === "scissor" && computerChoice.name === "paper")
          ) {

            this.setState(({playerScore, roundResult, counter}) => ({
                playerScore: playerScore + 1,
                roundResult: "Player Win!",
                counter: counter + 1
                }));
          } else if (playerChoice === computerChoice.name) {
            this.setState(
                {
                roundResult: "Draw, try again" // if draw, no new round starts
                }
            );
          } else {
            this.setState(({computerScore, roundResult, counter}) => ({
                computerScore: computerScore + 1,
                roundResult: "Computer Win!",
                counter: counter + 1
                }));
          }
    };

    //submit the total round 
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                totalRounds: event.target.totalInput.value
            }
        );
    }

    //restart the game - re-initiate
    restart = (event) => {
        this.setState(
            {
            playerSelected : '', //string
            index: 0,
            computerSelected : [], //array
            playerScore : 0,
            computerScore: 0,
            roundResult: '', 
            counter: 0,
            totalRounds: 0,
            finalWinner: '',
            }
        )
    }

    render(){
        if(this.state.counter === 0){
        return(
            <div>
                <h1>Game: Rock, Paper and Scissor</h1>
                <form class="set_form"onSubmit={this.handleSubmit}>
                    <label>
                        Enter the total round:
                    <input type="text" name = "totalInput" value={this.state.value} defaultValue="5"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            <div class="weapons">
                <button class="btn_weapon" onClick = {this.handleClick} id = "rock" >
                    Rock
                </button>
                <button class="btn_weapon" onClick = {this.handleClick} id = "paper" >
                    Paper
                </button>
                <button class="btn_weapon" onClick = {this.handleClick} id = "scissor">
                    Scissor
                </button>
            </div>
                <div class="result">
                    <p><b>Round:</b> {this.state.counter} out of {this.state.totalRounds}</p>
                    <p><b>The weapon Player selected:</b> {weapons[this.state.index].emojiDec}</p> 
                    <p><b>The weapon Computer selected:</b> {this.state.computerSelected.emojiDec}</p>
                    <p><b>Result of this round:</b> {this.state.roundResult}</p>
                    <p><b>Player : Computer </b> {this.state.playerScore} : {this.state.computerScore}</p>
                </div>
            </div>
        )
        
    } else if (this.state.counter > 0){
        // To reach the game point for odd number of rounds
        if(this.state.totalRounds%2 === 1){
            if(this.state.playerScore >= Math.ceil(this.state.totalRounds/2)){
                return (
                    <div class="result">
                        <h1>Player Win The Game! <span role="img" aria-label="smiling-eyes">😊</span></h1>
                        <p><b>Player : Computer </b>{this.state.playerScore} : {this.state.computerScore}</p>
                        <button class="btn_restart" onClick = {this.restart}>Restart</button>
                    </div>
                );
            } else if(this.state.computerScore >= Math.ceil(this.state.totalRounds/2)){
                return (
                    <div class="result">
                        <h1>Computer Win The Game! <span role="img" aria-label="cold-sweat">😓 </span></h1>
                        <p><b>Player : Computer </b>{this.state.playerScore} : {this.state.computerScore}</p>
                        <button class="btn_restart" onClick = {this.restart}>Restart</button>
                    </div>
                    );
            }else return(
                <div>
                    <button class="btn_weapon" onClick = {this.handleClick} id = "rock" >
                        Rock
                    </button>
                    <button class="btn_weapon" onClick = {this.handleClick} id = "paper" >
                        Paper
                    </button>
                    <button class="btn_weapon" onClick = {this.handleClick} id = "scissor">
                        Scissor
                    </button>
                    <div class="result">
                        <p><b>Round:</b> {this.state.counter} out of {this.state.totalRounds}</p>
                        <p><b>The weapon Player selected:</b> {weapons[this.state.index].emojiDec}</p> 
                        <p><b>The weapon Computer selected:</b> {this.state.computerSelected.emojiDec}</p>
                        <p><b>Result of this round:</b> {this.state.roundResult}</p>
                        <p><b>Player : Computer </b> {this.state.playerScore} : {this.state.computerScore}</p>
                    </div>
                </div>
                );
    }
    // To reach the game point for even number of rounds 
    else if(this.state.totalRounds%2 === 0){
        if(this.state.playerScore > this.state.totalRounds/2){
            return (
                <div class="result">
                    <h1>Player Win The Game! <span role="img" aria-label="smiling-eyes">😊</span></h1>
                    <p><b>Player : Computer </b> {this.state.playerScore} : {this.state.computerScore}</p>
                    <button class="btn_restart" onClick = {this.restart}>Restart</button>
                </div>
                );
        }else if(this.state.computerScore > this.state.totalRounds/2){
            return (
                <div class="result">
                    <h1>Computer Win The Game! <span role="img" aria-label="cold-sweat">😓 </span></h1>
                    <p><b>Player : Computer </b> {this.state.playerScore} : {this.state.computerScore}</p>
                    <button class="btn_restart" onClick = {this.restart}>Restart</button>
                </div>
                );
        }else return(
            <div>
            <button class="btn_weapon" onClick = {this.handleClick} id = "rock" >
                Rock
            </button>
            <button class="btn_weapon" onClick = {this.handleClick} id = "paper" >
                Paper
            </button>
            <button class="btn_weapon" onClick = {this.handleClick} id = "scissor">
                Scissor
            </button>
                <div class="result">
                    <p><b>Round:</b> {this.state.counter} out of {this.state.totalRounds}</p>
                    <p><b>The weapon Player selected:</b> {weapons[this.state.index].emojiDec}</p> 
                    <p><b>The weapon Computer selected:</b> {this.state.computerSelected.emojiDec}</p>
                    <p><b>Result of this round:</b> {this.state.roundResult}</p>
                    <p><b>Player : Computer </b> {this.state.playerScore} : {this.state.computerScore}</p>
                </div>
            </div>
            );
        }
    } 
    }


}


export default rivals;