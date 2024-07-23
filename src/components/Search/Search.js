import React, { useState } from 'react'
import './Search.css'

const Search = ({ onSearch }) => {
  const [inputs, setInputs] = useState('')

  const handleInputChange = (e) => {
    setInputs(e.target.value)
    onSearch(e.target.value)
  }
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={inputs}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Search
