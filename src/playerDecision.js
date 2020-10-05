import React from 'react';


const weapons = [
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

export class player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // playerScore : 0,
            playerSelected : "rock", //emojiDec
            index: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = (event, temp) => {
        let playerChoice = event.target.id;
        
        let tempIndex = weapons.findIndex( weapon => { 
            return weapon.name === event.target.id}
        );
        console.log(weapons.length);

        this.setState(
            {
                playerSelected: playerChoice,
                index: tempIndex,
            }
        );
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
                <p>The weapon Player selected:{weapons[this.state.index].emojiDec}</p> 
            
            </div>
        )
    }

}

export default player;