import React, { useState, useContext } from 'react'
import { RoomsContext } from '../context/RoomsContext'

const Attribute = () => {
  const [attribute, setAttribute] = useState(null)
  const [inputsVisible, setInputsVisible] = useState(false)
  const { rooms, setRooms, attributes, setAttributes } =
    useContext(RoomsContext)

  const defineAttribute = (event) => {
    event.preventDefault()
    const attributePercentageTotal = attributes.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.percentageOfRent,
      0
    )
    const attributePercentage = Number(
      event.target.elements.attributePercentage.value
    )
    if (attributePercentageTotal + attributePercentage > 100) {
      alert(
        `Attribute percentage total cannot exceed 100. Current total is ${
          attributePercentageTotal + attributePercentage
        }`
      )
      return
    }
    setAttribute({
      name: event.target.elements.attributeName.value,
      percentageOfRent: attributePercentage,
    })
    setInputsVisible(true)
  }

  const applyAttributeToRooms = (event) => {
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
        <form onSubmit={defineAttribute} className='attribute-entry'>
          <div className='enter-attribute-name'>
            <label htmlFor='attributeName'>Attribute Name</label>
            <input name={'attributeName'} type='text' />
          </div>
          <div className='attribute-percentage'>
            <label htmlFor='attributePercentage'>Attribute Percentage</label>
            <input name='attributePercentage' min='1' max='100' />
          </div>
          <button type='submit'>Create Attribute</button>
        </form>
      )}
      {inputsVisible && (
        <form onSubmit={applyAttributeToRooms} className='room-configuration'>
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
