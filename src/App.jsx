import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Cookies from './components/cookies/Cookies'
import Promociones from './components/promociones/Promociones'
import Administrador from './components/administrador/Administrador'

function App() {

  return (
    <div>
     <BrowserRouter>
     <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/promos' element={<Promociones />}/>
        <Route path='/administrador' element={<Administrador />} />
       </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App
