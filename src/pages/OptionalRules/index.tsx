import "./index.scss";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";

function OptionalRules() {
  return (
    <div className="optional-rules">
      <div className="optional-rules-content">
        <h1 className="optional-rules__title">Optional Rules</h1>
        <p>
          The rest of this website details the core rules of the game, but this
          page has optional rules you as the GM can implement into your
          campaigns. These rules are not required, but they can add more depth
          and variety to your games. Feel free to pick and choose which rules
          you want to use.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#doom-die">
              <span>
                <b>Doom Die</b>
              </span>
            </a>
          </li>
          {/* <li>
            <a href="#damage-rolls">
              <span>
                <b>Roll for Damage</b>
              </span>
            </a>
          </li> */}
          <li>
            <a href="#scars">
              <span>
                <b>Scars</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="doom-die">Doom Die</h2>
        <p>
          For darker campaigns, the <b>doom die</b> captures the growing danger
          of the world. Similar to the heroes'{" "}
          <Link className="internal-link" to="/rules/combat#momentum">
            momentum die
          </Link>
          , the doom die is represented by a d4 that starts at 0. Whenver the
          heroes get a failure or partial success on an attack roll or skill
          roll, the doom die increments by 1 up to a maximum of 4.
        </p>
        <p>
          The GM can deincrement the doom die by any amount to gain an equal
          amount of <Modifier type="f" /> to an enemy's roll. When the doom die
          is at 4, the GM can reset the die to 0 to do even more powerful moves:
        </p>
        <ul>
          <li>
            <span>
              Regain a use of a monster's recharge ability, even if it was
              already regained.
            </span>
          </li>
          <li>
            <span>A monster takes an extra turn.</span>
          </li>
          <li>
            <span>
              Add a new encounter (combat or skill) or severe narrative
              complication. Perhaps the heroes are traversing across the ocean,
              and the GM reduces the doom die to 0 as an intense storm causes a
              skill encounter for the heroes to survive.
            </span>
          </li>
        </ul>

        <h3 className="header">Tempt Fate Consequence</h3>
        <p>
          When a player chooses to{" "}
          <Link className="internal-link" to="/rules/skills#tempt-fate">
            tempt fate
          </Link>
          , one of the consequences could be the GM incrementing the doom die by
          1.
        </p>

        {/* <h2 id="damage-rolls">Rolling for Damage</h2>
        <p>
          In Legends Rise, there are no damage rolls. However, some players love
          to roll dice, and this optional rule is for them.
        </p> */}

        <h2 id="scars">Scars</h2>
        <p>
          For darker campaigns, along with the doom die, <b>scars</b> captures
          the trauma of heroic adventures from too many near death experiences.
          When a hero becomes{" "}
          <Link className="internal-link" to="/rules/combat#dying">
            vanquished
          </Link>{" "}
          or is brought back to life, they gain a scar. Scars are permament
          representations of the hero's trauma, and they can be physical or
          mental. When a hero starts dying with 3 scars, their journey ends, and
          their fate determined by their player. The hero can still be played as
          an NPC, but the player must create a new hero to play.
        </p>
        <p>
          In certain campaign settings, scars can represent dark corruption that
          slowly transforms heroes into monsters. When a hero gets their third
          scar, the darkness takes them and they return to the story corrupted
          by evil.
        </p>
      </div>
    </div>
  );
}

export default OptionalRules;
