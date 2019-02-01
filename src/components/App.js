import React from 'react';
import QuestionHeader from './QuestionHeader/QuestionHeader';
import AnswerChoice from './AnswerChoice/AnswerChoice';

class App extends React.Component {
    render() {
        return(
            <div className="ui container">
                <QuestionHeader />
                <AnswerChoice />
                <AnswerChoice />
                <AnswerChoice />
                <AnswerChoice />
            </div>
        );
    }
}

export default App;