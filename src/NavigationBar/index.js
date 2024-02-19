import { RiDashboard3Line } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { FaRegRectangleList } from "react-icons/fa6";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsShare } from "react-icons/bs";

import "./index.css";

const NavigationBar = () => (
  <div className="navigation-section">
    <ul className="navigation-unordered-section">
      <li className="navigation-items">
        <div className="navigation-items-container">
          <RiDashboard3Line className="navigation-icon" />
          <p className="navigation-name">Dashboard</p>
        </div>
      </li>
      <li className="navigation-items active-tab">
        <div className="navigation-items-container">
          <IoPricetagOutline className="navigation-icon" />
          <p className="navigation-name">Inventory</p>
        </div>
      </li>
      <li className="navigation-items">
        <div className="navigation-items-container">
          <FaRegRectangleList className="navigation-icon" />
          <p className="navigation-name">Orders</p>
        </div>
      </li>
      <li className="navigation-items">
        <div className="navigation-items-container">
          <MdOutlineLocalShipping className="navigation-icon" />
          <p className="navigation-name">Shipping</p>
        </div>
      </li>
      <li className="navigation-items">
        <div className="navigation-items-container">
          <BsShare className="navigation-icon" />
          <p className="navigation-name">Channel</p>
        </div>
      </li>
    </ul>
  </div>
);

export default NavigationBar;
