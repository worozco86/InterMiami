import React from 'react';
import Item from './Item';
import data from '../data.json';

const ItemList = ({ selectedCategories }) => {
  return (
    <div className="itemList d-flex gap-2 p-2 d-flex justify-content-center">
      {data
        .filter((item) => selectedCategories.length === 0 || selectedCategories.includes(item.category))
        .map((item) => (
          <Item
            key={item.id}
            img={item.img}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
    </div>
  );
};

export default ItemList;
