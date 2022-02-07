import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
const [pizzaData, setPizzaData] = useState([])
const [topping, setTopping] = useState('')
const [size, setSize] = useState('Medium')
const [vegetarian, setVegetarian] = useState('')
const [id, setId] = useState('')

const BASE_URL = 'http://localhost:3001/pizzas'

useEffect(() => {
fetch(BASE_URL)
.then(res => res.json())
.then(data => setPizzaData(data))
}, [])

function handleEditPizza(id) {
  pizzaData.map(pizza => {
    if(pizza.id === id) {
      setTopping(pizza.topping)
      setSize(pizza.size)
      setVegetarian(pizza.vegetarian ? 'Vegetarian' : 'Not Vegetarian')
      setId(pizza.id)
    }
  })
  
}

function handlePizzaSubmit(e) {
  e.preventDefault()
  let veg = vegetarian === 'Vegetarian' ? true : false;
  const updatedPizza = pizzaData.map(pizza => {
    if(pizza.id === id) {
      return {
        ...pizza,
        topping,
        size,
        vegetarian: veg
      }
    } else {
      return pizza
    }
  })
  setPizzaData(updatedPizza)
}

useEffect(() => {
  fetch(BASE_URL + `/${id}`, {
    method: 'PATCH',
      body: JSON.stringify({
        topping,
        size,
        vegetarian: vegetarian === 'Vegetarian' ? true : false
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
}, [pizzaData])

  return (
    <>
      <Header />
      <PizzaForm 
      topping={topping} 
      size={size}
      vegetarian={vegetarian}
      setTopping={setTopping}
      setSize={setSize}
      setVegetarian={setVegetarian}
      handlePizzaSubmit={handlePizzaSubmit}
       />
      <PizzaList pizzaData={pizzaData} handleEditPizza={handleEditPizza} />
    </>
  );
}

export default App;
