import React from "react";
import {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);    
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success")
    }
    
    const handleLoClick = () => {   
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")
    }
    
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "warning")
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed ExtraSpaces!", "success")
    }
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "primary")
    }
     
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState(''); 
    // ab jb bhi hmko 'text' variable ko change krna he to hm directly text= nhi likhege, blki setText function ki sahayta se change krege
    // text = "new text" - Wrong way
    // setText("new text") - Correct way

  return (
      <>
        <div className="container" style={{color: props.mode==='light' ? 'black' : 'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8}
            style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}
            />
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light' ? 'black' : 'white'}}>
            <h2>Your Text summary:</h2>
            <p>
                {/* Your text has {(text.charAt((text.length)-1)===' ' || text.length===0) ? (text.split(" ").length)-1 : text.split(" ").length} words and {text.length} characters. */}
                Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
                {/* /\s+/ implies one or more white spaces include a line change */}
            </p>

            <h2>Preview:</h2>
            <p>{text.length>0 ? text : "Enter text to preview."}</p>
        </div>
      </>
  );
}