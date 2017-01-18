import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import App from './app';

const container = props => {
  const newGuess = (guess) => {

    props.dispatch(actions.addGuess(guess));
  };
  return (
    <App/>
  );
};


const mapStateToProps = (state, props) => ({
guess:state,
feedback: state.feedback,
correctAnswer: state.correctAnswer,
showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(App);
};
