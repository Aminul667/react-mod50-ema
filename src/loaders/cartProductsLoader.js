import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  // if cart data is in the database then we have to use async await
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);
  console.log(ids);

  const loadedProducts = await fetch("http://localhost:5000/productsById", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });

  const products = await loadedProducts.json();

  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd._id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

export default cartProductsLoader;
