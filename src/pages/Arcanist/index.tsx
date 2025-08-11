import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";

function Arcanist() {
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
    <div className="arcanist">
      <div className="arcanist-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Arcanist Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Arcanist Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Arcanist Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Arcanist</h1>
            <p>
              Arcanists focus on manipulating the arcane, the purest form of
              magic. Play an arcanist if you want to cast diverse magic in
              battle.
            </p>
            <h2>Arcanist Origins</h2>
            <p>Here are some suggestions for the origins of your magic:</p>
            <ul>
              <li>
                <span>
                  <b>Gifted:</b> You made a pact with a powerful entity for your
                  arcane magic, or perhaps it was gifted upon you as a reward.
                </span>
              </li>
              <li>
                <span>
                  <b>Innate:</b> Thanks to a magical bloodline, experimentation,
                  or arcane exposure, magic flows through your veins and is a
                  part of you.
                </span>
              </li>
              <li>
                <span>
                  <b>Learned:</b> Through intense study and preparation, you
                  have learned the secrets of arcane magic.
                </span>
              </li>
            </ul>
            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b>{" "}
                  <Link className="internal-link" to="/theme-talents">
                    Arcane
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <b>Defense Bonus:</b> +1 to Spirit
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Hit Points:</b> 8
                </span>
              </li>
              <li>
                <span>
                  <b>Recoveries:</b> 6
                </span>
              </li>
              <li>
                <span>
                  <b>Training:</b> Mystic robes
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Equipment:</b> You gain mystic robes and an
                  implement.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You gain mystic robes and a wand as
                      your implement.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Arcanist Magic</h3>
            <p>You begin untapping the power of arcane magic.</p>
            <ul>
              <li>
                <span>
                  <b>Mana:</b> 2, increasing to 5 at 5th level, and 8 at 8th
                  level
                </span>
              </li>
              <li>
                <span>
                  <b>Magic Tradition:</b> You learn the{" "}
                  <Link className="internal-link" to="/battle-spells#arcane">
                    arcane
                  </Link>{" "}
                  tradition and another magic tradition, except for eldritch,
                  holy, nature, or unholy. You also learn a tier 1 battle spell
                  from each tradition.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You learn the arcane and{" "}
                      <Link
                        className="internal-link"
                        to="/battle-spells#protection"
                      >
                        protection
                      </Link>{" "}
                      traditions. From the arcane tradition, you learn the
                      arcane dart and arcane barrage battle spells, and from the
                      protection tradition you learn quick ward and greater ward
                      battle spells.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you
                  learn a battle spell or a magic tradition, except for
                  eldritch, holy, nature, or unholy.
                </span>
              </li>
            </ul>

            <h3 className="header">High Magic</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="High Magic"
              actType="Free"
              descriptor="You have learned to command greater spells."
              frequency="Encounter"
              trigger="You cast a battle spell"
              effect="Treat the spell’s tier as one higher"
            />

            <h3 className="header">Subclass</h3>
            <p>
              Choose the wizard subclass, or another subclass of your choice. At
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
            <h3 className="header">Countermagic</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Countermagic"
              actType="Reaction"
              descriptor="You utilize your knowledge of the arcane to disrupt another caster’s magic."
              frequency="At-will"
              keywords="Magical, Range"
              trigger="You see a creature within 1 zone use a magical ability"
              effect={
                <span>
                  <span>
                    The ability's{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    takes <Modifier type="mf" count="1" />.
                  </span>
                </span>
              }
            />
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Arcanist Subclasses</h1>
            <p>These are the subclass choices for the arcanist.</p>
            <h2>Wizard</h2>
            <p>
              Wizards take a studious approach in learning all forms of magic.
            </p>
            <h3 className="header">Studious Spell (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Studious Spell"
              actType="Reaction"
              descriptor="You analyze your surroundings as you unleash your magic."
              frequency="At-will"
              trigger="You cast a battle spell"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#study">
                    study
                  </Link>
                </span>
              }
            />

            <h2>Sorcerer</h2>
            <p>
              Sorcerers imbue their bodies with arcane energy, becoming one with
              magic. Some are born this way, while others achieve this state
              through dangerous magical experiments.
            </p>
            <h3 className="header">Unleash Arcane (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Unleash Arcane"
              actType="Maneuver"
              descriptor="You enter an unstable state of heightened magic that leaves your physical body exposed"
              frequency="At-will"
              keywords="Magical"
              duration="Scene ends"
              effect={
                <span>
                  <span>You gain the following:</span>
                  <ul>
                    <li>
                      <span>
                        <Modifier type="f" count="1" /> to{" "}
                        <Link
                          className="internal-link"
                          to="/rules/combat#attack-roll"
                        >
                          attack rolls
                        </Link>{" "}
                        with magical abilities
                      </span>
                    </li>
                    <li>
                      <span>
                        <Link
                          className="internal-link"
                          to="/rules/combat#resistances-and-weaknesses"
                        >
                          Resistance
                        </Link>{" "}
                        to arcane damage
                      </span>
                    </li>
                    <li>
                      <span>
                        You are{" "}
                        <Link
                          className="internal-link"
                          to="/conditions#vulnerable"
                        >
                          vulnerable
                        </Link>
                      </span>
                    </li>
                  </ul>
                </span>
              }
            />

            <h2>Warmage</h2>
            <p>
              You specialize in casting from the frontlines of battle, using
              magic to bolster your defenses and destruction.
            </p>
            <h3 className="header">War Magic (1st-Level Feature)</h3>
            <p>
              While wearing mystic robes, you gain +1 to Guard. Also, when you
              deal damage on an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              with a magical ability, you deal additional damage equal to your
              tier.
            </p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Arcanist Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Expanded Arcanist Magic</h3>
            <p>
              Learn a battle spell or{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              from one listed in arcanist magic. You can take this class talent
              multiple times.
            </p>

            <h3 className="header">Far Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Far Spell"
              actType="Reaction"
              descriptor="You extend your magic further than possible."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a battle spell that targets a creature or zone"
              effect="For a range spell, increase the range by 1 zone, or for a melee spell, you can instead target a creature within your zone."
            />

            <h3 className="header">Powerful Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Powerful Spell"
              actType="Reaction"
              descriptor="You amplify your dangerous magic."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a tier 1+ battle spell that deals initial damage"
              effect="Increase the triggering spell’s initial damage by the spell tier."
            />

            <h3 className="header">Safe Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Safe Spell"
              actType="Reaction"
              descriptor="You shield your allies from your magic."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a battle spell that targets an entire zone or zone border"
              effect="Choose a number of creatures equal to your proficiency bonus to be unaffected by the triggering spell."
            />

            <h3 className="header">Substitute Spell</h3>
            <p>
              During a{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                short rest
              </Link>
              , you can replace one of your known battle spells with another
              battle spell of the same tier and from the same{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>
              .
            </p>

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Advanced Learning</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> wizard subclass
            </p>
            <p>
              You learn a battle spell from one of your known{" "}
              <Link className="internal-link" to="/battle-spells">
                magic traditions
              </Link>{" "}
              of a spell tier no higher than your tier. Make this choice again.
            </p>

            <h3 className="header">Arcane Vitality</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> sorcerer subclass
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Arcane Vitality"
              actType="Free"
              descriptor="You transmute some of your life force into magical essence."
              frequency="Encounter"
              keywords="Magical"
              effect="Spend a recovery, but instead of regaining hit points, you regain mana equal to your tier."
            />

            <h3 className="header">Effortless Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Effortless Spell"
              actType="Reaction"
              descriptor="With little strain, you cast a familiar spell."
              frequency="Encounter"
              keywords="Spellshape"
              trigger="You cast a tier 1+ battle spell"
              effect="You don’t spend mana on the triggering spell."
            />

            <h3 className="header">Magic Surge</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> warmage subclass
            </p>
            <p>
              When you use high magic, arcane energy leaps out from you at a
              number of creatures equal to the spell’s tier within 1 zone.
              Target creatures take arcane damage equal to the spell’s tier.
            </p>

            <h3 className="header">Immediate Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Immediate Spell"
              actType="Reaction"
              descriptor="With great effort, you quickly cast a spell."
              frequency="Encounter"
              keywords="Spellshape"
              trigger="You cast a battle spell that takes an action"
              effect="You can instead use a maneuver to cast the triggering spell"
            />

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">All Knowing</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> wizard subclass
            </p>
            <p>
              On your turn, you can{" "}
              <Link className="internal-link" to="/combat-abilities#study">
                study
              </Link>{" "}
              as a free action, but only once per turn.
            </p>

            <h3 className="header">Arcane Ascension</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> sorcerer subclass
            </p>
            <p>
              During unleash arcane, you gain a fly speed equal to your land
              speed and when you start your turn without mana, you regain 2
              mana.
            </p>

            <h3 className="header">Master Arcanist</h3>
            <p>
              You gain a second reaction that you can only use on features from
              this class such as countermagic.
            </p>

            <h3 className="header">Overpower Magic</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> warmage subclass
            </p>
            <p>All your magical abilities ignore damage resistances.</p>

            <h3 className="header">Unparalleled Magic</h3>
            <p>
              You can use high magic a second time per{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                short rest
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Arcanist;
