import "./index.scss";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import ToolTip from "../../components/ToolTip";

function EncounterDesign() {
  return (
    <div className="encounter">
      <div className="encounter-content">
        <h1>Building Encounters</h1>
        <p>
          Legends Rise is about heroes battling evil, and an important gameplay
          loop of the game are encounters. On this page, GMs will find rules and
          advice on building encounters for your players. There are two types of
          encounters: <b>combat encounters</b> and <b>skill encounters</b>. Both
          will be covered on this page.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#encounter-points">
              <span>
                <b>Encounter Difficulty </b>
              </span>
            </a>
          </li>
          <li>
            <a href="#combat-encounter">
              <span>
                <b>Combat Encounters</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#skill-encounter">
              <span>
                <b>Skill Encounters</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 className="header" id="encounter-points">
          Encounter Difficulty
        </h2>
        <p>
          Each encounter is worth a number of <b>encounter points (EP)</b>,
          which determines the difficulty. Typically 1 EP is equal to one hero.
        </p>
        <h3 className="header">Encounter Difficulties</h3>
        <p>
          There are four difficulties for encounters: easy, medium, hard, and
          insane. Most combats should be medium difficulty, with some being easy
          or hard for thematically appropriate challenges. The number of EPs
          determine the encounter's difficulty, which is also modified by the
          number of heroes. More heroes can handle more difficult challenges.
        </p>
        <h4 className="header">Easy Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes - 1</b>
        <p>
          An easily winnable battle that can serve as a reminder that the heroes
          are badass. A classic example is the party fighting two groups of
          minions led by a standard enemy support. For even easier challenges,
          you can still have them, but don't increase the{" "}
          <Link className="internal-link" to="/rules/combat#momentum">
            momentum die
          </Link>{" "}
          from such trivial enounters.
        </p>
        <h4 className="header">Medium Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes</b>
        <p>
          A fierce challenge that will tax the heroes, but they should succeed
          barring terrible luck or terrible tactics. This is the standard for
          encounters.
        </p>
        <h4 className="header">Hard Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes + 1</b>
        <p>
          A really tough challenge that endangers the heroes, but they should
          prevail with good tactics. This is a good standard for boss fights or
          significant challenge of a story arc.
        </p>
        <h4 className="header">Insane Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes + 2</b>
        <p>
          These incredibly dificult challenges can easily lead to the defeat of
          all your heroes, and should be rarely used, such as the final boss at
          the end of a campaign. Avoid insane encounters for tier 1 heroes as
          only higher tier heroes have enough tools to survive such a harrowing
          challenge.
        </p>
        <h3 className="header">Adventuring Day</h3>
        <p>
          Since all heroic resources (encounter abilities and mana) recover on a
          short rest, the only long rest limits to heroes are wounds and
          recoveries. Therefore, heroes can face any number of encounters per
          long rest as long as they have recoveries and few enough wounds.
          Typically, heroes can handle a maximum number of encounters per long
          rest with a total EP amount equal to three times the number of heroes,
          give or take. Usually this means a maximum of 3 medium encounters per
          long rest.
        </p>
        <p>
          For example, for four heroes, they can handle at most 12 EP (give or
          take) per long rest. This can mean:
        </p>
        <ul>
          <li>
            <span>3 medium encounters</span>
          </li>
          <li>
            <span>4 easy encounters</span>
          </li>
          <li>
            <span>2 medium encounters and 1 hard encounter</span>
          </li>
          <li>
            <span>1 easy encounter and 2 hard encounters</span>
          </li>
        </ul>

        <h2 className="header" id="combat-encounter">
          Combat Encounters
        </h2>
        <p>
          When heroes need to fight monsters with weapons and magic, it's time
          for a combat encounter. This is the most common type of encounter in
          Legends Rise.
        </p>
        <h3 className="header">EPs for Combat Encounters</h3>
        <p>
          A standard monster or hazard is worth 1 EP, so a medium encounter is a
          number of monsters equal to the heroes. However, monsters and hazards
          have different <b>threat levels</b>, which can affect the number of
          EPs.
        </p>
        <h4 className="header">Minion Threats</h4>
        <p>
          Minion foes easily dispatched by the heroes, such as stormtroopers in
          Star Wars. Only monsters can be minions. Minions come in groups, with
          the number of minions depending on the heroes' tier:
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>
                <b>Tier 1:</b> 4 minions equal 1 EP
              </span>
            </li>
            <li>
              <span>
                <b>Tier 2:</b> 5 minions equal 1 EP
              </span>
            </li>
            <li>
              <span>
                <b>Tier 3:</b> 6 minions equal 1 EP
              </span>
            </li>
          </ul>
          <Accordion
            title="Minion Rules"
            content={
              <div>
                <p>
                  Minions follow different rules from regular monsters. Minions
                  of the same type are part of a <b>minion group</b>.
                </p>
                <h4 className="header">Easy to Kill</h4>
                <p>
                  When a minion takes damage, if the damage is less than the
                  minion’s maximum hit points, then the minion becomes{" "}
                  <ToolTip preset="shaken" />. If the minion is already shaken,
                  then any damage kills it.
                </p>

                <h4 className="header">Overkill</h4>
                <p>
                  When a minion dies from an ability that targets only it with
                  an attack roll, any leftover damage beyond the minion’s
                  remaining hit points is applied to another minion of the same
                  group within the same zone. If the leftover damage is enough
                  to kill the second minion, then any remaining damage is
                  carried over to a third minion, and so on!
                </p>

                <h4 className="header">Group Attack</h4>
                <p>
                  Minions within the same group and zone can{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>{" "}
                  the same target using one{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>
                  . Multiply the strike’s base damage by the number of attacking
                  minions.
                </p>
                <p>
                  For GMs, in order to speed up your turn, either have all
                  minions in one group focus the same hero, or split the minions
                  to focus two different heroes. One or two attack rolls is
                  always quicker than four to six attack rolls! You can also
                  have players optionally roll one attack roll against a group
                  of minions to also speed up time as well.
                </p>
              </div>
            }
          />
        </p>

        <h4 className="header">Minor Threats</h4>
        <b className="encounter-content__subtitle">½ EP</b>
        <p>
          Minor monsters and hazards are weaker than standard threats, but
          stronger than minions. Since minors are worth ½ EP, always use two
          minors to equal 1 EP.
        </p>
        <h4 className="header">Standard Threats</h4>
        <b className="encounter-content__subtitle">1 EP</b>
        <p>
          Standard threats are the most typical monsters and hazards. A good
          fight for four heroes is four standard monsters.
        </p>
        <h4 className="header">Major Threats</h4>
        <b className="encounter-content__subtitle">2 EP</b>
        <p>
          Major monsters and hazards are stronger than standard threats, but
          weaker than bosses. Major threats always get two turns per round.
        </p>
        <h4 className="header">Boss Threats</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes</b>
        <p>
          Boss threats are the strongest monster heroes can face. Bosses get as
          many turns per round as the number of heroes. So if a boss dragon
          faces off against four heroes, the dragon gets 4 turns a round!
        </p>
      </div>
    </div>
  );
}

export default EncounterDesign;
