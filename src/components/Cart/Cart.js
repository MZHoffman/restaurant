import React, { useContext, useState, Fragment } from 'react'

import Modal from '../UI/Modal'
import CartOrderForm from './CartOrderForm'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const [cartOrderFormVisibility, setCartOrderFormVisibility] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  const orderSubmitHandler = async (userInfo) => {
    setSubmitting(true)
    const order = JSON.stringify({
      userInfo: userInfo,
      orderItems: cartCtx.items,
      orderTotal: cartCtx.totalAmount,
    })
    await fetch(
      'https://restaurant-46faa-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: order,
      }
    )
    //await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitting(false)
    setSubmitted(true)
    cartCtx.clearCart()
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
  const cartModalEdit = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        {cartOrderFormVisibility && (
          <CartOrderForm
            orderSubmitHandler={orderSubmitHandler}
            formHideHandler={formHideHandler}
          />
        )}
      </div>
      {!cartOrderFormVisibility && orderActions}
    </Fragment>
  )
  const cartModalSubmitting = <p>Submitting!</p>
  const cartModalSubmitted = (
    <Fragment>
      <p>Your order is on its way!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.hideCart}>
          Close
        </button>
      </div>
    </Fragment>
  )

  return (
    <Modal closeModal={props.hideCart}>
      {!submitting && !submitted && cartModalEdit}
      {submitting && cartModalSubmitting}
      {!submitting && submitted && cartModalSubmitted}
    </Modal>
  )
}

export default Cart
