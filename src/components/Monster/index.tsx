import "./index.scss";
import React from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";
import basicAtk from "../../assets/monster-strike.png";

interface MonsterProps {
  name: string;
  summons?: boolean;
  hp: string;
  evn: string;
  mgt: string;
  res: string;
  pb: string;
  vision?: string;
  type: string;
  speeds?: string;
  resistances?: string;
  weaknesses?: string;
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
  critical?: string | JSX.element;
  success?: string | JSX.element;
  partial?: string | JSX.element;
  failure?: string | JSX.element;
  effect?: string | JSX.element;
  frequency?: string;
  trigger?: string | JSX.element;
  partialOrLower?: string;
}

interface Traits {
  name: string;
  description: string | JSX.element;
}

const Monster: React.FC<MonsterProps> = ({
  name,
  weaknesses,
  accordion,
  vision,
  summons,
  hp,
  evn,
  mgt,
  res,
  pb,
  type,
  speeds,
  resistances,
  traits,
  actions,
  maneuvers,
  reactions,
}) => {
  const transformEffect = (effect: string) => {
    const fortuneRegex = /(\+?\d*)\s*(fortune)/gi;
    const misfortuneRegex = /(\+?\d*)\s*(misfortune)/gi;

    return effect.split(" ").map((word, index, array) => {
      if (misfortuneRegex.test(word)) {
        return (
          <span key={index}>
            <img className="icon" src={misfortune} alt="misfortune icon" />{" "}
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

  const shaken = Math.floor(+hp / 2);

  return (
    <div className="monster" data-accordion={accordion}>
      <h3>{name}</h3>
      <div className="monster-content">
        <p>
          <i>{type}</i>
        </p>
        {summons ? (
          <div className="basics">
            <p>
              <b>HP</b> {hp}
            </p>
            <p>
              <b>EVN</b> {evn} <b>|</b> <b>MGT</b> {mgt} <b>|</b> <b>RES</b>{" "}
              {res} <b>|</b> <b>PB</b> +{pb}
            </p>
          </div>
        ) : (
          <div className="basics">
            <p>
              <b>HP</b> {hp} ({shaken}) <b>|</b> <b>EVN</b> {evn} <b>|</b>{" "}
              <b>MGT</b> {mgt} <b>|</b> <b>RES</b> {res} <b>|</b> <b>PB</b> +
              {pb}
            </p>
          </div>
        )}
        {resistances && weaknesses && (
          <p>
            <b>Resistances</b> {resistances}; <b>Weaknesses</b> {weaknesses}
          </p>
        )}
        {resistances && !weaknesses && (
          <p>
            <b>Resistances</b> {resistances}
          </p>
        )}
        {!resistances && weaknesses && (
          <p>
            <b>Weaknesses</b> {weaknesses}
          </p>
        )}
        {speeds && (
          <p>
            <b>Speeds</b> {speeds}
          </p>
        )}
        {vision && (
          <p>
            <b>Vision</b> {vision}
          </p>
        )}
        {traits && traits.length > 0 && (
          <div className="traits-section">
            <h4>Traits</h4>
            <div>
              {traits.map((trait, index) => (
                <p key={index}>
                  <b>{trait.name}:</b>{" "}
                  {typeof trait.description === "string"
                    ? transformEffect(trait.description)
                    : trait.description}
                </p>
              ))}
            </div>
          </div>
        )}
        {actions && actions.length > 0 && (
          <div className="abilities">
            <h4 data-type="action">Actions</h4>
            <ul>
              {actions.map((action, index) => (
                <div key={index}>
                  <p>
                    {action.basic && (
                      <img
                        className="attack-icon"
                        src={basicAtk}
                        alt="attack icon"
                      />
                    )}
                    <b>
                      {" "}
                      {action.name} ({action.keywords})
                    </b>
                  </p>
                  {action.frequency && (
                    <p>
                      <i>Frequency:</i> {action.frequency}
                    </p>
                  )}
                  {action.target && (
                    <p>
                      <i>Target:</i> {action.target}
                    </p>
                  )}
                  {action.duration && (
                    <p>
                      <i>Duration:</i> {action.duration}
                    </p>
                  )}
                  {action.defense && (
                    <p>
                      <i>Attack vs {action.defense}:</i> {action.damage}
                    </p>
                  )}
                  <ul className="monster-degrees-of-success">
                    {action.critical && (
                      <li>
                        <span>
                          <i>Critical:</i>{" "}
                          {typeof action.critical === "string"
                            ? transformEffect(action.critical)
                            : action.critical}
                        </span>
                      </li>
                    )}
                    {action.success && (
                      <li>
                        <span>
                          <i>Success:</i>{" "}
                          {typeof action.success === "string"
                            ? transformEffect(action.success)
                            : action.success}
                        </span>
                      </li>
                    )}
                    {action.partial && (
                      <li>
                        <span>
                          <i>Partial:</i>{" "}
                          {typeof action.partial === "string"
                            ? transformEffect(action.partial)
                            : action.partial}
                        </span>
                      </li>
                    )}
                    {action.partialOrLower && (
                      <li>
                        <span>
                          <i>Partial or Lower:</i> {action.partialOrLower}
                        </span>
                      </li>
                    )}
                    {action.failure && (
                      <li>
                        <span>
                          <i>Failure:</i>{" "}
                          {typeof action.failure === "string"
                            ? transformEffect(action.failure)
                            : action.failure}
                        </span>
                      </li>
                    )}
                  </ul>
                  {action.effect && (
                    <p className="ability__line">
                      <i>Effect:</i>{" "}
                      {typeof action.effect === "string"
                        ? transformEffect(action.effect)
                        : action.effect}
                    </p>
                  )}
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
                  <p>
                    <b>
                      {maneuver.name} ({maneuver.keywords})
                    </b>
                  </p>
                  {maneuver.target && (
                    <p>
                      <i>Target:</i> {maneuver.target}
                    </p>
                  )}
                  {maneuver.duration && (
                    <p>
                      <i>Duration:</i> {maneuver.duration}
                    </p>
                  )}
                  {maneuver.defense && (
                    <p>
                      <i>Attack vs {maneuver.defense}:</i> {maneuver.damage}
                    </p>
                  )}
                  <ul className="monster-degrees-of-success">
                    {maneuver.critical && (
                      <li>
                        <span>
                          <i>Critical:</i>{" "}
                          {typeof maneuver.critical === "string"
                            ? transformEffect(maneuver.critical)
                            : maneuver.critical}
                        </span>
                      </li>
                    )}
                    {maneuver.success && (
                      <li>
                        <span>
                          <i>Success:</i>{" "}
                          {typeof maneuver.success === "string"
                            ? transformEffect(maneuver.success)
                            : maneuver.success}
                        </span>
                      </li>
                    )}
                    {maneuver.partial && (
                      <li>
                        <span>
                          <i>Partial:</i>{" "}
                          {typeof maneuver.partial === "string"
                            ? transformEffect(maneuver.partial)
                            : maneuver.partial}
                        </span>
                      </li>
                    )}
                    {maneuver.partialOrLower && (
                      <li>
                        <span>
                          <i>Partial or Lower:</i> {maneuver.partialOrLower}
                        </span>
                      </li>
                    )}
                    {maneuver.failure && (
                      <li>
                        <span>
                          <i>Failure:</i>{" "}
                          {typeof maneuver.failure === "string"
                            ? transformEffect(maneuver.failure)
                            : maneuver.failure}
                        </span>
                      </li>
                    )}
                  </ul>
                  {maneuver.effect && (
                    <p className="ability__line">
                      <i>Effect:</i>{" "}
                      {typeof maneuver.effect === "string"
                        ? transformEffect(maneuver.effect)
                        : maneuver.effect}
                    </p>
                  )}
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
                  <p>
                    <b>
                      {reaction.name} ({reaction.keywords})
                    </b>
                  </p>
                  {reaction.trigger && (
                    <p>
                      <i>Trigger:</i>{" "}
                      {typeof reaction.trigger === "string"
                        ? transformEffect(reaction.trigger)
                        : reaction.trigger}
                    </p>
                  )}
                  {reaction.target && (
                    <p>
                      <i>Target:</i> {reaction.target}
                    </p>
                  )}
                  {reaction.duration && (
                    <p>
                      <i>Duration:</i> {reaction.duration}
                    </p>
                  )}
                  {reaction.defense && (
                    <p>
                      <i>Attack vs {reaction.defense}:</i> {reaction.damage}
                    </p>
                  )}
                  <ul className="monster-degrees-of-success">
                    {reaction.critical && (
                      <li>
                        <span>
                          <i>Critical:</i>{" "}
                          {typeof reaction.critical === "string"
                            ? transformEffect(reaction.critical)
                            : reaction.critical}
                        </span>
                      </li>
                    )}
                    {reaction.success && (
                      <li>
                        <span>
                          <i>Success:</i>{" "}
                          {typeof reaction.success === "string"
                            ? transformEffect(reaction.success)
                            : reaction.success}
                        </span>
                      </li>
                    )}
                    {reaction.partial && (
                      <li>
                        <span>
                          <i>Partial:</i>{" "}
                          {typeof reaction.partial === "string"
                            ? transformEffect(reaction.partial)
                            : reaction.partial}
                        </span>
                      </li>
                    )}
                    {reaction.partialOrLower && (
                      <li>
                        <span>
                          <i>Partial or Lower:</i> {reaction.partialOrLower}
                        </span>
                      </li>
                    )}
                    {reaction.failure && (
                      <li>
                        <span>
                          <i>Failure:</i>{" "}
                          {typeof reaction.failure === "string"
                            ? transformEffect(reaction.failure)
                            : reaction.failure}
                        </span>
                      </li>
                    )}
                  </ul>
                  {reaction.effect && (
                    <p className="ability__line">
                      <i>Effect:</i>{" "}
                      {typeof reaction.effect === "string"
                        ? transformEffect(reaction.effect)
                        : reaction.effect}
                    </p>
                  )}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Monster;
