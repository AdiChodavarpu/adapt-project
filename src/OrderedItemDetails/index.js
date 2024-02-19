import { FiPlus } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";

import "./index.css";

const imageSrc =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dgreen%2BShopping%2BBag&psig=AOvVaw3kdDGih0O7S_ivpyKb_sn2&ust=1708431776053000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPiwjruyt4QDFQAAAAAdAAAAABAE";

const ordersArray = ["TKN202045754", "TKN202045754", "TKN202045754"];

const OrderedItemDetails = () => (
  <ul className="order-item-un-ordered-list">
    {ordersArray.map((eachitem) => (
      <li className="order-item-section" key={eachitem}>
        <div className="check-box-section">
          <FiPlus /> <input type="checkbox" />
        </div>
        <div className="bag-section">
          <img src={imageSrc} className="bag-image" alt="bag" />
        </div>
        <div className="orderno-section">
          <p className="order-no">{eachitem}</p>
        </div>
        <div className="date">
          <p>2024-02-19</p>
        </div>
        <div className="city">
          <p>Lucknow</p>
        </div>
        <div className="customer-name">
          <p>Abhishek Dikshit</p>
        </div>
        <div className="city">
          <p>0.00</p>
        </div>
        <div className="pending">
          <button type="button">Pending</button>
        </div>
        <div className="Actions">
          <button type="button">Actions</button>
          <MdArrowDropDown />
        </div>
      </li>
    ))}
  </ul>
);

export default OrderedItemDetails;
