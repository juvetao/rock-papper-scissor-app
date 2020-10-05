import React from 'react';
import PlayerDecision from './playerDecision'
import ComputerDecision from './computerDecision'

export class roundResult extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playerScore : 0,
            computerScore: 0,
            roundResult: '',
            counter: 0,
        }
        this.checkRoundWinner = this.checkRoundWinner.bind(this);
    }

    checkRoundWinner = ()=>{
        let player_selection = this.props.playerSelected;//pass the variable from playerDecision
        console.log(player_selection);
        let computer_selection = this.props.computerSelected.name;//pass the variable from computerDecision
        console.log(computer_selection);
        if (
            (player_selection === "paper" && computer_selection === "rock") ||
            (player_selection === "rock" && computer_selection === "scissors") ||
            (player_selection === "scissors" && computer_selection === "paper")
          ) {
            this.setState(({ playerScore, roundResult, counter }) => ({
                playerScore: playerScore + 1,
                roundResult: "Player Win!",
                counter: counter + 1
            }));
          } else if (player_selection === computer_selection) {
            this.setState(({ roundResult }) => ({
                roundResult: "Draw"
            }));
          } else {
            this.setState(({ computerScore, roundResult, counter }) => ({
                computerScore: computerScore + 1,
                roundResult: "Computer Win!",
                counter: counter + 1
            }));
          }
    }

    componentDidMount(){
        this.checkRoundWinner();
    }

    render(){
        return(
            <div>
                <p>Round: {this.state.counter}</p>
                <PlayerDecision></PlayerDecision>
                <ComputerDecision></ComputerDecision>
                <p>Result of this round: {this.state.roundResult}</p>
                <p>Player : Computer</p>
                <p>{this.state.playerScore} : {this.state.computerScore}</p>
            </div>
        )
    }
}

export default roundResult;