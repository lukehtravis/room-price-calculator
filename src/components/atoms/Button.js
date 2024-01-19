import styles from './button.module.css'
import PropTypes from 'prop-types'
const Button = ({
  children,
  type = 'submit',
  clickHandler,
  testid,
  classes = '',
}) => {
  return (
    <div>
      <button
        data-testid={testid}
        onClick={clickHandler ? (e) => clickHandler(e) : null}
        className={`${styles.button} ${classes}`}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  clickHandler: PropTypes.func,
  testid: PropTypes.string,
  classes: PropTypes.string,
}
