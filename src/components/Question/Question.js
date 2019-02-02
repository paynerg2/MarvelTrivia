import React from 'react';
import AnswerChoice from './AnswerChoice/AnswerChoice';
import QuestionHeader from './QuestionHeader/QuestionHeader';

const Question = (props) => {
    const questionHeader = props.questionHeader;
    const answerChoices = props.answerChoices;

    return (
        <div>
            <QuestionHeader text={questionHeader} />
            <AnswerChoice />
            <AnswerChoice isCorrect="true"/>
            <AnswerChoice />
            <AnswerChoice />
        </div>
    );
}

export default Question;