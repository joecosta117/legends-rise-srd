import "./index.scss";
import React from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";
import basicAtk from "../../assets/monster-strike.png"

interface MonsterProps {
  name: string;
  summons?: boolean;
  hp: string;
  pd: string;
  md: string;
  pb: string;
  vision?: string;
  type: string;
  speeds?: string;
  resistances?: string;
  traits?: Traits[];
  actions: Abilities[];
  maneuvers?: Abilities[];
  reactions?: Abilities[];
  accordion?: boolean;
}

interface Abilities {
  basic?: boolean;
  name: string;
  keywords?: string;
  defense?: string;
  target?: string;
  duration?: string;
  damage?: string;
  critical?: string;
  success?: string;
  partial?: string;
  failure?: string;
  effect?: string;
  frequency?: string;
  trigger?: string;
}

interface Traits {
  name: string;
  description: string;
}

const Monster: React.FC<MonsterProps> = ({ name, accordion, vision, summons, hp, pd, md, pb, type, speeds, resistances, traits, actions, maneuvers, reactions }) => {
  const transformEffect = (effect: string) => {
    const fortuneRegex = /(\+?\d*)\s*(fortune)/gi;
    const misfortuneRegex = /(\+?\d*)\s*(misfortune)/gi;

    return effect.split(' ').map((word, index, array) => {
      if (misfortuneRegex.test(word)) {
        return <span key={index}><img className="icon" src={misfortune} alt="misfortune icon" /> </span>;
      } else if (fortuneRegex.test(word)) {
        return <span key={index}><img className="icon" src={fortune} alt="fortune icon" /> </span>;
      } else if (array[index + 1] === 'fortune' || array[index + 1] === 'misfortune') {
        return <span key={index}><b>{word}</b> </span>;
      } else {
        return <span key={index}>{word} </span>;
      }
    });
  };
  
  return (
    <div className="monster" data-accordion={accordion}>
      <h3>{name}</h3>
      <div className="monster-content">
      <p><i>{type}</i></p>
      {summons ? 
        <div className="basics">
          <p><b>HP</b> {hp}</p>
          <p><b>PD</b> {pd}  <b>|</b>  <b>MD</b> {md}  <b>|</b>  <b>PB</b> +{pb}</p>
        </div> 
        :
        <div className="basics">
          <p><b>HP</b> {hp}  <b>|</b>  <b>PD</b> {pd}  <b>|</b>  <b>MD</b> {md}  <b>|</b>  <b>PB</b> +{pb}</p>
        </div> 
      }
      {resistances && <p><b>Resistances</b> {resistances}</p>}
      {speeds && <p><b>Speeds</b> {speeds}</p>}
      {vision && <p><b>Vision</b> {vision}</p>}
      {traits && traits.length > 0 && (
        <div className="section">
          <h4>Traits</h4>
          <ul>
            {traits.map((trait, index) => (
              <p key={index}><b>{trait.name}:</b> {transformEffect(trait.description)}</p>
            ))}
          </ul>
        </div>
      )}
      {actions && actions.length > 0 && (
        <div className="abilities">
          <h4 data-type="action">Actions</h4>
          <ul>
            {actions.map((action, index) => (
              <div key={index}>
                <p>{action.basic && <img className="attack-icon" src={basicAtk} alt="attack icon" />}<b> {action.name} ({action.keywords})</b></p>
                {action.frequency && <p><i>Frequency:</i> {action.frequency}</p>}
                {action.target && <p><i>Target:</i> {action.target}</p>}
                {action.duration && <p><i>Duration:</i> {action.duration}</p>}
                {action.defense && <p><i>Attack vs {action.defense}:</i> {action.damage}</p>}
                <ul className='monster-degrees-of-success'>
                  {action.critical && <li><span><i>Critical:</i> {action.critical}</span></li>}
                  {action.success && <li><span><i>Success:</i> {action.success}</span></li>}
                  {action.partial && <li><span><i>Partial:</i> {action.partial}</span></li>}
                  {action.failure && <li><span><i>Failure:</i> {action.failure}</span></li>}
                </ul>
                {action.effect && (typeof action.effect === 'string' ? <p className="ability__line"><i>Effect:</i> {transformEffect(action.effect)}</p> : <p className="ability__line"><i>Effect:</i> {action.effect}</p>)}
              </div>
            ))}
          </ul>
        </div>
      )}
      {maneuvers && maneuvers.length > 0 && (
        <div className="abilities">
          <h4 data-type="maneuver">Maneuvers</h4>
          <ul>
            {maneuvers.map((maneuver, index) => (
              <div key={index}>
                <p><b>{maneuver.name} ({maneuver.keywords})</b></p>
                {maneuver.target && <p><i>Target:</i> {maneuver.target}</p>}
                {maneuver.duration && <p><i>Duration:</i> {maneuver.duration}</p>}
                {maneuver.defense && <p><i>Attack vs {maneuver.defense}:</i> {maneuver.damage}</p>}
                <ul className='monster-degrees-of-success'>
                  {maneuver.critical && <li><span><i>Critical:</i> {maneuver.critical}</span></li>}
                  {maneuver.success && <li><span><i>Success:</i> {maneuver.success}</span></li>}
                  {maneuver.partial && <li><span><i>Partial:</i> {maneuver.partial}</span></li>}
                  {maneuver.failure && <li><span><i>Failure:</i> {maneuver.failure}</span></li>}
                </ul>
                {maneuver.effect && (typeof maneuver.effect === 'string' ? <p className="ability__line"><i>Effect:</i> {maneuver.effect}</p> : <p className="ability__line"><i>Effect:</i> {transformEffect(maneuver.effect)}</p>)}
              </div>
            ))}
          </ul>
        </div>
      )}
      {reactions && reactions.length > 0 && (
        <div className="abilities">
          <h4 data-type="reaction">Reactions</h4>
          <ul>
            {reactions.map((reaction, index) => (
              <div key={index}>
                <p><b>{reaction.name} ({reaction.keywords})</b></p>
                {reaction.trigger && <p><i>Trigger:</i> {reaction.trigger}</p>}
                {reaction.target && <p><i>Target:</i> {reaction.target}</p>}
                {reaction.duration && <p><i>Duration:</i> {reaction.duration}</p>}
                {reaction.defense && <p><i>Attack vs {reaction.defense}:</i> {reaction.damage}</p>}
                <ul className='monster-degrees-of-success'>
                  {reaction.critical && <li><span><i>Critical:</i> {reaction.critical}</span></li>}
                  {reaction.success && <li><span><i>Success:</i> {reaction.success}</span></li>}
                  {reaction.partial && <li><span><i>Partial:</i> {reaction.partial}</span></li>}
                  {reaction.failure && <li><span><i>Failure:</i> {reaction.failure}</span></li>}
                </ul>
                {reaction.effect && (typeof reaction.effect === 'string' ? <p className="ability__line"><i>Effect:</i> {reaction.effect}</p> : <p className="ability__line"><i>Effect:</i> {transformEffect(reaction.effect)}</p>)}
              </div>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  )
}

export default Monster;