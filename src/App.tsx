import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element=<Home/> />
        <Route path="/about" element=<About/> />
        <Route path="/store" element=<Store/> />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
 
    </div>
  )
}

export default App
