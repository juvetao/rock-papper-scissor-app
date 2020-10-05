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

export class computer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            computerSelected : [], 
        }
        this.computerSelection = this.computerSelection.bind(this);
    }

    computerSelection = () => {
        let weaponSelected = weapons[Math.floor(Math.random()*3)];
        console.log(weaponSelected);
        this.setState(
            {
                computerSelected: weaponSelected
            }
        )
    }

    componentDidMount(){
        this.computerSelection();
    }

    render(){
        return(
            <div>
                <p>The weapon Computer selected: {this.state.computerSelected.emojiDec}</p>
            </div>
        ) 
    }
    
}

export default computer;