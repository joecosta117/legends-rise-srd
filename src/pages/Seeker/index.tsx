import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";
import ToolTip from "../../components/ToolTip";

function Seeker() {
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
    <div className="seeker">
      <div className="seeker-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Seeker Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Seeker Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Seeker Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Seeker</h1>
            <p>
              Seekers are mystical warriors who draw upon spirit and discipline
              to fight with supernatural precision. Ever striving for harmony
              within themselves and the world, they blur the line between the
              physical and the spiritual as they unleash strikes beyond mortal
              limits. Play a seeker if you want to channel inner power like a
              Jedi or wuxia hero, striking with afterimages, psychic energy, and
              essence-infused blows.
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
                  <b>Defense Bonus:</b> +1 to Guard and Spirit
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
                  <b>Training:</b> Light armor and all weapons
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Equipment:</b> You gain one armor and two weapons.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You gain light armor, a standard melee
                      blade, and a long ranged bow.
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
                  <Link
                    className="internal-link"
                    to="/fighting-styles#brawling"
                  >
                    brawling
                  </Link>{" "}
                  fighting style and shoving kick technique.
                </span>
              </li>
            </ul>

            <h3 className="header">Spirit Strike</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Spirit Strike"
              actType="Action"
              descriptor="You cut not the body but the soul, your weapon passing into the foe’s spirit."
              frequency="At-will"
              keywords="Magical"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  , dealing psychic damage instead of your weapon's normal
                  damage type. Make your attack roll against the target's Spirit
                  instead of Guard.
                </span>
              }
            />

            <h3 className="header">Disrupt Essence</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Disrupt Essence"
              actType="Action"
              descriptor="You strike at the very essence of a foe, throwing their spirit into turmoil."
              frequency="Encounter"
              keywords="Escalation, Magical"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  , dealing psychic damage instead of your weapon's normal
                  damage type. On a success, the target is{" "}
                  <Link className="internal-link" to="/conditions#hindered">
                    hindered
                  </Link>{" "}
                  (scene ends), and also{" "}
                  <Link className="internal-link" to="/conditions#vulnerable">
                    vulnerable
                  </Link>{" "}
                  while hindered on a critical success.
                </span>
              }
            />

            <h3 className="header">Mystic Deflection</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Mystic Deflection"
              actType="Reaction"
              descriptor="You turn aside the strike with focused will, sending a lash of psychic force back at your attacker."
              frequency="At-will"
              trigger={
                <span>
                  You see an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  made against you
                </span>
              }
              keywords="Magical"
              effect={
                <span>
                  Triggering attack roll against only you takes{" "}
                  <Modifier type="mf" count="1" />. If the attack roll is a
                  failure, then the triggering attacker takes psychic damage
                  equal to your proficiency bonus.
                </span>
              }
            />

            <h3 className="header">Subclass</h3>
            <p>
              Choose the sentinel subclass, or another subclass of your choice.
              At 1st level, you gain features from your chosen subclass.
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
            <h3 className="header">Seeker Speed</h3>
            <p>
              You can draw upon your inner essence to move incredibly fast. Your
              speeds increase by +1.
            </p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Seeker Subclasses</h1>
            <p>These are the subclass choices for the seeker.</p>
            <h2>Sentinel</h2>
            <p>
              You protect the balance between your world and other realms, and
              harness your inner essence to defend others.
            </p>
            <h3 className="header">Ally Deflection (1st-Level Feature)</h3>
            <p>
              Your mystic deflection ability gains the following trigger: "You
              see an attack roll made against an ally within 1 zone." When used
              in this way, apply the ability's <Modifier type="mf" /> on the
              attack roll against your ally.
            </p>

            <h2>Sage</h2>
            <p>
              You have dedicated your life to mastering the spiritual arts, and
              have unlocked esoteric methods of channeling your essence.
            </p>
            <h3 className="header">Manipulate Essence (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Manipulate Essence"
              actType="Maneuver"
              descriptor="You focus your inner essence on a target, aiding or disrupting their spiritual balance."
              frequency="At-will"
              target="1 creature within 1 zone"
              keywords="Magical, Range"
              duration="Focus until scene ends"
              effect={
                <span>
                  If the target is an ally, they gain{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#temporary-hit-points"
                  >
                    temporary hit points
                  </Link>{" "}
                  equal to your tier at the start of their turns. If the target
                  is an enemy, then once per turn when they take damage, they
                  take additional damage equal to your tier.
                </span>
              }
            />

            <h2>Echo Warrior</h2>
            <p>
              You have learned to harness your essence to manifest spiritual
              echoes of yourself.
            </p>
            <h3 className="header">Spirit Echo (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Spirit Echo"
              actType="Maneuver"
              descriptor="You leave behind an afterimage of yourself that you can control."
              frequency="At-will"
              keywords="Magical, Range"
              // target="1 creature within 1 zone"
              duration="Focus for the scene"
              effect={
                <span>
                  You create an echo with 1 hit point and defenses equal to
                  yours that appears next to you. When you use this ability or
                  focus on it, you can move the echo up to 1 zone to become{" "}
                  <Link className="internal-link" to="/rules/combat#engaged">
                    engaged
                  </Link>{" "}
                  to a creature and then make an attack roll against the
                  creature's Guard, dealing 2 psychic damage per your tier.
                </span>
              }
            />
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Seeker Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>

            <h3 className="header">Essence Blast</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Essence Blast"
              actType="Action"
              descriptor="You release a concentrated blast of your inner essence at a foe that scrambles their mind."
              frequency="At-will"
              target="1 creature within 3 zones"
              defense="Spirit"
              keywords="Magical, Range"
              damage="3 pyschic damage per your tier"
              critical={
                <span>
                  <Link className="internal-link" to="/conditions#hindered">
                    hindered
                  </Link>{" "}
                  (next turn ends)
                </span>
              }
            />

            <h3 className="header">Expanded Training</h3>
            <p>
              You learn a technique or{" "}
              <Link className="internal-link" to="">
                fighting style
              </Link>
              . You can take this class talent multiple times.
            </p>

            <h3 className="header">Force Shift</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Force Shift"
              actType="Action"
              descriptor="You have mastered minor telekinesis to reposition your foes."
              frequency="At-will"
              target="1d4+1 enemies within your zone"
              defense="Guard"
              keywords="Magical"
              critical={
                <span>
                  Same as a success, and target falls{" "}
                  <Link className="internal-link" to="/conditions#prone">
                    prone
                  </Link>
                </span>
              }
              success="Target is pulled to become engaged with you or shoved within their zone"
            />

            <h3 className="header">Greater Disruption</h3>
            <p>
              When you use your essence disruption ability, make your attack
              roll against the target's Spirit, and on a success, the target is{" "}
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (scene ends) instead of{" "}
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>
              .
            </p>

            <h3 className="header">Phase Rush</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Phase Rush"
              actType="Maneuver"
              descriptor="You step into the spirit realm as you dart across the battefield."
              frequency="At-will"
              keywords="Magical"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#move">
                    Move
                  </Link>{" "}
                  and you have{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#special-movement"
                  >
                    phasing
                  </Link>{" "}
                  during this movement
                </span>
              }
            />

            <h2>Tier 2 Class Talents</h2>

            <h3 className="header">Dimensional Echo</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> echo warrior subclass
            </p>
            <p>
              When you focus on your spirit echo ability, you can{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              to swap places with your echo.
            </p>

            <h3 className="header">Effortless Manipulations</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> sage subclass
            </p>
            <p>
              If the target of your manipulate essence ability is within 1 zone
              of you, then you don't need to focus on this ability.
            </p>

            <h3 className="header">Expanded Telekinesis</h3>
            <p>
              You can{" "}
              <Link className="internal-link" to="/combat-abilities#overpower">
                overpower
              </Link>{" "}
              with a range of 1 zone, and gains the magical and range keyword
              for you.
            </p>

            <h3 className="header">Purge Essence</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Purge Essence"
              actType="Maneuver"
              descriptor="You harmonize your spirit to cleanse your body and mind."
              frequency="At-will"
              keywords="Magical"
              effect={<span>End one condition affecting you.</span>}
            />

            <h3 className="header">Spirit Jaunt</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> sentinel subclass
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Spirit Jaunt"
              actType="Action"
              descriptor="Your spirit dashes forward, and as you rematerialize, your attack demands your foe's attention."
              frequency="At-will"
              keywords="Magical, Range"
              effect={
                <span>
                  <Link
                    className="internal-link"
                    to="/rules/combat#special-movement"
                  >
                    Teleport
                  </Link>{" "}
                  up to 1 zone away, then{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  . On a success or higher, the target is{" "}
                  <Link className="internal-link" to="/conditions#taunted">
                    taunted
                  </Link>{" "}
                  by you (next turn ends).
                </span>
              }
            />

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Dual Manipulations</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> sage subclass
            </p>
            <p>
              When you use your manipulate essence ability, you can target two
              creatures.
            </p>

            <h3 className="header">Revitalize Echo</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> echo warrior subclass
            </p>
            <p>
              When your echo is reduced to 0 hit points, you can use your
              reaction to use spirit echo.
            </p>

            <h3 className="header">Spirit Sight</h3>
            <p>
              You can see the inner essence of all creatures. You have{" "}
              <ToolTip preset="blind" /> within 1 zone.
            </p>

            <h3 className="header">Total Harmony</h3>
            <p>
              You have achieved mastery of your body and mind. Your Guard and
              Spirit both increase by +1, and you have{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                phasing
              </Link>
              .
            </p>

            <h3 className="header">Vigiliant Sentinel</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> sentinel subclass
            </p>
            <p>
              You get a second reaction that you can only use for mystic
              deflection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Seeker;
