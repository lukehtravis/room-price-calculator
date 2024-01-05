import React, {useState, useContext} from 'react';
import NumberInput from '../components/NumberInput';
import Attribute from '../components/Attribute';
import Matrix from '../components/Matrix';
import { RoomsContext } from '../context/RoomsContext'
import { initialRentSubmit } from '../utils/handlers/rentHandlers';
import { createPreRooms, makeRooms } from '../utils/handlers/roomCreation';

const Calculator = () => {
  const [rooms, setRooms] = useState([]); // moved to context
  const [attributes, setAttributes] = useState([]); // moved to context
  const [attributePercentageTotal, setAttributePercentageTotal] = useState(0); // should get rid of this, should be derived
  const {rent, setRent} = useContext(RoomsContext)

  const addAttribute = () => {
    setAttributes(attributes.concat("clicked"));
  }

  return (
    <div className="App">
      <div className='room-rent-configurator'>
        <form onSubmit={(e) => initialRentSubmit(e, setRent)}>
          <input type="number" name="totalRent" min="0" />
          <button type='submit'>Set Rent Total</button>
        </form>
        {rent > 0 && (
          <div>
              <form onSubmit={(e) => createPreRooms(e, setRooms)} style={{display: `${rooms.length > 0 ? 'none' : 'block'}`}}>
                <input type='number' name="numberOfRooms" />
                <button type="submit">Submit Number Of Rooms</button>
              </form>
            {rooms.length > 0 && (
              <form onSubmit={(e) => makeRooms(e, setRooms)}>
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
        {/* {rooms.length > 0  && (
          <div className='attribute-section'>
            <button onClick={() => addAttribute()}>Add Attribute</button>
            {attributes.map(() => {
              return <Attribute attributePercentageTotal={attributePercentageTotal} setAttributePercentageTotal={setAttributePercentageTotal} rooms={rooms} setRooms={setRooms} totalRent={totalRent} />;
            })}
          </div>
        )} */}
        {/* {rooms[0] && rooms[0].attributes.length > 0 && (
          <Matrix rooms={rooms} />
        )
        } */}
      </div>
    </div>
  );
}

export default Calculator;
