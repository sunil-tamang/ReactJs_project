import React, {useState, useEffect} from 'react'
// import DashboardNav from '../DashboardNav'

import {questions} from './Questions'
 
import Start from './Start'
import Quiz from './Quiz'

// import MockTestList from './MockTestList'

function Mocktest() {
	// const [currentQuestion, setCurrentQuestion] = useState(0); // Current question
	
    // const [showScore, setShowScore] = useState(false); // show score
	
    // const [points, setPoints] = useState(0); // score

	
    // const handleClick = (isCorrect) => {
    //         if (isCorrect) {
    //             setPoints(points + 1);
    //         }

    //     const nextQuestion = currentQuestion + 1;
    //             if (nextQuestion < questions.length) {
    //                 setCurrentQuestion(nextQuestion);
    //             } else {
    //                 setShowScore(true);
    //             }
	//         };

    // function PreviousHandle () {
       
    //     setCurrentQuestion(currentQuestion - 1);
    // };

    // function NextHandle (){
        
    //     setCurrentQuestion(currentQuestion + 1);
    // };
     

   
    const [start, setStart] = useState(false);
  
    return (
        <div>
          
            {/* <DashboardNav /> */}


        {/* 
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
        */}


            {/* <MockTestList /> */}

            { start ? <Quiz /> : <Start props={setStart} />}
    </div>

                    
    )                                                                                                       
}

export default Mocktest
