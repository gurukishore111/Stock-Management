import React, { useContext } from "react";
import StockIngredients from "./StockIngredients";
import { StocksContext } from "../App";
import uuidv4 from "uuid/v4";

export default function StockEdit({ shocks }) {
  const { handleStockChange, handleStockSelect } = useContext(
    StocksContext
  );

  function handleChange(changes) {
    handleStockChange(shocks.id, { ...shocks, ...changes });
  }
  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...shocks.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }
  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...shocks.ingredients, newIngredient] });
  }
  function handleIngredientDelete(id) {
    handleChange({
      ingredients: shocks.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className="shock-edit">
      <div className="remove-btn">
        <button
          className="btn btn-danger"
          onClick={() => handleStockSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="grid-view">
        <label htmlFor="name" className="recipe-edit_label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={shocks.name}
          className="shock-edit_input"
          onChange={(e) => handleChange({ name: e.target.value })}
        />
        <label htmlFor="Department" className="recipe-edit_label">
          Department
        </label>
        <input
          type="text"
          name="Department"
          id="Department"
          value={shocks.Department}
          className="shock-edit_input"
          onChange={(e) => handleChange({ Department: e.target.value })}
        />
      </div>
      <br />
      <label className="shock-edit_label">Items</label>
      <div className="shock-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {shocks.ingredients.map((ing) => (
          <StockIngredients
            key={ing.id}
            ingredient={ing}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className="ing-add">
        <button
          className="btn btn-primary"
          onClick={() => handleIngredientAdd()}
        >
          Add Items
        </button>
      </div>
    </div>
  );
}
