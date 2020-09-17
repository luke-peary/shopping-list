import React, { useRef, useEffect } from "react";

const ProductTile = ({ img, name, price, quantity, removed, addedToCart }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    elementRef.current.addEventListener("removed", removed);
    elementRef.current.addEventListener("addedToCart", addedToCart);
  }, [addedToCart, removed]);

  return (
    <sa-product-tile
      img={img}
      name={name}
      price={price}
      quantity={quantity}
      ref={elementRef}
    ></sa-product-tile>
  );
};

export default ProductTile;
