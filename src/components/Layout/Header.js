import React from 'react'
import classes from './Header.module.css'

import foodImg from '../../assets/food.jpg'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Restaurant</h1>
        <buttin>Cart</buttin>
      </header>
      <div className={classes['main-image']}>
        <img src={foodImg} alt='food on a table' />
      </div>
    </React.Fragment>
  )
}

export default Header
