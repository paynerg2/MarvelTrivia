import React from 'react';
import { getQuestion } from './getQuestion';

const QuestionHeader = () => {
    return <div>{getQuestion()}</div>;
}

export default QuestionHeader;