import React from "react";
import "../styles/Product.css";

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
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star grey"></i>
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
                <svg
                  className="active"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <svg
                  className="actives"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
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
