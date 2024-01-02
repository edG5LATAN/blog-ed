import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Cookies from './components/cookies/Cookies'

function App() {

  return (
    <div>
     <BrowserRouter>
     <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cookies' element={<Cookies />} />
       </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App
