import React, {useRef, useState} from 'react';
import "./Queshen.css"
import Answer from "./Answer";

const Queshen = (prop) => {
    const titleInput = useRef()
    const [answerArrow, setAnswerArrow] = useState([
        {
            answer_text:"1",
            answer_id:getRandomInt(1000000000),
            answer_is_right:false
        },
        {
            answer_text:"2",
            answer_id:getRandomInt(1000000000),
            answer_is_right:false
        },
    ])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        getRandomInt(1000000000)
    }
    const addAnswer = () => {
        if (answerArrow.length < 21) {
            setAnswerArrow([...answerArrow, {
                answer_text: "",
                answer_id:  getRandomInt(1000000000),
                answer_is_right: false
            }])
            prop.onUpdateArrForm(answerArrow)
        }
    }
    const deleteAnswer = (id) =>{
        setAnswerArrow(answerArrow.filter((item) => item.answer_id !== id))
        prop.onUpdateArrForm(answerArrow)
    }

    return (
        <div className='queshen'>
            <div className="queshen_index">Question{prop.item.Question_index}</div>
            <div className="queshen_block">
                <input ref={titleInput} onChange={()=> {
                    prop.item.Question_name = titleInput.current.value;
                }} placeholder={prop.item.Question_name} type="text" className="queshen_input"/>
                {answerArrow.map((i)=>(
                    <Answer key={i.answer_id} i={i} onDel={() => {
                        deleteAnswer(i.answer_id)
                    } } onSet={(input)=>{i.answer_text = input; prop.onUpdateArrForm(answerArrow)}} />
                ))}
                <button onClick={addAnswer} className="add_option">add an option</button>
            </div>
        </div>
    );
}

export default Queshen;