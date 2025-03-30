import "./index.scss";
import React, { JSX } from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";
import basicAtk from "../../assets/monster-strike.png";
import { Link } from "react-router-dom";
// @ts-ignore
import { BREAKPOINTS } from "../../utils/getBreakpoint";

interface MonsterProps {
  name: string;
  countdown: string;
  tier?: string;
  threat?: string;
  traits?: Traits[];
  actions: Abilities[];
  reactions?: Abilities[];
  accordion?: boolean;
  consequence?: string;
}

interface Abilities {
  basic?: boolean;
  requirement?: string;
  name: string;
  keywords?: string;
  defense?: string;
  target?: string | JSX.Element;
  duration?: string;
  damage?: string;
  critical?: string | JSX.Element;
  success?: string | JSX.Element;
  partial?: string | JSX.Element;
  failure?: string | JSX.Element;
  effect?: string | JSX.Element;
  frequency?: string;
  trigger?: string | JSX.Element;
  partialOrLower?: string;
  round?: string;
}

interface Traits {
  name: string;
  description: string | JSX.Element;
}

const Hazard: React.FC<MonsterProps> = ({
  name,
  accordion,
  countdown,
  traits,
  actions,
  reactions,
  threat,
  tier,
  consequence,
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

  const getTier = () => {
    if (tier && window.innerWidth < BREAKPOINTS.MOBILE) {
      return `T${tier}`;
    } else {
      return tier && `Tier ${tier}`;
    }
  };

  const getTN = () => {
    if (tier) {
      switch (tier) {
        case "1":
          return "12";
        case "2":
          return "15";
        case "3":
          return "18";
      }
    }
  };

  const getPB = () => {
    if (tier) {
      return +tier * 2;
    }
  };

  return (
    <div className="monster" data-accordion={accordion}>
      <h3>
        <span>{name}</span>
        <span>
          {`${getTier()} ${threat === "Standard" ? "" : threat} Hazard`}
        </span>
      </h3>
      <div className="monster-content">
        <div className="basics">
          <p>
            <b>Countdown Die</b> {countdown} <b>|</b> <b>TN</b> {getTN()}{" "}
            <b>|</b> <b>PB</b> +{getPB()}
          </p>
          <p>
            {consequence && (
              <span>
                <b>Consequence: </b> {consequence}
              </span>
            )}
          </p>
        </div>
        {traits && traits.length > 0 && (
          <div className="traits-section">
            <h4 data-type="trait">Traits</h4>
            <div className="traits-section__container">
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
                <div key={index} className="ability">
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
                      {action.name}{" "}
                      {action.keywords && (
                        <Link
                          className="internal-link"
                          to="/abilities-and-keywords#keywords"
                        >
                          ({action.keywords})
                        </Link>
                      )}
                    </b>
                  </p>
                  {action.requirement && (
                    <p>
                      <i>Requirement:</i> {action.requirement}
                    </p>
                  )}
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
                      <i>Attack vs {action.defense}</i>
                      {action.damage && `: ${action.damage}`}
                    </p>
                  )}
                  <div className="monster-degrees-of-success">
                    {action.critical && (
                      <p>
                        <span className="degree-effect">
                          <i>• Critical:</i>{" "}
                          {typeof action.critical === "string"
                            ? transformEffect(action.critical)
                            : action.critical}
                        </span>
                      </p>
                    )}
                    {action.success && (
                      <p>
                        <span className="degree-effect">
                          <i>• Success:</i>{" "}
                          {typeof action.success === "string"
                            ? transformEffect(action.success)
                            : action.success}
                        </span>
                      </p>
                    )}
                    {action.partial && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial:</i>{" "}
                          {typeof action.partial === "string"
                            ? transformEffect(action.partial)
                            : action.partial}
                        </span>
                      </p>
                    )}
                    {action.partialOrLower && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial or Lower:</i> {action.partialOrLower}
                        </span>
                      </p>
                    )}
                    {action.failure && (
                      <p>
                        <span className="degree-effect">
                          <i>• Failure:</i>{" "}
                          {typeof action.failure === "string"
                            ? transformEffect(action.failure)
                            : action.failure}
                        </span>
                      </p>
                    )}
                  </div>
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
        {reactions && reactions.length > 0 && (
          <div className="abilities">
            <h4 data-type="reaction">Reactions</h4>
            <ul>
              {reactions.map((reaction, index) => (
                <div key={index} className="ability">
                  <p>
                    <b>
                      {reaction.name}{" "}
                      {reaction.keywords && (
                        <Link
                          className="internal-link"
                          to="/abilities-and-keywords#keywords"
                        >
                          ({reaction.keywords})
                        </Link>
                      )}
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
                  {reaction.requirement && (
                    <p>
                      <i>Requirement:</i> {reaction.requirement}
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
                      <i>Attack vs {reaction.defense}</i>
                      {reaction.damage && `: ${reaction.damage}`}
                    </p>
                  )}
                  <div className="monster-degrees-of-success">
                    {reaction.critical && (
                      <p>
                        <span className="degree-effect">
                          <i>• Critical:</i>{" "}
                          {typeof reaction.critical === "string"
                            ? transformEffect(reaction.critical)
                            : reaction.critical}
                        </span>
                      </p>
                    )}
                    {reaction.success && (
                      <p>
                        <span className="degree-effect">
                          <i>• Success:</i>{" "}
                          {typeof reaction.success === "string"
                            ? transformEffect(reaction.success)
                            : reaction.success}
                        </span>
                      </p>
                    )}
                    {reaction.partial && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial:</i>{" "}
                          {typeof reaction.partial === "string"
                            ? transformEffect(reaction.partial)
                            : reaction.partial}
                        </span>
                      </p>
                    )}
                    {reaction.partialOrLower && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial or Lower:</i> {reaction.partialOrLower}
                        </span>
                      </p>
                    )}
                    {reaction.failure && (
                      <p>
                        <span className="degree-effect">
                          <i>• Failure:</i>{" "}
                          {typeof reaction.failure === "string"
                            ? transformEffect(reaction.failure)
                            : reaction.failure}
                        </span>
                      </p>
                    )}
                  </div>
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

export default Hazard;
