import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import Modifier from "../../components/Modifier";
import { Link } from "react-router-dom";

function Swordmage() {
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
    <div className="swordmage">
      <div className="swordmage-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Swordmage Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Swordmage Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Swordmage Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Swordmage</h1>
            <p>
              Swordmages are unique warriors that learn magic and how to wield
              weapons. Swordmages might be elite bodyguards, members of a mystic
              order, or magical soldiers. Play a swordmage if you want to blend
              magic with weapons to be an arcane combatant.
            </p>

            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b> Arcane
                </span>
              </li>
              <li>
                <span>
                  <b>Defense Bonus:</b> +2 to Evasion and Resolve
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
                  <b>Training:</b> Light armor and all weapons
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Equipment:</b> You gain one armor, one weapon, and
                  an implement.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You gain light armor, long ranged bow,
                      and a standard melee blade as your implement.
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
              <Link className="internal-link" to="/fighting-style">
                fighting style
              </Link>{" "}
              .
            </p>
            <ul>
              <li>
                <span>
                  <i>Suggestion:</i> You learn the{" "}
                  <Link className="internal-link" to="/fighting-style#skirmish">
                    skirmish
                  </Link>{" "}
                  fighting style and hit and run technique.
                </span>
              </li>
            </ul>

            <h3 className="header">Swordmage Magic</h3>
            <p>You channel elemental and battle magic through your weapon.</p>
            <ul>
              <li>
                <span>
                  <b>Mana:</b> 1, increasing to 3 at 5th level, and 5 at 8th
                  level
                </span>
              </li>
              <li>
                <span>
                  <b>Magic Tradition:</b> You learn a magic tradition from the
                  following list:{" "}
                  <Link className="internal-link" to="/battle-spells#air">
                    air
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#arcane">
                    arcane
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#earth">
                    earth
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#fire">
                    fire
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#ice">
                    ice
                  </Link>{" "}
                  ,{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#protection"
                  >
                    protection
                  </Link>{" "}
                  ,{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#teleportation"
                  >
                    teleportation
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#war">
                    war
                  </Link>{" "}
                  , or{" "}
                  <Link className="internal-link" to="/battle-spells#water">
                    water
                  </Link>{" "}
                  . You learn a battle spell from your chosen tradition.
                </span>
              </li>
              <li>
                <span>
                  <b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you
                  learn a battle spell or a magic tradition associated with your
                  subclass.
                </span>
              </li>
            </ul>

            <h3 className="header">Arcane Weapon</h3>
            <p>
              You have attuned yourself to a specific weapon that typically
              serves as your implement. Choose one weapon to be your arcane
              weapon that you can change during a{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                short rest
              </Link>
              . As a maneuver, you can{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              your arcane weapon to your hand if it is within 1 mile of you.
            </p>

            <h3 className="header">Enspell Weapon</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Enspell Weapon"
              actType="Maneuver"
              descriptor="You channel a spell into your blade to unleash as you swing."
              requirement="You’re wielding your arcane weapon."
              duration="End of your next turn"
              frequency="At-will"
              effect={
                <span>
                  You cast a battle spell that takes either a maneuver or
                  action, has a target, but the spell’s effect doesn’t happen
                  until your next{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>
                  . If you don’t strike before the duration of this ability,
                  then the spell’s magic fizzles out. If the chosen spell
                  requires an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>
                  , then use the attack roll of your strike. If the spell
                  targets a creature, the target is the target of your strike,
                  or one of the targeted creatures if the spell targets multiple
                  creatures. If the spell targets a zone, the zone of your
                  target is the targeted zone, or one of the targeted zones if
                  the spell targets multiple zones. If the spell targets a zone
                  border, then choose a zone border of your target’s zone.
                </span>
              }
            />

            <h3 className="header">Subclass</h3>
            <p>
              Choose the elemental knight subclass, or another subclass of your
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
            <h3 className="header">Dimensional Enspell</h3>
            <p>
              You can siphon some of your spell energy to travel across the
              battlefield. When you enspell weapon with a tier 1 or higher
              battle spell, you can{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              up to 1 zone.
            </p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Swordmage Subclasses</h1>
            <p>These are the subclass choices for the swordmage.</p>
            <h2>Elemental Knight</h2>
            <p>
              You manipulate destructive elemental magic from your weapon to
              wreak havoc.
            </p>
            <h3 className="header">Elemental Enspell (1st-Level Feature)</h3>
            <p>
              You siphon energy from a chosen elemental realm to empower your
              weapon. Choose one damage type from cold, fire, lightning, or
              physical. When you use enspell weapon, your next{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              deals 1 additional damage per your tier of the chosen damage type.
            </p>

            <h2>Aegis</h2>
            <p>
              You focus on protecting others from harm by channeling abjuration
              magic through your weapon.
            </p>
            <h3 className="header">Aegis Shield</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Aegis Shield"
              actType="Reaction"
              descriptor="You impose a magical shield to deflect incoming harm against your friend."
              trigger={
                <span>
                  You see a creature make an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against an ally within 1 zone
                </span>
              }
              keywords="Magical, Range"
              frequency="At-will"
              effect="Triggering attack roll takes +1 misfortune"
            />

            <h2>Mage Hunter</h2>
            <p>
              You specialize in using magical fighting skills to hunt down rogue
              spellcasters and other supernatural threats.
            </p>
            <h3 className="header">Dimensional Interrupt</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dimensional Interrupt"
              actType="Reaction"
              descriptor="As you spot an enemy spellcaster using magic, you teleport to disrupt them."
              trigger="You see a creature within 1 zone use or focus on a magical ability"
              keywords="Magical, Range"
              frequency="At-will"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>{" "}
                  the triggering creature, and you can{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#special-movement"
                  >
                    teleport
                  </Link>{" "}
                  to become{" "}
                  <Link className="internal-link" to="/rules/combat#engaged">
                    engaged
                  </Link>{" "}
                  with them before your strike
                </span>
              }
            />
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Swordmage Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>

            <h3 className="header">Expanded Swordmage Magic</h3>
            <p>
              Learn a battle spell or{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              magic tradition from one listed in swordmage magic. You can take
              this class talent multiple times.
            </p>

            <h3 className="header">Expanded Training</h3>
            <p>
              You learn a technique or{" "}
              <Link className="internal-link" to="/fighting-style">
                fighting style
              </Link>{" "}
              . You can take this class talent multiple times.
            </p>

            <h3 className="header">Focused Enspell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Focused Enspell"
              actType="Maneuver"
              descriptor="You maintain concentration on your spell as you channel new magic into your weapon."
              frequency="At-will"
              effect="Focus on a magical ability, then enspell weapon"
            />

            <h3 className="header">Safe Enspell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Safe Enspell"
              actType="Reaction"
              descriptor="You maintain concentration on your spell as you channel new magic into your weapon."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You enspell weapon with a spell that targets an entire zone or zone border"
              effect="Choose a number of creatures equal to your proficiency bonus to be unaffected by the triggering spell"
            />

            <h3 className="header">Studious Enspell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Studious Enspell"
              actType="Maneuver"
              descriptor="As you channel your weapon with magic, you survey the battlefield."
              frequency="At-will"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#study">
                    Study
                  </Link>{" "}
                  then enspell weapon
                </span>
              }
            />

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Dimensional Lunge</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dimensional Lunge"
              actType="Action"
              descriptor="You slash your weapon through a dimensional portal to reach a far enemy."
              frequency="At-will"
              keywords="Magical, Range"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>
                  , but your weapon's range extends by +1 zone
                </span>
              }
            />

            <h3 className="header">Dimensional Switch</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> aegis subclass
            </p>
            <p>
              When you use aegis shield and after the result of the{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>
              , you can magically swap places with your ally if they are
              willing.
            </p>

            <h3 className="header">Greater Elemental Enspell</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> elemental knight subclass
            </p>
            <p>
              When you get critical success on a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              empowered by elemental enspell, the target takes 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              damage per your tier of the damage type chosen for elemental
              enspell.
            </p>

            <h3 className="header">Greater Interrupt</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> mage hunter subclass
            </p>
            <p>
              When you use dimensional interrupt, on a critical successful
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , your target’s magical ability has no effect or the ability
              they’re focusing on ends.
            </p>

            <h3 className="header">Spell Parry</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Spell Parry"
              actType="Reaction"
              descriptor="You slash through incoming magic, weakening it but also siphoning the magic into your own weapon."
              frequency="At-will"
              trigger={
                <span>
                  You see a creature within 1 zone make an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against you from a magical ability
                </span>
              }
              keywords="Magical, Range"
              effect={
                <span>
                  Triggering attack roll against you takes{" "}
                  <Modifier type="mf" count="1" />, and your next{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>{" "}
                  deals 1 additional arcane damage per your tier (turn ends)
                </span>
              }
            />

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Elemental Retaliation</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> elemental knight subclass
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Elemental Retaliation"
              actType="Reaction"
              descriptor="You unleash elemental fury at an attacker."
              frequency="At-will"
              trigger="You take damage from a creature within your zone"
              keywords="Magical, Range"
              effect="Triggering creature takes 1 damage per your tier of the damage type you chose for elemental enspell."
            />

            <h3 className="header">Frequent Interrupt</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> mage hunter subclass
            </p>
            <p>
              You gain a second reaction you can use only for dimensional
              interrupt.
            </p>

            <h3 className="header">Greater Dimensional Enspell</h3>
            <p>
              For dimensional enspell, the teleportation range changes to up to
              1 zone per spell tier, or within your zone for a tier 0 battle
              spell.
            </p>

            <h3 className="header">Rapid Aegis</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> aegis subclass
            </p>
            <p>You gain a second reaction you can use only for aegis shield.</p>

            <h3 className="header">Supreme Swordmage</h3>
            <p>
              You are permanently{" "}
              <Link className="internal-link" to="/conditions#hastened">
                hastened
              </Link>
              , but you can only use the extra maneuver to enspell weapon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Swordmage;
