import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const RoomsContext = createContext()

const RoomsContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([])
  const [attributes, setAttributes] = useState([])
  const [rent, setRent] = useState(0)
  const [showCreateAttribute, setShowCreateAttribute] = useState(false)
  const [showEditAttributes, setShowEditAttributes] = useState(false)
  const [showEditRent, setShowEditRent] = useState(false)
  const [showEditRooms, setShowEditRooms] = useState(false)
  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        attributes,
        setAttributes,
        rent,
        setRent,
        showCreateAttribute,
        setShowCreateAttribute,
        showEditAttributes,
        setShowEditAttributes,
        showEditRent,
        setShowEditRent,
        showEditRooms,
        setShowEditRooms,
      }}
    >
      {children}
    </RoomsContext.Provider>
  )
}

RoomsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { RoomsContext, RoomsContextProvider }
