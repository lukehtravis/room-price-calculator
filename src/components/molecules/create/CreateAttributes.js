import { useState, useContext } from 'react'
import { RoomsContext } from '../../../context/RoomsContext'
import { defineAttribute } from '../../../utils/handlers/attributeHandlers'
import TextInput from '../../atoms/TextInput'
import InputGridAligner from '../../atoms/InputGridAligner'
import Tooltip from '../../atoms/Tooltip/Tooltip'
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
              tooltip={
                <Tooltip>
                  The name of your attribute. For instance, Square Feet
                </Tooltip>
              }
            />
            <NumberInput
              nameid='attributePercentage'
              testid='attribute-percentage-input'
              min='1'
              labelText='Attribute Percentage'
              tooltip={
                <Tooltip>
                  <p>
                    Percent of total rent which you want this attribute to be
                    responsible for.
                  </p>
                  <p>
                    For instance, if your attribute is square feet, and you want
                    square feet to account for 50% of the price ofd rent, put 50
                    in the box below
                  </p>
                </Tooltip>
              }
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
          <InputGridAligner numberOfInputs={rooms.length}>
            {rooms.map((room) => (
              <NumberInput
                min='0'
                max='10000000'
                key={room.name}
                nameid={room.name}
                labelText={room.name}
                testid={`room-input-${room.name}`}
                tooltip={
                  <Tooltip>
                    <p>
                      This number will represent how many units of a particular
                      attribute this room has. Any units can be used.
                    </p>
                    <p>
                      So if this attribute were square feet, we could type in
                      the number of square feet. If it were closets, we could
                      put a 1 for has closet, or a zero for has no closet. If we
                      were using a category that is abstract, such as privacy,
                      we can rank each room numerically in terms of privacy
                      (rooms with more privacy get higher numbers)
                    </p>
                  </Tooltip>
                }
              />
            ))}

            <Button testid='submit-attribute-details-button'>
              Apply Attributes
            </Button>
          </InputGridAligner>
        </form>
      )}
    </div>
  )
}

export default CreateAttributes
