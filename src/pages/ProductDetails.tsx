import { Link, useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addToCart } from "../features/cart/cartSlice"

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H7" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  )
}

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const product = useAppSelector((state) =>
    state.products.items.find((item) => item.id === Number(id)),
  )

  if (!product) {
    return (
      <section className="not-found-card">
        <span className="section-kicker">Store</span>
        <h2>Product not found</h2>
        <p>The product you are looking for is no longer available.</p>
        <Link className="primary-button" to="/">
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <section className="product-details">
      <Link className="back-link" to="/">
        ← Back to products
      </Link>

      <div className="product-details-content">
        <div className="details-image-panel">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-copy">
          <span className="product-category">{product.category}</span>
          <h1>{product.title}</h1>
          <div className="rating" aria-label="Rated 4.8 out of 5">
            <span>★★★★★</span>
            <small>4.8 · 124 reviews</small>
          </div>
          <strong className="details-price">${product.price.toFixed(2)}</strong>
          <p>{product.description}</p>

          <ul className="feature-list">
            <li><span>✓</span> Carefully selected quality</li>
            <li><span>✓</span> Comfortable everyday use</li>
            <li><span>✓</span> Fast and reliable delivery</li>
          </ul>

          <button
            className="details-add-button"
            type="button"
            onClick={() => dispatch(addToCart(product))}
          >
            <CartIcon />
            Add to Cart
          </button>

          <div className="details-meta">
            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Availability</span>
              <strong>In stock</strong>
            </div>
            <div>
              <span>Shipping</span>
              <strong>Free shipping</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
