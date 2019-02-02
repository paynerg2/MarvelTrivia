import React from 'react';
import Question from '../Question/Question';

class App extends React.Component {
    state = {
        score: 0,
        gameIsRunning: false,
        questionList: [],
        currentQuestion: {}
    };

    render() {
        return(
            <div className="ui container">
                <Question questionHeader="Some question"/>
            </div>
        );
    }
}

export default App;