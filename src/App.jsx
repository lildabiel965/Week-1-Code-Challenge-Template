import { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./Components/MainPage";
import CartPage from "./Components/CartPage";

const App = () => {
    const products = [
        { id: 1, name: "T-Shirt", price: 20 },
        { id: 2, name: "Jeans", price: 40 },
        { id: 3, name: "Sneakers", price: 60 },
        { id: 4, name: "Hat", price: 15 },
        { id: 5, name: "Socks", price: 5 },
    ];
    
   const [cart, setcart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart? JSON.parse(savedCart) : [];
   })   

   useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setcart((prevCart) => {
            const existingproduct = prevCart.find(item => item.id === product.id);
            if (existingproduct) {
                return prevCart.map(item =>
                    item.id === product.id? {...item, quantity: item.quantity + 1} : item
                );
            }
            return [...prevCart, {...product, quantity: 1}];
        });
    };
    const updateCartQuatity = (id,quantity) => {
        setcart((prevCart) =>
            prevCart.map(item =>
                item.id === id? {...item, quantity} : item
            )
        );
    };

    const removeFromCart = (id) =>
        setcart((prevCart) =>
            prevCart.filter(item => item.id!== id)
        );
    const clearCart =() => {
        setcart([]);
    };
    
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="App">
            <MainPage products={products} addToCart={addToCart} />
            <CartPage cart={cart} updateCartQuatity={updateCartQuatity} removeFromCart={removeFromCart} clearCart={clearCart} totalPrice={totalPrice} />
        </div>
    );
};

export default App;

/* Happy Coding... */