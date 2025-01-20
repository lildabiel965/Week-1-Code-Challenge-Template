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
    
    const [cart, setCart] = useState(() => {  
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                } else {
                    return [...prevCart, { ...product, quantity: 1 }];
                }
            }
        );
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };
    
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div className="App">
            <MainPage products={products} addToCart={addToCart} />
            <CartPage 
                cart={cart} 
                updateQuantity={updateQuantity} 
                removeFromCart={removeFromCart} 
                totalPrice={totalPrice}  
                clearCart={clearCart}
            />
        </div>
    );
};

export default App;

/* Happy Coding... */