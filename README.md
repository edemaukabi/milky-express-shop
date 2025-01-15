# Milky-Express-Shop

**Milky-Express-Shop** is an eCommerce store that displays a variety of products. I built this using **React** for fast client-side rendering and interactivity, along with **TailwindCSS** for responsive and modern styling.

The application showcases products fetched from the **Fake Store API** (https://fakestoreapi.com), which provides REST API data for an eCommerce store, similar to data that could be built using **Django Rest Framework (DRF)**. This helps mock real-life data, allowing a smooth development experience even without connecting to an actual backend.
**N/B** I had to replace the raw data I got from the UI with this approach to simulate real project data fetching approach. So I removed the dummy data.

I used **React Context** to manage and pass necessary data across different components, allowing for a seamless user experience and easier state management throughout the application.

Key features include:
- View products listed on the home page.
- Click on a product to view its detailed information.
- Add products to the cart, increment or decrement the quantity, and view the cart items.
- Search and filter products by category.
- Responsive design for accessibility across different screen sizes.

The project is deployed on [Vercel](https://milky-express-shop.vercel.app) and is available for live demo.

The Github link is available on [Github](https://github.com/edemaukabi/milky-express-shop). You can check to see my code and UI component structure.
To install and run locally, check the Installation section in this Readme file.

## Features

- **Product Listing**: View a variety of products displayed on the homepage.
- **Product Detail**: Click on a product to view its details, including images, description, price, and related products.
- **Add to Cart**: Add items to your cart directly from the homepage or product detail page.
- **Cart Management**: View products in the cart, modify their quantities (with buttons for increment and decrement), and proceed to checkout.
- **Responsive Design**: The app is fully responsive, optimized for use across different screen sizes.
- **Search and Category Filter**: Search for products and filter by category for better product discovery.

## Routes

The app uses the following routes to navigate between pages:

- **Home** (`/`): Displays the products available for sale.
- **Products** (`/products`): Displays a list of products (same as Home).
- **Product Detail** (`/product/:id`): Displays the detailed view of a product, including the option to add to cart and view related products.
- **Cart** (`/cart`): Displays the products currently added to the cart and allows modification of quantities.
- **Orders** (`/orders`): This page is still under development and will be available for logged-in users to view their previous orders.

## Functionality

### Product Detail Page
- To view the details of a product, simply click on a product displayed on the homepage.
- On the product detail page, you can:
  - View detailed product information, including the name, price, description, and images.
  - Add the product to your cart using the "Add to Cart" button.
  - Modify the product quantity in the cart using the "+" and "-" increment and decrement buttons.

### Cart Page
- In the cart, you can view all added items.
- You can modify the quantity of each item (still working on fixing a small bug related to how the numbers are reflecting).
- The checkout form component has been implemented but is not yet fully functional, so it's not displayed yet.

### Orders Page (In Progress)
- The orders page is under development.
- **Future Plan**: Implement a system where logged-in users can view and manage their past orders and make payments. Users who are not logged in will be shown their current order in progress and prompted to log in or sign up.

## Future Improvements

- **Orders Page**: To be fully implemented and restricted to logged-in users.
- **Authentication**: Users must log in or sign up before viewing their orders.
- **Checkout**: Could integrate a payment system like stripe.

## Accomplishments

- Successfully built and deployed the **Products** page, **Product Detail** page, and **Cart** page (partially).
- Implemented a **responsive layout** and **Navbar**.
- Created interactive **Search** and **Category** components for product filtering.
- Ensured that the application is accessible and responsive across all screen sizes.
- Create a mock login and authentication since I am not connected to any database.
- Take an order to completion. 
- Protected order complete page and conditionally render the Login or checkout depending if a user is authenticated.
## Technologies Used

- **React**: Chosen for its fast client-side rendering and high user interactivity.
- **TailwindCSS**: Utilized for styling and creating a responsive design.
- **React Router**: Used for navigation and routing between pages.
- **TypeScript**: Provides static typing to catch errors early and improve the development experience.
- **React Icons**: A library used for adding customizable icons throughout the application.
- **Toastify**: Used for showing user-friendly toast notifications (success, error, etc.).
- **Classnames**: A utility for conditionally joining class names together, simplifying the process of dynamic styling.


## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/milky-express-shop.git

2. Navigate into the project directory:
    ```bash
    cd milky-express-shop

3. Install dependencies:
    ```bash
    npm install

4. Start the development server::
    ```bash
    npm run dev

4. Start the development server::
    ```bash
    npm run dev

5. Visit http://localhost:5173 in your browser to view the app.

