import React, {useState} from 'react';
import Queshen from "./Queshen";
import TextLink from "./TextLink";
import axios from "axios";
import "./MakeQuestion.css"

const MakeQuestion = (prop) => {
    const [arrForm, setArrForm] = useState([
        {Question_index:1,
            Question_name: "Question_name",
            question_answer:[
                {answer_text: '1', answer_id: getRandomInt(1000000000), answer_is_right: false},
                {answer_text: '2', answer_id: getRandomInt(1000000000), answer_is_right: false}
            ]},
        {Question_index:2,
            Question_name: "Question_name",
            question_answer:[
                {answer_text: '1', answer_id: getRandomInt(1000000000), answer_is_right: false},
                {answer_text: '2', answer_id: getRandomInt(1000000000), answer_is_right: false}
            ]},
        {Question_index:3,
            Question_name: "Question_name",
            question_answer:[
                {answer_text: '1', answer_id: getRandomInt(1000000000), answer_is_right: false},
                {answer_text: '2', answer_id: getRandomInt(1000000000), answer_is_right: false}
            ]},
        {Question_index:4,
            Question_name: "Question_name",
            question_answer:[
                {answer_text: '1', answer_id: getRandomInt(1000000000), answer_is_right: false},
                {answer_text: '2', answer_id: getRandomInt(1000000000), answer_is_right: false}
            ]},
    ])
    const [linkNum, setLinkNum] = useState()
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const setTestInfo = async (i) =>{
        try {
            const response = await axios.post('http://localhost:5000/addTestInfo', { i });
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }
    }

    const save = () =>{
        const linkTag = getRandomInt(1000000000);
        setLinkNum(linkTag)
        console.log(arrForm)
        setTestInfo({
            userName: prop.name,
            userArrowQuestion: arrForm,
            userLink: linkTag
        })
    }
    const add = () =>{
        if(arrForm.length < 20){
            setArrForm([...arrForm, {
                Question_index:arrForm.length+1,
                Question_name: "Question_name",
                question_answer:[
                    {answer_text: '1', answer_id: 486567037, answer_is_right: false},
                    {answer_text: '2', answer_id: 318278259, answer_is_right: false}
                ]}])
        }
    }
    const updateArrForm = (arr, index) => {
        const updatedArray = [
            ...arrForm,
            updatedArray[index].question_answer: [];
        ];
        console.log(updatedArray[index])

        // Установите новое значение состояния массива
        setArrForm(updatedArray);
        console.log(arrForm)
    }
    return (
        <div className="colum">
            {arrForm.map((item)=><Queshen onUpdateArrForm={obj=>updateArrForm(obj)}  item = {item} index={item.Question_index} />)}
            <button className="add" onClick={add}>ADD</button>
            <button className="sava" onClick={save}>Sava and link</button>
            <TextLink linkNum={linkNum} />
        </div>
    );
};

export default MakeQuestion;