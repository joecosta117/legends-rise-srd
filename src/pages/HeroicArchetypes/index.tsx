import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Accordion from "../../components/Accordion";
import Modifier from "../../components/Modifier";

function HeroicArchetypes() {
  const [selectedArchetype, setSelectedArchetype] = useState('')
  const [isCombat, setCombat] = useState(false)
  const [isMystical, setMystical] = useState(false)
  const [isMulticlass, setMulticlass] = useState(false)

  function handleArchetype(label: string) {
    setSelectedArchetype(label)
  }
  function handleCombat() {
    setCombat(true);
    setMystical(false);
    setMulticlass(false);
  }
  function handleMystical() {
    setCombat(false);
    setMystical(true);
    setMulticlass(false);
  }
  function handleMulticlass() {
    setCombat(false);
    setMystical(false);
    setMulticlass(true);
  }
  const dropdownItems = [
    { label: "Ambusher", onClick: handleArchetype },
    { label: "Arcanist Archetype", onClick: handleArchetype },
    { label: "Archer", onClick: handleArchetype },
    { label: "Bard Archetype", onClick: handleArchetype },
    { label: "Brawler", onClick: handleArchetype },
    { label: "Chronomancer", onClick: handleArchetype },
    { label: "Cleric Archetype", onClick: handleArchetype },
    { label: "Combat Medic", onClick: handleArchetype },
    { label: "Commander Archetype", onClick: handleArchetype },
    { label: "Cryomancer", onClick: handleArchetype },
    { label: "Demonologist", onClick: handleArchetype },
    { label: "Draconic Scion", onClick: handleArchetype },
    { label: "Dreadnought", onClick: handleArchetype },
    { label: "Druid Archetype", onClick: handleArchetype },
    { label: "Dual Wielder", onClick: handleArchetype },
    { label: "Duelist", onClick: handleArchetype },
    { label: "Enchanter", onClick: handleArchetype },
    { label: "Geomancer", onClick: handleArchetype },
    { label: "Graviturgist", onClick: handleArchetype },
    { label: "Hydromancer", onClick: handleArchetype },
    { label: "Illusionist", onClick: handleArchetype },
    { label: "Jumper", onClick: handleArchetype },
    { label: "Knave", onClick: handleArchetype },
    { label: "Lifeweaver", onClick: handleArchetype },
    { label: "Magesmith Archetype", onClick: handleArchetype },
    { label: "Mage Knight", onClick: handleArchetype },
    { label: "Necromancer", onClick: handleArchetype },
    { label: "Occultist Archetype", onClick: handleArchetype },
    { label: "Paladin Archetype", onClick: handleArchetype },
    { label: "Poisoner", onClick: handleArchetype },
    { label: "Protector", onClick: handleArchetype },
    { label: "Psychic", onClick: handleArchetype },
    { label: "Pyromancer", onClick: handleArchetype },
    { label: "Ranger Archetype", onClick: handleArchetype },
    { label: "Rogue Archetype", onClick: handleArchetype },
    { label: "Seraph", onClick: handleArchetype },
    { label: "Shadowmancer", onClick: handleArchetype },
    { label: "Skirmisher", onClick: handleArchetype },
    { label: "Solarian", onClick: handleArchetype },
    { label: "Stormancer", onClick: handleArchetype },
    { label: "Summoner Archetype", onClick: handleArchetype },
    { label: "Swordmage Archetype", onClick: handleArchetype },
    { label: "Thrower", onClick: handleArchetype },
    { label: "Warder", onClick: handleArchetype },
    { label: "Warrior Archetype", onClick: handleArchetype },
    { label: "Wrecker", onClick: handleArchetype },
  ]
  const combatItems = [
    { label: "Ambusher", onClick: handleArchetype },
    { label: "Archer", onClick: handleArchetype },
    { label: "Brawler", onClick: handleArchetype },
    { label: "Combat Medic", onClick: handleArchetype },
    { label: "Dreadnought", onClick: handleArchetype },
    { label: "Dual Wielder", onClick: handleArchetype },
    { label: "Duelist", onClick: handleArchetype },
    { label: "Enchanter", onClick: handleArchetype },
    { label: "Knave", onClick: handleArchetype },
    { label: "Protector", onClick: handleArchetype },
    { label: "Skirmisher", onClick: handleArchetype },
    { label: "Thrower", onClick: handleArchetype },
    { label: "Wrecker", onClick: handleArchetype },
  ]
  const mysticalItems = [
    { label: "Chronomancer", onClick: handleArchetype },
    { label: "Cryomancer", onClick: handleArchetype },
    { label: "Demonologist", onClick: handleArchetype },
    { label: "Draconic Scion", onClick: handleArchetype },
    { label: "Enchanter", onClick: handleArchetype },
    { label: "Geomancer", onClick: handleArchetype },
    { label: "Graviturgist", onClick: handleArchetype },
    { label: "Hydromancer", onClick: handleArchetype },
    { label: "Illusionist", onClick: handleArchetype },
    { label: "Jumper", onClick: handleArchetype },
    { label: "Lifeweaver", onClick: handleArchetype },
    { label: "Mage Knight", onClick: handleArchetype },
    { label: "Necromancer", onClick: handleArchetype },
    { label: "Poisoner", onClick: handleArchetype },
    { label: "Psychic", onClick: handleArchetype },
    { label: "Pyromancer", onClick: handleArchetype },
    { label: "Seraph", onClick: handleArchetype },
    { label: "Shadowmancer", onClick: handleArchetype },
    { label: "Solarian", onClick: handleArchetype },
    { label: "Stormancer", onClick: handleArchetype },
    { label: "Warder", onClick: handleArchetype },
  ]
  const multiclassItems = [
    { label: "Arcanist Archetype", onClick: handleArchetype },
    { label: "Bard Archetype", onClick: handleArchetype },
    { label: "Cleric Archetype", onClick: handleArchetype },
    { label: "Commander Archetype", onClick: handleArchetype },
    { label: "Druid Archetype", onClick: handleArchetype },
    { label: "Magesmith Archetype", onClick: handleArchetype },
    { label: "Occultist Archetype", onClick: handleArchetype },
    { label: "Paladin Archetype", onClick: handleArchetype },
    { label: "Ranger Archetype", onClick: handleArchetype },
    { label: "Rogue Archetype", onClick: handleArchetype },
    { label: "Summoner Archetype", onClick: handleArchetype },
    { label: "Swordmage Archetype", onClick: handleArchetype },
    { label: "Warrior Archetype", onClick: handleArchetype },
  ]

  return (
    <div className='archetypes'>
      <div className='archetypes-content'>
        <div className="archetypes-content__tabs">
          <div className="archetypes-content__tabs__tab" onClick={handleCombat}><p>Combat Style</p></div>
          <div className="archetypes-content__tabs__divider">|</div>
          <div className="archetypes-content__tabs__tab" onClick={handleMystical}><p>Mystical</p></div>
          <div className="archetypes-content__tabs__divider">|</div>
          <div className="archetypes-content__tabs__tab" onClick={handleMulticlass}><p>Multiclass</p></div>
        </div>

        <h1>Heroic Archetypes</h1>
        <p>At 5th level your hero picks a heroic archetype that represent specialized training your character acquires as they gain more heroic experience. A warrior might archetype into archer, pyromancer, wrecker, or more!</p>

        <Accordion title="Heroic Archetype Rules" content={(
          <div>
            <h3>No Restrictions</h3>
            <p>Regardless of your class, you can choose any heroic archetype. A rogue might choose a magical archetype to gain spellcasting or a more martial oriented archetype to become better at fighting.</p>

            <h3>Features</h3>
            <p>Each heroic archetype gives you features at both 5th and 7th level. Archetypes also increase your hit points.</p>

            <h3>Multiclassing</h3>
            <p>Instead of choosing one of the previous heroic archetypes, you can instead choose a second class as an archetype. Your theme doesn’t change, and you only gain the features listed under each class archetype. You can’t choose class talents from your second class.</p>
          </div>
        )} />

        {isCombat && (
          <div>
            <h2>Combat Style Archetypes</h2>
            <p>These heroic archetypes focus on mastering a specific fighting style.</p>
            <Dropdown items={combatItems} startLabel="Select a Heroic Archetype" />
          </div>
        )}
        {isMystical && (
          <div>
            <h2>Mystical Archetypes</h2>
            <p>These heroic archetypes focus on embracing magical power.</p>
            <Dropdown items={mysticalItems} startLabel="Select a Heroic Archetype" />
          </div>
        )}
        {isMulticlass && (
          <div>
            <h2>Multiclass Archetypes</h2>
            <p>These heroic archetypes let you gain features from another class.</p>
            <Dropdown items={multiclassItems} startLabel="Select a Heroic Archetype" />
          </div>
        )}
      
        {(!isMulticlass && !isMystical && !isCombat) && (
          <div>
            <h2>List of Heroic Archetypes</h2>
            <p>You can choose from a large list of heroic archetypes, including multiclassing.</p>

            <Dropdown items={dropdownItems} startLabel="Select a Heroic Archetype" />
          </div>
        )}

        {selectedArchetype === "Ambusher" && (
          <div>
            <h2>Ambusher</h2>
            <p>You favor catching your foe off guard from the shadows.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Ambusher Tactics (5th-Level Feature)</h4>
            <p>You learn the lurker fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Ambusher Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in standard melee weapons, all ranged weapons, and light armor</span></li>
              <li><span>When you start an encounter, you are hidden if narratively appropriate</span></li>
            </ul>
            <h4>Assassinate (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Assassinate"
              actType="Action"
              descriptor="Your surprise attack leaves your foe bleeding if not dead."
              frequency="Encounter"
              keywords="Escalation"
              effect="Strike, and you deal additional damage equal to your proficiency bonus. On a success or higher, the target also takes 1 ongoing physical damage per your tier." 
            />
            <h4>Dread Lurker (7th-Level Feature)</h4>
            <p>You have mastered fighting when unseen. The bonus to your attack rolls from being hidden increases to <Modifier type="f" count="2" />.</p>
          </div>
        )}
        {selectedArchetype === "Arcanist Archetype" && (
          <div>
            <h2>Arcanist Archetype</h2>
            <p>You have begun to learn arcane magic.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the arcanist at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +8</span></li>
              <li><span>You learn the arcane magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>You gain the arcanist’s high magic feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the arcanist’s countermagic feature.</p>
          </div>
        )}
        {selectedArchetype === "Archer" && (
          <div>
            <h2>Archer</h2>
            <p>You have mastered the art of archery, being a ranged threat to any enemy you face.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Archer Tactics (5th-Level Feature)</h4>
            <p>You learn the archery fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Archer Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in all ranged weapons and light armor</span></li>
              <li><span>When you Strike with a ranged weapon, you ignore penalties from cover or concealment</span></li>
            </ul>
            <h4>Volley (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Volley"
              actType="Action"
              descriptor="You fire off multiple arrows at once."
              frequency="Encounter"
              keywords="Escalation"
              effect="Strike with a ranged weapon at all creatures in 1 zone within your weapon’s range" 
            />
            <h4>Heroic Aim (7th-Level Feature)</h4>
            <p>You have mastered the bow. When you Aim, the bonus increases to <Modifier type="f" count="2" />.</p>
          </div>
        )}
        {selectedArchetype === "Bard Archetype" && (
          <div>
            <h2>Bard Archetype</h2>
            <p>You have begun to learn how to weave together performance with magic.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the bard at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +8</span></li>
              <li><span>You learn a magic tradition listed in the bardic magic feature and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>You gain the bard’s bardic performance feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the bard’s expanded performances feature.</p>
          </div>
        )}
        {selectedArchetype === "Brawler" && (
          <div>
            <h2>Brawler</h2>
            <p>Unlike other fighters, you prefer to fight with your body and eschew dependency on a weapon.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +12, and you gain the following features.</p>
            <h4>Brawler Tactics (5th-Level Feature)</h4>
            <p>You learn the brawling fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Brawler Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in light armor</span></li>
              <li><span>Your natural melee weapon base damage increases by +1</span></li>
            </ul>
            <h4>Stunning Knockout (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Stunning Knockout"
              actType="Action"
              descriptor="With a hard hitting punch or kick, you knock your foe so hard they can barely move in pain."
              frequency="Encounter"
              keywords="Escalation"
              effectTiers
              effect="Strike with a natural melee weapon" 
              success="Dazed (scene ends) and prone"
              critical="Same as a success, and 1 ongoing physical damage per your tier"
            />
            <h4>Brawling Technique (7th-Level Feature)</h4>
            <p>You know how to best use your body despite your size. You ignore any penalties from being smaller for Disarm, Grab, Shove, or Trip.</p>
          </div>
        )}
        {selectedArchetype === "Chronomancer" && (
          <div>
            <h2>Chronomancer</h2>
            <p>Chronomancers have learned the dangerous and esoteric magic of manipulating time.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Time Magic (5th-Level Feature)</h4>
            <p>You channel dangerous time magic. You learn the time magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Time Dilation (5th-Level Feature)</h4>
            <p>You learn the chronal adjustment battle spell. At the start of combat before anyone takes a turn, you can Spellcast chronal adjustment as a free action.</p>
            
            <h4>Echo Spell (7th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Echo Spell"
              actType="Reaction"
              descriptor="You hold onto remnants of a spell to conjure an echo of the magic later."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell of a spell tier lower than your tier"
              effect="Until the end of your next turn, you can Spellcast the triggering spell again without spending mana, but you can’t use this ability on that spell." 
            />
          </div>
        )}
        {selectedArchetype === "Cleric Archetype" && (
          <div>
            <h2>Cleric Archetype</h2>
            <p>You have begun to receive divine magic.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the cleric at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +8</span></li>
              <li><span>You learn the holy or unholy magic tradition, and a battle spell from the chosen tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>You gain the cleric’s prayer of healing feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the cleric’s opening prayer feature.</p>
          </div>
        )}
        {selectedArchetype === "Combat Medic" && (
          <div>
            <h2>Combat Medic</h2>
            <p>You focus on guarding yourself and your allies through martial expertise.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Medic Tactics (5th-Level Feature)</h4>
            <p>You learn the medic fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Medic Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in standard melee weapons, thrown ranged weapons, short ranged weapons, and light armor</span></li>
              <li><span>When you or an ally spends a recovery during a short rest, they regain additional HP equal to your proficiency bonus</span></li>
            </ul>
            <h4>Herbal Remedies (5th-Level Feature)</h4>
            <p>You have learned to create herbal salves that can stem bleeding and provide relief in battle. You can create a number of herbal remedies during a short rest equal to your tier, and the remedies' effectiveness fades after the next rest. A creature with the herbal remedy can use a maneuver to apply the salve to gain the following benefits:</p>
            <ul>
              <li><span>Spend a recovery and regain additional hit points equal to your proficiency bonus</span></li>
              <li><span>Make an overcome roll with <Modifier type="f" count="1" /> against an effect</span></li>
            </ul>
            <h4>Greater Remedies (7th-Level Feature)</h4>
            <p>When a creature regains hit points from your herbal remedies, they can remove a wound. A creature can only remove a wound this way once per long rest.</p>
          </div>
        )}
        {selectedArchetype === "Commander Archetype" && (
          <div>
            <h2>Commander Archetype</h2>
            <p>You have learned the art of leadership.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the commander at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +10</span></li>
              <li><span>Training in all armor and weapons.</span></li>
              <li><span>You gain the commanding attack feature.</span></li>
              <li><span>You gain the inspiring attack feature.</span></li>
              <li><span>You gain the quick aid feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the commander’s momentous start feature.</p>
          </div>
        )}
        {selectedArchetype === "Cryomancer" && (
          <div>
            <h2>Cryomancer</h2>
            <p>You harness the frigid might of winter to freeze your foes.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Winter Magic (5th-Level Feature)</h4>
            <p>You command icy magic to disrupt your enemies. You learn the ice magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Frozen Soul (5th-Level Feature)</h4>
            <p>Your cold magic protects you from the harshness of winter. When you deal damage, you ignore a creature's resistance to cold damage. You gain resistance to cold damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Winter’s Grasp (7th-Level Feature)</h4>
            <p>Your magic covers a foe in frost. When you get a success or higher on an attack roll that deals cold damage, the target is also slowed (turn ends).</p>
          </div>
        )}
        {selectedArchetype === "Demonologist" && (
          <div>
            <h2>Demonologist</h2>
            <p>Demonologists channel profane magic from the lower realms, usually having made deals with demons for power.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Demonic Magic (5th-Level Feature)</h4>
            <p>You channel infernal magic to curse others. You learn the unholy magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Infernal Heart (5th-Level Feature)</h4>
            <p>Your heart is as dark as the fiends whose power you channel. When you deal damage, you ignore a creature's resistance to unholy damage. You gain resistance to unholy damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Profane Transformation (7th-Level Feature)</h4>
            <p>Your physical appearance begins to match that of the demons you channel. You gain a fly speed of 1 and night vision.</p>
          </div>
        )}
        {selectedArchetype === "Draconic Scion" && (
          <div>
            <h2>Draconic Scion</h2>
            <p>You admire the power of dragons and seek to emulate their terrifying strength.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Draconic Power (5th-Level Feature)</h4>
            <p>As you tap into the might of dragons, your body begins to transform and gain the following benefits:</p>
            <ul>
              <li><span>You gain dragon-like claws. Your natural melee weapons deal 3 physical damage.</span></li>
              <li><span>Scales begin covering your body. When unarmored, your Evasion increases by +1.</span></li>
              <li><span>Choose cold, fire, lightning, or toxic as your draconic energy. You gain resistance to the chosen damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>

            <h4>Dragon Breath Weapon (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dragon Breath Weapon"
              actType="Action"
              descriptor="You exhale elemental energy like a dragon."
              frequency="Encounter"
              keywords="Escalation, Magical, Range"
              target="1d4+1 enemies within your zone and an adjacent zone"
              defense="EVN"
              damage="3 damage per tier of the damage type chosen by draconic power"
              critical="1 ongoing damage per your tier of the damage type chosen by draconic power"
            />

            <h4>Greater Dragon Power (7th-Level Feature)</h4>
            <p>You grow dragon wings that give you a fly speed of 1. Also, after you use dragon breath weapon, you regain a use of the ability when you become shaken. You can only gain a second use of this ability once per short rest.</p>
          </div>
        )}
        {selectedArchetype === "Dreadnought" && (
          <div>
            <h2>Dreadnought</h2>
            <p>You favor heavier armor and shields, and use them to great effect to become an unstoppable juggernaut.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +12, and you gain the following features.</p>
            <h4>Dreadnought Tactics (5th-Level Feature)</h4>
            <p>You learn the bastion fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Dreadnought Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in all melee weapons and all armor</span></li>
              <li><span>Creatures take <Modifier type="mf" count="1" /> to Disarm, Grab, Shove, or Trip you</span></li>
            </ul>
            <h4>Quick Bulwark (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Quick Bulwark"
              actType="Reaction"
              descriptor="You brace yourself for danger by using your armor to deflect incoming harm."
              frequency="Encounter"
              trigger="You see an enemy make an attack roll against you"
              requirement="You’re wearing heavy armor"
              effect="Triggering enemy rerolls their attack roll, and uses the lowest result" 
            />
            <h4>Fortified Titan (7th-Level Feature)</h4>
            <p>Your armor fortifies your body and mind. While wearing heavy armor, you have resistance to all damage equal to your tier.</p>
          </div>
        )}
        {selectedArchetype === "Druid Archetype" && (
          <div>
            <h2>Druid Archetype</h2>
            <p>You have begun to learn primordial magic.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the druid at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +8</span></li>
              <li><span>You learn the nature magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>You gain the druid's shape terrain feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the druid’s nature’s ally feature.</p>
          </div>
        )}
        {selectedArchetype === "Dual Wielder" && (
          <div>
            <h2>Dual Wielder</h2>
            <p>Unlike other warriors, you favor the deadliness and complicated way of fighting with two melee weapons.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Dual Wielder Tactics (5th-Level Feature)</h4>
            <p>You learn the two weapon fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Dual Wielder Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in standard melee weapons, thrown ranged weapons, short ranged weapons, and light armor</span></li>
              <li><span>When wielding a weapon in each hand, you gain a +1 bonus to Evasion</span></li>
            </ul>
            <h4>Dance of Steel (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dance of Steel"
              actType="Action"
              descriptor="In a flurry of steel and movement, you strike at each nearby foe as you dodge any reprisal."
              frequency="Encounter"
              keywords="Escalation"
              target="All enemies in your zone"
              requirement="You’re wielding a weapon in each hand"
              effect="Strike at each target, and you can Disengage before each Strike" 
            />
            <h4>Dual Laceration (7th-Level Feature)</h4>
            <p>Your flurry of attacks leave a foe bleeding. When you damage a creature with a Strike from each weapon in your hands on the same turn, the target takes 1 ongoing physical damage per your tier.</p>
          </div>
        )}
        {selectedArchetype === "Duelist" && (
          <div>
            <h2>Duelist</h2>
            <p>You prefer to fight with a single melee weapon, and usually in one on one combat.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Duelist Tactics (5th-Level Feature)</h4>
            <p>You learn the dueling fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Duelist Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in standard melee weapons and light armor</span></li>
              <li><span>When wielding a standard melee weapon and have a free hand, you gain a +1 bonus to Evasion</span></li>
            </ul>
            <h4>Duelist’s Challenge (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Duelist’s Challenge"
              actType="Maneuver"
              descriptor="With a flourish of your weapon, you dare a foe to a duel."
              frequency="Encounter"
              keywords="Range"
              target="1 enemy within 1 zone"
              requirement="You’re wielding a standard melee weapon and have a free hand"
              effect="Taunted by you (scene ends), and you gain +1 fortune to Strike the target while they’re taunted by you" 
            />
            <h4>Duelist Movement (7th-Level Feature)</h4>
            <p>When a creature is taunted by you, you are hastened, but can only use the extra maneuver to Disengage or Move.</p>
          </div>
        )}
        {selectedArchetype === "Enchanter" && (
          <div>
            <h2>Enchanter</h2>
            <p>You use subtle mind magic to manipulate the emotions of others.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Enchantment Magic (5th-Level Feature)</h4>
            <p>You begin to master beguiling magic. You learn the enchantment magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Potent Enchantments (5th-Level Feature)</h4>
            <p>Your heart is as dark as the fiends whose power you channel. When you deal damage, you ignore a creature's resistance to psychic damage. You gain resistance to psychic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Master Manipulator (7th-Level Feature)</h4>
            <p>All of your magic infects your foes’ minds. When you get a success or higher on an attack roll that deals psychic damage, the target becomes hindered (turn ends).</p>
          </div>
        )}
        {selectedArchetype === "Geomancer" && (
          <div>
            <h2>Geomancer</h2>
            <p>Geomancers call upon the magic from the earth to manipulate rock and stone.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Earth Magic (5th-Level Feature)</h4>
            <p>You call upon the magic of mountains and other such terrain. You learn the earth magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>One with the Earth (5th-Level Feature)</h4>
            <p>You are connected to the ground, stones, and metal. You ignore the movement penalty from difficult zones and your hit points increase by your proficiency bonus.</p>
            
            <h4>Strength of the Mountains (7th-Level Feature)</h4>
            <p>Your earthen magic slams foes back. When you get a success or higher on an attack roll that deals physical damage, you can knock the target prone.</p>
          </div>
        )}
        {selectedArchetype === "Graviturgist" && (
          <div>
            <h2>Graviturgist</h2>
            <p>Graviturgists call upon the magic of gravity to manipulate space.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Gravity Magic (5th-Level Feature)</h4>
            <p>You use space magic to control gravity. You learn the gravity magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Astral Manipulations (5th-Level Feature)</h4>
            <p>You take half damage from crashing, and when you make a creature take crash damage, the damage is doubled.</p>
            
            <h4>Force Magic (7th-Level Feature)</h4>
            <p>Your gravational magic shoves enemies away from you. When you get a success or higher on an attack roll that deals physical damage, you can push the target within your zone.</p>
          </div>
        )}
        {selectedArchetype === "Hydromancer" && (
          <div>
            <h2>Hydromancer</h2>
            <p>Hydromancers channel the magic of the rivers and seas to move and shape water.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Watery Magic (5th-Level Feature)</h4>
            <p>You channel water magic to call upon the power of rivers and seas. You learn the water magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Aquatic Soul (5th-Level Feature)</h4>
            <p>You gain the protection of the oceans. You can breath underwater, gain a swim speed equal to your land speed, and gain resistance to fire damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Wave Magic (7th-Level Feature)</h4>
            <p>You glide around like on water. When you Spellcast, you can Disengage as a free action.</p>
          </div>
        )}
        {selectedArchetype === "Illusionist" && (
          <div>
            <h2>Illusionist</h2>
            <p>You focus on the artist magic of illusions, and distract your foes with magical trickery.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Illusion Magic (5th-Level Feature)</h4>
            <p>You begin to master illusion magic. You learn the illusion magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Convincing Illusions (5th-Level Feature)</h4>
            <p>Your magical trickery is difficult to disbelieve. Creatures take <Modifier type="mf" count="2" /> to overcome rolls to see through your illusions.</p>
            
            <h4>Trickster's Cloak (7th-Level Feature)</h4>
            <p>Your illusions constantly hide you and your allies. When you Spellcast a battle spell of tier 1 or higher, choose a willing creature within 1 zone. The target becomes invisible (turn ends).</p>
          </div>
        )}
        {selectedArchetype === "Jumper" && (
          <div>
            <h2>Jumper</h2>
            <p>Why walk when you can jump through space? Jumpers master the magic of teleportation.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Dimensional Magic (5th-Level Feature)</h4>
            <p>You begin to learn dimensional hopping magic. You learn the teleportation magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Long Jumper (5th-Level Feature)</h4>
            <p>When you teleport, the range doubles (minimum of 1 zone), and you can bring along a number of willing creatures with you equal to your tier if you can’t normally.</p>
            
            <h4>Dimensional Jaunt (7th-Level Feature)</h4>
            <p>You are constantly teleporting across the battlefield. When you Spellcast a battle spell of tier 1 or higher, choose a willing creature within your zone to teleport up to 1 zone.</p>
          </div>
        )}
        {selectedArchetype === "Knave" && (
          <div>
            <h2>Knave</h2>
            <p>You employ underhand tactics and tricks to get the upper hand on your enemies.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Knave Tactics (5th-Level Feature)</h4>
            <p>You learn the dirty fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Knave Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in all weapons and light armor</span></li>
              <li><span>When you make an attack roll against an exposed creature, the bonus increases to <Modifier type="f" count="2" /></span></li>
            </ul>
            <h4>Blinding Attack (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Blinding Attack"
              actType="Action"
              descriptor="With a vicious cut, you aim for a foe’s eyes."
              frequency="Encounter"
              keywords="Escalation"
              effect="Strike" 
              effectTiers
              success="Blinded (scene ends)"
              critical="Same as a success, and takes 1 ongoing physical damage per your tier while blinded"
            />
            <h4>Vicious Hindrances (7th-Level Feature)</h4>
            <p>You cripple a foe better than most. When a creature takes <Modifier type="mf" /> from one of your abilities, increase the number of <Modifier type="mf" /> by +1.</p>
          </div>
        )}
        {selectedArchetype === "Life Weaver" && (
          <div>
            <h2>Life Weaver</h2>
            <p>You conjure healing magic to soothe the wounds of others.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Vitality Magic (5th-Level Feature)</h4>
            <p>You channel healing magic to restore others. You learn the life magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Restorative Power (5th-Level Feature)</h4>
            <p>When you use a magical ability to make a creature regain hit points, they regain additional hit points equal to the spell’s tier or your tier if the ability isn’t a spell. The creature can also make an overcome roll against an effect.</p>
            
            <h4>Aura of Preservation (7th-Level Feature)</h4>
            <p>You radiate life boosting energy to fend off death. While you aren’t defeated, any creature of your choice within your zone regains 1 hit point if they start their turn dying.</p>
          </div>
        )}
        {selectedArchetype === "Magesmith Archetype" && (
          <div>
            <h2>Magesmith Archetype</h2>
            <p>You tinker with magic to engineer magical items.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the magesmith at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +10</span></li>
              <li><span>You learn a magic tradition listed in the magesmith magic feature, and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>Training in light armor and all weapons</span></li>
              <li><span>You gain the arcane upgrades feature, but you only learn 2 upgrades and don’t learn anymore, unless you spend a class talent to learn an additional upgrade.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the magesmith’s expert relic user feature.</p>
          </div>
        )}
        {selectedArchetype === "Mage Knight" && (
          <div>
            <h2>Mage Knight</h2>
            <p>You blend magic with weapons to achieve devastating effect.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Combat Magic (5th-Level Feature)</h4>
            <p>You gain an understanding of battle magic. You learn the war magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Magic Warrior (5th-Level Feature)</h4>
            <p>You gain training in light armor, shields, and all weapons.</p>
            
            <h4>Charge Weapon (7th-Level Feature)</h4>
            <p>After you Spellcast a battle spell of tier 1 or higher, you empower your weapon with magic (turn ends). While charged, your next Strike deals 1 additional damage per the spell tier. The damage type matches the damage type of the triggering spell, or arcane if the spell didn’t deal damage. </p>
          </div>
        )}
        {selectedArchetype === "Necromancer" && (
          <div>
            <h2>Necromancer</h2>
            <p>You have begun mastering the feared magic of necromancy to untap the secrets behind life and death.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Necrotic Magic (5th-Level Feature)</h4>
            <p>You command necrotic magic to drain your enemies. You learn the death magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Death’s Presence (5th-Level Feature)</h4>
            <p>You have grown accustomed to the negative energy of necromancy. When you deal damage, you ignore a creature's resistance to necrotic damage. You gain resistance to necrotic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Drain Life (7th-Level Feature)</h4>
            <p>When you get a success or higher on an attack roll that deals necrotic damage, you gain temporary hit points equal to half the damage dealt (scene ends).</p>
          </div>
        )}
        {selectedArchetype === "Occultist Archetype" && (
          <div>
            <h2>Occultist Archetype</h2>
            <p>You have begun to tap into dangerous magic.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the occultist at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +8</span></li>
              <li><span>You learn a magic tradition listed in the occultist magic feature, and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>You gain the hex feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the occultist’s disrupting curse feature.</p>
          </div>
        )}
        {selectedArchetype === "Paladin Archetype" && (
          <div>
            <h2>Paladin Archetype</h2>
            <p>You have become empowered by the gods for a divine cause.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the paladin at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +12</span></li>
              <li><span>Training in all armor and weapons.</span></li>
              <li><span>You gain the protective smite feature.</span></li>
              <li><span>You gain the divine smite feature.</span></li>
              <li><span>You gain the restorative touch feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the paladin's zealous blessing feature.</p>
          </div>
        )}
        {selectedArchetype === "Poisoner" && (
          <div>
            <h2>Poisoner</h2>
            <p>Poisoners magically manipulate toxins to burn and infect their enemies.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Toxic Magic (5th-Level Feature)</h4>
            <p>You channel corrosive and poisonous magic. You learn the toxic magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Potent Poison (5th-Level Feature)</h4>
            <p>Your familiarity with poisons and acids is stronger than most. When you deal damage, you ignore a creature's resistance to toxic damage. You gain resistance to toxic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Venomous Magic (7th-Level Feature)</h4>
            <p>Your toxic magic spreads venoms through your enemies’ bodies. When you get a success or higher on an attack roll that deals toxic damage, the target becomes hindered (turn ends).</p>
          </div>
        )}
        {selectedArchetype === "Protector" && (
          <div>
            <h2>Protector</h2>
            <p>You employ underhand tactics and tricks to get the upper hand on your enemies.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +12, and you gain the following features.</p>
            <h4>Protector Tactics (5th-Level Feature)</h4>
            <p>You learn the protective fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Protector Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in melee weapons and all armor</span></li>
              <li><span>When you start your turn with a creature taunted by you, you gain temporary hit points equal to your tier (scene ends)</span></li>
            </ul>
            <h4>Defender’s Challenge (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Defender’s Challenge"
              actType="Maneuver"
              descriptor="With a defiant roar, you goad all your foes to focus their ire on you."
              frequency="Encounter"
              keywords="Range"
              target="Each enemy of your choice within 1 zone"
              defense="RES"
              success="Taunted by you (scene ends)"
              critical="Same as a success, and on their next turn, the target must spend a maneuver to Move towards you"
              partial="Taunted by you (turn ends)"
            />
            <h4>Protector’s Aura (7th-Level Feature)</h4>
            <p>You best draw the ire of your foes. When a creature is taunted by you, the penalty on attack rolls against other creatures increases to <Modifier type="mf" count="2" /> and the taunted creature can’t willingly move further away from you.</p>
          </div>
        )}
        {selectedArchetype === "Psychic" && (
          <div>
            <h2>Psychic</h2>
            <p>Psychics have tapped into the strange and possibly madness inducing magic of the void realm.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Psychic Magic (5th-Level Feature)</h4>
            <p>You channel void magic to affect others with your mind. You learn the eldritch magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Touched by the Void (5th-Level Feature)</h4>
            <p>You gain the following benefits:</p>
            <ul>
              <li><span>You can Spellcast without speaking</span></li>
              <li><span>You can telepathically speak with any nearby creature</span></li>
              <li><span>Resistance to psychic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>
            
            <h4>Minor Telekinesis (7th-Level Feature)</h4>
            <p>You can Disarm, Grab, Shove, and Trip with a range of 1 zone, and those abilities gain the magical and range keyword for you.</p>
          </div>
        )}
        {selectedArchetype === "Pyromancer" && (
          <div>
            <h2>Pyromancer</h2>
            <p>You channel fire magic in all its danger, and use it to burn your foes to ash.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Flame Magic (5th-Level Feature)</h4>
            <p>You channel fire magic to burn others. You learn the fire magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Fiery Soul (5th-Level Feature)</h4>
            <p>You welcome the touch of fire while knowing how to best burn even those familiar with flames. When you deal damage, you ignore a creature's resistance to fire damage. You gain resistance to fire damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Hungry Flames (7th-Level Feature)</h4>
            <p>When you get a success or higher on an attack roll that deals fire damage, the target takes 1 ongoing fire damage per your tier.</p>
          </div>
        )}
        {selectedArchetype === "Ranger Archetype" && (
          <div>
            <h2>Ranger Archetype</h2>
            <p>You have learned to hunt monsters and embrace nature.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the ranger at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +10</span></li>
              <li><span>Training in light armor and all weapons.</span></li>
              <li><span>You gain the studied attack feature.</span></li>
              <li><span>You gain the mark prey feature.</span></li>
              <li><span>You gain the monster bestiary feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the ranger’s favored environment feature.</p>
          </div>
        )}
        {selectedArchetype === "Rogue Archetype" && (
          <div>
            <h2>Rogue Archetype</h2>
            <p>You have to use cunning on the battlefield.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the rogue at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +10</span></li>
              <li><span>Training in light armor, standard melee weapons, and all ranged weapons.</span></li>
              <li><span>You gain the evasive atack feature.</span></li>
              <li><span>You gain the cunning strike feature.</span></li>
              <li><span>You gain the opportunist feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the rogue’s agile feature.</p>
          </div>
        )}
        {selectedArchetype === "Seraph" && (
          <div>
            <h2>Seraph</h2>
            <p>You have tapped into the celestial energy of the upper realms, channeling the powers of good.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Celestial Magic (5th-Level Feature)</h4>
            <p>You begin to learn celestial magic. You learn the holy magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Seraph’s Grace (5th-Level Feature)</h4>
            <p>You provide the warm protection of the heavens. After a rest, choose a number of creatures equal to your proficiency bonus. Chosen creatures gain 1 temporary hit points per your tier until your next rest.</p>
            
            <h4>Heavenly Aspect (7th-Level Feature)</h4>
            <p>You are granted the powers of angels. You gain a fly speed of 1 and resistance to holy damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
          </div>
        )}
        {selectedArchetype === "Shadowmancer" && (
          <div>
            <h2>Shadowmancer</h2>
            <p>Shadowmancers call upon the eerie magic of the shadow realm to control darkness.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Umbral Magic (5th-Level Feature)</h4>
            <p>You channel darkness magic to confuse and drain your enemies. You learn the shadow magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Child of Darkness (5th-Level Feature)</h4>
            <p>You are sheltered by shadows. You gain night vision and can also see through magical darkness. While in concealment or in darkness, you gain <Modifier type="f" count="1" /> to overcome rolls.</p>
            
            <h4>Umbral Escape (7th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Umbral Escape"
              actType="Reaction"
              descriptor="You escape into darkness to evade our foe."
              frequency="At-will"
              keywords="Magical"
              trigger="You take damage"
              effect="Teleport up to 1 zone. If you teleport into darkness, you can also Hide."
            />
          </div>
        )}
        {selectedArchetype === "Skirmisher" && (
          <div>
            <h2>Skirmisher</h2>
            <p>You excel at darting across the battlefield and using lighter weapons to catch your foes off guard.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Skirmisher Tactics (5th-Level Feature)</h4>
            <p>You learn the skirmish fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Skirmisher Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in standard melee weapons, thrown ranged weapons, short ranged weapons, and light armor</span></li>
              <li><span>When you Move, you don't trigger reactions</span></li>
            </ul>
            <h4>Dashing Flurry (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dashing Flurry"
              actType="Action"
              descriptor="With near supernatural speed, you attack twice as you dart across the battlefield."
              frequency="Encounter"
              keywords="Escalation"
              effect="Strike twice with a standard melee weapon, thrown ranged weapon, or short ranged weapon. You can Move before each Strike."
            />
            <h4>First to Strike (7th-Level Feature)</h4>
            <p>At the start of your first turn of each combat encounter, you become hastened until the end of your turn. If you Strike on that turn, you also deal additional damage equal to your tier.</p>
          </div>
        )}
        {selectedArchetype === "Solarian" && (
          <div>
            <h2>Solarian</h2>
            <p>Solarians magically manipulate light from the sun, moon, and stars.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Solar Magic (5th-Level Feature)</h4>
            <p>You channel blinding magical light. You learn the light magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Radiant Soul (5th-Level Feature)</h4>
            <p>You are stronger in the light. When you spend a recovery in light from the sun, moon, or stars, you regain additional hit points equal to your tier. You gain resistance to fire damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Blinding Magic (7th-Level Feature)</h4>
            <p>Your light magic is hard to witness. When you get a success or higher on an attack roll that deals fire damage, the target becomes hindered (turn ends).</p>
          </div>
        )}
        {selectedArchetype === "Stormancer" && (
          <div>
            <h2>Stormancer</h2>
            <p>You channel the frightening powers of the sky to bring down lightning and wind upon your enemies.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Storm Magic (5th-Level Feature)</h4>
            <p>You begin to learn storm magic. You learn the air magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Heart of the Storm (5th-Level Feature)</h4>
            <p>You are fully attuned to the powers of air. When you deal damage, you ignore a creature's resistance to lightning damage. You gain resistance to lightning damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</p>
            
            <h4>Bouncing Lightning (7th-Level Feature)</h4>
            <p>Electricity crackles around you, easily redirected to your foes. When you get a success or higher on an attack roll that deals lightning damage, choose another creature within the target’s zone to also take 1 lightning damage per your tier.</p>
          </div>
        )}
        {selectedArchetype === "Summoner Archetype" && (
          <div>
            <h2>Summoner Archetype</h2>
            <p>You have learned to conjure entities from other realms to aid you.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the summoner at 5th level:</p>
            <ul>
              <li><span>Choose a summoner subclass, but only you gain the subclass’s 1st-level features.</span></li>
              <li><span>Your hit points increase by +8</span></li>
              <li><span>You learn a magic tradition listed in the summoner magic feature feature, and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>You gain the conjure minions feature.</span></li>
              <li><span>You gain the conjure summons feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the summoner’s summons enhancement feature.</p>
          </div>
        )}
        {selectedArchetype === "Swordmage Archetype" && (
          <div>
            <h2>Swordmage Archetype</h2>
            <p>You have learned to infuse magic into your weapon.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the swordmage at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +10</span></li>
              <li><span>You gain training all weapons and light armor.</span></li>
              <li><span>You learn a magic tradition listed in the swordmage magic feature feature, and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</span></li>
              <li><span>You gain the enspell weapon feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the swordmage’s dimensional enspell feature.</p>
          </div>
        )}
        {selectedArchetype === "Thrower" && (
          <div>
            <h2>Thrower</h2>
            <p>You throw projectiles with unerringly precision, having mastered a fighting style most would consider unusual.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Thrower Tactics (5th-Level Feature)</h4>
            <p>You learn the throwing fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Thrower Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in thrown ranged weapons and light armor</span></li>
              <li><span>You learn the ricochet throw technique. Whenever you Strike with a thrown ranged weapon, you can use the ricochet throw ability.</span></li>
            </ul>
            <h4>Boomerang Throw (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Boomerang Throw"
              actType="Action"
              descriptor="You throw a projectile that slashes through multiple targets before returning back to you."
              frequency="Encounter"
              keywords="Escalation"
              target="1d4+1 enemies within 1 zone"
              effect="Strike each target with a thrown ranged weapon"
            />
            <h4>I Don’t Miss (7th-Level Feature)</h4>
            <p>You excel at throwing your weapons. The range and base damage of your thrown ranged weapons both increase by +1.</p>
          </div>
        )}
        {selectedArchetype === "Warder" && (
          <div>
            <h2>Warder</h2>
            <p>Warders are arcane guardians that channel abjuration magic to shield others from harm.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Abjuration Magic (5th-Level Feature)</h4>
            <p>You channel protective magic to shield others. You learn the protection magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 3, increasing to 5 at 8th level, and you immediately learn a tier 1 battle spell and later a tier 3 battle spell at 9th level. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            
            <h4>Arcane Shield (5th-Level Feature)</h4>
            <p>You have surrounded yourself in a constant state of protection. After you rest, you gain temporary hit points equal to your proficiency bonus that last until your next rest.</p>
            
            <h4>Friendly Ward (7th-Level Feature)</h4>
            <p>You can split your magical energy to shield an ally. When you Spellcast a battle spell of tier 1 or higher, choose a creature within 1 zone of you to gain temporary hit points equal to double the spell tier (scene ends).</p>
          </div>
        )}
        {selectedArchetype === "Warrior Archetype" && (
          <div>
            <h2>Warrior Archetype</h2>
            <p>You have mastered wielding weapons to deadly effect.</p>
            <h3>5th-Level Features</h3>
            <p>You gain the following features from the warrior at 5th level:</p>
            <ul>
              <li><span>Your hit points increase by +12</span></li>
              <li><span>Training in all armor and weapons.</span></li>
              <li><span>You gain the precision attack feature.</span></li>
              <li><span>You gain the comeback attack feature.</span></li>
              <li><span>You gain the interrupt attack feature.</span></li>
            </ul>
            <h3>7th-Level Features</h3>
            <p>You gain the warrior’s indomitable feature.</p>
          </div>
        )}
        {selectedArchetype === "Wrecker" && (
          <div>
            <h2>Wrecker</h2>
            <p>You have become a terror as you cleave through your foes with a giant weapon.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +12, and you gain the following features.</p>
            <h4>Wrecker Tactics (5th-Level Feature)</h4>
            <p>You learn the great weapon fighting style. If you already know this style, then learn a technique or another fighting style. When you pick a class talent, you can instead learn a technique or fighting style.</p>
            <h4>Wrecker Training (5th-Level Feature)</h4>
            <p>You gain the following:</p>
            <ul>
              <li><span>Training in heavy melee weapons and all armor</span></li>
              <li><span>The base damage of your heavy melee weapons increase by +1</span></li>
            </ul>
            <h4>Avalanche Attack (5th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Avalanche Attack"
              actType="Action"
              descriptor="With a heavy swing, you knock your foe back and cause a large ripple to nearby foes."
              frequency="Encounter"
              keywords="Escalation"
              effect="Charge to Strike or Strike with a heavy melee weapon, and you knock the target prone on a success or higher. Additionally, make an attack roll against the Might of 1d4+1 additional enemies within your zone. On a success or higher, a secondary target falls prone."
            />
            <h4>Wrecker’s Reach (7th-Level Feature)</h4>
            <p>When wielding a heavy melee weapon, you can Strike any creature within your zone. If the creature isn’t engaged to you, then you take <Modifier type="mf" count="1" /> to your Strike.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroicArchetypes;