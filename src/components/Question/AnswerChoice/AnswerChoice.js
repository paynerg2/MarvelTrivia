import React from 'react';

const AnswerChoice = (props) => {
    const handleAnswerClicked = () => {
        props.onClick(props.isCorrect);
    };
    return <div className="ui attached segment" onClick={handleAnswerClicked}>{props.text}</div>;
};

export default AnswerChoice;