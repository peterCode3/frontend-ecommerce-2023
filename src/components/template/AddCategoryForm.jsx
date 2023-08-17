// components/AddCategoryForm.js
import React, { useState } from 'react';

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim() === '') {
      return;
    }
    onAddCategory(categoryName);
    setCategoryName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter category name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategoryForm;
