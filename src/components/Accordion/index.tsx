import "./index.scss";
import React, { useState } from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";

interface AccordionProps {
  title: string;
  content: string | JSX.Element;
  style?: React.CSSProperties;
  stacked?: boolean;
  type?: string;
  actType?: string;
}

const Accordion: React.FC<AccordionProps> = ({ actType, title, content, style, stacked, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

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
    <div className="accordion" style={style} data-is-stacked={stacked} data-type={type} data-act-type={actType}>
      <div className="accordion__header" onClick={toggleAccordion} data-is-expanded={isOpen}>
        <h4>{title}</h4>
        <h4>{isOpen ? "-" : "+"}</h4>
      </div>
      {isOpen && (
        <div className="accordion__content">
          {typeof content === "string" ? <p>{transformEffect(content)}</p> : content}
        </div>
      )}
    </div>
  );
}

export default Accordion;