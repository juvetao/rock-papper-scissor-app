import React from 'react';

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
        }
        this.handleClick = this.handleClick.bind(this);
    }

    //When select and click one of weapon buttons, both player and computer select their own weapon, and find the result of this round
    handleClick = (event, temp) => {
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


    render(props){
        return(
            <div>
            <button onClick = {this.handleClick} id = "rock" >
                Rock
            </button>
            <button onClick = {this.handleClick} id = "paper" >
                Paper
            </button>
            <button onClick = {this.handleClick} id = "scissor">
                Scissor
            </button>
                <p>Round: {this.state.counter+1}</p>
                <p>The weapon Player selected:{weapons[this.state.index].emojiDec}</p> 
                <p>The weapon Computer selected: {this.state.computerSelected.emojiDec}</p>
                <p>Result of this round: {this.state.roundResult}</p>
                <p>Player : Computer</p>
                <p>{this.state.playerScore} : {this.state.computerScore}</p>
            </div>
        )
    }

}


export default rivals;