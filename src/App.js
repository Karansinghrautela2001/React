
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import Alert from './Alr'
import { useState } from 'react';

function App() {
   const [alert, setAlert] = useState(null)
   const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
   }
  const [mode, setmode]=useState('light')
  
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      showalert("dark mode is enabled","success")
    }
    else{
      setmode('light')
      showalert("light mode is enabled","success")
    }
  }
  
  return(
    <>
    
    <Navbar title="textutils" about="about us" mode={mode} toggleMode={toggleMode}  modee="enable dark mode" />
    <Alert mode={mode} alert={alert}/>
    <Form heading='convert' mode={mode}/>
    
   
   
   </>
  );
}

export default App;
