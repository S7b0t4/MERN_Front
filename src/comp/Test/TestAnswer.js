import React, { useState, useEffect } from 'react';
import './TestAnswer.css';

const TestAnswer = (prop) => {
    const [isSelected, setIsSelected] = useState(false);

    const setRightAnswer = () => {
        setIsSelected(true);
        prop.onSetRight(prop.answer.answer_id);
    };

    useEffect(() => {
        setIsSelected(prop.answer.answer_id === prop.selectedAnswerId);
    }, [prop.selectedAnswerId, prop.answer.answer_id]);

    return (
        <label className={`answer_text ${isSelected ? 'selected' : ''}`} onClick={setRightAnswer}>
            <input type="radio" name="answer" checked={isSelected} />
            <span>{prop.answer.answer_text}</span>
        </label>
    );
};

export default TestAnswer;

