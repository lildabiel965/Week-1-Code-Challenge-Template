# React + Vite


This project is a shopping cart application built with React and styled using CSS. It utilizes Vite for a fast development experience and includes key features like product sorting, searching, and cart management with local storage support.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the local development server (typically at `http://localhost:3000`).

## Features
- **Product List Display**: View a list of products with their names and prices.
- **Search Functionality**: Search for products by name using a search bar.
- **Sorting Options**: Sort products by name (A-Z, Z-A) or price (low to high, high to low).
- **Add to Cart**: Add products to the cart with a single click.
- **Cart Management**:
  - Update product quantities directly in the cart.
  - Remove individual products from the cart.
  - Clear all items in the cart.
- **Persistent State**: Cart data is saved in local storage to maintain state across page reloads.
- **Total Price Calculation**: Automatically calculate and display the total price of items in the cart.

## Components

### `App.jsx`
- Manages the overall state of the application, including the product list and cart.
- Handles adding products to the cart, removing them, updating quantities, and clearing the cart.
- Persists cart state in local storage.

### `MainPage.jsx`
- Displays the product list with search and sort functionality.
- Allows users to add products to the cart.

### `CartPage.jsx`
- Displays the items added to the cart.
- Provides options to update quantities, remove individual items, or clear the entire cart.
- Displays the total price of items in the cart.

### `App.css`
- Provides the styling for the application, including layout, colors, buttons, and responsiveness.

## Usage
1. Start the application.
2. Browse the list of products on the homepage.
3. Use the search bar to find specific products by name.
4. Use the sorting dropdown to sort products by name or price.
5. Add products to the cart using the "Add to Cart" button.
6. View the cart by scrolling down.
   - Update quantities or remove items directly in the cart.
   - Clear the cart if needed.
7. The total price of items is calculated automatically and displayed in the cart

Enjoy shopping with **ShopBag Online Shop**!

## Happy Coding...