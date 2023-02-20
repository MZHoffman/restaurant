import React, { useRef } from 'react'
import Input from '../UI/Input'

import classes from './CartOrderForm.module.css'

const CartOrderForm = (props) => {
  const nameRef = useRef()
  const streetRef = useRef()
  const postcodeRef = useRef()
  const cityRef = useRef()

  const orderHandler = (event) => {
    event.preventDefault()

    props.formHideHandler()
  }

  return (
    <form className={classes.form} onSubmit={orderHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input ref={nameRef} type='text' id='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input ref={streetRef} type='text' id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postcode'>Postcode</label>
        <input ref={postcodeRef} type='text' id='postcode' />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input ref={cityRef} type='text' id='city' />
      </div>
      <div className={classes.actions}>
        <button>Confirm order</button>
        <button type='button' onClick={props.formHideHandler}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default CartOrderForm
