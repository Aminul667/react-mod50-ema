import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;