import React from 'react';
import Item from './Item';
import data from '../data.json'; // Ruta relativa al directorio padre

const ItemList = () => {
  return (
    <div className="itemList d-flex gap-2 p-2">
      {data?.map((item) => (
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
