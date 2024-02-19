import OrderStatusTable from "../OrderStatusTable";
import OrderDetailsTable from "../OrderDetailsTable";
import OrderedItemDetails from "../OrderedItemDetails";
import { MdArrowDropDown } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

import "./index.css";

const OrderTable = () => (
  <div className="order-table-section">
    <OrderStatusTable />
    <OrderDetailsTable />
    <OrderedItemDetails />
    <div className="pagination">
      <button type="button" className="paging-button">
        <MdOutlineKeyboardArrowLeft />
      </button>
      <button type="button" className="paging-button">
        1
      </button>

      <button type="button" className="paging-button">
        <RiArrowRightSLine />
      </button>
      <button type="button">
        20/pagee <MdArrowDropDown />
      </button>
    </div>
  </div>
);

export default OrderTable;
