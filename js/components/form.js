import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {makeGuess} from '../actions/index';


export class Form extends React.Component{

render() {
return (

<div className="guessBox">
    <h3>Make your Guess!</h3>
    <form action="#" >
    <input id="userGuess" type="text" placeholder="Enter your Guess"/>
    <button>Guess</button>
    <h3>{this.props.count}</h3>
</form>
</div>

);
}
}

function mapStateToProps(state) {

return {

count:'2'




}

}

export default connect(mapStateToProps)(Form);
