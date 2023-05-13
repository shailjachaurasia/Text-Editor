import React, {useState}from 'react'

export default function About() {
    const[myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
        })
  const [btntext,setBtnText] = useState("Enable dark mode")
   const toggleStyle =()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
        backgroundColor:'black',
        border:'1px solid white'
            })
            setBtnText("Enable light mode")
        }
        else{
           setMyStyle({
            color:'black',
        backgroundColor:'white'
           }) 
          setBtnText("Enable dark mode")
        }
    }
    /*
    let myStyle={
        color:'white',
        backgroundColor:'black'
            }
            */
  return (
    
    <div className="container my-6" style={myStyle}>
        <h1 ClassName="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Text-</strong> A text is a passage of words that conveys a set of meanings to the person who is reading it. It’s a body of written work, in various forms and structures, that can be words, phrases and sentences that piece together a passage of written work.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Types of text
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Here we tell about different types of text.</strong>There are many aspects to literary writing, and many ways to analyse it, but four basic categories are descriptive, narrative, expository, and argumentative.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Why TextUtils?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This Website is for text decoration.</strong>. As we see in general uses we need to modify text for our general purposes works. this is an useful wesite for an user point of view or an real life application based 
      </div>
    </div>
  </div>
</div>
<div className="container my-3"></div>
<button   onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
    </div>
  )
}
