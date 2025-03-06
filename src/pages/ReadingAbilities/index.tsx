import AbilityCard from "../../components/AbilityCard";
import "./index.scss";
import basicAtk from "../../assets/monster-strike.png";
import scrollToHash from "../../utils/scrollToHash";
import { Link } from "react-router-dom";

function ReadingAbilities() {
  scrollToHash();

  return (
    <div className="general">
      <div className="general-content">
        <h1>Abilities and Keywords</h1>
        <p>
          You will see special abilities and keywords presented throughout this
          document. Abilities are always presented in the form of a stat block
          as seen below. If you see “special” listed anywhere, it usually means
          more details are listed in the description of the ability.
        </p>
        <AbilityCard
          name="Ability Name"
          actType="Action"
          descriptor="A brief narrative description of the ability."
          frequency="Frequency"
          keywords="Any Keywords"
          trigger="If the ability uses a reaction or free action, it will list the condition that must be met before you can use it."
          requirement="If there are any requirements for using this ability."
          target="Who or what the ability affects, and at what distance. If this descriptor lists a number of zones, it means zones in addition to your own. If the ability affects a large area, such as an exploding fireball, then it will include how many zones are affected within the range."
          duration="How long the ability’s effect lasts. Some abilities require you to spend a maneuver each turn to focus on the effect to maintain it. You can end any ability as a free action on your turn."
          defense="Defense"
          damage="You make an attack roll against the target’s specified defense. Any damage the ability does is then listed as well."
          critical="Additional effect against the target on a critical successful attack roll."
          success="Additional effect against the target on a successful attack roll."
          partial="Additional effect against the target on a partially successful attack roll."
          failure="Any effect against the target on a failed attack roll."
          effect="Any other mechanical effects or information."
        />
        <h2 className="header" id="frequency">
          Frequency
        </h2>
        <p>For frequency of an ability, there are three types:</p>
        <ul>
          <li>
            <span>
              <b>At-will:</b> These abilities can be used without limit.
            </span>
          </li>
          <li>
            <span>
              <b>Encounter:</b> These abilities can only be used once per short
              rest.
            </span>
          </li>
          <li>
            <span>
              <b>Spell:</b> These abilities cost mana if the spell tier is 1 or
              higher. If the spell tier is 0, then the ability counts as an
              at-will ability. The magic tradition will be listed too.
            </span>
          </li>
        </ul>
        <h2 className="header" id="keywords">
          Keywords
        </h2>
        <p>
          Certain abilities will have <b>keywords</b> that group these effects
          under the same category and sometimes additional rules. Here are all
          keywords:
        </p>
        <ul>
          <li>
            <span>
              <b>Aura:</b> A presence, sometimes magical, emanates from the
              person using this ability up to a certain range. When the user of
              this ability is defeated, the ability ends, unless otherwise
              specified by the ability’s duration.
            </span>
          </li>
          <li>
            <span>
              <b>Escalation:</b> The ability becomes more powerful when used
              later in combat. When you use this ability on round 3 or later,
              any{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              rolled from this ability treats the result as one degree of
              success higher. For example, if an arcanist casts fireball at
              round 3 and rolls a success on their attack roll, then the attack
              is upgraded to a critical success!
            </span>
          </li>
          <li>
            <span>
              <b>Magical:</b> The ability is magical.
            </span>
          </li>
          <li>
            <span>
              <b>Melee:</b> The ability requires being engaged to a target, such
              as swinging a sword.
            </span>
          </li>
          <li>
            <span>
              <b>Range:</b> The ability can be used at a far range, such as
              shooting a ray of magic across the battlefield.
            </span>
          </li>
          <li>
            <span>
              <b>Summon:</b> The ability conjures a creature loyal to you.
            </span>
            <ul style={{ marginTop: "5px", marginLeft: "10px" }}>
              <li>
                <span>
                  When you use this ability and on later turns as a maneuver,
                  you can command the summoned creature to use a maneuver or
                  action, otherwise it uses{" "}
                  <Link className="internal-link" to="/combat-abilities#defend">
                    defend
                  </Link>
                  . You can only command a summoned creature once per your turn.
                </span>
              </li>
              <li>
                <span>The summoned creature uses your reaction.</span>
              </li>
              <li>
                <span>
                  The symbol{" "}
                  <img
                    className="attack-icon"
                    src={basicAtk}
                    alt="attack icon"
                  />{" "}
                  that appears next to a summoned creature’s ability indicates
                  the ability is treated as a{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  All summoned creatures like any creatures are assumed to have
                  a land speed of 1, unless otherwise specified.
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <b>Weapon:</b> The ability requires use of a natural or material
              weapon such as attacking with a bow or claws.
            </span>
          </li>
        </ul>

        <h2 className="header">Effect Durations</h2>
        <p>
          Abilities can have different durations that are listed under duration
          or other effects.
        </p>
        <ul>
          <li>
            <span>
              <b>Scene Ends:</b> The ability’s effect lasts until the end of the
              current scene, whether it be a combat encounter or skill encounter
              per the GM's discretion.
            </span>
          </li>
          <li>
            <span>
              <b>Turn Starts:</b> The ability’s effect lasts until the start of
              the target’s next turn.
            </span>
          </li>
          <li>
            <span>
              <b>Turn Ends:</b> The ability’s effect lasts until the end of the
              target’s next turn
            </span>
          </li>
          <li>
            <span>
              <b>Overcome Ends:</b> The target of the ability’s effect can make
              an{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome roll
              </Link>{" "}
              at the end of their turn. On a success, the ability’s effect ends.
              On a failure, the ability’s effect continues
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReadingAbilities;
