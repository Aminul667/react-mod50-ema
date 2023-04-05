const cartProductsLoader = async () => {
    const loadedProducts = await fetch('product.json');
    const products = await loadedProducts.json();
    console.log(products);
}

export default cartProductsLoader;