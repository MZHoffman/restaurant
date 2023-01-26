import CartContext from './cart-context'
const CartProvider = (props) => {
  const addIteamToCartHandler = (item) => {}
  const removeIteamToCartHandler = (id) => {}
  const cartContext = {
    items: [],
    totalAmount: 0,
    addIteam: addIteamToCartHandler,
    removeIteam: removeIteamToCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
