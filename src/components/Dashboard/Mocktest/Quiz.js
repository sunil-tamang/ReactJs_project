import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import GameOver from './GameOver';
import {questions} from './Questions'

const QuizWindow = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;

    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;

    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;

const Question = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Quiz = () => {

    // const [quiz, setQuiz] = useState([]);
    // const [number, setNumber] = useState(0);
    // const [pts, setPts] = useState(0);

    // const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    // const pickAnswer = (e) => {

    //     let userAnswer = e.target.outerText;

    //     if (quiz[number].answer === userAnswer) setPts(pts + 1);
    //     setNumber(number + 1);
    // }

    // useEffect(() => {

    //     axios.get('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
    //         .then(res => {
    //             setQuiz(res.data.results.map(item => (

    //                 {
    //                     question: item.question,
    //                     options: shuffle([...item.incorrect_answers, item.correct_answer]),
    //                     answer: item.correct_answer
    //                 }

    //             )));
    //         })
    //         .catch(err => console.error(err))

    // }, []);

    const [currentQuestion, setCurrentQuestion] = useState(0); // Current question
	
    const [showScore, setShowScore] = useState(false); // show score
	
    const [points, setPoints] = useState(0); // score

   
    const handleClick = (isCorrect) => {
            if (isCorrect) {
                setPoints(points + 1);
            }

        const nextQuestion = currentQuestion + 1;
                if (nextQuestion < questions.length) {
                    setCurrentQuestion(nextQuestion);
                } else {
                    setShowScore(true);
                }
	        };

    function PreviousHandle () {
       
        setCurrentQuestion(currentQuestion - 1);
    };

    function NextHandle (){
        
        setCurrentQuestion(currentQuestion + 1);
    };
     

    return (
    <div>
        {showScore ? (
                        <div className='score-section'>
                            You scored {points} out of {questions.length}
                        </div>
                ) : (
                    <>
                        <div className='question-section'>
                    
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                    
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                    
                    <div className='answer-section'>
                        {questions[currentQuestion].Options.map((item, index) => {
                            return <button onClick={() => handleClick(item.isCorrect)} key={index}>{item.answerText}</button>
                        })}
                    </div>

           
                    </>
                )}
                    <div className="">
                            <button onClick={NextHandle}>Next Question</button>
                            <button onClick={PreviousHandle}>Previous Question</button>
                     </div>    
        </div> 
    )
}

export default Quiz
