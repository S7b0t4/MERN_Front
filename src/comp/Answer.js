import React, {useRef, useState} from 'react';
import "./Answer.css"

const Answer = (prop) => {
    const input = useRef()
    const [accept, setAccept] = useState("")
    const change = () => {
        prop.onSet(input.current.value)
    }
    const changeActually = () => {
        if(prop.i.answer_is_right){
            prop.i.answer_is_right = false
            setAccept("")
        }else{
            prop.i.answer_is_right = true
            setAccept("accept")
        }
    }
    return (
        <div className="answer">
            <button onClick={changeActually} className={"answer_btn "+accept}>✔</button>
            <input ref={input} onChange={change} type="text" placeholder={prop.i.answer_text} className={"answer_input "+accept}/>
            <button onClick={prop.onDel} className="answer_btn delete">✖</button>
        </div>
    );
};

export default Answer;