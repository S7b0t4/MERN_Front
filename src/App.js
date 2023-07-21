import './App.css';
import SetName from "./comp/SetName";
import {useState} from "react";
import MakeQuestion from "./comp/MakeQuestion";

function App() {
    const [name , setName] = useState()
    const [veryfiUserName, setVeryfiUserName] = useState(false)

    const checkQuestion = (i) =>{
        if(i){
            setName(i)
            setVeryfiUserName(true)
        }
    }

  return (
      <div className="app_wrapper">
          <div className='app'>
              {
                  (veryfiUserName)?
                      <MakeQuestion name = {name}/>
                      :
                      <SetName onSetName={i=>checkQuestion(i)}/>
              }
          </div>
      </div>
  );
}

export default App;
