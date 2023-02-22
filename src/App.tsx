import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ShoppingCartProvider } from './context/shoppingCartContext'

import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {

  return (
    <ShoppingCartProvider>
      <Container className='mb-4'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
