import React, {useState} from 'react'
import ProductItem from './ProductItem';
import styled from 'styled-components';
import { products } from '../data';
import { ProductsContainer } from '../styling/productShopStyling';

const Products = ({cart, addCart}) => {

    return (
        <ProductsContainer >
            {/* Map to create container for each product from the products array in data.js file */}
              {products.map((product, index )=>(
                <ProductItem product={product} index={index} addCart={addCart}   />
            ))}
        </ProductsContainer>

    )
}

export default Products
