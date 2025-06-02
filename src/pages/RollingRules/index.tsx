import "./index.scss";
import Modifier from "../../components/Modifier";
import RulesHeader from "../../components/RulesHeader";
import scrollToHash from "../../utils/scrollToHash";
import { Link } from "react-router-dom";

function RollingRules() {
  scrollToHash();

  return (
    <div className="general">
      <div className="general-content">
        <RulesHeader />
        <h1>Rolling Rules</h1>
        <p>
          Do you hit the demon with your blade or shoot the ogre with fiery
          magic? Can you sneak past the guards? In this game, most rolls rely on
          a 20-sided die, a d20, to determine the degrees of success or failure.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#proficiency-bonus">
              <span>
                <b>Proficiency Bonus</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#making-roll">
              <span>
                <b>Making a Roll</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#hero-point">
              <span>
                <b>Hero Points</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#different-tiers">
              <span>
                <b>Different Tiers</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="proficiency-bonus">Proficiency Bonus</h2>
        <p>
          Your hero is heroic at fighting monsters and defeating your enemies.
          Many rolls and abilities refer to your <b>proficiency bonus</b>, which
          equals double your hero’s tier, so +2 at 1st level, and increasing to
          +4 at 5th level, and +6 at 8th level.{" "}
        </p>
        <h2>Rolls</h2>
        <p>
          You typically make a roll to determine the result of a risky attempt.
          Rolls represent tests of your hero’s capabilities. There are three
          types of rolls:
        </p>
        <ul>
          <li>
            <span>
              <b>
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  Attack rolls
                </Link>
                :
              </b>{" "}
              When you try to hurt or debilitate a creature with a spell,
              weapon, or ability.
            </span>
          </li>
          <li>
            <span>
              <b>
                <Link className="internal-link" to="/rules/skills">
                  Skill Rolls
                </Link>
                :
              </b>{" "}
              When you use your training on a specific task usually outside of
              combat.
            </span>
          </li>
          <li>
            <span>
              <b>
                <Link className="internal-link" to="/rules/combat#overcome">
                  Overcome Rolls
                </Link>
                :
              </b>{" "}
              When you roll to resist or end a harmful effect.
            </span>
          </li>
        </ul>
        <h3 className="header" id="making-roll">
          Making a Roll
        </h3>
        <p>When you make a roll, follow these simple steps.</p>
        <ol>
          <li>
            <span>
              <b>Roll the Die:</b> Roll the d20 and note the resolt.
            </span>
          </li>
          <li>
            <span>
              <b>Add Proficiency Bonus:</b> For{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack rolls
              </Link>{" "}
              and{" "}
              <Link className="internal-link" to="/rules/skills">
                skill rolls
              </Link>
              , you might add your proficiency bonus.
            </span>
          </li>
          <li>
            <span>
              <b>Apply Fortunes or Misfortunes:</b> Depending on the
              circumstances, you might add a numerical bonus, fortune (
              <Modifier type="f" />
              ), or penalty, misfortune (<Modifier type="mf" />
              ), to the result.
            </span>
          </li>
          <li>
            <span>
              <b>Compare Total to the Target Number:</b> See if the total equals
              or exceeds the target number <b>(TN)</b>.
            </span>
          </li>
        </ol>
        <h3 className="header">Fortunes and Misfortunes</h3>
        <p>
          Sometimes an ability or spell tells you that you gain a fortune or
          misfortune on a type of roll, which is a temporary advantage or
          disadvantage.
        </p>
        <ul>
          <li>
            <span>
              <Modifier type="f" /> adds 1d4 to a roll
            </span>
          </li>
          <li>
            <span>
              <Modifier type="mf" /> subtracts 1d4 from a roll
            </span>
          </li>
          <li>
            <span>
              Fortune and misfortune cancel each other out on a 1:1 basis
            </span>
          </li>
        </ul>
        <h4 className="header">Stacking Fortunes and Misfortunes</h4>
        <p>
          For every additional <Modifier type="f" /> or <Modifier type="mf" />{" "}
          you have on a roll, the die increases in size to a maximum of 1d12 (
          <Modifier type="f" count="5" /> or <Modifier type="mf" count="5" />
          ). So if you have <Modifier type="f" count="2" /> on a roll, then you
          add 1d6 to your roll. If you have <Modifier type="mf" count="4" />,
          then you subtract 1d10 from your roll.
        </p>
        <h4 className="header">Combining Fortunes and Misfortunes</h4>
        <p>
          If you have both <Modifier type="f" /> and <Modifier type="mf" /> on a
          roll, then they cancel each other out on a 1:1 basis. You then treat
          any remaining <Modifier type="f" /> or <Modifier type="mf" /> as
          normal. For example, if you have <Modifier type="f" count="3" /> on a
          roll, but also <Modifier type="mf" count="1" />, then you really have
          only <Modifier type="f" count="2" /> on the roll.
        </p>

        <h3 className="header">Target Number</h3>
        <p>
          The target number <b>(TN)</b> of a roll is the value you need to meet
          or succeed. The TN depends on the type of roll:
        </p>
        <ul>
          <li>
            <span>
              <b>
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  Attack Roll
                </Link>
                :
              </b>{" "}
              The TN is the defense of the creature you are targeting.
            </span>
          </li>
          <li>
            <span>
              <b>
                <Link className="internal-link" to="/rules/combat#overcome">
                  Overcome Roll
                </Link>
                :
              </b>{" "}
              The TN is always 10.
            </span>
          </li>
          <li>
            <span>
              <b>
                <Link className="internal-link" to="/rules/skills">
                  Skill Roll
                </Link>
                :
              </b>{" "}
              The TN depends on the skill tier.
            </span>
          </li>
        </ul>

        <h3 className="header">Degrees of Success</h3>
        <p>
          <Link className="internal-link" to="/rules/combat#attack-roll">
            Attack rolls
          </Link>{" "}
          and{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          have four possible results, or <b>degrees of success</b> for each roll
          depending on the total. Most abilities have different effects
          depending the degree of success.
        </p>
        <ul>
          <li>
            <span>
              <b>Critical Success:</b> Your total is 5 or more above the TN.
            </span>
          </li>
          <li>
            <span>
              <b>Success:</b> Your total meets or exceeds the TN.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> Your total is below the TN but by less
              than 5.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            Your total is 5 or more below the TN.
          </li>
        </ul>
        <p>
          Overcome rolls only have two possible results: failure or success.
        </p>
        <h4 className="header">Examples</h4>
        <p>
          Natalia the rogue slashes at a fiend. She makes her attack roll by
          rolling a d20 and after adding +2 for her proficiency bonus, her total
          is 17. The fiend’s Guard is 12, so Natalie’s total is high enough for
          a critical success!
        </p>
        <p>
          However, her ally, Elrin the arcanist isn’t as lucky. Elrin makes an
          attack roll to shoot a bolt of magic at the same fiend, but gets a 8
          for his total. His total is less than the fiend’s 12 Guard, but only 4
          below the TN so Elrin gets a partial success. If his total instead was
          a 7, then his result would be 5 below than the TN and would instead be
          a failure.
        </p>

        <h2 id="hero-point">Hero Points</h2>
        <p>
          <b>Hero points</b> grant you good luck to overcome heroic challenges.
          You start off each game session with one hero point. After you make a
          roll, and see the result, you can use a hero point to roll only the
          d20 again, and take the higher result.
        </p>
        <h3 className="header">Regaining Hero Points</h3>
        <p>
          When you roll a 20 on a d20 for a check, you gain a hero point, but
          you can’t have more than one hero point at a time. Spend those points
          so you can earn them back!
        </p>
        <h3 className="header">Helping Allies</h3>
        <p>
          When you see an ally make a roll, you can give your ally your hero
          point to use on the roll.
        </p>
        <h3 className="header">Rule of Cool</h3>
        <p>
          If a hero attempts something beyond the rules or what their hero is
          capable of, then they can spend a hero point to achieve the intended
          result if the GM is willing.
        </p>
        <p>
          For example, Dash the rogue sees a friend pushed off a cliff. On their
          turn, Dash uses an ability to teleport to their falling friend, then
          teleport back to the cliffside. However, their ability doesn't
          normally let you bring others along with you. The GM asks Dash to
          spend a hero point for Dash to teleport both them and their friend to
          safety.
        </p>

        <h2 id="different-tiers">Different Tiers</h2>
        <p>
          Sometimes heroes face threats far below them or beyond them. The
          degree of success of a roll can be affected by the tier of the
          challenge relative to the roller’s tier.
        </p>
        <p>
          For{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>
          , the GM sets the skill tier of the task, and in combat encounters,
          the tier matches the enemy’s tier. If you make a roll against a
          challenge who’s tier is higher than yours, then decrease the degree of
          success on the roll for each tier difference. However, if the
          challenge’s tier is lower than yours, then increase the degree of
          success on the roll for each tier difference.
        </p>
        <p>
          For example, a tier 1 hero gets a 16 on their skill roll to deceive an
          archangel, which is normally a success. However, the GM assigned this
          situation a skill tier of 3, which is higher than the hero’s tier by
          two. That drops the hero’s success to a failure!
        </p>
        {/* <h3 className="header">Attack Rolls</h3>
        <p>
          If a difference in tiers downgrades an{" "}
          <Link className="internal-link" to="/rules/combat#attack-roll">
            attack roll
          </Link>
          's result to a failure, then no effect or damage occurs even if it
          normallly would. For example, a tier 1 carrion demon attacks a tier 2
          rogue, and gets a partial success on their claw attack roll. Since the
          rogue is one tier higher, the carrion demon downgrades their attack
          roll result to a failure. Normally, a failed attack roll still deals
          half damage, but in this case, the carrion demon deals no damage!
        </p> */}

        <h3 className="header">Overcome Rolls</h3>
        <p>
          Unlike attack rolls or skill rolls, overcome rolls are binary. If a
          creature makes an overcome roll against an effect, check the effect’s
          tier in relation to the creature’s tier. The effect’s tier can be the
          origin’s tier, such as the tier of whoever imposed the effect on the
          creature. If you make an overcome roll against an effect with a higher
          tier than your tier, you take <Modifier type="mf" count="1" /> to your
          roll for each tier difference. However, if you make an overcome roll
          against an effect with a lower tier than your tier, you gain{" "}
          <Modifier type="f" count="1" /> to your roll for each tier difference.
        </p>
      </div>
    </div>
  );
}

export default RollingRules;
