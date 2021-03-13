import React, { useContext } from "react";
import ItemList from "./ItemList";
import { StocksContext } from "../App";

function Stocks({ id, name, Department, ingredients }) {
  const { handleStockDelete, handleStockSelect } = useContext(StocksContext);

  return (
    <div className="shock">
      <div className="shock_header">
        <h3 className="shock_title">{name}</h3>
        <div>
          <button
            className="btn btn-primary mr-1"
            onClick={() => handleStockSelect(id)}
            style={{marginRight:"10px"}}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mr-1"
            onClick={() => handleStockDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="shock_row">
        <span className="shock_label">Department:</span>
        <span className="shock_value">{Department}</span>
      </div>
      <div className="shock_row">
        <span className="shock_label">Items:</span>
        <div className="shock_value indented">
          <ItemList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}

export default Stocks;
