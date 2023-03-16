import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "danger");
  }
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  // setText("New Text");
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
          color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes Read</p>
        <h2> Preview </h2>
        <p>{text.length > 0 ? text: "Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  )
}
