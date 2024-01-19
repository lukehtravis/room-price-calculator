import PropTypes from 'prop-types'
import styles from './input-grid-aligner.module.css'

const InputGridAligner = ({ numberOfInputs, children }) => {
  return (
    <div>
      <div
        className={
          numberOfInputs <= 2
            ? styles['input-grid-horizontal']
            : styles['input-grid-vertical']
        }
      >
        {children}
      </div>
    </div>
  )
}

export default InputGridAligner

InputGridAligner.propTypes = {
  children: PropTypes.node,
  numberOfInputs: PropTypes.number,
}
