# Shoply — Redux Shopping Cart

A modern e-commerce frontend built with React and TypeScript, focused on global state management with Redux Toolkit.

## Features

- Product catalog with search, category filtering, and price sorting
- Product details page
- Add products to cart
- Increase and decrease quantities
- Remove items and clear the cart
- Cart item counter and subtotal calculation
- Responsive layout for desktop, tablet, and mobile
- Dedicated shopping cart page and empty-cart state
- Jest and React Testing Library coverage for cart and product interactions

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Redux
- React Router
- Jest
- React Testing Library
- Vite
- CSS
- ESLint

## Redux Architecture

The application uses Redux Toolkit for global state management:

```text
store/
├── productsSlice
└── cartSlice
```

The product catalog is stored in `productsSlice`, while cart items and cart actions are managed by `cartSlice`.

Typed Redux hooks keep component access to the store type-safe and consistent.

## Testing

Tests cover core cart behavior and product interactions, including:

- Adding products
- Quantity changes
- Removing products
- Clearing the cart
- Product rendering
- Search filtering
- Category filtering
- Price sorting

Run the test suite with:

```bash
npm test
```

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
├── app/
│   ├── store.ts
│   └── hooks.ts
├── components/
│   └── Header.tsx
├── features/
│   ├── cart/
│   │   ├── cartSlice.ts
│   │   ├── Cart.tsx
│   │   ├── types.ts
│   │   └── cartSlice.test.ts
│   └── products/
│       ├── productsSlice.ts
│       ├── productsData.ts
│       ├── ProductCard.tsx
│       ├── ProductList.tsx
│       └── ProductList.test.tsx
├── pages/
│   ├── Home.tsx
│   └── ProductDetails.tsx
├── App.tsx
└── main.tsx
```

## What I Practiced

This project focuses on practical frontend concepts such as global state management, Redux Toolkit slices and actions, typed Redux hooks, derived state, component composition, client-side routing, responsive UI development, and frontend testing.

## Future Improvements

Possible future iterations could include a real product API, cart persistence across sessions, pagination, authentication, checkout integration, and broader automated test coverage.
# redux-shopping-cart
