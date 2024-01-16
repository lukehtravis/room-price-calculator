import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Calculator from './pages/Calculator'
import { RoomsContextProvider } from './context/RoomsContext'

function App() {
  return (
    <RoomsContextProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/calculator' element={<Calculator />} />
        </Routes>
      </Router>
    </RoomsContextProvider>
  )
}

export default App
