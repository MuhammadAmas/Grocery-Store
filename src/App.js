import React,{useState} from "react";
import classes from'./App.css';
import Card from './components/UI/Card'
import Cart from "./components/cart/Cart";
import Header from "./components/UI/header/Header";

function App() {
  const [cartItems, setCartItems] = useState([]); 
  
  // console.log(cartItems);

  return (
    <div className="app">
      <Header />
      <Card cartItems = {cartItems} setCartItems = {setCartItems}/>
      <Cart cartItems = {cartItems} setCartItems = {setCartItems}/>
    </div>
  );
}

export default App;


