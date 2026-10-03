import { useState } from "react"

import { useAppSelector } from "../../app/hooks"

import ProductCard from "./ProductCard"

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  )
}

function ProductList() {
  const products = useAppSelector((state) => state.products.items)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sort, setSort] = useState("default")

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ]

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        category === "All" || product.category === category

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price
      if (sort === "price-desc") return b.price - a.price
      return 0
    })

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="hero-kicker">Quality products, better living</span>
          <h1>Discover products</h1>
          <p>
            Find the best products for your lifestyle. Quality, variety and
            great prices in one place.
          </p>
          <a className="hero-button" href="#products">
            Explore products
          </a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-glow" />
          <img src="/products/headphones.jpg" alt="" />
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Curated collection</span>
            <h2>Featured products</h2>
          </div>
          <span className="product-count">{filteredProducts.length} products</span>
        </div>

        <div className="product-filters">
          <label className="search-field">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search products"
            />
          </label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Categories" : item}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort products"
          >
            <option value="default">Sort by: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <div className="empty-icon">⌕</div>
            <h3>No products found</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </section>
    </>
  )
}

export default ProductList
