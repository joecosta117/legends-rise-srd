import "./index.scss";
import React, { JSX } from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";
import { Link } from "react-router-dom";

interface AbilityCardProps {
  name?: string;
  actType?: string;
  accordion?: boolean;
  descriptor: string;
  frequency?: string;
  keywords?: string;
  duration?: string | JSX.Element;
  trigger?: string | JSX.Element;
  target?: string | JSX.Element;
  damage?: string;
  defense?: string;
  critical?: string | JSX.Element;
  success?: string | JSX.Element;
  partial?: string | JSX.Element;
  partialOrLower?: string;
  failure?: string | JSX.Element;
  cast?: string;
  effect?: string | JSX.Element;
  requirement?: string | JSX.Element;
  effectTiers?: boolean;
}

const AbilityCard: React.FC<AbilityCardProps> = ({
  name,
  effectTiers,
  partialOrLower,
  cast,
  accordion,
  actType,
  descriptor,
  frequency,
  keywords,
  duration,
  trigger,
  target,
  damage,
  defense,
  critical,
  success,
  partial,
  failure,
  effect,
  requirement,
}) => {
  const transformEffect = (effect: any) => {
    const fortuneRegex = /(\+?\d*)\s*(fortune)/gi;
    const misfortuneRegex = /(\+?\d*)\s*(misfortune)/gi;

    //@ts-ignore
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

  return (
    <div className="ability" data-type={actType} data-is-accordion={accordion}>
      {!accordion && (
        <div className="ability__title">
          <span className="ability__title__name">{name}</span>
          <span>{actType}</span>
        </div>
      )}
      <div className="ability__details">
        <p className="ability__descriptor">{descriptor}</p>
        <p className="ability__top">
          <b>
            {
              <Link
                className="internal-link"
                to="/abilities-and-keywords#frequency"
              >
                {frequency}
              </Link>
            }{" "}
            {keywords && (
              <span>
                |{" "}
                <Link
                  className="internal-link"
                  to="/abilities-and-keywords#keywords"
                >
                  {keywords}
                </Link>
              </span>
            )}
          </b>
        </p>
        {cast && (
          <p className="ability__line">
            <b>Cast:</b> {cast}
          </p>
        )}
        {requirement && (
          <p className="ability__line">
            <b>Requirement:</b>{" "}
            {typeof requirement === "string"
              ? transformEffect(requirement)
              : requirement}
          </p>
        )}
        {trigger && (
          <p className="ability__line">
            <b>Trigger:</b> {trigger}
          </p>
        )}
        {target && (
          <p className="ability__line">
            <b>Target:</b> {target}
          </p>
        )}
        {duration && (
          <p className="ability__line">
            <b>Duration:</b> {duration}
          </p>
        )}
        {defense && (
          <p className="ability__line">
            <b>Attack vs {defense}</b>
            {damage ? (
              <span>
                <b>:</b>{" "}
                {typeof damage === "string" ? transformEffect(damage) : damage}
              </span>
            ) : (
              <span></span>
            )}
          </p>
        )}
        {!cast && !effectTiers && (
          <div className="ability__degrees-of-success">
            {critical && (
              <p>
                <b>• Critical:</b>{" "}
                {typeof critical === "string"
                  ? transformEffect(critical)
                  : critical}
              </p>
            )}
            {success && (
              <p>
                <b>• Success:</b>{" "}
                {typeof success === "string"
                  ? transformEffect(success)
                  : success}
              </p>
            )}
            {partial && (
              <p>
                <b>• Failure:</b>{" "}
                {typeof partial === "string"
                  ? transformEffect(partial)
                  : partial}
              </p>
            )}
            {partialOrLower && (
              <p>
                <b>• Partial or Lower:</b> {transformEffect(partialOrLower)}
              </p>
            )}
            {failure && (
              <p>
                <b>• Failure:</b>{" "}
                {typeof failure === "string"
                  ? transformEffect(failure)
                  : failure}
              </p>
            )}
          </div>
        )}
        {effect &&
          (typeof effect === "string" ? (
            <div className="ability__line">
              <b>Effect:</b> {transformEffect(effect)}
            </div>
          ) : (
            <div className="ability__line">
              <b>Effect:</b> {effect}
            </div>
          ))}
        {!cast && effectTiers && (
          <div className="ability__degrees-of-success">
            {critical && (
              <p>
                <b>• Critical:</b>{" "}
                {typeof critical === "string"
                  ? transformEffect(critical)
                  : critical}
              </p>
            )}
            {success && (
              <p>
                <b>• Success:</b>{" "}
                {typeof success === "string"
                  ? transformEffect(success)
                  : success}
              </p>
            )}
            {partial && (
              <p>
                <b>• Failure:</b>{" "}
                {typeof partial === "string"
                  ? transformEffect(partial)
                  : partial}
              </p>
            )}
            {partialOrLower && (
              <p>
                <b>• Partial or Lower:</b> {transformEffect(partialOrLower)}
              </p>
            )}
            {failure && (
              <p>
                <b>• Failure:</b>{" "}
                {typeof failure === "string"
                  ? transformEffect(failure)
                  : failure}
              </p>
            )}
          </div>
        )}
        {cast && (
          <div>
            <p>
              <b>Ritual Skill Roll</b>
            </p>
            <ul className="ability__degrees-of-success">
              {critical && (
                <p>
                  <b>• Critical:</b>{" "}
                  {typeof critical === "string"
                    ? transformEffect(critical)
                    : critical}
                </p>
              )}
              {success && (
                <p>
                  <b>• Success:</b>{" "}
                  {typeof success === "string"
                    ? transformEffect(success)
                    : success}
                </p>
              )}
              {partial && (
                <p>
                  <b>• Failure:</b>{" "}
                  {typeof partial === "string"
                    ? transformEffect(partial)
                    : partial}
                </p>
              )}
              {failure && (
                <p>
                  <b>• Failure:</b>{" "}
                  {typeof failure === "string"
                    ? transformEffect(failure)
                    : failure}
                </p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbilityCard;
