import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

import { useAppSelector } from "../app/hooks"

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H7" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cartItems = useAppSelector((state) => state.cart.items)

  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>Shoply</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
          <a className="nav-link" href="/#products">
            Products
          </a>
        </nav>

        <div className="header-actions">
          <Link className="header-cart" to="/cart" aria-label="Open shopping cart">
            <CartIcon />
            <span>Cart</span>
            <strong>{itemCount}</strong>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink className="mobile-menu-link" to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <a className="mobile-menu-link" href="/#products" onClick={closeMenu}>
            Products
          </a>
          <Link className="mobile-menu-cart" to="/cart" onClick={closeMenu}>
            <span>Cart</span>
            <strong>{itemCount}</strong>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
