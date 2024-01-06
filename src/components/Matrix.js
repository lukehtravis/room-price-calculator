import React, { useContext } from 'react'
import './matrix.css'
import { RoomsContext } from '../context/RoomsContext'
import calculateAttributePricePerRoom from '../utils/calculateAttributePricePerRoom'
import { roundNumber } from '../utils/roundNumber'

const Matrix = () => {
  const { rooms, attributes, rent } = useContext(RoomsContext)
  const width = 800
  const attributeNames = attributes.map((attribute) => attribute.name)
  const cellWidth = width / (attributeNames.length + 2)
  const attributeUnitTotals = {}
  rooms.forEach((room) => {
    room.roomAttributes.forEach((attribute) => {
      if (attribute.name in attributeUnitTotals) {
        attributeUnitTotals[attribute.name] += attribute.units
      } else {
        attributeUnitTotals[attribute.name] = attribute.units
      }
    })
  })
  const attributeColumnTotals = {}
  return (
    <div className='container'>
      <div className='table' style={{ width: width }}>
        <div className='table-header'>
          <div className='table-header-row'>
            <div className='table-header-cell' style={{ width: cellWidth }}>
              Rooms
            </div>
            {attributeNames.map((attributeName, i) => (
              <div
                key={i}
                style={{ width: cellWidth }}
                className='table-header-cell'
              >
                {attributeName}
              </div>
            ))}
            <div className='table-header-cell' style={{ width: cellWidth }}>
              Total Cost
            </div>
          </div>
        </div>
        <div className='table-body'>
          {rooms.map((room, i) => {
            let totalRoomCost = 0
            return (
              <div key={i} className='table-row'>
                <div style={{ width: cellWidth }} className='table-cell'>
                  {room.name}
                </div>
                {room.roomAttributes.map((attribute, i) => {
                  const attributePriceForThisRoom =
                    calculateAttributePricePerRoom(
                      attribute.units,
                      attributeUnitTotals[attribute.name],
                      attributes[i].percentageOfRent,
                      rent
                    )
                  totalRoomCost += attributePriceForThisRoom

                  if (attribute.name in attributeColumnTotals) {
                    attributeColumnTotals[attribute.name] +=
                      attributePriceForThisRoom
                  } else {
                    attributeColumnTotals[attribute.name] =
                      attributePriceForThisRoom
                  }

                  return (
                    <div
                      key={i}
                      className='table-cell'
                      style={{ width: cellWidth }}
                    >
                      ${roundNumber(totalRoomCost, 2)}
                    </div>
                  )
                })}
                <div style={{ width: cellWidth }} className='table-cell'>
                  ${roundNumber(totalRoomCost, 2)}
                </div>
              </div>
            )
          })}
          <div className='table-row'>
            <div style={{ width: cellWidth }} className='table-cell'>
              Totals
            </div>
            {Object.values(attributeColumnTotals).map(
              (attributeValue, index) => {
                return (
                  <div
                    key={index}
                    className='table-cell'
                    style={{ width: cellWidth }}
                  >
                    ${attributeValue}
                  </div>
                )
              }
            )}
            <div className='table-cell' style={{ width: cellWidth }}>
              $
              {Object.values(attributeColumnTotals).reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matrix
