import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const RoomsContext = createContext()

const RoomsContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([])
  const [attributes, setAttributes] = useState([])
  const [rent, setRent] = useState(0)
  const [showEditAttributes, setShowEditAttributes] = useState(false)
  const [showEditRent, setShowEditRent] = useState(false)
  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        attributes,
        setAttributes,
        rent,
        setRent,
        showEditAttributes,
        setShowEditAttributes,
        showEditRent,
        setShowEditRent,
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
