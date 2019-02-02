import React from 'react';

const QuestionHeader = (props) => {

    return (
        <div>
            <h3 className="ui top attached block header">
                {props.text}
            </h3>
        </div>
    );
}

export default QuestionHeader;