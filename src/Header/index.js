import { IoMoonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { HiMiniLanguage } from "react-icons/hi2";

import "./index.css";

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://adaptnxt.com/wp-content/uploads/2023/11/adaptnxt-final_purple-rect-_19Nov-300x511-1.png"
        alt="website logo"
      />

      <ul className="nav-menu">
        <li className="nav-icons">
          <IoMoonOutline />
        </li>
        <li className="nav-icons">
          <FaRegBell />
        </li>
        <li className="nav-icons">
          <HiMiniLanguage />
        </li>
        <li className="nav-icons">
          <img src="image" alt="avator" />
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
