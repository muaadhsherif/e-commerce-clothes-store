import "../styles/Product.css";

const Product = () => (
  <div className="product-container">
    <div className="card">
      <div className="card-head">
        <div class="free-shipping">FREE SHIPPING</div>
        <div className="product-details">
          <h2>Hartbeespoort</h2> Support and Adiddas Zoom Air come together for
          a more supportive feel with high-speed responsiveness
        </div>
        <span className="back-text">XL</span>
      </div>

      <div className="card-body">
        <div>
          <span className="product-title">
            Hartbee<b>spoort</b>
            <span className="badge">New</span>
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
          <button className="product-price">
            USD<b>234</b>.50
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default Product;
