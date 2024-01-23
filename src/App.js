import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Calculator from './pages/Calculator'
import { RoomsContextProvider } from './context/RoomsContext'

function App() {
  // served currently on github pages, which serves from a subdirectory, so we
  // need to set a different base url on prod and in dev
  const baseDirectory =
    process.env?.NODE_ENV === 'development' ? '/' : '/room-price-calculator'
  return (
    <RoomsContextProvider>
      <Router basename={baseDirectory}>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </Router>
    </RoomsContextProvider>
  )
}

export default App
