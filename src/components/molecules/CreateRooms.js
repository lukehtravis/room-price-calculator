import PropTypes from 'prop-types'
import { useContext } from 'react'
import { RoomsContext } from '../../context/RoomsContext'
import { createPreRooms, makeRooms } from '../../utils/handlers/roomCreation'
import InputWrapper from '../atoms/InputWrapper'
import NumberInput from '../atoms/NumberInput'
import TextInput from '../atoms/TextInput'
import Button from '../atoms/Button'
import styles from './create-rooms.module.css'

const CreateRooms = ({ setRoomsWereAdded }) => {
  const { rooms, setRooms } = useContext(RoomsContext)

  return (
    <div
      className={styles['rooms-container']}
      data-testid='rooms-form-container'
    >
      <form
        onSubmit={(e) => createPreRooms(e, setRooms)}
        className={styles['create-rooms-form']}
        style={{ display: `${rooms.length > 0 ? 'none' : 'flex'}` }}
        data-testid='rooms-form'
      >
        <InputWrapper width='500px'>
          <NumberInput
            nameid='numberOfRooms'
            testid='number-of-rooms-input'
            labelText='Number Of Rooms'
          />
          <Button testid='submit-rooms-button'>Add Rooms</Button>
        </InputWrapper>
      </form>
      {rooms.length > 0 && (
        <form
          onSubmit={(e) => makeRooms(e, setRooms, setRoomsWereAdded)}
          data-testid='create-rooms-form-2'
          className={styles['create-rooms-form-2']}
        >
          <div className={styles['name-rooms']}>
            {rooms.map((x, i) => (
              <TextInput
                key={x.name}
                nameid={`room-${i}`}
                testid={`room-name-input-${i}`}
                labelText={`Room ${i + 1} Name`}
              />
            ))}
          </div>

          <Button
            classes={styles['create-rooms-button']}
            testid='create-rooms-button'
          >
            Create Rooms
          </Button>
        </form>
      )}
    </div>
  )
}

export default CreateRooms

CreateRooms.propTypes = {
  setRoomsWereAdded: PropTypes.func.isRequired,
}
