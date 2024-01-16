import PropTypes from 'prop-types'
import styles from './text-input.module.css'
const TextInput = ({
  defaultValue = '',
  nameid,
  testid,
  classes = '',
  labelText = 'Number Input',
}) => {
  return (
    <div className={`${styles['label-input-group']} ${classes}`}>
      <label htmlFor={nameid}>{labelText}</label>
      <input
        type='text'
        name={nameid}
        id={nameid}
        data-testid={testid}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default TextInput

TextInput.propTypes = {
  defaultValue: PropTypes.number || PropTypes.string,
  nameid: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  classes: PropTypes.string,
  labelText: PropTypes.string,
}
