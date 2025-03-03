import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import fortune from "../../assets/fortune-icon-v2.png";
// import misfortune from "../../assets/misfortune-icon-v2.png";
import ClassHeader from "../../components/ClassHeader";
import Monster from "../../components/Monster";
import Modifier from "../../components/Modifier";

function Ranger() {
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
    <div className="ranger">
      <div className="ranger-content">
        <ClassHeader />
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab-items__tab" data-selected={isDetails}>Ranger Details</div>
          <div className="tab-items__divider">|</div>
          <div onClick={toggleSubclasses} className="tab-items__tab" data-selected={isSubclasses}>Ranger Subclasses</div>
          <div className="tab-items__divider">|</div>
          <div onClick={toggleTalents} className="tab-items__tab" data-selected={isTalents}>Ranger Talents</div>
        </div>
        {isDetails && (
          <div>
            <h1>Ranger</h1>
            <p>Rangers are hunters that thrive at the edges of civilization where dangerous monsters roam. Rangers typically serve as monster hunters, survivalists, scouts, and guardians of nature. Play a ranger if you want to be an expert at tracking monsters and surviving the wilds.</p>
            <h2>Core Features</h2>
            <ul style={{marginTop: '10px'}}>
              <li><span><b>Theme:</b> Martial</span></li>
              <li><span><b>Defense Bonus:</b> +2 to Evasion and Might</span></li>
              <li><span><b>Starting Hit Points:</b> 10</span></li>
              <li><span><b>Recoveries:</b> 5</span></li>
              <li><span><b>Training:</b> Light armor and all weapons</span></li>
              <li><span><b>Starting Equipment:</b> You gain light armor and two weapons.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You gain light armor, a long ranged bow, and a standard melee blade.</span></li>
                </ul>
              </li>
            </ul>
    
            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Fightng Style</h3>
            <p>You have mastered a certain way of fighting. Learn a fighting style.</p>
              <ul>
                <li><span><i>Suggestion:</i> You learn the archery fighting style and pinning shot technique.</span></li>
              </ul>
    
            <h3 className="header">Studied Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Studied Attack"
              actType="Action"
              descriptor="As you attack your prey, you learn more about them."
              frequency="At-will"
              effect="Strike then Study the same target" 
            />

            <h3 className="header">Mark Prey</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Mark Prey"
              actType="Maneuver"
              descriptor="You designate an enemy to become the target of your hunt."
              frequency="At-will"
              target="1 creature within 2 zones or whose tracks you discover"
              duration="Until a long rest or you use this ability on another creature."
              effect="The target becomes your prey.  When you Strike your prey, you deal additional damage equal to your tier. You also gain +1 on skill rolls to learn about, find, or track your prey." 
            />

            <h3 className="header">Monster Bestiary</h3>
            <p>You have studied and picked up tricks on defeating certain monsters that you’ve collected in a growing bestiary. Choose aberration, beast, celestial, construct, dragon, elemental, faerie, fiend, giant, monstrosity, ooze, plant, or undead. You gain the following benefits against your creatures of your chosen creature type:</p>
            <ul className="no-spacing">
              <li><span>You can use mark prey as a free action against creatures types in your bestiary.</span></li>
              <li><span>You gain <Modifier type='f' count='1' /> on skill rolls about creatures types in your bestiary such as recalling knowledge, finding, or tracking.</span></li>
              <li><span>When you Study creatures types in your bestiary, you learn another significant statistic of your choice.</span></li>
            </ul>

            <h3 className="header">Survivalist</h3>
            <p>You gain a theme talent from the nature theme.</p>
    
            <h3 className="header">Subclass</h3>
            <p>Choose the hunter subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3 className="header">Favored Environment</h3>
            <p>You have learned how to adapt to certain environments. Choose one of the following as your favored environment. You gain <Modifier type='f' count='1' /> on skill rolls in your favored environment and another benefit depending on your chosen environment.</p>
            <ul className="no-spacing">
              <li><span><b>Artic:</b> You gain resistance to cold damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
              <li><span><b>Coastal:</b> You gain a swim speed of 1.</span></li>
              <li><span><b>Desert:</b> You gain resistance to fire damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
              <li><span><b>Forest:</b> You ignore the movement penalties from difficult zones.</span></li>
              <li><span><b>Mountain:</b> You gain a climb speed of 1.</span></li>
              <li><span><b>Subterranean:</b> You gain night vision, or blind vision of 1 zone if you already have night vision.</span></li>
              <li><span><b>Swamp:</b> You gain resistance to toxic damage equal to your tier. If you already have this resistance, use your proficiency bonus instead.</span></li>
            </ul>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Ranger Subclasses</h1>
            <p>These are the subclass choices for the ranger.</p>
            <h2>Hunter</h2>
            <p>You are a stalker of the wilds, the one that even monsters fear.</p>
            <h3 className="header">Stalker’s Fury (1st-Level Feature)</h3>
            <p>You gain <Modifier type='f' count='1' /> to Strike the target of your mark prey.</p>

            <h2>Beast Companion</h2>
            <p>You call upon a primordial beast spirit to assist you in your hunt.</p>
            <h3 className="header">Primal Beast (1st-Level Feature)</h3>
            <p>You have formed a connection with a single primal spirit (air, water, or land based animal) in the shape of a beast that accompanies you as your ally.</p>
            <p>In combat, once per turn, you can use a maneuver to command your primal beast to use an action or maneuver, and it uses your reaction. The primal beast regains hit points equal to its shaken value when you heal by spending a recovery. When the primal beast is reduced to 0 hit points, it dies, but you can resummon it at full hit points during a short rest by spending a recovery. After a long rest, you can freely resummon the primal beast and change the type of primal beast.</p>
            <Monster 
              name="Primal Beast" 
              type="Medium Animal" 
              hp="triple your proficiency bonus (PB) or double your PB (Air only)"
              evn="10 + PB"
              mgt="12 + PB"
              res="8 + PB"
              pb="PB"
              speeds="fly 1 (Air only), swim 1 (Water only)"
              traits={[{name: "Aquatic (Water only)", description: "The primal beast can breath only underwater."}]}
              summons
              actions={[{
                basic: true,
                name: "Slam",
                keywords: "melee, weapon",
                target: "1 engaged creature",
                defense: "EVN",
                damage: "PB physical damage",
                success: "Prone (Land Only)"
              }]}
            />

            <h2>Warden</h2>
            <p>Unlike other rangers that stalk their prey, you focus on protecting others from wilderness threats.</p>
            <h3 className="header">Warden Training (1st-Level Feature)</h3>
            <p>You gain the following benefits:</p>
            <ul>
              <li><span>Your hit points increase to 12 per tier, and your recoveries increase to 6.</span></li>
              <li><span>You gain training in heavy armor and shields.</span></li>
              <li><span>The target of your mark prey is also taunted by you.</span></li>
            </ul>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Ranger Class Talents</h1>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h2>Tier 1 Class Talents</h2>
            <h3 className="header">Expanded Training</h3>
            <p>You learn a technique or fighting style. You can take this class talent multiple times.</p>
            
            <h3 className="header">Hunter’s Aim</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Hunter’s Aim"
              actType="Maneuver"
              descriptor="As you discover your prey, you find their weak spot."
              frequency="At-will"
              effect="Mark prey, then Aim your prey." 
            />

            <h3 className="header">Nature's Magic</h3>
            <p>You learn the nature magic tradition.</p>

            <h3 className="header">Spring the Trap</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Spring the Trap"
              actType="Reaction"
              descriptor="When your prey is distracted, you bring them down."
              trigger="You see your prey Move or use a ranged or magical ability within 1 zone"
              frequency="At-will"
              effect="Strike your prey if they are within your weapon’s range." 
            />

            <h3 className="header">Study Prey</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Study Prey"
              actType="Maneuver"
              descriptor="As you find your prey, you quickly recall any information to help best defeat them."
              frequency="At-will"
              effect="Mark prey, then Study your prey." 
            />
            
            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Dual Predators</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> beast companion subclass</p>
            <p>When you use mark prey, you can command your primal beast. Your primal beast also gains the mark prey damage bonus to Strike your prey.</p>

            <h3 className="header">Expanded Environments</h3>
            <p>Choose another environment for favored environment. You can take this class talent multiple times.</p>

            <h3 className="header">Hunter’s Defenses</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> hunter subclass</p>
            <p>You gain <Modifier type='f' count='1' /> to overcome rolls against effects caused by the target of your mark prey.</p>

            <h3 className="header">Studious Slayer</h3>
            <p>When you Study a creature, you gain <Modifier type='f' count='1' /> to your next attack roll against the creature (turn ends). </p>

            <h3 className="header">Warden’s Grasp</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> warden subclass</p>
            <p>You gain the following ability:</p> 
            <AbilityCard
              name="Warden's Grasp"
              actType="Reaction"
              descriptor="As your prey escapes or harms your friend, you use the powers of nature to pull them back."
              frequency="At-will"
              keywords="Magical, Range"
              trigger="You see the target of your mark prey within 1 zone Move or damage an ally"
              effect="Target is pulled to become engaged with you" 
            />

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Double Prey</h3>
            <p>When you mark prey, choose two creatures.</p>

            <h3 className="header">Predator Sight</h3>
            <p>You are supernaturally aware of the target of your mark prey. You always know their location, even if they’re hidden, have concealment, or undiscovered.</p>

            <h3 className="header">Undying Companion</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> beast companion subclass</p>
            <p>You gain the following ability:</p> 
            <AbilityCard
              name="Undying Companion"
              actType="Free"
              descriptor="You sacrifice some of your own vitality to keep your spirit ally in the fight."
              frequency="Encounter"
              keywords="Magical"
              trigger="Your primal beast is reduced to 0 hit points"
              effect="Your primal beast regains hit points equal to their shaken value." 
            />

            <h3 className="header">Predator's Camouflage</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> hunter subclass</p>
            <p>When you use mark prey, you become invisible until the end of your next turn.</p>

            <h3 className="header">Warden's Vigor</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> warden subclass</p>
            <p>When you use mark prey you gain temporary hit points equal to your tier. While you have a prey, you regain these same temporary hit points at the start of each turn.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ranger;