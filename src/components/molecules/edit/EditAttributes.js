import { useContext } from 'react'
import { RoomsContext } from '../../../context/RoomsContext'
import Attribute from '../Attribute'
import { sumAttributePercentage } from '../../../utils/handlers/attributeHandlers'
import Button from '../../atoms/Button'
// import styles from './edit-attributes.module.css'
import InputGridAligner from '../../atoms/InputGridAligner'

const EditAttributes = () => {
  const { attributes, setAttributes, setShowEditAttributes } =
    useContext(RoomsContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    let newAttributes = []
    Object.entries(e.target.elements).forEach(([key, value]) => {
      if (key in attributes) {
        newAttributes.push({
          name: `${value.name}`,
          percentageOfRent: Number(`${value.value}`),
        })
      }
    })

    if (sumAttributePercentage(newAttributes) > 100) {
      alert(
        `Unfortunately your attribute percentage is ${sumAttributePercentage(
          newAttributes
        )}, which is over 100. Try and  modify things so that they add up to less and try again.`
      )
      return
    }

    setAttributes(newAttributes)
    setShowEditAttributes(false)
  }

  return (
    <div className='edit-attributes'>
      <form data-testid='submit-attribute-changes' onSubmit={handleSubmit}>
        {/* <div className={styles['modify-attributes-form']}> */}
        <InputGridAligner numberOfInputs={attributes.length}>
          {attributes.map((attribute) => {
            return <Attribute key={attribute.name} attribute={attribute} />
          })}
          {/* </div> */}
          <Button testid='edit-attributes-button'>Modify Attributes</Button>
        </InputGridAligner>
      </form>
    </div>
  )
}

export default EditAttributes
