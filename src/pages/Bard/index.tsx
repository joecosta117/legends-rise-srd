import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";

function Bard() {
  const [isDetails, setDetails] = useState(true);
  const [isSubclasses, setSubclasses] = useState(false);
  const [isTalents, setTalents] = useState(false);
  const [isPerformances, setPerformances] = useState(false);

  const toggleDetails = () => {
    if (!isDetails) {
      setDetails(true);
      setSubclasses(false);
      setTalents(false);
      setPerformances(false);
    }
  };
  
  const toggleSubclasses = () => {
    if (!isSubclasses) {
      setSubclasses(true);
      setDetails(false);
      setTalents(false);
      setPerformances(false);
    }
  };

  const toggleTalents = () => {
    if (!isTalents) {
      setTalents(true);
      setSubclasses(false);
      setDetails(false);
      setPerformances(false);
    }
  };

  const togglePerformances = () => {
    if (!isPerformances) {
      setPerformances(true);
      setTalents(false);
      setSubclasses(false);
      setDetails(false);
    }
  }
  
  return (
    <div className="bard">
      <div className="bard-content">
        <div className="tab-items">
          <div onClick={toggleDetails} className="tab">Bard Details</div>
          <div className="divider">|</div>
          <div onClick={toggleSubclasses} className="tab">Bard Subclasses</div>
          <div className="divider">|</div>
          <div onClick={toggleTalents} className="tab">Bard Talents</div>
          <div className="divider">|</div>
          <div onClick={togglePerformances} className="tab">Bardic Performances</div>
        </div>
        {isDetails && (
          <div>
            <h1>Bard</h1>
            <p>Bards are performers that weave magic with words, rhythm, and art to aid allies, bewitch foes, and create dazzling illusions. Bards might be a traveling artist, a scoundrel that's picked up a few magical tricks, or an adventuring scholar that’s unlocked the magic of words. Play a bard if you create magical performances.</p>
            <h2>Core Features</h2>
            <ul>
              <li><span><b>Theme:</b> Cunning</span></li>
              <li><span><b>Defense Bonus:</b> +2 to MD</span></li>
              <li><span><b>Starting Hit Points:</b> 8</span></li>
              <li><span><b>Recoveries:</b> 4</span></li>
              <li><span><b>Training:</b> None</span></li>
              <li><span><b>Starting Equipment:</b> You gain an adventurer's pack and an implement.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You gain a magical instrument as your implement.</span></li>
                </ul>
              </li>
            </ul>
    
            <h2>1st Level Features</h2>
            <p>You gain the following features at 1st level.</p>
            <h3>Bardic Magic</h3>
            <p>You weave magic through words, dance, or music.</p>
            <ul>
              <li><span><b>Mana:</b> 2, increasing to 5 at 5th level, and 8 at 8th level</span></li>
              <li><span><b>Magic Tradition:</b> You learn two magic traditions from the following list: arcane, enchantment, illusion, life, nature, protection, teleportation, or time. You learn a battle spell from each of your chosen traditions.</span>
                <ul className="secondary-list">
                  <li><span><i>Suggestion:</i> You learn the enchantment and life magic traditions. From the enchantment tradition, you learn the disrupt thoughts and charm battle spells. From the life tradition, you learn the stabilize and mass heal battle spells.</span></li>
                </ul>
              </li>
              <li><span><b>Spells at Higher Levels:</b> At levels 2, 4, 6, and 9, you learn a battle spell or a magic tradition from the previous list.</span></li>
            </ul>
    
            <h3>Bardic Performance</h3>
            <p>You weave music, art, or dance to magically inspire allies or disrupt your foes with demonstrations called bardic performances. You learn the performance of courage bardic performance.</p>
            <AbilityCard
              name="Bardic Performance"
              actType="Maneuver"
              descriptor="With an inspiring performance, your allies courageously push back against your enemies."
              frequency="At-will"
              duration="Start of your next turn"
              effect="Targets gain +1 fortune to attack rolls" 
            />
    
            <h3>Subclass</h3>
            <p>Choose the muse of drama subclass, or another subclass of your choice. At 1st level, you gain features from your chosen subclass.</p>
    
            <h2>2nd Level Features</h2>
            <p>Starting at 2nd level, you gain one class talent from the list at the end of this class description. You gain another class talent at 4th, 6th, and 9th levels.</p>
            <p>You also gain a theme talent from your theme. You gain another theme talent at 4th, 6th, and 9th level.</p>
    
            <h2>3rd Level Features</h2>
            <p>You gain the following features at 3rd level.</p>
            <h3>Expanded Performances</h3>
            <p>You learn another bardic performance.</p>
          </div>
        )}

        {isSubclasses && (
          <div>
            <h2>Bard Subclasses</h2>
            <p>These are the subclass choices for the bard.</p>
            <h3>Muse of Drama</h3>
            <p>Your creativity gains inspiration from the magic of narration and storytelling. Your performances interject thrilling heroic moments, but not without the risk of danger.</p>
            <h4>Plot Twist (1st-Level Feature)</h4>
            <p>You know how to raise the stakes and create a good story. You can tempt fate on any roll, and when you or an ally tempt fate, the bonus increases by +1 fortune.</p>

            <h3>Muse of Lore</h3>
            <p>Unlike other bards, you focus your creativity on the history and the lore of the world around you, and use it to weave grand performances.</p>
            <h4>Student of Lore (1st-Level Feature)</h4>
            <p>You gain a knack related to a knowledgeable topic such as ancient history. You also gain the following ability:</p>
            <AbilityCard
              name="Lore Drop"
              actType="Reaction"
              descriptor="You weave together a tale of knowledge."
              frequency="At-will"
              trigger="You use a bardic performance"
              effect="Study" 
            />

            <h3>Warmage</h3>
            <p>You specialize in casting from the frontlines, using magic to bolster your defenses and destruction.</p>
            <h4>War Magic (1st-Level Feature)</h4>
            <p>While unarmored, you gain +1 to your PD. Also, when you deal damage on an attack roll with a magical ability, you deal additional damage equal to your tier.</p>
          </div>
        )}

        {isTalents && (
          <div>
            <h2>Bard Class Talents</h2>
            <p>At 2nd, 4th, 6th, and 9th level, choose a class talent from the below list. You can only pick a class talent of your tier or lower.</p>
            <h3>Tier 1 Class Talents</h3>
            <h4>Expanded Bardic Magic</h4>
            <p>Learn a battle spell or magic tradition from one listed in arcanist magic. You can take this class talent multiple times.</p>

            <h4>Far Spell</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Far Spell"
              actType="Reaction"
              descriptor="You extend your magic further than possible."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell that targets a creature or zone"
              effect="For a range spell, increase the range by 1 zone, or for a melee spell, you can instead target a creature within your zone." 
            />

            <h4>Powerful Spell</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Powerful Spell"
              actType="Reaction"
              descriptor="You amplify your dangerous magic."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell of tier 1 or higher that deals initial damage"
              effect="Increase the triggering spell’s initial damage by the spell tier." 
            />

            <h4>Safe Spell</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Safe Spell"
              actType="Reaction"
              descriptor="You shield your allies from your magic."
              frequency="At-will"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell that targets an entire zone or zone border"
              effect="Choose a number of creatures equal to your proficiency bonus to be unaffected by the triggering spell." 
            />

            <h4>Substitute Spell</h4>
            <p>During a short rest, you can replace one of your known battle spells with another battle spell of the same tier and from the same magic tradition.</p>
            
            <h3>Tier 2 Class Talents</h3>
            <h4>Advanced Learning</h4>
            <p style={{marginBottom: 0}}><b>Requirement:</b> wizard subclass</p>
            <p>You learn a battle spell from one of your known magic traditions of a spell tier no higher than your tier. Make this choice again.</p>

            <h4>Arcane Vitality</h4>
            <p style={{marginBottom: 0}}><b>Requirement:</b> sorcerer subclass</p>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Arcane Vitality"
              actType="Free"
              descriptor="You transmute some of your life force into magical essence."
              frequency="Encounter"
              keywords="Magical"
              effect="Spend a recovery, but instead of regaining hit points, you regain mana equal to your tier." 
            />

            <h4>Effortless Spell</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Effortless Spell"
              actType="Reaction"
              descriptor="With little strain, you cast a familiar spell."
              frequency="Encounter"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell of tier 1 or higher"
              effect="You don’t spend mana on the triggering spell." 
            />

            <h4>Magic Surge</h4>
            <p style={{marginBottom: 0}}><b>Requirement:</b> warmage subclass</p>
            <p>When you use high magic, arcane energy leaps out from you at a number of creatures equal to the spell’s tier within 1 zone. Target creatures take arcane damage equal to the spell’s tier.</p>

            <h4>Immediate Spell</h4>
            <p>You gain the following ability:</p>
            <AbilityCard
              name="Immediate Spell"
              actType="Reaction"
              descriptor="With great effort, you quickly cast a spell."
              frequency="Encounter"
              keywords="Spellshape"
              trigger="You Spellcast a battle spell that takes an action"
              effect="You can instead use a maneuver to Spellcast the triggering spell" 
            />


            <h3>Tier 3 Class Talents</h3>
            <h4>All Knowing</h4>
            <p style={{marginBottom: 0}}><b>Requirement:</b> wizard subclass</p>
            <p>You are permanently hastened, but you can only use this extra maneuver to Study.</p>

            <h4>Arcane Ascension</h4>
            <p style={{marginBottom: 0}}><b>Requirement:</b> sorcerer subclass</p>
            <p>During unleash arcane, you gain a fly speed equal to your land speed and when you start your turn without mana, you regain 2 mana.</p>

            <h4>Master Arcanist</h4>
            <p>You gain a second reaction that you can only use on features from this class such as countermagic.</p>

            <h4>Overpower Magic</h4>
            <p style={{marginBottom: 0}}><b>Requirement:</b> warmage subclass</p>
            <p>All your magical abilities ignore damage resistances.</p>

            <h4>Unparalleled Magic</h4>
            <p>You can use high magic a second time per short rest.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bard;