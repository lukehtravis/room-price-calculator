import { useState, useContext } from 'react'
import CreateAttributes from '../components/molecules/create/CreateAttributes'
import Matrix from '../components/molecules/Matrix'
import { RoomsContext } from '../context/RoomsContext'
import CreateRooms from '../components/molecules/create/CreateRooms'
import { sumAttributePercentage } from '../utils/handlers/attributeHandlers'
import EditAttributes from '../components/molecules/edit/EditAttributes'
import CreateRent from '../components/molecules/create/CreateRent'
import EditRent from '../components/molecules/edit/EditRent'
import styles from './calculator.module.css'
import Button from '../components/atoms/Button'

const Calculator = () => {
  const [roomsWereAdded, setRoomsWereAdded] = useState(false)
  const {
    rent,
    attributes,
    showEditAttributes,
    setShowEditAttributes,
    showEditRent,
    setShowEditRent,
  } = useContext(RoomsContext)
  const attributePercentage = sumAttributePercentage(attributes)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {rent === 0 && <CreateRent />}
        {rent > 0 && !roomsWereAdded && (
          <CreateRooms setRoomsWereAdded={setRoomsWereAdded} />
        )}
        {roomsWereAdded &&
          (attributes.length < 1 || attributePercentage < 100) &&
          !showEditAttributes &&
          !showEditRent && <CreateAttributes />}
        {showEditAttributes && <EditAttributes />}
        {showEditRent && <EditRent />}
        {attributes.length > 0 && <Matrix />}
        {attributes.length > 0 && !showEditAttributes && !showEditRent && (
          <div className={styles['edit-buttons']}>
            <Button
              type='button'
              testid='generate-edit-attributes-dialogue'
              clickHandler={() => setShowEditAttributes(true)}
            >
              Edit Attributes
            </Button>
            <Button
              type='button'
              data-testid='generate-edit-rent-dialogue'
              clickHandler={() => setShowEditRent(true)}
            >
              Edit Rent
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculator
