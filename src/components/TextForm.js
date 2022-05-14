import React, { useState } from 'react';
import "../TextForm.css";

function TextForm (props) {

const [text, setText] = useState("");
    
 function handleOnChange (e) {
     setText(e.target.value)
 }   
    
 function handleClickUpper () {
     setText(text.toUpperCase());
     props.showAlert("success", "Converted to uppercase")
 }

 function handleClickLower () {
    setText(text.toLowerCase());
    props.showAlert("success", "Converted to lowercase")
 }
    
    
    return (
        <div className="">
        <div className="container mt-3">
            <h1>{props.heading}</h1>
            <div className="form-floating mt-3">
                <textarea spellCheck="false" onChange={handleOnChange} value={text} className="form-control" placeholder='Enter your text' id="Textarea" rows="8"></textarea>
            </div>
            <button onClick={handleClickUpper} className="btn btn-primary mt-3 mb-2">Change to UpperCase</button>
            <button onClick={handleClickLower} className="btn btn-primary mt-3 mb-2 ms-4">Change to LowerCase</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length - 1} word and {text.length} characters</p>
            <p>Estimated reading time: {Math.ceil((0.008 * text.split(" ").length) -0.008)} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>

    );



}

export default TextForm
