import "../styles/Item.css";

const Item = () => (
  <>
    <hr />
    <div className="item-container">
      <img
        src="https://s.alicdn.com/@sc04/kf/Hf56b6482603c4a4c81d7ef20bdad25423.jpg_960x960.jpg"
        alt="product"
        width="70px"
        height="70px"
      />
      <div className="item-info">
        <p>Active</p>
        <p className="item-title">cotton shirt</p>
      </div>
      <div className="item-price">
        <table>
          <tr>
            <td>3x:</td>
            <td>&nbsp;750.50</td>
          </tr>
          <tr>
            <td>-1x:</td>
            <td>
              (1250.40) <span style={{ color: "green" }}>free</span>
            </td>
          </tr>
          <tr>
            <td>=</td>
            <td>&nbsp;1500.50</td>
          </tr>
        </table>
      </div>
    </div>
  </>
);

export default Item;
