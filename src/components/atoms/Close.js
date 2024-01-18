import { PropTypes } from 'prop-types'
import styles from './close.module.css'
// Button that looks like an X and closes out modals
const Close = ({ buttonText = '', testId = '', handleClick }) => {
  return (
    <button
      type='button'
      data-testid={testId}
      onClick={() => handleClick(false)}
      className={styles.button}
    >
      <span className={styles.X}></span>
      <span className={styles.Y}></span>
    </button>
  )
}

export default Close

Close.propTypes = {
  buttonText: PropTypes.string,
  testId: PropTypes.string,
  handleClick: PropTypes.func,
}
