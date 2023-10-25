import React from 'react';

const Item = ({ id, name, price, img, description, category }) => {
  return (
    <div key={id} className="card d-flex text-center" style={{ width: '30rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p>Categoría: {category}</p> {/* Muestra la categoría aquí */}
        <p>${price}</p>
        <a href="#" className="btn btn-primary">
          COMPRAR
        </a>
      </div>
    </div>
  );
};

export default Item;
