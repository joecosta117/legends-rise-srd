import "./index.scss";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// @ts-ignore
import { BREAKPOINTS, getBreakpoint } from "../../utils/getBreakpoint";

const Navigation = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(getBreakpoint() === "MOBILE");
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  useEffect(() => {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 41) {
        if (prevScrollPos > currentScrollPos) {
          const nav = document.getElementById("nav");
          if (nav) nav.style.top = "0";
        } else {
          const nav = document.getElementById("nav");
          if (nav) nav.style.top = "-60px";
        }
      }

      setPrevScrollPos(currentScrollPos);
    };
  }, [prevScrollPos]);

  function toggleMobileNav() {
    if (window.innerWidth < BREAKPOINTS.DESKTOP) {
      setIsMobileNavOpen(!isMobileNavOpen);
    }
  }

  function toggleDropdown(event: any) {
    const dropdownType = event.target.dataset.type;

    document
      .querySelectorAll(".navigation__links-container__dropdown")
      .forEach((element: any) => {
        if (element.dataset.type === dropdownType) {
          element.dataset.active === "true"
            ? (element.dataset.active = "false")
            : (element.dataset.active = "true");
        } else {
          element.dataset.active = "false";
        }
      });

    document
      .querySelectorAll(".navigation__links-container__dropdown-arrow")
      .forEach((element: any) => {
        if (element.dataset.type === dropdownType) {
          element.dataset.active === "true"
            ? (element.dataset.active = "false")
            : (element.dataset.active = "true");
        } else {
          element.dataset.active = "false";
        }
      });
  }

  return (
    <div className="navigation" id="nav">
      <div className="navigation__container">
        <div className="navigation__title-container">
          <Link to="/" className="navigation__title-container__title">
            Legends Rise TTRPG
          </Link>
        </div>
        <div className="navigation__links" data-is-active={isMobileNavOpen}>
          <div
            className="navigation__links-container"
            data-type="5E"
            onClick={toggleDropdown}
          >
            <div className="navigation__links-container__nav" data-type="5E">
              <div className="navigation__links-container__link" data-type="5E">
                Hero Rules
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="5E"
                data-active="false"
              ></button>
            </div>
            <div
              className="navigation__links-container__dropdown"
              data-type="5E"
              data-active="false"
            >
              <Link
                className="navigation__links-container__dropdown__item"
                to="/hero-creation-steps"
                onClick={toggleMobileNav}
              >
                Hero Creation Steps
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/ancestries"
                onClick={toggleMobileNav}
              >
                Ancestries
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/background-and-knacks"
                onClick={toggleMobileNav}
              >
                Background & Knacks
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/classes"
                onClick={toggleMobileNav}
              >
                Classes
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/equipment"
                onClick={toggleMobileNav}
              >
                Equipment
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/fighting-styles"
                onClick={toggleMobileNav}
              >
                Fighting Styles
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/heroic-archetypes"
                onClick={toggleMobileNav}
              >
                Heroic Archetypes
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/legendary-archetypes"
                onClick={toggleMobileNav}
              >
                Legendary Archetypes
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/spells"
                onClick={toggleMobileNav}
              >
                Spells
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/theme-talents"
                onClick={toggleMobileNav}
              >
                Theme Talents
              </Link>
            </div>
          </div>

          <div
            className="navigation__links-container"
            data-type="2E"
            onClick={toggleDropdown}
          >
            <div className="navigation__links-container__nav" data-type="2E">
              <div className="navigation__links-container__link" data-type="2E">
                Game Rules
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="2E"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-type="2E"
              data-active="false"
            >
              {/* <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-ancestries"
                onClick={toggleMobileNav}
              >
                Ancestries
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-archetypes"
                onClick={toggleMobileNav}
              >
                Archetypes
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-classes"
                onClick={toggleMobileNav}
              >
                Classes
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-magic-items"
                onClick={toggleMobileNav}
              >
                Magic Items
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-monsters"
                onClick={toggleMobileNav}
              >
                Monsters
              </Link> */}
            </div>
          </div>

          <div
            className="navigation__links-container"
            onClick={toggleDropdown}
            data-type="contact"
          >
            <div
              className="navigation__links-container__nav"
              data-type="contact"
            >
              <div
                className="navigation__links-container__link"
                data-type="contact"
              >
                Contact Me
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="contact"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-type="contact"
              data-active="false"
            >
              {/* <Link
                className="navigation__links-container__dropdown__item"
                to="/contact"
                onClick={toggleMobileNav}
              >
                Email
              </Link> */}
              <a
                className="navigation__links-container__dropdown__item"
                href="https://www.reddit.com/u/fanatic66/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>
              <a
                className="navigation__links-container__dropdown__item"
                href="https://twitter.com/FanaticalDm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div
          className="navigation__mobile-menu"
          onClick={toggleMobileNav}
          data-is-active={isMobileNavOpen}
        >
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
        </div>
      </div>
    </div>
  );

//   return (
//     <nav className="navigation">
//       <ul className="navigation__list">
//         <li className="navigation__item">
//           <a href="/" className="navigation__link">
//             Home
//           </a>
//         </li>
//         <li className="navigation__item">
//           <a href="/" className="navigation__link">
//             Hero Options
//           </a>
//         </li>
//         <li className="navigation__item">
//           <a href="/" className="navigation__link">
//             Rules
//           </a>
//         </li>
//         <li className="navigation__item">
//           <a href="/" className="navigation__link">
//             Game Mastery
//           </a>
//         </li>
//         <li className="navigation__item">
//           <a href="/contact" className="navigation__link">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
};

export default Navigation;