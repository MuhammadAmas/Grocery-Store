import React, { useState } from "react";
import classes from './Button.module.css'
import { items } from "../UI/data/Items";
import Cart from "../cart/Cart";

const Button = props => {



    const addToCartHandler = (e) => {
        const temp = [...props.cartItems];
        temp.push(items[props.id]);
        props.setCartItems(temp);
        // console.log(props.cartItems);
        // console.log(props.id);

    }

    return (
        <button onClick={addToCartHandler} >Add to Cart</button>
    )
}

export default Button;