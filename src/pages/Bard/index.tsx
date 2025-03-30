import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import fortune from "../../assets/fortune-icon-v2.png";
import misfortune from "../../assets/misfortune-icon-v2.png";
import ClassHeader from "../../components/ClassHeader";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";

function Bard() {
  const [isDetails, setDetails] = useState(true);
  const [isSubclasses, setSubclasses] = useState(false);
  const [isTalents, setTalents] = useState(false);
  const [isPerformances, setPerformances] = useState(false);

  const toggleDetails = () => {
    if (!isDetails) {
      setDetails(true);
      setSubclasses(false);
      setTalents(false);
      setPerformances(false);
    }
  };

  const toggleSubclasses = () => {
    if (!isSubclasses) {
      setSubclasses(true);
      setDetails(false);
      setTalents(false);
      setPerformances(false);
    }
  };

  const toggleTalents = () => {
    if (!isTalents) {
      setTalents(true);
      setSubclasses(false);
      setDetails(false);
      setPerformances(false);
    }
  };

  const togglePerformances = () => {
    if (!isPerformances) {
      setPerformances(true);
      setTalents(false);
      setSubclasses(false);
      setDetails(false);
    }
  };

  return (
    <div className="bard">
      <div className="bard-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Bard Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Bard Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Bard Talents
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={togglePerformances}
            className="tab-items__tab"
            data-selected={isPerformances}
          >
            Bardic Performances
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Bard</h1>
            <p>
              Bards are performers that weave magic with words, rhythm, and art
              to aid allies, bewitch foes, and create dazzling illusions. Bards
              might be a traveling artist, a scoundrel that's picked up a few
              magical tricks, or an adventuring scholar that’s unlocked the
              magic of words. Play a bard if you create magical performances.
            </p>
            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b>{" "}
                  <Link className="internal-link" to="/theme-talents">
                    Cunning
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <b>Defense Bonus:</b> +4 to Resolve
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Hit Points:</b> 8
                </span>
              </li>
              <li>
                <span>
                  <b>Recoveries:</b> 4
                </span>
              </li>
              <li>
                <span>
                  <b>Training:</b> None
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Equipment:</b> You gain an implement.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You gain a magical instrument as your
                      implement.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Bardic Magic</h3>
            <p>You weave magic through words, dance, or music.</p>
            <ul>
              <li>
                <span>
                  <b>Mana:</b> 2, increasing to 5 at 5th level, and 8 at 8th
                  level
                </span>
              </li>
              <li>
                <span>
                  <b>Magic Tradition:</b> You learn two magic traditions from
                  the following list:{" "}
                  <Link className="internal-link" to="/battle-spells#arcane">
                    arcane
                  </Link>
                  ,{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#enchantment"
                  >
                    enchantment
                  </Link>
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#illusion">
                    illusion
                  </Link>
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#life">
                    life
                  </Link>
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#nature">
                    nature
                  </Link>
                  ,{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#protection"
                  >
                    protection
                  </Link>
                  ,{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#teleportation"
                  >
                    teleportation
                  </Link>
                  , or{" "}
                  <Link className="internal-link" to="/battle-spells#time">
                    time
                  </Link>
                  . You learn a battle spell from each of your chosen
                  traditions.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You learn the enchantment and life
                      magic traditions. From the enchantment tradition, you
                      learn the disrupt thoughts and charm battle spells. From
                      the life tradition, you learn the stabilize and mass heal
                      battle spells.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you
                  learn a battle spell or a magic tradition from the previous
                  list.
                </span>
              </li>
            </ul>

            <h3 className="header">Bardic Performance</h3>
            <p>
              You weave music, art, or dance to magically inspire allies or
              disrupt your foes with demonstrations called bardic performances.
              You learn the performance of courage bardic performance.
            </p>
            <AbilityCard
              name="Bardic Performance"
              actType="Maneuver"
              descriptor="With an inspiring performance, your allies courageously push back against your enemies."
              frequency="At-will"
              duration="Start of your next turn"
              effect={
                <span>
                  <span>
                    Targets gain <Modifier type="f" count="1" /> to{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack rolls
                    </Link>{" "}
                  </span>
                </span>
              }
            />

            <h3 className="header">Subclass</h3>
            <p>
              Choose the muse of drama subclass, or another subclass of your
              choice. At 1st level, you gain features from your chosen subclass.
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
            <h3 className="header">Expanded Performances</h3>
            <p>You learn another bardic performance.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Bard Subclasses</h1>
            <p>These are the subclass choices for the bard.</p>
            <h2>Muse of Drama</h2>
            <p>
              Your creativity gains inspiration from the magic of narration and
              storytelling. Your performances interject thrilling heroic
              moments, but not without the risk of danger.
            </p>
            <h3 className="header">Plot Twist (1st-Level Feature)</h3>
            <p>
              You know how to raise the stakes and create a good story. You can{" "}
              <Link className="internal-link" to="/rules/skills#tempt-fate">
                tempt fate
              </Link>{" "}
              on any roll, and when you or an ally tempt fate, the bonus
              increases by{" "}
              <b>
                +1 <img className="icon" src={fortune} alt="fortune icon" />
              </b>
              .
            </p>

            <h2>Muse of Lore</h2>
            <p>
              Unlike other bards, you focus your creativity on the history and
              the lore of the world around you, and use it to weave grand
              performances.
            </p>
            <h3 className="header">Student of Lore (1st-Level Feature)</h3>
            <p>
              You gain a knack related to a knowledgeable topic such as ancient
              history. You also gain the following ability:
            </p>
            <AbilityCard
              name="Lore Drop"
              actType="Reaction"
              descriptor="You weave together a tale of knowledge."
              frequency="At-will"
              trigger="You use a bardic performance"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#study">
                    study
                  </Link>
                </span>
              }
            />

            <h2>Muse of Valor</h2>
            <p>
              You find artistic inspiration from the sounds and thrill of
              battle.
            </p>
            <h3 className="header">Bardic Warrior (1st-Level Feature)</h3>
            <p>
              You wield a weapon as well as you weave magic. You gain the
              following benefits:
            </p>
            <ul>
              <li>
                <span>
                  Your starting hit points increase to 10, and your recoveries
                  increase to 5.
                </span>
              </li>
              <li>
                <span>
                  You gain training in light armor, shields, and all weapons.
                </span>
              </li>
              <li>
                <span>
                  You gain one armor, one weapon, and either another weapon or
                  shield from your starting equipment.{" "}
                </span>
              </li>
            </ul>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Bard Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Expanded Bardic Magic</h3>
            <p>
              Learn a battle spell or{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              from one listed in bardic magic. You can take this class talent
              multiple times.
            </p>

            <h3 className="header">Focused Performance</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Focused Performance"
              actType="Reaction"
              descriptor="You can maintain your mental focus as you perform."
              frequency="At-will"
              trigger="You use a bardic performance"
              effect="Focus on an ability"
            />

            <h3 className="header">Inspiring Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Inspiring Spell"
              actType="Reaction"
              descriptor="You weave together a tale of knowledge."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a battle spell"
              effect={
                <span>
                  Choose one creature within 1 zone to gain{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#temporary-hit-points"
                  >
                    temporary hit points
                  </Link>{" "}
                  equal to the triggering spell tier (scene ends)
                </span>
              }
            />

            <h3 className="header">Many Peformances</h3>
            <p>
              Learn a new bardic performance. You can take this class talent
              multiple times.
            </p>

            <h3 className="header">Running Performance</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Running Performance"
              actType="Reaction"
              descriptor="You have mastered the art of moving and performing."
              frequency="At-will"
              trigger="You use a bardic performance"
              effect={
                <span>
                  <Link
                    className="internal-link"
                    to="/combat-abilities#disengage"
                  >
                    Disengage
                  </Link>{" "}
                  or{" "}
                  <Link className="internal-link" to="/combat-abilities#move">
                    move
                  </Link>
                </span>
              }
            />

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Arcane Secrets</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> muse of lore subclass
            </p>
            <p>
              You learn a battle spell from any{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              , even if you don’t know the tradition. You can take this class
              talent multiple times.
            </p>

            <h3 className="header">Distant Performance</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Distant Performance"
              actType="Reaction"
              descriptor="You amplify your performance to catch further away crowds."
              frequency="Encounter"
              trigger="You use a bardic performance"
              effect="Extend the range of targets to within 1 zone"
            />

            <h3 className="header">Extend Performance</h3>
            <p>
              When you use a bardic performance, you can spend mana equal to
              your tier to increase the duration to last the scene. If the
              bardic performance affects enemies, then enemies make overcome
              rolls at the end of their turns to end the performance’s effect on
              themselves.
            </p>

            <h3 className="header">Inspiring Drama</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> muse of drama subclass
            </p>
            <p>
              When you{" "}
              <Link className="internal-link" to="/rules/skills#tempt-fate">
                tempt fate
              </Link>{" "}
              , choose an ally within 1 zone to gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your tier (scene ends).
            </p>

            <h3 className="header">Violent Rewards</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> muse of valor subclass
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Immediate Spell"
              actType="Reaction"
              descriptor="You reward your newest muse."
              frequency="At-will"
              keywords="Magical"
              trigger="You see a creature within 1 zone get a critical success on an attack roll"
              effect={
                <span>
                  Triggering creature gains{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#temporary-hit-points"
                  >
                    temporary hit points
                  </Link>{" "}
                  equal to your proficiency bonus (scene ends)
                </span>
              }
            />

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Bloodlust Performance</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> muse of valor subclass
            </p>
            <p>
              When you use a bardic performance, you and allies within the
              target range can add your tier to initial damage from{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack rolls
              </Link>{" "}
              until the start of your next turn.
            </p>

            <h3 className="header">Constant Performer</h3>
            <p>
              On your turn, you can use a bardic performance as a free action,
              but only once per turn.
            </p>

            <h3 className="header">Greater Performance</h3>
            <p>
              Any bonus granted by a bardic performance increases to{" "}
              <b>
                +2 <img className="icon" src={fortune} alt="fortune icon" />
              </b>
              , and any penalty from a bardic performance increases to{" "}
              <b>
                +2{" "}
                <img className="icon" src={misfortune} alt="misfortune icon" />
              </b>
              . The{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              gained by performance of restoration equals your proficiency
              bonus, and the speed boost gained by performance of alacrity
              increases to +2.
            </p>

            <h3 className="header">Ignore Fate</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> muse of drama subclass
            </p>
            <p>
              When you{" "}
              <Link className="internal-link" to="/rules/skills#tempt-fate">
                tempt fate
              </Link>{" "}
              in combat, make an{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome roll
              </Link>
              . On a success, you ignore the extra complication from tempt fate.
            </p>

            <h3 className="header">Loremaster</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> muse of lore subclass
            </p>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#study">
                study
              </Link>
              , you can target a number of targets equal to your tier.
            </p>
          </div>
        )}

        {isPerformances && (
          <div>
            <h1>Bardic Performances</h1>
            <p>
              When you learn a bardic performance, you choose from the following
              options:
            </p>

            <div className="performances">
              <AbilityCard
                name="Performance of Alacrity"
                actType="Maneuver"
                descriptor="With a hurried performance, you urge your allies to double time it."
                frequency="At-will"
                keywords="Magical"
                duration="Start of your next turn"
                target="You and all allies within your zone"
                effect="Targets’ speeds increase by +1"
              />

              <AbilityCard
                name="Performance of Dread"
                actType="Maneuver"
                descriptor="With an intimidating performance, you cause despair among your foes."
                frequency="At-will"
                keywords="Magical"
                target="All enemies within your zone"
                effect="Hindered (turn ends)"
              />

              <AbilityCard
                name="Performance of Discord"
                actType="Maneuver"
                descriptor="With a chaotic performance, you cause foes' feet to move erratically and slow them down."
                frequency="At-will"
                keywords="Magical"
                target="All enemies within your zone"
                effect={<span>Targets' speeds are halved (turn ends)</span>}
              />

              <AbilityCard
                name="Performance of Harmony"
                actType="Maneuver"
                descriptor="With a harmonious performance, you call upon your allies to find clarity."
                frequency="At-will"
                keywords="Magical"
                duration="Start of your next turn"
                target="You and all allies within your zone"
                effect={
                  <span>
                    Targets gain <Modifier type="f" count="1" /> to{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome rolls
                    </Link>
                    .
                  </span>
                }
              />

              <AbilityCard
                name="Performance of Restoration"
                actType="Maneuver"
                descriptor="With an uplifting performance, you soothe your allies."
                frequency="At-will"
                keywords="Magical"
                duration="Start of your next turn"
                target="You and all allies within your zone"
                effect="Targets gain 1 temporary hit point per your tier"
              />

              <AbilityCard
                name="Performance of Rock"
                actType="Maneuver"
                descriptor="With a loud song or echoing instrumental beat, you blast nearby foes with sonic force."
                frequency="At-will"
                keywords="Magical"
                target="1d4+1 enemies within your zone"
                defense="MGT"
                damage="1 physical damage per your tier"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bard;
