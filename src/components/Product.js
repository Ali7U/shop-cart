import React from "react";

function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="shopping">
      <img className="small" src={product.image} alt={product.name} />
      <h3>${product.price}</h3>
      <p>{product.name}</p>
      <div>
        <button onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
