import React, { useState, useCallback, useEffect } from 'react'
import MealItem from './MealItem'
import Card from '../UI/Card'

const AvailableMeals = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [meals, setMeals] = useState([])

  const fetchMeals = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://restaurant-46faa-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      )
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()
      setMeals(data)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])
  useEffect(() => {
    fetchMeals()
  }, [fetchMeals])
  return (
    <React.Fragment>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              name={meal.name}
              price={meal.price}
              description={meal.description}
              id={meal.id}
              key={meal.id}
            />
          ))}
        </ul>
      </Card>
    </React.Fragment>
  )
}

export default AvailableMeals
