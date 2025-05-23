import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import Modifier from "../../components/Modifier";
import ClassHeader from "../../components/ClassHeader";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";

function Vessel() {
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
    <div className="vessel">
      <div className="vessel-content">
        <ClassHeader />
        <div className="tab-items">
          <div
            onClick={toggleDetails}
            className="tab-items__tab"
            data-selected={isDetails}
          >
            Monsterheart Details
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleSubclasses}
            className="tab-items__tab"
            data-selected={isSubclasses}
          >
            Monsterheart Subclasses
          </div>
          <div className="tab-items__divider">|</div>
          <div
            onClick={toggleTalents}
            className="tab-items__tab"
            data-selected={isTalents}
          >
            Monsterheart Talents
          </div>
        </div>
        {isDetails && (
          <div>
            <h1>Monsterheart</h1>
            <p>
              Unlike mundane warriors, monsterhearts possess supernatural power
              that can transform them into unstoppable monsters. The source of a
              monsterheart's power can be a magical curse, entity trapped in
              their body, or supernatural lineage. Play a monsterheart if you
              want to be a supernatural fighter that is a menance on the
              battlefield, while also carrying a dark secret.
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
                  <b>Defense Bonus:</b> +2 to Evasion and Might
                </span>
              </li>
              <li>
                <span>
                  <b>Starting Hit Points:</b> 14
                </span>
              </li>
              <li>
                <span>
                  <b>Recoveries:</b> 7
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
                      <i>Suggestion:</i> You gain heavy armor, a heavy melee
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
                  <Link
                    className="internal-link"
                    to="/fighting-styles#great-weapon"
                  >
                    great weapon
                  </Link>{" "}
                  fighting style and cleave technique.
                </span>
              </li>
            </ul>

            <h3 className="header">Reckless Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Reckless Attack"
              actType="Action"
              descriptor="You sacrifice your defenses for a powerful blow."
              frequency="At-will"
              effect={
                <span>
                  <Link className="internal-link" to="/combat-abilities#strike">
                    Strike
                  </Link>{" "}
                  with a melee weapon, dealing additional damage equal to your
                  proficiency bonus, but then you are{" "}
                  <Link className="internal-link" to="/conditions#vulnerable">
                    vulnerable
                  </Link>{" "}
                  until the end of your next turn.
                </span>
              }
            />

            <h3 className="header">Monstrous Form</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Monstrous Form"
              actType="Maneuver"
              descriptor="You unleash the supernatural power within yourself to become a monstrous
              version of yourself."
              frequency="Encounter"
              keywords="Magical"
              duration="Scene ends"
              effect={
                <span>
                  <span>
                    While in this form, you gain the following benefits:
                  </span>
                  <ul>
                    <li>
                      <span>
                        Your natural melee weapon damage increases to 3
                      </span>
                    </li>
                    <li>
                      <span>While not wearing armor, you gain +2 to Might</span>
                    </li>
                    <li>
                      <span>
                        You gain{" "}
                        <Link
                          className="internal-link"
                          to="/rules/combat#temporary-hit-points"
                        >
                          temporary hit points
                        </Link>{" "}
                        equal to double your proficiency bonus that stacks with
                        other temporary hit points
                      </span>
                    </li>
                  </ul>
                </span>
              }
            />

            <h3 className="header">Fury</h3>
            <p>
              Your power grows as combat continues. When you take damage or deal
              damage, you gain 1 fury point that lasts until the scene ends. You
              can only gain up to 1 fury point per turn. When your fury points
              reaches certain levels, you grow stronger:
            </p>
            <ul>
              <li>
                <span>
                  <b>Greater Fury (4 fury points):</b> You gain{" "}
                  <Modifier type="f" count="1" /> to attack rolls
                </span>
              </li>
              <li>
                <span>
                  <b>Apex Fury (8 fury points):</b> You gain{" "}
                  <Modifier type="f" count="2" /> to attack rolls
                </span>
              </li>
            </ul>

            <h3 className="header">Subclass</h3>
            <p>
              Choose the beast subclass, or another subclass of your choice. At
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
            <h3 className="header">Monstrous Regeneration</h3>
            <p>
              Your monstrous powers keep you from dying. When you have greater
              fury, you have <ToolTip preset="regen" /> equal to your tier, or
              equal to your proficiency bonus if you have apex fury.
            </p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Monsterheart Subclasses</h1>
            <p>These are the subclass choices for the monsterheart.</p>
            <h2>Beast</h2>
            <p>
              Either from a lycan curse, possession by a primal spirit, or
              faerie curse, you can transform into a terrifying animal hybrid
              monster.
            </p>
            <h3 className="header">
              Strength of the Hunter (1st-Level Feature)
            </h3>
            <p>
              While in your monstrous form, your natural melee weapon damage
              increases to 4 and you gain one of the following depending on your
              type of beast:
            </p>
            <ul>
              <li>
                <span>
                  <b>Air:</b> You gain a fly speed of 1.
                </span>
              </li>
              <li>
                <span>
                  <b>Aquatic:</b> You can breath underwater and gain a swim
                  speed of 1.
                </span>
              </li>
              <li>
                <span>
                  <b>Land:</b> Your land speed increases by 1.
                </span>
              </li>
            </ul>

            <h2>Calamity</h2>
            <p>
              Either from a draconic gift, affinity to the elemental realms, or
              giant heritage, you can transform into a destructive monster.
            </p>
            <h3 className="header">Chosen Calamity (1st-Level Feature)</h3>
            <p>
              Choose blizzard, inferno, plague, or storm. You gain the following
              benefit depending on your choice:
            </p>
            <ul>
              <li>
                <span>
                  <b>Blizzard:</b> When you use monstrous form, the{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#temporary-hit-points"
                  >
                    temporary hit points
                  </Link>{" "}
                  gained increases to triple your proficiency bonus. On later
                  turns while in your monstrous form, you can use a maneuver to
                  gain temporary hit points equal to your tier.{" "}
                </span>
              </li>
              <li>
                <span>
                  <b>Inferno:</b> When you use monstrous form, fire explodes
                  from you that deals fire damage equal to your tier to all
                  enemies within your zone. On later turns while in your
                  monstrous form, you can use a maneuver to deal this same
                  damage again.
                </span>
              </li>
              <li>
                <span>
                  <b>Plague:</b> When you use monstrous form, sickness spreads
                  from you that makes all enemies within your zone{" "}
                  <Link className="internal-link" to="/conditions#hindered">
                    hindered
                  </Link>{" "}
                  (turn ends). On later turns while in your monstrous form, you
                  can use a maneuver to repeat this effect.
                </span>
              </li>
              <li>
                <span>
                  <b>Storm:</b> When you use monstrous form, stormy winds or
                  turbulent waters swirl around you. For each enemy within your
                  zone, you can pull them to become engaged to you or push them
                  within their zone. On later turns while in your monstrous
                  form, you can use a maneuver to repeat this effect.
                </span>
              </li>
            </ul>

            <h2>Divine</h2>
            <p>
              Either from a heavenly blessing, demonic possession, or divine
              heritage, you can transform into an angelic or demonic monster.
            </p>
            <h3 className="header">Divine Type (1st-Level Feature)</h3>
            <p>
              Choose angel or demon. You gain the following benefit depending on
              your choice:
            </p>
            <ul>
              <li>
                <span>
                  <b>Angel:</b> While in your monstrous form, you gain a fury
                  point whenever an ally within your zone takes damage.
                </span>
              </li>
              <li>
                <span>
                  <b>Demon:</b> While in your monstrous form, you gain a fury
                  point whenever an enemy within your zone is reduced to 0 hit
                  points or takes damage from a critically successful attack
                  roll.
                </span>
              </li>
            </ul>

            <h2>Undeath</h2>
            <p>
              Either from a necrotic curse, vampiric blood, or pact with a lich,
              you can transform into an undead monster.
            </p>
            <h3 className="header">Drain Life (1st-Level Feature)</h3>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              with a melee weapon while in your monstrous form, you gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to half the damage dealt (scene ends).
            </p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Monsterheart Class Talents</h1>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a class talent from the
              below list. You can only pick a class talent of your tier or
              lower.
            </p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Accelerated Fury</h3>
            <p>
              You reach greater fury at 3 fury points, and apex fury at 7 fury
              points.
            </p>

            <h3 className="header">Expanded Training</h3>
            <p>
              You learn a technique or{" "}
              <Link className="internal-link" to="/fighting-styles">
                fighting style
              </Link>{" "}
              . You can take this class talent multiple times.
            </p>

            <h3 className="header">Origin Magic</h3>
            <p>
              You learn a magic tradition associated with your subclass, and a
              tier 0 battle spell from that tradition:{" "}
              <Link className="internal-link" to="/battle-spells#nature">
                nature
              </Link>{" "}
              (beast),{" "}
              <Link className="internal-link" to="/battle-spells#ice">
                ice
              </Link>{" "}
              (calamity - blizzard),{" "}
              <Link className="internal-link" to="/battle-spells#fire">
                fire
              </Link>{" "}
              (calamity - inferno),{" "}
              <Link className="internal-link" to="/battle-spells#toxic">
                toxic
              </Link>{" "}
              (calamity - plague),{" "}
              <Link className="internal-link" to="/battle-spells#air">
                air
              </Link>{" "}
              (calamity - storm), and{" "}
              <Link className="internal-link" to="/battle-spells#death">
                death
              </Link>{" "}
              (undeath).
            </p>

            <h3 className="header">Origin Theme</h3>
            <p>
              You gain the{" "}
              <Link className="internal-link" to="/theme-talents">
                theme
              </Link>{" "}
              associated with your subclass and a theme talent from that theme:
              nature (beast), nature (calamity), and arcane (undeath).
            </p>

            <h3 className="header">Rapid Transformation</h3>
            <p>
              At the start of an encounter, you can use monstrous transformation
              as a free action.
            </p>

            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Divine Fury</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> divine subclass
            </p>
            <p>
              You radiate divine energy as you grow stronger. While you have
              greater fury, your zone becomes a{" "}
              <Link className="internal-link" to="/rules/combat#zone-types">
                dangerous zone
              </Link>{" "}
              (damage equal to your tier) only for your enemies, and the damage
              doubles when you reach apex fury. The damage type is either holy
              (angel) or unholy (demon).
            </p>

            <h3 className="header">Dual Calamity</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> calamity subclass
            </p>
            <p>
              Choose a second type of calamity and the calamity type's effect
              happens when you're in your monstrous form.
            </p>

            <h3 className="header">Explosive Fury</h3>
            <p>
              When you use reach greater fury or apex fury, magic explodes from
              you to harm each enemy within your zone, dealing arcane damage
              equal to your tier, or your proficiency bonus for apex fury.
            </p>

            <h3 className="header">Monstrous Titan</h3>
            <p>
              When you use monstrous form, you can become large, or huge
              starting at 8th level. While large, you can{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              with <Modifier type="mf" count="1" /> to target any creature
              within your zone.
            </p>

            <h3 className="header">Savage Rend</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> beast subclass
            </p>
            <p>
              While in your monstrous form, when you get a success or higher on
              a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              with a natural melee weapon, the target takes ongoing physical
              damage equal to your tier.
            </p>

            <h3 className="header">Wraith Form</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> undeath subclass
            </p>
            <p>
              While in your monstrous form, you have phasing and have a fly
              speed of 1.
            </p>

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Divine Transformation</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> divine subclass
            </p>
            <p>
              Your angelic or demonic form grows stronger, and you gain the
              following benefit while in your monstrous form:
            </p>
            <ul>
              <li>
                <span>
                  <b>Angel:</b> Allies that start their turn within your zone
                  gain the benefits of your monstrous regeneration feature.
                </span>
              </li>
              <li>
                <span>
                  <b>Demon:</b> When you take damage, hellfire explodes from
                  your body at all enemies within your zone, dealing unholy
                  damage equal to your tier.
                </span>
              </li>
            </ul>

            <h3 className="header">Greater Calamity</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> calamity subclass
            </p>
            <p>Depending on your chosen calamity, you gain the following:</p>
            <ul>
              <li>
                <span>
                  <b>Blizzard:</b> When you gain{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#temporary-hit-points"
                  >
                    temporary hit points
                  </Link>{" "}
                  from this feature, all allies within your zone also gain
                  temporary hit points equal to your tier.
                </span>
              </li>
              <li>
                <span>
                  <b>Inferno:</b> When enemies take damage from this feature,
                  they also take ongoing fire damage equal to your tier.
                </span>
              </li>
              <li>
                <span>
                  <b>Plague:</b> The penalty from this feature's hindered
                  condition increases to <Modifier type="mf" count="2" />.
                </span>
              </li>
              <li>
                <span>
                  <b>Storm:</b> Pulled or pushed enemies from this feature are
                  also knocked prone.
                </span>
              </li>
            </ul>

            <h3 className="header">Greater Drain</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> undeath subclass
            </p>
            <p>
              When you see a creature reduced to 0 hit points within your zone,
              you gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your proficiency bonus.
            </p>

            <h3 className="header">Frightening Howl</h3>
            <p style={{ marginBottom: 0 }}>
              <b>Requirement:</b> beast subclass
            </p>
            <p>
              When you use monstrous form, make an attack roll against the
              Resolve of each enemy within 1 zone.
            </p>
            <ul>
              <li>
                <span>
                  <b>Critical: </b> Same as a success, and{" "}
                  <Link className="internal-link" to="/conditions#dazed">
                    dazed
                  </Link>{" "}
                  (turn ends) as they cower in fear
                </span>
              </li>
              <li>
                <span>
                  <b>Success: </b>
                  <Link className="internal-link" to="/conditions#hindered">
                    hindered
                  </Link>{" "}
                  (scene ends)
                </span>
              </li>
              <li>
                <span>
                  <b>Partial: </b>
                  <Link className="internal-link" to="/conditions#hindered">
                    hindered
                  </Link>{" "}
                  (turn ends)
                </span>
              </li>
            </ul>

            <h3 className="header">Momentous Fury</h3>
            <p>
              When you enter an encounter, your starting fury points equal your
              momentum.
            </p>

            <h3 className="header">Undying Monster</h3>
            <p>
              While in your monstrous form, you can't be{" "}
              <Link className="internal-link" to="/rules/combat#dying">
                defeated
              </Link>{" "}
              until the scene ends.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Vessel;
