import React, {useState} from 'react';


export default function TextForm(props) {

    const handleUpClick =()=>{
        console.log("Uppercase is clicked");
        let newText= Text.toUpperCase();
        setText (newText);
        props.showAlert("Enabled to Captialize","success")
    }
    const handleLoClick =()=>{
        console.log("Lower is clicked");
        let newText= Text.toLowerCase();
        setText (newText);
        props.showAlert("Enabled to LowerCase","success")
    }
    const handleReClick =()=>{
        console.log("Reverse is clicked");
        let newText= Text.split('').reverse().join('') ;
        setText (newText);
        props.showAlert("Enabled to Reverse","success")
    }
    const handleReplaceClick =()=>{
        console.log("Replace is clicked");
        const text1 = prompt("Enter the Orginal Word")
        const text2 = prompt("Enter the Replace Word")
        let newText= Text.replaceAll(text1,text2) ;
        setText (newText)
    }

    const handleCopyClick =()=>{
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Copied","success")
    }

    const handleEmptyspaceClick=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces were removed","success")
    }


    const handleClearClick =()=>{
        console.log("Text is cleared");
        let newText= '';
        setText (newText)
    }
    const handleOnchange =(event)=>{
        console.log("handle is change");
        setText(event.target.value)
       
    }
    const [Text,setText]=useState("");
    return (
    <>

    <div>
    <h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
    <div className="mb-3 mt-3 ">
    <textarea className="form-control"  value={Text} onChange={handleOnchange} style={{background:props.mode==='dark'?'#294A66':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="7"></textarea>
    </div>
    <button disabled={Text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleUpClick}>Click for Uppercase</button>
    <button disabled={Text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleLoClick}>Click for Lowercase</button>
    <button disabled={Text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleReClick}>Click for Reverse</button>
    <button disabled={Text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleReplaceClick}>Click for Replace</button>
    <button disabled={Text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleEmptyspaceClick}>Click for Remove ExtraSpace</button>
    <button disabled={Text.length===0} className="btn btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Click for Copy</button>
    <button disabled={Text.length===0} className="btn btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="mt-3">
    <h3 style={{color:props.mode==='dark'?'white':'black'}}>Text Summary</h3>
    <p style={{color:props.mode==='dark'?'white':'black'}}><b>{Text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length}</b> letters and <b> {Text.length} </b> Characters</p>
    <h3 style={{color:props.mode==='dark'?'white':'black'}}>Preview:</h3>
    <p style={{color:props.mode==='dark'?'white':'black'}}>{Text.length>0?Text:"Enter Your Text in TextBox to Preview over here"}</p>
    </div>

    </>
)       
}
