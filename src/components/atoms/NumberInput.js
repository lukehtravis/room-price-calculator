import PropTypes from 'prop-types'
import styles from './number-input.module.css'
const NumberInput = ({
  defaultValue = '',
  nameid,
  testid,
  classes = '',
  labelText = 'Number Input',
  min = '0',
  max = '100',
}) => {
  return (
    <div className={`${styles['form-group']} ${classes}`}>
      <label htmlFor={nameid}>{labelText}</label>
      <input
        type='number'
        min={min}
        max={max}
        name={nameid}
        id={nameid}
        data-testid={testid}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default NumberInput

NumberInput.propTypes = {
  defaultValue: PropTypes.number || PropTypes.string,
  nameid: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  classes: PropTypes.string,
  labelText: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
}
