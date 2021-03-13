import React, { useContext } from "react";
import { StocksContext } from "../App";
import Stocks from "./Stocks";

export default function StockList({ shocks }) {
  const { handleStockAdd } = useContext(StocksContext);
  return (
    <div className="shock-list">
      <div>
        {shocks.map((shocks) => {
          return <Stocks key={shocks.id} {...shocks} />;
        })}
      </div>
      <div>
        <div className="shock_list_btn">
          <button className="btn btn-primary" onClick={handleStockAdd}>
            Add Categories
          </button>
        </div>
      </div>
    </div>
  );
}
