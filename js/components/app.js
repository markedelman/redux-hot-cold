import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './form';
import {connect} from 'react-redux';
import {newGame} from '../actions/index';


export function App(props){
console.log(props);

App.bind(this);

return(

<div >

        <h3 className= 'instructions'>WHAT?</h3>
              <br/>
                <h3 className= 'newGame' onClick={()=>
                  props.dispatch(newGame())}>
                  +NEW GAME</h3>
                  <br/>
                <h1 className= 'hotOrCold'>HOT or COLD</h1>
              <br/>
        <UserInput />

</div>

);
}

export default connect()(App);
