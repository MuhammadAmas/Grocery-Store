import React,{useState} from "react";
import classes from'./App.css';
import Card from './components/UI/Card'
import Cart from "./components/cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]); 
  
  // console.log(cartItems);

  return (
    <div className="app">
      <Card cartItems = {cartItems} setCartItems = {setCartItems}/>
      <Cart cartItems = {cartItems} setCartItems = {setCartItems}/>
    </div>
  );
}

export default App;


