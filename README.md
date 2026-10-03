# Redux Shopping Cart

### React E-commerce Frontend with Redux Toolkit

A modern e-commerce frontend application built with **React and TypeScript**, focused on demonstrating global state management with **Redux Toolkit and React Redux**.

The project combines a product catalog, search and filtering, product details, client-side routing, and a shopping cart with quantity management and subtotal calculation. It also includes automated tests using **Jest and React Testing Library**.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?logo=redux\&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter\&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)](https://vitejs.dev/)
[![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest\&logoColor=white)](https://jestjs.io/)

---

## 🔗 Project


## 🌐 Project Links

[![Live Demo](https://img.shields.io/badge/Live%20Demo-CodeLens-000000?style=for-the-badge)](aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge\&logo=github)](https://github.com/JeanRibeiro8/redux-shopping-cart)

---

## 📸 Preview

<div align="center">

<img src="./public/redux-shopping-cart.png.png" width="850" alt="redux-shopping-cart interface">

</div>

---


## 📌 Overview

Redux Shopping Cart is a portfolio project created to practice **global state management in a React application**.

The application uses a centralized Redux store to manage product and shopping cart state. The cart is shared across different parts of the interface, making it a practical example of when global state management is useful.

The project brings together **React, TypeScript, Redux Toolkit, React Router, responsive UI development, and automated component testing** in a single frontend application.

The main technical focus is understanding how shared state, actions, components, and user interactions work together in a structured React architecture.

---

## ✨ Features

### 🛍️ Product Catalog

* Product listing
* Product search
* Category filtering
* Price sorting
* Product detail page
* Responsive product cards

### 🛒 Shopping Cart

* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products
* Clear cart
* Subtotal calculation
* Cart item counter
* Empty cart state
* Dedicated shopping cart page

### 🧭 Navigation

* Client-side routing with React Router
* Home page
* Product details route
* Shopping cart route
* Responsive navigation

### 🎨 UI / UX

* Clean and modern e-commerce interface
* Minimal product-focused layout
* Responsive design
* Mobile navigation
* Semantic HTML
* Hover and interaction states

---

## 🧰 Tech Stack

| Technology                     | Usage in the Project                                                     |
| ------------------------------ | ------------------------------------------------------------------------ |
| **React**                      | Builds the application interface using reusable components and pages     |
| **TypeScript**                 | Provides types for products, cart data, Redux state, and component logic |
| **Redux Toolkit**              | Organizes global product and cart state through Redux slices and actions |
| **React Redux**                | Connects React components to the Redux store                             |
| **React Router**               | Handles navigation between the home, product details, and cart pages     |
| **Vite**                       | Provides the development environment and production build tooling        |
| **Jest**                       | Runs the project's automated test suite                                  |
| **React Testing Library**      | Tests React components through their rendered behavior                   |
| **Testing Library User Event** | Simulates realistic user interactions such as clicking and typing        |
| **CSS**                        | Provides the application's responsive styling and visual presentation    |
| **ESLint**                     | Helps maintain consistent code quality                                   |
| **Git**                        | Used for version control and project development                         |

---

## 🧠 Redux Architecture

The application uses a centralized Redux store with separate feature slices for products and cart state.

### Store Configuration

```text
src/
└── app/
    ├── store.ts
    └── hooks.ts
```

The Redux state is organized around the application's main features:

```text
store
├── products
│   └── productsSlice
└── cart
    └── cartSlice
```

### `store.ts`

Configures the Redux store and combines the application's feature slices into a centralized state.

### `productsSlice`

Manages the product-related state used by the catalog.

The product state supports the information required for:

* Product listing
* Product search
* Category filtering
* Price sorting

### `cartSlice`

Manages the application's shared shopping cart state, including:

* Products currently in the cart
* Product quantities
* Adding products
* Removing products
* Clearing the cart
* Cart calculations

The cart is a useful example of global state because multiple components need access to the same information.

For example, the **Header** needs the cart item count while the **Cart page** needs the complete cart state.

### Redux Actions

Components dispatch actions when users interact with the application.

For example:

```text
ProductCard
    ↓
dispatch(addToCart(product))
    ↓
cartSlice
    ↓
Redux Store
```

The slice updates the state, and components subscribed to the relevant state receive the updated values and re-render accordingly.

### Typed Redux Hooks

The project uses:

```text
useAppDispatch
useAppSelector
```

These typed hooks provide a TypeScript-safe interface for dispatching actions and reading data from the Redux store.

---

## 🔄 Application Flow

The main state-management flow can be represented as:

```text
User
  ↓
React Component
  ↓
Redux Action
  ↓
Redux Store
  ↓
Updated State
  ↓
React UI
```

For example, when a user adds a product to the cart:

```text
User clicks "Add to Cart"
          ↓
ProductCard dispatches addToCart()
          ↓
cartSlice updates the cart state
          ↓
Redux store contains the updated state
          ↓
Header and Cart read the updated state
          ↓
UI updates automatically
```

This provides a predictable flow for managing shared application state while keeping UI components focused on presentation and interaction.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── store.ts
│   └── hooks.ts
│
├── features/
│   ├── cart/
│   │   ├── cartSlice.ts
│   │   ├── Cart.tsx
│   │   ├── types.ts
│   │   └── cartSlice.test.ts
│   │
│   └── products/
│       ├── productsSlice.ts
│       ├── productsData.ts
│       ├── types.ts
│       ├── ProductCard.tsx
│       ├── ProductList.tsx
│       └── ProductList.test.tsx
│
├── components/
│   └── Header.tsx
│
├── pages/
│   ├── Home.tsx
│   └── ProductDetails.tsx
│
├── App.tsx
└── main.tsx
```

### Main Directories

**`app/`**
Contains the Redux store configuration and typed Redux hooks.

**`features/`**
Organizes the application's main features. Each feature contains related state, components, types, and tests.

**`components/`**
Contains reusable application-level components such as the header.

**`pages/`**
Contains the main pages used by the application's client-side routing.

This structure keeps feature logic organized while separating global application configuration, reusable components, and page-level components.

---

## 🧪 Testing

The project includes automated tests using:

* **Jest**
* **Jest DOM**
* **React Testing Library**
* **Testing Library User Event**

The tests focus on important user-facing behavior and state changes.

### Shopping Cart Tests

The cart tests cover:

* Adding a product
* Increasing quantity
* Decreasing quantity
* Removing a product
* Clearing the cart

### Product Tests

Product list/component tests cover:

* Rendering products
* Searching products
* Filtering by category
* Sorting by price

Testing these behaviors helps verify that important interactions and state transitions continue to behave as expected when the application changes.

The project does **not** claim 100% test coverage.

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/JeanRibeiro8/redux-shopping-cart.git
```

### 2. Navigate to the project

```bash
cd redux-shopping-cart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Create a production build

```bash
npm run build
```

### 6. Run the test suite

```bash
npm test
```

---

## 🧠 What I Practiced

This project demonstrates practical experience with:

* Global state management
* Redux Toolkit
* Redux slices
* Redux actions
* Typed Redux hooks
* React component composition
* TypeScript interfaces and types
* Derived state
* Client-side routing
* Search and filtering
* Sorting
* User interactions
* Responsive UI development
* Component testing
* State-driven UI
* Feature-based frontend organization

The main focus was understanding how shared application state can be centralized with Redux Toolkit and consumed by different React components.

The project also provided practice in keeping state logic, UI components, routing, and tests organized within a feature-based structure.

---

## 🎨 Design

The application follows a **clean, modern, minimal, and product-focused** visual approach.

The interface was designed to provide:

* Responsive layouts
* Mobile navigation
* Product-focused presentation
* Clear shopping cart interactions
* Interactive states
* Semantic HTML structure

The design supports the technical goal of the project by providing a realistic frontend context in which global state management can be applied.

> No screenshot is included in this README because an actual repository image path was not provided.

---

## 🔮 Future Improvements

The following are potential future improvements and are **not part of the current implementation**:

* Connect the product catalog to a real API
* Persist cart state
* Add pagination
* Implement a real checkout flow
* Add authentication
* Expand automated test coverage
* Further improve accessibility

These improvements would extend the project beyond its current frontend and state-management focus.

---

## ⚠️ Limitations

Redux Shopping Cart is a **frontend portfolio project** focused on React, TypeScript, Redux Toolkit, and frontend testing.

The current product catalog uses **local/mock data** rather than a real product API.

The project does not currently implement a real payment, order-processing, or backend checkout system.

If a checkout-related interface is present in the frontend, it should be understood as part of the UI demonstration rather than a real transaction system.

---

## 👨‍💻 Author

**Jean Ribeiro**

Junior Frontend Developer focused on building modern web applications with React and TypeScript.

* GitHub: [JeanRibeiro8](https://github.com/JeanRibeiro8)
* Portfolio: [jeanribeiro8.github.io/JeanRibeiro](https://jeanribeiro8.github.io/JeanRibeiro/)

---

<div align="center">

**Built to practice React, TypeScript, Redux Toolkit, global state management, and frontend testing.**

</div>
