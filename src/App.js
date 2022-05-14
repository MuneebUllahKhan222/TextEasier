// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [enable, setEnable] = useState(false);
  const [alert, setAlert] = useState(null);

  function showAlert (type, message) {
    setAlert({
      type:type,
      msg:message   
    });
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

  function modeChange () {
    if (enable === false) {
      setMode("dark");
      document.body.style.backgroundColor = "#2A2C2A"
      document.body.style.color = "white"
      showAlert("success", "Dark mode has been enabled" );
      setEnable(true);
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#212529"
      showAlert("success", "Light mode has been enabled" );
      setEnable(false);
      
    }
  }
  


  
  
  return (
    <div> 
    <Navbar title="TextEasier"  mode={mode} enable={enable} modeChange={modeChange}/>
      <Alert alert={alert}/>
    <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About enable={enable}/>} />
      <Route path="/" element={<TextForm  heading="Enter the Text Below" showAlert={showAlert}/> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
