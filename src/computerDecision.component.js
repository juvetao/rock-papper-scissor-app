import React from 'react';
import weapons from './weapons.component';

export class computer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // computerScore : 0,
            computerSelected : null, 
        }
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
                <p>The weapon Computer selected: {this.props.emojiDec}</p>
            </div>
        ) 
    }
    
}

export default computer;