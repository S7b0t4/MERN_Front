import React, {useState} from 'react';
import TestAnswer from "./TestAnswer";
import "./TestQuestion.css"

const TestQuestion = (prop) => {
    const [rightAnswer, setRightAnswer] = useState()

    const doSetRightAnswer = (answer) => {
        setRightAnswer(answer)
    }
    return (
        <div className='queshen'>
            <div className="queshen_index">Question{prop.e.Question_index}</div>
            <div className="queshen_block">
                <div className="queshen_block_title">{prop.e.Question_name}</div>
                <div className="answer_block">
                    {prop.e.question_answer.map((i)=>(
                        <TestAnswer  selectedAnswerId={rightAnswer} answer = { i } onSetRight = { (answer)=>doSetRightAnswer(answer) } />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestQuestion;