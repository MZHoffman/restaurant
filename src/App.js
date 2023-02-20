import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
  const [cartVisibility, setCartVisibility] = useState(false)
  const showCart = () => {
    setCartVisibility(true)
  }
  const hideCart = () => {
    setCartVisibility(false)
  }

  return (
    <CartProvider>
      {cartVisibility && <Cart hideCart={hideCart} />}
      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
