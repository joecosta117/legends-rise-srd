import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import fortune from "../../assets/fortune-icon-v2.png";
import misfortune from "../../assets/misfortune-icon-v2.png";
import Monster from "../../components/Monster";

function Occultist() {
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
    <div className="occultist">
      <div className="occultist-content">
        <ClassHeader />
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab">Occultist Details</div>
          <div className="divider">|</div>
          <div onClick={toggleSubclasses} className="tab">Occultist Subclasses</div>
          <div className="divider">|</div>
          <div onClick={toggleTalents} className="tab">Occultist Talents</div>
        </div>
        {isDetails && (
          <div>
            <h1>Occultist</h1>
            <p>Occultists employ strange, forbidden, and often dangerous magic that other spellcasters shy away from. Play an occultist if you want to curse your foes and cast dark magic.</p>
            <h2>Occultist Origins</h2>
            <p>Here are some suggestions for the origins of your magic:</p>
            <ul>
              <li><span><b>Gifted:</b> You made a pact with a powerful entity for your strange magic, or perhaps it was gifted upon you as a reward.</span></li>
              <li><span><b>Innate:</b> Thanks to a magical bloodline, experimentation, or arcane exposure, eldritch magic flows through your veins and is a part of you.</span></li>
              <li><span><b>Learned:</b> You have studied from forbidden texts to unlock the secrets of forbidden magic.</span></li>
            </ul>
            <h2>Core Features</h2>
            <ul>
              <li><span><b>Theme:</b> Arcane</span></li>
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
            <h3>Occultist Magic</h3>
            <p>You channel strange and dark magic.</p>
            <ul>
              <li><span><b>Mana:</b> 2, increasing to 5 at 5th level, and 8 at 8th level</span></li>
              <li><span><b>Magic Tradition:</b> You learn two of the following magic traditions: death, eldritch, enchantment, gravity, illusion, shadow, teleportation, time, or unholy. You learn a battle spell from each chosen tradition.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You learn the eldritch and teleportation magic traditions. From the eldritch tradition, you learn the telekinetic push and otherworldly whispers battle spells, and from the teleportation tradition you learn dimensional shutter and dimensional step battle spells.</span></li>
                </ul>
              </li>
              <li><span><b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you learn a battle spell or a magic tradition from the previous list.</span></li>
            </ul>
    
            <h3>Hex</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Hex"
              actType="Maneuver"
              descriptor="You curse a foe with dark magic."
              frequency="At-will"
              target="1 creature within 2 zones"
              duration="Scene ends, target is defeated, or you use this ability again on another creature"
              effect="Target is hindered" 
            />
    
            <h3>Subclass</h3>
            <p>Choose the warlock subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3>Disrupting Curse</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Disrupting Curse"
              actType="Reaction"
              descriptor="You interrupt a foe's resolve with a curse."
              frequency="At-will"
              keywords="Magical, Range"
              trigger="You see a creature within 1 zone make an overcome roll"
              effect="The triggering creature takes +1 misfortune to their overcome roll, or +2 misfortune if the creature is the target of your hex." 
            />
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Occultist Subclasses</h1>
            <p>These are the subclass choices for the occultist.</p>

            <h2>Warlock</h2>
            <p>Through dark deals and forbidden studies you unlock unnatural pathways to power best left forgotten.</p>
            <h3>Dark Empowerment (1st-Level Feature)</h3>
            <p>When you make a roll, you can take damage equal to your proficiency bonus to gain <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> to the roll. This damage can’t be reduced in any way.</p>

            <h2>Binder</h2>
            <p>You have bound a dark spirit to serve you, and can empower it in battle.</p>
            <h3>Binder’s Familiar (1st-Level Feature)</h3>
            <p>You gain the familiar theme talent, but your familiar is either an aberration, fiend, or undead. You also gain the following ability:</p>
            <AbilityCard
              name="Empower Familiar"
              actType="Action"
              descriptor="You use dark magic to grow and strengthen your familiar to fight alongside you."
              frequency="At-will"
              keywords="Magical"
              duration="Focus for the scene"
              effect="You spend mana equal to your tier to transform your familiar, which then uses the empowered familiar stat block. When you use this ability and later when you focus on it, your familiar can immediately use a maneuver or action. Your familiar uses your reaction. When your familiar is reduced to 0 hit points, it reduces back to its smaller size and quickly retreats back to your side to hide for the rest of the combat." 
            />
            <Monster 
              name="Empowered Familiar" 
              type="Medium Aberration, Fiend, or Undead (same as your familiar)" 
              hp="triple your proficiency bonus (PB)"
              evn="10 + PB"
              mgt="12 + PB"
              res="8 + PB"
              pb="PB"
              resistances="unholy tier (fiend only), necrotic tier (undead only), psychic tier (aberration only)"
              weaknesses="holy PB (fiend and undead only)"
              traits={[{name: "Hex Challenger", description: "The target of your hex is taunted by your familiar."}]}
              summons
              actions={[{
                basic: true,
                name: "Rend",
                keywords: "melee, weapon",
                target: "1 engaged creature",
                defense: "EVN",
                damage: "PB physical damage"
              }]}
            />

            <h2>Curseblade</h2>
            <p>Unlike other occultists, you prefer to cast dark magic alongside your weapons.</p>
            <h3>Curseblade Training (1st-Level Feature)</h3>
            <p>You gain the following benefits:</p>
            <ul>
              <li><span>Your starting hit points increase to 10, and your recoveries increase to 5.</span></li>
              <li><span>You gain training in light armor, shields, and all weapons.</span></li>
              <li><span>You gain one armor, one weapon, and either another weapon or shield from your starting equipment.</span></li>
            </ul>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Occultist Class Talents</h1>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h2>Tier 1 Class Talents</h2>

            <h3>Curse Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Curse Spell"
              actType="Reaction"
              descriptor="You siphon spell energy to place a minor hex on an enemy."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell"
              effect="Choose one target within your zone. The target takes +1 misfortune to their next roll (turn ends)." 
            />

            <h3>Dark Favor</h3>
            <p>When you see the target of your hex die, you gain temporary hit points equal to your proficiency bonus (scene ends).</p>

            <h3>Expanded Occultist Magic</h3>
            <p>Learn a battle spell or magic tradition from one listed in occultist magic. You can take this class talent multiple times.</p>

            <h3>Punishing Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Punishing Spell"
              actType="Reaction"
              descriptor="Your spell punishes a foe's resilience."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell that forces targets to make overcome rolls"
              effect="Choose one target of the triggering spell, and they take +1 misfortune to overcome rolls against the spell’s effect." 
            />

            <h3>Rapid Hex</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Rapid Hex"
              actType="Reaction"
              descriptor="As your cursed foe falls, you curse another."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You see the target of your hex become defeated"
              effect="Use hex against a new target" 
            />
            
            <h2>Tier 2 Class Talents</h2>

            <h3>Blinding Spell</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Blinding Spell"
              actType="Reaction"
              descriptor="You weave a blinding hex on a spell."
              frequency="Encounter"
              keywords="Spellshape"
              trigger="You get a success or higher on an attack roll with a battle spell"
              effect="Target of the triggering attack roll becomes blinded (turn ends)" 
            />

            <h3>Burning Hex</h3>
            <p>The target of your hex takes necrotic, psychic, or unholy (your choice) ongoing damage equal to your tier. This ongoing damage only ends when the creature is no longer the target of your hex.</p>

            <h3>Defensive Sacrifice</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> binder subclass</p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Defensive Sacrifice"
              actType="Reaction"
              descriptor="You transfer the incoming pain of an ally onto your familiar."
              frequency="Encounter"
              keywords="Spellshape"
              trigger="You see a creature take damage within your familiar’s zone"
              requirement="Your familiar is under the effects of empowered familiar"
              effect="Triggering damage is instead taken by your familiar. If the damage reduces your familiar to 0 hit points, then any remaining damage is dealt to the original target." 
            />

            <h3>Dimensional Hex</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> curseblade subclass</p>
            <p>When you use hex, you can teleport to become engaged to the target. On subsequent turns as a maneuver, you can teleport to become engaged to the target of your hex as long as they are within 1 zone.</p>

            <h3>Risky Exchange</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> warlock subclass</p>
            <p>When you Spellcast a spell, you can take damage equal to your shaken value to increase the spell’s tier by one. This damage taken can’t be reduced in any way.</p>

            <h2>Tier 3 Class Talents</h2>
            <h3>Constant Curse</h3>
            <p>You get a second reaction that you can only use on disrupting curse.</p>

            <h3>Dark Link</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> warlock subclass</p>
            <p>You create a bond between you and your hex target. When you take damage, your hex target takes the same amount of damage. The damage taken can’t be reduced in any way.</p>

            <h3>Greater Familiar</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> binder subclass</p>
            <p>Your familiar when empowered through empower familiar is improved depending on the creature type:</p>
            <ul>
              <li><span><i>Aberration:</i> On a successful Strike against your hex target, the target becomes dazed (turn ends).</span></li>
              <li><span><i>Fiend:</i> Your familiar gains a fly speed of 1.</span></li>
              <li><span><i>Undead:</i> When your familiar is reduced to 0 hit points, then make an overcome roll. On a success, your familiar is instead reduced to 1 hit point. Any damage from a critical success or holy damage ignores this feature.</span></li>
            </ul>

            <h3>Lifedrinker</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> curseblade subclass</p>
            <p>When you Strike the target of your hex, you gain temporary hit points equal to your tier  (scene ends).</p>

            <h3>Twin Hex</h3>
            <p>When you use hex, choose two targets.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Occultist;