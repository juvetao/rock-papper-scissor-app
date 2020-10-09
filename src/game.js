import React from 'react';
import './game.css';
import Dash from './dash'
import Form from './form'
import PlayerWin from './playerwin'
import ComputerWin from './computerwin'

//An array stored weapons + en extra empty element (in order to initialize index in constructor state as 0)
export const weapons = [
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
                <Form 
                    handleSubmit={this.handleSubmit}
                    value={this.state.roundResult}
                    counter={this.state.counter}
                />
                <Dash
                    handleClick={this.handleClick}
                    counter={this.state.counter}
                    totalRounds={this.state.totalRounds}
                    index={this.state.index}
                    computerSelected={this.state.computerSelected}
                    roundResult={this.state.roundResult}
                    playerScore={this.state.playerScore}
                    computerScore={this.state.computerScore}
                />
        </div>
            
        )
        
    } else if (this.state.counter > 0){
        // To reach the game point for odd number of rounds
        if(this.state.totalRounds%2 === 1){
            if(this.state.playerScore >= Math.ceil(this.state.totalRounds/2)){
                return(
                <PlayerWin 
                    playerScore={this.state.playerScore}
                    totalRounds={this.state.totalRounds}
                    computerScore={this.state.computerScore}
                    restart={this.restart}/>
                )
            
            }else return(
                <Dash
                    handleClick={this.handleClick}
                    counter={this.state.counter}
                    totalRounds={this.state.totalRounds}
                    index={this.state.index}
                    computerSelected={this.state.computerSelected}
                    roundResult={this.state.roundResult}
                    playerScore={this.state.playerScore}
                    computerScore={this.state.computerScore}
                />
                );
    }
    // To reach the game point for even number of rounds 
    else if(this.state.totalRounds%2 === 0){
        if(this.state.playerScore > this.state.totalRounds/2){
            return (
                <PlayerWin
                    playerScore={this.state.playerScore}
                    computerScore={this.state.computerScore}
                    restart={this.restart}/>
                );
        }else if(this.state.computerScore > this.state.totalRounds/2){
            return (
                <ComputerWin
                    playerScore={this.state.playerScore}
                    computerScore={this.state.computerScore}
                    restart={this.restart}/>
                );
        }else return(
            <Dash
                    handleClick={this.handleClick}
                    counter={this.state.counter}
                    totalRounds={this.state.totalRounds}
                    index={this.state.index}
                    computerSelected={this.state.computerSelected}
                    roundResult={this.state.roundResult}
                    playerScore={this.state.playerScore}
                    computerScore={this.state.computerScore}
                />
            );
        }
    } 
    }


}


export default rivals;