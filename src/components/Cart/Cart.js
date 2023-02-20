import { useContext, useState } from 'react'

import Modal from '../UI/Modal'
import CartOrderForm from './CartOrderForm'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const [cartOrderFormVisibility, setCartOrderFormVisibility] = useState(false)

  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeIteam(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addIteam({ ...item, amount: 1 })
  }
  const formShowHandler = () => {
    setCartOrderFormVisibility(true)
  }
  const formHideHandler = () => {
    setCartOrderFormVisibility(false)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )
  const orderActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.hideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={formShowHandler}>
          Order
        </button>
      )}
    </div>
  )
  return (
    <Modal closeModal={props.hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        {cartOrderFormVisibility && (
          <CartOrderForm order={cartCtx} formHideHandler={formHideHandler} />
        )}
      </div>
      {!cartOrderFormVisibility && orderActions}
    </Modal>
  )
}

export default Cart
