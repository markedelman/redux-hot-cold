import React from 'react';
import ReactDOM from 'react-dom';

export default function UserInput (){

return (

<div className="guessBox">
    <h3>Make your Guess!</h3>
    <form action="#">
    <input type="text" placeholder="Enter your Guess"/>
    <button>Guess</button>
    <h3>Guess number #</h3>
</form>
</div>

);
}
