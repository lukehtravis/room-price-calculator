import React, {useState} from "react";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import Room from "./Room";
import calculateUnitTotals from "../utils/calculateUnitTotals";
import calculateAttributePricePerRoom from "../utils/calculateAttributePricePerRoom";

const Attribute = ({ rooms, setRooms, totalRent, attributePercentageTotal, setAttributePercentageTotal }) => {
    const [attributeName, setAttributeName] = useState("");
    const [attributePercentage, setAttributePercentage] = useState(0);
    const [attribute, setAttribute] = useState(null)
    const [inputsVisible, setInputsVisible] = useState(false);
    const [roomAttributes, setRoomAttributes] = useState([]);
    const onAttributeDefine = (event) => {
        event.preventDefault();
        
        console.log("attributePercentageTotal", attributePercentageTotal, "attributePercentage", attributePercentage, "total", attributePercentageTotal + attributePercentage)
        if ((attributePercentageTotal + attributePercentage) > 100) {
            alert(`Attribute percentage total cannot exceed 1. Current total is ${attributePercentageTotal + attributePercentage}`);
            return;
        }
        setAttribute({attributeName, attributePercentage});
        setAttributePercentageTotal(attributePercentageTotal + attributePercentage);
        setInputsVisible(true);
    }

    const onAttributeSubmit = (event) => {
        event.preventDefault();
        const totalUnits = calculateUnitTotals(roomAttributes);
        const roomsWithAttribute = rooms.map((room) => {
            const roomUnits = Number(roomAttributes.find((roomAttribute) => roomAttribute.name === room.name).value)
            return {
                ...room,
                attributes: [...room.attributes, {attributeName, name: room.name, cost: calculateAttributePricePerRoom(roomUnits, totalUnits, attributePercentage, totalRent), roomUnits: roomUnits, totalUnits: totalUnits}]   
            } 
        })
        setRooms(roomsWithAttribute);
        setInputsVisible(false);
    }

    return (
        <div className="attribute">
           {!attribute && <div className="attribute-entry">
                <div className="enter-attribute-name">
                    <TextInput name={"Attribute Name"} value={attributeName} onTextChange={setAttributeName} />
                </div>
                <div className="attribute-percentage">
                    <NumberInput name={"Attribute Percentage"} percentage={true} value={attributePercentage} onNumberChange={setAttributePercentage} />
                </div>
                <button onClick={onAttributeDefine}>Create Attribute</button>
            </div>}
            {inputsVisible && (
              <div className="room-configuration">
                {rooms.map((room) => <Room key={room.name} roomAttributes={roomAttributes} setRoomAttributes={setRoomAttributes} name={room.name}/>)}
                <button onClick={onAttributeSubmit}>Submit Attribute Details</button>
              </div>
            )}
        </div>
    );
}

export default Attribute;