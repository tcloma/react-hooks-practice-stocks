import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockData, setStockData] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [filterBy, setFilterBy] = useState('Tech')


  useEffect(() => {
    const fetchData = async () => {
      let request = await fetch('http://localhost:3001/stocks')
      let response = await request.json()
      console.log(response)
      setStockData(response)
    }
    fetchData()
  }, [])

  const handleAddStock = (id) => {
    const newStock = stockData.find((stock) => stock.id === id)
    console.log(newStock)
    setPortfolioStocks([...portfolioStocks, newStock])
  }

  const handleRemoveStock = (id) => {
    const newStockArray = portfolioStocks.filter((stock) => stock.id !== id)
    setPortfolioStocks(newStockArray)
  }

  const sort = () => {
    console.log(sortBy)
  }

  const sortedStocks = [...stockData].sort((stock1, stock2) => {
    if(sortBy === 'Alphabetically'){
      return stock1.name.localeCompare(stock2.name)
    } else if (sortBy === 'Price'){
      return stock1.price - stock2.price
    } else {
      return stockData
    }
  })


  const filteredStocks = sortedStocks.filter((stock) => stock.type === filterBy)

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <button onClick={sort}> Log Sorted</button>
      <div className="row">
        <div className="col-8">
          <StockContainer
            stockData={filteredStocks}
            handleAddStock={handleAddStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            handleRemoveStock={handleRemoveStock}
            portfolioStocks={portfolioStocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
