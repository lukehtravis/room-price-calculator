import PropTypes from 'prop-types'

const Attribute = ({ attribute }) => {
  return (
    <div className='attribute'>
      <label htmlFor={attribute.name}>{attribute.name}</label>
      <input
        type='number'
        max='100'
        min='0'
        name={attribute.name}
        id={attribute.name}
        defaultValue={attribute.percentageOfRent}
      />
    </div>
  )
}

export default Attribute

Attribute.propTypes = {
  attribute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percentageOfRent: PropTypes.number.isRequired, // number (1 - 100)
  }),
}
