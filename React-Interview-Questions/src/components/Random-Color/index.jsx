import React, { useEffect, useState } from "react";

//HEX
//RGB

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState("#000000");

  function randomColorUtility(len) {
    return Math.floor(Math.random()*len);
  }

  function handleCreateHex() {
    const hex = [0, 1, 2, 3, 4, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRGB() {
    const r=randomColorUtility(256);
    const g=randomColorUtility(256);
    const b=randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=>{
    if(typeOfColor=='rgb') handleCreateRGB;
    else handleCreateHex;
  },[typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={typeOfColor === "hex" ? handleCreateHex : handleCreateRGB}
      >
        Generate Random Color
      </button>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        fontSize:'60px',
        marginTop:'50px',
        flexDirection:'column',
        gap:'20px'
      }}>
        <h2>{typeOfColor==='rgb'?'RGB Color ':'HEX Color ' }</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;


//45 25