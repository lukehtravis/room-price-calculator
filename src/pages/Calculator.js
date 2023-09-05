import React, {useState} from 'react';
import NumberInput from '../components/NumberInput';
import TextInput from '../components/TextInput';
import Attribute from '../components/Attribute';
import Matrix from '../components/Matrix';

const Calculator = () => {
  const [totalRent, setTotalRent] = useState(0);
  const [rentTotalSubmitted, setRentTotalSubmitted] = useState(false);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [roomNamesDialogue, setRoomNamesDialogue] = useState(false)
  const [roomNames, setRoomNames] = useState([])
  const [rooms, setRooms] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [attributePercentageTotal, setAttributePercentageTotal] = useState(0);

  const createPreRooms = (numberOfRooms) => {
    console.log("numberOfRooms inside createPreRooms: ", numberOfRooms)
    const emptyRoomNames = [...Array(Number(numberOfRooms))].map((u, i) => {
      return {number: i, name: ""}
    })
    console.log("emptyRoomNames:", emptyRoomNames)
    setRoomNames(emptyRoomNames)
    setRoomNamesDialogue(true)
  }

  const makeRooms = (roomNames) => {
      // We want to make an array of objects with a name: string property and an attributes:Array property
      // the input numberOfRooms is an array with objects of number: number and name: string 
      let finalRooms = roomNames.map(room => {
        return {name: room.name, attributes: []}
      })
      setRooms(finalRooms);
  }

  const onNameUpdate = (event, roomNames, i) => {
    const updatedRoomName = {...roomNames[i], name: event.target.value};
    const newRoomNames = [...roomNames];
    newRoomNames[i] = updatedRoomName
    setRoomNames(newRoomNames)
  }

  const addAttribute = () => {
    setAttributes(attributes.concat("clicked"));
  }

  console.log("roomNames: ", roomNames)
  return (
    <div className="App">
      <div className='room-rent-configurator'>
        <div>
          <NumberInput name="totalRent" value={totalRent} onNumberChange={setTotalRent} />
          <button onClick={() => setRentTotalSubmitted(true)}>Set Rent Total</button>
        </div>
        {(rentTotalSubmitted && rooms.length === 0) && (
          <div>
            <NumberInput name="numberOfRooms" value={numberOfRooms} onNumberChange={setNumberOfRooms} />
            <button onClick={() => createPreRooms(numberOfRooms)}>Submit Number Of Rooms</button>
            {roomNamesDialogue && (
              <div>
                {roomNames.map((x, i) =>
                  <div key={x}>
                    <label>{`Room ${i + 1} Name`}</label>
                    <input type='text' value={x.name} onChange={(event) => onNameUpdate(event, roomNames, i)} />
                  </div>
                )}
              </div>
            )}
            <button onClick={() => makeRooms(roomNames)}>Create Rooms</button>
          </div>
        )}
        {rooms.length > 0  && (
          <div className='attribute-section'>
            <button onClick={() => addAttribute()}>Add Attribute</button>
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
