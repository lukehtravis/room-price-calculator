import { useContext } from 'react'
import { RoomsContext } from '../../context/RoomsContext'
import Button from '../atoms/Button'
import styles from './edit-buttons.module.css'
import { sumAttributePercentage } from '../../utils/handlers/attributeHandlers'

const EditButtons = () => {
  const {
    attributes,
    setShowEditAttributes,
    setShowCreateAttribute,
    setShowEditRent,
  } = useContext(RoomsContext)
  const attributePercentage = sumAttributePercentage(attributes)
  return (
    <div className={styles['edit-buttons']}>
      {attributes.length >= 1 && (
        <Button
          type='button'
          testid='generate-edit-attributes-dialogue'
          clickHandler={() => setShowEditAttributes(true)}
        >
          Edit Attributes
        </Button>
      )}
      {attributePercentage < 100 && (
        <Button
          type='button'
          testid='generate-create-attributes-dialogue'
          clickHandler={() => setShowCreateAttribute(true)}
        >
          Create Attributes
        </Button>
      )}
      <Button
        type='button'
        data-testid='generate-edit-rent-dialogue'
        clickHandler={() => setShowEditRent(true)}
      >
        Edit Rent
      </Button>
    </div>
  )
}

export default EditButtons
