import { useContext } from 'react'
import styles from './matrix.module.css'
import { RoomsContext } from '../context/RoomsContext'
import calculateAttributePricePerRoom from '../utils/calculateAttributePricePerRoom'
import { roundNumber } from '../utils/roundNumber'

const Matrix = () => {
  const { rooms, attributes, rent } = useContext(RoomsContext)
  const width = 800
  const cellWidth = width / (attributes.length + 2)
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
    <div className='container' data-testid='matrix-component'>
      <div className={styles.table} style={{ width: width }}>
        <div className='table-header'>
          <div className={styles['table-header-row']}>
            <div
              className='table-header-cell'
              style={{ width: cellWidth }}
              data-testid='rooms-header'
            >
              Rooms
            </div>
            {attributes.map((attribute, i) => (
              <div
                key={i}
                style={{ width: cellWidth }}
                className='table-header-cell'
                data-testid={`attribute-header-${attribute.name}`}
              >
                <span
                  className='table-header-cell-name'
                  data-testid={`column-name`}
                >
                  {attribute.name}
                </span>
                <span
                  className={styles['column-percentage']}
                  data-testid={`column-percentage`}
                >
                  {attribute.percentageOfRent}%
                </span>
              </div>
            ))}
            <div
              className='table-header-cell'
              style={{ width: cellWidth }}
              data-testid='total-cost-header'
            >
              Total Cost
            </div>
          </div>
        </div>
        <div className='table-body'>
          {rooms.map((room, i) => {
            let totalRoomCost = 0
            return (
              <div
                key={i}
                className={`${styles['table-row']}`}
                data-testid={`room-row-${room.name}`}
              >
                <div
                  style={{ width: cellWidth }}
                  className='table-cell'
                  data-testid={`room-name-${room.name}`}
                >
                  {room.name}
                </div>
                {room.roomAttributes.map((attribute, j) => {
                  const attributePriceForThisRoom =
                    calculateAttributePricePerRoom(
                      attribute.units,
                      attributeUnitTotals[attribute.name],
                      attributes.find((attr) => attr.name === attribute.name)
                        .percentageOfRent,
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
                      key={j}
                      className='table-cell'
                      style={{ width: cellWidth }}
                      data-testid={`room-${room.name}-attribute-${attribute.name}`}
                    >
                      ${roundNumber(attributePriceForThisRoom, 2)}
                    </div>
                  )
                })}
                <div style={{ width: cellWidth }} className='table-cell'>
                  <span
                    className='total-cost-room'
                    data-testid={`total-cost-room-${room.name}`}
                  >
                    ${roundNumber(totalRoomCost, 2)}
                  </span>
                  <span
                    className={styles['total-percentage-room']}
                    data-testid={`total-percentage-room-${room.name}`}
                  >
                    {roundNumber((totalRoomCost / rent) * 100, 2)}%
                  </span>
                </div>
              </div>
            )
          })}
          <div className={`${styles['table-row']}`}>
            <div
              style={{ width: cellWidth }}
              className='table-cell'
              data-testid='totals-header'
            >
              Totals
            </div>
            {Object.values(attributeColumnTotals).map(
              (attributeValue, index) => (
                <div
                  key={index}
                  className='table-cell'
                  style={{ width: cellWidth }}
                  data-testid={`attribute-total-${index}`}
                >
                  ${roundNumber(attributeValue, 2)}
                </div>
              )
            )}
            <div
              className='table-cell grand-total-cell'
              style={{ width: cellWidth }}
            >
              <span className='grand-total-sum' data-testid='grand-total'>
                $
                {roundNumber(
                  Object.values(attributeColumnTotals).reduce(
                    (acc, curr) => acc + curr,
                    0
                  ),
                  2
                )}
              </span>
              <span
                className={styles['grand-total-percent']}
                data-testid='grand-total-percent'
              >
                {roundNumber(
                  Object.values(attributeColumnTotals).reduce(
                    (acc, curr) => acc + curr,
                    0
                  ) / rent,
                  2
                ) * 100}
                %
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matrix
