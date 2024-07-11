import React, {useState} from 'react'

export default function Text(props) {
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState ('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success");
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared Text", "Success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaker is on", "Success");
  }

  const handleinverseclick = () => {
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Text is inversed", "Success");
  }


  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied the Text", "Success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
  <>
  <div className="container"  style={{color: props.mode === 'dark'? 'white': 'black'}}> 
    <h1>{props.heading}</h1>
    <div className="container-cc">

<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="15"></textarea> 
</div>

<button className='btn btn-primary text-bg-info p-2 mx-3' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary text-bg-info p-2 mx-3' onClick={handleDownClick}>Convert to LowerCase</button>
<button className='btn btn-primary text-bg-info p-2 mx-3' onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary text-bg-info p-2 mx-3" onClick={handleinverseclick}>Inverse Click</button>
<button className="btn btn-primary text-bg-info p-2 mx-3" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary text-bg-info p-2 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button type="submit" onClick={speak} className="btn btn-warning text-bg-warning p-2 mx-3">Speak</button>
</div>
</div>

<div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}> {/*, color: props.moode === 'voilet'? 'white': 'black'*/}
  <h2>Your Text Summary</h2>
  <p> {text.split(` `).length} words and {text.length} characters </p>
  <p> {0.008 * text.split(` `).length} minutes read </p>
  <h3>Preview</h3>
  <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
</div>
  </>
  )}