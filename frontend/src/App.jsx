import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Login from './pages/Login/Login'
import Footer from './components/Footer/Footer'
import './styles/main.css'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <Provider store={store}>
      <Router>
        <>
          {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
          <div className="app">
            <Navbar setShowLogin={setShowLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PlaceOrder />} />
            </Routes>
          </div>
          <Footer />
        </>
      </Router>
    </Provider>
  )
}

export default App
