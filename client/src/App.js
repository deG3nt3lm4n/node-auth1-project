import React, {useState,useEffect} from 'react'
import './App.css';
import Form from './components/Form';


function App() {

  const [server,setServer] = useState(false);

  useEffect(() => {

    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => {
        if(data){
          setServer(true)
        }else{
          setServer(false)
        }
      })

  },[])



  return (
    <div className="App">
      <header className="App-header">
      <h6>Server is: {server ? "up" : "down"}</h6>
       <Form />
      </header>
    </div>
  );
}

export default App;
