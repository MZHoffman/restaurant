import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

import foodImg from '../../assets/food.jpg'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Restaurant</h1>
        <HeaderCartButton showCart={props.showCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={foodImg} alt='food on a table' />
      </div>
    </React.Fragment>
  )
}

export default Header
