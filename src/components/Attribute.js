import { useState } from 'react'
import PropTypes from 'prop-types'

const Attribute = ({ attribute }) => {
  const [val, setVal] = useState(attribute.percentageOfRent)
  return (
    <div className='attribute'>
      <label htmlFor={attribute.name}>{attribute.name}</label>
      <input
        type='number'
        max='100'
        min='0'
        name={attribute.name}
        value={val}
        onChange={(e) => setVal(e.target.val)}
      />
    </div>
  )
}

export default Attribute

Attribute.propTypes = {
  attribute: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentageOfRent: PropTypes.number.isRequired, // number (1 - 100)
    })
  ).isRequired,
}
