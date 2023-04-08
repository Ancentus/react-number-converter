import React, { useState } from "react";

function App() {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");
  const [octal, setOctal] = useState("");

  const handleDecimalChange = (e) => {
    const decimalValue = e.target.value;
    setDecimal(decimalValue);
    setBinary(decimalToBinary(decimalValue));
    setHexadecimal(decimalToHexadecimal(decimalValue));
    setOctal(decimalToOctal(decimalValue));
  };

  const handleBinaryChange = (e) => {
    const binaryValue = e.target.value;
    setBinary(binaryValue);
    setDecimal(binaryToDecimal(binaryValue));
    setHexadecimal(decimalToHexadecimal(binaryToDecimal(binaryValue)));
    setOctal(decimalToOctal(binaryToDecimal(binaryValue)));
  };

  const handleHexadecimalChange = (e) => {
    const hexadecimalValue = e.target.value;
    setHexadecimal(hexadecimalValue);
    setDecimal(hexadecimalToDecimal(hexadecimalValue));
    setBinary(decimalToBinary(hexadecimalToDecimal(hexadecimalValue)));
    setOctal(decimalToOctal(hexadecimalToDecimal(hexadecimalValue)));
  };

  const handleOctalChange = (e) => {
    const octalValue = e.target.value;
    setOctal(octalValue);
    setDecimal(octalToDecimal(octalValue));
    setBinary(decimalToBinary(octalToDecimal(octalValue)));
    setHexadecimal(decimalToHexadecimal(octalToDecimal(octalValue)));
  };

  const decimalToBinary = (decimalValue) => {
    return Number(decimalValue).toString(2);
  };

  const decimalToHexadecimal = (decimalValue) => {
    return Number(decimalValue).toString(16);
  };

  const decimalToOctal = (decimalValue) => {
    return Number(decimalValue).toString(8);
  };

  const binaryToDecimal = (binaryValue) => {
    return parseInt(binaryValue, 2);
  };

  const hexadecimalToDecimal = (hexadecimalValue) => {
    return parseInt(hexadecimalValue, 16);
  };

  const octalToDecimal = (octalValue) => {
    return parseInt(octalValue, 8);
  };

  return (
    <div className="App">
      <form>
        <div className="form-inner">
          <h2>Number Conversion</h2>
          <div className="form-group">
            <label htmlFor="decimal">Decimal:</label>
            <input type="number" id="decimal"
              value={decimal} onChange={handleDecimalChange} />
          </div>
          <div className="form-group">
            <label htmlFor="binary">Binary:</label>
            <input type="text" id="binary"
              value={binary} onChange={handleBinaryChange} />
          </div>
          <div className="form-group">
            <label htmlFor="hexadecimal">Hexadecimal:</label>
            <input type="text" id="hexadecimal"
              value={hexadecimal} onChange={handleHexadecimalChange} />
          </div>
          <div className="form-group">
            <label htmlFor="octal">Octal:</label>
            <input type="text" id="octal"
              value={octal} onChange={handleOctalChange} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
