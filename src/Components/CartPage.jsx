const CartPage = ({cart, updateCartQuantity, removefromCart,clearCart, totalprice}) => {
    return (
    <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length > 0? (
            <div>
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <h2>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>Decrement</button>
                        <button onClick={() => removefromCart(item.id)}>Remove</button>
                    </div>
                ))}
                <p>Total Price: ${totalprice}</p>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        ) : (
            <p>Your cart is empty.</p>
        )}
      
    </div>
    );
};
  
export default CartPage;
  
/* Happy Coding... */