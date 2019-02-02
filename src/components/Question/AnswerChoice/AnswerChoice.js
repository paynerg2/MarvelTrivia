import React from 'react';

const AnswerChoice = (props) => {
    return <div className="ui attached segment">This answer choice is {props.isCorrect ? 'correct' : 'incorrect'}</div>;
};

export default AnswerChoice;