import React, { useState, useEffect } from "react";

function About() {
  return (
    <>
      <h3>About</h3>
      <Father />
    </>
  );
}

function Father() {
  const [fatherData, setFatherDat] = useState("father");
  const [testObj, setTestObj] = useState({});

  const [arr, setArr] = useState([]);
  const [a, setA] = useState({});

  useEffect(() => {
    console.log('@', testObj);
  }, [testObj])

  return (
    <>
      {fatherData}
      <Son
        zhl={(v) => {
          console.log(v);
        }}
        useData={[fatherData, setFatherDat]}
      />
      @ -- {testObj.name}
      <button
        onClick={() => {
          
          setTestObj({
            name: "zhl",
          });
        }}
      >
        add prop
      </button>
      <button onClick={() => {testObj.name += 'g';console.log(testObj.name);}}>add name</button>
      <hr />
      <button
        onClick={() => {
          // arr.push(a)
          setArr([a]);
          //a.zhl = 'g'
          console.log(`before:  ${a.zhl}`);
          setA({
            zhl: "g",
          });
          console.log(`after:  ${a.zhl}`);
          console.log(arr);
        }}
      >
        add new Prop to obj
      </button>
    </>
  );
}

function Son(props) {
  const name = "zhl";
  const {
    useData: [data, setData],
  } = props;
  const toFather = (v) => {
    return () => {
      setData(data + "father");
      props.zhl(v);
    };
  };

  return (
    <div>
      <button onClick={toFather(name)}>子向父传递值</button>
    </div>
  );
}

export default About;
