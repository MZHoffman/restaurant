import React, { useRef } from 'react'
import Input from '../UI/Input'

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
    <div>
      <form onSubmit={orderHandler}>
        <label htmlFor='name'>Name</label>
        <input ref={nameRef} type='text' id='name' />
        <label htmlFor='street'>Street</label>
        <input ref={streetRef} type='text' id='street' />
        <label htmlFor='postcode'>Postcode</label>
        <input ref={postcodeRef} type='text' id='postcode' />
        <label htmlFor='city'>City</label>
        <input ref={cityRef} type='text' id='city' />
        <button>Confirm order</button>
        <button type='button' onClick={props.formHideHandler}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default CartOrderForm
