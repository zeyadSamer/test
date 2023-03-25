
import { useState} from 'react'
import './App.css';

function App() {


 const [messages,setMessages]=useState([]);
 const [isHidden,setIsHidden]=useState(true);

  return (
    <div className="App">
      <div className="parent">


       { messages.map((message)=> {return (<div className="message">
          <h4>{message} <h3 className={isHidden?'hidden':'visible'}>&#128579;</h3></h4>

        </div>)})
        
      }

        
        <button onClick={()=>{
        setMessages(messages.concat("MeNNNNNNNNNnaaaaaaaa"))
        setIsHidden(false)


        
      
      
      }
      
      
      
      }>
        

          Click Me
        </button>

        <h1 className={isHidden?'hidden':'highFont'}>&#128579;</h1>
      </div>

    </div>
  );
}

export default App;
