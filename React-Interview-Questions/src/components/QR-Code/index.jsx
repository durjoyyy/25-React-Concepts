import { useState } from "react";
import QRCode from "react-qr-code";


export default function QRCodeGenerator(){
  const [qrCode,setQrCode]=useState('');
  const [input,setInput]=useState('');

  function handleGenerateQRCode(){
    setQrCode(input);
    setInput('');
  }




  return <div className="mainScreen">
    <div>
      <h1>QR Code Generator</h1>
      <div style={{display:"flex", gap:"20px"}}>
       <input onChange={(e)=> setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder="Enter value here"/>
        <button  style={{width:"200px"}} disabled={input&&input.trim!==''?false:true} onClick={handleGenerateQRCode}>Generate</button>
      </div>
      <br />
      <div>
        <QRCode 
        iq="qr-code-value"
        value={qrCode}  
        size={400}
        bgColor="white"
        >
        
        </QRCode>
      </div>
    </div>
  </div>
}