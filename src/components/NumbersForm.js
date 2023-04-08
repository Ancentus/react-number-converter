import React from 'react'

function NumbersForm() {
  return (
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
  )
}

export default NumbersForm