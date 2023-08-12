import React, {useState} from 'react';
import NumberInput from '../components/NumberInput';
import Attribute from '../components/Attribute';
import Matrix from '../components/Matrix';

const Calculator = () => {
  const [totalRent, setTotalRent] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [attributePercentageTotal, setAttributePercentageTotal] = useState(0);

  const makeRooms = (numberOfRooms) => {
    if (numberOfRooms > 0 && rooms.length === 0) {
      const roomsTemp = [...Array(Number(numberOfRooms))].map((u, i) => {
        return {name: `Room ${i}`, attributes: []}
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

export default Calculator;
