import { useContext } from 'react'
import { RoomsContext } from '../context/RoomsContext'

const EditRent = () => {
  const { rent, setRent, setShowEditRent } = useContext(RoomsContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setRent(Number(e.target.elements.totalRent.value) || 0)
    setShowEditRent(false)
  }
  return (
    <form onSubmit={handleSubmit} data-testid='rent-form'>
      <label htmlFor='totalRent'>Total Rent</label>
      <input
        type='number'
        name='totalRent'
        id='totalRent'
        min='0'
        defaultValue={rent}
        data-testid='total-rent-input'
      />
      <button type='submit' data-testid='set-rent-button'>
        Set New Rent Total
      </button>
    </form>
  )
}

export default EditRent
