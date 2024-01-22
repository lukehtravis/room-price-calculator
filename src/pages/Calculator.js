import { useState, useContext } from 'react'
import CreateAttributes from '../components/molecules/create/CreateAttributes'
import Matrix from '../components/molecules/Matrix'
import { RoomsContext } from '../context/RoomsContext'
import CreateRooms from '../components/molecules/create/CreateRooms'
import EditAttributes from '../components/molecules/edit/EditAttributes'
import CreateRent from '../components/molecules/create/CreateRent'
import EditRent from '../components/molecules/edit/EditRent'
import EditRooms from '../components/molecules/edit/EditRooms/EditRooms'
import styles from './calculator.module.css'
import Modal from '../components/molecules/Modal'
import EditButtons from '../components/molecules/EditButtons'

const Calculator = () => {
  const [roomsWereAdded, setRoomsWereAdded] = useState(false)
  const {
    rent,
    rooms,
    showCreateAttribute,
    setShowCreateAttribute,
    showEditAttributes,
    setShowEditAttributes,
    showEditRent,
    setShowEditRent,
    showEditRooms,
    setShowEditRooms,
  } = useContext(RoomsContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {rent === 0 && <CreateRent />}
        {rent > 0 && !roomsWereAdded && (
          <CreateRooms setRoomsWereAdded={setRoomsWereAdded} />
        )}
        {showCreateAttribute && (
          <Modal handleClose={setShowCreateAttribute} isOpen={true}>
            <CreateAttributes />
          </Modal>
        )}
        {showEditAttributes && (
          <Modal handleClose={setShowEditAttributes} isOpen={true}>
            <EditAttributes />
          </Modal>
        )}
        {showEditRent && (
          <Modal handleClose={setShowEditRent} isOpen={true}>
            <EditRent />
          </Modal>
        )}
        {showEditRooms && (
          <Modal handleClose={setShowEditRooms} isOpen={true}>
            <EditRooms />
          </Modal>
        )}
        {rooms.length > 0 && <Matrix />}
        {rooms.length > 0 && <EditButtons />}
      </div>
    </div>
  )
}

export default Calculator
