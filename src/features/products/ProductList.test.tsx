import { configureStore } from "@reduxjs/toolkit"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

import productsReducer from "./productsSlice"
import ProductList from "./ProductList"

function createTestStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
    },
  })
}

function renderProductList() {
  const store = createTestStore()

  return render(
    <Provider store={store}>
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    </Provider>,
  )
}

describe("ProductList", () => {
  test("renders all products", () => {
    renderProductList()

    expect(
      screen.getByRole("heading", {
        name: "Wireless Headphones",
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", {
        name: "Smart Watch",
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", {
        name: "Travel Backpack",
      }),
    ).toBeInTheDocument()
  })

  test("filters products by search", async () => {
    const user = userEvent.setup()

    renderProductList()

    const searchInput = screen.getByPlaceholderText("Search products...")

    await user.type(searchInput, "watch")

    expect(
      screen.getByRole("heading", {
        name: "Smart Watch",
      }),
    ).toBeInTheDocument()

    expect(
      screen.queryByRole("heading", {
        name: "Wireless Headphones",
      }),
    ).not.toBeInTheDocument()
  })

  test("filters products by category", async () => {
    const user = userEvent.setup()

    renderProductList()

    const categorySelect = screen.getAllByRole("combobox")[0]

    await user.selectOptions(categorySelect, "Electronics")

    expect(
      screen.getByRole("heading", {
        name: "Wireless Headphones",
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole("heading", {
        name: "Smart Watch",
      }),
    ).toBeInTheDocument()

    expect(
      screen.queryByRole("heading", {
        name: "Casual Sneakers",
      }),
    ).not.toBeInTheDocument()
  })

  test("sorts products from low to high price", async () => {
    const user = userEvent.setup()

    renderProductList()

    const sortSelect = screen.getAllByRole("combobox")[1]

    await user.selectOptions(sortSelect, "price-asc")

    const productTitles = screen.getAllByRole("heading", {
      level: 3,
    })

    expect(productTitles[0]).toHaveTextContent("Water Bottle")
    expect(productTitles[1]).toHaveTextContent("Sunglasses")
  })

  test("sorts products from high to low price", async () => {
    const user = userEvent.setup()

    renderProductList()

    const sortSelect = screen.getAllByRole("combobox")[1]

    await user.selectOptions(sortSelect, "price-desc")

    const productTitles = screen.getAllByRole("heading", {
      level: 3,
    })

    expect(productTitles[0]).toHaveTextContent("Smart Watch")
    expect(productTitles[1]).toHaveTextContent("Casual Sneakers")
  })
})
