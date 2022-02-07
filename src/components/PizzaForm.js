import React from "react";

function PizzaForm({
  topping, 
  size, 
  setTopping, 
  setSize, 
  vegetarian, 
  setVegetarian, 
  handlePizzaSubmit
 }) {
  return (
    <form onSubmit={null /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian === 'Vegetarian'}
              onClick={() => setVegetarian("Vegetarian")}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarian === 'Not Vegetarian'}
              onClick={() => setVegetarian("Not Vegetarian")}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handlePizzaSubmit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
