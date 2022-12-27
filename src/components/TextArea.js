import { useState } from "react"
export const TextArea = () => {
    const [text, setText] = useState("Start typing...")
    const handleChange = (e)=>{
        setText(e.target.value);
    }
    const handleClick = (e)=>{
        document.title=text
        e.target.value ==="lcase"?setText(text.toLowerCase()):
        setText(text.toUpperCase())
    }
  return (
    <>
        
    <div className="container">
    <h1 className="mt-3">Enter your text here: </h1>
    <textarea cols="100" rows="10" className="my-3" value={text} onChange={handleChange}></textarea><br />
    

    <button style={{marginRight:"10%"}} className="btn btn-primary" value="ucase" onClick={handleClick}>UpperCase</button>
    <button className="btn btn-primary" value="lcase" onClick={handleClick}>LowerCase</button>
    </div>
    

    </>
  )
}
