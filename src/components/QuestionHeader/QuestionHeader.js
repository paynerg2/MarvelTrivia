import React from 'react';
import { getQuestion } from './getQuestion';

const QuestionHeader = () => {
    return (
        <h3 className="ui top attached block header">
            {getQuestion()}
        </h3>
    );
}

export default QuestionHeader;