/* eslint-disable no-unexpected-multiline */
import { useContext, useState } from 'react'
import styles from './edit-rooms.module.css'
import RadioInput from '../../../atoms/RadioInput/RadioInput'
import { RoomsContext } from '../../../../context/RoomsContext'
import NumberInput from '../../../atoms/NumberInput'
import InputGridAligner from '../../../atoms/InputGridAligner'
import { getStringAfterLastDash } from '../../../../utils/getStringAfterLastDash'
import Button from '../../../atoms/Button'

const EditRooms = () => {
  const { rooms, setRooms, setShowEditRooms } = useContext(RoomsContext)
  const [editedRooms, setEditedRooms] = useState([...rooms])
  const [activeRadio, setActiveRadio] = useState(rooms[0].name)
  const roomNames = editedRooms.map((room) => {
    return { label: room.name, value: room.name }
  })

  const updateEditedRooms = (e) => {
    setEditedRooms(
      editedRooms.map((room) => {
        // Check if this is the room we want to update
        if (room.name === activeRadio) {
          // Update the specific attribute within the room
          return {
            ...room,
            roomAttributes: room.roomAttributes.map((attr) => {
              if (attr.name === getStringAfterLastDash(e.target.name)) {
                return {
                  ...attr,
                  units: Number(e.target.value),
                }
              }
              return attr
            }),
          }
        }
        return room
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRooms([...editedRooms])
    setShowEditRooms(false)
  }

  return (
    <div className={styles.container}>
      <p>Choose a room to edit</p>
      <RadioInput
        nameid='edit-rooms-radio-input'
        selectedValue={activeRadio}
        onChange={setActiveRadio}
        options={roomNames}
      />
      <InputGridAligner numberOfInputs={rooms[0].roomAttributes.length}>
        {editedRooms
          .find((room) => room.name === activeRadio)
          ['roomAttributes'].map((attribute, index) => {
            return (
              <NumberInput
                key={index}
                controlled={true}
                labelText={attribute.name}
                max='100000000'
                nameid={`room-edit-${activeRadio}-${attribute.name}`}
                value={attribute.units}
                onChange={updateEditedRooms}
              />
            )
          })}
        <Button
          testid='modify-rooms-button'
          clickHandler={handleSubmit}
          type='button'
        >
          Modify Rooms
        </Button>
      </InputGridAligner>
    </div>
  )
}

export default EditRooms
