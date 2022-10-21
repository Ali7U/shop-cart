import React from "react";
import Product from "./Product";

function Main(props) {
  const { products, onAdd, onRem } = props;
  return (
    <main>
      <h2>shop now</h2>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAdd={onAdd}
            onRem={onRem}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
