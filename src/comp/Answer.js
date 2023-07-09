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
        <div className="ansver">
            <button onClick={changeActually} className={"ansver_btn "+accept}>✔</button>
            <input ref={input} onChange={change} type="text" placeholder={prop.i.answer_text} className={"ansver_input "+accept}/>
            <button onClick={prop.onDel} className="ansver_btn delit">✖</button>
        </div>
    );
};

export default Answer;