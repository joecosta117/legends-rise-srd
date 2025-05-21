import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ClassHeader = () => {
  useEffect(() => {
    const path = window.location.pathname.split("/").pop();
    const capPath = path && path.charAt(0).toUpperCase() + path.slice(1);
    const tabs = document.querySelectorAll(
      ".class-tabs__tab",
    ) as NodeListOf<HTMLElement>;

    tabs.forEach((tab) => {
      if (tab.children[0].innerHTML === capPath) {
        tab.dataset.selected = "true";
      } else if (
        tab.children[0].innerHTML === "Dual Class" &&
        capPath === "Dual-class"
      ) {
        tab.dataset.selected = "true";
      } else {
        tab.dataset.selected = "false";
      }
    });
  }, []);

  return (
    <div className="class-tabs">
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/arcanist">Arcanist</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/bard">Bard</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/cleric">Cleric</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/commander">Commander</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/druid">Druid</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/magesmith">Magesmith</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/monsterheart">Monsterheart</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/occultist">Occultist</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/paladin">Paladin</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/ranger">Ranger</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/rogue">Rogue</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/summoner">Summoner</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/swordmage">Swordmage</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/warrior">Warrior</Link>
      </div>
      <div className="divider">|</div>
      <div className="class-tabs__tab" data-selected="false">
        <Link to="/classes/dual-class">Dual Class</Link>
      </div>
    </div>
  );
};

export default ClassHeader;
