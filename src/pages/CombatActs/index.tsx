import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import Accordion from "../../components/Accordion";

function CombatActs() {
  const [all, setAll] = useState(true);
  const [actions, setActions] = useState(false);
  const [maneuvers, setManeuvers] = useState(false);
  function handleAll() {
    setAll(true);
    setActions(false);
    setManeuvers(false);
  }
  function handleActions() {
    setAll(false);
    setActions(true);
    setManeuvers(false);
  }
  function handleManeuvers() {
    setAll(false);
    setActions(false);
    setManeuvers(true);
  }

  const actionsContent = [
    {
      title: "Charge (Action)",
      actType: "Action",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You rush forward before attacking."
            frequency="At-will"
            effect="Move and end your movement to Disarm, Grab, Shove, Trip, or Strike with a melee weapon."
          />
        </div>
      )
    },
    {
      title: "Prepare (Action)",
      actType: "Action",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You prepare to react to an incoming danger."
            frequency="At-will"
            duration="Start of your next turn"
            effect="Choose an ability that takes a maneuver or action. Assign a trigger. When the trigger occurs, you can use a reaction to do your prepared ability."
          />
        </div>
      )
    },
    {
      title: "Rally (Action)",
      actType: "Action",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You push yourself to stay in the fight longer."
            frequency="Encounter"
            effect="Spend a recovery and Defend"
          />
        </div>
      )
    },
    {
      title: "Strike (Action)",
      actType: "Action",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You attack with a weapon."
            frequency="At-will"
            keywords="Weapon, Melee or Range"
            target="1 engaged creature for a melee weapon, or 1 creature within a ranged weapon’s range"
            defense="EVN"
            damage="weapon damage per your tier"
          />
        </div>
      )
    },
  ]
  const maneuversContent = [
    {
      title: "Aim (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You steady yourself to better land an attack."
            frequency="At-will"
            duration="End of your current turn"
            effect="You gain +1 fortune on your next attack roll"
          />
        </div>
      )
    },
    {
      title: "Defend (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You take a guarded stance."
            frequency="At-will"
            duration="Start of your next turn"
            effect="Creatures take +1 misfortune on attack rolls against you."
          />
        </div>
      )
    },
    {
      title: "Disarm (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You attempt to knock an item from a foe’s grasp."
            frequency="At-will"
            target="1 engaged creature"
            keywords="Melee"
            defense="MGT"
            damage="(+1 fortune for each size larger you are than the target, or +1 misfortune for each size smaller you are than the target)"
            success="Choose an item for the target to drop or you take the chosen item (your choice)."
          />
        </div>
      )
    },
    {
      title: "Disengage (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You carefully step away."
            frequency="At-will"
            requirement="You aren’t in a difficult zone and your speed isn’t 0."
            effect="You traverse anywhere within your zone, or if you’re already at your zone’s border, you can cross into the adjacent zone."
          />
        </div>
      )
    },
    {
      title: "Grab (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You try to grab a creature within reach."
            frequency="At-will"
            target="1 engaged creature"
            requirement="You have a free hand"
            keywords="Melee"
            defense="MGT"
            damage="(+1 fortune for each size larger you are than the target, or +1 misfortune for each size smaller you are than the target)"
            success="Seized (overcome ends)"
          />
        </div>
      )
    },
    {
      title: "Help (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You carefully step away."
            frequency="At-will"
            keywords="Range"
            requirement="You aid an ally through encouraging words, a clever insight, magic, or a well timed distraction."
            target="1 ally within 1 zone"
            effect="Target gains +1 fortune to attack rolls and overcome rolls (turn ends)"
          />
        </div>
      )
    },
    {
      title: "Hide (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You stealthily fade away from sight."
            frequency="At-will"
            requirement="You have cover or concealment"
            effect="You become hidden"
          />
        </div>
      )
    },
    {
      title: "Hinder (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="With a skillful move you debilitate a foe."
            frequency="At-will"
            keywords="Range"
            target="1 creature within 1 zone"
            effect="Target becomes hindered (turn ends)"
          />
        </div>
      )
    },
    {
      title: "Interact (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You manipulate nearby scenery or an object."
            frequency="At-will"
            effect="You manipulate a part of the terrain or objects, such as pulling out a potion and drinking it, feeding someone a potion, picking up a dropped weapon, switching what weapons you’re wielding, or trying to pick a lock. Quick manipulations only require a free action, such as opening an unlocked door or drawing a weapon already on you."
          />
        </div>
      )
    },
    {
      title: "Move (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You stride forward."
            frequency="At-will"
            effect="You stride up a number of zones equal to your speed."
          />
        </div>
      )
    },
    {
      title: "Shove (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You push a creature away"
            frequency="At-will"
            target="1 engaged creature"
            keywords="Melee"
            defense="MGT"
            damage="(+1 fortune for each size larger you are than the target, or +1 misfortune for each size smaller you are than the target)"
            success="Shove target within their zone"
            critical="Shove target up to 1 zone away"
          />
        </div>
      )
    },
    {
      title: "Stand (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You pull yourself up from the ground."
            frequency="At-will"
            effect="You are no longer prone"
          />
        </div>
      )
    },
    {
      title: "Study (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You focus your attention on the battlefield to notice anything of interest."
            frequency="At-will"
            keywords="Range"
            target="1 creature, terrain, or object that you can see"
            effect={(
              <span>
                <span>You learn general information about the target as well as one significant fact of your choice about the target such as:</span>
                <ul>
                  <li><span>Current hit points</span></li>
                  <li><span>Defense scores</span></li>
                  <li><span>Resistances and weaknesses</span></li>
                  <li><span>Traits</span></li>
                  <li><span>Abilities</span></li>
                </ul>
              </span>
            )}
          />
        </div>
      )
    },
    {
      title: "Taunt (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You goad a foe to attack only you."
            frequency="At-will"
            keywords="Range"
            target="1 creature within 1 zone"
            effect="Target becomes taunted by you (turn ends)"
          />
        </div>
      )
    },
    {
      title: "Trip (Maneuver)",
      actType: "Maneuver",
      content: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You knock a foe to the ground."
            frequency="At-will"
            target="1 engaged creature"
            keywords="Melee"
            defense="MGT"
            damage="(+1 fortune for each size larger you are than the target, or +1 misfortune for each size smaller you are than the target)"
            success="Target falls prone"
            critical="Same as a success, and the target takes 1 physical damage per your tier"
          />
        </div>
      )
    },
  ]
  const allContent = [...actionsContent, ...maneuversContent].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="acts">
      <div className="acts-content">
        <h1>Basic Combat Abilities</h1>
        <p>All heroes and enemies have access to basic abilities. Each turn in combat, you can use <b>two maneuvers, or a maneuver and an action</b>. You also have <b>one reaction per round</b>.</p>
        <Accordion title="Types of Basic Abilities" content={(
          <div>
            <h3 className="header">Actions</h3>
            <p>Your action is the main act you do during a turn, usually some type of attack or other important ability. Actions often require you make a roll.</p>
            <h3 className="header">Maneuvers</h3>
            <p>Maneuvers are minor acts that supplement your action. Most maneuvers don’t require any roll.</p>
            <h3 className="header">Reactions</h3>
            <p>A reaction is a special ability that is triggered by an event and can be used anytime, even on other’s turns.</p>
            <h3 className="header">Free Actions</h3>
            <p>Certain abilities are so minor or quick that they don’t take a maneuver or action to do, such as speaking. Typically you can take as many free actions as you want only on your turn, unless a feature indicates you can take the free action out of your turn.</p>
            <h3 className="header">Improvised Acts</h3>
            <p>If you want to try something not listed as an action or maneuver, work with your GM to determine the effect. If the idea requires an attack roll along with an impactful effect, such as dealing damage, then it should be an action. Otherwise, a maneuver works well.</p>
          </div>
        )} />

        <div className="acts-content__tabs">
          <div className="acts-content__tabs__tab" onClick={handleAll}><p>All </p></div>
          <div className="acts-content__tabs__divider">|</div>
          <div className="acts-content__tabs__tab" onClick={handleActions}><p>Actions</p></div>
          <div className="acts-content__tabs__divider">|</div>
          <div className="acts-content__tabs__tab" onClick={handleManeuvers}><p>Maneuvers</p></div>
        </div>

        {all && (
          <div>
            <h2>All Basic Abilities</h2>
            <p>Below are all basic abilities each hero can do.</p>
            {allContent.map(({ title, content, actType }) => (
              <Accordion stacked title={title} content={content} type="spell" actType={actType} />
            ))}
          </div>
        )}
        {actions && (
          <div>
            <h2>Basic Actions</h2>
            <p>Below are all basic actions each hero can do.</p>
            {actionsContent.map(({ title, content, actType }) => (
              <Accordion stacked title={title} content={content} type="spell" actType={actType} />
            ))}
          </div>
        )}
        {maneuvers && (
          <div>
            <h2>Basic Maneuvers</h2>
            <p>Below are all basic maneuvers each hero can do.</p>
            {maneuversContent.map(({ title, content, actType }) => (
              <Accordion stacked title={title} content={content} type="spell" actType={actType} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default CombatActs;