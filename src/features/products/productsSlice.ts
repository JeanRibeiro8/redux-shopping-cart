import { createSlice } from "@reduxjs/toolkit"

import type { Product } from "./types"
import { products } from "./productsData"

interface ProductsState {
  items: Product[]
}

const initialState: ProductsState = {
  items: products,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
})

export default productsSlice.reducer