import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import fortune from "../../assets/fortune-icon-v2.png";
import misfortune from "../../assets/misfortune-icon-v2.png";
import ClassHeader from "../../components/ClassHeader";

function Magesmith() {
  const [isDetails, setDetails] = useState(true);
  const [isSubclasses, setSubclasses] = useState(false);
  const [isTalents, setTalents] = useState(false);
  const [isUpgrades, setUpgrades] = useState(false);

  const toggleDetails = () => {
    if (!isDetails) {
      setDetails(true);
      setSubclasses(false);
      setTalents(false);
      setUpgrades(false);
    }
  };
  
  const toggleSubclasses = () => {
    if (!isSubclasses) {
      setSubclasses(true);
      setDetails(false);
      setTalents(false);
      setUpgrades(false);
    }
  };

  const toggleTalents = () => {
    if (!isTalents) {
      setTalents(true);
      setSubclasses(false);
      setDetails(false);
      setUpgrades(false);
    }
  };

  const toggleUpgrades = () => {
    if (!isUpgrades) {
      setUpgrades(true);
      setTalents(false);
      setSubclasses(false);
      setDetails(false);
    }
  }
  
  return (
    <div className="magesmith">
      <div className="magesmith-content">
        <ClassHeader />
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab">Magesmith Details</div>
          <div className="divider">|</div>
          <div onClick={toggleSubclasses} className="tab">Magesmith Subclasses</div>
          <div className="divider">|</div>
          <div onClick={toggleTalents} className="tab">Magesmith Talents</div>
          <div className="divider">|</div>
          <div onClick={toggleUpgrades} className="tab">Magesmith Upgrades</div>
        </div>
        {isDetails && (
          <div>
            <h1>Magesmith</h1>
            <p>Magesmiths approach magic with an engineering mind, eager to create wondrous magical tools. Magesmiths might be magical tinkerers, warriors enhanced through arcane technology, or adventuring scholars eager to uncover magical relics of past ages. Play a magesmith if you want to create magical items to bolster yourself and allies.</p>
            <h2>Core Features</h2>
            <ul>
              <li><span><b>Theme:</b> Arcane</span></li>
              <li><span><b>Defense Bonus:</b> +2 to Evasion and Resolve</span></li>
              <li><span><b>Starting Hit Points:</b> 10</span></li>
              <li><span><b>Recoveries:</b> 5</span></li>
              <li><span><b>Training:</b> Light armor and all weapons</span></li>
              <li><span><b>Starting Equipment:</b> You gain one armor, one weapon, and an implement.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You gain light armor, long ranged bow, and a standard melee blade as your implement.</span></li>
                </ul>
              </li>
            </ul>
    
            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3>Magesmith Magic</h3>
            <p>You invoke magic through items.</p>
            <ul>
              <li><span><b>Mana:</b> 1, increasing to 3 at 5th level, and 5 at 8th level</span></li>
              <li><span><b>Magic Tradition:</b> You learn a magic tradition from the following list: arcane, life, protection, teleportation, or war. You learn a battle spell from your chosen tradition.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You learn the arcane magic traditions. From the arcane tradition, you learn the arcane dart and chaos burst battle spells.</span></li>
                </ul>
              </li>
              <li><span><b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you learn a battle spell or a magic tradition from the previous list.</span></li>
            </ul>
    
            <h3>Talented Artificer</h3>
            <p>You gain the artificer theme talent, and the bonus from this talent increases to <b>+2 <img className="icon" src={fortune} alt="fortune icon" /></b>.</p>
    
            <h3>Arcane Upgrades</h3>
            <p>You can infuse items with magical power. During a short rest, you can infuse a single item in your possession with an upgrade. The maximum number of upgrades you can have equals 1 plus your tier. An item can have a number of upgrades up to your tier, but can’t have the same upgrade multiple times. You start off knowing 4 upgrades and learn an additional upgrade at 5th level and 8th level. Upgrades are listed at the end of this class. If you die, then any upgrades you created fade after several days.</p>

            <h3>Subclass</h3>
            <p>Choose the machinist subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3>Expert Relic User</h3>
            <p>The number of permanent magic items you can align to increases to 1 plus your tier.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h1>Magesmith Subclasses</h1>
            <p>These are the subclass choices for the magesmith.</p>
            <h2>Machinist</h2>
            <p>You create arcane machines that blast your foes or protect your allies.</p>
            <h3>Arcane Turret (1st-Level Feature)</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Arcane Turret"
              actType="Action"
              descriptor="You quickly assemble a magical cannon that scurries away and becomes activated."
              frequency="At-will"
              keywords="Magical, Summon"
              // @ts-ignore
              effect={(
                <span>
                  <span>You create a turret within 1 zone of you. The turret’s defenses equal 8 plus your proficiency bonus, and hit points equal double your proficiency bonus. When you command your turret, it can only Move or use one of the following actions:</span>
                  <ul>
                    <li><span><i>Fire:</i> The turret’s zone becomes a dangerous zone (1 arcane damage per your tier) for enemies until the start of your next turn.</span></li>
                    <li><span><i>Magnify:</i> The turret’s zone becomes a difficult zone for enemies until the start of your next turn.</span></li>
                    <li><span><i>Shield</i> All creatures of your choice within the turret’s zone, except the turret, gain temporary hit points equal to your tier (scene ends).</span></li>
                  </ul>
                </span>
              )}  
            />

            <h2>Magemech</h2>
            <p>You have created a magical suit of armor that encases your body in premier protection. </p>
            <h3>Mech Suit (1st-Level Feature)</h3>
            <p>You design a mech suit that only you can wear, which takes an action to equip on or off. Choose the type of suit you’ve created:</p>
            <ul>
              <li><span><b>Stalker:</b> This model counts as light armor. While wearing the stalker mech, you gain the following ability:</span></li>
              <AbilityCard
                name="Stalker Mode"
                actType="Maneuver"
                descriptor="Your mech suit blurs your form, giving you advantage against your foes."
                frequency="At-will"
                keywords="Magical"
                duration="Start of your next turn"
                effect="Creatures take +1 misfortune to attack rolls against you, while you gain +1 fortune to attack rolls." 
              />
              <li><span><b>Vanguard:</b> This model counts as heavy armor, and you are trained in it despite not being trained in normal heavy armor. While wearing the vanguard mech, you gain the following ability:</span></li>
              <AbilityCard
                name="Vanguard Challenge"
                actType="Maneuver"
                descriptor="You unleash a pulse of energy that shields your mech suit while drawing a foe’s attention."
                frequency="At-will"
                keywords="Magical"
                effect="You gain 1 temporary hit point per your tier (scene ends) and you can Taunt." 
              />
            </ul>
            

            <h2>Runesmith</h2>
            <p>You have studied the magic of runes, and have learned to apply arcane runes to armor of allies and enemies.</p>
            <h3>Etch Rune (1st-Level Feature)</h3>
            <p>You gain the following ability: </p>
            <AbilityCard
              name="Etch Rune"
              actType="Maneuver"
              descriptor="You trace the outline of a rune in the air, which then appears on an ally or foe."
              frequency="At-will"
              duration="End of your next turn"
              target="1 creature within 1 zone"
              keywords="Magical, Range"
              effect={(
                <span>
                  <span>Choose one of the following effects:</span>
                  <ul>
                    <li><span><i>Destruction:</i> Whenever the target takes damage, they take 1 additional arcane damage per your tier.</span></li>
                    <li><span><i>Protection:</i> Target gains temporary hit points equal to your proficiency bonus.</span></li>
                    <li><span><i>Strength</i> Target gains <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> to attack rolls.</span></li>
                  </ul>
                </span>
              )}  
            />
          </div>
        )}

        {isTalents && (
          <div>
            <h1>Magesmith Class Talents</h1>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h2>Tier 1 Class Talents</h2>
            <h3>Additional Upgrades</h3>
            <p>Learn another upgrade from arcane upgrades. You can take this class talent multiple times.</p>

            <h3>Expanded Magesmith Magic</h3>
            <p>Learn a battle spell or magic tradition from one listed in magesmith magic. You can take this class talent multiple times.</p>

            <h3>Infuse Armor</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Infuse Armor"
              actType="Reaction"
              descriptor="As you use magic, you siphon some of the arcane energy to empower an ally’s armor."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast"
              effect="Choose a creature within 1 zone. The target’s Evasion increases by +1 until the start of your next turn." 
            />

            <h3>Infuse Weapon</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Infuse Weapon"
              actType="Reaction"
              descriptor="As you use magic, you siphon some of the arcane energy to empower an ally’s weapon."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast"
              effect="Choose a creature within 1 zone. When the target deals damage from an attack roll, they deal 1 additional arcane damage per the triggering spell tier (turn ends)." 
            />

            <h3>Rapid Upgrade</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Rapid Upgrade"
              actType="Action"
              descriptor="You have learned how to quickly upgrade items in the heat of battle."
              frequency="At-will"
              keywords="Magical, Range"
              target="1 creature within 1 zone"
              effect="Infuse an item of the target’s with an upgrade from arcane upgrade." 
            />
            
            <h2>Tier 2 Class Talents</h2>
            <h3>Advanced Mech</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> magemech subclass</p>
            <p>Your mech suit is boosted depending on the model:</p>
            <ul>
              <li><span><i>Stalker:</i> When you use stalker mode, you can teleport up to 1 zone away and the ability gains the range keyword.</span></li>
              <li><span><i>Vanguard:</i> When you use vanguard challenge, you can choose an ally within 1 zone to gain the same temporary hit points adn the abilty gains the range keyword.</span></li>
            </ul>

            <h3>Mass Rune</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> runesmith subclass</p>
            <p>When you use etch rune, you can spend mana equal to your tier to target 1d4+1 creatures within 1 zone.</p>

            <h3>No Friendly Fire</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> machinist subclass</p>
            <p>When your arcane turret uses the Fire or Magnify actions, you and allies are unaffected.</p>

            <h3>Recharge Magic Item</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Recharge Magic Item"
              actType="Action"
              descriptor="You know how to best get more magic from relics of power."
              frequency="At-will"
              keywords="Magical, Range"
              target="1 magical item within 1 zone"
              requirement="Targeted item has an encounter ability that has already been used"
              effect="Targeted item regains another use of its encounter ability." 
            />

            <h3>Spell Store</h3>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Spell Store"
              actType="Free"
              descriptor="You infuse an item with a magical spell to be released later with a command word."
              frequency="At-will"
              keywords="Magical"
              duration="Until after your next rest"
              trigger="You Spellcast a battle spell"
              effect="The spell’s effect doesn’t immediately happen. Instead, the spell is stored within an item in your hand. As a maneuver, anyone holding the enchanted item can activate the spell’s effect." 
            />

            <h2>Tier 3 Class Talents</h2>
            <h3>Dual Functioning Turret</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> machinist subclass</p>
            <p>When you command your arcane turret, you can choose two actions.</p>

            <h3>Legendary Relic User</h3>
            <p>The number of permanent magic items you can align to increases to your proficiency bonus.</p>

            <h3>Master Upgrader</h3>
            <p>The maximum number of upgrades you can have equals your proficiency bonus.</p>

            <h3>Signature Rune</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> runesmith subclass</p>
            <p>Choose one of the rune options from etch rune to become your signature rune. When you use your signature rune, the ability lasts for the scene. For the destruction option, the target can make overcome rolls at the end of their turn to end the effect.</p>
          
            <h3>Superior Mech</h3>
            <p style={{marginBottom: 0}}><b>Requirement:</b> magemech subclass</p>
            <p>When wearing your mech suit, you gain a fly speed equal to your land speed and you gain to <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> overcome rolls.</p>
          </div>
        )}

        {isUpgrades && (
          <div>
            <h1>Magesmith Upgrades</h1>
            <p>When you learn an arcane ugprade, you choose from the following options. Some upgrades require you to have a certain tier before you can learn them.</p>

            <h2>Aegis Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> tier 2</p>
            <p>While the upgraded item is equipped, the wielder’s Evasion increases by +1.</p>

            <h2>Aether Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> tier 2</p>
            <p>While the upgraded item is equipped, the wielder’s Resolve increases by +1.</p>

            <h2>Awareness Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> tier 2</p>
            <p>While the upgraded item is equipped, the wielder gains blind vision within 1 zone.</p>

            <h2>Climb Upgrade</h2>
            <p>While the upgraded item is equipped, the wielder gains a climb speed of 1.</p>

            <h2>Destruction Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> tier 2</p>
            <p>While the upgraded item is equipped, the wielder gains the following ability:</p>
            <AbilityCard
              name="Destruction Field"
              actType="Maneuver"
              descriptor="You unleash the power of your upgrade for arcane energy to lash out at nearby foes."
              frequency="At-will"
              keywords="Aura, Magical"
              duration="Scene ends"
              effect="Your zone becomes a dangerous zone (1 arcane per your tier) for enemies" 
            />

            <h2>Dimensional Upgrade</h2>
            <p>While the upgraded item is equipped, the wielder can Spellcast dimensional step once per short rest without spending mana, even if they don’t know the spell.</p>

            <h2>Elemental Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> only on weapons</p>
            <p>Choose one damage type. A creature deals 1 additional damage per your tier on a Strike with the upgraded weapon. The additional damage type matches the chosen damage type.</p>
            
            <h2>Explosive Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> only on weapons</p>
            <p>When a creature gets a critical success on a Strike with the upgraded weapon, 1d4+1 other enemies within the target’s zone take 1 arcane damage per your tier.</p>

            <h2>Fly Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> tier 2</p>
            <p>While the upgraded item is equipped, the wielder gains a fly speed of 1.</p>

            <h2>Fortitude Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> tier 2</p>
            <p>While the upgraded item is equipped, the wielder’s Might increases by +1.</p>

            <h2>Gravity Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> tier 2</p>
            <p>While the upgraded item is equipped, the wielder gains the following ability:</p>
            <AbilityCard
              name="Gravity Field"
              actType="Maneuver"
              descriptor="You unleash the power of your upgrade to dampen the gravity around nearby foes."
              frequency="At-will"
              keywords="Aura, Magical"
              duration="Scene ends"
              effect="Your zone becomes a difficult zone for enemies" 
            />

            <h2>Keen Upgrade</h2>
            <p style={{marginBottom: 0}}><b>Requirement:</b> only on weapons</p>
            <p>When a creature gets a critical success on a Strike with the upgraded weapon, the target takes 1 ongoing physical damage per your tier.</p>

            <h2>Phase Upgrade</h2>   
            <p>While the upgraded item is equipped, the wielder has phasing.</p>

            <h2>Resistance Upgrade</h2>   
            <p>Choose one damage type except for physical. While the upgraded item is equipped, the wielder gains resistance to the chosen damage type equal to your tier.</p>

            <h2>Shield Upgrade</h2>   
            <p>While the upgraded item is equipped, the wielder starts any encounter with temporary hit points equal to your proficiency bonus (scene ends).</p>

            <h2>Sight Upgrade</h2>   
            <p>While the upgraded item is equipped, the wielder gains night vision.</p>

            <h2>Water Upgrade</h2>   
            <p>While the upgraded item is equipped, the wielder gains a swim speed of 1 and can breath underwater.</p>

          </div>
        )}
      </div>
    </div>
  )
}

export default Magesmith;