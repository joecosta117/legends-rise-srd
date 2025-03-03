import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";

function Paladin() {
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
    <div className="paladin">
      <div className="paladin-content">
        <ClassHeader />
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab-items__tab" data-selected={isDetails}>Paladin Details</div>
          <div className="tab-items__divider">|</div>
          <div onClick={toggleSubclasses} className="tab-items__tab" data-selected={isSubclasses}>Paladin Subclasses</div>
          <div className="tab-items__divider">|</div>
          <div onClick={toggleTalents} className="tab-items__tab" data-selected={isTalents}>Paladin Talents</div>
        </div>
        {isDetails && (
          <div>
            <h1>Paladin</h1>
            <p>Paladins are warriors empowered by the divine to serve as militant champions of a specific god or oath. Devoted to their cause, paladins almost zealously carry out their mission, which can be rooting out evil or protecting the innocent. Play a paladin if you want to be a divine fighter that smites their foes and heals their allies.</p>
            <h2>Core Features</h2>
            <ul style={{marginTop: '10px'}}>
              <li><span><b>Theme:</b> Martial</span></li>
              <li><span><b>Defense Bonus:</b> +2 to Evasion, Might, and Resolve</span></li>
              <li><span><b>Starting Hit Points:</b> 12</span></li>
              <li><span><b>Recoveries:</b> 7</span></li>
              <li><span><b>Training:</b> All armor and weapons</span></li>
              <li><span><b>Starting Equipment:</b> You gain one armor, one weapon, and either a shield or weapon.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You gain heavy armor, a standard melee blade, and a shield.</span></li>
                </ul>
              </li>
            </ul>
    
            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3 className="header">Fightng Style</h3>
            <p>You have mastered a certain way of fighting. Learn a fighting style.</p>
              <ul>
                <li><span><i>Suggestion:</i> You learn the protective fighting style and challenging attack technique.</span></li>
              </ul>
    
            <h3 className="header">Protective Smite</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Protective Smite"
              actType="Action"
              descriptor="As you attack your foe, you shield an ally with grace."
              frequency="At-will"
              keywords="Magical"
              effect="Strike, and choose a creature within your zone to gain temporary hit points equal to your tier (scene ends)." 
            />

            <h3 className="header">Divine Smite</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Divine Smite"
              actType="Action"
              descriptor="You channel the powers of the divine into your attack."
              frequency="Encounter"
              keywords="Escalation, Magical"
              effect="Strike, and you deal additional holy or unholy (your choice) damage equal to your proficiency bonus." 
            />

            <h3 className="header">Restorative Touch</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Restorative Touch"
              actType="Maneuver"
              descriptor="With a touch, you sacrifice some of your energy to soothe a friend."
              frequency="At-will"
              target="1 creature you can touch"
              keywords="Magical, Melee"
              effect="Expend a recovery for the target to heal equal to your shaken value, and they can make an overcome roll against an effect." 
            />
    
            <h3 className="header">Subclass</h3>
            <p>Choose the guardian subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3 className="header">Zealous Blessing</h3>
            <p>Choose one of the following blessings:</p>
            <ul>
              <li><span><b>Aegis:</b> Increase all your defenses by +1.</span></li>
              <li><span><b>Wrath:</b> When you Strike, you deal additional holy or unholy (your choice) damage equal to your tier.</span></li>
            </ul>
            <p>After a short rest, you can change your blessing.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Paladin Subclasses</h1>
            <p>These are the subclass choices for the paladin.</p>
            <h2>Guardian</h2>
            <p>You have sworn to protect others from harm.</p>
            <h3 className="header">Divine Shield (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Divine Shield"
              actType="Reaction"
              descriptor="You ward an ally with your divine powers."
              frequency="At-will"
              keywords="Magical"
              trigger="You see an ally take damage within your zone"
              effect="Ally gains resistance only to the triggering damage." 
            />

            <h2>Avenger</h2>
            <p>You are empowered by an oath to destroy your sworn enemies or foes of your god.</p>
            <h3 className="header">Oath of Vengeance (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Oath of Vengeance"
              actType="Maneuver"
              descriptor="You declare a foe the target of your divine wrath."
              frequency="At-will"
              target="1 creature within 1 zone"
              keywords="Magical"
              duration="Until the creature is killed, surrenders, or you use this ability again"
              effect="You gain +1 fortune on attack rolls against the target." 
            />

            <h2>Censor</h2>
            <p>You have sworn to carry out judgement against the unworthy.</p>
            <h3 className="header">Divine Judgement (1st-Level Feature)</h3>
            <p>Through your weapon, you mark foes for debilitating condemnation. When you get a success or higher on a Strike against creature, the target is hindered (turn ends).</p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Paladin Class Talents</h1>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h2>Tier 1 Class Talents</h2>
            
            <h3 className="header">Burning Smite</h3>
            <p>Divine smite sets your foe ablaze. On a success, the target takes ongoing damage equal to your tier. The damage type matches the one chosen for divine smite.</p>
            
            <h3 className="header">Communal Restoration</h3>
            <p>When you use restorative touch on an ally, you also heal equal to half your shaken value.</p>

            <h3 className="header">Divine Magic</h3>
            <p>You learn the holy or unholy magic tradition.</p>

            <h3 className="header">Expanded Training</h3>
            <p>You learn a technique or fighting style. You can take this class talent multiple times.</p>

            <h3 className="header">Punishing Smite</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Punishing Smite"
              actType="Action"
              descriptor="With your attack, you summon a heavenly spirit to punish your foe if they harm others."
              frequency="At-will"
              effect="Strike, and the target is marked (turn ends). While marked, if the target makes an attack roll against a creature other than you, the target takes holy or unholy (your choice) damage equal to your proficiency bonus." 
            />
            
            <h2>Tier 2 Class Talents</h2>
            <h3 className="header">Blinding Smite</h3>
            <p>Your smite can blind a foe. On a critical success of divine smite, the target is blinded (scene ends).</p>

            <h3 className="header">Chains of Judgement</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> censor subclass</p>
            <p>Your smite can place chains of judgment on a foe. On a success of divine smite, the target is seized (turn ends), or seized (scene ends) on a critical success.</p>

            <h3 className="header">Divine Matyr</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> guardian subclass</p>
            <p>When you use divine shield, you can take all the remaining damage instead of your ally. This damage can’t be reduced in anyway.</p>

            <h3 className="header">Purifying Touch</h3>
            <p>When you use restorative touch, you can immediately end one condition on the target, except for prone.</p> 
            
            <h3 className="header">Vengeful Reprisal</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> avenger subclass</p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Vengeful Reprisal"
              actType="Reaction"
              descriptor="You punish your sworn enemy from escaping or attacking your friend."
              frequency="At-will"
              keywords="Magical"
              trigger="You see the target of your oath of vengeance Move or make an attack roll against an ally"
              effect="Strike the target of your oath of vengeance. If the target is within 1 zone of you, you can teleport to become engaged with them before you Strike." 
            />

            <h2>Tier 3 Class Talents</h2>
            <h3 className="header">Avenger's Aura</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> avenger subclass</p>
            <p>While you aren’t defeated, your zone is a dangerous zone (1 holy damage per your tier) only for enemies.</p>

            <h3 className="header">Censor's Aura</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> censor subclass</p>
            <p>While you aren’t defeated, your zone is a difficult zone only for enemies.</p>

            <h3 className="header">Banishing Smite</h3>
            <p>When you use holy smite on a target not from this realm, you can choose to banish your foe. On a success, the target returns to their home realm (turn ends), or for the scene (scene ends) on a critical success.</p>

            <h3 className="header">Guardian's Aura</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> guardian subclass</p>
            <p>While you aren’t defeated, all enemies within your zone are taunted by you.</p>

            <h3 className="header">Rejuvenating Touch</h3>
            <p>When you use restorative touch, the target gains temporary hit points equal to your tier at the start of each of their turns (scene ends).</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Paladin;