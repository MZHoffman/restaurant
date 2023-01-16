import React from 'react'
import MealItem from './MealItem'
import Card from '../IU/Card'

const MEALS = [
  {
    id: '1',
    name: 'Schabowy Breaded Pork Loin',
    price: '15.90',
    description:
      'There is a reason this beauty is still our top seller. Our tenderised, breaded and pan-fried pork loin is the closest you can get to Poland without a visa. Served with mash. Add cheese or mushroom sauce 2.50',
  },
  {
    id: '2',
    name: 'Bigos Polish Stew',
    price: '14.90',
    description:
      'Known in lesser establishments as Hunter’s Stew, this sauerkrautbased dish has everything your body needs to get you through a hard winter - kielbasa, pork meat and mushrooms round out this amazing, hearty Polish classic. Served with our fresh bread & butter.',
  },
  {
    id: '3',
    name: 'Pork Gulasz',
    price: '14.90',
    description:
      'Beautifully tender pork shoulder meat stewed with onion makes this the perfect simple warming-up dish. Don’t dig around in it looking for the vegetables; this is the Polish version! Served nestled beside a mound of our freshly mashed potato.',
  },
  {
    id: '4',
    name: 'Breaded Chicken Breast Kurczak Panierowany',
    price: '15.90',
    description:
      'A tenderised, breaded and pan-fried chicken breast. Served with chips. Nothing more, nothing less. Halal, delicious piece of chicken in a crispy, gold coat. Space filled. In your tummy too! Add cheese or mushroom sauce 2.50',
  },
  {
    id: '5',
    name: 'Slow Roasted Beef Ox Cheeks',
    price: '18.90',
    description:
      'What a dish! Slow-braised and lovingly set in a rosemary red wine sauce, these tender morsels are a real melt-in-your-mouth treat. Served with mash potato, to soak up that gorgeous sauce!',
  },
  {
    id: '6',
    name: 'Vegan Grilled Cauliflower Steak - NEW RECIPE! ',
    price: '12.90',
    description:
      "Our Chef's own creation. A beautifully steamed cauliflower steak, grilled to perfection, bedded on mashed potatoes and topped with our ownspecial cauliflower seasoned puree. Delish, meat free and a great deal!",
  },
  {
    id: '7',
    name: 'Polish Kiełbasa Sausage on a Bun',
    price: '13.90',
    description: 'With chips',
  },
  {
    id: '8',
    name: 'NEW! Schabowy Tower',
    price: '18.90',
    description:
      'Breaded pork loin layered with Peppers and sausage stew and topped with melted Cheese',
  },
  {
    id: '9',
    name: 'NEW! Vegan Stew',
    price: '12.90',
    description: 'Chickpea, Butternut Squash, Courgette and Carrot Stew',
  },
  {
    id: '10',
    name: 'Breaded Chicken Breast Tower',
    price: '18.90',
    description:
      'A tenderised, breaded and pan-fried chicken breast layered with Peppers and sausage stew and topped with melted Cheese, nothing less, served with Chips and a trip to salad bar',
  },
  {
    id: '11',
    name: 'Breaded Cod Fillet with Chips &amp; Salad',
    price: '19.90',
    description:
      "We took our hand-breaded cod fillets off the menu when the price of cod went through the roof last year. Now that everything has almost doubled in price, we've put it back on the menu. We can't explain it. A lot of you justreally wanted to eat fish!",
  },
  {
    id: '12',
    name: 'Golabki Pork Cabbage Rolls',
    price: '13.90',
    description:
      'Back for the winter to keep you warm and happy! Delicious steamed winter cabbage leaves wrapped lovingly around a seasoned pork and rice filling, topped with our new tomato sauce and served with mashed potato and salad bar',
  },
  {
    id: '13',
    name: 'Grilled Kielbasa on a Bun',
    price: '13.90',
    description:
      'In Poland or the UK, always a classic. Nothing more to add. Or maybe more sauce? + salad bar trip',
  },
]

const AvailableMeals = () => {
  return (
    <React.Fragment>
      <Card>
        <ul>
          {MEALS.map((meal) => (
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
