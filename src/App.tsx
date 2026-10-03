import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Cart from "./features/cart/Cart"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
