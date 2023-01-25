import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  const [cartVisibility, setCartVisibility] = useState(false)
  const showCart = () => {
    setCartVisibility(true)
  }
  const hideCart = () => {
    setCartVisibility(false)
  }

  return (
    <React.Fragment>
      {cartVisibility && <Cart hideCart={hideCart} />}
      console.log({!cartVisibility || <Cart hideCart={hideCart} />});
      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  )
}

export default App
