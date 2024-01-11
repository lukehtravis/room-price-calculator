import { useState, useContext } from 'react'
import CreateAttributes from '../components/CreateAttributes'
import Matrix from '../components/Matrix'
import { RoomsContext } from '../context/RoomsContext'
import { initialRentSubmit } from '../utils/handlers/rentHandlers'
import { createPreRooms, makeRooms } from '../utils/handlers/roomCreation'
import { sumAttributePercentage } from '../utils/handlers/attributeHandlers'
import EditAttributes from '../components/EditAttributes'

const Calculator = () => {
  const [roomsWereAdded, setRoomsWereAdded] = useState(false)
  const {
    rent,
    setRent,
    attributes,
    rooms,
    setRooms,
    showEditAttributes,
    setShowEditAttributes,
  } = useContext(RoomsContext)
  const attributePercentage = sumAttributePercentage(attributes)

  return (
    <div className='App'>
      <div className='room-rent-configurator'>
        {rent === 0 && (
          <form
            onSubmit={(e) => initialRentSubmit(e, setRent)}
            data-testid='rent-form'
          >
            <label htmlFor='totalRent'>Total Rent</label>
            <input
              type='number'
              name='totalRent'
              id='totalRent'
              min='0'
              data-testid='total-rent-input'
            />
            <button type='submit' data-testid='set-rent-button'>
              Set Rent Total
            </button>
          </form>
        )}
        {rent > 0 && !roomsWereAdded && (
          <div data-testid='rooms-form-container'>
            <form
              onSubmit={(e) => createPreRooms(e, setRooms)}
              style={{ display: `${rooms.length > 0 ? 'none' : 'block'}` }}
              data-testid='rooms-form'
            >
              <label htmlFor='numberOfRooms'>Number Of Rooms</label>
              <input
                type='number'
                name='numberOfRooms'
                id='numberOfRooms'
                min='1'
                data-testid='number-of-rooms-input'
              />
              <button type='submit' data-testid='submit-rooms-button'>
                Submit Number Of Rooms
              </button>
            </form>
            {rooms.length > 0 && (
              <form
                onSubmit={(e) => makeRooms(e, setRooms, setRoomsWereAdded)}
                data-testid='create-rooms-form'
              >
                {rooms.map((x, i) => (
                  <div key={x.name} data-testid={`room-entry-${i}`}>
                    <label htmlFor={`room-${i}`}>{`Room ${i + 1} Name`}</label>
                    <input
                      type='text'
                      name={`room-${i}`}
                      id={`room-${i}`}
                      data-testid={`room-name-input-${i}`}
                    />
                  </div>
                ))}
                <button type='submit' data-testid='create-rooms-button'>
                  Create Rooms
                </button>
              </form>
            )}
          </div>
        )}
        {roomsWereAdded &&
          (attributes.length < 1 || attributePercentage < 100) && (
            <div className='attribute-section' data-testid='attribute-section'>
              <CreateAttributes />
            </div>
          )}
        {showEditAttributes && <EditAttributes />}
        {attributes.length > 0 && <Matrix rooms={rooms} />}
        {attributes.length > 0 && (
          <button onClick={() => setShowEditAttributes(true)} type='button'>
            Edit Attributes
          </button>
        )}
      </div>
    </div>
  )
}

export default Calculator
