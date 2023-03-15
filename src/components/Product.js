import React from "react";
import { Star, GrayStar, OutlineCart, SolidCart } from "./svg";
import "../styles/Product.css";

const added = false;
const Cart = added ? SolidCart : OutlineCart;

const Product = () => (
  <div className="product-container">
    <div className="card">
      <div className="card-head">
        <div class="free-shipping">FREE SHIPPING</div>
        <div className="product-details">
          <h2>Active</h2>
          <img
            src="https://s.alicdn.com/@sc04/kf/Hf56b6482603c4a4c81d7ef20bdad25423.jpg_960x960.jpg"
            alt="XL Gray shirt."
            width="200px"
          />
        </div>
        {/* <span className="back-text">XL</span> */}
      </div>

      <div className="card-body">
        <div>
          <span className="product-title">
            cotton <b>shirt</b>
            <span className="new-badge">New</span>
          </span>
          <span className="product-caption">
            95% cotton 5% elastane V-neck-plan men T-shirts
          </span>
          <span className="product-rating">
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <GrayStar />
          </span>
        </div>
        <div className="product-properties">
          <ul className="product-size">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li className="active">XL</li>
            <li>XXL</li>
          </ul>
          <ul className="product-color">
            <li className="orange active"></li>
            <li className="green"></li>
            <li className="yellow"></li>
          </ul>
          <div className="product-price">
            <button className="minus">-</button>
            <button className="price">
              <span className="cart-with-quantinty">
                <span className="quantity">1</span>
                <Cart />
              </span>
              234.
              <span className="piasters">
                50<span className="currency">$</span>
              </span>
            </button>
            <button className="plus">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
