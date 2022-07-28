import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData, handleAddStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockData.map((stock) => {
        return (
          <Stock
            key={stock.id}
            stockData={stock}
            onStockClick={handleAddStock}
          />
        )
      })}
    </div>
  );
}

export default StockContainer;
