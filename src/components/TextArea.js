import { useState } from "react";
import { Button } from "./Button";
import classNames from "classnames";
export const TextArea = (props) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    document.title = text;
    const value = e.target.value;
    switch (value) {
      case "lcase":
        setText(text.toLowerCase());
        break;
      case "ucase":
        setText(text.toUpperCase());
        break;
      case "clear":
        setText("");
        break;
      case "email":
        let regex = /\S+@\S+\.\S+/;
        let email = text.match(regex);
        email === null
          ? setText("ERROR!!! No email found in the given string")
          : setText(email[0]);
        break;
      case "scheck":
        const options = {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": "jspell-checker.p.rapidapi.com",
          },
          body: `{"language":"enUS","fieldvalues":"${text}","config":{"forceUpperCase":false,"ignoreIrregularCaps":false,"ignoreFirstCaps":true,"ignoreNumbers":true,"ignoreUpper":false,"ignoreDouble":false,"ignoreWordsWithNumbers":true}}`,
        };
        console.log(process.env.REACT_APP_API_KEY);
        fetch("https://jspell-checker.p.rapidapi.com/check", options)
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
        break;
      default:
        console.log("invalid parameter passed");
        break;
    }
  };
  let word = text.split(" ").length;
  const time = word * 0.008;
  //Button component props 
  const btnClasses = props.mode?"btn btn-outline-light":"btn btn-outline-dark"
  const marginStyle = { marginLeft: "5%" };
  return (
    <>
      <div className="container">
        <h1 className="mt-3">Enter your text here: </h1>
        <textarea
          cols="100"
          rows="10"
          className={classNames({ "darkTheme": props.mode }, "my-3")}
          placeholder="Start typing..."
          value={text}
          onChange={handleChange}
        ></textarea>
        <br />

        <Button
          handleClick={handleClick}
          style={{ marginRight: "5%" }}
          classes={btnClasses}
          value="ucase"
          title="UpperCase"
        />
        <Button
          classes={btnClasses}

          value="lcase"
          onClick={handleClick}
          title="LowerCase"
        />
        <Button
          classes={btnClasses}

          style={marginStyle}
          value="clear"
          onClick={handleClick}
          title="Clear Text"
        />
        <Button
          classes={btnClasses}

          style={marginStyle}
          value="email"
          onClick={handleClick}
          title="Extract Email"
        />
        <Button
          classes={btnClasses}

          style={marginStyle}
          value="scheck"
          onClick={handleClick}
          title="Spell Check"
        />

      </div>

      <div className="container my-3">
        <h1>Text Summary:</h1>
        <p>
          your text has {text.length === 0 ? "0" : word} words and {text.length}{" "}
          characters
        </p>
        <p>you'll take {Math.round(time * 100) / 100} minutes to read it</p>
        <p style={{ fontSize: "2rem" }}>Preview</p>
        <code>
          {text.length === 0 ? '"Enter text above to preview here"' : text}
        </code>
      </div>
    </>
  );
};
