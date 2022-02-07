import React from "react";

function Pizza({ topping, size, vegetarian, handleEditPizza, id }) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => handleEditPizza(id)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
