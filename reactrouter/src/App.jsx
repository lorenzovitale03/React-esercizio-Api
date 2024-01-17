import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import './App.css'
import NotFounded from './pages/NotFound'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home page="Homepage"/>} />
        <Route path="/contatti" element={<Contacts page="Contatti"/>} />
        <Route path="/chisiamo" element={<About page="Chi siamo"/>} />
        <Route path="*" element={<NotFounded/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
