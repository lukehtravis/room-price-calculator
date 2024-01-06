import React, {useState, useContext} from 'react';
import NumberInput from '../components/NumberInput';
import Attribute from '../components/Attribute';
import Matrix from '../components/Matrix';
import { RoomsContext } from '../context/RoomsContext'
import { initialRentSubmit } from '../utils/handlers/rentHandlers';
import { createPreRooms, makeRooms } from '../utils/handlers/roomCreation';

const Calculator = () => {
  const [roomsHaveBeenCreated, setRoomsHaveBeenCreated] = useState(false)
  const {rent, setRent, attributes, setAttributes, rooms, setRooms} = useContext(RoomsContext)

  const addAttribute = () => {
    setAttributes([...attributes, {name: "", percentageOfRent: 0}]);
  }
  console.log(rooms, attributes)
  return (
    <div className="App">
      <div className='room-rent-configurator'>
        <form onSubmit={(e) => initialRentSubmit(e, setRent)} style={{display: `${roomsHaveBeenCreated ? 'none' : 'block'}`}}>
          <input type="number" name="totalRent" min="0" />
          <button type='submit'>Set Rent Total</button>
        </form>
        {rent > 0 && (
          <div style={{display: `${roomsHaveBeenCreated ? 'none' : 'block'}`}}>
              <form onSubmit={(e) => createPreRooms(e, setRooms)} style={{display: `${rooms.length > 0 ? 'none' : 'block'}`}}>
                <input type='number' name="numberOfRooms" />
                <button type="submit">Submit Number Of Rooms</button>
              </form>
            {rooms.length > 0 && (
              <form onSubmit={(e) => makeRooms(e, setRooms, setRoomsHaveBeenCreated)}>
                {rooms.map((x, i) =>
                  <div key={x.name}>
                    <label>{`Room ${i + 1} Name`}</label>
                    <input type='text' name={`room-${i}`} />
                  </div>
                )}
                <button type="submit">Create Rooms</button>
              </form>
            )}
          </div>
        )}
        {roomsHaveBeenCreated && (
          <div className='attribute-section'>
             <Attribute />
          </div>
        )}
        {attributes.length && (
          <Matrix rooms={rooms} />
        )
        }
      </div>
    </div>
  );
}

export default Calculator;
