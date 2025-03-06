import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import fortune from "../../assets/fortune-icon-v2.png";
import misfortune from "../../assets/misfortune-icon-v2.png";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";

function Druid() {
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
    <div className="druid">
      <div className="druid-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Druid Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Druid Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Druid Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Druid</h1>
            <p>
              Druids commune with nature itself and channel ancient, primordial
              magic. Some Druids use this green gift to protect the natural
              world, while some use this magic to tear down civilization. Play a
              druid if you want to command nature magic while being attuned to
              the wilderness.
            </p>
            <h2>Druid Origins</h2>
            <p>Here are some suggestions for the origins of your magic:</p>
            <ul>
              <li>
                <span>
                  <b>Devotion:</b> Through belief in a nature deity or
                  primordial spirits, you’ve been rewarded with nature magic.
                </span>
              </li>
              <li>
                <span>
                  <b>Pact:</b> You made a pact with a powerful entity for your
                  nature magic, such a fairy ruler or elemental royalty.
                </span>
              </li>
              <li>
                <span>
                  <b>Innate:</b> Thanks to a primordial bloodline,
                  experimentation, or elemental exposure, nature magic flows
                  through your veins and is a part of you.
                </span>
              </li>
            </ul>
            <h2>Core Features</h2>
            <ul style={{ marginTop: "10px" }}>
              <li>
                <span>
                  <b>Theme:</b> Nature
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
                      <i>Suggestion:</i> You gain a staff as your implement.
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Druid Magic</h3>
            <p>You invoke the elemental powers of nature.</p>
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
                  <Link className="internal-link" to="/battle-spells#nature">
                    nature
                  </Link>{" "}
                  tradition and another magic tradition from the following list:{" "}
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
                  <Link className="internal-link" to="/battle-spells#gravity">
                    gravity
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#ice">
                    ice
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#life">
                    life
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#light">
                    light
                  </Link>{" "}
                  ,{" "}
                  <Link className="internal-link" to="/battle-spells#toxic">
                    toxic
                  </Link>{" "}
                  , or{" "}
                  <Link className="internal-link" to="/battle-spells#water">
                    water
                  </Link>{" "}
                  . You learn a battle spell from each chosen tradition.
                </span>
                <ul className="secondary-list">
                  <li>
                    <span>
                      <i>Suggestion:</i> You learn the nature and fire magic
                      traditions. From the nature tradition, you learn the vine
                      whip and entangle battle spells, and from the fire
                      tradition you learn flamebolt and fireball battle spells.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you
                  learn a battle spell or a magic tradition, from the previous
                  list.
                </span>
              </li>
            </ul>

            <h3 className="header">Shape Terrain</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Shape Terrain"
              actType="Action"
              descriptor="You briefly mold the land to your whims."
              frequency="At-will"
              target="1 zone within 2 zones"
              duration="Focus for the scene"
              effect="The targeted zone becomes a difficult zone"
            />

            <h3 className="header">Subclass</h3>
            <p>
              Choose the elementalist subclass, or another subclass of your
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
            <h3 className="header">Nature’s Ally</h3>
            <p>
              You and allies in your zone ignore the movement penalties from
              difficult zones and have resistance equal to your tier to damage
              from dangerous zones.
            </p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Druid Subclasses</h1>
            <p>These are the subclass choices for the druid.</p>
            <h2>Elementalist</h2>
            <p>You are one with the elemental realms.</p>
            <h3 className="header">Elemental Attunement (1st-Level Feature)</h3>
            <p>
              Attune to an elemental realm. You gain a utility benefit depending
              on the chosen realm, and when you deal damage of the realm’s
              associated damage type, you deal additional damage equal to your
              tier. You can change your realm attunement after a long rest.
            </p>
            <h4>Elemenalist Table</h4>
            <table>
              <thead>
                <tr>
                  <th>Realm</th>
                  <th>Benefit</th>
                  <th>Damage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Air</td>
                  <td>Resistance to lightning damage</td>
                  <td>lightning</td>
                </tr>
                <tr>
                  <td>Earth</td>
                  <td>Evasion increases by +1 when unarmored</td>
                  <td>physical</td>
                </tr>
                <tr>
                  <td>Fire</td>
                  <td>Resistance to fire damage</td>
                  <td>fire</td>
                </tr>
                <tr>
                  <td>Ice</td>
                  <td>Resistance to cold damage</td>
                  <td>cold</td>
                </tr>
                <tr>
                  <td>Water</td>
                  <td>
                    Breath underwater and gain swim speed equal to your land
                    speed
                  </td>
                  <td>physical</td>
                </tr>
              </tbody>
            </table>

            <h2>Shaman</h2>
            <p>You call upon animal spirits to aid you.</p>
            <h3 className="header">Call Spirit Animal (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Call Spirit Animal"
              actType="Maneuver"
              descriptor="You summon a primal spirit: the sturdy bear, wise owl, and hungry wolf."
              frequency="At-will"
              keywords="Magical, Range"
              duration="Focus for the scene"
              target="1 zone within 2 zones"
              // @ts-ignore
              effect={
                <span>
                  <span>
                    You spend mana equal to your tier to summon a spirit animal
                    (owl, bear, or wolf) in the target zone:
                  </span>
                  <ul>
                    <li>
                      <span>
                        <i>Bear:</i> When you first use this ability and when
                        you focus on it, all creatures of your choice within the
                        targeted zone gain temporary hit points equal to your
                        tier (scene ends).
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>Owl:</i> All creatures of your choice within the zone
                        gain{" "}
                        <b>
                          +1{" "}
                          <img
                            className="icon"
                            src={fortune}
                            alt="fortune icon"
                          />
                        </b>{" "}
                        to{" "}
                        <Link
                          className="internal-link"
                          to="/rules/combat#overcome"
                        >
                          overcome rolls
                        </Link>
                        .
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>Wolf:</i> You and allies gain{" "}
                        <b>
                          +1{" "}
                          <img
                            className="icon"
                            src={fortune}
                            alt="fortune icon"
                          />
                        </b>{" "}
                        on{" "}
                        <Link
                          className="internal-link"
                          to="/rules/combat#attack-roll"
                        >
                          attack rolls
                        </Link>{" "}
                        against{" "}
                        <Link
                          className="internal-link"
                          to="/conditions#exposed"
                        >
                          exposed
                        </Link>{" "}
                        creatures within the targeted zone.
                      </span>
                    </li>
                  </ul>
                </span>
              }
            />

            <h2>Shifter</h2>
            <p>
              You worship the primal spirits, and call upon them to transform
              into a terrifying beast.
            </p>
            <h3 className="header">Primal Form (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Primal Form"
              actType="Maneuver"
              descriptor="You transform into a powerful animal."
              frequency="At-will"
              keywords="Magical"
              duration="Scene ends"
              // @ts-ignore
              effect={
                <span>
                  <span>
                    You expend mana equal to your tier to transform your body
                    and equipment into a medium sized animal of your choice.
                    While in this form:
                  </span>
                  <ul>
                    <li>
                      <span>
                        You can’t cast spells or use any abilities you can’t do
                        as an animal, but you can focus on abilities.
                      </span>
                    </li>
                    <li>
                      <span>
                        You gain temporary hit points equal to half your shaken
                        value while in this form.
                      </span>
                    </li>
                    <li>
                      <span>Your Evasion and Might gain +2.</span>
                    </li>
                    <li>
                      <span>
                        Your natural melee weapons deal 3 physical damage.
                      </span>
                    </li>
                    <li>
                      <span>
                        You have traits your animal would have such as a fly
                        speed if you shift into a large bird. Any new speeds
                        equal the same speed as your land speed.
                      </span>
                    </li>
                    <li>
                      <span>
                        Once you are defeated, or you end the magic as a free
                        action on your turn, you revert back to your normal form
                        and the magic ends.
                      </span>
                    </li>
                  </ul>
                </span>
              }
            />
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Druid Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Dangerous Terrain</h3>
            <p>
              When you use shape terrain, you can choose for the targeted zone
              to instead become a dangerous zone (damage equal to your tier).
              Choose the damage type from cold, fire, lightning, physical, or
              toxic.
            </p>

            <h3 className="header">Elemental Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Elemental Spell"
              actType="Reaction"
              descriptor="You shift the elements of your magic."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You cast a battle spell that deals damage"
              effect="Change the triggering spell’s damage type to cold, fire, lightning, physical, or toxic."
            />

            <h3 className="header">Expanded Druid Magic</h3>
            <p>
              Learn a battle spell or{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              from one listed in druid magic. You can take this class talent
              multiple times.
            </p>

            <h3 className="header">Grasping Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Grasping Spell"
              actType="Reaction"
              descriptor="Your magic conjures vines that enwrap your foe."
              frequency="At-will"
              keywords="Spellshape"
              trigger={
                <span>
                  You cast a battle spell that targets at least one creature
                  with an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>
                </span>
              }
              effect={
                <span>
                  Choose one of triggering spell’s targets. On a success or
                  higher, the chosen target is{" "}
                  <Link className="internal-link" to="/conditions#seized">
                    seized
                  </Link>{" "}
                  (turn ends)
                </span>
              }
            />

            <h3 className="header">Safe Terrain</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Safe Terrain"
              actType="Reaction"
              descriptor="You shield your allies from nature’s wrath."
              frequency="At-will"
              trigger="You use shape terrain"
              effect="You and allies are unaffected by the targeted zone of your shape terrain."
            />

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Behemoth Form</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> shifter subclass
            </p>
            <p>
              When you use primal transformation, your size can become large, or
              huge starting at 8th level. While large, you can melee{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              with <Modifier type="mf" count="1" /> a creature not engaged with
              you, but still in your zone.{" "}
            </p>

            <h3 className="header">Dual Attunement</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> elementalist subclass
            </p>
            <p>
              Choose two elements to be attuned to from your elemental
              attunement feature.
            </p>

            <h3 className="header">Nature's Shield</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Nature's Shield"
              actType="Reaction"
              descriptor="You ward off an ally from elemental harm."
              frequency="At-will"
              keywords="Magical, Range"
              trigger="You see a creature within 1 zone take cold, fire, lightning, or toxic damage"
              effect="The creature gains resistance only to the triggering damage."
            />

            <h3 className="header">Spirit’s Aid</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> shaman subclass
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Spirit's Aid"
              actType="Reaction"
              descriptor="You call upon your animal spirit to help an ally."
              frequency="At-will"
              keywords="Magical"
              trigger="You see a creature take damage within your call spirit animal zone"
              // @ts-ignore
              effect={
                <span>
                  <span>Effect depends on your call spirit animal:</span>
                  <ul>
                    <li>
                      <span>
                        <i>Bear:</i> Creature gains resistance equal to your
                        tier only against the triggering damage.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>Owl:</i> The damaged creature can{" "}
                        <Link
                          className="internal-link"
                          to="/combat-abilities#disengage"
                        >
                          disengage
                        </Link>{" "}
                        as a free action.
                      </span>
                    </li>
                    <li>
                      <span>
                        <i>Wolf</i> The attacker takes physical damage equal to
                        your proficiency bonus.
                      </span>
                    </li>
                  </ul>
                </span>
              }
            />

            <h3 className="header">Wider Terrain</h3>
            <p>
              When you use shape terrain, you can choose to target a number of
              zones equal to your tier.
            </p>

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Elemental Rage</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> elementalist subclass
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Elemental Rage"
              actType="Reaction"
              descriptor="You unleash elemental fury around you as you use your magic."
              frequency="At-will"
              trigger="You cast a battle spell of tier 1 or higher"
              effect="Enemies within your zone take 1 damage per triggering spell tier. The damage type matches the damage type of your elemental attunement. If you have dual attunement class talent, then choose one of your attuned elements’ damage types."
            />

            <h3 className="header">Nature's Respite</h3>
            <p>
              You and allies both ignore difficult zones and have resistance to
              dangerous zones created by you.
            </p>

            <h3 className="header">Perfect Transformation</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> shifter subclass
            </p>
            <p>
              While you are in primal transformation, you can cast spells, and
              as a maneuver, you can spend mana equal to your tier to gain
              temporary hit points equal to your shaken value.
            </p>

            <h3 className="header">Spirit Shift</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> shaman subclass
            </p>
            <p>
              When you focus on call spirit animal, you can move the spirit up
              to one zone away and also change the type of spirit.
            </p>

            <h3 className="header">Terrain Manipulator</h3>
            <p>
              When you use shape terrain, you can spend 1 mana for the ability
              to last for the scene without focusing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Druid;
