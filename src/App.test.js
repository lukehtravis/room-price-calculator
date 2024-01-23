import { render } from '@testing-library/react'
import App from './App'

// Set the NODE_ENV to 'test' before running the tests. Need to do this because of hosting setup of github pages
process.env.NODE_ENV = 'test'
test('renders App', () => {
  render(<App />)
})
