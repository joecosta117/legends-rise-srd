import "./index.scss";
import React, { useState, useRef, useEffect } from "react";
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
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  const transformTitle = (title: string) => {
    const match = title.match(/(.*?)(\s*\(.*\))/);
    if (match) {
      return (
        <>
          <span>{match[1]}</span>
          <span className="smaller">{match[2]}</span>
        </>
      );
    }
    return <span>{title}</span>;
  }

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
        <h4>{transformTitle(title)}</h4>
        <h4>{isOpen ? "-" : "+"}</h4>
      </div>
      <div className="accordion__content" 
        data-is-expanded={isOpen}  
        ref={contentRef}
        style={{ maxHeight: maxHeight }}
      >
        <div className="accordion__content__container">
          {typeof content === "string" ? <p>{transformEffect(content)}</p> : content}
        </div>
      </div>
    </div>
  );
}

export default Accordion;