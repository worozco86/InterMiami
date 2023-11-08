import React from 'react';

const CategoryFilter = ({ selectedCategories, handleCategoryChange }) => {
  return (
    <div className='checkbox hstack gap-3 border rounded p-2 m-1 '>
        <header>
            <h2>Filtros de Busqueda</h2>
        </header>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="jerseyCheckbox"
          checked={selectedCategories.includes('Jersey')}
          onChange={() => handleCategoryChange('Jersey')}
        />
        <label className="form-check-label" htmlFor="jerseyCheckbox">
          Jersey
        </label>
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="preMatchCheckbox"
          checked={selectedCategories.includes('Pre-Match')}
          onChange={() => handleCategoryChange('Pre-Match')}
        />
        <label className="form-check-label" htmlFor="preMatchCheckbox">
          Pre-Match
        </label>
      </div>
    </div>
  );
};

export default CategoryFilter;

