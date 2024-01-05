const initialRentSubmit = (e, setRent) => {
    e.preventDefault()
    const val = e.target.elements.totalRent.value || 0
    setRent(val)
}

export {initialRentSubmit}