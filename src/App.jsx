import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#222' : '#fff'
    document.body.style.color = darkMode ? '#fff' : '#000'
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} addToCart={addToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App