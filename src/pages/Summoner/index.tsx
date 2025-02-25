import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import Modifier from "../../components/Modifier";
import Monster from "../../components/Monster";
import Accordion from "../../components/Accordion";

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
      <p>Minions follow different rules from regular creatures. Minions of the same type are part of a <b>minion group</b>.</p>
      <h4>Easy to Kill</h4>
      <p>When a minion takes damage, if the damage is less than the minion’s maximum hit points, then the minion becomes shaken. If the minion is already shaken, then any damage kills it.</p>

      <h4>Overkill</h4>
      <p>When a minion dies from an ability that targets only it with an attack roll, any leftover damage beyond the minion’s remaining hit points is applied to another minion of the same group within the same zone. If the leftover damage is enough to kill the second minion, then any remaining damage is carried over to a third minion, and so on!</p>

      <h4>Group Attack</h4>
      <p>Minions within the same group and zone can Strike the same target using one attack roll. Multiply the Strike’s base damage by the number of attacking minions.</p>
    </div>
  )
  
  return (
    <div className="summoner">
      <div className="summoner-content">
        <ClassHeader />
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab">Summoner Details</div>
          <div className="divider">|</div>
          <div onClick={toggleSubclasses} className="tab">Summoner Subclasses</div>
          <div className="divider">|</div>
          <div onClick={toggleTalents} className="tab">Summoner Talents</div>
        </div>
        {isDetails && (
          <div>
            <h1>Summoner</h1>
            <p>You have aligned your essence with the outer realms, and have learned to conjure creatures from these realities to aid you. Perhaps you made a pact with an entity from the outer realms or bound your soul in some way to these other worlds.</p>
        
            <h2>Core Features</h2>
            <ul>
              <li><span><b>Theme:</b> Determined by your subclass</span></li>
              <li><span><b>Defense Bonus:</b> +4 to Resolve</span></li>
              <li><span><b>Starting Hit Points:</b> 8</span></li>
              <li><span><b>Recoveries:</b> 4</span></li>
              <li><span><b>Training:</b> None</span></li>
              <li><span><b>Starting Equipment:</b> You gain an implement.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You gain a wand as your implement.</span></li>
                </ul>
              </li>
            </ul>
    
            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3>Summoner Magic</h3>
            <p>You channel the powers of the outer realms.</p>
            <ul>
              <li><span><b>Mana:</b> 1, increasing to 3 at 5th level, and 5 at 8th level</span></li>
              <li><span><b>Magic Tradition:</b> You learn a magic tradition determined by your subclass. You learn a battle spell from that tradition.</span></li>
              <li><span><b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you learn a battle spell or a magic tradition associated with your subclass.</span></li>
            </ul>
    
            <h3>Conjure Minions</h3>
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
              actions={[{
                basic: true,
                name: "Assault",
                keywords: "melee, weapon",
                target: "1 engaged creature",
                defense: "EVN",
                damage: "1 physical damage per tier"
              }]}
            />

            <Accordion style={{marginTop: '20px'}} title="Minion Rules" content={minionRules} />

            <h3>Conjure Summons</h3>
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
              hp="8 per your tier"
              evn="10 + PB"
              mgt="12 + PB"
              res="8 + PB"
              pb="PB"
              summons
              actions={[{
                basic: true,
                name: "Assault",
                keywords: "melee, weapon",
                target: "1 engaged creature",
                defense: "EVN",
                damage: "PB physical damage"
              }]}
            />

            <h3>Summon's Adaptation</h3>
            <p>You gain a tier 1 class talent.</p>
    
            <h3>Subclass</h3>
            <p>Choose the elementals subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3>Summons Enhancement</h3>
            <p>You gain a feature depending on your subclass.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Summoner Subclasses</h1>
            <p>These are the subclass choices for the summoner.</p>
            <h2>Elementals</h2>
            <p>You conjure fierce elemental spirits to cause havoc.</p>
            <h3>Elemental Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li><span><b>Magic Tradition:</b> For this class’s magic tradition, choose to learn air, earth, fire, ice, or water.</span></li>
              <li><span><b>Theme:</b> Nature</span></li>
              <li><span><b>Summons:</b> Your minor and major summons gains the following modifications:</span>
                <ul style={{marginLeft: '10px', marginTop: '0'}}>
                  <li><span><i>Air:</i> Resistance to lightning damage equal to your tier and a fly speed of 1.</span></li>
                  <li><span><i>Earth:</i> Resistance to physical damage equal to your tier, and your major summons’ hit points increase by your proficiency bonus.</span></li>
                  <li><span><i>Fire:</i> Resistance to fire damage equal to your proficiency bonus, weakness to cold damage equal to your proficiency bonus, and their assault damage deals fire damage. On a critical successful rend from the major summons, the target takes ongoing fire damage equal to your tier.</span></li>
                  <li><span><i>Ice:</i> Resistance to cold damage equal to your proficiency bonus, and their assault damage deals cold damage. On a critical successful rend from the major summons, the target is seized (turn ends).</span></li>
                  <li><span><i>Water:</i> Swim speed of 1, can breathe underwater, and resistance to fire damage equal to your tier but weakness to cold damage equal to your proficiency bonus.</span></li>
                </ul>
              </li>
            </ul>

            <h3>Elemental Burst (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Elemental Burst"
              actType="Action"
              descriptor="Your elemental summons unleashes primal energy."
              target="1d4+1 enemies within the zone of your major summons"
              frequency="At-will"
              keywords="Magical"
              defense="EVN"
              damage="1 physical (air, earth, or water) / fire (fire) / cold (ice) damage per your tier"
            />

            <h2>Angels</h2>
            <p>You conjure celestial warriors to fight with you.</p>
            <h3>Celestial Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li><span><b>Magic Tradition:</b> For this class’s magic tradition, choose to learn holy, life, or protection.</span></li>
              <li><span><b>Theme:</b> Divine</span></li>
              <li><span><b>Summons:</b> Your minor and major summons gains the following modifications:</span>
                <ul style={{marginLeft: '10px', marginTop: '0'}}>
                  <li><span>Resistance to holy damage and physical damage equal to your tier</span></li>
                  <li><span>Assault damage deals holy damage</span></li>
                  <li><span>Allies within major summons’ zone gain <Modifier type="f" count="1" /> to overcome rolls.</span></li>
                </ul>
              </li>
            </ul>

            <h3>Celestial Challenge (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Celestial Challenge"
              actType="Action"
              descriptor="Your angelic warrior’s attack forces their foe’s attention on them."
              frequency="At-will"
              effect="Your major summons can use rend, and on a success or higher, the target becomes taunted by your major summons (turn ends)."
            />

            <h2>Fiends</h2>
            <p>You conjure unholy fiendish monsters to ravage your enemies.</p>
            <h3>Fell Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li><span><b>Magic Tradition:</b> For this class’s magic tradition, choose to learn fire, toxic, or unholy.</span></li>
              <li><span><b>Theme:</b> Divine</span></li>
              <li><span><b>Summons:</b> Your minor and major summons gains the following modifications:</span>
                <ul style={{marginLeft: '10px', marginTop: '0'}}>
                  <li><span>Resistance to unholy damage</span></li>
                  <li><span>Assault damage equals 3 per your tier, and deals unholy damage</span></li>
                  <li><span>Enemies within major summons’ zone gain <Modifier type="mf" count="1" /> to overcome rolls.</span></li>
                </ul>
              </li>
            </ul>

            <h3>Corrupting Touch (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Corrupting Touch"
              actType="Action"
              descriptor="Your demon’s attack causes visions of sin."
              frequency="At-will"
              effect="Your major summons can use rend, and on a success or higher, the target becomes hindered (turn ends)."
            />

            <h2>Shadows</h2>
            <p>You conjure shadowy undead from the underworld to hunt your foes.</p>
            <h3>Umbral Alignment (1st-Level Feature)</h3>
            <p>You gain the following features:</p>
            <ul>
              <li><span><b>Magic Tradition:</b> For this class’s magic tradition, choose to learn death, illusion, or shadow.</span></li>
              <li><span><b>Theme:</b> Arcane</span></li>
              <li><span><b>Summons:</b> Your minor and major summons gains the following modifications:</span>
                <ul style={{marginLeft: '10px', marginTop: '0'}}>
                  <li><span>Resistance to necrotic damage</span></li>
                  <li><span>Assault damage deal necrotic damage</span></li>
                  <li><span>Night vision</span></li>
                  <li><span>While having cover or concealment, the penalty to target the summons increases to <Modifier type="mf" count="2" /></span></li>
                </ul>
              </li>
            </ul>

            <h3>Draining Touch (3rd-Level Feature)</h3>
            <p>You gain the following features:</p>
            <AbilityCard
              name="Draining Touch"
              actType="Action"
              descriptor="Your shadow creature’s claws drain their foe’s life force."
              frequency="At-will"
              effect="Your major summons can use rend, and on a success or higher, they gain temporary hit points equal to your tier (scene ends)."
            />           
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Summoner Class Talents</h1>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h2>Tier 1 Class Talents</h2>
            <h3>Coordinated Movement</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Coordinated Movement"
              actType="Reaction"
              descriptor="You move along your conjured creatures."
              frequency="At-will"
              trigger="You command a summoned creature"
              effect="Disengage or Move" 
            />

            <h3>Expanded Summoner Magic</h3>
            <p>Learn a battle spell or magic tradition from one listed in your subclass. You can take this class talent multiple times.</p>

            <h3>Explosive Sacrifice</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Explosive Sacrifice"
              actType="Action"
              descriptor="You thank a summons for their service before exploding them into magical energy."
              frequency="At-will"
              keywords="Magical"
              target="1d4+1 enemies in the same zone as your minor or major summons"
              defense="EVN"
              damage="1 arcane damage per your tier (minor summons) or double the same damage (major summons)"
              effect="The attacking summons immediately dies as it explodes" 
            />

            <h3>Loyal Defender</h3>
            <p>Your minor and major summons gain the following benefits:</p>
            <ul>
              <li><span>Major summons’ hit points increase by your proficiency bonus.</span></li>
              <li><span>You can use your reaction to impose <Modifier type="mf" count="1" /> on an attack roll made by a creature engaged to one of your summons, provided the target isn't your summons.</span></li>
            </ul>
            
            <h3>Ranged Combatant</h3>
            <p>Your minor and major summons gain an action called far assault (keywords: magical, ranged) that targets a creature within 3 zones and deals damage equal to your proficiency bonus of the same damage type of their assault ability. </p>

            <h3>Special Adaptations</h3>
            <p>Your minor and major summons gain one of the following benefits:</p>
            <ul>
              <li><span>Fly speed of 1</span></li>
              <li><span>Climb speed of 1</span></li>
              <li><span>Land speed increases to 2</span></li>
              <li><span>Swim speed of 1, and can breath underwater</span></li>
              <li><span>Night vision</span></li>
            </ul>
            <p>You can take this class talent multiple times.</p>

            <h3>Spell Conduit</h3>
            <p>You can use a magical ability from your minor and major summons’ place. Furthermore, when you or your major summons is targeted by a magical ability, you can choose for the other to gain the same benefit.</p>

            <h3>Summoner Warrior</h3>
            <p>You have trained to fight alongside your summons. You gain the following benefits:</p>
            <ul>
              <li><span>Staring hit points equal 10</span></li>
              <li><span>You have 5 recoveries</span></li>
              <li><span>You gain training in light armor, shields, and all weapons. If you’re 1st level, you add one armor, weapon, and either a weapon or shield to your starting equipment.</span></li>
            </ul>
            
            <h2>Tier 2 Class Talents</h2>
            <h3>Absorb Life</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> shadows subclass</p>
            <p>When a creature dies within your major summons’ zone, your summons regains hit points equal to your tier. It can only regain hit points in this way once per turn.</p>

            <h3>Damning Summons</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> fiends subclass</p>
            <p>When a creature dies within your major summons’ zone, your summons regains hit points equal to your tier. It can only regain hit points in this way once per turn.</p>

            <h3>Destructive Aura</h3>
            <p>Choose a damage type appropriate to your subclass. Treat the zone of your major summons as a dangerous zone (1 damage per your tier of the chosen damage type) only for enemies.</p>

            <h3>Elemental Link</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> elementals subclass</p>
            <p>When you have a minor summons or major summons conjured, you gain the same modifications of the elemental type you chose to conjure. You can only gain one elemental type’s modification even if you have multiple summons of different elemental types conjured.</p>

            <h3>Invigorating Summons</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> angels subclass</p>
            <p>When you use conjure summons, you and all allies gain temporary hit points equal to your tier (scene ends). </p>

            <h3>Supernatural Growth</h3>
            <p>You can choose your major summons’ size to become large, or huge starting at 8th level. While large, your summons can use rend with <Modifier type="mf" count="1" /> to target any creature within their zone. </p>

            <h2>Tier 3 Class Talents</h2>
            <h3>Double Conjuring</h3>
            <p>Once per long rest, when you use conjure summons, you conjure two major summons. You can spend one maneuver to command both summons at once.</p>

            <h3>Elemental Destruction</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> elements subclass</p>
            <p>The damage for elemental burst increases to equal your proficiency bonus, and on a critical success, a target is knocked prone.</p>

            <h3>Greater Angels</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> angels subclass</p>
            <p>All of your summons gain a fly speed equal to their land speed, and the Evasion of your summons increases by +1.</p>

            <h3>Master Summoner</h3>
            <p>You are permanently hastened, but you can only use the extra maneuver to command creatures from your summon abilities.</p>

            <h3>Umbral Entrance</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> shadows subclass</p>
            <p>Your shadow summons can step into the shadows of its victims. When you command your major summons, it can teleport up to 1 zone away to become engaged to a creature.</p>

            <h3>Winged Terrors</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> fiends subclass</p>
            <p>All of your summons gain a fly speed equal to their land speed, and your major summons' assault damage increases to 4 unholy damage per your tier.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Summoner;