import React from 'react';
import "./form.css";

const Form = (props) => {
    return (
        <div>
        <h1>Game: Rock, Paper and Scissor</h1>
                <form class="set_form" onSubmit={props.handleSubmit}>
                    <label>
                        Enter the total round:
                    <input type="text" name = "totalInput" value={props.value} defaultValue="5"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        </div>
    )
}

export default Form