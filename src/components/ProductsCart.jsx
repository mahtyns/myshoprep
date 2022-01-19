import styled from 'styled-components';
import { products } from '../data';
import { Delete } from '@material-ui/icons';
import { useState } from 'react';
import CartReturned from './CartItemSingleAdded';
import CartItemSingleAdded from './CartItemSingleAdded';
import { SharedParagraph } from '../styling/sharedStyling';
import { CartProductsSummaryContainer, CartProductsSummaryItems } from '../styling/userCartStyling';

const ProductsCart = ({ itemsAddedToCartList }) => {

    return (
        <CartProductsSummaryContainer>
            <CartProductsSummaryItems>
                {itemsAddedToCartList.length ? <CartItemSingleAdded itemsAddedToCartList={itemsAddedToCartList} /> : <SharedParagraph>Your cart is empty</SharedParagraph>}
            </CartProductsSummaryItems>
        </CartProductsSummaryContainer>
    )
}

export default ProductsCart
