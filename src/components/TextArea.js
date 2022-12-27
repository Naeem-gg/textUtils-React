import { useState } from "react"
export const TextArea = () => {
    const [text, setText] = useState("Start typing...")
    const handleChange = (e)=>{
        setText(e.target.value);
    }
    const handleClick = (e)=>{
        e.target.value ==="lcase"?setText(text.toLowerCase()):
        setText(text.toUpperCase())
    }
  return (
    <>
        
    <div className="container">
    <h1>Enrer your text here: </h1>
    <textarea cols="100" rows="10" className="my-3" value={text} onChange={handleChange}></textarea>
    </div>
    <button className="btn btn-primary m-5" value="ucase" onClick={handleClick}>UpperCase</button>
    <button className="btn btn-primary m-5" value="lcase" onClick={handleClick}>LowerCase</button>

    </>
  )
}
