import React, { useState, useEffect } from "react";
import { Header, Actions, List } from "./ShoppingList.styles";
import Container from "../components/layout/Container";
import { SaHeading, SaButton, SaCopy, SaProductTile } from "sa-library-react";
import * as Api from "../utils/api";

const ShoppingList = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    Api.getProducts().then((res) => {
      setProducts(res);
    });
  };

  const addAllToCart = () => {
    alert("All items added to cart");
  };

  const removeAll = () => {
    setProducts([]);
  };

  const removeOne = (id) => {
    const productIndex = products.findIndex((prod) => prod.id === id);
    const newList = [...products];
    newList.splice(productIndex, 1);

    setProducts(newList);
  };

  const addToCart = () => {
    alert("Added to cart");
  };

  const ListOfProducts = () => {
    if (products.length) {
      return products.map((product) => {
        return (
          <SaProductTile
            key={product.id}
            img={product.image}
            name={product.productName}
            price={product.price}
            quantity={product.qty}
            onRemoved={() => removeOne(product.id)}
            onAddedToCart={() => addToCart(product)}
          />
        );
      });
    }

    return <SaCopy>You have no products in your shopping list</SaCopy>;
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      <Header>
        <SaHeading as="h1" variant="title">
          Shopping List
        </SaHeading>
      </Header>

      <Actions>
        <SaButton onClick={addAllToCart} variant="primary">
          Add all to cart
        </SaButton>
        <SaButton onClick={removeAll} variant="secondary">
          Clear list
        </SaButton>
      </Actions>

      <List>
        <ListOfProducts />
      </List>
    </Container>
  );
};

export default ShoppingList;
