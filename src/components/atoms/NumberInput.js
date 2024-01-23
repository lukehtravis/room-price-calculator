import PropTypes from 'prop-types'
import styles from './number-input.module.css'
const NumberInput = ({
  controlled = false,
  defaultValue = '',
  nameid,
  testid = nameid,
  classes = '',
  labelText = 'Number Input',
  min = '0',
  max = '100',
  onChange = null,
  value = '',
  tooltip = null,
}) => {
  return (
    <div className={`${styles['form-group']} ${classes}`}>
      <div className={styles.label}>
        <label htmlFor={nameid}>{labelText}</label>
        {tooltip && tooltip}
      </div>
      <input
        type='number'
        min={min}
        max={max}
        name={nameid}
        id={nameid}
        data-testid={testid}
        defaultValue={controlled ? undefined : defaultValue}
        onChange={onChange}
        value={controlled ? value : undefined}
      />
    </div>
  )
}

export default NumberInput

NumberInput.propTypes = {
  controlled: PropTypes.bool,
  defaultValue: PropTypes.number || PropTypes.string,
  value: PropTypes.any,
  nameid: PropTypes.string.isRequired,
  testid: PropTypes.string,
  classes: PropTypes.string,
  labelText: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  tooltip: PropTypes.node,
}
