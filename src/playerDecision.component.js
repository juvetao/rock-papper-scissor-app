import React from 'react';
import weapons from './weapons.component';

export class player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // playerScore : 0,
            playerSelected : "", //emojiDec
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = (event, temp) => {
        let playerChoice = event.target.weaponname;
        this.setState(
            {
                playerSelected: playerChoice
            }
        );

    };

    render(props){
        return(
            <div>
            <button onClick = {this.handleClick} weaponname = "rock">
                {/* {weapons[0].emojiDec} */}rock
            </button>
            <button onClick = {this.handleClick} weaponname = "paper">
                {/* {weapons[1].emojiDec} */}paper
            </button>
            <button onClick = {this.handleClick} weaponname = "scissor">
                {/* {weapons[2].emojiDec} */}scissor
            </button>
            <p>The weapon Player selected: {this.state.weaponname}</p>
            </div>
        )
    }

}

export default player;