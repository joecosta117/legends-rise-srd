import "./index.scss";
import React, { useState, useEffect } from "react";
// @ts-ignore
import { getBreakpoint } from "../../utils/getBreakpoint";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getBreakpoint() === "MOBILE");
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Hero Options
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Rules
          </a>
        </li>
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Game Mastery
          </a>
        </li>
        <li className="navigation__item">
          <a href="/contact" className="navigation__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;