import './App.css';
import Queshen from "./comp/Queshen";
import SetName from "./comp/SetName";
import {useState} from "react";
import TextLink from "./comp/TextLink";
import axios from "axios";

function App() {
    const [question, setQuestion] = useState(false)
    const [name , setName] = useState()
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

    const NameSet = async (i) =>{
        try {
            const response = await axios.post('http://localhost:5000/userName', { i });
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }
    }

    const save = () =>{
        const linkTag = getRandomInt(1000000000);
        setLinkNum(linkTag)
        console.log({
            userName: name,
            userArrowQuestion: arrForm,
            userLink: linkTag
        })
        NameSet({
            userName: name,
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
  return (
    <div className="wrapper">
      <div className='app'>
          {
              (question)?
                    <div className="colum">
                        {arrForm.map((i)=><Queshen item ={i} index={i.Question_index} />)}
                        <button className="add" onClick={add}>ADD</button>
                        <button className="sava" onClick={save}>Sava and link</button>
                        <TextLink linkNum={linkNum} />
                    </div>:
                    <SetName onSetName={(i)=>{
                  if(i){
                      setName(i)
                      setQuestion(true)
                  }
              }} />
          }
      </div>
    </div>
  );
}

export default App;
