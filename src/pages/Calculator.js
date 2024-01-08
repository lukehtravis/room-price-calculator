import React, { useState, useContext } from 'react'
import Attribute from '../components/Attribute'
import Matrix from '../components/Matrix'
import { RoomsContext } from '../context/RoomsContext'
import { initialRentSubmit } from '../utils/handlers/rentHandlers'
import { createPreRooms, makeRooms } from '../utils/handlers/roomCreation'

const Calculator = () => {
  const [roomsHaveBeenCreated, setRoomsHaveBeenCreated] = useState(false)
  const { rent, setRent, attributes, rooms, setRooms } =
    useContext(RoomsContext)

  return (
    <div className='App'>
      <div className='room-rent-configurator'>
        <form
          onSubmit={(e) => initialRentSubmit(e, setRent)}
          style={{ display: `${roomsHaveBeenCreated ? 'none' : 'block'}` }}
          data-testid='rent-form'
        >
          <label htmlFor='totalRent'>Total Rent</label>
          <input
            type='number'
            name='totalRent'
            min='0'
            data-testid='total-rent-input'
          />
          <button type='submit' data-testid='set-rent-button'>
            Set Rent Total
          </button>
        </form>
        {rent > 0 && (
          <div
            style={{ display: `${roomsHaveBeenCreated ? 'none' : 'block'}` }}
            data-testid='rooms-form-container'
          >
            <form
              onSubmit={(e) => createPreRooms(e, setRooms)}
              style={{ display: `${rooms.length > 0 ? 'none' : 'block'}` }}
              data-testid='rooms-form'
            >
              <label htmlFor='numberOfRooms'>Number Of Rooms</label>
              <input
                type='number'
                name='numberOfRooms'
                min='1'
                data-testid='number-of-rooms-input'
              />
              <button type='submit' data-testid='submit-rooms-button'>
                Submit Number Of Rooms
              </button>
            </form>
            {rooms.length > 0 && (
              <form
                onSubmit={(e) =>
                  makeRooms(e, setRooms, setRoomsHaveBeenCreated)
                }
                data-testid='create-rooms-form'
              >
                {rooms.map((x, i) => (
                  <div key={x.name} data-testid={`room-entry-${i}`}>
                    <label>{`Room ${i + 1} Name`}</label>
                    <input
                      type='text'
                      name={`room-${i}`}
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
        {roomsHaveBeenCreated && (
          <div className='attribute-section' data-testid='attribute-section'>
            <Attribute />
          </div>
        )}
        {attributes.length > 0 && <Matrix rooms={rooms} />}
      </div>
    </div>
  )
}

export default Calculator
