import React from 'react';
import Question from '../Question/Question';

class App extends React.Component {
    state = {
        score: 0,
        gameIsRunning: false,
        questionList: [],
        currentQuestion: {
            question: 'Some question',
            answerList: [{text: 'Choice 1', isCorrect: false},
            {text: 'Choice 2', isCorrect: false},
            {text: 'Choice 3', isCorrect: true},
            {text: 'Choice 4', isCorrect: false}]
        }
    };

    handleAnswerClicked = (message) => {
        if(message)
            console.log(message);
    };

    render() {
        return(
            <div className="ui container">
                <Question question={this.state.currentQuestion} onClick={this.handleAnswerClicked}/> 
            </div>
        );
    }
}

export default App;