import React from 'react'
import './Categories.css'

const Categories = ({ categories, onSelectCategory }) => {
  const handleChange = (event) => {
    onSelectCategory(event.target.value)
  }
  return (
    <div className="categories-container">
      <select onChange={handleChange}>
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Categories
