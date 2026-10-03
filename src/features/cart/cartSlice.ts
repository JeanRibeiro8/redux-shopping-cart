import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Product } from "../products/types"
import type { CartItem } from "./types"

interface CartState {
  items: CartItem[]
}

const getInitialCart = (): CartItem[] => {
  try {
    const savedCart = localStorage.getItem("shopping-cart")

    if (!savedCart) {
      return []
    }

    return JSON.parse(savedCart) as CartItem[]
  } catch {
    localStorage.removeItem("shopping-cart")
    return []
  }
}

const initialState: CartState = {
  items: getInitialCart(),
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
        return
      }

      state.items.push({
        ...action.payload,
        quantity: 1,
      })
    },

    incrementQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      )

      if (item) {
        item.quantity += 1
      }
    },

    decrementQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      )

      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<number>
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer