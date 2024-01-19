import { useState, useContext } from 'react'
import { RoomsContext } from '../../../context/RoomsContext'
import { defineAttribute } from '../../../utils/handlers/attributeHandlers'
import TextInput from '../../atoms/TextInput'
import InputGridAligner from '../../atoms/InputGridAligner'
import NumberInput from '../../atoms/NumberInput'
import Button from '../../atoms/Button'
import styles from './create-attributes.module.css'

const CreateAttributes = () => {
  const [attribute, setAttribute] = useState(null)
  const [inputsVisible, setInputsVisible] = useState(false)
  const { rooms, setRooms, attributes, setAttributes, setShowCreateAttribute } =
    useContext(RoomsContext)

  const applyAttributeToRooms = (event) => {
    // in the attributes state var, we store info about what percent of all rent is owned by each given attribute
    // but information about how each room relates to that percentage is stored in our rooms state, so here we update the rooms
    // with the new attribute and assign each a number of units
    event.preventDefault()
    const updatedRooms = rooms.map((room) => {
      room.roomAttributes.push({
        name: attribute.name,
        units: Number(event.target.elements[`${room.name}`].value),
      })
      return room
    })

    setRooms(updatedRooms)
    setAttributes([...attributes, attribute])
    setAttribute(null)
    setInputsVisible(false)
    setShowCreateAttribute(false)
  }

  return (
    <div
      className={styles['attributes-container']}
      data-testid='attribute-component'
    >
      {!attribute && (
        <form
          onSubmit={(e) =>
            defineAttribute(e, attributes, setAttribute, setInputsVisible)
          }
          className={styles['create-attributes-form']}
          style={{
            height: attributes.length > 0 ? '100%' : '100vh',
            marginTop: attributes.length > 0 ? '30px' : '0',
          }}
          data-testid='attribute-entry-form'
        >
          <div className={styles['attribute-inputs']}>
            <TextInput
              nameid='attributeName'
              testid='attribute-name-input'
              labelText='Attribute Name'
            />
            <NumberInput
              nameid='attributePercentage'
              testid='attribute-percentage-input'
              min='1'
              labelText='Attribute Percentage'
            />
            <Button
              classes={styles['attribute-button']}
              testid='create-attribute-button'
            >
              Create Attribute
            </Button>
          </div>
        </form>
      )}
      {inputsVisible && (
        <form
          onSubmit={applyAttributeToRooms}
          data-testid='room-configuration-form'
          className={styles['create-attributes-form']}
        >
          {/* <div className={styles['room-configurator']}> */}
          <InputGridAligner numberOfInputs={rooms.length}>
            {rooms.map((room) => (
              <TextInput
                key={room.name}
                nameid={room.name}
                labelText={room.name}
                testid={`room-input-${room.name}`}
              />
            ))}

            <Button testid='submit-attribute-details-button'>
              Apply Attribute To Rooms
            </Button>
          </InputGridAligner>
        </form>
      )}
    </div>
  )
}

export default CreateAttributes
