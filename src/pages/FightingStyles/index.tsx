import "./index.scss";
import { useState } from "react";
import AbilityCard from "../../components/AbilityCard";
import Dropdown from "../../components/Dropdown";

function FightingStyles() {
  const [isArchery, setArchery] = useState(false)
  const [isBastion, setBastion] = useState(false)
  const [isBrawling, setBrawling] = useState(false)
  const [isDueling, setDueling] = useState(false)
  const [isDirty, setDirty] = useState(false)
  const [isGreatWeapon, setGreatWeapon] = useState(false)
  const [isLurking, setLurking] = useState(false)
  const [isMedic, setMedic] = useState(false)
  const [isProtective, setProtective] = useState(false)
  const [isSkirmish, setSkirmish] = useState(false)
  const [isThrowing, setThrowing] = useState(false)
  const [isTwoWeapons, setTwoWeapons] = useState(false)
  

  const handleArchery = () => {
    setArchery(true);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleBastion = () => {
    setArchery(false);
    setBastion(true);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleBrawling = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(true);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleDueling = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(true);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleDirty = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(true);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleGreatWeapon = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(true);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleLurking = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(true);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleMedic = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(true);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleProtective = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(true);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleSkirmish = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(true);
    setThrowing(false);
    setTwoWeapons(false);
  };
  const handleThrowing = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(true);
    setTwoWeapons(false);
  };
  const handleTwoWeapons = () => {
    setArchery(false);
    setBastion(false);
    setBrawling(false);
    setDueling(false);
    setDirty(false);
    setGreatWeapon(false);
    setLurking(false);
    setMedic(false);
    setProtective(false);
    setSkirmish(false);
    setThrowing(false);
    setTwoWeapons(true);
  };

  const dropdownItems = [
    { label: "Archery", onClick: handleArchery },
    { label: "Bastion", onClick: handleBastion },
    { label: "Brawling", onClick: handleBrawling },
    { label: "Dueling", onClick: handleDueling },
    { label: "Dirty", onClick: handleDirty},
    { label: "Great Weapon", onClick: handleGreatWeapon},
    { label: "Lurking", onClick: handleLurking},
    { label: "Medic", onClick: handleMedic},
    { label: "Protective", onClick: handleProtective},
    { label: "Skirmish", onClick: handleSkirmish},
    { label: "Throwing", onClick: handleThrowing},
    { label: "Two Weapons", onClick: handleTwoWeapons}
  ];

  return (
    <div className="fighting-styles">
      <div className="fighting-styles-content">
        <h1>Fighting Styles</h1>
        <p>Those trained in the art of fighting are masters at using their weapons in deadly ways. Weapon focused classes can learn fighting styles, and then learn techniques from their chosen styles. Techniques give martial classes powerful weapon abilities much like how spellcasters have access to wondrous magic.</p>

        <p>When you learn a fighting style, you also learn a technique from that style. You can only learn techniques from fighting styles you have already learned.</p>
        
        <Dropdown items={dropdownItems} startLabel="Select a fighting style" />

        {isArchery && (
          <div>
            <h2>Archery Techniques</h2>
            <p>You excel at shooting ranged weapons.</p>
            <div className="techniques">
              <AbilityCard
                name="Assisting Shot"
                actType="Action"
                descriptor="You fire a shot aimed to distract your foe as well as hurt them."
                frequency="At-will"
                effect="Strike with a ranged weapon. On a success or higher, the next attack roll against the target gains +1 fortune until the end of your next turn." 
              />
              <AbilityCard
                name="Hail of Arrows"
                actType="Action"
                descriptor="You unleash a volley at a cluster of enemies."
                target="1d4 enemies within 1 zone"
                frequency="At-will"
                effect="Strike each target with a ranged weapon, but treat each attack roll as one degree of success lower." 
              />
              <AbilityCard
                name="Interrupt Shot"
                actType="Reaction"
                descriptor="You fire an arrow at a fleeing target."
                frequency="At-will"
                trigger="You see a creature within 1 zone Move"
                effect="Strike with a ranged weapon at +1 misfortune." 
              />
              <AbilityCard
                name="Pinning Shot"
                actType="Action"
                descriptor="You shoot for a foe’s leg in hopes of slowing them down."
                frequency="At-will"
                effect="Strike with a ranged weapon. On a success or higher, the target is slowed (turn ends)." 
              />
              <AbilityCard
                name="Retreating Shot"
                actType="Action"
                descriptor="As you run away, you fire a quick shot."
                frequency="At-will"
                effect="Disengage then Strike with a ranged weapon" 
              />
            </div>
            
          </div>
        )}
        {isBastion && (
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
                effect="Defend, and the penalty to attack rolls against you increases to +2 misfortunes." 
              />
              <AbilityCard
                name="Guard Attack"
                actType="Action"
                descriptor="You attack while brandishing your weapon or shield to also guard yourself."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                effect="Strike with a melee weapon, and on a success or higher, you Defend" 
              />
              <AbilityCard
                name="Juggernaut's Charge"
                actType="Action"
                descriptor="You rush forward with such force that you knock your foe to their feet."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                effect="Charge to Strike, and on a success or higher, the target is knocked prone" 
              />
              <AbilityCard
                name="Resilient Attack"
                actType="Action"
                descriptor="You fight through debilitations as you attack."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                effect="Make an overcome roll against an effect, then Strike" 
              />
              <AbilityCard
                name="Withstand"
                actType="Reaction"
                descriptor="You bolster your body’s might to overcome incoming harm."
                requirement="You’re wearing heavy armor"
                frequency="At-will"
                trigger="You see an attack roll made against your PD"
                effect="Triggering attack roll takes +1 misfortune" 
              />
            </div>
            
          </div>
        )}
        {isBrawling && (
          <div>
            <h2>Brawling Techniques</h2>
            <p>You are deadly without weapons.</p>
            <div className="techniques">
              <AbilityCard
                name="Dizzying Slam"
                actType="Action"
                descriptor="You knock your foe so hard, they become dizzy."
                frequency="At-will"
                effect="Strike with a natural melee weapon, and on a success or higher, the target is confused (turn ends)" 
              />
              <AbilityCard
                name="Grappling Attack"
                actType="Action"
                descriptor="You punch your foe and grab them."
                frequency="At-will"
                effect="Strike with a natural melee weapon, and on a success or higher, the target is seized (turn ends)" 
              />
              <AbilityCard
                name="Interrupt Grab"
                actType="Reaction"
                descriptor="You grab someone as they try to flee."
                trigger="You see a creature engaged to you Move or use a magical or ranged ability"
                frequency="At-will"
                effect="Grab the triggering creature" 
              />
              <AbilityCard
                name="Shoving Kick"
                actType="Action"
                descriptor="You kick a foe hard enough to send them flying."
                frequency="At-will"
                effect="Strike with a natural melee weapon, and on a success or higher, the target is shoved within your zone" 
              />
              <AbilityCard
                name="Sweeping Knockdown"
                actType="Maneuver"
                descriptor="As you grab your enemy, you shove them to the ground."
                frequency="At-will"
                effect="Grab and on a success or higher, the target is knocked prone" 
              />
            </div>
          </div>
        )}
        {isDueling && (
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
                effect="Hinder then Taunt the same target" 
              />
              <AbilityCard
                name="Bravado Charge"
                actType="Action"
                descriptor="You courageously dash across the battlefield to catch a foe off guard."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                effect="Charge and on a success or higher, the target is exposed (turn ends)" 
              />
              <AbilityCard
                name="Disarming Attack"
                actType="Action"
                descriptor="You attack with the aim to disarm your foe of their weapon."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                effect="Strike and on a success or higher, choose an item for the target to drop or you take the chosen item (your choice)" 
              />
              <AbilityCard
                name="Disarming Interrupt"
                actType="Reaction"
                descriptor="After you see an enemy prepare a devastating attack, you disarm them to prevent future harm."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                trigger="You see a creature engaged to you use a magical or ranged ability"
                effect="Disarm the triggering creature" 
              />
              <AbilityCard
                name="Dueling Parry"
                actType="Reaction"
                descriptor="As your foe attacks you, you bring up your sole weapon to expertly block."
                requirement="You’re wielding a standard melee weapon and your other hand is empty"
                frequency="At-will"
                trigger="You see an attack roll made against your PD"
                effect="Triggering attack roll takes +1 misfortune" 
              />
            </div>
          </div>
        )}
        {isDirty && (
          <div>
            <h2>Dirty Techniques</h2>
            <p>You use cheap tricks to catch enemies off guard.</p>
            <div className="techniques">
              <AbilityCard
                name="Crippling Attack"
                actType="Action"
                descriptor="Your attack aims to debilitate your foe as much as hurt them."
                frequency="At-will"
                effect="Strike and on a success or higher, the target is hindered (turn ends)" 
              />
              <AbilityCard
                name="Dirty Escape"
                actType="Maneuver"
                descriptor="With a disarming word or quick distraction, you throw your enemy off before darting away."
                frequency="At-will"
                effect="Hinder then Disengage" 
              />
              <AbilityCard
                name="Distracting Attack"
                actType="Action"
                descriptor="Your attack flusters a foe, leaving them open to brutal follow ups."
                frequency="At-will"
                effect="Strike and on a success or higher, the target is exposed (turn ends)" 
              />
              <AbilityCard
                name="Interrupt Preservation"
                actType="Reaction"
                descriptor="As you spot a foe attempting to recover, you distract them."
                frequency="At-will"
                trigger="You see a creature within 1 zone make an overcome roll"
                effect="Triggering overcome roll takes +1 misfortune" 
              />
              <AbilityCard
                name="Mass Hinder"
                actType="Action"
                descriptor="With a cunning move you debilitate multiple foes at once."
                target="1d4+1 enemies within your zone"
                frequency="At-will"
                effect="Hinder each target" 
              />
            </div>
          </div>
        )}
        {isGreatWeapon && (
          <div>
            <h2>Great Weapon Techniques</h2>
            <p>You wield heavier weapons to great devastation.</p>
            <div className="techniques">
              <AbilityCard
                name="Cleave"
                actType="Action"
                descriptor="You attack multiple foes with a wide sweep of your weapon."
                frequency="At-will"
                effect="Melee Strike two creatures with a heavy melee weapon" 
              />
              <AbilityCard
                name="Ground Slam"
                actType="Action"
                descriptor="You bring your giant weapon crashing into the ground, causing the earth to shake around you."
                requirement="You’re wielding a heavy melee weapon"
                target="1d4+1 enemies within your zone"
                defense="PD"
                critical="Same as success, and 1 force damage per your tier"
                success="Prone"
                frequency="At-will"
              />
              <AbilityCard
                name="Interrupt Knockdown"
                actType="Reaction"
                descriptor="You use the weight of your weapon to shove a distracted creature to the ground."
                frequency="At-will"
                trigger="You see a creature engaged to you Move or use a magical or ranged ability"
                requirement="You're wielding a heavy melee weapon"
                effect="Trip the triggering creature" 
              />
              <AbilityCard
                name="Knockdown Attack"
                actType="Action"
                descriptor="You attack with such strength, you push your foe to the ground."
                frequency="At-will"
                effect="Strike with a heavy melee weapon, and on a success or higher, the target is knocked prone" 
              />
              <AbilityCard
                name="Lunge Attack"
                actType="Action"
                descriptor="You take a step and swipe widely with your large weapon."
                effect="Strike with a heavy melee weapon, but you can target any creature within your zone." 
                frequency="At-will"
              />
            </div>
          </div>
        )}
        {isLurking && (
          <div>
            <h2>Lurking Techniques</h2>
            <p>You prefer to strike from the shadows.</p>
            <div className="techniques">
              <AbilityCard
                name="Ambush Attack"
                actType="Action"
                descriptor="You slip into the shadows before attacking."
                frequency="At-will"
                effect="Hide then Strike, or Strike then Hide" 
              />
              <AbilityCard
                name="Blown Cover"
                actType="Reaction"
                descriptor="When your hiding spot is discovered, you flee."
                trigger="You become visible after being hidden"
                effect="Disengage or Move"
                frequency="At-will"
              />
              <AbilityCard
                name="Find Cover"
                actType="Maneuver"
                descriptor="You kick up a table or lean behind a creature to gain cover that your foes quickly catch onto."
                frequency="At-will"
                effect="You use your environment to give yourself cover (turn starts)" 
              />
              <AbilityCard
                name="Into the Shadows"
                actType="Maneuver"
                descriptor="You dart into the shadows to fade from sight."
                frequency="At-will"
                effect="Move then Hide" 
              />
              <AbilityCard
                name="Unseen Attack"
                actType="Action"
                descriptor="You attack from the shadows without a trace."
                requirement="You’re hidden"
                frequency="At-will"
                effect="Strike, but you remain hidden" 
              />
            </div>
          </div>
        )}
        {isMedic && (
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
                effect="Ally gains 1 temporary hit point per your tier (scene ends)" 
              />
              <AbilityCard
                name="Doctor's Visit"
                actType="Action"
                keywords="Melee"
                target="1 willing creature you can touch"
                descriptor="You stride to an ally and help quickly patch up their wounds."
                frequency="At-will"
                effect="Target can spend a recovery. You can Disengage or Move to the target before they spend the recovery."
              />
              <AbilityCard
                name="Medical Assistance"
                actType="Reaction"
                descriptor="As an ally pulls themself together, your medical advice improves the process."
                trigger="You see an ally with your zone Rally or make an overcome roll"
                frequency="At-will"
                effect="If the triggering ally used Rally then increase the hit points regained by your proficiency bonus, or they gain +1 fortune to their overcome roll." 
              />
              <AbilityCard
                name="Overcome This"
                actType="Maneuver"
                descriptor="With medicinal herbs or encouraging words, you help an ally throw off an affliction."
                frequency="At-will"
                keywords="Melee"
                target="1 creature you can touch"
                effect="The target can make an overcome roll against an effect" 
              />
              <AbilityCard
                name="Stem the Bleeding"
                actType="Maneuver"
                descriptor="You staunch an ally’s bleeding."
                keywords="Melee"
                frequency="At-will"
                target="1 dying creature you can touch"
                effect="Target regains hit points equal to your proficiency bonus" 
              />
            </div>
          </div>
        )}
        {isProtective && (
          <div>
            <h2>Protective Techniques</h2>
            <p>You know how to protect others and yourself.</p>
            <div className="techniques">
              <AbilityCard
                name="Challenging Attack"
                actType="Action"
                descriptor="You strike with such ferocity that you demand your foe’s attention."
                frequency="At-will"
                effect="Strike with a melee weapon, and on a success or higher, the target is taunted (turn ends)" 
              />
              <AbilityCard
                name="Come and Get It"
                actType="Action"
                keywords="Range"
                target="1 creature taunted by you within 1 zone"
                descriptor="You taunt a foe forward, then surprise them with a swift attack."
                frequency="At-will"
                effect="Target must Move to you, then you Strike them with a melee weapon"
              />
              <AbilityCard
                name="Defender's Sacrifice"
                actType="Reaction"
                descriptor="You rush forward to throw yourself between a foe’s attack and your ally."
                trigger="You see an ally within your zone take damage"
                frequency="At-will"
                effect="Move next to the ally, and you take the triggering damage instead" 
              />
              <AbilityCard
                name="Defensive Taunt"
                actType="Maneuver"
                descriptor="As you challenge a foe to battle, you take a defensive stance."
                frequency="At-will"
                effect="Taunt then Defend" 
              />
              <AbilityCard
                name="Punishing Interrupt"
                actType="Reaction"
                frequency="At-will"
                descriptor="As your foe attacks your friend, you retaliate."
                trigger="You see a creature engaged to you make an attack roll against an ally"
                effect="Strike the triggering creature with a melee weapon" 
              />
            </div>
          </div>
        )}
        {isSkirmish && (
          <div>
            <h2>Skirmish Techniques</h2>
            <p>You value speed and light weapons.</p>
            <div className="techniques">
              <AbilityCard
                name="Double Charge"
                actType="Action"
                descriptor="You dash across the battlefield before foes can react."
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
                frequency="At-will"
                effect="Charge, but you Move twice as part of your Charge" 
              />
              <AbilityCard
                name="Hit and Run"
                actType="Action"
                descriptor="After you attack, you dart across the battlefield."
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
                frequency="At-will"
                effect="Strike then Move"
              />
              <AbilityCard
                name="Knife's Edge"
                actType="Action"
                descriptor="Your light weapon knicks a foe hard enough to make them bleed."
                frequency="At-will"
                effect="Strike and on a success or higher, the target takes 1 ongoing force damage per your tier" 
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
              />
              <AbilityCard
                name="Nimble Escape"
                actType="Reaction"
                descriptor="As an enemy catches you, you swiftly roll away to avoid further harm."
                frequency="At-will"
                effect="Disengage" 
                trigger="You take damage"
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
              />
              <AbilityCard
                name="Quick Retreat"
                actType="Maneuver"
                frequency="At-will"
                descriptor="You escape from danger impossibly fast."
                effect="Disengage twice" 
                requirement="You’re wielding a standard melee weapon, thrown ranged weapon, or short ranged weapon"
              />
            </div>
          </div>
        )}
        {isThrowing && (
          <div>
            <h2>Throwing Techniques</h2>
            <p>You prefer to throw light weapons at foes.</p>
            <div className="techniques">
              <AbilityCard
                name="Bounce Throw"
                actType="Action"
                descriptor="Your weapon bounces off a wall to hit a covered foe."
                frequency="At-will"
                effect="Strike with a thrown ranged weapon, and you ignore the penalty from cover" 
              />
              <AbilityCard
                name="Deflecting Throw"
                actType="Reaction"
                descriptor="You throw a weapon to deflect a foe’s attack."
                frequency="At-will"
                trigger="You see a creature within 1 zone make an attack roll against a creature's PD"
                effect="Triggering attack roll takes +1 misfortune"
              />
              <AbilityCard
                name="Far Throw"
                actType="Action"
                descriptor="With steady aim, you throw your weapon at a far away foe."
                frequency="At-will"
                effect="Strike with a thrown ranged weapon, but your weapon’s range increases by +1 zone" 
              />
              <AbilityCard
                name="Improvised Throw"
                actType="Action"
                descriptor="Pebble, quill, chunk of wood - anything is deadly in your hands when thrown."
                frequency="At-will"
                effect="Pick up a small object within reach, then Strike with it, treating the object as a thrown ranged weapon." 
              />
              <AbilityCard
                name="Ricochet Throw"
                actType="Action"
                frequency="At-will"
                descriptor="You throw your weapon to return back to you after it slices your enemy."
                effect="Strike with a thrown ranged weapon, and the weapon then returns to your hand." 
              />
            </div>
          </div>
        )}
        {isTwoWeapons && (
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
                effect="Strike with each weapon at +1 misfortune against the same target" 
              />
              <AbilityCard
                name="Offhand Attack"
                actType="Maneuver"
                descriptor="You attempt a lighter followup attack."
                frequency="At-will"
                requirement="You’re wielding a weapon in each hand"
                effect="Strike, but treat the result of your attack roll as one degree lower"
              />
              <AbilityCard
                name="Twin Charge"
                actType="Action"
                descriptor="You rush forward then unleash a flurry of attacks with your two weapons."
                frequency="At-will"
                requirement="You’re wielding a weapon in each hand"
                effect="Charge to Strike with each weapon at +1 misfortune against the same target" 
              />
              <AbilityCard
                name="Twin Flurry"
                actType="Action"
                descriptor="You unleash an onslaught of attacks from your twin weapons at nearby enemies."
                frequency="At-will"
                target="1d4+1 enemies engaged to you"
                requirement="You’re wielding a weapon in each hand"
                effect="Strike each target, but treat each attack roll as one degree of success lower" 
              />
              <AbilityCard
                name="Twin Parry"
                actType="Reaction"
                trigger="You see an attack roll made against your PD"
                frequency="At-will"
                descriptor="As your foe attacks you, you bring up your dual weapons to deflect."
                effect="Triggering attack roll takes +1 misfortune" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FightingStyles;