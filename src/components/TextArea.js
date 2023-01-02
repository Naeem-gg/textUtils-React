import { useState } from "react";
export const TextArea = () => {
  const [text, setText] = useState("")
  const handleChange = (e) => {

    setText(e.target.value);
  }
  const handleClick = (e) => {
    document.title = text
    const value = e.target.value;
    switch (value) {
      case "lcase":
        setText(text.toLowerCase());
        break;
      case "ucase":
        setText(text.toUpperCase())
        break;
      case "clear":
        setText("");
        break;
      case "email":
        let regex = /\S+@\S+\.\S+/;
        let email = text.match(regex);
        email===null?setText("ERROR"):setText(email[0]);
        break;
        case "scheck":
          const options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '72a429e45emsh49b16a3882fb183p12769ejsn8bd183e11758',
              'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com'
            },
            body: `{"language":"enUS","fieldvalues":"${text}","config":{"forceUpperCase":false,"ignoreIrregularCaps":false,"ignoreFirstCaps":true,"ignoreNumbers":true,"ignoreUpper":false,"ignoreDouble":false,"ignoreWordsWithNumbers":true}}`
          };
          
          fetch('https://jspell-checker.p.rapidapi.com/check', options)
            .then(response => response.json())
            .then(response => console.log(response.elements[0].errors))
            .catch(err => console.error(err));
          break;
      default:
        console.log("invalid parameter passed");
        break;

    }
  }
  let word = text.split(" ").length;
  const time = word * 0.008;
  return (
    <>
      <div className="container">
        <h1 className="mt-3">Enter your text here: </h1>
        <textarea cols="100" rows="10" className="my-3" placeholder="Start typing..." value={text} onChange={handleChange}></textarea><br />


        <button style={{ marginRight: "10%" }} className="btn btn-primary" value="ucase" onClick={handleClick}>UpperCase</button>
        <button className="btn btn-primary" value="lcase" onClick={handleClick}>LowerCase</button>
        <button style={{ marginLeft: "10%" }} className="btn btn-primary" value="clear" onClick={handleClick}>Clear</button>
        <button style={{ marginLeft: "10%" }} className="btn btn-primary" value="email" onClick={handleClick}>Extract email</button>
        <button style={{ marginLeft: "10%" }} className="btn btn-primary" value="scheck" onClick={handleClick}>Spell Check</button>



      </div>

      <div className="container">
        <h1>Text Summary:</h1>
        <p>your text has {text.length === 0 ? "0" : word} words and {text.length} characters</p>
        <p>you'll take {Math.round(time * 100) / 100} minutes to read it</p>
        <p style={{ fontSize: "2rem" }}>Preview</p>
        <code>{text}</code>
      </div>
    </>
  )
}
