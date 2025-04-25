import "./index.scss";
import EquipmentHeader from "../../components/EquipmentHeader";
import { Link } from "react-router-dom";

function Armor() {
  return (
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Armor</h1>
        <p>
          Armor helps defend you from incoming physical harm. All armor unless
          magical or made out of special material is item tier 1 and costs 1
          gold. All armor takes 1 minute to take on or off, except for shields.
          You can remove or wield a shield with the Interact maneuver.
        </p>
        <h2>Armor Training</h2>
        <p>
          Your class determines what armor you're trained in. If you aren’t
          trained in armor while wearing armor, then your speed is halved and
          you're{" "}
          <Link className="internal-link" to="/conditions#dazed">
            dazed
          </Link>
          .
        </p>
        <h2>Armor Types</h2>
        <p>
          There are three types of armor. Each armor grants certain benefits
          while worn.
        </p>
        <h3 className="header">Light Armor</h3>
        <p>
          <i>
            The least restrictive of armor, light armor is typically made of
            leather or strategic placings of plate or chainmail to only protect
            vital areas.
          </i>
        </p>
        <p>Light armor grants +2 to Evasion.</p>
        <h3 className="header">Heavy Armor</h3>
        <p>
          <i>
            Heavy armor is sturdier than light armor, offering the best
            protection. Heavy armor is typically created from plates of metal,
            chainmail, or other dense material.
          </i>
        </p>
        <p>
          Heavy armor grants +2 to Might and{" "}
          <Link
            className="internal-link"
            to="/rules/combat#resistances-and-weaknesses"
          >
            resistance
          </Link>{" "}
          to physical damage equal to your tier.
        </p>
        <h3 className="header">Shields</h3>
        <p>
          <i>
            Shields are typically affixed to your arm to help protect you
            against incoming harm.
          </i>
        </p>
        <p>
          Shields grant +1 to Evasion and can be used as a melee weapon, dealing
          2 physical damage.
        </p>
      </div>
    </div>
  );
}

export default Armor;
