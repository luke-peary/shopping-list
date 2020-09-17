export function getProducts() {
  return new Promise((resolve) => {
    const products = generateProducts();
    resolve(products);
  });
}

function generateProducts() {
  return [
    {
      id: 1,
      productName: "Fresh Pink Lady Apples each",
      qty: 4,
      price: "1.17",
      image:
        "https://cdn0.woolworths.media/content/wowproductimages/medium/105919.jpg",
    },
    {
      id: 2,
      productName: "Mainland Buttersoft Pure Salted Butter 375g",
      qty: 1,
      price: "6.25",
      image:
        "https://cdn0.woolworths.media/content/wowproductimages/medium/057182.jpg",
    },
    {
      id: 3,
      productName: "Peters Original Neapolitan Ice Cream 2l",
      qty: 1,
      price: "4.75",
      image:
        "https://cdn0.woolworths.media/content/wowproductimages/medium/040960.jpg",
    },
    {
      id: 4,
      productName: "Truss Tomatoes each",
      qty: 5,
      price: "0.97",
      image:
        "https://cdn0.woolworths.media/content/wowproductimages/medium/169438.jpg",
    },
    {
      id: 5,
      productName: "Primo Champagne Ham Thinly Sliced 100g",
      qty: 2,
      price: "3.25",
      image:
        "https://cdn0.woolworths.media/content/wowproductimages/medium/544761.jpg",
    },
  ];
}
