import React, { useState }from 'react'
import NumberInput from './NumberInput'

const Room = ({name, setRoomAttributes, roomAttributes}) => {
    const [value, setValue] = useState(0);
    const onNumberChange = (number) => {
        setValue(number);
        const currentRoomAttributesIndex = roomAttributes.findIndex((roomAttribute) => roomAttribute.name === name);
        if (currentRoomAttributesIndex === -1) {
            // If this is the first time this room is being updated, we need to add it to the array
            setRoomAttributes(
                [ // with a new array
                    ...roomAttributes, // that contains all the old items
                    { name: name, value: number } // and one new item at the end
                ]
            )
            // Bust outta this function
            return;
        }
        // If we get here, we know that the room has already been added to the array, and we are going to update the 
        // particular value that belongs to this room
        const updatedRoomAttributes = {...roomAttributes[currentRoomAttributesIndex], value: number};
        const newroomAttributes = [...roomAttributes];
        newroomAttributes[currentRoomAttributesIndex] = updatedRoomAttributes;
        setRoomAttributes(newroomAttributes);
    }
    return (
        <div>
            <NumberInput name={name} value={value} onNumberChange={onNumberChange} />
        </div>
    )
}

export default Room;
