import "./index.scss";
import EquipmentHeader from "../../components/EquipmentHeader";

function Armor() {
  return (
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Armor</h1>
        <p>
          Armor helps defend you from incoming harm. All armor unless magical or
          made out of special material is item tier 1 and costs 1 gold. All
          armor takes 1 minute to take on or off, except for shields. You can
          remove or equip a shield with the interact maneuver.
        </p>

        <h2 className="header">Armor Types</h2>
        <p>
          There are four types of armor. Each armor grants certain benefits
          while worn.
        </p>

        <table>
          <thead>
            <tr>
              <th>Armor Type</th>
              <th>Defense Bonus</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mystic Robes</td>
              <td>Spirit +2</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Light Armor</td>
              <td>Guard +1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Heavy Armor</td>
              <td>Guard +2</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Shield</td>
              <td>Guard +1</td>
              <td>
                Can be used as a standard melee weapon, dealing 2 physical
                damage
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="header">Armor Training</h3>
        <p>
          Your class determines what armor you're trained in. If you aren’t
          trained in the armor that you're wearing, then you don't gain the
          armor's defense bonus.
        </p>

        <h4 className="header">Mystic Robes</h4>
        <p>
          Mystic robes don't protect from physical threats, but instead ward
          from mystical threats. Typically these are robes or garments covered
          with arcane sigils, blessed by the gods, or made out of eldritch
          material.
        </p>

        <h4 className="header">Light Armor</h4>
        <p>
          The least restrictive of armor, light armor is typically made of
          leather or strategic placings of plate or chainmail to only protect
          vital areas.
        </p>

        <h4 className="header">Heavy Armor</h4>
        <p>
          Heavy armor is sturdier than light armor, offering the best
          protection. Heavy armor is typically created from plates of metal,
          chainmail, or other dense material.
        </p>

        <h4 className="header">Shields</h4>
        <p>
          Shields are typically affixed to your arm to help protect you against
          incoming harm.
        </p>
      </div>
    </div>
  );
}

export default Armor;
