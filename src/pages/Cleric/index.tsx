import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import fortune from "../../assets/fortune-icon-v2.png";
import ClassHeader from "../../components/ClassHeader";
import { Link } from "react-router-dom";

function Cleric() {
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
    <div className="cleric">
      <div className="cleric-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Cleric Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Cleric Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Cleric Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Cleric</h1>
            <p>
              Clerics channel the magic of the gods to help their allies and
              banish their enemies. Play a cleric if you want to channel divine
              magic to protect your allies and bring wrath upon your foes.
            </p>
            <h2>Cleric Origins</h2>
            <p>Here are some suggestions for the origins of your magic:</p>
            <ul>
              <li>
                <span>
                  <b>Devotion:</b> Through prayer and belief to a deity or
                  higher purpose, you’ve been rewarded with divine magic.
                </span>
              </li>
              <li>
                <span>
                  <b>Pact:</b> You made a pact with a powerful entity for your
                  divine magic, such an angel or fiend.
                </span>
              </li>
              <li>
                <span>
                  <b>Innate:</b> Thanks to a blessed bloodline, experimentation,
                  or divine exposure, magic flows through your veins and is a
                  part of you.
                </span>
              </li>
            </ul>
            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b>{" "}
                  <Link className="internal-link" to="/theme-talents">
                    Divine
                  </Link>{" "}
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
                      <i>Suggestion:</i> You gain a holy symbol as your
                      implement.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Divine Origin</h3>
            <p>
              All clerics receive their magic from the divine, usually deities,
              but others by belief in an important cause or morality. The origin
              of your divine magic influences what magic you can learn. Work
              with your GM to determine the source of your divine power, and
              pick three{" "}
              <Link className="internal-link" to="/battle-spells">
                magic traditions
              </Link>{" "}
              associated with your source. If unsure, here are some examples of
              deities you can use:
            </p>
            <h4>Deity Example Table</h4>
            <table>
              <thead>
                <tr>
                  <th>Deity</th>
                  <th>Domains</th>
                  <th>Symbol</th>
                  <th>Magic Traditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apophis, the Destroyer</td>
                  <td>Destruction, Domination, Pragmatism, War</td>
                  <td>Bloody, armored dragon</td>
                  <td>death, fire, war</td>
                </tr>
                <tr>
                  <td>Azarith, the Emerald Dragon</td>
                  <td>Earth, Nature, Renewal, Wildlife</td>
                  <td>Lush tree in grassy meadow</td>
                  <td>earth, life, nature </td>
                </tr>
                <tr>
                  <td>Chronopia, the Time Dragon</td>
                  <td>Fate, Knowledge, Magic, Water</td>
                  <td>Eye with a hourglass as an iris</td>
                  <td>arcane, time, water</td>
                </tr>
                <tr>
                  <td>Fornaxis, the Forge Dragon</td>
                  <td>Creation, Fire, Invention, Trade</td>
                  <td>Flaming forge on top of a pile of coins</td>
                  <td>earth, fire, life</td>
                </tr>
                <tr>
                  <td>Nivera, the Laughing Dragon</td>
                  <td>Freedom, Luck, Travel</td>
                  <td>Winding road under a clear sky</td>
                  <td>air, illusion, teleportation</td>
                </tr>
                <tr>
                  <td>Solarin, the Sun Dragon</td>
                  <td>Civilization, Idealism, Renewal, Sun</td>
                  <td>Blazing sun behind a golden dragon scale</td>
                  <td>light, life, protection</td>
                </tr>
                <tr>
                  <td>Typhora, Mother of Dreams</td>
                  <td>Death, Dreams, Nighttime, Secrecy</td>
                  <td>Tree under the moon</td>
                  <td>death, enchantment, shadow</td>
                </tr>
              </tbody>
            </table>

            <h3 className="header" style={{ marginTop: "16px" }}>
              Cleric Magic
            </h3>
            <p>You begin channeling the power of divine magic.</p>
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
                  <Link className="internal-link" to="/battle-spells#holy">
                    holy
                  </Link>{" "}
                  or{" "}
                  <Link className="internal-link" to="/battle-spells#unholy">
                    unholy
                  </Link>{" "}
                  tradition, and another{" "}
                  <Link className="internal-link" to="/battle-spells">
                    magic tradition
                  </Link>{" "}
                  that is appropriate to your faith. For example, a cleric of a
                  fire god might learn the fire tradition. You learn a battle
                  spell from each chosen tradition.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You learn the holy and{" "}
                      <Link className="internal-link" to="/battle-spells#life">
                        life
                      </Link>{" "}
                      traditions. From the holy tradition, you learn the sacred
                      bolt and boon battle spells, and from the life tradition
                      you learn stabilize and mass heal battle spells.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you
                  learn a battle spell or a magic tradition associated with your
                  faith.
                </span>
              </li>
            </ul>

            <h3 className="header">Prayer of Healing</h3>
            <p>
              You learn the{" "}
              <Link
                className="internal-link"
                to="/battle-spells#life-quick-heal"
              >
                quick heal
              </Link>{" "}
              battle spell even if you don’t know the life magic tradition. Once
              per short rest, you can cast this spell at your highest spell tier
              without spending mana.
            </p>

            <h3 className="header">Subclass</h3>
            <p>
              Choose the shepherd subclass, or another subclass of your choice.
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
            <h3 className="header">Opening Prayer</h3>
            <p>
              At the start of combat, choose one creature to gain{" "}
              <b>
                +1 <img className="icon" src={fortune} alt="fortune icon" />
              </b>{" "}
              to all rolls until the end of their first turn.
            </p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Cleric Subclasses</h1>
            <p>These are the subclass choices for the arcanist.</p>
            <h2>Shepherd</h2>
            <p>
              You focus your divine powers to nourish and support the faithful.
            </p>
            <h3 className="header">Divine Inspiration (1st-Level Feature)</h3>
            <p>
              When you target an ally with a tier 1 or higher battle spell, they
              gain temporary hit points equal to double the spell tier (scene
              ends).
            </p>

            <h2>Champion</h2>
            <p>You emphasize martial prowess to serve a higher purpose.</p>
            <h3 className="header">Sacred Armaments (1st-Level Feature)</h3>
            <p>You are trained for battle. You gain the following ability:</p>
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

            <h2>Invoker</h2>
            <p>You bring down the wrath of your deity upon your foes.</p>
            <h3 className="header">Divine Wrath (1st-Level Feature)</h3>
            <p>
              When you deal damage on an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              with a magical ability, you deal additional damage equal to your
              tier. You also gain resistance equal to your tier to a damage type
              appropriate to your deity.
            </p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Cleric Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Cleansing Prayer</h3>
            <p>
              When you cast{" "}
              <Link
                className="internal-link"
                to="/battle-spells#life-quick-heal"
              >
                quick heal
              </Link>{" "}
              , the target can make an{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome roll
              </Link>{" "}
              against an effect.
            </p>

            <h3 className="header">Expanded Cleric Magic</h3>
            <p>
              Learn a battle spell or{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              related to your faith. You can take this class talent multiple
              times.
            </p>

            <h3 className="header">Guiding Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Guiding Spell"
              actType="Reaction"
              descriptor="You bless an ally as you use magic."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a battle spell"
              effect=" Choose a creature within your zone to gain +1 fortune on their next roll before the end of their next turn."
            />

            <h3 className="header">Sanctified Energy</h3>
            <p>
              Choose a damage type associated with your deity, such as lightning
              for a storm god. When you deal holy or unholy damage from a
              magical ability, you can change the damage to the chosen damage
              type and the ability gains the damage type’s keyword. You also
              gain resistance to the chosen damage type.
            </p>

            <h3 className="header">Vitality Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Vitality Spell"
              actType="Reaction"
              descriptor="Your magic better heals an ally’s wounds."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a battle spell that heals a creature"
              effect="Choose one target of the spell to regain additional hit points equal to your proficiency bonus."
            />

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Invigorating Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Invigorating Spell"
              actType="Reaction"
              descriptor="As you wield divine magic, you bestow a blessing upon an ally."
              frequency="Encounter"
              keywords="Spellshape"
              trigger="You cast a battle spell"
              effect="Choose a creature within 1 zone to gain temporary hit points equal to double the triggering spell tier (1 for tier 0 spell) for the scene."
            />

            <h3 className="header">Mass Inspiration</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> Shepherd subclass
            </p>
            <p>
              When you use divine inspiration, you can choose a second creature
              within 1 zone that’s not the target of your spell to gain the same
              temporary hit points.
            </p>

            <h3 className="header">Purifying Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Purifying Spell"
              actType="Reaction"
              descriptor="You cleanse an ally of debilitations with a spell."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a battle spell of tier 1 or higher that targets a friendly creature"
              effect={
                <span>
                  Triggering creatures can make an{" "}
                  <Link className="internal-link" to="/rules/combat#overcome">
                    overcome roll
                  </Link>{" "}
                  against an effect.
                </span>
              }
            />

            <h3 className="header">Wartime Healing</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> champion subclass
            </p>
            <p>
              When you use cast{" "}
              <Link
                className="internal-link"
                to="/battle-spells#life-quick-heal"
              >
                quick heal
              </Link>{" "}
              on a target other than you, you also heal equal to your
              proficiency bonus.
            </p>

            <h3 className="header">Wrathful Healing</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> invoker subclass
            </p>
            <p>
              When you use{" "}
              <Link
                className="internal-link"
                to="/battle-spells#life-quick-heal"
              >
                quick heal
              </Link>{" "}
              , choose 1 enemy per spell tier within the target’s zone. Chosen
              enemies take 1 holy or unholy damage (your choice) per your tier.
            </p>

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Battle Blessings</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> champion subclass
            </p>
            <p>
              When you target an ally with a magical ability, they are empowered
              with divine energy until the end of their next turn. While
              empowered, any damage they deal from{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack rolls
              </Link>{" "}
              deals additional holy or unholy (your choice) damage equal to your
              tier.
            </p>

            <h3 className="header">Greater Inspiration</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> shepherd subclass
            </p>
            <p>
              When you use divine inspiration, the temporary hit points gained
              equals triple the spell tier.
            </p>

            <h3 className="header">Mass Prayer</h3>
            <p>For opening prayer, you can target yourself and all allies.</p>

            <h3 className="header">Opening Condemnation</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> invoker subclass
            </p>
            <p>
              When you use opening prayer, you can choose one enemy within
              sight. Make an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              against the target, dealing holy or unholy damage (your choice)
              equal to double your proficiency bonus.
            </p>

            <h3 className="header">Plentiful Prayers</h3>
            <p>You can use prayer of healing a second time per short rest.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cleric;
