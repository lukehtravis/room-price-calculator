import './App.css';
import React, {useState} from 'react';
import NumberInput from './components/NumberInput';
import Attribute from './components/Attribute';

function App() {
  const [totalRent, setTotalRent] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [attributes, setAttributes] = useState([]);
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
  console.log("rooms:", rooms)
  return (
    <div className="App">
      <div>
        <NumberInput name="totalRent" value={totalRent} onNumberChange={setTotalRent} />
        <NumberInput name="numberOfRooms" value={numberOfRooms} onNumberChange={setNumberOfRooms} />
        <button onClick={() => makeRooms(numberOfRooms)}>Create Rooms</button>
        {rooms.length > 0  && (
          <Attribute rooms={rooms} setRooms={setRooms} totalRent={totalRent} />
        )}
      </div>
    </div>
  );
}

export default App;
