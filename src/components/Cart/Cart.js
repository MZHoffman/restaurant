import React from 'react'
import classes from './Cart.module.css'
import Modal from '../IU/Modal'

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: '1',
          name: 'Schabowy Breaded Pork Loin',
          price: '£15.90',
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>11.11</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
