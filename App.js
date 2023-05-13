

import './App.css';

import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import {Switch} from 'react-router';




function App() {
  const [mode,setMode] = useState('light');//it is an state tells that mode is light or dark 
  const [alert,setAlert] = useState(null);

const setalert =(message , type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setalert(null);
}, 4000);

}

const toggleMode = ()=>{
if(mode ==='light'){
  setMode('dark');
  document.body.style.backgroundColor ='#042743';
  setalert("Dark mode has been enabled","success");
document.title ='TextUtils - Dark Mode';
/*
setInterval(() => {
  document.title ='TextUtils is Amazing Mode';
}, 2000);

setInterval(() => {
  document.title='Install TextUtils Now';
}, 1500);
*/
}
else{
  setMode('light');
document.body.style.backgroundColor ='white';
setalert("Light mode has been enabled","success");
document.title ='TextUtils - Light Mode';
}
}
return (
    <>
    {/*<Navbar title="Textutils" aboutText="About TextUtils" />*/}
    {/*<Navbar />*/}
   
    <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
   <TextForm  setalert={setalert}heading="Enter the text to analyze" mode={mode}/>
    <About />
    </div>
   
    </>
  );
}

export default App;
