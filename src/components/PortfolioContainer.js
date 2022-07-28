import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, handleRemoveStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map((stock) => {
        return (
          <Stock
            key={stock.id}
            stockData={stock}
            onStockClick={handleRemoveStock}
            />
        )
      })}
    </div>
  );
}

export default PortfolioContainer;
