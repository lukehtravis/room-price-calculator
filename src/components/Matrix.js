import { useContext } from 'react'
import styles from './matrix.module.css'
import { RoomsContext } from '../context/RoomsContext'
import calculateAttributePricePerRoom from '../utils/calculateAttributePricePerRoom'
import { roundNumber } from '../utils/roundNumber'

const Matrix = () => {
  const { rooms, attributes, rent } = useContext(RoomsContext)
  const attributeUnitTotals = {}
  const attributeColumnTotals = {}
  rooms.forEach((room) => {
    room.roomAttributes.forEach((attribute) => {
      if (attribute.name in attributeUnitTotals) {
        attributeUnitTotals[attribute.name] += attribute.units
      } else {
        attributeUnitTotals[attribute.name] = attribute.units
      }
    })
  })

  return (
    <div className={styles.container} data-testid='matrix-component'>
      <div className={styles.table}>
        <div className={styles['table-header']}>
          <div
            style={{
              gridTemplateColumns: `repeat(auto-fill, minmax(calc(100% / ${
                attributes.length + 2
              }), 1fr))`,
            }}
            className={styles['table-header-row']}
          >
            <div
              className={styles['table-header-cell']}
              data-testid='rooms-header'
            >
              Rooms
            </div>
            {attributes.map((attribute, i) => (
              <div
                key={i}
                className={styles['table-header-cell']}
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
              className={styles['table-header-cell']}
              data-testid='total-cost-header'
            >
              Total Cost
            </div>
          </div>
        </div>
        <div className={styles['table-body']}>
          {rooms.map((room, i) => {
            let totalRoomCost = 0
            return (
              <div
                key={i}
                style={{
                  gridTemplateColumns: `repeat(auto-fill, minmax(calc(100% / ${
                    attributes.length + 2
                  }), 1fr))`,
                }}
                className={`${styles['table-row']}`}
                data-testid={`room-row-${room.name}`}
              >
                <div
                  className={styles['table-cell']}
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
                      className={styles['table-cell']}
                      data-testid={`room-${room.name}-attribute-${attribute.name}`}
                    >
                      ${roundNumber(attributePriceForThisRoom, 2)}
                    </div>
                  )
                })}
                <div className={styles['table-cell']}>
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
          <div
            style={{
              gridTemplateColumns: `repeat(auto-fill, minmax(calc(100% / ${
                attributes.length + 2
              }), 1fr))`,
            }}
            className={`${styles['table-row']}`}
          >
            <div className={styles['table-cell']} data-testid='totals-header'>
              Totals
            </div>
            {Object.values(attributeColumnTotals).map(
              (attributeValue, index) => (
                <div
                  key={index}
                  className={styles['table-cell']}
                  data-testid={`attribute-total-${index}`}
                >
                  ${roundNumber(attributeValue, 2)}
                </div>
              )
            )}
            <div className={`${styles['table-cell']} grand-total-cell`}>
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
