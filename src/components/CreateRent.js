import { useContext } from 'react'
import { RoomsContext } from '../context/RoomsContext'
import { initialRentSubmit } from '../utils/handlers/rentHandlers'

const CreateRent = () => {
  const { setRent } = useContext(RoomsContext)
  return (
    <form
      onSubmit={(e) => initialRentSubmit(e, setRent)}
      data-testid='rent-form'
    >
      <label htmlFor='totalRent'>Total Rent</label>
      <input
        type='number'
        name='totalRent'
        id='totalRent'
        min='0'
        data-testid='total-rent-input'
      />
      <button type='submit' data-testid='set-rent-button'>
        Set Rent Total
      </button>
    </form>
  )
}

export default CreateRent
