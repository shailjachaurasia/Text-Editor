
import React, {useState} from 'react'

export default function Textform(props) {
  //here we used text state for this function
const handleUpClick = ()=>{
  console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.setalert("convert to uppercase","success");
}
const handleDownClick = ()=>{
  console.log("Lowecase was clicked" + text);
  let nText = text.toLowerCase();
  setText(nText);
  props.setalert("convert to Lowecase","success");
}

const handleClearClick =()=>{
  let netext = '';
  setText(netext)
  props.setalert("Text has bheen cleared","success");
}
const handleCopy =()=>{
  let text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.setalert("Copied to clipboard","success");

}
const handleExtraSpaces =()=>{
  let newtext =text.split(/[ ]+/);
  setText(newtext.join(" "))
  props.setalert("Remove Extra Spaces","success");

}
const handleOnChange = (event)=>{
  //console.log("on change");
  setText(event.target.value);
}


// here we formed our state text
const [text, setText] = useState('');
  //text="new text";//wrong way to change text or update
  // setText("new text");//correct way

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
    {/*<h1>{props.heading}-{text}</h1>*/}
    <h1>{props.heading}</h1>
<div className="mb-3">
  {/*<label for="mybox" className="form-label">Example textarea</label>*/}
  {/*in the text area we listened for two events onchange and it is used to type into text area beacuse yaha par value is state variable i.e.*/}
  {/*text and second is onclick event*/}
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}}id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-secondary mx-1" onClick={handleDownClick}>Convert to LowerCse</button> 
<button className="btn btn-success mx-1" onClick={handleClearClick}>Clear</button>
<button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>  
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h2>your text Summary</h2>
      {/*<p>3432 words and 4532324 characters</p>*/}
      <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
