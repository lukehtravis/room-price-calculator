import PropType from 'prop-types'
import styles from './tooltip.module.css'

const Tooltip = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tooltip}>
        <div className={styles.icon}>?</div>
        <div className={styles.tooltiptext}>{children}</div>
      </div>
    </div>
  )
}

export default Tooltip

Tooltip.propTypes = {
  children: PropType.node,
}
