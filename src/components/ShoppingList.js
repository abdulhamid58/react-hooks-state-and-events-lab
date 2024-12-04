// ShoppingList.js
import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  const filteredItems =
    selectedCategory === ""
      ? items
      : items.filter((item) => item.category === selectedCategory);


  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
