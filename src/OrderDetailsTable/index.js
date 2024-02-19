import "./index.css";

const OrderDetailsTable = () => (
  <div className="order-table-header">
    <div className="checkbox-header">
      <input type="checkbox" />
    </div>
    <div className="channel-header">
      <p>Channel</p>
    </div>
    <div className="order-date-header channel-header">Order No</div>
    <div className="order-date-header channel-header">Order Date</div>
    <div className="city-header channel-header">City</div>
    <div className="customer-name-header channel-header">Customer Name</div>
    <div className="order-value-header channel-header">Order Value</div>
    <div className="status-header channel-header">Status</div>
    <div className="operation-header channel-header">Operation</div>
  </div>
);

export default OrderDetailsTable;
