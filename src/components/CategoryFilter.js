import React from "react";

function CategoryFilter({ categories, onSelectedCategory, categorySelection }) {

  const handleClick = (e) => {
    const categoryValue = e.target.value
    // Pass data to App via onSelectedCategory function
    onSelectedCategory(categoryValue)
  }

  const categoriesMapped = categories.map((category) => 
    <button key={category} onClick={(handleClick)} className={category === categorySelection ? "selected" : ""} value={category}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesMapped}
    </div>
  );
}


export default CategoryFilter;
