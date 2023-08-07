import './App.css';
import React, {useState} from 'react';
import NumberInput from './components/NumberInput';
import Attribute from './components/Attribute';
import Matrix from './components/Matrix';

function App() {
  const [totalRent, setTotalRent] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [attributePercentageTotal, setAttributePercentageTotal] = useState(0);
  // The way it will work is that 
  // 1. We define a total rent share
  // 2. We define a number of rooms
  // 3. We create an attribute
  // 4. That attribute is given a percentage of the total rent share
  // 5. That attribute is given a total number of units to be split amongst the rooms
  // 6. Each room is given a percentage of the total number of units
  // 7. That percentage is multiplied by the (total rent share * attribute) to generate amount owed per attribute
  // 8. Amount owed per attribute is tallied for each room and added to a table
  // 9. Table is displayed

  const makeRooms = (numberOfRooms) => {
    if (numberOfRooms > 0 && rooms.length === 0) {
      const roomsTemp = [...Array(Number(numberOfRooms))].map((u, i) => {
        return {name: i, attributes: []}
      })
      setRooms(roomsTemp);
    }
  }

  const addAttribute = () => {
    setAttributes(attributes.concat("clicked"));
  }
  console.log(rooms);
  return (
    <div className="App">
      <div className='room-rent-configurator'>
        <NumberInput name="totalRent" value={totalRent} onNumberChange={setTotalRent} />
        <NumberInput name="numberOfRooms" value={numberOfRooms} onNumberChange={setNumberOfRooms} />
        <button onClick={() => makeRooms(numberOfRooms)}>Create Rooms</button>
        {rooms.length > 0  && (
          <div className='attribute-section'>
            <button onClick={addAttribute}>Add Attribute</button>
            {attributes.map((attribute, i) => {
              return <Attribute attributePercentageTotal={attributePercentageTotal} setAttributePercentageTotal={setAttributePercentageTotal} rooms={rooms} setRooms={setRooms} totalRent={totalRent} />;
            })}
          </div>
        )}
        {rooms[0] && rooms[0].attributes.length > 0 && (
          <Matrix rooms={rooms} />
        )
        }
      </div>
    </div>
  );
}

export default App;
