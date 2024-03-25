import logo from "../assets/logo.svg";
import caretDown from "../assets/icon-arrow-down.svg";
import caretUp from "../assets/icon-arrow-up.svg";
import todo from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";
import menuIcon from "../assets/icon-menu.svg";
import { useState } from "react";
import FeaturesNav from "./FeaturesNav";

export default function Navbar() {
  const features = [
    { name: "Todo List", link: todo },
    { name: "Calendar", link: calendar },
    { name: "Reminders", link: reminders },
    { name: "Planning", link: planning },
  ];
  const [openNav, setOpenNav] = useState({
    main: false,
    features: false,
    company: false,
  });

  function mouseEvents(option) {
    setOpenNav((prev) => {
      return { ...prev, [option]: !prev[option] };
    });
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="snap logo" />
      <div className="nav-content">
        <button className="nav-button" onClick={() => mouseEvents("main")}>
          <img src={menuIcon} alt="" />
        </button>
        <ul className="nav-items">
          <li
            className="dropdown"
            onMouseEnter={() => mouseEvents("features")}
            onMouseLeave={() => mouseEvents("features")}
          >
            <a href="">Features</a>
            <img src={openNav.features ? caretUp : caretDown} />
            <FeaturesNav features={features} />
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => mouseEvents("company")}
            onMouseLeave={() => mouseEvents("company")}
          >
            <a href="">Company</a>
            <img src={openNav.company ? caretUp : caretDown} />
            <ul className="company-nav">
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Our Team</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>

        <div className="account-div">
          <a href="">Login</a>
          <a href="" className="register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
