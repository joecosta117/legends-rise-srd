import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import ClassHeader from "../../components/ClassHeader";
import Monster from "../../components/Monster";
import Modifier from "../../components/Modifier";

function Rogue() {
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
    <div className="rogue">
      <div className="rogue-content">
        <ClassHeader />
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab">Rogue Details</div>
          <div className="divider">|</div>
          <div onClick={toggleSubclasses} className="tab">Rogue Subclasses</div>
          <div className="divider">|</div>
          <div onClick={toggleTalents} className="tab">Rogue Talents</div>
        </div>
        {isDetails && (
          <div>
            <h1>Rogue</h1>
            <p>Assassins, thieves, diplomats, scouts, explorers, and other talented and cunning heroes can all be Rogues. You rely on your wits, skills, and guile to help your allies. Play a rogue if you want to play a nimble combatant with plenty of talents outside of combat.</p>
            <h2>Core Features</h2>
            <ul>
              <li><span><b>Theme:</b> Martial</span></li>
              <li><span><b>Defense Bonus:</b> +2 to Evasion and Resolve</span></li>
              <li><span><b>Starting Hit Points:</b> 10</span></li>
              <li><span><b>Recoveries:</b> 5</span></li>
              <li><span><b>Training:</b> Light armor, standard melee weapons, and all ranged weapons</span></li>
              <li><span><b>Starting Equipment:</b> You gain light armor and two weapons.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You gain light armor, a long ranged bow, and a standard melee blade.</span></li>
                </ul>
              </li>
            </ul>
    
            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3>Fightng Style</h3>
            <p>You have mastered a certain way of fighting. Learn a fighting style.</p>
            <ul>
              <li><span><i>Suggestion:</i> You learn the lurking fighting style and unseen attack technique.</span></li>
            </ul>
    
            <h3>Evasive Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Evasive Attack"
              actType="Action"
              descriptor="You dart around as you attack."
              frequency="At-will"
              effect="Disengage then Strike, or Strike then Disengage" 
            />

            <h3>Cunning Strike</h3>
            <p>You know how to best hurt an off guarded foe. When you Strike with at least one <Modifier type="f" />, you deal additional physical damage equal to your tier. You don’t gain this additional damage when using a heavy melee weapon or wearing heavy armor.</p>

            <h3>Opportunist</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Opportunist"
              actType="Reaction"
              descriptor="Before a foe has a chance to react, you seize your opportunity."
              frequency="Reaction"
              trigger="You see an ally finish their turn"
              requirement="You haven’t taken a turn yet this round"
              effect="You take your turn next" 
            />

            <h3>Expertise</h3>
            <p>You gain two knacks.</p>
    
            <h3>Subclass</h3>
            <p>Choose the shadow subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3>Agile</h3>
            <p>You ignore any effects from a failed attack roll against your Evasion.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Rogue Subclasses</h1>
            <p>These are the subclass choices for the rogue.</p>
            <h2>Shadow</h2>
            <p>You have a magical affinity with darkness.</p>
            <h3>Umbral Techniques (1st-Level Feature)</h3>
            <p>You gain night vision, and you gain the following ability:</p>
            <AbilityCard
              name="Shadow Leap"
              actType="Maneuver"
              descriptor="You teleport through the darkness."
              target="area in darkness within 1 zone per tier, including another creature’s shadow"
              frequency="At-will"
              effect="You teleport to the targeted area, and you gain +1 fortune to your next Strike (turn ends)" 
            />

            <h2>Investigator</h2>
            <p>You intently study your environment and foes, and can use any minor detail to your advantage.</p>
            <h3>Eye for Detail (1st-Level Feature)</h3>
            <p>When you Study a creature, you gain +1 fortune on your next Strike against them (turn ends). At the start of combat, you can Study as a free action.</p>

            <h2>Swashbuckler</h2>
            <p>You fight with bravados and panache.</p>
            <h3>Panache (1st-Level Feature)</h3>
            <p>Your stylish moves build your confidence. When you Disarm, Help, Hinder, Shove, Taunt, Trip, or another act of significant style (GM’s discretion), you gain a panache token that lasts for the scene. When you make a roll, you can spend any number of panache tokens to gain an equal number of <Modifier type="f" /> to the roll.</p>
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Rogue Class Talents</h1>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h2>Tier 1 Class Talents</h2>
            <h3>Cull the Weak</h3>
            <p>A hindered creature is also exposed only to you.</p>

            <h3>Expanded Training</h3>
            <p>You learn a technique or fighting style. You can take this class talent multiple times.</p>
            
            <h3>Feint Attack</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Feint Attack"
              actType="Ability"
              descriptor="With a clever trick, you open your foe up for a deadly attack."
              frequency="At-will"
              effect="Strike, but make your attack roll against the target’s Resolve." 
            /> 

            <h3>Lightning Reflexes</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Lightning Reflexes"
              actType="Reaction"
              descriptor="You quickly dodge to avoid harm."
              trigger="When you see an enemy make an attack roll against your Evasion"
              frequency="At-will"
              effect="Triggering attack roll takes +1 misfortune" 
            />

            <h3>Slip the Knife</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Slip the Knife"
              actType="Ability"
              descriptor="You strike the gap between a foe's armor."
              frequency="At-will"
              effect="Strike, but make your attack roll against the target’s Might." 
            /> 
            
            <h2>Tier 2 Class Talents</h2>
            <h3>Greater Opportunist</h3>
            <p>When you use opportunist, you gain <Modifier type="f" count="1" /> to your next attack roll on that turn.</p>

            <h3>Insightful Movement</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> investigator subclass</p>
            <p>You gain the following ability:</p> 
            <AbilityCard
              name="Insightful Movement"
              actType="Maneuver"
              descriptor="As you dart around the battlefield, you carefully examine your surroundings."
              frequency="At-will"
              effect="Disengage or Move, then Study" 
            />

            <h3>Meld the Shadows</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> shadow subclass</p>
            <p>When you use shadow leap, you become invisible (turn starts) or until you use a hostile act.</p> 

            <h3>Slippery Mind</h3>
            <p>You ignore any effects from a failed attack roll against your Resolve.</p>

            <h3>Start with Style</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> swashbuckler subclass</p>
            <p>You always start a combat encounter with a number of panache tokens equal to 1 plus your momentum.</p>

            <h2>Tier 3 Class Talents</h2>
            <h3>Cunning Precision</h3>
            <p>You gain the following ability:</p> 
            <AbilityCard
              name="Cunning Precision"
              actType="Reaction"
              descriptor="With near supernatural skill, you turn a fumble into a deadly strike."
              frequency="At-will"
              trigger="You get a failure on a Strike with cunning strike"
              effect="Reroll your Strike’s attack roll, and take the highest result" 
            />

            <h3>Investigator's Sight</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> investigator subclass</p>
            <p>You are always aware of your surroundings. You gain blind vision within 1 zone.</p>

            <h3>Mobile Panache</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> swashbuckler subclass</p>
            <p>When you spend a panache token on your turn, you become hastened until the end of your turn.</p> 

            <h3>Shadow Afterimage</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> shadow subclass</p>
            <p>When you shadow leap, you leave behind a shadowy duplicate of yourself that lasts until the end of your next turn. The duplicate has the same defenses as you, but disappears if it takes any damage.</p>

            <h3>Uncanny Opportunist</h3>
            <p>You gain a second reaction that you can only use on opportunist.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Rogue;