import React, { useState, useEffect } from "react";
import { Header, Actions, List } from "./ShoppingList.styles";
import Container from "../components/layout/Container";
import ProductTile from "../components/stencil/ProductTile";
import * as Api from "../utils/api";

const ShoppingList = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    Api.getProducts().then((res) => {
      setProducts(res);
    });
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
    alert("Add to cart");
  };

  const ListOfProducts = () => {
    if (products.length) {
      return products.map((product) => {
        return (
          <ProductTile
            key={product.id}
            img={product.image}
            name={product.productName}
            price={product.price}
            quantity={product.qty}
            removed={() => removeOne(product.id)}
            addedToCart={() => addToCart(product)}
          />
        );
      });
    }

    return <sa-copy>You have no products in your shopping list</sa-copy>;
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      <Header>
        <sa-heading as="h1" variant="title">
          Shopping List
        </sa-heading>
      </Header>

      <Actions>
        <sa-button variant="primary">Add all to cart</sa-button>
        <sa-button onClick={removeAll} variant="secondary">
          Clear list
        </sa-button>
      </Actions>

      <List>
        <ListOfProducts />
      </List>
    </Container>
  );
};

export default ShoppingList;
