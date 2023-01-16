import React from 'react'
import MealIteamForm from './MealIteamForm'

import classes from './MealItem.module.css'

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>£{props.price}</div>
      </div>
      <div>
        <MealIteamForm id={props.id} />
      </div>
    </li>
  )
}

export default MealItem
