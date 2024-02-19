import { FiRefreshCcw } from "react-icons/fi";
import { LiaFileImportSolid } from "react-icons/lia";
import { LuSendHorizonal } from "react-icons/lu";
import { BsPrinter } from "react-icons/bs";

import "./index.css";

const OrderStatusTable = () => (
  <div className="order-status-table-section">
    <div className="order-status-table-sections">
      <button type="button" className="status-btn">
        <LiaFileImportSolid />
        <p>Import Orders</p>
      </button>
      <button type="button" className="status-btn order-status-btn">
        <LuSendHorizonal /> <p>Accept</p>
      </button>
      <button type="button" className="status-btn order-status-btn">
        <BsPrinter /> <p>Print</p>
      </button>
    </div>
    <div className="refresh-button">
      <button type="button" className="fresh-btn">
        <FiRefreshCcw className="refresh-icon" />
        Refresh
      </button>
    </div>
  </div>
);

export default OrderStatusTable;
