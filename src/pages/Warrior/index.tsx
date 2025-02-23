import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import Modifier from "../../components/Modifier";
import ClassHeader from "../../components/ClassHeader";

function Warrior() {
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
    <div className="warrior">
      <div className="warrior-content">
        <ClassHeader />
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab">Warrior Details</div>
          <div className="divider">|</div>
          <div onClick={toggleSubclasses} className="tab">Warrior Subclasses</div>
          <div className="divider">|</div>
          <div onClick={toggleTalents} className="tab">Warrior Talents</div>
        </div>
        {isDetails && (
          <div>
            <h1>Warrior</h1>
            <p>Soldiers, gladiators, mercenaries, noble knights, and more can all be Warriors. You rely on martial prowess to eliminate any dangers while weathering incoming violence. Play a warrior if you want to be a tough fighter that is skilled with weapons.</p>
            <h2>Core Features</h2>
            <ul>
              <li><span><b>Theme:</b> Martial</span></li>
              <li><span><b>Defense Bonus:</b> +1 to PD</span></li>
              <li><span><b>Starting Hit Points:</b> 12</span></li>
              <li><span><b>Recoveries:</b> 6</span></li>
              <li><span><b>Training:</b> All armor and weapons</span></li>
              <li><span><b>Starting Equipment:</b> You gain one armor, one weapon, and either a shield or weapon.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You gain heavy armor, a standard melee blade, and a shield.</span></li>
                </ul>
              </li>
            </ul>
    
            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3>Fightng Style</h3>
            <p>You have mastered a certain way of fighting. Learn a fighting style.</p>
              <ul>
                <li><span><i>Suggestion:</i> You learn the bastion fighting style and guard attack technique.</span></li>
              </ul>
    
            <h3>Precision Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Precision Attack"
              actType="Action"
              descriptor="You attack with unerring accuracy from countless practice."
              frequency="At-will"
              effect="Strike with +1 fortune" 
            />

            <h3>Comeback Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Comeback Attack"
              actType="Action"
              descriptor="You pull yourself together as you attack."
              frequency="Encounter"
              keywords="Escalation"
              effect="Spend a recovery then Strike" 
            />

            <h3>Interrupt Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Interrupt Attack"
              actType="Reaction"
              descriptor="As you see your foe distracted, you strike with your weapon."
              frequency="At-will"
              trigger="You see an engaged creature Move or use a range or magical ability"
              keywords="Melee"
              effect="Strike the triggering creature" 
            />
    
            <h3>Subclass</h3>
            <p>Choose the weapon master subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3>Indomitable</h3>
            <p>You shrug off harmful effects easier than most. You make overcome rolls against effects at the start of your turn, instead of at the end, except for dying.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Warrior Subclasses</h1>
            <p>These are the subclass choices for the warrior.</p>
            <h2>Weapon Master</h2>
            <p>You use well practiced maneuvers to throw off your foes.</p>
            <h3>Extraordinary Technique (1st-Level Feature)</h3>
            <p>When you get a success on a Strike, you can apply the critical effect of your weapon’s weapon group.</p>

            <h2>Juggernaut</h2>
            <p>You rely on your fury and focus in battle to push yourself beyond mortal limits.</p>
            <h3>Unstoppable (1st-Level Feature)</h3>
            <p>You gain <Modifier type="f" count="1" /> to overcome rolls, and attack rolls against you take <Modifier type="mf" count="1" />. While unarmored, you gain +1 to your PD.</p>

            <h2>Slayer</h2>
            <p>You focus your fighting tactics on pure offense, hoping to finish off foes as quickly as possible.</p>
            <h3>Super Critical (1st-Level Feature)</h3>
            <p>When you Strike, and your attack roll total is 10 or more over the target’s defense, then the bonus damage from a critical success is doubled.</p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Warrior Class Talents</h1>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h2>Tier 1 Class Talents</h2>
            <h3>Expanded Training</h3>
            <p>You learn a technique or fighting style. You can take this class talent multiple times.</p>
            
            <h3>Greater Comeback</h3>
            <p>When you use comeback attack, you gain a number of <Modifier type="f" /> to your Strike equal to your momentum.</p>
            
            <h3>Tough</h3>
            <p>Your maximum hit points increases by your proficiency bonus, and you are defeated at four wounds instead of three.</p>

            <h3>Unmatched Precision</h3>
            <p>When you roll a <Modifier type="f" /> on an attack roll, you can reroll the <Modifier type="f" /> and take the highest result.</p>

            <h3>Warrior's Charge</h3>
            <p>When you Charge, instead of a Strike you can comeback attack, precision attack, or another technique from your fighting styles that takes an action, but doesn’t include the Charge action.</p>
            
            <h2>Tier 2 Class Talents</h2>
            <h3>Comeback Technique</h3>
            <p>When you use comeback attack, you can use a technique that takes an action instead of a Strike.</p>

            <h3>Expanded Techniques</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> weapon master subclass</p>
            <p>Learn a fighting style or technique. Make this choice again.</p>

            <h3>Improved Indomitable</h3>
            <p>You add your proficiency bonus to overcome rolls.</p>

            <h3>Undying</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> juggernaut subclass</p>
            <p>When you are shaken, but not dying, you gain regeneration equal to your tier.</p>

            <h3>Unerring Accuracy</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> slayer subclass</p>
            <p>When you Strike with <Modifier type="f" />, increase the number of <Modifier type="f" /> by +1. </p> 

            <h2>Tier 3 Class Talents</h2>
            <h3>Greater Technique</h3>
            <p>When you use a technique ability that has an effect on a success, you still get the effect on a partial success.</p>
            
            <h3>Juggernaut's Comeback</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> juggernaut subclass</p>
            <p>When you use comeback attack, you end all negative conditions on yourself.</p>

            <h3>Mega Critical</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> slayer subclass</p>
            <p>Once per long rest, you can turn a Strike into a super critical.</p>

            <h3>Swift Interrupt</h3>
            <p>You gain a second reaction that you can only use to interrupt attack.</p>

            <h3>Weapon Flexibility</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> weapon master subclass</p>
            <p>Choose a critical effect from a weapon group. When you apply a critical effect on a Strike, you can choose the weapon’s normal weapon group critical effect or the chosen critical effect.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Warrior;