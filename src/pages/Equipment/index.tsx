import "./index.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modifier from "../../components/Modifier";
import Monster from "../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";

function Equipment() {
  const [isMounts, setMounts] = useState(false);
  const [isArmor, setArmor] = useState(true);
  const [isWeapons, setWeapons] = useState(false);
  const [isOtherGoods, setOtherGoods] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname.split("/").pop();

    switch (path) {
      case "armor":
        handleArmor();
        break;
      case "weapons":
        handleWeapons();
        break;
      case "mounts":
        handleMounts();
        break;
      case "other-goods":
        handleOtherGoods();
        break;
      default:
        handleArmor(); // Default to armor if no match
        break;
    }
  }, [isMounts, isArmor, isWeapons, isOtherGoods]);

  function handleMounts() {
    navigate("/mounts");
    setMounts(true);
    setArmor(false);
    setWeapons(false);
    setOtherGoods(false);
  }
  function handleArmor() {
    console.log("inside handleArmor");
    setMounts(false);
    setArmor(true);
    setWeapons(false);
    setOtherGoods(false);
    navigate("/armor");
  }
  function handleWeapons() {
    navigate("/weapons");
    setMounts(false);
    setArmor(false);
    setWeapons(true);
    setOtherGoods(false);
  }
  function handleOtherGoods() {
    navigate("/other-goods");
    setMounts(false);
    setArmor(false);
    setWeapons(false);
    setOtherGoods(true);
  }

  return (
    <div className="equipment">
      <div className="equipment-content">
        <div className="equipment-content__tabs">
          <div className="equipment-content__tabs__tab" onClick={handleArmor}>
            <p>Armor</p>
          </div>
          <div className="equipment-content__tabs__divider">|</div>
          <div className="equipment-content__tabs__tab" onClick={handleWeapons}>
            <p>Weapons</p>
          </div>
          <div className="equipment-content__tabs__divider">|</div>
          <div
            className="equipment-content__tabs__tab"
            onClick={handleOtherGoods}
          >
            <p>Other Goods</p>
          </div>
          <div className="equipment-content__tabs__divider">|</div>
          <div className="equipment-content__tabs__tab" onClick={handleMounts}>
            <p>Mounts</p>
          </div>
        </div>

        <h1>Equipment</h1>
        <p>
          Your hero can purchase any number of equipment. Depending on your
          class, you start off with certain equipment. As you adventure, you
          earn gold, which you can use to purchase other equipment.
        </p>

        <p>
          How much your hero can carry isn’t a useful or fun question in Legends
          Rise. Instead, you can assume your hero carries basic adventuring gear
          and any special items such as weapons or magical items that
          fictionally makes sense. However, you can’t carry more than one
          non-shield armor on you.
        </p>

        {isArmor && (
          <div>
            <h2>Armor</h2>
            <p>
              Armor helps protect you from incoming physical harm. All armor
              unless magical or made out of special material is item tier 1 and
              costs 1 gold. All armor takes 1 minute to take on or off, except
              for shields. You can remove or wield a shield with the Interact
              maneuver.
            </p>
            <h3>Armor Training</h3>
            <p>
              Your class determines what armor you're trained in. If you aren’t
              trained in armor while wearing armor, then you are dazed and
              dazed.
            </p>
            <h3>Armor Types</h3>
            <p>
              There are three types of armor. Each armor grants certain benefits
              while worn.
            </p>
            <h4>Light Armor</h4>
            <p>
              <i>
                The least restrictive of armor, light armor is typically made of
                leather or strategic placings of plate or chainmail to only
                protect vital areas.
              </i>
            </p>
            <p>Light armor grants +2 to Evasion.</p>
            <h4>Heavy Armor</h4>
            <p>
              <i>
                Heavy armor is sturdier than light armor, offering the best
                protection. Heavy armor is typically created from plates of
                metal, chainmail, or other dense material.
              </i>
            </p>
            <p>
              Heavy armor grants +2 to Might and resistance to physical damage
              equal to your tier.
            </p>
            <h4>Shields</h4>
            <p>
              <i>
                Shields are typically affixed to your arm to help protect you
                against incoming harm.
              </i>
            </p>
            <p>
              Shields grant +1 to Evasion and can be used as a melee weapon,
              dealing 2 physical damage.
            </p>
          </div>
        )}
        {isWeapons && (
          <div>
            <h2>Weapons</h2>
            <p>
              Most adventurers have a weapon of some kind, even spellcasters, in
              case their spells fail them. All constructed weapons unless
              magical or made out of special material are item tier 1 and cost 1
              gold.{" "}
            </p>
            <h3>Weapon Training</h3>
            <p>
              Your class determines what weapons you're trained in. If you
              aren’t trained in a weapon, then you don’t add your proficiency
              bonus to Strike with the weapon. Everyone is trained in natural
              melee weapons.
            </p>
            <h3>Weapon Creativity</h3>
            <p>
              There are no strict lists of predefined weapons in Legends Rise.
              Instead weapons are divided by <b>type</b> and <b>group</b>. Your
              weapon’s type determines basic statistics of your weapon such as
              damage or at what range you can hit someone. Your weapon’s group
              describes what kind of weapon it is like an axe or bow.
            </p>
            <p>
              As a player, flavor your hero's weapons however you want by using
              the weapon types and groups as guidelines. For example, a standard
              melee blade could be a curved scimitar or a longsword.
            </p>
            <h4>Weapon Types</h4>
            <p>
              Each weapon has a weapon type, which specifies more about the
              weapon. There are five types of weapons divided into two
              categories.
            </p>
            <ul>
              <li>
                <span>
                  <b>Melee:</b> Weapons useful at close range, and can only
                  target engaged creatures.
                </span>
              </li>
              <li>
                <span>
                  <b>Ranged:</b> Weapons useful at far ranges, and can target
                  creatures within a number of zones. Creatures take{" "}
                  <Modifier type="mf" count="1" /> to Strike an engaged target
                  with a short or long ranged weapon.
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
                  Strike at a target within the listed range. If you Strike
                  beyond this range, you take <Modifier type="mf" count="1" />{" "}
                  for each additional zone up to double the listed range.
                </span>
              </li>
              <li>
                <span>
                  <b>Hands:</b> How many hands you need to wield this weapon.
                </span>
              </li>
              <li>
                <span>
                  <b>Examples:</b> Weapon examples for that weapon type, but
                  feel free to come up with your own!
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

            <h4>Weapon Groups</h4>
            <p>
              Besides a type, each weapon belongs to a certain weapon group.
              Each weapon group has a <b>critical effect</b> that can occur when
              you get a critical success on a Strike with that weapon. For
              natural melee weapons, they are usually only the unarmed weapon
              group.
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
                  <td>
                    target takes 1{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#ongoing-damage"
                    >
                      ongoing
                    </Link>{" "}
                    physical damage per your tier
                  </td>
                </tr>
                <tr>
                  <td>Bows</td>
                  <td>Crossbow, longbow, shortbow</td>
                  <td>target is dazed (next turn ends)</td>
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
                    (next turn ends)
                  </td>
                </tr>
                <tr>
                  <td>Firearms</td>
                  <td>Blunderbuss, Musket, Pistol</td>
                  <td>target is vulnerable (next turn ends)</td>
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
                  <td>target is hindered (next turn ends)</td>
                </tr>
                <tr>
                  <td>Unarmed</td>
                  <td>Claw, Foot, Fist</td>
                  <td>target is dazed (next turn ends)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {isOtherGoods && (
          <div>
            <h2>Other Goods</h2>
            <p>
              Besides armor and weapons, your heroes can purchase other items
              and services. Most goods cost a number of gold, usually one. For
              minor goods such as a candle, rope, or getting a mug all cost less
              than 1 gold, and it can be assumed you have enough coins to
              purchase them without spending gold. All other goods unless
              magical or made out of special material are item tier 1.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Gold</th>
                  <th>Item Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Magic Implement</td>
                  <td>
                    An item to channel magic such as a tome, staff, wand, or
                    holy symbol
                  </td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Magic Implement</td>
                  <td>
                    An item to channel magic such as a tome, staff, wand, or
                    holy symbol
                  </td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Fancy Lodgings</td>
                  <td>Room and board at an extravagant inn</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Spellcasting</td>
                  <td>
                    Hiring someone to cast a spell. Cost is the listed amount
                    plus any other costs needed for the spell.
                  </td>
                  <td>
                    1 for tier 1 spell, 3 for tier 2 spell, 6 for tier 3 spell
                  </td>
                  <td>Equals the spell tier</td>
                </tr>
                <tr>
                  <td>Transportation (Mundane)</td>
                  <td>
                    Booking passage on a caravan, boat, or other form of
                    transportation. Price is per day.
                  </td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Transportation (Magical)</td>
                  <td>
                    Booking passage on an airship or magically enhanced mode of
                    transportation. Price is per day.
                  </td>
                  <td>3</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {isMounts && (
          <div>
            <h2>Mounts</h2>
            <p>
              Heroes can purchase mounts to ride in and out of combat, with some
              mounts being more fantastical.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Gold</th>
                  <th>Item Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Barding</td>
                  <td>Special</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Tier 1 Mount</td>
                  <td>2</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Tier 2 Mount</td>
                  <td>6</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Tier 3 Mount</td>
                  <td>12</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
            <h3>Mount Barding</h3>
            <p>
              Armor can help save a mount’s life. Worn barding increases the
              mount’s Evasion by +1. Barding costs more depending on the size of
              the mount: 1 for medium or smaller, 2 for large, 4 for huge, and 8
              for colossal.
            </p>
            <h3>Mount Rules</h3>
            <p>
              Mounts can be anything such as giant lizards, elemental drakes,
              horses, sharks, giant eagles, and more! Mounts all have the same
              statistics depending on their tier, and get a number of mount
              traits depending on their tier. Use the sample mount stat block
              and see the list of mount traits to customize your mount.{" "}
            </p>
            <Monster
              name="Mount"
              type="Large Creature (depends on mount)"
              hp="5 per mount’s tier (T)"
              evn="10 + double T"
              mgt="12 + double T"
              res="8 + double T"
              pb="double T"
              summons
              actions={[
                {
                  basic: true,
                  name: "Slam",
                  keywords: "melee, weapon",
                  target: "1 engaged creature",
                  defense: "Guard",
                  damage: "2 physical damage per T",
                },
              ]}
            />
            <h4>Mount Traits</h4>
            <p>Mounts get a number of mount traits equal to their tier.</p>
            <ul>
              <li>
                <span>
                  Resistance to a damage type, with physical counting as two
                  mount traits.
                </span>
              </li>
              <li>
                <span>
                  Fly speed equal to the land speed (limited to tier 2 or higher
                  mounts)
                </span>
              </li>
              <li>
                <span>Climb speed equal to the land speed</span>
              </li>
              <li>
                <span>
                  Burrow speed equal to the land speed (limited tier 2 or higher
                  mounts)
                </span>
              </li>
              <li>
                <span>All speeds increase by +1</span>
              </li>
              <li>
                <span>
                  Swim speed equal to the land speed and can breath underwater
                </span>
              </li>
              <li>
                <span>Size is huge</span>
              </li>
              <li>
                <span>
                  The mount has a ranged ability that can target a creature
                  within 3 zones with an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against Evasion that deals double tier damage of a damage type
                  appropriate to the mount. A drake might spit fire while a
                  celestial hound might shoot holy energy.{" "}
                </span>
              </li>
              <li>
                <span>
                  Mount has <ToolTip preset="night" />
                </span>
              </li>
              <li>
                <span>
                  Choose an effect to happen when your mount gets a success on
                  their attack roll for slam: target falls prone, target shoved
                  within their zone, target is seized (overcome ends).
                </span>
              </li>
              <li>
                <span>
                  You and your mount can telepathically speak to one another
                </span>
              </li>
            </ul>
            <h4>Mount Examples</h4>
            <p>Here are some examples of mounts:</p>
            <Monster
              name="Warhorse (Tier 1 Mount)"
              type="Large Animal"
              hp="5"
              evn="12"
              mgt="14"
              res="10"
              pb="2"
              actions={[
                {
                  basic: true,
                  name: "Slam",
                  keywords: "melee, weapon",
                  target: "1 engaged creature",
                  defense: "Guard",
                  damage: "2 physical damage",
                  success: "prone",
                },
              ]}
            />
            <div style={{ paddingTop: "25px" }}></div>

            <Monster
              name="Giant Eagle (Tier 2 Mount)"
              type="Large Animal"
              hp="10"
              evn="14"
              mgt="16"
              res="12"
              pb="4"
              speeds="fly 1"
              actions={[
                {
                  basic: true,
                  name: "Slam",
                  keywords: "melee, weapon",
                  target: "1 engaged creature",
                  defense: "Guard",
                  damage: "2 physical damage",
                  success: "seized (overcome ends)",
                },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Equipment;
