import React, { useState } from 'react';
import ItemList from './ItemList';
import CategoryFilter from './CategoryFilter';

const ListContainer = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };


  return (
    <main className="ItemListContainer container-fluid">
      <CategoryFilter
        selectedCategories={selectedCategories}
        handleCategoryChange={handleCategoryChange}
      />
      <ItemList selectedCategories={selectedCategories} />
    </main>
  );
};

export default ListContainer;
