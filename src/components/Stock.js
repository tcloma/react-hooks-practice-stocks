import React from "react";

function Stock({ stockData, onStockClick }) {

  const {id, name, price} = stockData;

  const handleClick = () => {
    onStockClick(id)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
