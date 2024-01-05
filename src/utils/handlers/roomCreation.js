const createPreRooms = (e, setRooms) => {
    e.preventDefault()
    let initialRooms = []
    for (let i = 0; i < e.target.elements.numberOfRooms.value; i++) {
      initialRooms[i] = {name: `${i}`, roomAttributes: []}
    }
    setRooms([...initialRooms])
}

const makeRooms = (e, setRooms) => {
  e.preventDefault()
  let editedRooms = []

  for (let i = 0; i < e.target.elements.length; i++) {
    if (e.target.elements[i].type === "text") {
      editedRooms[i] = {name: e.target.elements[i].value, roomAttributes: []}
    } 
  }

  setRooms(editedRooms)
}

export {createPreRooms, makeRooms}

