import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import {connect} from 'react-redux';
import {newGame, toggleInfoModal} from '../actions/index';


export class App extends React.Component{
	constructor(props) {
		super(props)
		this.toggle=this.toggle.bind(this);
		this.restartGame=this.restartGame.bind(this);
			}
			toggle() {console.log("TOGGLE");

				this.props.dispatch(toggleInfoModal())
			}
			restartGame() {

				this.props.dispatch(newGame());

			}
render(){
return(

<div >
		<button onClick={this.toggle}>
        <h3 className= 'instructions'>WHAT?</h3>
        </button>
              <br/>
                <button onClick={this.restartGame}>

                	<h3 className= 'newGame'>
                  	+NEW GAME</h3>
                  </button>
                  <br/>
                <h1 className= 'hotOrCold'>HOT or COLD</h1>
              <br/>
        <Form />

</div>

);
}
}
function mapStateToProps(state, props) {

return {
count: state.guesses.length,

answer: state.correctAnswer,

guess:document.getElementById('userGuess')

}

}

export default connect()(App);
