import "./index.scss";
import Modifier from "../../components/Modifier";
import EquipmentHeader from "../../components/EquipmentHeader";
import { Link } from "react-router-dom";

function Weapons() {
  return (
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Weapons</h1>
        <p>
          Most adventurers have a weapon of some kind, even spellcasters, in
          case their spells fail them. All constructed weapons unless magical or
          made out of special material are item tier 1 and cost 1 gold.{" "}
        </p>
        <h2>Weapon Training</h2>
        <p>
          Your class determines what weapons you're trained in. If you aren’t
          trained in a weapon, then you don’t add your proficiency bonus to
          Strike with the weapon. Everyone is trained in natural melee weapons.
        </p>
        <h2>Weapon Creativity</h2>
        <p>
          There are no strict lists of predefined weapons in Legends Rise.
          Instead weapons are divided by <b>type</b> and <b>group</b>. Your
          weapon’s type determines basic statistics of your weapon such as
          damage or at what range you can hit someone. Your weapon’s group
          describes what kind of weapon it is like an axe or bow.
        </p>
        <p>
          As a player, flavor your hero's weapons however you want by using the
          weapon types and groups as guidelines. For example, a standard melee
          blade could be a curved scimitar or a longsword.
        </p>
        <h3 className="header">Weapon Types</h3>
        <p>
          Each weapon has a weapon type, which specifies more about the weapon.
          There are five types of weapons divided into two categories.
        </p>
        <ul>
          <li>
            <span>
              <b>Melee:</b> Weapons useful at close range, and can only target
              engaged creatures.
            </span>
          </li>
          <li>
            <span>
              <b>Ranged:</b> Weapons useful at far ranges, and can target
              creatures within a number of zones. Creatures take{" "}
              <Modifier type="mf" count="1" /> to Strike an engaged target with
              a short or long ranged weapon.
            </span>
          </li>
        </ul>

        <p>For each weapon type, please consult the weapon types table.</p>
        <ul>
          <li>
            <span>
              <b>Damage:</b> How much physical damage the weapon does.
            </span>
          </li>
          <li>
            <span>
              <b>Range:</b> Melee weapons can only target engaged creatures.
              Ranged weapons list a range. For these weapons, you can make a
              Strike at a target within the listed range. If you Strike beyond
              this range, you take <Modifier type="mf" count="1" /> for each
              additional zone up to double the listed range.
            </span>
          </li>
          <li>
            <span>
              <b>Hands:</b> How many hands you need to wield this weapon.
            </span>
          </li>
          <li>
            <span>
              <b>Examples:</b> Weapon examples for that weapon type, but feel
              free to come up with your own!
            </span>
          </li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>Weapon Type</th>
              <th>Damage</th>
              <th>Range</th>
              <th>Hands</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Natural Melee</td>
              <td>2</td>
              <td>Engaged</td>
              <td>1</td>
              <td>Claw, Kick, Punch, Headbutt</td>
            </tr>
            <tr>
              <td>Standard Melee</td>
              <td>3</td>
              <td>Engaged</td>
              <td>1</td>
              <td>Battleaxe, Hammer, Flail, Scimitar, Staff, Sword</td>
            </tr>
            <tr>
              <td>Heavy Melee</td>
              <td>4</td>
              <td>Engaged</td>
              <td>2</td>
              <td>Greatsword, Spear, Maul, Greataxe</td>
            </tr>
            <tr>
              <td>Thrown Ranged</td>
              <td>2</td>
              <td>Engaged or 1 zone</td>
              <td>1</td>
              <td>Dagger, Handaxe, Javelin, Shuriken</td>
            </tr>
            <tr>
              <td>Short Ranged</td>
              <td>2</td>
              <td>2 zones</td>
              <td>1</td>
              <td>Hand crossbow, Pistol, Sling</td>
            </tr>
            <tr>
              <td>Long Ranged</td>
              <td>3</td>
              <td>4 zones</td>
              <td>2</td>
              <td>Bow, Crossbow, Gun</td>
            </tr>
          </tbody>
        </table>

        <h3 className="header" style={{ marginTop: "25px" }}>
          Weapon Groups
        </h3>
        <p>
          Besides a type, each weapon belongs to a certain weapon group. Each
          weapon group has a <b>critical effect</b> that can occur when you get
          a critical success on a Strike with that weapon. For natural melee
          weapons, they are usually only the unarmed weapon group.
        </p>
        <table>
          <thead>
            <tr>
              <th>Weapon Group</th>
              <th>Examples</th>
              <th>Critical Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Axes</td>
              <td>Throwing axes, greataxe, handaxe</td>
              <td>target takes 1 ongoing physical damage per your tier</td>
            </tr>
            <tr>
              <td>Bows</td>
              <td>Crossbow, longbow, shortbow</td>
              <td>target is slowed (turn ends)</td>
            </tr>
            <tr>
              <td>Blades</td>
              <td>Daggers, Greatsword, Scimitar</td>
              <td>+1 physical damage per your tier</td>
            </tr>
            <tr>
              <td>Clubs</td>
              <td>Club, Morningstar, Staff</td>
              <td>
                target is{" "}
                <Link className="internal-link" to="/conditions#confused">
                  confused
                </Link>{" "}
                (turn ends)
              </td>
            </tr>
            <tr>
              <td>Firearms</td>
              <td>Blunderbuss, Musket, Pistol</td>
              <td>
                target is{" "}
                <Link className="internal-link" to="/conditions#exposed">
                  exposed
                </Link>{" "}
                (turn ends)
              </td>
            </tr>
            <tr>
              <td>Flails</td>
              <td>Flail, heavy flail, whip</td>
              <td>target falls prone</td>
            </tr>
            <tr>
              <td>Hammers</td>
              <td>Hammer, Maul, Throwing Hammer</td>
              <td>target is pushed within their zone</td>
            </tr>
            <tr>
              <td>Polearms</td>
              <td>Javelin, Spear, Staff</td>
              <td>target is hindered (turn ends)</td>
            </tr>
            <tr>
              <td>Unarmed</td>
              <td>Claw, Foot, Fist</td>
              <td>
                target is{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (turn ends)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Weapons;
