import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img, name, seller, quantity, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};
import './Product.css';
export default Product;