import PropTypes from 'prop-types'
import styles from './fancy-button.module.css'

const FancyButton = ({
  children,
  classes,
  clickHandler,
  testid = '',
  type = 'button',
}) => {
  return (
    <button
      data-testid={testid}
      onClick={clickHandler ? (e) => clickHandler(e) : null}
      className={`${styles.btn} ${classes}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default FancyButton

FancyButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  clickHandler: PropTypes.func,
  testid: PropTypes.string,
  classes: PropTypes.string,
}
