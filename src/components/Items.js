import React from "react";

function Items({ name, amount }) {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  );
}

export default Items;
