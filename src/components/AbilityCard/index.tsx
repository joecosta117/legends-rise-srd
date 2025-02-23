import "./index.scss";
import React from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";

interface AbilityCardProps {
  name?: string;
  actType?: string;
  accordion?: boolean;
  descriptor: string;
  frequency?: string;
  keywords?: string;
  duration?: string;
  trigger?: string;
  target?: string;
  damage?: string;
  defense?: string;
  critical?: string | JSX.element;
  success?: string | JSX.element;
  partial?: string | JSX.element;
  failure?: string | JSX.element;
  cast?: string;
  effect?: string | JSX.element;
  requirement?: string;
}

const AbilityCard: React.FC<AbilityCardProps> = ({ name, cast, accordion, actType, descriptor, frequency, keywords, duration, trigger, target, damage, defense, critical, success, partial, failure, effect, requirement }) => {
  const topLine = `${frequency} ${keywords ? `| ${keywords}` : ''}`;
  
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
    <div className="ability" data-type={actType} data-is-accordion={accordion}>
      {!accordion && <div className="ability__title">
        <span className="ability__title__name">{name}</span>
        <span>{actType}</span>
      </div>}
      <div className="ability__details">
        <p className="ability__descriptor">{descriptor}</p>
        <p className="ability__top"><b>{topLine}</b></p>
        {cast && <p className="ability__line"><b>Cast:</b> {cast}</p>}
        {requirement && <p className="ability__line"><b>Requirement:</b> {transformEffect(requirement)}</p>}
        {trigger && <p className="ability__line"><b>Trigger:</b> {trigger}</p>}
        {target && <p className="ability__line"><b>Target:</b> {target}</p>}
        {duration && <p className="ability__line"><b>Duration:</b> {duration}</p>}
        {defense && <p className="ability__line"><b>Attack vs <span data-type={defense}>{defense}</span>{damage ? <span>:</span> : ''}</b> {damage}</p>}
        {!cast && <div className='ability__degrees-of-success'>
          {critical && <p><b>• Critical:</b> {transformEffect(critical)}</p>}
          {success && <p><b>• Success:</b> {transformEffect(success)}</p>}
          {partial && <p><b>• Partial:</b> {transformEffect(partial)}</p>}
          {failure && <p><b>• Failure:</b> {transformEffect(failure)}</p>}
        </div>}
        {effect && (typeof effect === 'string' ? 
        <p className="ability__line"><b>Effect:</b> {transformEffect(effect)}</p> 
        : <p className="ability__line"><b>Effect:</b> {effect}</p>)}
        {cast && (
          <div>
            <p><b>Ritual Skill Roll</b></p>
            <ul className='ability__degrees-of-success'>
              {critical && <p><b>• Critical:</b> {transformEffect(critical)}</p>}
              {success && <p><b>• Success:</b> {transformEffect(success)}</p>}
              {partial && <p><b>• Partial:</b> {transformEffect(partial)}</p>}
              {failure && <p><b>• Failure:</b> {transformEffect(failure)}</p>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AbilityCard;