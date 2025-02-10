import "./index.scss";
import React from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";

interface AbilityCardProps {
  name: string;
  actType: string;
  descriptor: string;
  frequency?: string;
  keywords?: string;
  duration?: string;
  trigger?: string;
  target?: string;
  damage?: string;
  defense?: string;
  critical?: string;
  success?: string;
  partial?: string;
  failure?: string;
  effect?: string;
}

const AbilityCard: React.FC<AbilityCardProps> = ({ name, actType, descriptor, frequency, keywords, duration, trigger, target, damage, defense, critical, success, partial, failure, effect }) => {
  const topLine = `${frequency} ${keywords ? `| ${keywords}` : ''}`;
  const areDegrees = critical || success || partial || failure;
  
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
    <div className="ability">
      <div className="ability__title" data-type={actType}>
        <span className="ability__title__name">{name}</span>
        <span>{actType}</span>
      </div>
      <p className="ability__descriptor">{descriptor}</p>
      <p className="ability__top"><b>{topLine}</b></p>
      {trigger && <p className="ability__line"><b>Trigger:</b> {trigger}</p>}
      {target && <p className="ability__line"><b>Target:</b> {target}</p>}
      {duration && <p className="ability__line"><b>Duration:</b> {duration}</p>}
      {defense && <p className="ability__line"><b>Attack vs <span data-type={defense}>{defense}</span>{damage ? <span>:</span> : ''}</b> {damage}</p>}
      {areDegrees && <ul className='ability__degrees-of-success'>
        {critical && <li><span><b>Critical:</b> {critical}</span></li>}
        {success && <li><span><b>Success:</b> {success}</span></li>}
        {partial && <li><span><b>Partial:</b> {partial}</span></li>}
        {failure && <li><span><b>Failure:</b> {failure}</span></li>}
      </ul>}
      {effect && <p className="ability__line"><b>Effect:</b> {transformEffect(effect)}</p>}
    </div>
  );
}

export default AbilityCard;