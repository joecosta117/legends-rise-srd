import Modifier from "../../components/Modifier";
import "./index.scss";
import { Link } from "react-router-dom";
// import Accordion from "../../components/Accordion";
// import ToolTip from "../../components/ToolTip";

function BuildingMonsters() {
  return (
    <div className="building-threats">
      <div className="building-threats-content">
        <h1>Building Threats</h1>
        <p>
          Although Legends Rise has plenty of{" "}
          <Link className="internal-link" to="/monsters">
            monsters
          </Link>{" "}
          and{" "}
          <Link className="internal-link" to="/hazards">
            hazards
          </Link>{" "}
          to choose from for building combat encounters, you can also create
          your own too or modify existing threats! One of the goals of Legends
          Rise is to make homebrewing your own content really simple. There are
          even guidance on converting monsters from other popular games.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#monsters">
              <span>
                <b>Building Monsters</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#hazards">
              <span>
                <b>Building Hazards</b>
              </span>
            </a>
          </li>
          {/* <li>
            <a href="#converting">
              <span>
                <b>Converting Monsters</b>
              </span>
            </a>
          </li> */}
        </ul>
        <h2 id="monsters">Building Monsters</h2>
        <p>
          Althought Legends Rise has nearly 250{" "}
          <Link className="internal-link" to="/monsters">
            monsters
          </Link>
          , sometimes there is a monster you want to throw at your players that
          doesn't have a statblock. For this problem, there are two solutions:
        </p>
        <ul>
          <li>
            <span>
              <b>Reflavor: </b> The simplest solution is take an existing
              monster and simply change the name and lore of the monster to suit
              your needs. A flame drake can be transformed into a large fire bat
              by just changing the name and maybe the names of abilities. You
              can also do some simple modifications that fit your monster
              concept. For example, perhaps you want a giant polar bear so you
              take the giant bear statblock and give it cold resistance.
            </span>
          </li>
          <li>
            <span>
              <b>Custom Monster:</b> Reflavoring and small modifications can
              only take you so far, and sometimes a monster concept calls for a
              custom statblock. This is the more complex solution, but easily
              doable. Read the following guidance to make your own monsters!
            </span>
          </li>
        </ul>
        <h3 className="header">Monster Name and Type</h3>
        <p>
          The first step of creating a new monster is coming up with a concept.
          Maybe your new monster is based off a monster from folklore, or is a
          monster from another game you played. Create a name for your monster
          and determine its creature type from aberration, angel, beast,
          construct, dragon, elemental, faerie, fiend, giant, monstrosity, ooze,
          plant, or undead. Some monsters might have two creature types if
          thematically appropriate such as the infernal dragon being a dragon
          and fiend.
        </p>

        <h3 className="header">Determine the Monster Tier</h3>
        <p>
          The first step is determining what tier is your new monster. Usually
          the tier matches the same tier as your heroes. A monster's tier
          determines their base hit points, defenses, proficiency bonus, and
          average damage.
        </p>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>HP</th>
              <th>Defenses</th>
              <th>PB</th>
              <th>Damage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>10</td>
              <td>11, 13, 15</td>
              <td>+2</td>
              <td>melee 3/6, range 2/5, multi 1/3</td>
            </tr>
            <tr>
              <td>2</td>
              <td>26</td>
              <td>13, 15, 17</td>
              <td>+4</td>
              <td>melee 6/12, range 4/10, multi 2/6</td>
            </tr>
            <tr>
              <td>3</td>
              <td>48</td>
              <td>15, 17, 19</td>
              <td>+6</td>
              <td>melee 9/18, range 6/15, multi 3/9</td>
            </tr>
          </tbody>
        </table>
        <h4 className="header" style={{ marginTop: "20px" }}>
          Defenses
        </h4>
        <p>
          Most monsters typically have a weak defense, average defense, and
          strong defense depending on their thematics. In general, most monsters
          have Evasion as their average defense, especially melee focused
          monsters. For example, a lumbering zombie giant's strongest defense is
          Might, and although they're slow, the mindless nature of the zombie
          makes Resolve their lowest defense and Evasion as their average
          defense.
        </p>
        <h4 className="header">Damage</h4>
        <p>Monsters tend to have three types of attacks that deal damage:</p>
        <ul>
          <li>
            <span>
              <b>Melee: </b> Melee attacks deal the most damage. For recharge
              (encounter) abilities, use the higher number.
            </span>
          </li>
          <li>
            <span>
              <b>Range: </b> Range attacks deal slightly less damage. For
              recharge (encounter) abilities, use the higher number.
            </span>
          </li>
          <li>
            <span>
              <b>Multi: </b> Multi attacks target multiple heroes, such as a
              dragon's breath weapon or a lich's necrotic blast. For recharge
              (encounter) abilities, use the higher number.
            </span>
          </li>
        </ul>
        <p>
          The listed numbers assume the monster is using an action ability. For
          maneuver or reaction abilities that deal damage, you can halve the
          listed numbers. For example, if a tier 1 demon gets a reaction that
          hurts an engaged hero when attacked, then halve the melee damage. If
          this is an at-will ability, then the demon's reaction ability deals 1
          damage.
        </p>
        <p>
          For damage from dangerous zones or ongoing zones, use the monster's
          tier as the damage. For example, if a tier 2 frost giant can create a
          field of ice, then their dangerous zone deals 2 cold damage.
        </p>
        <h3 className="header">Determine the Threat Level</h3>
        <p>
          Now that you determined your monster's tier and their base statistics,
          determine your monster's threat level. The monster's threat level
          affects their hit points, damage, and other factors.
        </p>
        <table>
          <thead>
            <tr>
              <th>Threat</th>
              <th>HP</th>
              <th>Damage</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Minion</td>
              <td>Change to their proficiency bonus</td>
              <td>Change to their tier</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Minior</td>
              <td>x1/2</td>
              <td>Subtract their tier</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Standard</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Major</td>
              <td>x2</td>
              <td>-</td>
              <td>Two turns per round</td>
            </tr>
            <tr>
              <td>Boss</td>
              <td>x Number of heroes</td>
              <td>-</td>
              <td>One turn per hero, boss resilience, and boss actions</td>
            </tr>
          </tbody>
        </table>
        <h4 className="header">Minions</h4>
        <p>
          Minions generally don't have recharge abilities or multi-target
          abilities so they are simple to use, and they deal the same damage for
          melee and range abilities.
        </p>
        <h4 className="header">Boss Resilience</h4>
        <p>
          Unlike normal monsters, bosses can shake off conditions and effects
          that would normally last longer. At the end of a boss monster's turn,
          they can take damage equal to their proficiency bonus to end one
          effect on them, such a spell effect, condition, or ongoing damage.
        </p>
        <h4 className="header">Boss Actions</h4>
        <p>
          Boss monsters can use special abilities called <b>boss actions</b>{" "}
          outside of their turns at the start of rounds 1, 3, and 5. Boss
          actions represent big cinematic events that shake the course of the
          combat. When designing your own boss actions, look through some of the
          existing boss monsters to get some ideas. Boss actions should be
          powerful and have the scope and damage of recharge abilities.
        </p>
        <ul>
          <li>
            <span>
              <b>Round 1: </b> The first boss action should set the tone of the
              encounter as the boss uses this ability before anyone takes a
              turn. This works great for summoning minions, unleashing a giant
              explosion at the heroes, or other dramatic abilities that sets the
              heroes on their toes.
            </span>
          </li>
          <li>
            <span>
              <b>Round 3: </b> The second boss action should help change the
              pace of the combat because at this point the heroes have been
              fighting for two rounds and the boss monster might already be
              shaken or near shaken. This is a great time for the boss to summon
              minions for reinforcements, alter the battlefield with zone types,
              or reposition with an explosive effect.
            </span>
          </li>
          <li>
            <span>
              <b>Round 5: </b> The third boss action doesn't always happen as
              heroes sometimes defeat the boss before the fifth round. However,
              if round 5 does happen, then the boss is likely near defeat and
              needs a big finisher move to raise the stakes. This could be an
              ability to deal massive damage to all heroes, create an aura of
              unavoidable damage, goes beserk, or more.
            </span>
          </li>
        </ul>
        <h3 className="header">Determine the Role</h3>
        <p>
          Now that you determined your monster's tier and threat level, decide
          your monster's role. The monster's role affects their statistics.
        </p>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>HP</th>
              <th>Damage</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Artillery</td>
              <td>Minus PB</td>
              <td>Add tier to range and range-multi damage</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Bruiser</td>
              <td>Add PB</td>
              <td>Add tier to melee damage</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Disabler</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Skirmisher</td>
              <td>_</td>
              <td>Add tier to melee and range damage</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td>Add PB</td>
              <td>-</td>
              <td>Physical resistance (tier)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Besides monster statistics, here are some general guidelines for the
          different roles:
        </p>
        <ul>
          <li>
            <span>
              <b>Artillery: </b> Typically have one melee ability in case the
              heroes get close, but otherwise all of their abilities are range
              focused.
            </span>
          </li>
          <li>
            <span>
              <b>Bruiser:</b> Bruisers are meant to be simple. They dive into
              melee with heroes to deal high damage and soak up hits with their
              high hit points.
            </span>
          </li>
          <li>
            <span>
              <b>Disabler: </b> Every ability the disabler uses should apply
              some sort of condition or crowd control. For example, if the
              disabler has an ice ray ability, in addition to damage, it should
              slow the hero on a successful attack roll.
            </span>
          </li>
          <li>
            <span>
              <b>Skirmisher: </b> Give these monsters either extra mobility like
              land speed 2 or mobility abilities like moving after attacking or
              going invisible as a maneuver.
            </span>
          </li>
          <li>
            <span>
              <b>Support: </b> Give these monsters traits or abilities to let
              them help their allies by healing them, giving temporary hit
              points, bonuses to rolls, or using reactions to strike.
            </span>
          </li>
          <li>
            <span>
              <b>Tank: </b> These monsters operate like bruisers but without the
              high damage. Instead give them attacks that debilitate foes like
              disablers such as taunting a hero, or abilities that protect their
              allies.
            </span>
          </li>
        </ul>
        <h3 className="header">Basic Attacks</h3>
        <p>
          Now that your new monster has their basic statistics done, it's time
          to give them some basic attacks. For each monster, that means a melee
          at-will action ability and possibly a range at-will action ability if
          thematically appropriate. Use the damage for melee and range
          abilities. Some monsters might not have a range ability like a zombie
          with no means of attacking at range.
        </p>
        <p>
          For example, you are creating a tier 1 monster that is a zombie giant.
          You give it a "slam" melee ability that deals 3 damage. You decide
          this monster is a bruiser too, so you add its tier to the melee
          damage, so now slam deals 4 damage. You decide the zombie giant can
          throw rocks, so you also give it a "rock throw" range ability.
          Consulting the table, you see the range ability should deal 2 damage.
          Bruisers don't get a damage bonus to range abilities, so rock throw
          only deals 2 damage.
        </p>
        <h4 className="header">Ranges</h4>
        <p>
          In general, range abilities usually can target a creature within 3
          zones away. There are some exceptions:
        </p>
        <ul>
          <li>
            <span>Support abilities usually target an ally within 1 zone.</span>
          </li>
          <li>
            <span>
              Reaction abilities usually have a shorter range of same zone or 1
              zone away.
            </span>
          </li>
          <li>
            <span>
              Range abilities that only impose a condition or affect a zone
              (making it a dangerous zone) have a shorter range of targeting a
              creature or zone within 2 zones.
            </span>
          </li>
        </ul>

        <h3 className="header">Extra Features</h3>
        <p>
          Each monster has extra features to make the monster unique. There are
          two types of features: <b>major</b> and <b>minor</b>. A monster can
          have as many minor features as you think is thematically appropriate,
          but only one major feature per the monster's tier. Major and boss
          threat enemies get an additional major feature, while minions get one
          less major feature.
        </p>
        <h4 className="header">Minor Features</h4>
        <p>
          Minor features can be anything that doens't affect the creature's
          damage, grants a significant combat boost, or debilitates the heroes.
          Here's a list of examples:
        </p>
        <ul>
          <li>
            <span>
              Different <b>speeds</b> like fly speed 1 or phasing
            </span>
          </li>
          <li>
            <span>
              Additional <b>vision</b> like night vision or blind vision
            </span>
          </li>
          <li>
            <span>
              <b>Damage resistances and weaknesses</b>. Damage weakness should
              always equal the monster's proficiency bonus. However, for damage
              resistances, if it's a minor resistance then it is equal to their
              tier, or proficiency bonus for a major resistance. For example, a
              being made of flame likely has a major resistance to fire damage,
              and weakness to cold damage. The only exception is resistance or
              weakness to physical damage. These are major features and should
              only ever equal the monster's tier.
            </span>
          </li>
          <li>
            <span>
              <b>Size</b> of the creature
            </span>
          </li>
          <li>
            <span>
              Flavorful abilities such as the lich's trait when it dies, it
              returns to its soul cage. This doesn't affect the lich's combat
              effectiviness, so it's a minor feature.
            </span>
          </li>
        </ul>
        <h4 className="header">Major Features</h4>
        <p>
          Major features are more impactful traits or abilities that boost a
          monster's combat effectiviness. These can include:
        </p>
        <ul>
          <li>
            <span>
              Gaining a recharge ability. If the recharge ability deals damage,
              consult the expected damage from the monster tier table. In
              general, avoid giving a monster more than one recharge ability as
              its get too hard to track.
            </span>
          </li>
          <li>
            <span>
              Expanding an existing ability, such as adding an effect on a
              successful attack roll, increasing a condition's duration, or
              making an ability that affects an area create a dangerous zone.
              For example, a tank monster could taunt a hero (turn ends) on a
              successful attack roll, or the tundra dragon's ice breath makes
              the affected zone a difficult zone for the scene.
            </span>
          </li>
          <li>
            <span>
              Resistance to physical damage equal to their tier. Unlike other
              damage resistances, physical damage is the most common, so it's
              rated as a major feature.
            </span>
          </li>
          <li>
            <span>
              Powerful traits such as an aura that deals fire damage to nearby
              foes or when shaken, the monster gains{" "}
              <Modifier type="f" count="1" /> to attack rolls.
            </span>
          </li>
        </ul>

        <h2 id="hazards">Building Hazards</h2>
        <p>
          If you can't find a hazard from the{" "}
          <Link className="internal-link" to="/hazards">
            official hazards
          </Link>
          , then feel free to follow the same process as creating monsters:
          reflavoring or custom hazards. Fortunately, building custom hazards is
          simpler and quickler than building a monster.
        </p>
        <h3 className="header">Determine the Hazard Tier</h3>
        <p>
          The first step is determining what tier is your new hazard. Usually
          the tier matches the same tier as your heroes. A hazard's tier
          determines their TN, proficiency bonus, and damage.
        </p>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>TN</th>
              <th>PB</th>
              <th>Consequence</th>
              <th>Damage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12</td>
              <td>+2</td>
              <td>4</td>
              <td>melee 5, range 4, multi 2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>15</td>
              <td>8</td>
              <td>+4</td>
              <td>melee 10, range 8, multi 4</td>
            </tr>
            <tr>
              <td>3</td>
              <td>18</td>
              <td>12</td>
              <td>+6</td>
              <td>melee 15, range 12, multi 6</td>
            </tr>
          </tbody>
        </table>
        <h4 className="header" style={{ marginTop: "20px" }}>
          Consequences
        </h4>
        <p>
          Whenever a hero gets a failure or partial success on a skill roll,
          they take damage of the listed amount. Usually just the hero that did
          poorly on the skill roll takes this damage, but you can rule all
          heroes half the damage instead.
        </p>
        <h4 className="header">Damage</h4>
        <p>Hazards have three types of attacks that deal damage:</p>
        <ul>
          <li>
            <span>
              <b>Melee: </b> Melee attacks deal the most damage.
            </span>
          </li>
          <li>
            <span>
              <b>Range: </b> Range attacks deal slightly less damage.
            </span>
          </li>
          <li>
            <span>
              <b>Multi: </b> Multi attacks target multiple heroes, such as a
              fiery explosion.
            </span>
          </li>
        </ul>
        <h3 className="header">Determine the Threat Level</h3>
        <p>
          Unlike monsters, hazards only have two threat levels: standard or
          major. All standard hazards have a countdown die of d6, while major
          hazards have a countdown die of d12. Like major monsters, major
          hazards get two turns per round.
        </p>
        <h3 className="header">Hazard Ability</h3>
        <p>
          Hazards generally have one action ability they can use on their turns
          and don't have maneuvers or reactions. The hazard's action ability
          usually come in the following variety:
        </p>
        <ul>
          <li>
            <span>
              Deal damage to a single creature either engaged to the hazard
              (melee) or a creature within 3 zones (range)
            </span>
          </li>
          <li>
            <span>
              Deal damage to 1d4+1 creatures within the hazard's zone or 1d4
              creatures in 1 zone within 3 zones (multi).
            </span>
          </li>
          <li>
            <span>
              Apply a negative condition or effect to a creature within 3 zones
              or 1d4+1 creatures within the hazard's zone.
            </span>
          </li>
          <li>
            <span>
              Summon a number of minion monsters equal to the hazard's tier.
            </span>
          </li>
        </ul>
        <h3 className="header">Major Features</h3>
        <p>
          Each hazard has a number of <b>major features</b> equal to the
          hazard's tier. Major hazards get an additional major feature. These
          features almost always expand the hazard's single ability, such as
          adding an effect on a successful attack roll, increasing a condition's
          duration, or making an ability that affects an area create a dangerous
          zone. For example, a hazard that deals psychic damage might now also
          taunt the target on a success or higher (turn ends).
        </p>

        {/* <h2>Converting Monsters</h2> */}
      </div>
    </div>
  );
}

export default BuildingMonsters;
