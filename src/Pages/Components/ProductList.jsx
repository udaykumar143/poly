import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          onAddToCart={() => alert(`Added ${product.title} to cart`)}
        />
      ))}
    </div>
  );
}

export default ProductList;
