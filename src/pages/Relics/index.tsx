import "./index.scss";
import EquipmentHeader from "../../components/EquipmentHeader";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import AbilityCard from "../../components/AbilityCard";
import Modifier from "../../components/Modifier";
import OtherGoods from "../Other Goods";

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
        title: 'Battleforged Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>This armor or clothing is enchanted to help its wearer stay alive during battle.</i></p>
            <p>When you Rally, you regain additional hit points equal to your proficiency bonus.</p>
          </div>
        )
      },
      {
        title: 'Energy Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>Protective runes inscribed on armor or clothes guard the wearer from the elements.</i></p>
            <p>Each energy armor is attuned to one of the elements chosen upon creation: arcane, cold, holy, fire, lightning, psychic, necrotic, toxic, or unholy. You gain resistance to the armor’s attuned damage type equal to your tier.</p>
          </div>
        )
      },
      {
        title: 'Mountain Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>Dwarven runes inscribed on armor or clothes keep the wearer unmoveable.</i></p>
            <p>Creatures take <Modifier type="mf" count="1" /> on abilities that push you or knock you prone.</p>
          </div>
        )
      },
      {
        title: 'Sacrificial Shield',
        content: (
          <div className="item">
            <p className="item__description"><i>This shield can be quickly sacrificed to save yourself.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Sacrifice Shield"
              actType="Reaction"
              descriptor="Your shield absorbs a mighty blow that breaks it into pieces."
              keywords= "Magic"
              trigger="You take damage"
              effect="Reduce the triggering damage to 0, but then your shield shatters to pieces. At the end of the scene, the shield magically reforms itself."
              frequency="At-will"
            />
          </div>
        )
      },
      {
        title: 'Vengeful Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>Evocation runes inscribed on armor or clothes send out harmful magic against enemies.</i></p>
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
        )
      },
    ],
    [
      {
        title: 'Animated Shield',
        content: (
          <div className="item">
            <p className="item__description"><i>This shield can be animated to defend you or others.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Animate Shield"
              actType="Maneuver"
              descriptor="You set free your shield from your hand to defend your allies."
              keywords="Magic"
              duration="Focus for the scene"
              frequency="Encounter"
              effect="The shield leaves your grasp and can move up to 1 zone away to guard one creature. The chosen creature gains +1 to their Evasion while the shield is hovering around them. Each time you focus on this ability, you can keep the shield on the same creature or move it up to 1 zone to guard another creature."
            />
          </div>
        )
      },
      {
        title: 'Ghost Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>This pale armor or clothes is enchanted with necromantic power.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Ghost Walk"
              actType="Maneuver"
              descriptor="Your body becomes less substantial allowing you to walk through walls."
              keywords="Magic"
              duration="Scene ends"
              frequency="Encounter"
              effect="You gain phasing and creatures take +1 misfortune on attack rolls against you."
            />
          </div>
        )
      },
      {
        title: 'Hydra Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>Runes of hydra imagery cover this armor or clothes.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Hydra Regeneration"
              actType="Maneuver"
              descriptor="As you are hurt, your armor heals your wounds."
              keywords="Magic"
              duration="Scene ends"
              frequency="Encounter"
              effect={(
                <div>
                  <p>You gain the following:</p>
                  <ul>
                    <li><span>If you’re shaken, then you immediately regain 1 hit point per your tier</span></li>
                    <li><span>You gain regeneration equal to your tier while shaken</span></li>
                    <li><span>If you take acid or fire damage, then this regeneration is temporarily disabled on your next turn</span></li>
                  </ul>
                </div>
              )}
            />
          </div>
        )
      },
      {
        title: 'Resilient Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>This armor or clothing is enchanted to help its wearer resist any ailments.</i></p>
            <p>You gain <Modifier type="f" count="1" /> to overcome rolls.</p>
          </div>
        )
      },
      {
        title: 'Warded Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>This armor or clothing is warded to reduce incoming physical harm..</i></p>
            <p>You gain physical resistance equal to your tier. If you already have this resistance, then increase it by +1.</p>
          </div>
        )
      },
    ],
    [
      {
        title: 'Adamantine Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>This armor is crafted with the rarest magical metal, and offers the best protection against physical and mystical threats.</i></p>
            <p>You ignore additional damage taken from the critical success of an attack roll.</p>
          </div>
        )
      },
      {
        title: 'Dimensional Armor',
        content: (
          <div className="item">
            <p className="item__description"><i>This armor has runes of teleportation.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dimensional Jaunt"
              actType="Maneuver"
              descriptor="You use your armor to step farther than possible"
              keywords= "Magic, Range"
              target="Up to 1 zone"
              effect="You teleport up to anywhere within the targeted zone"
              frequency="At-will"
            />
          </div>
        )
      },
      {
        title: 'Legendary Guardian Shield',
        content: (
          <div className="item">
            <p className="item__description"><i>This rare shield helps the user guard anyone from harm.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Warding Recall"
              actType="Reaction"
              descriptor="Your shield surrounds an ally with a magical ward before whisking them away to safety."
              keywords= "Magic, Range"
              trigger="You see a creature within 1 zone take damage"
              effect="You reduce the trigering damage to 0, and you can teleport the creature anywhere within 1 zone."
              frequency="Encounter"
            />
          </div>
        )
      }
    ],
  ]
  const weapons = [
    [
      {
        title: 'Bane Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This magical weapon possesses a magical rune attuned against a specific type of creature.</i></p>
            <p>Each bane weapon is enchanted against a creature type from aberration, beast, celestial, construct, dragon, elemental, fairie, fiend, giant, monstrosity, ooze, plant, or undead. This weapon deals additional damage equal to your proficiency bonus against the item’s chosen creature type.</p>
          </div>
        )
      },
      {
        title: 'Energy Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon has been enchanted with destructive energy.</i></p>
            <p>Each energy weapon is attuned to a damage type upon creation. This weapon deals additional damage equal to your tier of the weapon’s attuned damage type.</p>
          </div>
        )
      },
      {
        title: 'Keen Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon is crafted with a magically sharp edge.</i></p>
            <p>The extra damage on a critical success with a Strike using this weapon increases to triple your tier.</p>
          </div>
        )
      },
      {
        title: 'Returning Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon returns to your hand after being thrown.</i></p>
            <p>If the weapon is a thrown ranged weapon, then it returns to your hand after being thrown. If the weapon isn’t a thrown ranged weapon, then it can be used as a thrown ranged weapon. It deals a thrown ranged weapon’s damage when thrown and then returns back to your hand.</p>
          </div>
        )
      },
      {
        title: 'Terror Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon strikes magical fear in the minds of your foes.</i></p>
            <p>On a successful Strike using this weapon, the target becomes hindered (turn ends).</p>
          </div>
        )
      },
      {
        title: 'Transforming Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon can transform into another weapon.</i></p>
            <p>As a free action, you can transform this weapon into another weapon group, weapon type, or both.</p>
          </div>
        )
      },
      {
        title: 'Vampiric Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon oozes necrotic magic that drains the life of your foes.</i></p>
            <p>On a critical successful Strike using this weapon, you gain temporary hit points equal to your proficiency bonus (scene ends).</p>
          </div>
        )
      },
      {
        title: 'Wounding Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon is crafted with a jagged edge or other vicious design.</i></p>
            <p>On a critically successful Strike using this weapon, the target takes 1 ongoing physical damage per your tier.</p>
          </div>
        )
      },
    ],
    [
      {
        title: 'Greater Energy Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon has been enchanted with destructive energy.</i></p>
            <p>Each energy weapon is attuned to a damage type upon creation. This weapon deals additional damage equal to your tier of the weapon’s attuned damage type. On a critical successful Strike, the target takes 1 ongoing damage per your tier of the chosen damage type.</p>
          </div>
        )
      },
      {
        title: 'Greater Vampiric Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon oozes necrotic magic that drains the life of your foes.</i></p>
            <p>This weapon deals additional necrotic damage equal to your tier. On a critical successful Strike using this weapon, you gain temporary hit points equal to your proficiency bonus (scene ends).</p>
          </div>
        )
      },
      {
        title: 'Greater Wounding Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon is crafted with a jagged edge or other vicious design.</i></p>
            <p>On a successful Strike using this weapon, the target takes 1 ongoing physical damage per your tier.</p>
          </div>
        )
      },
      {
        title: 'Phasing Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This magical weapon possesses a magical rune attuned against a specific type of creature.</i></p>
            <p>This relic can only be a ranged weapon. When Strike using this weapon, ignore any penalty from cover.</p>
          </div>
        )
      },
    ],
    [
      {
        title: 'Animated Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon can be animated to fight for you.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Animate Weapon"
              actType="Maneuver"
              descriptor="You set free your weapon from your hand to attack your foes."
              keywords="Magic"
              duration="Focus for the scene"
              frequency="Encounter"
              effect="The weapon can Strike a creature and move up to 1 zone before the Strike. Each time you focus on this ability, the weapon can move up to 1 zone and Strike."
            />
          </div>
        )
      },
      {
        title: 'Luck Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon is imbued with good fortune.</i></p>
            <p>Whenever you get a failure on a Strike with this weapon, you can reroll the attack roll and take the higher result.</p>
          </div>
        )
      },
      {
        title: 'Superior Energy Weapon',
        content: (
          <div className="item">
            <p className="item__description"><i>This weapon has been enchanted with destructive energy.</i></p>
            <p>Each energy weapon is attuned to a damage type upon creation. This weapon deals additional damage equal to your tier of the weapon’s attuned damage type. On a critical successful Strike, the target takes 1 ongoing damage per your tier of the chosen damage type.</p>
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
        )
      },
      {
        title: 'Vorpal Sword',
        content: (
          <div className="item">
            <p className="item__description"><i>This blade has a supernaturally sharp edge</i></p>
            <p>This magic item can only be a blade weapon. You gain the following ability:</p>
            <AbilityCard
              name="Decapitate"
              actType="Reaction"
              descriptor="As you land a sure strike, your magically sharp blade slices off your foe’s head."
              keywords="Magic"
              trigger="You get a critical success on a Strike with this weapon against a creature with a head"
              effect="Target must succeed on an overcome roll or die. Major and boss enemies make this roll twice, and take the highest result."
              frequency="At-will"
            />
          </div>
        )
      },
    ],
  ]
  const magicImplements = [
    [
      {
        title: 'Magic Wand',
        content: (
          <div className="item">
            <p className="item__description"><i>This wand is empowered with magic.</i></p>
            <p>This magical wand is infused with a tier 1 battle spell. Once per short rest, you can Spellcast the wand’s spell of a spell tier equal to your tier without spending mana.</p>
            <p>If you don’t know the spell’s tradition of the wand, you can still attempt to Spellcast, but you must make either a skill roll with the challenge tier matching the spell’s tier.</p>
          </div>
        )
      },
      {
        title: 'Rod of Piercing',
        content: (
          <div className="item">
            <p className="item__description"><i>This rod amplifies your magic to pierce through your foe’s defenses.</i></p>
            <p>You also gain the following ability:</p>
            <AbilityCard
              name="Pierce Resistances"
              actType="Reaction"
              descriptor="You weaken a foe's defenses."
              keywords= "Magic, Range"
              trigger="You deal damage to a creature but their resistance reduces the damage"
              effect="Ignore the triggering creature's resistances to your damage."
              frequency="At-will"
            />
          </div>
        )
      },
      {
        title: 'Staff of Magic',
        content: (
          <div className="item">
            <p className="item__description"><i>This staff is empowered with magic.</i></p>
            <p>This magical staff is infused with a magic tradition and a tier 0 battle spell from that tradition that you can Spellcast using the staff. While holding the staff, you can Spellcast spells from the infused tradition without making a skill roll.</p>
          </div>
        )
      },
      {
        title: 'Staff of Summoning',
        content: (
          <div className="item">
            <p className="item__description"><i>This staff is decorated with carvings of otherworldly beings.</i></p>
            <p>When you conjure a creature using a summon ability, the summoned creature gains temporary hit points equal to your proficiency bonus (scene ends), or your tier if you summoned multiple creatures with one ability.</p>
          </div>
        )
      },
    ],
    [
      {
        title: 'Greater Magic Wand',
        content: (
          <div className="item">
            <p className="item__description"><i>This wand is empowered with magic.</i></p>
            <p>This magical wand is infused with a tier 2 battle spell. Once per short rest, you can Spellcast the wand’s spell of a spell tier equal to your tier without spending mana.</p>
            <p>If you don’t know the spell’s tradition of the wand, you can still attempt to Spellcast, but you must make either a skill roll with the challenge tier matching the spell’s tier.</p>
          </div>
        )
      },
      {
        title: 'Greater Staff of Magic',
        content: (
          <div className="item">
            <p className="item__description"><i>This staff is empowered with magic.</i></p>
            <p>This magical staff is infused with a magic tradition, and a tier 0 battle spell and tier 1 battle spell from that tradition. You can Spellcast these spells using the staff. While holding the staff, you can Spellcast spells from the infused tradition without making a skill roll.</p>
          </div>
        )
      },
    ],
    [
      {
        title: 'Staff of the Mage',
        content: (
          <div className="item">
            <p className="item__description"><i>This staff is enchanted with the strongest of magic.</i></p>
            <p>You gain the following features while holding the staff:</p>
            <ul>
              <li><span>Your mana increses by +1</span></li>
              <li><span>Your Evasion increases by +1 while unarmored</span></li>
              <li><span>As a maneuver, you can break the staff to unleash an explosion of arcane fury. Make an attack roll against the Evasion of each creature within 1 zone, including yourself, dealing 12 arcane damage. Any creature reduced to 0 hit points from this damage is killed.</span></li>
            </ul>
          </div>
        )
      },
      {
        title: 'Superior Magic Wand',
        content: (
          <div className="item">
            <p className="item__description"><i>This wand is empowered with magic.</i></p>
            <p>This magical wand is infused with a tier 3 battle spell. Once per short rest, you can Spellcast the wand’s spell of a spell tier equal to your tier without spending mana.</p>
            <p>If you don’t know the spell’s tradition of the wand, you can still attempt to Spellcast, but you must make either a skill roll with the challenge tier matching the spell’s tier.</p>
          </div>
        )
      },
      {
        title: 'Superior Staff of Magic',
        content: (
          <div className="item">
            <p className="item__description"><i>This staff is empowered with magic.</i></p>
            <p>This magical staff is infused with a magic tradition, and a tier 0 battle spell, tier 1 battle spell, and tier 2 battle spel from that tradition. You can Spellcast these spells using the staff. While holding the staff, you can Spellcast spells from the infused tradition without making a skill roll.</p>
          </div>
        )
      },
    ],
  ]
  const other = [
    [
      {
        title: 'Acrobatic Boots',
        content: (
          <div className="item">
            <p className="item__description"><i>You can spring to your feet in an instant with these boots.</i></p>
            <p>While wearing the boots, you can Stand as a free action on your turn.</p>
          </div>
        )
      },
      {
        title: 'Belt of Vitality',
        content: (
          <div className="item">
            <p className="item__description"><i>This belt strengthens your constitution.</i></p>
            <p>While wearing this belt, your hit points increase by your proficiency bonus. You lose these extra hit points if you take off the belt.</p>
          </div>
        )
      },
      {
        title: 'Cloak of Shadows',
        content: (
          <div className="item">
            <p className="item__description"><i>This magical weapon possesses an elemental rune.</i></p>
            <p>While aligned to this item, you gain <Modifier type="f" count="1" /> on skill rolls on sneaky actions to avoid detection. </p>
          </div>
        )
      },
      {
        title: 'Dimensional Boots',
        content: (
          <div className="item">
            <p className="item__description"><i>You can teleport short distances using these boots.</i></p>
            <p>Once per short rest, while wearing these boots, you can Spellcast the dimensional step battle spell at a spell tier equal to your tier without spending mana.</p>
          </div>
        )
      },
      {
        title: 'Gauntlets of Giant Strength',
        content: (
          <div className="item">
            <p className="item__description"><i>These gauntlets are imbued with the magical might of giants.</i></p>
            <p>While wearing these gauntlets, you gain <Modifier count="1" type="f" /> to Grab, Disarm, Shove, and skill rolls involving physical strength.</p>
          </div>
        )
      },
      {
        title: 'Goggles of Night',
        content: (
          <div className="item">
            <p className="item__description"><i>These goggles let you see in the dark as if it were daytime.</i></p>
            <p>While wearing these goggles, you have night vision.</p>
          </div>
        )
      },
      {
        title: 'Ring of Freedom',
        content: (
          <div className="item">
            <p className="item__description"><i>This ring is carved with symbols of chains being broken.</i></p>
            <p>While wearing this ring, you gain <Modifier count="1" type="f" /> on overcome rolls against ending the dazed or seized conditions.</p>
          </div>
        )
      },
      {
        title: 'Spider Climbing Boots',
        content: (
          <div className="item">
            <p className="item__description"><i>These boots stick to walls and other surfaces to make it easier to climb.</i></p>
            <p>While wearing these boots, you gain a climb speed equal to your land speed.</p>
          </div>
        )
      },
      {
        title: 'Striding Boots',
        content: (
          <div className="item">
            <p className="item__description"><i>These boots can briefly enhance one’s speed.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              descriptor="By clicking the boots together, you gain a burst of speed."
              name="Nimble Step"
              actType="Free"
              frequency="Encounter"
              keywords="Magical"
              effect="Disengage or Move"
            />
          </div>
        )
      },
      {
        title: 'Webbed Boots',
        content: (
          <div className="item">
            <p className="item__description"><i>These boots have webbing to help you swim underwater.</i></p>
            <p>While wearing these boots, you gain a swim speed equal to your land speed.</p>
          </div>
        )
      },
    ],
    [
      {
        title: 'Boots of Speed',
        content: (
          <div className="item">
            <p className="item__description"><i>These boots let you stride quicker than normal.</i></p>
            <p>While wearing these boots, your land speed increases by +1.</p>
          </div>
        )
      },
      {
        title: 'Bracers of Defense',
        content: (
          <div className="item">
            <p className="item__description"><i>These bracers ward your body from physical harm.</i></p>
            <p>While wearing these bracers, you gain +1 to your Evasion.</p>
          </div>
        )
      },
      {
        title: 'Communication Stones',
        content: (
          <div className="item">
            <p className="item__description"><i>These two small stones are covered in runes of arcane magic.</i></p>
            <p>These stones come in pairs. While holding onto one stone, one can have a telepathic conversation with the holder of the other stone as long as both stones are in the same realm.</p>
          </div>
        )
      },
      {
        title: 'Dimensional Shackles',
        content: (
          <div className="item">
            <p className="item__description"><i>These rune covered manacles prevent a creature from teleporting.</i></p>
            <p>As an action can apply these shackles to a creature engaged to you by making an attack roll against the target’s Might. On a success, the target is seized and can’t teleport while seized. The target can’t make overcome rolls to break out, but instead  can spend an action to succeed on a skill roll to break free with the challenge’s tier matching your tier.</p>
          </div>
        )
      },
      {
        title: 'Greater Belt of Vitality',
        content: (
          <div className="item">
            <p className="item__description"><i>This belt strengthens your constitution.</i></p>
            <p>While wearing this belt, your hit points increase by your proficiency bonus and your recoveries increase by 1. You lose these extra hit points and recovery if you take off the belt.</p>
          </div>
        )
      },
      {
        title: 'Greater Cloak of Shadows',
        content: (
          <div className="item">
            <p className="item__description"><i>This magical weapon possesses an elemental rune.</i></p>
            <p>While aligned to this item, you gain <Modifier type="f" count="1" /> on skill rolls on sneaky actions to avoid detection. You can Spellcast the invisibility ritual spell at spell tier 2 through the cloak and can add your proficiency bonus to the skill roll even if you don't know magic.</p>
          </div>
        )
      },
      {
        title: 'Greater Gauntlets of Giant’s Strength',
        content: (
          <div className="item">
            <p className="item__description"><i>These gauntlets are imbued with the magical might of giants.</i></p>
            <p>While wearing these gauntlets, you gain <Modifier type="f" count="1" /> to Grab, Disarm, Shove, and Skill Rolls involving physical strength. You also gain the following ability:</p>
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
        )
      },
      {
        title: 'Headband of Will',
        content: (
          <div className="item">
            <p className="item__description"><i>This headband protects the user’s mind.</i></p>
            <p>While wearing this headband, your Resolve by +1.</p>
          </div>
        )
      },
      {
        title: 'Helm of Endurance',
        content: (
          <div className="item">
            <p className="item__description"><i>This helm strengths your body against harm.</i></p>
            <p>While wearing this helm, your Might by +1.</p>
          </div>
        )
      },
      {
        title: 'Miniature Boat',
        content: (
          <div className="item">
            <p className="item__description"><i>This miniature replica of a rowboat can grow in size.</i></p>
            <p>As an action, you can transform the miniature boat into a rowboat large enough to fit half a dozen people. You can transform the rowboat back to its smaller form as an action.</p>
          </div>
        )
      },
      {
        title: 'Portable Hole',
        content: (
          <div className="item">
            <p className="item__description"><i>These two small stones are covered in runes of arcane magic.</i></p>
            <p>As a maneuver, you can apply the silk cloth to a surface which instantly creates a medium sized entrance to an extra-dimensional space 10 feet wide and 10 feet long. You can spend a maneuver to pick up the cloth and close the portal to the miniature dimension.</p>
          </div>
        )
      },
      {
        title: 'Revealing Dust',
        content: (
          <div className="item">
            <p className="item__description"><i>A bag of magical dust that sparkles in the air and reveals the invisible.</i></p>
            <p>You gain the following ability:</p>
            <AbilityCard
              descriptor="You throw magical dust into the air to reveal invisible foes."
              name="Revealing Dust"
              actType="Maneuver"
              duration="Scene ends"
              frequency="Encounter"
              keywords="Magical"
              target="Your zone"
              effect="Any invisible creature that starts their turn in the affected zone or enters the affected zone becomes visible"
            />
          </div>
        )
      },
      {
        title: 'Winged Boots',
        content: (
          <div className="item">
            <p className="item__description"><i>These boots have miniature feathered wings attached to them.</i></p>
            <p>While wearing these boots, you gain a fly speed equal to your land speed.</p>
          </div>
        )
      },
    ],
    [
      {
        title: 'Glasses of True Sight',
        content: (
          <div className="item">
            <p className="item__description"><i>These glasses let you see anyone hidden from you.</i></p>
            <p>While wearing these glasses, you can see anyone invisible.</p>
          </div>
        )
      },
      {
        title: 'Ring of Heroism',
        content: (
          <div className="item">
            <p className="item__description"><i>This golden ring is carved with symbols of legendary heroes.</i></p>
            <p>While wearing this ring, your proficiency bonus increases by +1.</p>
          </div>
        )
      },
      {
        title: 'Ring of Invisibility',
        content: (
          <div className="item">
            <p className="item__description"><i>This ring is made of almost translucent silver.</i></p>
            <p>While wearing this ring, you can use an action to become invisible. The invisibility ends if you take a hostile act like attacking a creature or end the invisibility as a free action.</p>
          </div>
        )
      },
      {
        title: 'Ring of Regeneration',
        content: (
          <div className="item">
            <p className="item__description"><i>This ring is carved with symbols of chains being broken.</i></p>
            <p>While wearing this ring, you gain regeneration equal to your tier while shaken.</p>
          </div>
        )
      },
      {
        title: 'Scarab of Invulnerability',
        content: (
          <div className="item">
            <p className="item__description"><i>This golden scarab shields its user.</i></p>
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
        )
      }
    ],
  ]
  
  return (
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Relics</h1>
        <p>Magic armor, weapons, wands, and other items of power with reliable magical effects are all relics. You must align yourself to a relics before you can properly use it.</p>
        <div className="equipment-content__tabs">
          <div className="equipment-content__tabs__tab" onClick={handleArmor}><p>Armor</p></div>
          <div className="equipment-content__tabs__divider">|</div>
          <div className="equipment-content__tabs__tab" onClick={handleImplement}><p>Implements</p></div>
          <div className="equipment-content__tabs__divider">|</div>
          <div className="equipment-content__tabs__tab" onClick={handleWeapon}><p>Weapons</p></div>
          <div className="equipment-content__tabs__divider">|</div>
          <div className="equipment-content__tabs__tab" onClick={handleOther}><p>Other Items</p></div>
        </div>

        {isArmor && (
          <div>
            <h2>Relic Armor</h2>
            {armor.map((armor, index) => (
              <div>
                <h3>Tier {index + 1} Armor</h3>
                {armor.map(({ title, content }) => (
                  <Accordion stacked title={title} content={content} />
                ))}
              </div>
            ))}
          </div>
        )}
        {isWeapons && (
          <div>
            <h2>Relic Weapons</h2>
            {weapons.map((weapon, index) => (
              <div>
                <h3>Tier {index + 1} Weapons</h3>
                {weapon.map(({ title, content }) => (
                  <Accordion stacked title={title} content={content} />
                ))}
              </div>
            ))}
          </div>
        )}
        {isImplement && (
          <div>
            <h2>Relic Implements</h2>
            {magicImplements.map((implement, index) => (
              <div>
                <h3>Tier {index + 1} Implements</h3>
                {implement.map(({ title, content }) => (
                  <Accordion stacked title={title} content={content} />
                ))}
              </div>
            ))}
          </div>
        )}
        {isOther && (
          <div>
            <h2>Other Relic Items</h2>
            {other.map((item, index) => (
              <div>
                <h3>Tier {index + 1} Item</h3>
                {item.map(({ title, content }) => (
                  <Accordion stacked title={title} content={content} />
                ))}
              </div>
            ))}
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Relics