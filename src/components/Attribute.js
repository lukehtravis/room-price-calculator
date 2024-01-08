import React, { useState, useContext } from 'react'
import { RoomsContext } from '../context/RoomsContext'
import { defineAttribute } from '../utils/handlers/attributeHandlers'

const Attribute = () => {
  const [attribute, setAttribute] = useState(null)
  const [inputsVisible, setInputsVisible] = useState(false)
  const { rooms, setRooms, attributes, setAttributes } =
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
  }

  return (
    <div className='attribute' data-testid='attribute-component'>
      {!attribute && (
        <form
          onSubmit={(e) =>
            defineAttribute(e, attributes, setAttribute, setInputsVisible)
          }
          className='attribute-entry'
          data-testid='attribute-entry-form'
        >
          <div className='enter-attribute-name'>
            <label htmlFor='attributeName'>Attribute Name</label>
            <input
              name={'attributeName'}
              type='text'
              data-testid='attribute-name-input'
            />
          </div>
          <div className='attribute-percentage'>
            <label htmlFor='attributePercentage'>Attribute Percentage</label>
            <input
              type='number'
              name='attributePercentage'
              min='1'
              max='100'
              data-testid='attribute-percentage-input'
            />
          </div>
          <button type='submit' data-testid='create-attribute-button'>
            Create Attribute
          </button>
        </form>
      )}
      {inputsVisible && (
        <form
          onSubmit={applyAttributeToRooms}
          className='room-configuration'
          data-testid='room-configuration-form'
        >
          {rooms.map((room) => (
            <div key={room.name} data-testid={`room-config-${room.name}`}>
              <label htmlFor={room.name}>{room.name}</label>
              <input
                type='number'
                name={room.name}
                data-testid={`room-input-${room.name}`}
              />
            </div>
          ))}
          <button type='submit' data-testid='submit-attribute-details-button'>
            Submit Attribute Details
          </button>
        </form>
      )}
    </div>
  )
}

export default Attribute
