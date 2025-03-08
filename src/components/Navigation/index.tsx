import "./index.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import { BREAKPOINTS, getBreakpoint } from "../../utils/getBreakpoint";
import ThemeToggle from "../ThemeToggle";

const Navigation = () => {
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
          if (nav) nav.style.top = "-66px";
        }
      }

      setPrevScrollPos(currentScrollPos);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const dropdowns = document.querySelectorAll(
      ".navigation__links-container__dropdown",
    );
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", handleMouseEnter);
      dropdown.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", handleMouseEnter);
        dropdown.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const adjustContentMarginTop = () => {
    const navBar = document.getElementById("nav");
    const content = document.getElementById("page-content");

    if (navBar && content) {
      content.style.marginTop = `${navBar.offsetHeight}px`;
    }
  };

  useEffect(() => {
    adjustContentMarginTop();

    window.addEventListener("resize", adjustContentMarginTop);
    return () => {
      window.removeEventListener("resize", adjustContentMarginTop);
    };
  }, []);

  function handleMouseEnter(event: any) {
    const dropdownType = event.target.dataset.type;
    document
      .querySelectorAll(
        `.navigation__links-container__dropdown[data-type="${dropdownType}"]`,
      )
      .forEach((element: any) => {
        element.dataset.active = "true";
      });
    document
      .querySelectorAll(
        `.navigation__links-container__dropdown-arrow[data-type="${dropdownType}"]`,
      )
      .forEach((element: any) => {
        element.dataset.active = "true";
      });
  }

  function handleMouseLeave(event: any) {
    const dropdownType = event.target.dataset.type;
    document
      .querySelectorAll(
        `.navigation__links-container__dropdown[data-type="${dropdownType}"]`,
      )
      .forEach((element: any) => {
        element.dataset.active = "false";
      });
    document
      .querySelectorAll(
        `.navigation__links-container__dropdown-arrow[data-type="${dropdownType}"]`,
      )
      .forEach((element: any) => {
        element.dataset.active = "false";
      });
  }

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
          <Link
            to="/"
            className="navigation__title-container__title"
            onClick={() => setIsMobileNavOpen(false)}
          >
            Legends Rise
          </Link>
        </div>
        <div className="navigation__links" data-is-active={isMobileNavOpen}>
          <div
            className="navigation__links-container"
            data-type="hero-creation"
            onClick={toggleDropdown}
          >
            <div
              className="navigation__links-container__nav"
              data-type="hero-creation"
            >
              <div
                className="navigation__links-container__link"
                data-type="hero-creation"
              >
                Hero Creation
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-active="false"
                data-type="hero-creation"
              ></button>
            </div>
            <div
              className="navigation__links-container__dropdown"
              data-active="false"
              data-type="hero-creation"
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
                to="/classes"
                onClick={toggleMobileNav}
              >
                Classes
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
                to="/fighting-styles"
                onClick={toggleMobileNav}
              >
                Fighting Styles
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
            onClick={toggleDropdown}
            data-type="equipment"
          >
            <div
              className="navigation__links-container__nav"
              data-type="equipment"
            >
              <div
                className="navigation__links-container__link"
                data-type="equipment"
              >
                Equipment
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="equipment"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-active="false"
              data-type="equipment"
            >
              <Link
                className="navigation__links-container__dropdown__item"
                to="/armor"
                onClick={toggleMobileNav}
              >
                Armor
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/consumables"
                onClick={toggleMobileNav}
              >
                Consumables
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/mounts"
                onClick={toggleMobileNav}
              >
                Mounts
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/other-goods"
                onClick={toggleMobileNav}
              >
                Other Goods
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/relics"
                onClick={toggleMobileNav}
              >
                Relics
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/weapons"
                onClick={toggleMobileNav}
              >
                Weapons
              </Link>
            </div>
          </div>

          <div
            className="navigation__links-container"
            onClick={toggleDropdown}
            data-type="magic"
          >
            <div className="navigation__links-container__nav" data-type="magic">
              <div
                className="navigation__links-container__link"
                data-type="magic"
              >
                Spells
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="magic"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-active="false"
              data-type="magic"
            >
              <Link
                className="navigation__links-container__dropdown__item"
                to="/battle-spells"
                onClick={toggleMobileNav}
              >
                Battle Spells
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/ritual-spells"
                onClick={toggleMobileNav}
              >
                Ritual Spells
              </Link>
            </div>
          </div>

          <div
            className="navigation__links-container"
            onClick={toggleDropdown}
            data-type="rules"
          >
            <div className="navigation__links-container__nav" data-type="rules">
              <div
                className="navigation__links-container__link"
                data-type="rules"
              >
                Rules
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="rules"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-active="false"
              data-type="rules"
            >
              <Link
                className="navigation__links-container__dropdown__item"
                to="/combat-abilities"
                onClick={toggleMobileNav}
              >
                Basic Combat Abilities
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/conditions"
                onClick={toggleMobileNav}
              >
                Conditions
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/abilities-and-keywords"
                onClick={toggleMobileNav}
              >
                Abilities & Keywords
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/rules"
                onClick={toggleMobileNav}
              >
                All Rules
              </Link>
            </div>
          </div>

          <div
            className="navigation__links-container"
            onClick={toggleDropdown}
            data-type="gm"
          >
            <div className="navigation__links-container__nav" data-type="gm">
              <div className="navigation__links-container__link" data-type="gm">
                Running the Game
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="gm"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-active="false"
              data-type="gm"
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

          <div className="navigation__links-container">
            <div
              className="navigation__links-container__nav"
              data-type="contact"
            >
              <Link
                className="navigation__links-container__link"
                onClick={() => setIsMobileNavOpen(false)}
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* <div className="navigation__links-container">
            <div
              className="navigation__links-container__nav"
              data-type="contact"
            >
              <ThemeToggle />
            </div>
          </div> */}
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
