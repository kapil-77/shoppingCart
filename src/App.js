import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

import './styles/main.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {isAuthenticated && <Navbar onLogout={handleLogout} />}
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={<Login onAuthSuccess={handleAuthSuccess} />}
            />
            {isAuthenticated ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/signup" />} />
            )}
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
