import logo from "../assets/logo.svg";
import caretDown from "../assets/icon-arrow-down.svg";
import caretUp from "../assets/icon-arrow-up.svg";
import todo from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";
import { useState, useEffect } from "react";

export default function Navbar() {
  const features = [
    { name: "Todo List", link: todo },
    { name: "Calendar", link: calendar },
    { name: "Reminders", link: reminders },
    { name: "Planning", link: planning },
  ];
  const [openNav, setOpenNav] = useState({
    features: false,
    company: false,
  });

  function mouseEvents(option) {
    setOpenNav((prev) => {
      return { ...prev, [option]: !prev[option] };
    });
  }

  useEffect(() => console.log(openNav), [openNav]);

  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="snap logo" />
        <ul className="nav-items">
          <li
            className="dropdown"
            onMouseEnter={() => mouseEvents("features")}
            onMouseLeave={() => mouseEvents("features")}
          >
            <a href="">Features</a>
            <img src={openNav.features ? caretUp : caretDown} />
            <ul className="features-nav">
              {features.map((feature) => {
                return (
                  <li className="feature-links">
                    <img src={feature.link} alt={feature.name} />
                    <a href="">{feature.name}</a>
                  </li>
                );
              })}
            </ul>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => mouseEvents("company")}
            onMouseLeave={() => mouseEvents("company")}
          >
            <a href="">Company</a>
            <img src={openNav.company ? caretUp : caretDown} />
            <ul className="company-nav">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      <div className="account-div">
        <a href="">Login</a>
        <a href="" className="register">
          Register
        </a>
      </div>
    </nav>
  );
}
