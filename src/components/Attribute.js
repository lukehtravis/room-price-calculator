import PropTypes from 'prop-types'
import NumberInput from '../components/atoms/NumberInput'
const Attribute = ({ attribute }) => {
  return (
    <div className='attribute'>
      <NumberInput
        labelText={attribute.name}
        nameid={attribute.name}
        defaultValue={attribute.percentageOfRent}
        testid={`edit-attribute-input-${attribute.name}`}
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
