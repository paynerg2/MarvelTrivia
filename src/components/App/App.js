import React from 'react';
import Question from '../Question/Question';
import { getQuestion, getRandomComic } from './getQuestion';

class App extends React.Component {
    state = {
        score: 0,
        gameIsRunning: false,
        questionList: [],
        currentQuestion: {
            question: 'nothing',
            answerList: [{text: 'Choice 1', isCorrect: false},
            {text: 'Choice 2', isCorrect: false},
            {text: 'Choice 3', isCorrect: true},
            {text: 'Choice 4', isCorrect: false}]
        }
    };

    async componentDidMount() {
        const question = await getQuestion();
        console.log(question);
        const randomComic = await getRandomComic();
        this.setState({ currentQuestion: question});
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