// import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function RulesHeader() {
  useEffect(() => {
    const path = window.location.pathname.split("/").pop();
    const capPath = path && path.charAt(0).toUpperCase() + path.slice(1);
    const tabs = document.querySelectorAll(
      ".class-tabs__tab",
    ) as NodeListOf<HTMLElement>;

    tabs.forEach((tab) => {
      const tabName = tab.children[0].innerHTML;
      if (tabName === capPath) {
        tab.dataset.selected = "true";
      } else if (tabName === "Gold &amp; Wealth" && capPath === "Gold") {
        tab.dataset.selected = "true";
      } else if (tabName === "General" && capPath === "Rules") {
        tab.dataset.selected = "true";
      } else {
        tab.dataset.selected = "false";
      }
    });
  }, []);

  return (
    <div className="class-tabs">
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/rules">General</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/rules/rolling">Rolling</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/rules/adventuring">Adventuring</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/rules/combat">Combat</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/rules/gold">Gold & Wealth</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/rules/magic">Magic</Link>
      </div>
      <div className="divider">|</div>

      <div className="class-tabs__tab" data-selected="false">
        <Link to="/rules/skills">Skills</Link>
      </div>
    </div>
  );
}

export default RulesHeader;
