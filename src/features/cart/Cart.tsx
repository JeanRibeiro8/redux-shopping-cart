import { Link } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "./cartSlice"

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7h14M10 11v6M14 11v6M9 7V4h6v3M7 7l1 14h8l1-14" />
    </svg>
  )
}

function Cart() {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  if (cartItems.length === 0) {
    return (
      <section className="empty-cart-page">
        <div className="empty-cart-icon">🛒</div>
        <span className="section-kicker">Shopping cart</span>
        <h1>Your cart is empty</h1>
        <p>Explore our products and find something you’ll love.</p>
        <Link className="primary-button" to="/">
          Continue Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <div className="cart-page-heading">
        <div>
          <span className="section-kicker">Shopping cart</span>
          <h1>Your Cart</h1>
        </div>
        <span>{cartItems.length} item{cartItems.length === 1 ? "" : "s"}</span>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-item-main">
                <span className="product-category">{item.category}</span>
                <h2>{item.title}</h2>
                <p>${item.price.toFixed(2)} each</p>

                <div className="cart-item-controls">
                  <div className="quantity-control" aria-label={`Quantity for ${item.title}`}>
                    <button
                      type="button"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      aria-label={`Decrease ${item.title} quantity`}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      aria-label={`Increase ${item.title} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <TrashIcon />
                    Remove
                  </button>
                </div>
              </div>

              <strong className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </article>
          ))}

          <button
            className="clear-cart-button"
            type="button"
            onClick={() => dispatch(clearCart())}
          >
            <TrashIcon />
            Clear cart
          </button>
        </div>

        <aside className="order-summary">
          <h2>Order summary</h2>
          <div><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
          <div><span>Shipping</span><strong className="free-shipping">Free</strong></div>
          <div className="summary-total"><span>Total</span><strong>${subtotal.toFixed(2)}</strong></div>
          <button className="checkout-button" type="button">
            Proceed to checkout
          </button>
        </aside>
      </div>
    </section>
  )
}

export default Cart
