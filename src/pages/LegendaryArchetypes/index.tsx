import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Accordion from "../../components/Accordion";
import Modifier from "../../components/Modifier";

function LegendaryArchetypes() {
  const [selectedArchetype, setSelectedArchetype] = useState('')

  function handleArchetype(label: string) {
    setSelectedArchetype(label)
  }
  
  const dropdownItems = [
    { label: "Archangel", onClick: handleArchetype },
    { label: "Archmage", onClick: handleArchetype },
    { label: "Avatar of War", onClick: handleArchetype },
    { label: "Demigod", onClick: handleArchetype },
    { label: "Demon Lord", onClick: handleArchetype },
    { label: "Dragon Ascendant", onClick: handleArchetype },
    { label: "Emergent Primordial", onClick: handleArchetype },
    { label: "Eternal Trickster", onClick: handleArchetype },
    { label: "Faerie Lord", onClick: handleArchetype },
    { label: "Infinite Wanderer", onClick: handleArchetype },
    { label: "Legendary Hero", onClick: handleArchetype },
    { label: "Legendary Sovereign", onClick: handleArchetype },
    { label: "Lich", onClick: handleArchetype },
    { label: "Nameless One", onClick: handleArchetype },
    { label: "Primal Aspect", onClick: handleArchetype },
    { label: "Saint", onClick: handleArchetype }
  ]

  return (
    <div className='archetypes'>
      <div className='archetypes-content'>
        <h1>Legendary Archetypes</h1>
        <p>At 8th level your hero has grown into a legend, one that will be remembered for ages to come. You pick your legendary archetype that best captures your character’s growing myth starting at 8th level. An Archmage might become a lich, archmage, or demigod!</p>

        <Accordion title="Legendary Archetype Rules" content={(
          <div>
            <h3>No Restrictions</h3>
            <p>Regardless of your class, you can choose any legendary archetype. A rogue can just as easily pick eternal trickster or saint if they become the chosen of a deity.</p>

            <h3>Features</h3>
            <p>Each legendary archetype gives you features at both 8th and 10th level. Archetypes also increase your hit points.</p>
          </div>
        )} />
      
        <h2>List of Legendary Archetypes</h2>
        <p>You can choose from the following legendary archetypes:</p>

        <Dropdown items={dropdownItems} startLabel="Select a Legendary Archetype" />

        {selectedArchetype === "Archangel" && (
          <div>
            <h2>Archangel</h2>
            <p>You have devoted your life to championing the virtues of good in accordance with the upper realms. You are a rare mortal that has been offered a chance to become something more: an angelic lord of the celestial realms.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Empyreal Soul (8th-Level Feature)</h4>
            <p>Your mortal body begins its ascension and you gain the following benefits:</p>
            <ul>
              <li><span>Your creature type becomes celestial.</span></li>
              <li><span>You don’t need to eat, drink, or breathe. You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>You gain a fly speed equal to your land speed, or increase your current fly speed by +1.</span></li>
              <li><span>You gain resistance to holy damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>
            <h4>Grace of the Heavens (8th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Grace of the Heavens"
              actType="Maneuver"
              descriptor="You bestow the powers of the celestial realms upon your allies."
              frequency="Encounter"
              keywords="Magical"
              duration="Scene ends"
              target="You and each ally within your zone"
              effect="Each targeted ally gains a fly speed of 1. You and each targeted ally gain temporary hit points equal to your proficiency bonus. If a creature already has temporary hit points, instead increase them by this amount." 
            />
            <h4>Holy Radiance (10th-Level Feature)</h4>
            <p>You radiate sacred power that protects you. You and allies within your zone gain <Modifier type="f" count="1" /> to overcome rolls.</p>
            <h4>Celestial Ascension (10th-Level Feature)</h4>
            <p>Your soul becomes fully angelic. Once per long rest, when you become vanquished, your body disappears in a flash of radiant light. Make an attack roll against each foe’s Resolve within 1 zone, dealing holy damage equal to your proficiency bonus. On a success, a target is also blinded (scene ends). At the end of the scene, you appear in a column of heavenly fire with hit points equal to your shaken value.</p>
            <p>At the end of your adventures, you ascend to the upper realms to join the rulers of the heavens as a powerful angel.</p>
          </div>
        )}
        {selectedArchetype === "Archmage" && (
          <div>
            <h2>Archmage</h2>
            <p>You have devoted your life to unlocking the secrets of magic and have achieved a power few mortals can comprehend. You will go down in history as one of the world’s greatest spellcasters.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Magical Knowledge (8th-Level Feature)</h4>
            <p>You seek to understand all magic. You learn a magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 5, and you learn a tier 1 and tier 2 battle spell. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            <h4>Magical Breadth (8th-Level Feature)</h4>
            <p>You learn a battle spell, even if you don’t know the magic tradition.</p>
            
            <h4>Master of Magic (10th-Level Feature)</h4>
            <p>You can tap into magical energies better than most. Your mana increases by +2.</p>
            
            <h4>Arcane Immortality (10th-Level Feature)</h4>
            <p>You have unlocked the greatest magical secret of all: immortality. You are unaffected by diseases and can’t die of old age. If you are killed, you return to life after 1d10 days in a location only known to you as your arcane safeguards ensure your survival, such as transferring your essence to a clone. At the end of your adventures, you create a magical tower where you continue to study and deepen your magical talents.</p>
          </div>
        )}
        {selectedArchetype === "Avatar of War" && (
          <div>
            <h2>Avatar of War</h2>
            <p>Through countless hard fought battles and blood soaked victories, you have emerged uncontested. Whispers of your skills have spread across the land as some believe you are a manifestation of war itself. Whatever the cause, you continue forward to the next fight.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +12, and you gain the following features.</p>
            <h4>Training in Violence (8th-Level Feature)</h4>
            <p>You learn a fighting style or technique. When you pick a class talent, you can instead learn a fighting style or technique. You also gain training in all armor and weapons.</p>
            <h4>War Never Ends (8th-Level Feature)</h4>
            <p>You cannot be stopped and gain the following benefits:</p>
            <ul>
              <li><span>Your defenses all increase by +1</span></li>
              <li><span>Your maximum hit points increase by your proficiency bonus</span></li>
              <li><span>Your recoveries increase by +1</span></li>
              <li><span>The number of wounds you can suffer before being defeated increases by +1</span></li>
            </ul>
            
            <h4>Unerring Accuracy (10th-Level Feature)</h4>
            <p>You gain <Modifier type="f" count="1" /> to Disarm, Grab, Strike, Shove, or Trip.</p>
            <h4>Finish the Fight (10th-Level Feature)</h4>
            <p>Whether you realize it or not, the aspect of war has chosen you as its undying soldier. If you are killed, you return to life after 1d10 days in a location of a past battle, standing over where hundreds spilled blood.</p>
            <p>At the end of your adventures, you realize no one in your reality can defeat you and you must wait for a new challenger to arise. Your physical form fades away from existence as your spirit merges with your armor or weapon. One day a worthy fighter will pick you up and finish the fight against a new challenge.</p>
          </div>
        )}
        {selectedArchetype === "Demigod" && (
          <div>
            <h2>Demigod</h2>
            <p>After many adventures, you have become renowned throughout the land. Perhaps your renown has earned you the worship of others, granting you a sliver of divinity. Or a powerful deity has chosen you as their exarch, and graced you with some of their godly power. Whatever the reason, you know hold a spark of divinity within yourself. What will you do with your burgeoning divine might?</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +12, and you gain the following features.</p>
            <h4>Divine Body (8th-Level Feature)</h4>
            <p>As you begin your ascent to divinity, you gain the following benefits:</p>
            <ul>
              <li><span>You don’t need to eat, drink, or breathe. You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>Your proficiency bonus increases by +1.</span></li>
            </ul>
            <h4>Godly Luck (8th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Godly Luck"
              actType="Free"
              descriptor="You call upon your divine powers to tip fate in your favor."
              frequency="Encounter"
              keywords="Magical"
              trigger="You see the result of your roll"
              effect="Treat the triggering result as one degree of success higher" 
            />
            <h4>Miracle (10th-Level Feature)</h4>
            <p>You can manifest divine miracles. You learn the wish ritual spell. You can Spellcast wish with <Modifier type="f" count="1" />, without spending the material cost, and you add your proficiency bonus to the ritual’s skill roll even if you don’t know magic.</p>
            <h4>Divine Ascension (10th-Level Feature)</h4>
            <p>You shed your mortal shackles and become a fully fledged minor deity. If you die, you return to life after 1d10 days. At the end of your adventures, you ascend to the outer realms, choosing a home among the realms to begin your new journey as a god.</p>
          </div>
        )}
        {selectedArchetype === "Demon Lord" && (
          <div>
            <h2>Demon Lord</h2>
            <p>You have embraced the power of sin and darkness enough to catch the attention of the lower realms. You are a rare, infamous mortal that has the potential to become something truly diabolical, a demon lord of the lower realms.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Devil Soul (8th-Level Feature)</h4>
            <p>Your mortal body begins its fell transformation and you gain the following benefits:</p>
            <ul>
              <li><span>Your creature type becomes fiend.</span></li>
              <li><span>You don’t need to eat, drink, or breathe. You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>You gain a fly speed equal to your land speed, or increase your current fly speed by +1.</span></li>
              <li><span>You gain resistance to unholy damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>
            <h4>Aura of Damnation (8th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Aura of Damnation"
              actType="Maneuver"
              descriptor="Corrupting energy radiates from you that causes your foes to tremble in fear."
              frequency="Encounter"
              keywords="Aura, Magical"
              duration="Scene ends"
              target="You and each ally within your zone"
              effect="Your zone becomes a dangerous zone (1 unholy per your tier) only to your enemies. When a creature takes this damage, make an attack roll against their Resolve, and on a success, the target is also hindered (turn starts)." 
            />
            <h4>Fell Presence (10th-Level Feature)</h4>
            <p>You exude profane power that corrupts your foes. Enemies within your zone take <Modifier type="mf" count="1" /> to overcome rolls.</p>
            <h4>Hellish Descent (10th-Level Feature)</h4>
            <p>Your soul becomes fully demonic. Once per long rest, when you are vanquished, your body disappears in a flash of unholy energy. Make an attack roll against each foe’s Resolve within 1 zone, dealing unholy damage equal to your proficiency bonus. On a success, a target is also hindered (scene ends). At the end of the combat, the ground opens up to hell, and you step out with hit points equal to your shaken value.</p>
            <p>At the end of your adventures, you descend to the lower realms to join the rulers of the hells as a powerful demon.</p>
          </div>
        )}
        {selectedArchetype === "Dragon Ascendant" && (
          <div>
            <h2>Dragon Ascendant</h2>
            <p>Through a magical affinity from either a powerful gift, arcane bloodline, or other means, you have become your transformation into a mighty dragon of legends.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Dragon Soul (8th-Level Feature)</h4>
            <p>Your mortal body begins to transform into a dragon and you gain the following benefits:</p>
            <ul>
              <li><span>Your creature type becomes dragon.</span></li>
              <li><span>You gain night vision.</span></li>
              <li><span>You gain a fly speed equal to your land speed, or increase your current fly speed by +1.</span></li>
              <li><span>You gain resistance to cold, fire, lightning, or toxic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>
            <h4>Dragon Form (8th-Level Feature)</h4>
            <p>You learn the dragon transformation battle spell even if you don’t know the arcane magic tradition. Once per short rest, you can Spellcast this spell at a spell tier equal to your tier without spending mana.</p>
        
            <h4>Greater Dragon Form (10th-Level Feature)</h4>
            <p>When you Spellcast dragon transformation the spell’s benefits improve in the following ways:</p>
            <ul>
              <li><span>Your size becomes colossal</span></li>
              <li><span>Your fly speed increases to 2</span></li>
              <li><span>Your natural melee weapons deal 4 physical damage</span></li>
              <li><span>When you unleash energy as a dragon, you regain a use of this after you become shaken once per spell</span></li>
            </ul>
            <h4>Draconic Apotheosis (10th-Level Feature)</h4>
            <p>Your body and soul have fully become a dragon’s. Once per long rest, when you are vanquished, your body explodes in elemental energy. Make an attack roll against each enemy’s Evasion within 1 zone, dealing 2 damage per tier and 1 ongoing damage per tier. Both damage types are either cold, fire, lightning, or toxic (your choice) as appropriate to your type of dragon. At the end of the combat, elements coalesce to reform your body with hit points equal to your shaken value.</p>
            <p>At the end of your adventures, you shed your mortal body and become a true dragon with the ability to shapechange back to your old, lesser mortal form. You take a lair in a land of your choosing as you amass the treasures of your adventures.</p>
          </div>
        )}
        {selectedArchetype === "Emergent Primordial" && (
          <div>
            <h2>Emergent Primordial</h2>
            <p>The dangerous elemental realms call to you as you seek to become a primordial, an elemental ruler of these realms.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Elemental Body (8th-Level Feature)</h4>
            <p>Your mortal body begins its transformation and you gain the following benefits:</p>
            <ul>
              <li><span>Your creature type becomes elemental.</span></li>
              <li><span>You don’t need to eat, drink, or breathe. You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>Choose one of the elemental realms as your chosen realm: air, earth, fire, ice, or water:</span>
                <ul style={{marginTop: '0', marginLeft: '10px'}}>
                  <li><span><i>Air:</i> fly speed equal to your land speed, or increase your current fly speed by +1, and resistance to lightning damage equal to your tier. If you already have this resistance, then use your proficiency bonus isntead.</span></li>
                  <li><span><i>Earth:</i> resistance to physical damage equal to your tier. If you already have this resistance, then use your proficiency bonus isntead.</span></li>
                  <li><span><i>Fire:</i> night vision and resistance to fire damage equal to your tier. If you already have this resistance, then use your proficiency bonus isntead.</span></li>
                  <li><span><i>Ice:</i> you ignore movement penalties from difficult zones, and resistance to cold damage equal to your tier. If you already have this resistance, then use your proficiency bonus isntead.</span></li>
                  <li><span><i>Water:</i> swim speed equal to your land speed, or increase your current swim speed by +1, you can breath underwater, and resistance to fire damage equal to your tier. If you already have this resistance, then use your proficiency bonus isntead.</span></li>
                </ul>
              </li>
            </ul>
            <h4>Unleash Primordial Fury (8th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Unleash Primordial Fury"
              actType="Action"
              descriptor="Elemental energy explodes from your form in a devastating display of primordial power."
              frequency="Encounter"
              keywords="Escalation, Magical, Range"
              target="All enemies within 1 zone"
              defense="EVN"
              damage="3 damage per your tier. The damage type and success effect matches your elemental realm: cold (ice), fire (fire), lightning (air), or physical (earth, water)"
              success="seized (turn ends; ice), 1 ongoing fire damage equal to your tier (fire), dazed (turn ends; air), prone (earth, water)"
            />
            <h4>Primordial Aura (10th-Level Feature)</h4>
            <p>Your zone becomes a dangerous zone (1 damage per your tier of the same damage type as unleash primordial fury) only for your enemies.</p>
            <h4>Birth of Elemental Titan (10th-Level Feature)</h4>
            <p>You emerge as an elemental primordial. If you are killed, you return to life after 1d10 days in your chosen elemental realm and can easily travel back to wherever realm you were when you died. At the end of your adventures, you fully transform into your primordial form but can shapeshift back into your lesser mortal form. You make your home in your chosen elemental realm and begin your dominion of its denizens.</p>
          </div>
        )}
        {selectedArchetype === "Eternal Trickster" && (
          <div>
            <h2>Eternal Trickster</h2>
            <p>You have lived a life of legendary cunning, having thwarted and bewildered even the most powerful of entities. You have used your supernatural trickery for good or evil, or perhaps you enjoy being an agent of chaos.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Supernatural Cunning (8th-Level Feature)</h4>
            <p>You learn another knack, and the bonus from knacks to skill rolls increases to <Modifier type="f" count="3" /></p>
            
            <h4>Disappearing Trick (8th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Disappearing Trick"
              actType="Reaction"
              descriptor="With a mocking wink, you disappear from your attacker’s grasp."
              frequency="At-will"
              keywords="Magical"
              trigger="Creature makes an attack roll against you"
              effect="After the triggering attack roll is resolved, you teleport up to 1 zone and become invisible (turn starts)" 
            />
            <h4>Supernatural Slippery (10th-Level Feature)</h4>
            <p>Results of attack rolls against you need to be 10 or higher than your defense to be considered a critical success.</p>
            <h4>Legendary Infamy (10th-Level Feature)</h4>
            <p>Your exploits have both earned the respect and ire of many across the realms. If you are killed, you return to life after 1d10 days in a safe location of your choice as your enemies only thought they killed you. At the end of your adventures, you are invited to the courts of both mortal and otherworldly rulers such as faerie queens or fiendish lords to awe them with tales of your greatest tricks.</p>
          </div>
        )}
        {selectedArchetype === "Faerie Lord" && (
          <div>
            <h2>Faerie Lord</h2>
            <p>You have a magical affinity to the green realm or perhaps caught the interest of the fickle faerie lords. You have been invited to join their chaotic ranks if you can prove yourself.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Green Body (8th-Level Feature)</h4>
            <p>As your body becomes changed by faerie magic, you gain the following benefits:</p>
            <ul>
              <li><span>Your creature type becomes faerie.</span></li>
              <li><span>You don’t need to eat, drink, or breathe. You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>You gain night vision</span></li>
              <li><span>You gain resistance to psychic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>
            <h4>Dreams of the Green (8th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Dreams of the Green"
              actType="Maneuver"
              descriptor="You weaken the barrier between this realm and the green realm, as the terrain harasses your foes and faerie magic cloaks your allies."
              frequency="Encounter"
              keywords="Magical, Range"
              duration="Scene ends"
              target="1 zone within 3 zones"
              effect="Enemies treat the targeted zone as a difficult zone. You and allies within the targeted zone are invisible." 
            />
            <h4>Faerie Aura (10th-Level Feature)</h4>
            <p>At the start of your turn, you can call upon faerie spirits to distract your foes. When a creature starts their turn in your zone or enters your zone on their turn, you can make an attack roll against their Resolve. On a success, the target is exposed (turn ends). You can only make this attack roll against the same target once per turn.</p>
            <h4>Ruler of the Green (10th-Level Feature)</h4>
            <p>Your soul has been claimed by the green realm. If you are killed, you return to life after 1d10 days in the green realm and can easily travel back to wherever realm you were when you died. At the end of your adventures, you join the ranks of the faerie lords in the green realm to live an eternal life of merriment, mischief, and revelry.</p>
          </div>
        )}
        {selectedArchetype === "Infinite Wanderer" && (
          <div>
            <h2>Infinite Wanderer</h2>
            <p>You travel far and wide, journeying across all the realms with a mere step. Perhaps you are a hero seeking new lands to help, an ominous presence that brings doom to the places you arrive, or you are a worldly traveler eager to explore the multiverse.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Worldly Jaunt (8th-Level Feature)</h4>
            <p>You learn the teleport ritual spell. You can Spellcast teleport with <Modifier type="f" count="1" />, and you add your proficiency bonus to the ritual’s skill roll even if you don’t know magic.</p>

            <h4>Wanderer’s Step (8th-Level Feature)</h4>
            <p>You move across space with every step. Whenever you Disengage or Move, you can choose to teleport the distance instead.</p>
            
            <h4>Otherworldly Wanderer (10th-Level Feature)</h4>
            <p>You learn the realm shift ritual spell. You can Spellcast realm shift with <Modifier type="f" count="1" />, and you add your proficiency bonus to the ritual’s skill roll even if you don’t know magic.</p>
            <h4>Travelling Legend (10th-Level Feature)</h4>
            <p>Your travels across the realms have changed your body beyond that of a normal mortal. If you are killed, you return to life after 1d10 days in any location of your choice, having traveled there from another realm. At the end of your adventures, you wander the multiverse, becoming an otherworldly legend.</p>
          </div>
        )}
        {selectedArchetype === "Legendary Hero" && (
          <div>
            <h2>Legendary Hero</h2>
            <p>You have saved the land countless times and will continue to do so. You are a champion against threats against your realm and the rest of the multiverse.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Legendary Champion (8th-Level Feature)</h4>
            <p>Choose what type of hero you are: magic or martial.</p>
            <h5>Magic Hero</h5>
            <p>Your hit points increase by +8. You learn a magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 5, and you learn a tier 1 and tier 2 battle spell. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            <h5>Martial Hero</h5>
            <p>Your hit points increase by +12, and you learn a fighting style or technique. When you pick a class talent, you can instead learn a technique or fighting style. You also become trained in light armor, shields, and all weapons.</p>
            
            <h4>Heroes Never Fail (8th-Level Feature)</h4>
            <p>You know how to push your luck in heroic situations. When you get a critical success on a roll, you regain a hero point.</p>
            
            <h4>Incredible Achievements (10th-Level Feature)</h4>
            <p>You gain a theme talent and class talent.</p>
            
            <h4>Heroic Fable (10th-Level Feature)</h4>
            <p>Your heroic deeds transcend you into a legend of folk lore. If you are killed, you return to life after 1d10 days in a safe location as the people’s belief in your myth stops you from dying until your heroic journey is over. At the end of your adventures, you either live the rest of your days as a loved hero or fade away until you are needed again.</p>
          </div>
        )}
        {selectedArchetype === "Legendary Sovereign" && (
          <div>
            <h2>Legendary Sovereign</h2>
            <p>You are the long awaited leader to lead your people into a golden age of prosperity. You have stepped into your new role and your deeds will make your legacy immortal.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Rally to Me! (8th-Level Feature)</h4>
            <p>When you Rally, each ally within 1 zone can also Rally as a free action. Then you or any affected allies can also Disengage or Move as part of their Rally.</p>

            <h4>Domain (8th-Level Feature)</h4>
            <p>Work with your GM to establish a land as your domain, typically your homeland. You become the ruler of that land along with owning an estate that has enough servants and guards to keep it operational. During downtime, you gain an extra downtime activity that represents the assistance of your household. You gain the knack “Sovereign” towards skill rolls when you can leverage your newfound status and resources.</p>
            <h4>Voice of Authority (10th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Voice of Authority"
              actType="Maneuver"
              descriptor="You command with near supernatural authority to inspire your allies or frighten your foes."
              frequency="At-will"
              keywords="Magical"
              effect="Choose to Help 1d4+1 allies or Hinder 1d4+1 enemies" 
            />
            <h4>Golden Age (10th-Level Feature)</h4>
            <p>Once per long rest, when you are vanquished, you instead Stand and regain hit points equal to your shaken value. At the end of your adventures, you fully ascend to your throne and begin a long and prosperous rule over your domain. Your renown guarantees prosperity for your people for decades to come. Your descendants will one day earn your throne and cement  your legacy as one of the greatest sovereigns in history.</p>
          </div>
        )}
        {selectedArchetype === "Lich" && (
          <div>
            <h2>Lich</h2>
            <p>Through forbidden magic, you have unlocked secrets to immortality through undeath. Not all that pursue this path are evil, as some seek the power and immortality of lichdom out of necessity. Regardless, you have used dark magic to become an infamous lich.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Forbidden Knowledge (8th-Level Feature)</h4>
            <p>You untap the magic of dark powers. You learn the death magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 5, and you learn a tier 1 and tier 2 battle spell. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>
            <h4>Soulprison (8th-Level Feature)</h4>
            <p>You construct a soulprison that holds your soul in an inanimate object as you transform into a protolich. Your soulprison can be any object, with many choosing something dear to them. You gain the following benefits:</p>
            <ul>
              <li><span>Your creature type becomes undead</span></li>
              <li><span>You don’t need to eat, drink, or breathe. You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>You gain night vision</span></li>
              <li><span>You gain resistance to necrotic damage equal to your tier. If you alreaday have this resistance, then use your proficiency bonus instead.</span></li>
            </ul>
            
            <h4>Dread Presence (10th-Level Feature)</h4>
            <p>Your very presence invokes terror in lesser mortals. When a creature starts their turn in your zone or enters your zone on their turn, you can make an attack roll against their Resolve. On a success, the target is hindered (turn ends). You can only make this attack roll against the same target once per turn.</p>
            
            <h4>True Lichdom (10th-Level Feature)</h4>
            <p>Your soulprison has been completed as you finish your transformation into a lich. If you are killed, you return to life after 1d10 days next to your soulprison as long as your soulprison is not destroyed. At the end of your adventures, you take up land as your own dread domain, a place where you rule as a fearsome master of death with legions of undead servants at your command.</p>
          </div>
        )}
        {selectedArchetype === "Nameless One" && (
          <div>
            <h2>Nameless One</h2>
            <p>You have delved too deeply into the magic of the void realm, the strange space beyond mortal comprehension. After so much void corruption, you have begun to evolve into something unfathomable, an entity that will one day rule the void.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +10, and you gain the following features.</p>
            <h4>Void Body (8th-Level Feature)</h4>
            <p>Your mortal body begins its aberrant transformation and you gain the following benefits:</p>
            <ul>
              <li><span>Your creature type becomes aberration.</span></li>
              <li><span>You don’t need to eat, drink, or breathe. You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>You can telepathically communicate with any creature within sight, or familiar creatures within your realm</span></li>
              <li><span>You gain resistance to psychic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>
            <h4>Strange Mutation (8th-Level Feature)</h4>
            <p>Choose one of the following mutations:</p>
            <ul>
              <li><span><i>All Seeing:</i> You have blind vision and can see anything invisible.</span></li>
              <li><span><i>Shared Anguish:</i> When you take damage, all enemies within your zone take psychic damage equal to your tier.</span></li>
              <li><span><i>Tentacles:</i> When you use a melee ability with a target, you can target anything within 1 zone.</span></li>
            </ul>
            
            <h4>Distort Reality (10th-Level Feature)</h4>
            <p>You learn the twist reality battle spell, even if you don’t know the eldritch magic tradition. You can Spellcast the spell without spending mana.</p>
            
            <h4>Eldritch Ascendancy (10th-Level Feature)</h4>
            <p>Your soul and body transforms into a terribly unknown aberration. Once per long rest, when you are vanquished, your body disappears into a psychic explosion. Make an attack roll against each foe’s Resolve within 1 zone, dealing psychic damage equal to your proficiency bonus. On a success, a target is also confused (scene ends). At the end of the combat, reality ripples and shakes as a slightly distorted version of yourself appears from nothing with hit points equal to your shaken value.</p>
            <p>At the end of your adventures, you disappear to venture deep within the void realm to become a nameless horror.</p>
          </div>
        )}
        {selectedArchetype === "Primal Aspect" && (
          <div>
            <h2>Primal Aspect</h2>
            <p>You have become so attuned to the natural world, you have begun a transformation into a primal spirit. Like other primal spirits, you are a manifestation of nature. Whether you choose to use this power to bring primal wrath upon your foes or guard others is up to you.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Nature Power (8th-Level Feature)</h4>
            <p>You have the magic of nature. You learn the nature magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 5, and you learn a tier 1 and tier 2 battle spell. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>

            <h4>One with the Elements (8th-Level Feature)</h4>
            <p>You gain resistance to cold, fire, lightning, and toxic damage equal to your tier. If you already have this resistance, then use your proficiency bonus instead.</p>
            
            <h4>Primal Spirits Aura (10th-Level Feature)</h4>
            <p>At the start of your turn, you can call upon nature spirits to angrily swirl around you until you dismiss them as a free action. While the spirits swirl around you, enemies treat your zone as a difficult zone.</p>
            <h4>Avatar of Nature (10th-Level Feature)</h4>
            <p>Nature spirits guard your life. If you are killed, you return to life after 1d10 days in a location of natural tranquility. At the end of your adventures, you transcend your physical form to fully join the spirit realm to help protect the natural world and lead future guardians.</p>
          </div>
        )}
        {selectedArchetype === "Saint" && (
          <div>
            <h2>Saint</h2>
            <p>Through the utmost devoutness or perhaps a greater destiny, a deity or supernatural force has chosen you to be their representative in the mortal realm. As a saint, you are empowered with a small sliver of divinity.</p>
            <h3>Archetype Features</h3>
            <p>Your hit points increase by +8, and you gain the following features.</p>
            <h4>Divine Power (8th-Level Feature)</h4>
            <p>You learn the holy or unholy magic tradition and a battle spell from that tradition. If you don’t have mana, then your mana equals 5, and you learn a tier 1 and tier 2 battle spell. When you gain a class talent, you can instead learn a magic tradition or battle spell.</p>

            <h4>Saintly Grace (8th-Level Feature)</h4>
            <p>You are imbued with your deity’s blessing. You gain the following benefits:</p>
            <ul>
              <li><span>You are unaffected by diseases and can’t die of old age.</span></li>
              <li><span>You gain resistance to holy, necrotic, and unholy damage equal to your tier. If you alreaday have this resistance, then use your proficiency bonus instead.</span></li>
            </ul>
            
            <h4>Sanctified Touch (10th-Level Feature)</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Sanctified Touch"
              actType="Maneuver"
              descriptor="You channel the power of your god to restore an ally from all ailments."
              frequency="At-will"
              keywords="Magical, Melee"
              target="1 creature you can touch"
              effect="Target can Stand, end all negative conditions affecting them, and if they’re dying, then they regain hit points equal to your proficiency bonus." 
            />
            <h4>Immortal Saint (10th-Level Feature)</h4>
            <p>Your deity has a greater purpose for you and will protect you even if you fall. If you are killed, you return to life after 1d10 days in a sanctuary dedicated to your deity. At the end of your adventures, you ascend to sit at the right hand side of your deity as their trusted advisor and become a legend among your faith.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LegendaryArchetypes;