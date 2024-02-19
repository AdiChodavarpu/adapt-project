import OrderStatus from "../OrderStatus";
import OrderTable from "../OrderTable";


import { RxCross2 } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";

import "./index.css";

const OrderSection = () => (
  <div className="orders-section">
    <div className="order-setting-section">
      <div className="order-cancel-tab">
        <p className="Orders-tab">Orders</p>
        <button type="button" className="order-btn">
          <RxCross2 className="setting-btn" />
        </button>
      </div>
      <button type="button" className="order-btn">
        <IoMdSettings className="setting-btn" />
      </button>
    </div>

    <OrderStatus />
    <OrderTable />
  
  </div>
);

export default OrderSection;
