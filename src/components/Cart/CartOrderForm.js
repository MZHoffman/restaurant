import React, { useRef, useState } from 'react'
import Input from '../UI/Input'

import classes from './CartOrderForm.module.css'

const CartOrderForm = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postcode: true,
    city: true,
  })

  const nameRef = useRef()
  const streetRef = useRef()
  const postcodeRef = useRef()
  const cityRef = useRef()

  const orderHandler = (event) => {
    event.preventDefault()
    const enteredName = nameRef.current.value
    const enteredStreet = streetRef.current.value
    const enteredPostcode = postcodeRef.current.value
    const enteredCity = cityRef.current.value

    const nameValid = enteredName.trim() !== ''
    const streetValid = enteredStreet.trim() !== ''
    const cityValid = enteredCity.trim() !== ''
    const postcodeValid = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i.test(
      enteredPostcode
    )
    const isFormValid = nameValid && streetValid && cityValid && postcodeValid

    setFormValidity({
      name: nameValid,
      street: streetValid,
      postcode: postcodeValid,
      city: cityValid,
    })

    console.log(isFormValid)
    //props.formHideHandler()
  }
  const nameControlClasses = `${classes.control} ${
    formValidity.name ? '' : classes.invalid
  }`
  const streetControlClasses = `${classes.control} ${
    formValidity.street ? '' : classes.invalid
  }`
  const postcodeControlClasses = `${classes.control} ${
    formValidity.postcode ? '' : classes.invalid
  }`
  const cityControlClasses = `${classes.control} ${
    formValidity.city ? '' : classes.invalid
  }`
  return (
    <form className={classes.form} onSubmit={orderHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Name</label>
        <input ref={nameRef} type='text' id='name' />
        {!formValidity.name && <p>Please enter valid Name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input ref={streetRef} type='text' id='street' />
        {!formValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={postcodeControlClasses}>
        <label htmlFor='postcode'>Postcode</label>
        <input ref={postcodeRef} type='text' id='postcode' />
        {!formValidity.postcode && <p>Please enter valid postcode</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input ref={cityRef} type='text' id='city' />
        {!formValidity.city && <p>Please enter valid City</p>}
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm order</button>
        <button type='button' onClick={props.formHideHandler}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default CartOrderForm
