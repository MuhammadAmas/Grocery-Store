import React from "react";

import classes from './Card.module.css'
import Button from './Button'
import { items } from "../UI/data/Items";
import Cart from "../cart/Cart";

const Card = props => {



    return (
        <div className={classes.cards}>
            <ul >
                {items.map(item => {
                    return (
                        <li className={classes.tiles} key={Math.random()}>
                            <div >
                                <img src={item.imageURL}></img>
                            </div>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.price}-Rs | {item.Quantity} {item.measurment}
                            </div>
                            < Button id={item.id} cartItems={props.cartItems} setCartItems={props.setCartItems} />
                        </li>)
                })
                }
            </ul>
        </div>
    )
};

export default Card;

