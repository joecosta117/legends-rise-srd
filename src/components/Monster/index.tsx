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
  summons?: boolean;
  hp: string;
  evn: string;
  mgt?: string;
  res: string;
  pb: string;
  vision?: string;
  type?: string;
  speeds?: string | JSX.Element;
  resistances?: string;
  weaknesses?: string;
  role?: string;
  tier?: string;
  threat?: string;
  traits?: Traits[];
  actions: Abilities[];
  maneuvers?: Abilities[];
  reactions?: Abilities[];
  bossActions?: Abilities[];
  accordion?: boolean;
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

const Monster: React.FC<MonsterProps> = ({
  name,
  weaknesses,
  accordion,
  vision,
  summons,
  hp,
  evn,
  //@ts-ignore
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
  role,
  threat,
  tier,
  bossActions,
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

  const getTier = () => {
    if (tier && window.innerWidth < BREAKPOINTS.MOBILE) {
      return `T${tier}`;
    } else {
      return tier && `Tier ${tier}`;
    }
  };

  return (
    <div className="monster" data-accordion={accordion}>
      <h3>
        <span>{name}</span>
        <span>
          {summons
            ? ""
            : `${getTier()} ${threat === "Standard" ? "" : threat} ${role}`}
        </span>
      </h3>
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
              <b className="mgt">Guard</b> {evn} <b>|</b>{" "}
              {/* <b className="mgt">MGT</b> {mgt} <b>|</b>{" "} */}
              <b className="res">Spirit</b> {res} <b>|</b> <b>PB</b> +{pb}
            </p>
          </div>
        ) : (
          <div className="basics">
            <p>
              <b>HP</b> {hp} ({shaken}) <b>|</b> <b className="mgt">Guard</b>{" "}
              {evn} <b>|</b> <b className="res">Spirit</b> {res} <b>|</b>{" "}
              <b>PB</b> +{pb}
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
        {(vision || speeds) && (
          <p>
            {speeds && (
              <span>
                <b>Speeds</b> {speeds}
                {vision && ";"}
              </span>
            )}{" "}
            {vision && (
              <span>
                <b>Vision</b> {vision}
              </span>
            )}
          </p>
        )}
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
        {maneuvers && maneuvers.length > 0 && (
          <div className="abilities">
            <h4 data-type="maneuver">Maneuvers</h4>
            <ul>
              {maneuvers.map((maneuver, index) => (
                <div key={index} className="ability">
                  <p>
                    <b>
                      {maneuver.name}{" "}
                      {maneuver.keywords && (
                        <Link
                          className="internal-link"
                          to="/abilities-and-keywords#keywords"
                        >
                          ({maneuver.keywords})
                        </Link>
                      )}
                    </b>
                  </p>
                  {maneuver.requirement && (
                    <p>
                      <i>Requirement:</i> {maneuver.requirement}
                    </p>
                  )}
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
                      <i>Attack vs {maneuver.defense}</i>
                      {maneuver.damage && `: ${maneuver.damage}`}
                    </p>
                  )}
                  <div className="monster-degrees-of-success">
                    {maneuver.critical && (
                      <p>
                        <span className="degree-effect">
                          <i>• Critical:</i>{" "}
                          {typeof maneuver.critical === "string"
                            ? transformEffect(maneuver.critical)
                            : maneuver.critical}
                        </span>
                      </p>
                    )}
                    {maneuver.success && (
                      <p>
                        <span className="degree-effect">
                          <i>• Success:</i>{" "}
                          {typeof maneuver.success === "string"
                            ? transformEffect(maneuver.success)
                            : maneuver.success}
                        </span>
                      </p>
                    )}
                    {maneuver.partial && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial:</i>{" "}
                          {typeof maneuver.partial === "string"
                            ? transformEffect(maneuver.partial)
                            : maneuver.partial}
                        </span>
                      </p>
                    )}
                    {maneuver.partialOrLower && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial or Lower:</i> {maneuver.partialOrLower}
                        </span>
                      </p>
                    )}
                    {maneuver.failure && (
                      <p>
                        <span className="degree-effect">
                          <i>• Failure:</i>{" "}
                          {typeof maneuver.failure === "string"
                            ? transformEffect(maneuver.failure)
                            : maneuver.failure}
                        </span>
                      </p>
                    )}
                  </div>
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
        {bossActions && bossActions.length > 0 && (
          <div className="abilities">
            <h4 data-type="bossAction">Boss Actions</h4>
            <p>
              Boss actions are unique abilities the boss uses in order at the
              start of round 1, 3, and 5 in combat.
            </p>
            <ul>
              {bossActions.map((bossAction, index) => (
                <div key={index} className="ability">
                  <p>
                    <b>
                      Round {bossAction.round}: {bossAction.name}{" "}
                      {bossAction.keywords && (
                        <Link
                          className="internal-link"
                          to="/abilities-and-keywords#keywords"
                        >
                          ({bossAction.keywords})
                        </Link>
                      )}
                    </b>
                  </p>
                  {bossAction.target && (
                    <p>
                      <i>Target:</i> {bossAction.target}
                    </p>
                  )}
                  {bossAction.duration && (
                    <p>
                      <i>Duration:</i> {bossAction.duration}
                    </p>
                  )}
                  {bossAction.defense && (
                    <p>
                      <i>Attack vs {bossAction.defense}</i>
                      {bossAction.damage && `: ${bossAction.damage}`}
                    </p>
                  )}
                  <div className="monster-degrees-of-success">
                    {bossAction.critical && (
                      <p>
                        <span className="degree-effect">
                          <i>• Critical:</i>{" "}
                          {typeof bossAction.critical === "string"
                            ? transformEffect(bossAction.critical)
                            : bossAction.critical}
                        </span>
                      </p>
                    )}
                    {bossAction.success && (
                      <p>
                        <span className="degree-effect">
                          <i>• Success:</i>{" "}
                          {typeof bossAction.success === "string"
                            ? transformEffect(bossAction.success)
                            : bossAction.success}
                        </span>
                      </p>
                    )}
                    {bossAction.partial && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial:</i>{" "}
                          {typeof bossAction.partial === "string"
                            ? transformEffect(bossAction.partial)
                            : bossAction.partial}
                        </span>
                      </p>
                    )}
                    {bossAction.partialOrLower && (
                      <p>
                        <span className="degree-effect">
                          <i>• Partial or Lower:</i> {bossAction.partialOrLower}
                        </span>
                      </p>
                    )}
                    {bossAction.failure && (
                      <p>
                        <span className="degree-effect">
                          <i>• Failure:</i>{" "}
                          {typeof bossAction.failure === "string"
                            ? transformEffect(bossAction.failure)
                            : bossAction.failure}
                        </span>
                      </p>
                    )}
                  </div>
                  {bossAction.effect && (
                    <p className="ability__line">
                      <i>Effect:</i>{" "}
                      {typeof bossAction.effect === "string"
                        ? transformEffect(bossAction.effect)
                        : bossAction.effect}
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
