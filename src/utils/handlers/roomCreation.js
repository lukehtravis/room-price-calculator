const createPreRooms = (e, setRooms) => {
    e.preventDefault()
    let initialRooms = []
    for (let i = 0; i < e.target.elements.numberOfRooms.value; i++) {
      initialRooms[i] = {name: `${i}`, roomAttributes: []}
    }
    setRooms([...initialRooms])
}

const makeRooms = (e, setRooms, setRoomsHaveBeenCreated) => {
  e.preventDefault()
  let editedRooms = []

  for (let i = 0; i < e.target.elements.length; i++) {
    if (e.target.elements[i].type === "text") {
      editedRooms[i] = {name: e.target.elements[i].value, roomAttributes: []}
    } 
  }
  setRoomsHaveBeenCreated(true)
  setRooms(editedRooms)
}

export {createPreRooms, makeRooms}

