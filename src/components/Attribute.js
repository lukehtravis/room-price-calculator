import React, {useState} from "react";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import Room from "./Room";
import calculateUnitTotals from "../utils/calculateUnitTotals";
import calculateAttributePricePerRoom from "../utils/calculateAttributePricePerRoom";

const Attribute = ({ rooms, setRooms, totalRent }) => {
    const [attributeName, setAttributeName] = useState("");
    const [attributePercentage, setAttributePercentage] = useState(0);
    const [attribute, setAttribute] = useState(null)
    const [roomAttributes, setRoomAttributes] = useState([]);
    const onSubmit = (event) => {
        event.preventDefault();
        setAttribute({attributeName, attributePercentage});
    }

    const onAttributeSubmit = (event) => {
        event.preventDefault();
        const totalUnits = calculateUnitTotals(roomAttributes);
        const roomsWithAttribute = rooms.map((room) => {
            return {
                ...room,
                attributes: [...room.attributes, {attributeName, name: room.name, roomUnits: roomAttributes.find((roomAttribute) => roomAttribute.name === room.name).value, totalUnits: totalUnits}]   
            }
            
        })
        setRooms(roomsWithAttribute);
    }
    return (
        <div className="attribute">
            <div className="attribute-entry">
                <div className="enter-attribute-name">
                    <TextInput name={"Attribute Name"} value={attributeName} onTextChange={setAttributeName} />
                </div>
                <div className="attribute-percentage">
                    <NumberInput name={"Attribute Percentage"} percentage={true} value={attributePercentage} onNumberChange={setAttributePercentage} />
                </div>
                <button onClick={onSubmit}>Create Attribute</button>
            </div>
            {attribute && (
              <div className="room-configuration">
                {rooms.map((room) => <Room roomAttributes={roomAttributes} setRoomAttributes={setRoomAttributes} name={room.name}/>)}
                <button onClick={onAttributeSubmit}>Submit Attribute Details</button>
              </div>
            )}
            <div className="display">
                {rooms.map((room) => {
                    return room.attributes.map((attribute) => {
                        return (
                            <div className="">
                                <div>Room: {attribute.name}</div>
                                <div>Attribute Name: {attribute.attributeName}</div>
                                <div>Units: {attribute.roomUnits}</div>
                                <div>Rent Share: {calculateAttributePricePerRoom(attribute.roomUnits, attribute.totalUnits, attributePercentage, totalRent)}</div>
                            </div>
                        )
                    })
                })}
            </div>
        </div>
    );
}

export default Attribute;