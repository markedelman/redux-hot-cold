import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {makeGuess} from '../actions/index';


export class Form extends React.Component{
  // constructor(props) {
  //   super(props)
  //   this.toggle=this.toggle.bind(this);
  //   this.restartGame=this.restartGame.bind(this);
  //     }
  //     toggle() {console.log("TOGGLE");
  //
  //       this.props.dispatch(toggleInfoModal())
  //     }
  //     restartGame() {
  //
  //       this.props.dispatch(newGame());

constructor(props){
  super(props);
  this.submitGuess=this.submitGuess.bind(this);

}

submitGuess (event, doGuess = document.getElementById('userGuess').value){
event.preventDefault();
this.props.dispatch(makeGuess(doGuess));
console.log('submitGuess');
}

render() {
return (

<div className="guessBox">
    <h3>Make your Guess!</h3>
    <form action="#" onSubmit= {this.submitGuess} >
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

count:'42'

}

}

export default connect(mapStateToProps)(Form);
