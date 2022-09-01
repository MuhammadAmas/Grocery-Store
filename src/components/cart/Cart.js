import React, { useEffect, useState } from "react";
import { items } from "../UI/data/Items";
import classes from './Cart.module.css'


const Cart = props => {

    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        let total = 0;
        props.cartItems.forEach(item => {
            console.log(item);
            total += item.price
        });
        setTotalPrice(total);

    }, [props.cartItems])

    const deleteItem = (id) => {
        console.log("deleted", id);

        let temp = [];
        for (var i = 0; i < props.cartItems.length; i++) {
            if (props.cartItems[i].id !== id) {
                temp.push(props.cartItems[i]);
                console.log('temp', temp);
            }
        }
        props.setCartItems(temp);
    }
    // console.log('cartitems',cartItems);

    console.log('props', props.cartItems);



    return (<div className={classes.cart}>
        <h1 className={classes.cartHeader}>CART</h1>
        <ul className={classes.cartList}>
            {props.cartItems.map(cartItem => {
                return (<li className={classes.listNodes} key={Math.random()}>
                    <div className={classes.cartImage}>
                        <img src={cartItem.imageURL}></img>
                    </div>
                    <div className={classes.itemDetails}>
                        <h2 className={classes.itemName}>{cartItem.name}</h2>

                        <div className={classes.itemDetails}>
                            <div>{cartItem.price}/-</div>
                            <div>{cartItem.Quantity}  {cartItem.measurment}</div>
                        </div>
                    </div>
                    <div className={classes.deleteItem}>
                        <button onClick={() => deleteItem(cartItem.id)} >X</button>
                    </div>
                </li>)
            })
            }
        </ul>

        <div className={classes.totalPrice}>
            <h1>Total Price</h1>
            <h3>{totalPrice}</h3>
        </div>
    </div>
    )

}

export default Cart;