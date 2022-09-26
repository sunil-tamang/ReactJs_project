import React, {useState, useEffect} from 'react'
import Start from './Start'
import Quiz from './Quiz'


function MockTestList(props) {
    const [start, setStart] = useState(false);

    const [quiz, setQuiz] = useState([
     
        {
            id:0,
            Serial_number: 0,
            name:'Mocktest 1',
            // action: {props},
            score: {},
            category: 'medical',
            questions:[
                        {
                            questionText: 'What is the capital of France?',
                            questionid: 0,
                            Options: [
                                        { answerText: 'New York', isCorrect: false },
                                        { answerText: 'London', isCorrect: false },
                                        { answerText: 'Paris', isCorrect: true },
                                        { answerText: 'Dublin', isCorrect: false },
                                    ],
                        }
                      ],
                       
        },
        {
            id:0,
            Serial_number: 0,
            name:'Mocktest 1',
            // action: {props},
            score: {},
            category: 'medical',
            questions:[
                        {
                            questionText: 'What is the capital of France?',
                            questionid: 0,
                            Options: [
                                        { answerText: 'New York', isCorrect: false },
                                        { answerText: 'London', isCorrect: false },
                                        { answerText: 'Paris', isCorrect: true },
                                        { answerText: 'Dublin', isCorrect: false },
                                    ],
                        }
                      ],
                       
        },
    ]);

    var courseList = [];

    for(let i = 0; i < quiz.length; i++){
        courseList.push(
                <div style={{ display: 'flex'}}>
                        <p>{quiz[i].Serial_number}</p>
                        <p>{quiz[i].name}</p>
                        
                        { start ? <Quiz /> : <Start props={setStart} />}

                        {/* <p>{quiz[i].action}</p> */}
                </div>
        )}
    return (
        <div>
                {courseList}
        </div>
    )
}

export default MockTestList
