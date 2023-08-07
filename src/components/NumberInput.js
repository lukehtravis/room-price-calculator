import React from 'react';

const NumberInput = ({name = "",  value = null, onNumberChange, percentage = false }) => {
  const handleInputChange = (event) => {
    const newNumber = Number(event.target.value);
    if ((newNumber > 0 && newNumber < 101 && percentage) || (!percentage && newNumber > 0)) {
      onNumberChange(newNumber);
    }
  }
  return (
    <div>
      {percentage && <p>Percentage field. Add number between 1 and 100 that represents a percent</p>}
      <label>{name}</label>
      <input
        name={name}
        type="number"
        value={value}
        onChange={handleInputChange}
      />  
    </div>
  );
};



export default NumberInput;