import React, { useState } from 'react';
import AddCategoryForm from '../src/components/template/AddCategoryForm';

const App = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (categoryName) => {
    const newCategory = { id: Date.now(), name: categoryName };
    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h1>Categories</h1>
      <AddCategoryForm onAddCategory={handleAddCategory} />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
