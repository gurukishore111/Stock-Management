import React from "react";

function StockIngredients({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.target.value })}
        className="recipe-edit_input"
      />
      <input
        type="text"
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
        className="recipe-edit_input"
      />
      <button
        className="btn btn-danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}

export default StockIngredients;
