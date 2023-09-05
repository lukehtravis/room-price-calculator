import React from 'react';

const TextInput = ({value = null, onTextChange}) => {
  
    const handleInputChange = (event) => {
      onTextChange(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="text-input">Enter Name Of Attribute: </label>
        <input
          type="text"
          id="text-input"
          value={value || ''}
          onChange={handleInputChange}
        />
      </div>
    );
  };

export default TextInput;