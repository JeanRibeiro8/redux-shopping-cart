import cartReducer, {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  clearCart,
} from "./cartSlice"

import type { Product } from "../products/types"

const product: Product = {
  id: 1,
  title: "Classic T-Shirt",
  price: 29.99,
  category: "Clothing",
  description: "A comfortable everyday t-shirt.",
  image: "https://placehold.co/600x400",
}

describe("cartSlice", () => {
  test("adds a product to the cart", () => {
    const state = cartReducer(
      undefined,
      addToCart(product)
    )

    expect(state.items).toHaveLength(1)
    expect(state.items[0].id).toBe(product.id)
    expect(state.items[0].quantity).toBe(1)
  })

  test("increases quantity when adding the same product", () => {
    let state = cartReducer(
      undefined,
      addToCart(product)
    )

    state = cartReducer(
      state,
      addToCart(product)
    )

    expect(state.items).toHaveLength(1)
    expect(state.items[0].quantity).toBe(2)
  })

  test("increments quantity", () => {
    let state = cartReducer(
      undefined,
      addToCart(product)
    )

    state = cartReducer(
      state,
      incrementQuantity(product.id)
    )

    expect(state.items[0].quantity).toBe(2)
  })

  test("decrements quantity", () => {
    let state = cartReducer(
      undefined,
      addToCart(product)
    )

    state = cartReducer(
      state,
      incrementQuantity(product.id)
    )

    state = cartReducer(
      state,
      decrementQuantity(product.id)
    )

    expect(state.items[0].quantity).toBe(1)
  })

  test("removes a product", () => {
    let state = cartReducer(
      undefined,
      addToCart(product)
    )

    state = cartReducer(
      state,
      removeFromCart(product.id)
    )

    expect(state.items).toHaveLength(0)
  })

  test("clears the cart", () => {
    let state = cartReducer(
      undefined,
      addToCart(product)
    )

    state = cartReducer(
      state,
      clearCart()
    )

    expect(state.items).toHaveLength(0)
  })
})
