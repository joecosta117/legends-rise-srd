import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import Modifier from "../../components/Modifier";
import ClassHeader from "../../components/ClassHeader";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";

function Warrior() {
  const [isDetails, setDetails] = useState(true);
  const [isSubclasses, setSubclasses] = useState(false);
  const [isTalents, setTalents] = useState(false);

  const toggleDetails = () => {
    if (!isDetails) {
      setDetails(true);
      setSubclasses(false);
      setTalents(false);
    }
  };

  const toggleSubclasses = () => {
    if (!isSubclasses) {
      setSubclasses(true);
      setDetails(false);
      setTalents(false);
    }
  };

  const toggleTalents = () => {
    if (!isTalents) {
      setTalents(true);
      setSubclasses(false);
      setDetails(false);
    }
  };

  return (
    <div className="warrior">
      <div className="warrior-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Warrior Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Warrior Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Warrior Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Warrior</h1>
            <p>
              Soldiers, gladiators, mercenaries, noble knights, and more can all
              be Warriors. You rely on martial prowess to eliminate any dangers
              while weathering incoming violence. Play a warrior if you want to
              be a tough fighter that is skilled with weapons.
            </p>
            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b> Martial
                </span>
              </li>
              <li>
                <span>
                  <b>Defense Bonus:</b> +1 to Guard
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Hit Points:</b> 12
                </span>
              </li>
              <li>
                <span>
                  <b>Recoveries:</b> 8
                </span>
              </li>
              <li>
                <span>
                  <b>Training:</b> Light armor, heavy armor, shields, and all
                  weapons
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Equipment:</b> You gain one armor, one weapon, and
                  either a shield or weapon.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You gain heavy armor, a standard melee
                      blade, and a shield.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Fighting Style</h3>
            <p>
              You have mastered a certain way of fighting. Learn a{" "}
              <Link className="internal-link" to="/fighting-styles">
                fighting style
              </Link>
              .
            </p>
            <ul>
              <li>
                <span>
                  <i>Suggestion:</i> You learn the{" "}
                  <Link className="internal-link" to="/fighting-styles#bastion">
                    bastion
                  </Link>{" "}
                  fighting style and guard attack technique.
                </span>
              </li>
            </ul>

            <h3 className="header">Precision Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Precision Attack"
              actType="Action"
              descriptor="You attack with unerring accuracy from countless practice."
              frequency="At-will"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>{" "}
                  with <Modifier type="f" count="1" />
                </span>
              }
            />

            <h3 className="header">Comeback Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Comeback Attack"
              actType="Action"
              descriptor="You pull yourself together as you attack."
              frequency="Encounter"
              keywords="Escalation"
              effect={
                <span>
                  Spend a recovery then{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>
                </span>
              }
            />

            <h3 className="header">Interrupt Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Interrupt Attack"
              actType="Reaction"
              descriptor="As you see your foe distracted, you strike with your weapon."
              frequency="At-will"
              trigger={
                <span>
                  You see a creature{" "}
                  <Link className="internal-link" to="/combat-abilities#move">
                    move
                  </Link>
                  , or use a range or magical ability
                </span>
              }
              keywords="Melee"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>{" "}
                  the triggering creature
                </span>
              }
            />

            <h3 className="header">Subclass</h3>
            <p>
              Choose the slayer subclass, or another subclass of your choice. At
              1st level, you gain features from your chosen subclass.
            </p>

            <h2>2nd Level Features</h2>
            <p>
              Starting at 2nd level, you gain one class talent from the list at
              the end of this class description. You gain another class talent
              at 4th, 6th, and 9th levels.
            </p>
            <p>
              You also gain a theme talent from your theme. You gain another
              theme talent at 4th, 6th, and 9th level.
            </p>

            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3 className="header">Indomitable</h3>
            <p>
              You shrug off harmful effects easier than most. You make{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome rolls
              </Link>{" "}
              against effects at the start of your turn, instead of at the end,
              except for{" "}
              <Link className="internal-link" to="/rules/combat#dying">
                dying
              </Link>
              .
            </p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Warrior Subclasses</h1>
            <p>These are the subclass choices for the warrior.</p>
            <h2>Slayer</h2>
            <p>
              You focus your fighting tactics on pure offense, hoping to finish
              off foes as quickly as possible.
            </p>
            <h3 className="header">Super Critical (1st-Level Feature)</h3>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , and you roll a 20 or your{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              total is 10 or more over the target’s defense, you achieve a super
              critical. This is a critical success, but instead of adding your
              proficiency bonus to the damage, you add double your proficiency
              bonus.
            </p>

            <h2>Juggernaut</h2>
            <p>You are a nearly invincible force on the battlefield.</p>
            <h3 className="header">Unstoppable (1st-Level Feature)</h3>
            <p>
              You gain <Modifier type="f" count="1" /> to{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome rolls
              </Link>
              , and your Guard and Spirit both increase by +1.
            </p>
            <h2>Weapon Master</h2>
            <p>You use well practiced maneuvers to throw off your foes.</p>
            <h3 className="header">
              Extraordinary Technique (1st-Level Feature)
            </h3>
            <p>
              When you get a success on a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , you can apply the critical effect of your weapon’s weapon group.
            </p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Warrior Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Expanded Training</h3>
            <p>
              You learn a technique or{" "}
              <Link className="internal-link" to="/fighting-styles">
                fighting style
              </Link>
              . You can take this class talent multiple times.
            </p>

            <h3 className="header">Greater Interrupt</h3>
            <p>
              When you get a critical success on interrupt attack, you disrupt
              the triggering ability.
            </p>

            <h3 className="header">Tough</h3>
            <p>
              Your maximum hit points increases by your proficiency bonus, and
              you are defeated at four{" "}
              <Link className="internal-link" to="/rules/combat#dying">
                wounds
              </Link>{" "}
              instead of three.
            </p>

            <h3 className="header">Unmatched Precision</h3>
            <p>
              When you roll a <Modifier type="f" /> on an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>
              , you can reroll the <Modifier type="f" /> and take the highest
              result.
            </p>

            <h3 className="header">Warrior's Charge</h3>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#charge">
                charge
              </Link>
              , instead of a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              you can use comeback attack, precision attack, or another
              technique from your fighting styles that takes an action, but
              doesn’t include the charge action.
            </p>

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Comeback Technique</h3>
            <p>
              When you use comeback attack, you can use a technique that takes
              an action instead of a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              .
            </p>

            <h3 className="header">Expanded Techniques</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> weapon master subclass
            </p>
            <p>
              Learn a{" "}
              <Link className="internal-link" to="/fighting-styles">
                fighting style
              </Link>{" "}
              or technique. Make this choice again.
            </p>

            <h3 className="header">Improved Indomitable</h3>
            <p>
              You add your proficiency bonus to{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome rolls
              </Link>
              .
            </p>

            <h3 className="header">Undying</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> juggernaut subclass
            </p>
            <p>
              When you are <ToolTip preset="shaken" />, but not dying, you gain{" "}
              <ToolTip preset="regen" /> equal to your tier.
            </p>

            <h3 className="header">Unerring Accuracy</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> slayer subclass
            </p>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              with <Modifier type="f" />, increase the number of{" "}
              <Modifier type="f" /> by +1.{" "}
            </p>

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Greater Technique</h3>
            <p>
              When you use a technique ability that has an effect on a success,
              you still get the effect on a partial success.
            </p>

            <h3 className="header">Juggernaut's Comeback</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> juggernaut subclass
            </p>
            <p>
              When you use comeback attack, you end all negative conditions on
              yourself.
            </p>

            <h3 className="header">Mega Critical</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> slayer subclass
            </p>
            <p>
              Once per{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                safe rest
              </Link>
              , you can turn a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              into a super critical.
            </p>

            <h3 className="header">Swift Interrupt</h3>
            <p>
              You gain a second reaction that you can only use to interrupt
              attack.
            </p>

            <h3 className="header">Weapon Flexibility</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> weapon master subclass
            </p>
            <p>
              Choose a critical effect from a weapon group. When you apply a
              critical effect on a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , you can choose the weapon’s normal weapon group critical effect
              or the chosen critical effect.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Warrior;
