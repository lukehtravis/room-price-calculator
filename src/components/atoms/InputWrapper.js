import PropTypes from 'prop-types'

const InputWrapper = ({ children, width = '100%' }) => {
  return (
    <div
      className='input-wrapper'
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: width,
      }}
    >
      {children}
    </div>
  )
}

export default InputWrapper

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
}
