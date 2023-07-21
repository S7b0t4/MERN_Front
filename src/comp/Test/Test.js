import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import "./Test.css"
import axios from "axios";
const Test = () => {
    const id = useParams().id
    const [testInfo, setTestInfo] = useState("")
    const getTestInfo = async (i) =>{
        try {
            const response = await axios.post('http://localhost:5000/getTestInfo', { i });
            setTestInfo(response.data.testInfo);
        } catch (error) {
            console.error(error);
        }
    }
    if(testInfo === ""){
        getTestInfo(id)
    }
    return (
        <div className="wrapper">
            
        </div>
    );
};

export default Test;