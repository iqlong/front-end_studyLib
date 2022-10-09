import React, { useEffect, useState } from "react";

const TextArea: React.FC<any> = (props) => {
  let num = 0;
  useEffect(() => {
    // 初次渲染的时候不管是不是 reactive num 都会effect，之后就不会了
    console.log("effect for num:", num);
  }, [num]); 
  // 测试effect会和useState顺序执行吗   --------  会的
  // 1. Use the name state variable
  const [name, setName] = useState("Mary");

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem("formData", name);
    console.log(`persistForm: ${name}`);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState("Poppins");

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + " " + surname;
    console.log(`updateTitle: ${name}, ${surname}`);
  });

  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  return (
    <>
      <button
        onClick={() => {
          num++;
          console.log(num);
        }}
      >
        const num ++
      </button>
    </>
  );
};
export default TextArea;
