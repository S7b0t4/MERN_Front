import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import "./Test.css"
import axios from "axios";
import TestQuestion from "./TestQuestion";
const Test = () => {
    const id = useParams().id
    const [testInfo, setTestInfo] = useState("")
    const [testArr, setTestArr] = useState([])
    const [userAnswer, setUserAnswer] = useState([])
    const getTestInfo = async (i) =>{
        try {
            const response = await axios.post('http://localhost:5000/getTestInfo', { i });
            setTestInfo(response.data.testInfo);
            setTestArr(response.data.testInfo.userArrowQuestion);
        } catch (error) {
            console.error(error);
        }
    }
    if(testInfo === ""){
        getTestInfo(id)
    }
    return (
        <div className="wrapper">
            {testArr.map((e)=>(
                <TestQuestion onSetRightAnswer={(Answer) => {setUserAnswer([...userAnswer, Answer])}} e = { e } />
            ))}
            <button onClick={()=>console.log(userAnswer)}>GO</button>
        </div>
    );
};

export default Test;