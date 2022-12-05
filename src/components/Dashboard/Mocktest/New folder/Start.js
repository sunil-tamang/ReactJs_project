import React from 'react'
import styled from 'styled-components'

import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;



const Start = ({props}) => {

    const startQuiz = () => props(true)

    return (
        <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <Button onClick={startQuiz} >Begin</Button>
        </Intro>
    )
}

export default Start
