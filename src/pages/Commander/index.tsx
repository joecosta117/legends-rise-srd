import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import fortune from "../../assets/fortune-icon-v2.png";
import ToolTip from "../../components/ToolTip";
import ClassHeader from "../../components/ClassHeader";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";

function Commander() {
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
    <div className="commander">
      <div className="commander-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Commander Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Commander Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Commander Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Commander</h1>
            <p>
              At home on the battlefield, Commanders use cunning strategy and
              encouraging words to best support their allies. Play a Commander
              if you want to fight with a weapon while helping your allies do
              the best they can in battle.
            </p>
            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b>{" "}
                  <Link className="internal-link" to="/theme-talents">
                    Martial
                  </Link>{" "}
                </span>
              </li>
              <li>
                <span>
                  <b>Defense Bonus:</b> +2 to Might and Resolve
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Hit Points:</b> 10
                </span>
              </li>
              <li>
                <span>
                  <b>Recoveries:</b> 5
                </span>
              </li>
              <li>
                <span>
                  <b>Training:</b> All armor and weapons
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
                      blade, and a long ranged bow.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Fightng Style</h3>
            <p>
              You have mastered a certain way of fighting. Learn a{" "}
              <Link className="internal-link" to="/fighting-styles">
                fighting style
              </Link>{" "}
              .
            </p>
            <ul>
              <li>
                <span>
                  <i>Suggestion:</i> You learn the{" "}
                  <Link className="internal-link" to="/fighting-styles#archery">
                    archery
                  </Link>{" "}
                  fighting style and assisting shot technique.
                </span>
              </li>
            </ul>

            <h3 className="header">Commanding Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Commanding Attack"
              actType="Action"
              descriptor="As you attack, you urge your ally to seize the moment."
              frequency="At-will"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  , and choose an an ally within 1 zone. The chosen ally can{" "}
                  <Link
                    className="internal-link"
                    to="/combat-abilities#disengage"
                  >
                    disengage
                  </Link>
                  ,{" "}
                  <Link className="internal-link" to="/combat-abilities#move">
                    move
                  </Link>
                  , strike, or cast a tier 0 Battle spell as a reaction.
                </span>
              }
            />

            <h3 className="header">Inspiring Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Inspiring Attack"
              actType="Action"
              descriptor="As you attack, you urge your ally to seize the moment."
              frequency="Encounter"
              keywords="Escalation"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  , and choose an ally within 1 zone. The chosen ally can spend
                  a recovery, and they <ToolTip preset="heal" /> additional hit
                  points equal to your proficiency bonus.
                </span>
              }
            />

            <h3 className="header">Quick Aid</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Quick Aid"
              actType="Reaction"
              descriptor="Your encouraging words inspire an ally in their moment of need."
              frequency="At-will"
              keywords="Range"
              trigger={
                <span>
                  You see an ally within 1 zone make an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  or{" "}
                  <Link className="internal-link" to="/rules/combat#overcome">
                    overcome roll
                  </Link>
                  .
                </span>
              }
              effect={
                <span>
                  You{" "}
                  <Link className="internal-link" to="/combat-abilities#help">
                    help
                  </Link>{" "}
                  the ally, with the ally adding the bonus from help to the
                  triggering roll.
                </span>
              }
            />

            <h3 className="header">Commanding Presence</h3>
            <p>
              You gain the natural leader martial theme talent, but your bonus
              from the talent increases to{" "}
              <b>
                +2 <img className="icon" src={fortune} alt="fortune icon" />
              </b>
              .
            </p>

            <h3 className="header">Subclass</h3>
            <p>
              Choose the inspirer subclass, or another subclass of your choice.
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
            <h3 className="header">Momentous Start</h3>
            <p>
              You and your allies start with the{" "}
              <Link className="internal-link" to="/rules/combat#momentum">
                momentum die
              </Link>{" "}
              set to 1 after a{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                long rest
              </Link>
              .
            </p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Commander Subclasses</h1>
            <p>These are the subclass choices for the commander.</p>
            <h2>Inspirer</h2>
            <p>You motivate your allies to victory.</p>
            <h3 className="header">Uplifting Presence (1st-Level Feature)</h3>
            <p>
              While you are conscious, you and allies that start their turn
              within your zone gain{" "}
              <b>
                +1 <img className="icon" src={fortune} alt="fortune icon" />
              </b>{" "}
              to{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome rolls
              </Link>
              .
            </p>

            <h2>Tactician</h2>
            <p>
              You focus on clever tactics and battle stratagems to befuddle your
              foes.
            </p>
            <h3 className="header">Tactical Attack (1st-Level Feature)</h3>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              or use an ability that requires you to strike, you can choose an
              ally within 1 zone to strike instead.
            </p>

            <h2>Warlord</h2>
            <p>Your presence causes dread among your foes.</p>
            <h3 className="header">Fearful Presence (1st-Level Feature)</h3>
            <p>
              While you are conscious, enemies that make a roll with{" "}
              <Modifier type="mf" /> in your zone increase the number of{" "}
              <Modifier type="mf" /> by 1.{" "}
            </p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Commander Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>

            <h3 className="header">Debilitate Command</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Debilitate Command"
              actType="Action"
              descriptor="As you attack, you urge your ally to hinder a foe."
              frequency="At-will"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  , and choose an ally within 1 zone. The chosen ally can{" "}
                  <Link className="internal-link" to="/combat-abilities#grab">
                    grab
                  </Link>
                  ,{" "}
                  <Link className="internal-link" to="/combat-abilities#hinder">
                    hinder
                  </Link>
                  ,{" "}
                  <Link className="internal-link" to="/combat-abilities#shove">
                    shove
                  </Link>
                  , or{" "}
                  <Link className="internal-link" to="/combat-abilities#trip">
                    trip
                  </Link>{" "}
                  as a reaction.
                </span>
              }
            />

            <h3 className="header">Defend Command</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Defend Command"
              actType="Action"
              descriptor="As you attack, you push your ally to guard themselves."
              frequency="At-will"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  , and choose an ally within 1 zone. The chosen ally can{" "}
                  <Link className="internal-link" to="/combat-abilities#defend">
                    defend
                  </Link>{" "}
                  as a reaction.
                </span>
              }
            />

            <h3 className="header">Expanded Training</h3>
            <p>
              You learn a technique or{" "}
              <Link className="internal-link" to="/fighting-style">
                fighting style
              </Link>{" "}
              . You can take this class talent multiple times.
            </p>

            <h3 className="header">Expert Helper</h3>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#help">
                help
              </Link>{" "}
              an ally, the bonus increases to{" "}
              <b>
                +2 <img className="icon" src={fortune} alt="fortune icon" />
              </b>
              .
            </p>

            <h3 className="header">Greater Inspiration</h3>
            <p>
              When you use inspiring attack, the chosen ally can{" "}
              <Link className="internal-link" to="/combat-abilities#disengage">
                disengage
              </Link>
              ,
              <Link className="internal-link" to="/combat-abilities#move">
                move
              </Link>
              ,{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , or cast a tier 0 Battle spell as a free action.
            </p>

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Dread Presence</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> warlord subclass
            </p>
            <p>
              At the start of a combat encounter, choose a number of enemies
              that you can see equal to your tier. Targeted enemies become
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              until the end of their first turn.
            </p>

            <h3 className="header">Inspiring Presence</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> inspirer subclass
            </p>
            <p>
              At the start of a combat encounter, you all gain temporary hit
              points equal to your tier (scene ends).
            </p>

            <h3 className="header">Momentous Aggression</h3>
            <p>
              You and your allies add the{" "}
              <Link className="internal-link" to="/rules/combat#momentum">
                momentum die
              </Link>{" "}
              to damage dealt from an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>
              .
            </p>

            <h3 className="header">Tactical Presence</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> tactician subclass
            </p>
            <p>
              At the start of a combat encounter, choose an ally to{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              or cast a tier 0 Battle spell as a free action.
            </p>

            <h3 className="header">Uplifting Aid</h3>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#help">
                help
              </Link>{" "}
              an ally, they gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your tier (scene ends).
            </p>

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Constant Helper</h3>
            <p>You get a second reaction that you can only use to quick aid.</p>

            <h3 className="header">Tactical Stratagem</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> tactician subclass
            </p>
            <p>
              When you use inspiring attack, you and all allies within 1 zone
              can{" "}
              <Link className="internal-link" to="/combat-abilities#disengage">
                disengage
              </Link>{" "}
              or{" "}
              <Link className="internal-link" to="/combat-abilities#move">
                move
              </Link>{" "}
              as a free action.
            </p>

            <h3 className="header">Terrifying Attack</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> warlord subclass
            </p>
            <p>
              When you use inspiring attack, make an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              against the Resolve of each enemy within 1 zone. On a success, a
              target is{" "}
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (turn ends), or for the scene (scene ends) on a critical success.
            </p>

            <h3 className="header">Twin Command</h3>
            <p>
              When you use an action ability from this class that lets you
              target an ally, such as command attack, you can choose a second
              ally.
            </p>

            <h3 className="header">Uplifting Attack</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> inspirer subclass
            </p>
            <p>
              When you use inspiring attack, you and all allies within 1 zone
              gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your proficiency bonus (scene ends).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Commander;
