import  { useState } from "react";

const MainPage = ({ products, addToCart }) => {
    const [sortOption, setSortOption] = useState("name-asc");
    const [searchQuery, setSearchQuery] = useState("");
    
    const sortProducts = (products, option) => {
        const sortedProducts = [...products];
        switch (option) {
            case "name-asc":
                return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            case "name-desc":
                return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            case "price-asc":
                return sortedProducts.sort((a, b) => a.price - b.price);
            case "price-desc":
                return sortedProducts.sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    };
    
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };
    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };
    
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
    );
    
    const sortedAndFilteredProducts = sortProducts(filteredProducts, sortOption);
    
    return (
    <div>
        <div className="Navbar">
            <img src="https://marketplace.canva.com/EAE3x0KnRYQ/1/0/1600w/canva-orange-simple-online-shopping-logo-SAyjVi024yw.jpg" alt="logo" height="Auto" width="100px"/>
            <h1>ShopBag Online Shop</h1>
        </div>
        <div className="search-bar">
            <h2 id="Welcoming-message">Welcome Start your search here.</h2>
            <input type="text" id="Search" placeholder="Search products by name" value={searchQuery} onChange={handleSearchChange}/>
        </div>
        <div className="sort-options">
            <label htmlFor="sort">Sort by: </label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
            </select>
        </div>
        <h1 id="list-identifier">Product List</h1>
        <div className="product-list">
            {sortedAndFilteredProducts.map((product) => (
            <div key={product.id} className="product">
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button id="Bt" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>))}
        </div>
    </div>
  );
};

export default MainPage;

/* Happy Coding... */