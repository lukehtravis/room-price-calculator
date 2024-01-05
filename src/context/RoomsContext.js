import React, {createContext, useState} from "react"

const RoomsContext = createContext()

const RoomsContextProvider = ({children}) => {
    const [rooms, setRooms] = useState([])
    const [attributes, setAttributes] = useState([])
    const [rent, setRent] = useState(0)
    return (
        <RoomsContext.Provider value={{rooms,setRooms,attributes,setAttributes, rent,setRent}}>
            {children}
        </RoomsContext.Provider>
    )

}

export {RoomsContext, RoomsContextProvider}