import React from 'react';
import AnswerChoice from './AnswerChoice/AnswerChoice';
import QuestionHeader from './QuestionHeader/QuestionHeader';

const Question = (props) => {
    console.log(props);

    const handleAnswerClicked = (message) => {
        props.onClick(message);
    };
    let key = 0;
    const renderedAnswerList = props.question.answerList.map(answer => {
        key++;
        return <AnswerChoice isCorrect={answer.isCorrect} text={answer.text} key={key} onClick={handleAnswerClicked}/>;
    });
    return (
        <div>
            <QuestionHeader text='question' />
            <div>{renderedAnswerList}</div>
        </div>
    );
}

export default Question;