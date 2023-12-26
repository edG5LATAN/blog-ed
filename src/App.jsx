import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

function App() {

  return (
    <div>
     <BrowserRouter>
     <Header />
       <Routes>
        <Route path='/' element={<Home />} />
       </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App
