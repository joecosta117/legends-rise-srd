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
          <li>
            <a href="#damage-rolls">
              <span>
                <b>Roll for Damage</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#scars">
              <span>
                <b>Scars</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#stacking-hero-points">
              <span>
                <b>Stacking Hero Points</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="doom-die">Doom Die</h2>
        <p>
          For darker and more difficult campaigns, the <b>doom die</b> captures
          the growing danger of the world. Similar to the heroes'{" "}
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

        <h2 id="damage-rolls">Rolling for Damage</h2>
        <p>
          In Legends Rise, there are no damage rolls. However, some players love
          to roll dice, and this optional rule is for them. Keep in mind this
          optional rule introduces more inconsistency to combat as well as
          slowing the game down. Proceed with caution!
        </p>
        <h3 className="header">Ability Damage</h3>
        <p>
          For most damage from weapon or spell attacks, follow the same
          structure of dealing between 2-5 damage per tier of the attacker. For
          higher tier monsters, first divide their base damage by their tier. To
          convert to damage dice, follow the below:
        </p>
        <ul>
          <li>
            <span>
              <b>2 =</b> 1d4 + proficiency bonus (PB)
            </span>
          </li>
          <li>
            <span>
              <b>3 =</b> 1d6 + PB
            </span>
          </li>
          <li>
            <span>
              <b>4 =</b> 1d8 + PB
            </span>
          </li>
          <li>
            <span>
              <b>5 =</b> 1d10 + PB
            </span>
          </li>
          <li>
            <span>
              <b>6 =</b> 1d12 + PB
            </span>
          </li>
        </ul>
        <p>
          At higher tiers, roll a number of dice equal to the attacker's tier.
          For example, a tier 2 dragon attacks with their rend normally dealing
          8 physical damage. If you want to convert this to rolled damage,
          divide 8 by their tier (2) to get 4, and then roll 2d8 + PB (4) for
          the dragon's damage.
        </p>
        <h4 className="header">Why Add Proficiency Bonus?</h4>
        <p>
          This optional rule lets you add your proficiency bonus to damage rolls
          to add some consistency to them. It can feel bad to roll 1d8 and get a
          1, but if you add your proficiency bonus, then a 3 doesn't feel too
          bad. This is a common practice in modern games.
        </p>
        <p>
          However, adding proficiency bonus does inflate damage amounts and hit
          points too. If you wish to avoid changing hit points, then don't add
          proficiency bonus to damage rolls. For bonus damage and persistent
          damage, just use the flat amount instead with no doubling. Hit points
          can stay unadjusted too.
        </p>
        <h3 className="header">Bonus Damage</h3>
        <p>
          When you get bonus damage, such as a rogue's cunning attack, it
          typically deals additional damage equal to your tier. To convert this
          to rolled damage, for each additional point of damage, roll a d4. For
          example, a tier 3 rogue deals an additional 3 damage from cunning
          attack, or 3d4 with this optional rule.
        </p>
        <h3 className="header">Persistent Damage</h3>
        <p>
          For damage from ongoing damage or dangerous zone, still use flat
          damage as these effects happen often and rolling damage for them would
          slow the game down. However, double the damage. For example, if an
          arcanist creates a dangerous zone (1 fire damage), then the dangerous
          zone instead deals 2 fire damage.
        </p>
        <h3 className="header">Hit Points</h3>
        <p>
          With this optional rule, everyone is dealing more damage, so they need
          more hit points to compensate.
        </p>
        <ul>
          <li>
            <span>
              For heroes, classes and archetypes grant 14 instead of 8 hit
              points, 18 instead of 10 hit points, 22 instead of 12 hit points,
              and 26 instead of 14 hit points.
            </span>
          </li>
          <li>
            <span>
              For abilities or talents that grant extra hit points or temporary
              hit points, double the amount.
            </span>
          </li>
          <li>
            <span>
              When creatures heal, double the amount if its a specified amount.
              For example, when a creature heals from the quick heal spell, they
              regain 12 hit points per spell tier instead of 6. However, for
              healing from spending a recovery, you still only heal your shaken
              value.
            </span>
          </li>
          <li>
            <span>
              For monsters, their base hit points are 18 for tier 1, 48 for tier
              2, and 88 for tier 3. For changes to the monster's hit points from
              their role, double the amount. For example, a tier 1 bruiser adds
              4 to their hit points instead of only 2.
            </span>
          </li>
        </ul>

        <h2 id="scars">Scars</h2>
        <p>
          For darker and dangerous campaigns, along with the doom die,{" "}
          <b>scars</b> captures the trauma of heroic adventures from too many
          near death experiences. When a hero becomes{" "}
          <Link className="internal-link" to="/rules/combat#dying">
            vanquished
          </Link>{" "}
          or is brought back to life, they gain a scar. Scars are permament
          representations of the hero's trauma, and they can be physical or
          mental. When a hero starts is defeated with 3 scars, their journey
          ends, and their fate determined by their player. The hero can still be
          played as an NPC, but the player must create a new hero to play.
        </p>
        <p>
          In certain campaign settings, scars can represent dark corruption that
          slowly transforms heroes into monsters. When a hero gets their third
          scar, the darkness takes them and they return to the story corrupted
          by evil.
        </p>

        <h2 id="stacking-hero-points">Stacking Hero Points</h2>
        <p>
          For even more heroic games or easier ones, the GM can let heroes stack
          hero points up to a maximum of 3. Heroes still only gain 1 hero point
          at the start of a game session, but they can gain more with good rolls
          or save them over multiple game sessions. A clever player can enter a
          pivotal scene with multiple hero points to help sway fate in their
          favor!
        </p>
      </div>
    </div>
  );
}

export default OptionalRules;
