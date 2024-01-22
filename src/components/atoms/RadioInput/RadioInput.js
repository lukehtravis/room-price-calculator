import PropTypes from 'prop-types'
import styles from './radio-input.module.css'

const RadioInput = ({
  options,
  selectedValue,
  onChange,
  nameid,
  classes = '',
  testid = nameid,
}) => {
  return (
    <div className={`${styles['radio-group']} ${classes}`} role='radiogroup'>
      {options.map((option) => (
        <label className={styles.label} key={option.label}>
          <input
            type='radio'
            name={`${nameid}-${option.label}`}
            data-testid={`${testid}-${option.label}`}
            value={option.value}
            className={styles['radio-input']}
            checked={option.value === selectedValue}
            aria-checked={option.value === selectedValue}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className={styles['radio-design']}></div>
          <div className={styles['label-text']}>{option.label}</div>
        </label>
      ))}
    </div>
  )
}

RadioInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  nameid: PropTypes.string.isRequired,
  classes: PropTypes.string,
  ariaLabel: PropTypes.string,
  testid: PropTypes.string,
}

export default RadioInput
