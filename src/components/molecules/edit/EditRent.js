import { useContext } from 'react'
import { RoomsContext } from '../../../context/RoomsContext'
import NumberInput from '../../atoms/NumberInput'
import Button from '../../atoms/Button'
import InputGridAligner from '../../atoms/InputGridAligner'

const EditRent = () => {
  const { rent, setRent, setShowEditRent } = useContext(RoomsContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setRent(Number(e.target.elements.totalRent.value) || 0)
    setShowEditRent(false)
  }
  return (
    <form onSubmit={handleSubmit} data-testid='rent-form'>
      <InputGridAligner numberOfInputs={1}>
        <NumberInput
          labelText='Total Rent'
          nameid='totalRent'
          defaultValue={rent}
          testid='total-rent-input'
          max='1000000000'
        />
        <Button testid='set-rent-button'>Set New Rent Total</Button>
      </InputGridAligner>
    </form>
  )
}

export default EditRent
