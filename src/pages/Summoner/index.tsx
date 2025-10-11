import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import Modifier from "../../components/Modifier";
import Monster from "../../components/Monster";
import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";

function Summoner() {
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

  const minionRules = (
    <div>
      <p>
        Minions follow different rules from regular creatures. Minions of the
        same type are part of a <b>minion group</b>.
      </p>
      <h4 className="header">One Turn, One Act</h4>
      <p>
        All minions of a minion group act on the same turn in combat. On a
        minion's turn, they can use a maneuver or action, but not both.
      </p>
      <h4 className="header">Easy to Kill</h4>
      <p>
        When a minion takes damage, if the damage is less than the minion’s
        maximum hit points, then the minion becomes <ToolTip preset="shaken" />.
        If the minion is already shaken, then any damage kills it.
      </p>

      <h4 className="header">Overkill</h4>
      <p>
        When a minion dies from an ability that targets only it with an attack
        roll, any leftover damage beyond the minion’s remaining hit points is
        applied to another minion of the same group within the same zone. If the
        leftover damage is enough to kill the second minion, then any remaining
        damage is carried over to a third minion, and so on!
      </p>

      <h4 className="header">Group Attack</h4>
      <p>
        Minions within the same group and zone can{" "}
        <Link className="internal-link" to="/combat-abilities#strike">
          strike
        </Link>{" "}
        the same target using one{" "}
        <Link className="internal-link" to="/rules/combat#attack-roll">
          attack roll
        </Link>
        . Multiply the strike’s base damage by the number of attacking minions.
      </p>
    </div>
  );

  return (
    <div className="summoner">
      <div className="summoner-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Summoner Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Summoner Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Summoner Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Summoner</h1>
            <p>
              You have aligned your essence with the outer realms, and have
              learned to conjure creatures from these realities to aid you.
              Perhaps you made a pact with an entity from the outer realms or
              bound your soul in some way to these other worlds.
            </p>

            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b> Determined by your subclass
                </span>
              </li>
              <li>
                <span>
                  <b>Defense Bonus:</b> +1 to Spirit
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Hit Points:</b> 10
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
            <h3 className="header">Summoner Magic</h3>
            <p>You channel the powers of the outer realms.</p>
            <ul>
              <li>
                <span>
                  <b>Mana:</b> 1, increasing to 3 at 5th level, and 5 at 8th
                  level
                </span>
              </li>
              <li>
                <span>
                  <b>Magic Tradition:</b> You learn a{" "}
                  <Link className="internal-link" to="/battle-spells">
                    magic tradition
                  </Link>{" "}
                  determined by your subclass. You learn a battle spell from
                  that tradition.
                </span>
              </li>
              <li>
                <span>
                  <b>Spells at Higher Levels:</b> At levels 3, 6, and 9, you
                  learn a battle spell or a magic tradition associated with your
                  subclass.
                </span>
              </li>
            </ul>

            <h3 className="header">Conjure Minions</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Conjure Minions"
              actType="Action"
              descriptor="You summon a minor creature from the outer realms to aid you."
              frequency="At-will"
              duration="Until you dismiss the minor summons as a free action or until the minor summons dies"
              keywords="Magical, Range, Summon"
              effect="You conjure a number of creatures equal to your tier within 1 zone of you, which uses the minor summons stat block. When you command one minor summons, you command all of your minor summons. You can’t have more minor summons than your proficiency bonus. All of your minor summons are treated as one minion group."
            />
            <Monster
              name="Minor Summons"
              type="Medium Creature (type determined by your subclass)"
              hp="your proficiency bonus (PB)"
              evn="10 + PB"
              mgt="12 + PB"
              res="8 + PB"
              pb="PB"
              summons
              actions={[
                {
                  basic: true,
                  name: "Assault",
                  keywords: "melee, weapon",
                  target: (
                    <span>
                      1{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#engaged"
                      >
                        engaged
                      </Link>{" "}
                      creature
                    </span>
                  ),
                  defense: "Guard",
                  damage: "1 physical damage per tier",
                },
              ]}
            />

            <Accordion
              style={{ marginTop: "20px" }}
              title="Minion Rules"
              content={minionRules}
            />

            <h3 className="header">Conjure Summons</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Conjure Summons"
              actType="Action"
              descriptor="You beckon a powerful creature from the outer realms to come forth to do your bidding"
              frequency="Encounter"
              duration="Scene ends or until the major summons dies"
              keywords="Magical, Range, Summon"
              effect="You conjure a creature within 1 zone of you, which uses the major summons stat block. Unlike other summons abilities, when you command your major summons, it can use a maneuver and action, or two maneuvers."
            />
            <Monster
              name="Major Summons"
              type="Medium Creature (type determined by your subclass)"
              hp="10 per your tier"
              evn="10 + your proficiency bonus (PB)"
              mgt="12 + PB"
              res="8 + PB"
              pb="PB"
              summons
              actions={[
                {
                  basic: true,
                  name: "Assault",
                  keywords: "melee, weapon",
                  target: (
                    <span>
                      1{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#engaged"
                      >
                        engaged
                      </Link>{" "}
                      creature
                    </span>
                  ),
                  defense: "Guard",
                  damage: "PB physical damage",
                },
              ]}
            />

            <h3 className="header" style={{ marginTop: "25px" }}>
              Summon's Adaptation
            </h3>
            <p>You gain a tier 1 class talent.</p>

            <h3 className="header">Subclass</h3>
            <p>
              Choose the elementals subclass, or another subclass of your
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
            <h3 className="header">Summons Enhancement</h3>
            <p>You gain a feature depending on your subclass.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Summoner Subclasses</h1>
            <p>These are the subclass choices for the summoner.</p>
            <h2>Elementals</h2>
            <p>You conjure fierce elemental spirits to cause havoc.</p>
            <h3 className="header">Elemental Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li>
                <span>
                  <b>Magic Tradition:</b> For this class’s magic tradition,
                  choose to learn{" "}
                  <Link className="internal-link" to="/battle-spells#air">
                    air
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
                  , or{" "}
                  <Link className="internal-link" to="/battle-spells#water">
                    water
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  <b>Theme:</b> Nature
                </span>
              </li>
              <li>
                <span>
                  <b>Summons:</b> Your minor and major summons are elemental
                  creatures and gain the following modifications:
                </span>
                <ul style={{ marginLeft: "10px", marginTop: "0" }}>
                  <li>
                    <span>
                      <i>Air:</i>{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to lightning damage and a fly speed of 1.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i>Earth:</i>{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to physical damage, and your major summons’ hit points
                      increase by your proficiency bonus.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i>Fire:</i>{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to fire damage,{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        weakness
                      </Link>{" "}
                      to cold damage, and their assault damage deals fire
                      damage. On a critical successful assault from the major
                      summons, the target takes{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#ongoing-damage"
                      >
                        ongoing
                      </Link>{" "}
                      fire damage equal to your tier.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i>Ice:</i>{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to cold damage,{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        weakness
                      </Link>{" "}
                      to fire damage, and their assault damage deals cold
                      damage. On a critical successful assault from the major
                      summons, the target is{" "}
                      <Link className="internal-link" to="/conditions#seized">
                        seized
                      </Link>{" "}
                      (next turn ends).
                    </span>
                  </li>
                  <li>
                    <span>
                      <i>Water:</i> Swim speed of 1, can breathe underwater, and{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        resistance
                      </Link>{" "}
                      to fire damage but{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        weakness
                      </Link>{" "}
                      to cold damage.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="header">Elemental Burst (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Elemental Burst"
              actType="Action"
              descriptor="Your elemental summons unleashes primal energy."
              target="1d4+1 enemies within the zone of your major summons"
              frequency="At-will"
              keywords="Magical"
              defense="Guard"
              damage="1 physical (air, earth, or water) / fire (fire) / cold (ice) damage per your tier"
            />

            <h2>Angels</h2>
            <p>You conjure angelic warriors to fight with you.</p>
            <h3 className="header">Celestial Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li>
                <span>
                  <b>Magic Tradition:</b> For this class’s magic tradition,
                  choose to learn{" "}
                  <Link className="internal-link" to="/battle-spells#holy">
                    holy
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#life">
                    life
                  </Link>{" "}
                  , or{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#protection"
                  >
                    protection
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  <b>Theme:</b> Divine
                </span>
              </li>
              <li>
                <span>
                  <b>Summons:</b> Your minor and major summons gains the
                  following modifications:
                </span>
                <ul style={{ marginLeft: "10px", marginTop: "0" }}>
                  <li>
                    <span>Guard and Spirit increase by +1</span>
                  </li>
                  <li>
                    <span>
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to holy damage, but,{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        weakness
                      </Link>{" "}
                      to unholy damage
                    </span>
                  </li>
                  <li>
                    <span>Assault damage deals holy damage</span>
                  </li>
                  <li>
                    <span>Summons creature type is angel</span>
                  </li>
                  <li>
                    <span>
                      Allies within major summons’ zone gain{" "}
                      <Modifier type="f" count="1" /> to{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#overcome"
                      >
                        overcome rolls
                      </Link>
                      .
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="header">Celestial Challenge (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Celestial Challenge"
              actType="Action"
              descriptor="Your angelic warrior’s attack forces their foe’s attention on them."
              frequency="At-will"
              effect={
                <span>
                  Your major summons can use assault, and on a success or
                  higher, the target becomes{" "}
                  <Link className="internal-link" to="/conditions#taunted">
                    taunted
                  </Link>{" "}
                  by your major summons (next turn ends)
                </span>
              }
            />

            <h2>Constructs</h2>
            <p>
              You conjure mechanical entities from the realm of law to impose
              order upon your enemies.
            </p>
            <h3 className="header">Mechanical Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li>
                <span>
                  <b>Magic Tradition:</b> For this class’s magic tradition,
                  choose to learn{" "}
                  <Link className="internal-link" to="/battle-spells#arcane">
                    arcane
                  </Link>{" "}
                  ,{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#enchantment"
                  >
                    enchantment
                  </Link>{" "}
                  , or{" "}
                  <Link
                    className="internal-link"
                    to="/battle-spells#protection"
                  >
                    protection
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  <b>Theme:</b> Arcane
                </span>
              </li>
              <li>
                <span>
                  <b>Summons:</b> Your minor and major summons gains the
                  following modifications:
                </span>

                <ul style={{ marginLeft: "10px", marginTop: "0" }}>
                  <li>
                    <span>Guard increases by +2</span>
                  </li>
                  <li>
                    <span>
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to arcane
                    </span>
                  </li>
                  <li>
                    <span>Summons creature type is construct</span>
                  </li>
                  <li>
                    <span>
                      Major summons’ hit points increase by your proficiency
                      bonus
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="header">Sentry's Slam (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Sentry's Slam"
              actType="Action"
              descriptor="As your construct attacks, it wards an ally from the chaos of battle."
              keywords="Magical"
              frequency="At-will"
              effect="Your major summons can use assault, and on a success or higher, choose an ally within the same zone to gain 1 temporary hit per your tier (scene ends)."
            />

            <h2>Fiends</h2>
            <p>You conjure unholy fiendish monsters to ravage your enemies.</p>
            <h3 className="header">Fell Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li>
                <span>
                  <b>Magic Tradition:</b> For this class’s magic tradition,
                  choose to learn{" "}
                  <Link className="internal-link" to="/battle-spells#fire">
                    fire
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#toxic">
                    toxic
                  </Link>{" "}
                  , or{" "}
                  <Link className="internal-link" to="/battle-spells#unholy">
                    unholy
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  <b>Theme:</b> Divine
                </span>
              </li>
              <li>
                <span>
                  <b>Summons:</b> Your minor and major summons gains the
                  following modifications:
                </span>
                <ul style={{ marginLeft: "10px", marginTop: "0" }}>
                  <li>
                    <span>
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to unholy damage, but{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        weakness
                      </Link>{" "}
                      to holy damage,
                    </span>
                  </li>
                  <li>
                    <span>Summons creature type is fiend</span>
                  </li>
                  <li>
                    <span>
                      Assault deals unholy damage, and major summons deals 3
                      damage per your tier
                    </span>
                  </li>
                  <li>
                    <span>
                      <ToolTip preset="night" />
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="header">Corrupting Touch (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Corrupting Touch"
              actType="Action"
              descriptor="Your demon’s attack causes visions of sin."
              frequency="At-will"
              effect={
                <span>
                  Your major summons can use assault, and on a success or
                  higher, the target becomes{" "}
                  <Link className="internal-link" to="/conditions#hindered">
                    hindered
                  </Link>{" "}
                  (next turn ends)
                </span>
              }
            />

            <h2>Shadows</h2>
            <p>
              You conjure shadowy undead from the underworld to hunt your foes.
            </p>
            <h3 className="header">Umbral Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li>
                <span>
                  <b>Magic Tradition:</b> For this class’s magic tradition,
                  choose to learn{" "}
                  <Link className="internal-link" to="/battle-spells#death">
                    death
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#illusion">
                    illusion
                  </Link>{" "}
                  , or{" "}
                  <Link className="internal-link" to="/battle-spells#shadow">
                    shadow
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  <b>Theme:</b> Arcane
                </span>
              </li>
              <li>
                <span>
                  <b>Summons:</b> Your minor and major summons gains the
                  following modifications:
                </span>
                <ul style={{ marginLeft: "10px", marginTop: "0" }}>
                  <li>
                    <span>
                      <Link
                        className="internal-link"
                        to="/rules/combat#resistances-and-weaknesses"
                      >
                        Resistance
                      </Link>{" "}
                      to necrotic damage
                    </span>
                  </li>
                  <li>
                    <span>Assault damage deal necrotic damage</span>
                  </li>
                  <li>
                    <span>
                      <ToolTip preset="night" />
                    </span>
                  </li>
                  <li>
                    <span>Summons creature type is undead</span>
                  </li>
                  <li>
                    <span>
                      While having{" "}
                      <Link className="internal-link" to="/rules/combat#cover">
                        cover
                      </Link>
                      , the penalty to target the summons increases to{" "}
                      <Modifier type="mf" count="2" />
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="header">Draining Touch (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Draining Touch"
              actType="Action"
              descriptor="Your shadow creature’s claws drain their foe’s life force."
              frequency="At-will"
              effect={
                <span>
                  Your major summons can use assault, and on a success or
                  higher, they gain{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#temporary-hit-points"
                  >
                    temporary hit points
                  </Link>{" "}
                  equal to your tier (scene ends).
                </span>
              }
            />
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Summoner Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Coordinated Movement</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Coordinated Movement"
              actType="Reaction"
              descriptor="You move along your conjured creatures."
              frequency="At-will"
              trigger="You command a summoned creature"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#move">
                    Move
                  </Link>
                </span>
              }
            />

            <h3 className="header">Expanded Summoner Magic</h3>
            <p>
              Learn a battle spell or{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              from one listed in your subclass. You can take this class talent
              multiple times.
            </p>

            <h3 className="header">Explosive Sacrifice</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Explosive Sacrifice"
              actType="Action"
              descriptor="You thank a summons for their service before exploding them into magical energy."
              frequency="At-will"
              keywords="Magical"
              target="1d4+1 enemies in the same zone as your minor or major summons"
              defense="Spirit"
              damage="1 arcane damage per your tier (minor summons) or double the same damage (major summons)"
              effect="The attacking summons immediately dies as it explodes"
            />

            <h3 className="header">Loyal Defender</h3>
            <p>Your minor and major summons gain the following benefits:</p>
            <ul>
              <li>
                <span>
                  Major summons’ hit points increase by your proficiency bonus.
                </span>
              </li>
              <li>
                <span>
                  You can use your reaction to impose{" "}
                  <Modifier type="mf" count="1" /> on an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  made by a creature{" "}
                  <Link className="internal-link" to="/rules/combat#engaged">
                    engaged
                  </Link>{" "}
                  to one of your summons, provided the target isn't your
                  summons.
                </span>
              </li>
            </ul>

            <h3 className="header">Ranged Combatant</h3>
            <p>
              Your minor and major summons gain an action called far assault
              (keywords: magical, ranged) that targets a creature within 3 zones
              and deals the same damage and type of damage as their assault
              ability.
            </p>

            <h3 className="header">Special Adaptations</h3>
            <p>
              Your minor and major summons gain one of the following benefits:
            </p>
            <ul>
              <li>
                <span>Fly speed of 1</span>
              </li>
              <li>
                <span>Climb speed of 1</span>
              </li>
              <li>
                <span>Land speed increases to 2</span>
              </li>
              <li>
                <span>Swim speed of 1, and can breath underwater</span>
              </li>
              <li>
                <span>
                  <ToolTip preset="night" />
                </span>
              </li>
            </ul>
            <p>You can take this class talent multiple times.</p>

            <h3 className="header">Spell Conduit</h3>
            <p>
              You can use a magical ability from your minor and major summons’
              place. Furthermore, when you or your major summons is targeted by
              a magical ability, you can choose for the other to gain the same
              benefit.
            </p>

            <h3 className="header">Summoner Warrior</h3>
            <p>
              You have trained to fight alongside your summons. You gain the
              following benefits:
            </p>
            <ul>
              <li>
                <span>Staring hit points increase to 12</span>
              </li>
              <li>
                <span>You have 7 recoveries</span>
              </li>
              <li>
                <span>
                  You gain training in light armor, shields, and all weapons. If
                  you’re 1st level, you add one armor, weapon, and either a
                  weapon or shield to your starting equipment.
                </span>
              </li>
            </ul>

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Absorb Life</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> shadows subclass
            </p>
            <p>
              When a creature dies within your major summons’ zone, your summons{" "}
              <ToolTip preset="heals" /> equal to your tier. It can only heal in
              this way once per turn.
            </p>

            <h3 className="header">Damning Summons</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> fiends subclass
            </p>
            <p>
              When you use conjure summons, choose a number of enemies equal to
              your proficiency bonus within your major summons’ zone. Chosen
              enemies become{" "}
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends).
            </p>

            <h3 className="header">Destructive Aura</h3>
            <p>
              Choose a damage type appropriate to your subclass. Treat the zone
              of your major summons as a{" "}
              <Link className="internal-link" to="/rules/combat#zone-types">
                dangerous zone
              </Link>{" "}
              (1 damage per your tier of the chosen damage type) only for
              enemies.
            </p>

            <h3 className="header">Elemental Link</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> elementals subclass
            </p>
            <p>
              When you have a minor summons or major summons conjured, you gain
              the same modifications of the elemental type you chose to conjure.
              You can only gain one elemental type’s modification even if you
              have multiple summons of different elemental types conjured.
            </p>

            <h3 className="header">Invigorating Summons</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> angels subclass
            </p>
            <p>
              When you use conjure summons, you and all allies gain 1 temporary
              hit points per your tier (scene ends).{" "}
            </p>

            <h3 className="header">Sentinel's Sacrifice</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> constructs subclass
            </p>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Sentinel's Sacrifice"
              actType="Reaction"
              trigger="You see a creature within 1 zone of your majors summons take damage"
              descriptor="Your construct sentinel quickly shields an ally at a great cost"
              frequency="At-will"
              keywords="Magical, Range"
              effect="You reduce the triggering damage by half, and your major summons takes half of the original damage."
            />

            <h3 className="header">Supernatural Growth</h3>
            <p>
              You can choose your major summons’ size to become large, or huge
              starting at 8th level. While large, your summons can use assault
              with <Modifier type="mf" count="1" /> to target any creature
              within their zone.{" "}
            </p>

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Double Conjuring</h3>
            <p>
              Once per{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                safe rest
              </Link>
              , when you use conjure summons, you conjure two major summons. You
              can spend one maneuver to command both summons at once.
            </p>

            <h3 className="header">Elemental Destruction</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> elementals subclass
            </p>
            <p>
              The damage for elemental burst increases to equal your proficiency
              bonus, and on a critical success, a target is knocked{" "}
              <Link className="internal-link" to="/conditions#prone">
                prone
              </Link>
              .
            </p>

            <h3 className="header">Greater Angels</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> angels subclass
            </p>
            <p>
              All of your summons gain a fly speed equal to their land speed,
              and the Guard of your summons increases by +1.
            </p>

            <h3 className="header">Master Summoner</h3>
            <p>
              On your turn, you can command creatures from your summon abilities
              as a free action, but only once per turn.
            </p>

            <h3 className="header">Rapid Reconstruction</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> constructs subclass
            </p>
            <p>
              When your major summons is reduced to 0 hit points, you can spend
              mana equal to your tier for the major summons to{" "}
              <ToolTip preset="heal" /> equal to its{" "}
              <ToolTip preset="shakenVal" />.
            </p>

            <h3 className="header">Umbral Entrance</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> shadows subclass
            </p>
            <p>
              Your shadow summons can step into the shadows of its victims. When
              you command your major summons, it can{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              up to 1 zone away to become{" "}
              <Link className="internal-link" to="/rules/combat#engaged">
                engaged
              </Link>{" "}
              to a creature.
            </p>

            <h3 className="header">Winged Terrors</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> fiends subclass
            </p>
            <p>
              All of your summons gain a fly speed equal to their land speed,
              and your major summons' assault damage increases to 4 unholy
              damage per your tier.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Summoner;
