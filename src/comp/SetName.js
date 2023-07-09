import React, {useRef} from 'react';
import "./SetName.css"

const SetName = ({onSetName}) => {
    const input = useRef()
    const ChangeName = () =>{
        if(input.current.value !== ""){
            onSetName(input.current.value)
        }
    }
    return (
        <div className='setName'>
            <div className="setName_block">
                <div className="setName_title">Hello send your name and press the button</div>
                <input ref={input} type="text" className="setName_input"/>
                <button onClick={ChangeName} className="setName_button">set your Name</button>
            </div>
        </div>
    );
}

export default SetName;