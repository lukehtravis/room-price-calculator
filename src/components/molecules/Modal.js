import { PropTypes } from 'prop-types'
import Portal from '../atoms/Portal'
import styles from './modal.module.css'
import Close from '../atoms/Close'

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null
  return (
    <Portal wrapperId='portal-modal-container'>
      <div className={`${styles.modal}`}>
        <div className={`${styles['modal-content']}`}>
          <Close handleClick={handleClose} />
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
}
