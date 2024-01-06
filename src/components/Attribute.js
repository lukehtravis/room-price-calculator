import React, { useState, useContext } from 'react'
import { RoomsContext } from '../context/RoomsContext'
import { defineAttribute } from '../utils/handlers/attributeHandlers'

// This component is a creation interface for new attributes. We create new attributes using the form fields, and store the
// new attributes in our attributes state and in our rooms state

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
    <div className='attribute'>
      {!attribute && (
        <form
          onSubmit={(e) =>
            defineAttribute(e, attributes, setAttribute, setInputsVisible)
          }
          className='attribute-entry'
        >
          {/** here we create form fields so users can define a new attributes name and what percent of total rent it is responsible for */}
          <div className='enter-attribute-name'>
            <label htmlFor='attributeName'>Attribute Name</label>
            <input name={'attributeName'} type='text' />
          </div>
          <div className='attribute-percentage'>
            <label htmlFor='attributePercentage'>Attribute Percentage</label>
            <input type='number' name='attributePercentage' min='1' max='100' />
          </div>
          <button type='submit'>Create Attribute</button>
        </form>
      )}
      {inputsVisible && (
        <form onSubmit={applyAttributeToRooms} className='room-configuration'>
          {/** here we create form fields so users can input how many units each room gets for this attribute */}
          {rooms.map((room) => (
            <div key={room.name}>
              <label htmlFor={room.name}>{room.name}</label>
              <input type='number' name={room.name} />
            </div>
          ))}
          <button type='submit'>Submit Attribute Details</button>
        </form>
      )}
    </div>
  )
}

export default Attribute
