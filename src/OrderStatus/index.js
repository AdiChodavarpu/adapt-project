import "./index.css";

const orderStatusArray = [
  "Pending",
  "Accepted",
  "AWB Created",
  "Ready to Ship",
  "Shipped",
  "Completed",
  "Cancelled",
];

const OrderStatus = () => (
  <div className="Order-Status-Section">
    <ul className="order-status-un-ordered-list">
      {orderStatusArray.map((eachitem) => (
        <li className="order-status-items" key={eachitem}>
          {eachitem}
        </li>
      ))}
    </ul>
  </div>
);

export default OrderStatus;
