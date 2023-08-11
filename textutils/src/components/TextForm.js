import React, { useState } from "react";

export default function TextForm(props) {
  const Uppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const Lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const Copy = () => {
    navigator.clipboard.writeText(text);
  };
  const Clear = () => {
    let newText = "";
    setText(newText);
  };
  const RemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState();

  return (
    <>
      <h1 className="center">{props.heading}</h1>
      <div className="mb-6">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-4 mx-2"
          onClick={Uppercase}
        >
          Convert To Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-2"
          onClick={Lowercase}
        >
          Convert To Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-2"
          onClick={RemoveSpace}
        >
          Remove White Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-2"
          onClick={Copy}
        >
          Copy To Clipboard
        </button>
        <button
          type="button"
          className="btn btn-primary my-4 mx-2"
          onClick={Clear}
        >
          Clear Text
        </button>
      </div>
      <div>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
