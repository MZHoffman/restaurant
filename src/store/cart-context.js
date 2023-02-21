import React from 'react'

const CartContext = React.createContext({
  //default data just for auto-completion
  items: [],
  totalAmount: 0,
  addIteam: (item) => {},
  removeIteam: (id) => {},
  clearCart: () => {},
})

export default CartContext
