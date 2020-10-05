import React from 'react';

const weaponList = (props) =>{
           const weapons = [
                {
                    id: 0,
                    name: "rock",
                    emojiDec: '&#9994'
                },
                {
                    id: 1,
                    name: "paper",
                    emojiDec: '&#9995'
                },
                {
                    id: 2,
                    name: "scissor",
                    emojiDec:'&#9996'
                }
            ];
        

    return (
        <div>
            <ul>
                <li>{weapons.map(weapon => weapon.emojiDec)}</li>
            </ul>
        </div>
    )

    

    
}

export default weaponList;



