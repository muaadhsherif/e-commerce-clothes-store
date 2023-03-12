import React from "react";
import "../styles/Product.css";

const Product = () => (
  <div className="product-container">
    <div className="card">
      <div className="card-head">
        <div class="free-shipping">FREE SHIPPING</div>
        <div className="product-details">
          <h2>Hartbeespoort</h2>
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
            Hartbee<b>spoort</b>
            <span className="new-badge">New</span>
          </span>
          <span className="product-caption">Basket Ball Collection</span>
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
            <button className="product-price-btn">
              <strong>234</strong>
              <span>.50</span>
            </button>
            <button className="plus">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
