import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "../features/cart/cartSlice"
import productsReducer from "../features/products/productsSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})

store.subscribe(() => {
  const cart = store.getState().cart

  localStorage.setItem(
    "shopping-cart",
    JSON.stringify(cart.items)
  )
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch