import  { useState } from "react";

const MainPage = ({ products, addToCart }) => {
    const [searchTerm, setSearchTerm] = useState("products");
    const [sortOption, setSortOption] = useState("name-asc");

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        .sort((a, b) => {
            if (sortOption === "name-asc") {
                return a.name.localeCompare(b.name);
            } else if (sortOption === "name-desc") {
                return b.name.localeCompare(a.name);
            } else if (sortOption === "price-asc") {
                return a.price - b.price;
            } else if (sortOption === "price-desc") {
                return b.price - a.price;
            }
            return 0;
        });
    
    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <select
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
            >
                <option value="name-asc">Sort by Name (A-Z)</option>
                <option value="name-desc">Sort by Name (Z-A)</option>
                <option value="price-asc">Sort by Price (Low-High)</option>
                <option value="price-desc">Sort by Price (High-Low)</option>
            </select>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
    )
};

export default MainPage;

/* Happy Coding... */