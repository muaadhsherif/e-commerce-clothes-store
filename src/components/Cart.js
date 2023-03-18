import Item from "./Item";

import "../styles/Cart.css";

const Cart = () => (
  <div className="cart-container">
    <Item></Item>
    <Item></Item>
    <Item></Item>
    <hr style={{ borderColor: "green" }} />
    <div className="final">
      <p className="total">
        <span className="total-word">Total</span>$ 1500
        <span className="total-piasters">.00</span>
      </p>
      <p className="discounts-total">Discounts saved you $750. :)</p>
    </div>
  </div>
);
export default Cart;
