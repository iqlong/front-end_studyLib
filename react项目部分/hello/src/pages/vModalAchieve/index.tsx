import React, { useState } from "react";

const VModal = () => {
  const [textVal, setTextVal] = useState<string>("");
  function inputChange(e) {
    setTextVal(e.currentTarget.value)
  }
  return <>
    {textVal}
    <br />
    <button onClick={() => {
        setTextVal(textVal + 'one')
    }}>add textVal</button>
    <hr />
    <input type="text" value={ textVal } onInput = {(e) => inputChange(e)} />
  </>;
};

export default VModal;
