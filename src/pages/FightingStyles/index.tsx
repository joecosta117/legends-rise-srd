import "./index.scss";
import { useState, useEffect } from "react";
import AbilityCard from "../../components/AbilityCard";
import Dropdown from "../../components/Dropdown";
import { getHash } from "../../utils/getPath";
import Modifier from "../../components/Modifier";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";

function FightingStyles() {
  const [selectedStyle, setSelectedStyle] = useState("");

  function handleStyle(label: string) {
    setSelectedStyle(label);
  }

  useEffect(() => {
    const hash = getHash();
    const hashArr = hash.trim().split("-") as Array<String>;

    if (hashArr.length === 1) {
      setSelectedStyle(hash);
    } else if (hashArr.length > 1) {
      const newArr = hashArr.map((hash) => {
        return hash.charAt(0).toUpperCase() + hash.slice(1);
      });
      const fightngStyle = newArr.join(" ");
      setSelectedStyle(fightngStyle);
    }
  }, []);

  const dropdownItems = [
    { label: "Archery", onClick: handleStyle },
    { label: "Bastion", onClick: handleStyle },
    { label: "Brawling", onClick: handleStyle },
    { label: "Dueling", onClick: handleStyle },
    { label: "Dirty", onClick: handleStyle },
    { label: "Great Weapon", onClick: handleStyle },
    { label: "Lurking", onClick: handleStyle },
    { label: "Medic", onClick: handleStyle },
    { label: "Protective", onClick: handleStyle },
    { label: "Skirmish", onClick: handleStyle },
    { label: "Throwing", onClick: handleStyle },
    { label: "Two Weapons", onClick: handleStyle },
  ];

  return (
    <div className="fighting-styles">
      <div className="fighting-styles-content">
        <h1>Fighting Styles</h1>
        <p>
          Those trained in the art of fighting are masters at using their
          weapons in deadly ways. Weapon focused classes can learn fighting
          styles, and then learn techniques from their chosen styles. Techniques
          give martial classes powerful weapon abilities much like how
          spellcasters have access to wondrous magic.
        </p>

        <p>
          When you learn a fighting style, you also learn a technique from that
          style. You can only learn techniques from fighting styles you have
          already learned.
        </p>

        <Dropdown
          selected={selectedStyle}
          items={dropdownItems}
          startLabel="Select a fighting style"
          type="fighting-styles"
        />

        {selectedStyle === "Archery" && (
          <div>
            <h2>Archery Techniques</h2>
            <p>You excel at shooting ranged weapons.</p>
            <div className="techniques">
              <AbilityCard
                name="Assisting Shot"
                actType="Action"
                descriptor="You fire a shot aimed to distract your foe as well as hurt them."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a ranged weapon. On a success or higher, the next{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    against the target gains <Modifier type="f" count="1" />{" "}
                    until the end of your next turn.
                  </span>
                }
              />
              <AbilityCard
                name="Hail of Arrows"
                actType="Action"
                descriptor="You unleash a volley at a cluster of enemies."
                target="1d4 enemies within 1 zone"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    each target with a ranged weapon, but treat each{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    as one degree of success lower.
                  </span>
                }
              />
              <AbilityCard
                name="Interrupt Shot"
                actType="Reaction"
                descriptor="You fire an arrow at a fleeing target."
                frequency="At-will"
                trigger={
                  <span>
                    You see a creature within 1 zone{" "}
                    <Link className="internal-link" to="/combat-abilities#move">
                      move
                    </Link>
                  </span>
                }
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a ranged weapon at <Modifier type="mf" count="1" />
                  </span>
                }
              />
              <AbilityCard
                name="Pinning Shot"
                actType="Action"
                descriptor="You shoot for a foe’s leg in hopes of slowing them down."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a ranged weapon, on a success or higher, the target's
                    speed is halved (next turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Retreating Shot"
                actType="Action"
                descriptor="As you run away, you fire a quick shot."
                frequency="At-will"
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#move">
                      Move
                    </Link>{" "}
                    then{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>{" "}
                    with a ranged weapon
                  </span>
                }
              />
            </div>
          </div>
        )}
        {selectedStyle === "Bastion" && (
          <div>
            <h2>Bastion Techniques</h2>
            <p>You have mastered using armor to best defend yourself.</p>
            <div className="techniques">
              <AbilityCard
                name="Fortify"
                actType="Maneuver"
                descriptor="You steel yourself against danger."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#defend"
                    >
                      Defend
                    </Link>
                    , and the penalty to{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack rolls
                    </Link>{" "}
                    against you take <Modifier type="mf" count="2" />
                  </span>
                }
              />
              <AbilityCard
                name="Guard Attack"
                actType="Action"
                descriptor="You attack while brandishing your weapon or shield to also guard yourself."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a melee weapon, and on a success or higher, you{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#defend"
                    >
                      defend
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Juggernaut's Charge"
                actType="Action"
                descriptor="You rush forward with such force that you knock your foe to their feet."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#charge"
                    >
                      charge
                    </Link>{" "}
                    to{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>
                    , and on a success or higher, the target is knocked{" "}
                    <Link className="internal-link" to="/conditions#prone">
                      prone
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Resilient Attack"
                actType="Action"
                descriptor="You fight through debilitations as you attack."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                effect={
                  <span>
                    Make an{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome roll
                    </Link>{" "}
                    against an effect or end an effect with a duration of (next
                    turn ends), then{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>
                    .
                  </span>
                }
              />
              <AbilityCard
                name="Withstand"
                actType="Reaction"
                descriptor="You bolster your body’s might to overcome incoming harm."
                requirement="You’re wearing heavy armor"
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
                    made against your Guard
                  </span>
                }
                effect="Triggering attack roll against only you takes +1 misfortune"
              />
            </div>
          </div>
        )}
        {selectedStyle === "Brawling" && (
          <div>
            <h2>Brawling Techniques</h2>
            <p>You are deadly without weapons.</p>
            <div className="techniques">
              <AbilityCard
                name="Dizzying Slam"
                actType="Action"
                descriptor="You knock your foe so hard, they become dizzy."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a natural melee weapon, and on a success or higher, the
                    target is{" "}
                    <Link className="internal-link" to="/conditions#hindered">
                      hindered
                    </Link>{" "}
                    (next turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Grappling Attack"
                actType="Action"
                descriptor="You punch your foe and grab them."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a natural melee weapon, and on a success or higher, the
                    target is{" "}
                    <Link className="internal-link" to="/conditions#seized">
                      seized
                    </Link>{" "}
                    (overcome ends)
                  </span>
                }
              />
              <AbilityCard
                name="Interrupt Grab"
                actType="Reaction"
                descriptor="You grab someone as they try to flee."
                target="triggering creature"
                keywords="Melee"
                trigger={
                  <span>
                    You see an{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    creature{" "}
                    <Link className="internal-link" to="/combat-abilities#move">
                      move
                    </Link>
                    , or use a magical or ranged ability
                  </span>
                }
                frequency="At-will"
                defense="Guard"
                critical="Same as success, and 1 physical damage per your tier"
                success={
                  <span>
                    <Link className="internal-link" to="/conditions#seized">
                      seized
                    </Link>{" "}
                    until you let go
                  </span>
                }
              />
              <AbilityCard
                name="Shoving Kick"
                actType="Action"
                descriptor="You kick a foe hard enough to send them flying."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a natural melee weapon, and on a success or higher, the
                    target is shoved within their zone
                  </span>
                }
              />
              <AbilityCard
                name="Sweeping Knockdown"
                actType="Maneuver"
                descriptor="As you grab your enemy, you shove them to the ground."
                frequency="At-will"
                keywords="Melee"
                target={
                  <span>
                    1{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    creature
                  </span>
                }
                defense="Guard"
                success={
                  <span>
                    target is{" "}
                    <Link className="internal-link" to="/conditions#seized">
                      seized
                    </Link>{" "}
                    until you let go, and also falls{" "}
                    <Link className="internal-link" to="/conditions#prone">
                      prone
                    </Link>
                  </span>
                }
              />
            </div>
          </div>
        )}
        {selectedStyle === "Dueling" && (
          <div>
            <h2>Dueling Techniques</h2>
            <p>You focus on a single weapon, and wielding it with bravado.</p>
            <div className="techniques">
              <AbilityCard
                name="Biting Challenge"
                actType="Maneuver"
                descriptor="With a mocking taunt, you enrage a foe enough to lose their composure."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#hinder"
                    >
                      Hinder
                    </Link>{" "}
                    then{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#taunt"
                    >
                      taunt
                    </Link>{" "}
                    the same target
                  </span>
                }
              />
              <AbilityCard
                name="Bravado Charge"
                actType="Action"
                descriptor="You courageously dash across the battlefield to catch a foe off guard."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#charge"
                    >
                      Charge
                    </Link>{" "}
                    and on a success or higher, the target is{" "}
                    <Link className="internal-link" to="/conditions#vulnerable">
                      vulnerable
                    </Link>{" "}
                    (next turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Disarming Attack"
                actType="Action"
                descriptor="You attack with the aim to disarm your foe of their weapon."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    and on a success or higher, choose an item for the target to
                    drop
                  </span>
                }
              />
              <AbilityCard
                name="Disarming Interrupt"
                actType="Reaction"
                descriptor="After you see an enemy prepare a devastating attack, you disarm them to prevent future harm."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                trigger={
                  <span>
                    You see an{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    creature use a magical or ranged ability
                  </span>
                }
                keywords="Melee"
                defense="Guard"
                target="triggering creature"
                critical="Same as success, and 1 physical damage per your tier"
                success={<span>target drops an item of your choice</span>}
              />
              <AbilityCard
                name="Dueling Parry"
                actType="Reaction"
                descriptor="As your foe attacks you, you bring up your sole weapon to expertly block."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
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
                    made against your Guard
                  </span>
                }
                effect="Triggering attack roll against only you takes +1 misfortune"
              />
            </div>
          </div>
        )}
        {selectedStyle === "Dirty" && (
          <div>
            <h2>Dirty Techniques</h2>
            <p>You use cheap tricks to catch enemies off guard.</p>
            <div className="techniques">
              <AbilityCard
                name="Crippling Attack"
                actType="Action"
                descriptor="Your attack aims to debilitate your foe as much as hurt them."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    and on a success or higher, the target is{" "}
                    <Link className="internal-link" to="/conditions#hindered">
                      hindered
                    </Link>{" "}
                    (next turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Dirty Escape"
                actType="Maneuver"
                descriptor="With a disarming word or quick distraction, you throw your enemy off before darting away."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#hinder"
                    >
                      Hinder
                    </Link>{" "}
                    then{" "}
                    <Link className="internal-link" to="/combat-abilities#move">
                      move
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Distracting Attack"
                actType="Action"
                descriptor="Your attack flusters a foe, leaving them open to brutal follow ups."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    and on a success or higher, the target is{" "}
                    <Link className="internal-link" to="/conditions#vulnerable">
                      vulnerable
                    </Link>{" "}
                    (next turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Interrupt Preservation"
                actType="Reaction"
                descriptor="As you spot a foe attempting to recover, you distract them."
                frequency="At-will"
                trigger={
                  <span>
                    You see a creature within 1 zone make an{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome roll
                    </Link>
                  </span>
                }
                effect={
                  <span>
                    Triggering{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome roll
                    </Link>{" "}
                    takes <Modifier type="mf" count="1" />
                  </span>
                }
              />
              <AbilityCard
                name="Mass Hinder"
                actType="Action"
                descriptor="With a cunning move you debilitate multiple foes at once."
                target="1d4+1 enemies within your zone"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#hinder"
                    >
                      Hinder
                    </Link>{" "}
                    each target
                  </span>
                }
              />
            </div>
          </div>
        )}
        {selectedStyle === "Great Weapon" && (
          <div>
            <h2>Great Weapon Techniques</h2>
            <p>You wield heavier weapons to great devastation.</p>
            <div className="techniques">
              <AbilityCard
                name="Cleave"
                actType="Action"
                descriptor="You attack multiple foes with a wide sweep of your weapon."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    two creatures with a heavy melee weapon
                  </span>
                }
              />
              <AbilityCard
                name="Ground Slam"
                actType="Action"
                descriptor="You bring your giant weapon crashing into the ground, causing the earth to shake around you."
                requirement="You’re wielding a heavy melee weapon"
                target="1d4+1 enemies within your zone"
                defense="Guard"
                critical="Same as success, and 1 physical damage per your tier"
                success={
                  <span>
                    <Link className="internal-link" to="/conditions#prone">
                      prone
                    </Link>
                  </span>
                }
                frequency="At-will"
              />
              <AbilityCard
                name="Interrupt Knockdown"
                actType="Reaction"
                descriptor="You use the weight of your weapon to shove a distracted creature to the ground."
                frequency="At-will"
                trigger={
                  <span>
                    You see an{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    creature{" "}
                    <Link className="internal-link" to="/combat-abilities#move">
                      move
                    </Link>
                    , or use a magical or ranged ability
                  </span>
                }
                requirement="You're wielding a heavy melee weapon"
                keywords="Melee"
                defense="Guard"
                target="triggering creature"
                critical="Same as success, and 1 physical damage per your tier"
                success={
                  <span>
                    <Link className="internal-link" to="/conditions#prone">
                      prone
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Knockdown Attack"
                actType="Action"
                descriptor="You attack with such strength, you push your foe to the ground."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a heavy melee weapon, and on a success or higher, the
                    target is knocked{" "}
                    <Link className="internal-link" to="/conditions#prone">
                      prone
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Lunge Attack"
                actType="Action"
                descriptor="You take a step and swipe widely with your large weapon."
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a heavy melee weapon, but you can target any creature
                    within your zone
                  </span>
                }
                frequency="At-will"
              />
            </div>
          </div>
        )}
        {selectedStyle === "Lurking" && (
          <div>
            <h2>Lurking Techniques</h2>
            <p>You prefer to strike from the shadows.</p>
            <div className="techniques">
              <AbilityCard
                name="Ambush Attack"
                actType="Action"
                descriptor="You slip into the shadows before attacking."
                frequency="At-will"
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#hide">
                      Hide
                    </Link>{" "}
                    then{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>
                    , or{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>{" "}
                    then{" "}
                    <Link className="internal-link" to="/combat-abilities#hide">
                      hide
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Blown Cover"
                actType="Reaction"
                descriptor="When your hiding spot is discovered, you flee."
                trigger={
                  <span>
                    You become visible after being{" "}
                    <Link className="internal-link" to="/rules/combat#hidden">
                      hidden
                    </Link>
                  </span>
                }
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#move">
                      Move
                    </Link>
                  </span>
                }
                frequency="At-will"
              />
              <AbilityCard
                name="Find Cover"
                actType="Maneuver"
                descriptor="You kick up a table or lean behind a creature to gain cover that your foes quickly catch onto."
                frequency="At-will"
                effect={
                  <span>
                    You use your environment to give yourself{" "}
                    <Link className="internal-link" to="/rules/combat#stealth">
                      cover
                    </Link>{" "}
                    (next turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Into the Shadows"
                actType="Maneuver"
                descriptor="You dart into the shadows to fade from sight."
                frequency="At-will"
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#move">
                      Move
                    </Link>{" "}
                    then{" "}
                    <Link className="internal-link" to="/combat-abilities#hide">
                      hide
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Unseen Attack"
                actType="Action"
                descriptor="You attack from the shadows without a trace."
                requirement={
                  <span>
                    You are{" "}
                    <Link className="internal-link" to="/rules/combat#hidden">
                      hidden
                    </Link>
                  </span>
                }
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>
                    , but you remain hidden
                  </span>
                }
              />
            </div>
          </div>
        )}
        {selectedStyle === "Medic" && (
          <div>
            <h2>Medic Techniques</h2>
            <p>You focus on patching up allies in the heat of battle.</p>
            <div className="techniques">
              <AbilityCard
                name="Bedside Manners"
                actType="Maneuver"
                descriptor="You soothe a hurt friend."
                target="1 damaged ally within your zone"
                frequency="At-will"
                effect="Ally gains 2 temporary hit point per your tier (scene ends)"
              />
              <AbilityCard
                name="Doctor's Visit"
                actType="Action"
                keywords="Melee"
                target="1 creature you can touch"
                descriptor="You stride to an ally and help quickly patch up their wounds."
                frequency="At-will"
                effect={
                  <span>
                    Target can{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#rally"
                    >
                      rally
                    </Link>
                    . You can{" "}
                    <Link className="internal-link" to="/combat-abilities#move">
                      move
                    </Link>{" "}
                    to the target before they rally.
                  </span>
                }
              />
              <AbilityCard
                name="Medical Assistance"
                actType="Reaction"
                descriptor="As an ally pulls themself together, your medical advice improves the process."
                trigger={
                  <span>
                    You see an ally with your zone <ToolTip preset="heal" /> or
                    make an{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome roll
                    </Link>
                  </span>
                }
                frequency="At-will"
                effect="If the triggering ally healed, then increase the amount by your proficiency bonus, or if they made an overcome roll, then they gain +1 fortune to that roll."
              />
              <AbilityCard
                name="Overcome This"
                actType="Maneuver"
                descriptor="With medicinal herbs or encouraging words, you help an ally throw off an affliction."
                frequency="At-will"
                keywords="Melee"
                target="1 creature you can touch"
                effect={
                  <span>
                    Target can make an{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome roll
                    </Link>{" "}
                    against an effect or end an effect with a duration of (next
                    turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Stem the Bleeding"
                actType="Maneuver"
                descriptor="You staunch an ally’s bleeding."
                keywords="Melee"
                frequency="At-will"
                target={
                  <span>
                    1{" "}
                    <Link className="internal-link" to="/rules/combat#dying">
                      dying
                    </Link>{" "}
                    creature you can touch
                  </span>
                }
                effect={
                  <span>
                    Target <ToolTip preset="heals" /> equal to your proficiency
                    bonus
                  </span>
                }
              />
            </div>
          </div>
        )}
        {selectedStyle === "Protective" && (
          <div>
            <h2>Protective Techniques</h2>
            <p>You know how to protect others and yourself.</p>
            <div className="techniques">
              <AbilityCard
                name="Challenging Attack"
                actType="Action"
                descriptor="You strike with such ferocity that you demand your foe’s attention."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a melee weapon, and on a success or higher, the target
                    is{" "}
                    <Link className="internal-link" to="/conditions#taunted">
                      taunted
                    </Link>{" "}
                    by you (next turn ends)
                  </span>
                }
              />
              <AbilityCard
                name="Come and Get It"
                actType="Action"
                keywords="Range"
                target={
                  <span>
                    1 creature{" "}
                    <Link className="internal-link" to="/conditions#taunted">
                      taunted
                    </Link>{" "}
                    by you within 1 zone
                  </span>
                }
                descriptor="You taunt a foe forward, then surprise them with a swift attack."
                frequency="At-will"
                effect={
                  <span>
                    Target must{" "}
                    <Link className="internal-link" to="/combat-abilities#move">
                      move
                    </Link>{" "}
                    to you, then you{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>{" "}
                    them with a melee weapon
                  </span>
                }
              />
              <AbilityCard
                name="Defender's Sacrifice"
                actType="Reaction"
                descriptor="You rush forward to throw yourself between a foe’s attack and your ally."
                trigger="You see an ally within your zone take damage"
                frequency="At-will"
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#move">
                      Move
                    </Link>{" "}
                    next to the ally, and you take the triggering damage instead
                  </span>
                }
              />
              <AbilityCard
                name="Defensive Taunt"
                actType="Maneuver"
                descriptor="As you challenge a foe to battle, you take a defensive stance."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#taunt"
                    >
                      Taunt
                    </Link>{" "}
                    then{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#defend"
                    >
                      defend
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Punishing Interrupt"
                actType="Reaction"
                frequency="At-will"
                descriptor="As your foe attacks your friend, you retaliate."
                trigger={
                  <span>
                    You see an{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    creature make an{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    against your ally
                  </span>
                }
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    the triggering creature with a melee weapon
                  </span>
                }
              />
            </div>
          </div>
        )}
        {selectedStyle === "Skirmish" && (
          <div>
            <h2>Skirmish Techniques</h2>
            <p>You value speed and light weapons.</p>
            <div className="techniques">
              <AbilityCard
                name="Careful Stride"
                actType="Maneuver"
                descriptor="You dart around the battlefield while avoiding reprisal."
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
                frequency="At-will"
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#move">
                      Move
                    </Link>{" "}
                    without triggering reactions.
                  </span>
                }
              />
              <AbilityCard
                name="Double Charge"
                actType="Action"
                descriptor="You dash across the battlefield before foes can react."
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#charge"
                    >
                      Charge
                    </Link>
                    , but you{" "}
                    <Link className="internal-link" to="/combat-abilities#move">
                      move
                    </Link>{" "}
                    twice as part of your charge
                  </span>
                }
              />

              <AbilityCard
                name="Knife's Edge"
                actType="Action"
                descriptor="Your light weapon knicks a foe hard enough to make them bleed."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    and on a success or higher, the target takes 1{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#ongoing-damage"
                    >
                      ongoing
                    </Link>{" "}
                    physical damage per your tier
                  </span>
                }
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
              />
              <AbilityCard
                name="Nimble Escape"
                actType="Reaction"
                descriptor="As an enemy catches you, you swiftly flee to avoid further harm."
                frequency="At-will"
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#move">
                      Move
                    </Link>
                  </span>
                }
                trigger="You take damage"
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
              />
              <AbilityCard
                name="Quick Traversal"
                actType="Maneuver"
                frequency="At-will"
                descriptor="You stride impossibly fast."
                effect={
                  <span>
                    <Link className="internal-link" to="/combat-abilities#move">
                      Move
                    </Link>{" "}
                    twice
                  </span>
                }
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
              />
            </div>
          </div>
        )}
        {selectedStyle === "Throwing" && (
          <div>
            <h2>Throwing Techniques</h2>
            <p>You prefer to throw light weapons at foes.</p>
            <div className="techniques">
              <AbilityCard
                name="Bounce Throw"
                actType="Action"
                descriptor="Your weapon bounces off a wall to hit a covered foe."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a thrown ranged weapon, and you ignore the penalty from{" "}
                    <Link className="internal-link" to="/rules/combat#stealth">
                      cover
                    </Link>
                  </span>
                }
              />
              <AbilityCard
                name="Deflecting Throw"
                actType="Reaction"
                descriptor="You throw a weapon to deflect a foe’s attack."
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
                    against a creature's Guard
                  </span>
                }
                effect="Triggering attack roll against only the attacked creature takes +1 misfortune"
              />
              <AbilityCard
                name="Far Throw"
                actType="Action"
                descriptor="With steady aim, you throw your weapon at a far away foe."
                frequency="At-will"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a thrown ranged weapon, but your weapon's range
                    increases by +1 zone
                  </span>
                }
              />
              <AbilityCard
                name="Improvised Throw"
                actType="Action"
                descriptor="Pebble, quill, chunk of wood - anything is deadly in your hands when thrown."
                frequency="At-will"
                effect={
                  <span>
                    Pick up a small object within reach, then{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>{" "}
                    with it, treating the object as a thrown ranged weapon
                  </span>
                }
              />
              <AbilityCard
                name="Ricochet Throw"
                actType="Action"
                frequency="At-will"
                descriptor="You throw your weapon to return back to you after it slices your enemy."
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with a thrown ranged weapon, and the weapon then returns to
                    your hand
                  </span>
                }
              />
            </div>
          </div>
        )}
        {selectedStyle === "Two Weapons" && (
          <div>
            <h2>Two Weapons Techniques</h2>
            <p>You prefer to wield two weapons to devastating effect.</p>
            <div className="techniques">
              <AbilityCard
                name="Dual Attack"
                actType="Action"
                descriptor="As your first weapon slices your foe, you follow up with your second weapon."
                frequency="At-will"
                requirement="You’re wielding a weapon in each hand"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    with each weapon at <Modifier type="mf" count="1" /> against
                    the same target
                  </span>
                }
              />
              <AbilityCard
                name="Offhand Attack"
                actType="Maneuver"
                descriptor="You attempt a lighter followup attack."
                frequency="At-will"
                requirement="You’re wielding a weapon in each hand"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>
                    , but treat the result of your{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack rolls
                    </Link>{" "}
                    as one degree lower
                  </span>
                }
              />
              <AbilityCard
                name="Twin Charge"
                actType="Action"
                descriptor="You rush forward then unleash a flurry of attacks with your two weapons."
                frequency="At-will"
                requirement="You’re wielding a weapon in each hand"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#charge"
                    >
                      Charge
                    </Link>{" "}
                    to{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      strike
                    </Link>{" "}
                    with each weapon at <Modifier type="mf" count="1" /> against
                    the same target
                  </span>
                }
              />
              <AbilityCard
                name="Twin Flurry"
                actType="Action"
                descriptor="You unleash an onslaught of attacks from your twin weapons at nearby enemies."
                frequency="At-will"
                target={
                  <span>
                    1d4+1{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    enemies
                  </span>
                }
                requirement="You’re wielding a weapon in each hand"
                effect={
                  <span>
                    <Link
                      className="internal-link"
                      to="/combat-abilities#strike"
                    >
                      Strike
                    </Link>{" "}
                    each target, but treat each{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack rolls
                    </Link>{" "}
                    as one degree of success lower
                  </span>
                }
              />
              <AbilityCard
                name="Twin Parry"
                actType="Reaction"
                trigger={
                  <span>
                    You see an{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    made against your Guard
                  </span>
                }
                frequency="At-will"
                descriptor="As your foe attacks you, you bring up your dual weapons to deflect."
                effect="Triggering attack roll against only you takes +1 misfortune"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FightingStyles;
