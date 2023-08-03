import React from 'react';

const Dropdown = ({ options, onChange }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  if (!options) return null;
  return (
    <select onChange={handleChange} defaultValue={options[0]}>
      {options && options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;