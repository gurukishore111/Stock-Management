import React from "react";
import Items from "./Items";

function ItemList({ ingredients }) {
  const ingredientElement = ingredients.map((ingre) => {
    return <Items key={ingre.id} {...ingre} />;
  });
  return <div className="ingredient-grid">{ingredientElement}</div>;
}

export default ItemList;
