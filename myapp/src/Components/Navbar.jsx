import React, { useState } from 'react'

const Navbar = ({name}) => {
    const [text,setText] = useState("santosh jj")
    

    const changeUppercase=() =>{
        const newtext = text.toUpperCase();
        setText(newtext);
    } 
    const changeLowercase=() =>{
        const newtext = text.toLowerCase();
        setText(newtext);
    }
    const Cleartext=() =>{
        const newtext = "";
        setText(newtext);
    }

    // const onchangehandle=(e) =>{
    //     setText(e.target.value)
    // }
    
  return (
    <>
    <center>
    <div>
    <h3>{name}</h3>
 
    <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={(e) => setText(e.target.value) }  placeholder='ENTER YOUR TEXT'></textarea><br></br>
    <button className="btn btn-primary my-1" onClick={changeUppercase}>UpperCase</button><br></br>
    <button className="btn btn-primary my-1" onClick={changeLowercase}>LowerCase</button><br></br>
    <button className="btn btn-primary my-1" onClick={Cleartext}>ClearTexts</button><br></br>
    <h5>Time to read</h5>
    <p>{text.length * 0.008} min</p>
    <h5>number of words and characters</h5>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h5>preview</h5>
    <p>{text}</p>
    </div>
    </center>
    </>
  )
}
export default Navbar