import "./index.scss";
import EquipmentHeader from "../../components/EquipmentHeader";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import AbilityCard from "../../components/AbilityCard";
import Modifier from "../../components/Modifier";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";

function Relics() {
  const [isArmor, setArmor] = useState(true);
  const [isWeapons, setWeapons] = useState(false);
  const [isImplement, setImplement] = useState(false);
  const [isOther, setOther] = useState(false);

  function handleArmor() {
    setArmor(true);
    setWeapons(false);
    setImplement(false);
    setOther(false);
  }
  function handleWeapon() {
    setArmor(false);
    setWeapons(true);
    setImplement(false);
    setOther(false);
  }
  function handleImplement() {
    setArmor(false);
    setWeapons(false);
    setImplement(true);
    setOther(false);
  }
  function handleOther() {
    setArmor(false);
    setWeapons(false);
    setImplement(false);
    setOther(true);
  }

  const armor = [
    [
      {
        title: "Battleforged Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This armor or clothing is enchanted to help its wearer stay
                alive during battle.
              </i>
            </p>
            <p>
              When you{" "}
              <Link className="internal-link" to="/combat-abilities#rally">
                rally
              </Link>
              , you <ToolTip preset="heal" /> additional hit points equal to
              your proficiency bonus.
            </p>
          </div>
        ),
      },
      {
        title: "Energy Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                Protective runes inscribed on armor or clothes guard the wearer
                from the elements.
              </i>
            </p>
            <p>
              Each energy armor is attuned to one of the elements chosen upon
              creation: arcane, cold, holy, fire, lightning, psychic, necrotic,
              toxic, or unholy. You gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#resistances-and-weaknesses"
              >
                resistance
              </Link>{" "}
              to the armor’s attuned damage type equal to your tier.
            </p>
          </div>
        ),
      },
      {
        title: "Mountain Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                Dwarven runes inscribed on armor or clothes keep the wearer
                unmoveable.
              </i>
            </p>
            <p>
              Creatures take <Modifier type="mf" count="1" /> on abilities that
              push you or knock you{" "}
              <Link className="internal-link" to="/conditions#prone">
                prone
              </Link>
              .
            </p>
          </div>
        ),
      },
      {
        title: "Sacrificial Shield",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This shield can be quickly sacrificed to save yourself.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Sacrifice Shield"
              actType="Reaction"
              descriptor="Your shield absorbs a mighty blow that breaks it into pieces."
              keywords="Magic"
              trigger="You take damage"
              effect="Reduce the triggering damage to 0, but then your shield shatters to pieces. At the end of the scene, the shield magically reforms itself."
              frequency="At-will"
            />
          </div>
        ),
      },
      {
        title: "Vengeful Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                Evocation runes inscribed on armor or clothes send out harmful
                magic against enemies.
              </i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Vengeful Retaliation"
              actType="Reaction"
              trigger="You take damage from a creature within 1 zone"
              descriptor="As you are hurt, your armor magically lashes out at your attacker."
              keywords="Magic, Range"
              frequency="Encounter"
              effect="Triggering creatures takes arcane damage equal to the damage dealt to you"
            />
          </div>
        ),
      },
    ],
    [
      {
        title: "Animated Shield",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This shield can be animated to protect you or others.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Animate Shield"
              actType="Maneuver"
              descriptor="You set free your shield from your hand to protect your allies."
              keywords="Magic"
              duration="Focus for the scene"
              frequency="Encounter"
              effect="The shield leaves your grasp and can move up to 1 zone away to guard one creature. The chosen creature gains +1 to their Evasion while the shield is hovering around them. Each time you focus on this ability, you can keep the shield on the same creature or move it up to 1 zone to guard another creature."
            />
          </div>
        ),
      },
      {
        title: "Ghost Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This pale armor or clothes is enchanted with necromantic power.
              </i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Ghost Walk"
              actType="Maneuver"
              descriptor="Your body becomes less substantial allowing you to walk through walls."
              keywords="Magic"
              duration="Scene ends"
              frequency="Encounter"
              effect={
                <span>
                  You gain{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#special-movement"
                  >
                    phasing
                  </Link>{" "}
                  and creatures take <Modifier type="mf" count="1" /> on{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack rolls
                  </Link>{" "}
                  against you
                </span>
              }
            />
          </div>
        ),
      },
      {
        title: "Hydra Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>Runes of hydra imagery cover this armor or clothes.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Hydra Regeneration"
              actType="Maneuver"
              descriptor="As you are hurt, your armor heals your wounds."
              keywords="Magic"
              duration="Scene ends"
              frequency="Encounter"
              effect={
                <span>
                  <span>You gain the following:</span>
                  <ul>
                    <li>
                      <span>
                        If you’re <ToolTip preset="shaken" />, then you
                        immediately <ToolTip preset="heal" /> 1 per your tier
                      </span>
                    </li>
                    <li>
                      <span>
                        You gain <ToolTip preset="regen" /> equal to your tier
                        while shaken
                      </span>
                    </li>
                    <li>
                      <span>
                        If you take acid or fire damage, then this regeneration
                        is temporarily disabled on your next turn
                      </span>
                    </li>
                  </ul>
                </span>
              }
            />
          </div>
        ),
      },
      {
        title: "Resilient Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This armor or clothing is enchanted to help its wearer resist
                any ailments.
              </i>
            </p>
            <p>
              You gain <Modifier type="f" count="1" /> to{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome rolls
              </Link>
              .
            </p>
          </div>
        ),
      },
      {
        title: "Warded Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This armor or clothing is warded to reduce incoming physical
                harm..
              </i>
            </p>
            <p>
              You gain physical{" "}
              <Link
                className="internal-link"
                to="/rules/combat#resistances-and-weaknesses"
              >
                resistance
              </Link>{" "}
              equal to your tier. If you already have this resistance, then
              increase it by +1.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        title: "Adamantine Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This armor is crafted with the rarest magical metal, and offers
                the best protection against physical and mystical threats.
              </i>
            </p>
            <p>
              You ignore additional damage taken from the critical success of an
              attack roll.
            </p>
          </div>
        ),
      },
      {
        title: "Dimensional Armor",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This armor has runes of teleportation.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dimensional Jaunt"
              actType="Maneuver"
              descriptor="You use your armor to step farther than possible"
              keywords="Magic, Range"
              target="Up to 1 zone"
              effect={
                <span>
                  You{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#special-movement"
                  >
                    teleport
                  </Link>{" "}
                  up to anywhere within the targeted zone
                </span>
              }
              frequency="At-will"
            />
          </div>
        ),
      },
      {
        title: "Legendary Guardian Shield",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This rare shield helps the user guard anyone from harm.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Warding Recall"
              actType="Reaction"
              descriptor="Your shield surrounds an ally with a magical ward before whisking them away to safety."
              keywords="Magic, Range"
              trigger="You see a creature within 1 zone take damage"
              effect="You reduce the trigering damage to 0, and you can teleport the creature anywhere within 1 zone."
              frequency="Encounter"
            />
          </div>
        ),
      },
    ],
  ];
  const weapons = [
    [
      {
        title: "Bane Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This magical weapon possesses a magical rune attuned against a
                specific type of creature.
              </i>
            </p>
            <p>
              Each bane weapon is enchanted against a creature type from
              aberration, angel, beast, construct, dragon, elemental, fairie,
              fiend, giant, monstrosity, ooze, plant, or undead. This weapon
              deals additional damage equal to your proficiency bonus against
              the item’s chosen creature type.
            </p>
          </div>
        ),
      },
      {
        title: "Energy Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon has been enchanted with destructive energy.</i>
            </p>
            <p>
              Each energy weapon is attuned to a damage type upon creation. This
              weapon deals additional damage equal to your tier of the weapon’s
              attuned damage type.
            </p>
          </div>
        ),
      },
      {
        title: "Keen Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon is crafted with a magically sharp edge.</i>
            </p>
            <p>
              The extra damage on a critical success with a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              using this weapon increases to triple your tier.
            </p>
          </div>
        ),
      },
      {
        title: "Returning Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon returns to your hand after being thrown.</i>
            </p>
            <p>
              If the weapon is a thrown ranged weapon, then it returns to your
              hand after being thrown. If the weapon isn’t a thrown ranged
              weapon, then it can be used as a thrown ranged weapon. It deals a
              thrown ranged weapon’s damage when thrown and then returns back to
              your hand.
            </p>
          </div>
        ),
      },
      {
        title: "Terror Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon strikes magical fear in the minds of your foes.</i>
            </p>
            <p>
              On a successful{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              using this weapon, the target becomes
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (turn ends).
            </p>
          </div>
        ),
      },
      {
        title: "Transforming Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon can transform into another weapon.</i>
            </p>
            <p>
              As a free action, you can transform this weapon into another
              weapon group, weapon type, or both.
            </p>
          </div>
        ),
      },
      {
        title: "Vampiric Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This weapon oozes necrotic magic that drains the life of your
                foes.
              </i>
            </p>
            <p>
              On a critical successful{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              using this weapon, you gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your proficiency bonus (scene ends).
            </p>
          </div>
        ),
      },
      {
        title: "Wounding Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This weapon is crafted with a jagged edge or other vicious
                design.
              </i>
            </p>
            <p>
              On a critically successful{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              using this weapon, the target takes 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              physical damage per your tier.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        title: "Greater Energy Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon has been enchanted with destructive energy.</i>
            </p>
            <p>
              Each energy weapon is attuned to a damage type upon creation. This
              weapon deals additional damage equal to your tier of the weapon’s
              attuned damage type. On a critical successful{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , the target takes 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              damage per your tier of the chosen damage type.
            </p>
          </div>
        ),
      },
      {
        title: "Greater Vampiric Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This weapon oozes necrotic magic that drains the life of your
                foes.
              </i>
            </p>
            <p>
              This weapon deals additional necrotic damage equal to your tier.
              On a critical successful{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              using this weapon, you gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your proficiency bonus (scene ends).
            </p>
          </div>
        ),
      },
      {
        title: "Greater Wounding Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This weapon is crafted with a jagged edge or other vicious
                design.
              </i>
            </p>
            <p>
              On a successful{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              using this weapon, the target takes 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              physical damage per your tier.
            </p>
          </div>
        ),
      },
      {
        title: "Phasing Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This magical weapon possesses a magical rune attuned against a
                specific type of creature.
              </i>
            </p>
            <p>
              This relic can only be a ranged weapon. When{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              using this weapon, ignore any penalty from{" "}
              <Link className="internal-link" to="/rules/combat#stealth">
                cover
              </Link>
              .
            </p>
          </div>
        ),
      },
    ],
    [
      {
        title: "Animated Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon can be animated to fight for you.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Animate Weapon"
              actType="Maneuver"
              descriptor="You set free your weapon from your hand to attack your foes."
              keywords="Magic"
              duration="Focus for the scene"
              frequency="Encounter"
              effect={
                <span>
                  The weapon can{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>{" "}
                  a creature and move up to 1 zone before the strike. Each time
                  you focus on this ability, the weapon can move up to 1 zone
                  and strike
                </span>
              }
            />
          </div>
        ),
      },
      {
        title: "Luck Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon is imbued with good fortune.</i>
            </p>
            <p>
              Whenever you get a failure on a{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              with this weapon, you can reroll the{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              and take the higher result.
            </p>
          </div>
        ),
      },
      {
        title: "Superior Energy Weapon",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This weapon has been enchanted with destructive energy.</i>
            </p>
            <p>
              Each energy weapon is attuned to a damage type upon creation. This
              weapon deals additional damage equal to your tier of the weapon’s
              attuned damage type. On a critical successful{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , the target takes 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              damage per your tier of the chosen damage type.
            </p>
            <p>You also gain the following ability:</p>
            <AbilityCard
              name="Energy Burst"
              actType="Action"
              descriptor="You unleash an explosion of elemental power from your weapon."
              keywords="Escalation, Magic"
              target="1d4+1 enemies within your zone"
              defense="Special"
              damage="3 damage per your tier. The damage type matches the weapon’s chosen damage type. The targeted defense is Evasion or Resolve (pschic only)."
              frequency="Encounter"
            />
          </div>
        ),
      },
      {
        title: "Vorpal Sword",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This blade has a supernaturally sharp edge</i>
            </p>
            <p>
              This magic item can only be a blade weapon. You gain the following
              ability:
            </p>
            <AbilityCard
              name="Decapitate"
              actType="Reaction"
              descriptor="As you land a sure strike, your magically sharp blade slices off your foe’s head."
              keywords="Magic"
              trigger={
                <span>
                  You get a critical success on a{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>{" "}
                  with this weapon against a creature with a head
                </span>
              }
              effect={
                <span>
                  Target must succeed on an{" "}
                  <Link className="internal-link" to="/rules/combat#overcome">
                    overcome roll
                  </Link>{" "}
                  or die. Major and boss enemies make this roll twice, and take
                  the highest result.
                </span>
              }
            />
          </div>
        ),
      },
    ],
  ];
  const magicImplements = [
    [
      {
        title: "Magic Wand",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This wand is empowered with magic.</i>
            </p>
            <p>
              This magical wand is infused with a tier 1{" "}
              <Link className="internal-link" to="/battle-spells">
                battle spell
              </Link>{" "}
              . Once per{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                short rest
              </Link>
              , you can cast the wand’s spell of a spell tier equal to your tier
              without spending mana.
            </p>
            <p>
              If you don’t know the spell’s tradition of the wand, you can still
              attempt to cast the spell, but you must make either a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
              with the skill tier matching the spell’s tier.
            </p>
          </div>
        ),
      },
      {
        title: "Rod of Piercing",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This rod amplifies your magic to pierce through your foe’s
                defenses.
              </i>
            </p>
            <p>You also gain the following ability:</p>
            <AbilityCard
              name="Pierce Resistances"
              actType="Reaction"
              descriptor="You weaken a foe's defenses."
              keywords="Magic, Range"
              trigger={
                <span>
                  You deal damage to a creature but their{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#resistances-and-weaknesses"
                  >
                    resistances
                  </Link>{" "}
                  reduces the damage
                </span>
              }
              effect="Ignore the triggering creature's resistances to your damage."
              frequency="At-will"
            />
          </div>
        ),
      },
      {
        title: "Staff of Magic",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This staff is empowered with magic.</i>
            </p>
            <p>
              This magical staff is infused with a{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              and a tier 0 battle spell from that tradition that you can cast
              using the staff. While holding the staff, you can cast spells from
              the infused tradition without making a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
              .
            </p>
          </div>
        ),
      },
      {
        title: "Staff of Summoning",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This staff is decorated with carvings of otherworldly beings.
              </i>
            </p>
            <p>
              When you conjure a creature using a summon ability, the summoned
              creature gains{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your proficiency bonus (scene ends), or your tier if you
              summoned multiple creatures with one ability.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        title: "Greater Magic Wand",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This wand is empowered with magic.</i>
            </p>
            <p>
              This magical wand is infused with a tier 2{" "}
              <Link className="internal-link" to="/battle-spells">
                battle spell
              </Link>{" "}
              . Once per{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                short rest
              </Link>
              , you can cast the wand’s spell of a spell tier equal to your tier
              without spending mana.
            </p>
            <p>
              If you don’t know the spell’s tradition of the wand, you can still
              attempt to cast the spell, but you must make either a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
              with the skill tier matching the spell’s tier.
            </p>
          </div>
        ),
      },
      {
        title: "Greater Staff of Magic",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This staff is empowered with magic.</i>
            </p>
            <p>
              This magical staff is infused with a{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              , and a tier 0 battle spell and tier 1 battle spell from that
              tradition. You can cast these spells using the staff. While
              holding the staff, you can cast spells from the infused tradition
              without making a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
              .
            </p>
          </div>
        ),
      },
    ],
    [
      {
        title: "Staff of the Mage",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This staff is enchanted with the strongest of magic.</i>
            </p>
            <p>You gain the following features while holding the staff:</p>
            <ul>
              <li>
                <span>Your mana increses by +1</span>
              </li>
              <li>
                <span>Your Evasion increases by +1 while unarmored</span>
              </li>
              <li>
                <span>
                  As a maneuver, you can break the staff to unleash an explosion
                  of arcane fury. Make an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against the Evasion of each creature within 1 zone, including
                  yourself, dealing 12 arcane damage. Any creature reduced to 0
                  hit points from this damage is killed.
                </span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Superior Magic Wand",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This wand is empowered with magic.</i>
            </p>
            <p>
              This magical wand is infused with a tier 3{" "}
              <Link className="internal-link" to="/battle-spells">
                battle spell
              </Link>{" "}
              . Once per{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                short rest
              </Link>
              , you can cast the wand’s spell of a spell tier equal to your tier
              without spending mana.
            </p>
            <p>
              If you don’t know the spell’s tradition of the wand, you can still
              attempt to cast the spell, but you must make either a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
              with the skill tier matching the spell’s tier.
            </p>
          </div>
        ),
      },
      {
        title: "Superior Staff of Magic",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This staff is empowered with magic.</i>
            </p>
            <p>
              This magical staff is infused with a{" "}
              <Link className="internal-link" to="/battle-spells">
                magic tradition
              </Link>{" "}
              , and a tier 0 battle spell, tier 1 battle spell, and tier 2
              battle spel from that tradition. You can cast these spells using
              the staff. While holding the staff, you can cast spells from the
              infused tradition without making a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
              .
            </p>
          </div>
        ),
      },
    ],
  ];
  const other = [
    [
      {
        title: "Acrobatic Boots",
        content: (
          <div className="item">
            <p className="item__description">
              <i>You can spring to your feet in an instant with these boots.</i>
            </p>
            <p>
              While wearing the boots, you can{" "}
              <Link className="internal-link" to="/combat-abilities#stand">
                stand
              </Link>{" "}
              as a free action on your turn.
            </p>
          </div>
        ),
      },
      {
        title: "Belt of Vitality",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This belt strengthens your constitution.</i>
            </p>
            <p>
              While wearing this belt, your hit points increase by your
              proficiency bonus. You lose these extra hit points if you take off
              the belt.
            </p>
          </div>
        ),
      },
      {
        title: "Cloak of Shadows",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This magical weapon possesses an elemental rune.</i>
            </p>
            <p>
              While aligned to this item, you gain{" "}
              <Modifier type="f" count="1" /> on{" "}
              <Link className="internal-link" to="/rules/skills">
                skill rolls
              </Link>{" "}
              on sneaky actions to avoid detection.{" "}
            </p>
          </div>
        ),
      },
      {
        title: "Dimensional Boots",
        content: (
          <div className="item">
            <p className="item__description">
              <i>You can teleport short distances using these boots.</i>
            </p>
            <p>
              Once per{" "}
              <Link className="internal-link" to="/rules/adventuring#resting">
                short rest
              </Link>
              , while wearing these boots, you can cast the{" "}
              <Link
                className="internal-link"
                to="/battle-spells#teleportation-dimensional-step"
              >
                dimensional step
              </Link>{" "}
              battle spell at a spell tier equal to your tier without spending
              mana.
            </p>
          </div>
        ),
      },
      {
        title: "Gauntlets of Giant Strength",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These gauntlets are imbued with the magical might of giants.
              </i>
            </p>
            <p>
              While wearing these gauntlets, you gain{" "}
              <Modifier count="1" type="f" /> to{" "}
              <Link className="internal-link" to="/combat-abilities#disarm">
                disarm
              </Link>
              ,{" "}
              <Link className="internal-link" to="/combat-abilities#grab">
                grab
              </Link>
              ,{" "}
              <Link className="internal-link" to="/combat-abilities#shove">
                shove
              </Link>
              ,{" "}
              <Link className="internal-link" to="/combat-abilities#trip">
                trip
              </Link>
              , and skill rolls involving physical strength.
            </p>
          </div>
        ),
      },
      {
        title: "Goggles of Night",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These goggles let you see in the dark as if it were daytime.
              </i>
            </p>
            <p>
              While wearing these goggles, you have <ToolTip preset="night" />.
            </p>
          </div>
        ),
      },
      {
        title: "Ring of Freedom",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This ring is carved with symbols of chains being broken.</i>
            </p>
            <p>
              While wearing this ring, you gain <Modifier count="1" type="f" />{" "}
              on{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome rolls
              </Link>{" "}
              against ending the
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              or{" "}
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              conditions.
            </p>
          </div>
        ),
      },
      {
        title: "Spider Climbing Boots",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These boots stick to walls and other surfaces to make it easier
                to climb.
              </i>
            </p>
            <p>
              While wearing these boots, you gain a climb speed equal to your
              land speed.
            </p>
          </div>
        ),
      },
      {
        title: "Striding Boots",
        content: (
          <div className="item">
            <p className="item__description">
              <i>These boots can briefly enhance one’s speed.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              descriptor="By clicking the boots together, you gain a burst of speed."
              name="Nimble Step"
              actType="Free"
              frequency="Encounter"
              keywords="Magical"
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
          </div>
        ),
      },
      {
        title: "Webbed Boots",
        content: (
          <div className="item">
            <p className="item__description">
              <i>These boots have webbing to help you swim underwater.</i>
            </p>
            <p>
              While wearing these boots, you gain a swim speed equal to your
              land speed.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        title: "Boots of Speed",
        content: (
          <div className="item">
            <p className="item__description">
              <i>These boots let you stride quicker than normal.</i>
            </p>
            <p>While wearing these boots, your land speed increases by +1.</p>
          </div>
        ),
      },
      {
        title: "Bracers of Defense",
        content: (
          <div className="item">
            <p className="item__description">
              <i>These bracers ward your body from physical harm.</i>
            </p>
            <p>While wearing these bracers, you gain +1 to your Evasion.</p>
          </div>
        ),
      },
      {
        title: "Communication Stones",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These two small stones are covered in runes of arcane magic.
              </i>
            </p>
            <p>
              These stones come in pairs. While holding onto one stone, one can
              have a telepathic conversation with the holder of the other stone
              as long as both stones are in the same realm.
            </p>
          </div>
        ),
      },
      {
        title: "Dimensional Shackles",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These rune covered manacles prevent a creature from teleporting.
              </i>
            </p>
            <p>
              As an action can apply these shackles to a{" "}
              <Link className="internal-link" to="/rules/combat#engaged">
                engaged
              </Link>{" "}
              creature by making an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              against the target’s Might. On a success, the target is{" "}
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              and can’t{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              while seized. The target can’t make{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome rolls
              </Link>{" "}
              to break out, but instead can spend an action to succeed on a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              to break free with the challenge’s tier matching your tier.
            </p>
          </div>
        ),
      },
      {
        title: "Greater Belt of Vitality",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This belt strengthens your constitution.</i>
            </p>
            <p>
              While wearing this belt, your hit points increase by your
              proficiency bonus and your recoveries increase by 1. You lose
              these extra hit points and recovery if you take off the belt.
            </p>
          </div>
        ),
      },
      {
        title: "Greater Cloak of Shadows",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This magical weapon possesses an elemental rune.</i>
            </p>
            <p>
              While aligned to this item, you gain{" "}
              <Modifier type="f" count="1" /> on{" "}
              <Link className="internal-link" to="/rules/skills">
                skill rolls
              </Link>{" "}
              on sneaky actions to avoid detection. You can cast the{" "}
              <Link
                className="internal-link"
                to="/ritual-spells#tier1-invisibility"
              >
                invisibility
              </Link>{" "}
              ritual spell at spell tier 2 through the cloak, and can add your
              proficiency bonus to the{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
              skill roll even if you don't know magic.
            </p>
          </div>
        ),
      },
      {
        title: "Greater Gauntlets of Giant’s Strength",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These gauntlets are imbued with the magical might of giants.
              </i>
            </p>
            <p>
              While wearing these gauntlets, you gain{" "}
              <Modifier type="f" count="1" /> to{" "}
              <Link className="internal-link" to="/combat-abilities#disarm">
                disarm
              </Link>
              ,{" "}
              <Link className="internal-link" to="/combat-abilities#grab">
                grab
              </Link>
              ,{" "}
              <Link className="internal-link" to="/combat-abilities#shove">
                shove
              </Link>
              ,{" "}
              <Link className="internal-link" to="/combat-abilities#trip">
                trip
              </Link>
              , and skill rolls involving athleticism. You also gain the
              following ability:
            </p>
            <AbilityCard
              descriptor="The gauntlets enlarge your body."
              name="Giant Form"
              actType="Maneuver"
              duration="Scene ends"
              frequency="Encounter"
              keywords="Magical"
              effect="Your size increases by one size"
            />
          </div>
        ),
      },
      {
        title: "Headband of Will",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This headband protects the user’s mind.</i>
            </p>
            <p>While wearing this headband, your Resolve by +1.</p>
          </div>
        ),
      },
      {
        title: "Helm of Endurance",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This helm strengths your body against harm.</i>
            </p>
            <p>While wearing this helm, your Might by +1.</p>
          </div>
        ),
      },
      {
        title: "Miniature Boat",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This miniature replica of a rowboat can grow in size.</i>
            </p>
            <p>
              As an action, you can transform the miniature boat into a rowboat
              large enough to fit half a dozen people. You can transform the
              rowboat back to its smaller form as an action.
            </p>
          </div>
        ),
      },
      {
        title: "Portable Hole",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These two small stones are covered in runes of arcane magic.
              </i>
            </p>
            <p>
              As a maneuver, you can apply the silk cloth to a surface which
              instantly creates a medium sized entrance to an extra-dimensional
              space 10 feet wide and 10 feet long. You can spend a maneuver to
              pick up the cloth and close the portal to the miniature dimension.
            </p>
          </div>
        ),
      },
      {
        title: "Revealing Dust",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                A bag of magical dust that sparkles in the air and reveals the
                invisible.
              </i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              descriptor="You throw magical dust into the air to reveal invisible foes."
              name="Revealing Dust"
              actType="Maneuver"
              duration="Scene ends"
              frequency="Encounter"
              keywords="Magical"
              target="Your zone"
              effect={
                <span>
                  Any{" "}
                  <Link className="internal-link" to="/rules/combat#stealth">
                    invisible
                  </Link>{" "}
                  creature or objects that starts their turn in the affected
                  zone or enters the affected zone becomes visible (scene ends)
                </span>
              }
            />
          </div>
        ),
      },
      {
        title: "Winged Boots",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                These boots have miniature feathered wings attached to them.
              </i>
            </p>
            <p>
              While wearing these boots, you gain a fly speed equal to your land
              speed.
            </p>
          </div>
        ),
      },
    ],
    [
      {
        title: "Glasses of True Sight",
        content: (
          <div className="item">
            <p className="item__description">
              <i>These glasses let you see anyone hidden from you.</i>
            </p>
            <p>
              While wearing these glasses, you can see anyone{" "}
              <Link className="internal-link" to="/rules/combat#stealth">
                invisible
              </Link>
              .
            </p>
          </div>
        ),
      },
      {
        title: "Ring of Heroism",
        content: (
          <div className="item">
            <p className="item__description">
              <i>
                This golden ring is carved with symbols of legendary heroes.
              </i>
            </p>
            <p>
              While wearing this ring, your proficiency bonus increases by +1.
            </p>
          </div>
        ),
      },
      {
        title: "Ring of Invisibility",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This ring is made of almost translucent silver.</i>
            </p>
            <p>
              While wearing this ring, you can use an action to become
              <Link className="internal-link" to="/rules/combat#stealth">
                invisible
              </Link>
              . The invisibility ends if you use a hostile ability or end the
              invisibility as a free action.
            </p>
          </div>
        ),
      },
      {
        title: "Ring of Regeneration",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This ring is carved with symbols of chains being broken.</i>
            </p>
            <p>
              While wearing this ring, you gain <ToolTip preset="regen" /> equal
              to your tier while <ToolTip preset="shaken" />.
            </p>
          </div>
        ),
      },
      {
        title: "Scarab of Invulnerability",
        content: (
          <div className="item">
            <p className="item__description">
              <i>This golden scarab shields its user.</i>
            </p>
            <p>You gain the following ability:</p>
            <AbilityCard
              descriptor="The magical scarab wards you from all harm."
              name="Perfect Invulnerability"
              actType="Maneuver"
              duration="End of your next turn"
              frequency="Encounter"
              keywords="Magical"
              effect="Any damage you take is reduced to 0"
            />
          </div>
        ),
      },
    ],
  ];

  return (
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Relics</h1>
        <p>
          Magic armor, weapons, wands, and other items of power with reliable
          magical effects are all relics. You must align yourself to a relics
          before you can properly use it.
        </p>
        <Accordion
          title="Rules on Relics"
          content={
            <div>
              <h3 className="header">Aligning Relics</h3>
              <p>
                Relics require heroes to align their energy to the item before
                they can properly use it. You can align to a relic during a{" "}
                <Link className="internal-link" to="/rules/adventuring#resting">
                  short rest
                </Link>
                . You can align to a number of relics equal to your tier, which
                is referred to as your <b>align limit</b>. If you try to align
                to another relic despite already being at your align limit, then
                you need to unalign from another relic.
              </p>
              <p>
                Only one person can be aligned to a relic at a time. If you
                align to a relic already aligned by someone else, then you
                remove that person’s connection to the relic. This connection
                naturally breaks if the person aligned to the relic dies or
                voluntarily ends their connection during a short rest.
              </p>
              <h3 className="header">Equipping Relic</h3>
              <p>
                Relics that require to be worn or wielded usually change size to
                fit whoever aligns to them. A giant flaming sword used by a
                giant might shrink down to a smaller blade for a short goblin.
                The GM can rule that a relic doesn’t change size if it fits the
                story, such as magical dragon armor only fitting a dragon.
              </p>
              <h3 className="header">Transferring Magic</h3>
              <p>
                You can transfer the magic of a relic to a mundane item. This
                process can be done during a short rest. The hero transferring
                the magic of a relic must be aligned to it. The transferer must
                succeed on a{" "}
                <Link className="internal-link" to="/rules/skills">
                  skill roll
                </Link>{" "}
                with the skill tier equaling the relic’s item tier.
              </p>
              <ul>
                <li>
                  <span>
                    <b>Critical Success:</b> Same as a success, and the next
                    time you attempt to transfer a relic's magic, you gain{" "}
                    <Modifier type="f" count="1" /> to the skill roll.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Success:</b>
                  </span>{" "}
                  You successfully transfer the magic from the original item to
                  the new item.
                </li>
                <li>
                  <span>
                    <b>Partial Success:</b> You fail to transfer the magic, and
                    you can’t try again until after a{" "}
                    <Link
                      className="internal-link"
                      to="/rules/adventuring#resting"
                    >
                      long rest
                    </Link>
                    .
                  </span>
                </li>
                <li>
                  <span>
                    <b>Failure:</b> Same as a partial success, but the next time
                    you attempt to transfer the relic's magic, you take{" "}
                    <Modifier type="mf" count="1" /> to the skill roll.
                  </span>
                </li>
              </ul>
            </div>
          }
        />
        <Accordion
          title="Buying and Selling Relics"
          content={
            <div>
              <p>
                Most relics are found during adventuring, but depending on the
                GM's setting, relics might also be for sale in larger
                settlements. If so, you can use the following prices for relics
                depending on their item tier:
              </p>
              <ul>
                <li>
                  <span>
                    <b>Tier 1:</b> 5 gold
                  </span>
                </li>
                <li>
                  <span>
                    <b>Tier 2:</b> 15 gold
                  </span>
                </li>
                <li>
                  <span>
                    <b>Tier 3:</b> 30 gold
                  </span>
                </li>
              </ul>
              <p>
                Tier 3 relics are the most powerful magical items in the world,
                and are rarely found for sale.
              </p>
            </div>
          }
        />

        <div className="equipment-content__tabs">
          <div
            className="tab-items__tab"
            onClick={handleArmor}
            data-selected={isArmor}
          >
            <p>Armor</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleImplement}
            data-selected={isImplement}
          >
            <p>Implements</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleWeapon}
            data-selected={isWeapons}
          >
            <p>Weapons</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleOther}
            data-selected={isOther}
          >
            <p>Other Items</p>
          </div>
        </div>

        {isArmor && (
          <div>
            <h2>Relic Armor</h2>
            {armor.map((armor, index) => (
              <div key={index}>
                <h3>Tier {index + 1} Armor</h3>
                {armor.map(({ title, content }, index) => (
                  <Accordion
                    key={index}
                    stacked
                    title={title}
                    content={content}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        {isWeapons && (
          <div>
            <h2>Relic Weapons</h2>
            {weapons.map((weapon, index) => (
              <div key={index}>
                <h3>Tier {index + 1} Weapons</h3>
                {weapon.map(({ title, content }, index) => (
                  <Accordion
                    key={index}
                    stacked
                    title={title}
                    content={content}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        {isImplement && (
          <div>
            <h2>Relic Implements</h2>
            {magicImplements.map((implement, index) => (
              <div key={index}>
                <h3>Tier {index + 1} Implements</h3>
                {implement.map(({ title, content }, index) => (
                  <Accordion
                    key={index}
                    stacked
                    title={title}
                    content={content}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        {isOther && (
          <div>
            <h2>Other Relic Items</h2>
            {other.map((item, index) => (
              <div key={index}>
                <h3>Tier {index + 1} Item</h3>
                {item.map(({ title, content }, index) => (
                  <Accordion
                    key={index}
                    stacked
                    title={title}
                    content={content}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Relics;
