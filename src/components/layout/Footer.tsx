import React from 'react'
import { Link } from 'react-router-dom'
import { Camera, UsersRound, Mail } from 'lucide-react'
import { APP_CONFIG, ROUTES } from '../../constants'
import './Footer.css'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <span className="footer__logo">{APP_CONFIG.NAME}</span>
            <p className="footer__tagline">{APP_CONFIG.TAGLINE}</p>
            <div className="footer__social"><a href="https://www.instagram.com/" aria-label="Instagram"><Camera size={17}/></a><a href="https://www.facebook.com/" aria-label="Facebook"><UsersRound size={17}/></a><a href="mailto:hello@fashionhub.example" aria-label="Email us"><Mail size={17}/></a></div>
          </div>

          <div>
            <h4 className="footer__col-title">Collections</h4>
            <div className="footer__links">
              <Link to={ROUTES.SHOP} className="footer__link">
                All Products
              </Link>
              <Link to={ROUTES.CATEGORY('women')} className="footer__link">
                Women's Collection
              </Link>
              <Link to={ROUTES.CATEGORY('men')} className="footer__link">
                Men's Collection
              </Link>
              <Link to={ROUTES.CATEGORY('accessories')} className="footer__link">
                Accessories
              </Link>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Customer Care</h4>
            <div className="footer__links">
              <Link to={ROUTES.ORDERS} className="footer__link">
                Track Orders
              </Link>
              <Link to={ROUTES.PROFILE} className="footer__link">
                My Account
              </Link>
              <Link to={ROUTES.CART} className="footer__link">
                Shopping Bag
              </Link>
              <Link to={ROUTES.WISHLIST} className="footer__link">
                Wishlist
              </Link>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Policy</h4>
            <div className="footer__links">
              <span className="footer__link">Shipping & Delivery</span>
              <span className="footer__link">Returns & Refunds</span>
              <span className="footer__link">Terms of Service</span>
              <span className="footer__link">Privacy Policy</span>
            </div>
          </div>
          <div>
            <h4 className="footer__col-title">Get in touch</h4>
            <div className="footer__links"><a className="footer__link" href="mailto:hello@fashionhub.example">hello@fashionhub.example</a><span className="footer__link">Monday – Friday, 10am – 6pm IST</span><span className="footer__link">New Delhi, India</span></div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {APP_CONFIG.NAME}. All rights reserved.</p>
          <p>Made for the way you move.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
