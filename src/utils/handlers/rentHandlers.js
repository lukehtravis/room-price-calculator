const initialRentSubmit = (e, setRent) => {
  e.preventDefault()
  const val = Number(e.target.elements.totalRent.value) || 0
  setRent(val)
}

export { initialRentSubmit }
