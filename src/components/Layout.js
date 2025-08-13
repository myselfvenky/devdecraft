import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const year = new Date().getFullYear();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            DevdeCraft
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Desktop navigation */}
          <nav className="nav desktop-nav">
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link className="btn btn-secondary" href="/#contact">
              Contact
            </Link>
          </nav>

          {/* Mobile navigation */}
          <nav className={`nav mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link className="btn btn-secondary" href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-content">
            <p>© {year} DevDeCraft. All rights reserved.</p>
            <div className="footer-links">
              <Link href="/products">Products</Link>
              <Link href="/services">Services</Link>
              <Link href="mailto:hello@devdecraft.com">Contact</Link>
            </div>
          </div>
          <div className="footer-policies">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/shipping">Shipping Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
