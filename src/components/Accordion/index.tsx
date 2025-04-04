import "./index.scss";
import React, { useState, useRef, useEffect, forwardRef, JSX } from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";
// @ts-ignore
import { BREAKPOINTS } from "../../utils/getBreakpoint";

interface AccordionProps {
  title: string;
  content: string | JSX.Element;
  style?: React.CSSProperties;
  stacked?: boolean;
  type?: string;
  actType?: string;
  open?: boolean;
  id?: string;
  monster?: boolean;
  hazard?: boolean;
  tier?: string;
  threat?: string;
  role?: string;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      actType,
      open,
      title,
      content,
      style,
      stacked,
      type,
      id,
      monster,
      tier,
      threat,
      role,
      hazard,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      open && setIsOpen(open);
    }, []);

    useEffect(() => {
      if (isOpen && contentRef.current) {
        const curRef = contentRef.current;
        setMaxHeight(`${curRef.scrollHeight}px`);
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
    };

    const transformEffect = (effect: string) => {
      const fortuneRegex = /(\+?\d*)\s*(fortune)/gi;
      const misfortuneRegex = /(\+?\d*)\s*(misfortune)/gi;

      return effect.split(" ").map((word, index, array) => {
        if (misfortuneRegex.test(word)) {
          return (
            <span key={index}>
              <img
                className="icon"
                src={misfortune}
                alt="misfortune icon"
              />{" "}
            </span>
          );
        } else if (fortuneRegex.test(word)) {
          return (
            <span key={index}>
              <img className="icon" src={fortune} alt="fortune icon" />{" "}
            </span>
          );
        } else if (
          array[index + 1] === "fortune" ||
          array[index + 1] === "misfortune"
        ) {
          return (
            <span key={index}>
              <b>{word}</b>{" "}
            </span>
          );
        } else {
          return <span key={index}>{word} </span>;
        }
      });
    };

    const getTier = () => {
      if (tier && window.innerWidth < BREAKPOINTS.MOBILE) {
        return `T${tier}`;
      } else {
        return tier && `Tier ${tier}`;
      }
    };

    return (
      <div
        className="accordion"
        style={style}
        data-is-stacked={stacked}
        data-type={type}
        data-act-type={actType}
        ref={ref}
        id={id}
      >
        <div
          className="accordion__header"
          onClick={toggleAccordion}
          data-is-expanded={isOpen}
          ref={headerRef}
        >
          <h4>{transformTitle(title)}</h4>
          <h4>
            {monster && `${getTier()} ${threat} ${role} ${isOpen ? "-" : "+"}`}
            {hazard && `${getTier()} ${threat} ${isOpen ? "-" : "+"}`}
            {!monster && !hazard && (isOpen ? "-" : "+")}
          </h4>
        </div>
        <div
          className="accordion__content"
          data-is-expanded={isOpen}
          style={{ maxHeight: maxHeight }}
          ref={contentRef}
        >
          <div className="accordion__content__container">
            {typeof content === "string" ? (
              <p>{transformEffect(content)}</p>
            ) : (
              content
            )}
          </div>
        </div>
      </div>
    );
  },
);

export default Accordion;
