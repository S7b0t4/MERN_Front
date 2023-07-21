import './App.css';
import SetName from "./comp/SetName";
import {useState} from "react";
import MakeQuestion from "./comp/MakeQuestion";

function App() {
    const [name , setName] = useState()
    const [question, setQuestion] = useState(false)

    const checkQuestion = (i) =>{
        if(i){
            setName(i)
            setQuestion(true)
        }
    }

  return (
    <div className="wrapper">
      <div className='app'>
          {
              (question)?
                    <MakeQuestion name = {name}/>
                  :
                    <SetName onSetName={i=>checkQuestion(i)}/>
          }
      </div>
    </div>
  );
}

export default App;
