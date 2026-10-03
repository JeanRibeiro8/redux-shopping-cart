import { Link } from "react-router-dom"

import { useAppDispatch } from "../../app/hooks"
import { addToCart } from "../cart/cartSlice"

import type { Product } from "./types"

interface ProductCardProps {
  product: Product
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H7" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  )
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch()

  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/products/${product.id}`}>
        <div className="product-image-wrap">
          <img src={product.image} alt={product.title} />
        </div>
      </Link>

      <div className="product-card-content">
        <span className="product-category">{product.category}</span>

        <Link className="product-title-link" to={`/products/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>

        <p>{product.description}</p>

        <div className="product-card-footer">
          <strong>${product.price.toFixed(2)}</strong>
          <button
            type="button"
            onClick={() => dispatch(addToCart(product))}
            aria-label={`Add ${product.title} to cart`}
          >
            <CartIcon />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
