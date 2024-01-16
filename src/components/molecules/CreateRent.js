import { useContext } from 'react'
import { RoomsContext } from '../../context/RoomsContext'
import { initialRentSubmit } from '../../utils/handlers/rentHandlers'
import NumberInput from '../atoms/NumberInput'
import Button from '../atoms/Button'
import styles from './create-rent.module.css'
import InputWrapper from '../atoms/InputWrapper'

const CreateRent = () => {
  const { setRent } = useContext(RoomsContext)
  return (
    <form
      onSubmit={(e) => initialRentSubmit(e, setRent)}
      data-testid='rent-form'
      className={styles['create-rent-form']}
    >
      <InputWrapper width={'500px'}>
        <NumberInput
          nameid='totalRent'
          testid='total-rent-input'
          max='1000000000'
          labelText='Total House Rent'
        />
        <Button type='submit' testid='set-rent-button'>
          Set Rent Total
        </Button>
      </InputWrapper>
    </form>
  )
}

export default CreateRent
