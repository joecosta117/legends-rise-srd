import "./index.scss";
import Modifier from "../../components/Modifier";
import { Link } from "react-router-dom";
import scrollToHash from "../../utils/scrollToHash";

function Conditions() {
  scrollToHash();

  const conditionContent = [
    {
      title: "Blinded",
      id: "blinded",
      content: (
        <p>
          Everyone have{" "}
          <Link className="internal-link" to="/rules/combat#stealth">
            concealment
          </Link>{" "}
          to you and gains <Modifier type="f" count="1" /> on{" "}
          <Link className="internal-link" to="/rules/combat#attack-roll">
            attack rolls
          </Link>{" "}
          against you.
        </p>
      ),
    },
    {
      title: "Charmed",
      id: "charmed",
      content: (
        <div>
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>You treat the charmer and their allies as your allies</span>
            </li>
            <li>
              <span>
                If the charmer or their allies use a harmful ability against
                you, this condition ends
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Confused",
      id: "confused",
      content: (
        <div>
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>You don’t treat anyone as an ally</span>
            </li>
            <li>
              <span>
                On your turn, you must use a maneuver to{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                to the closest creature and then use an action to{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>{" "}
                or cast a tier 0 battle spell against the creature. If there are
                no nearby creatures, then you just{" "}
                <Link className="internal-link" to="/combat-abilities#defend">
                  defend
                </Link>
                .
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Exposed",
      id: "exposed",
      content: (
        <p>
          <Link className="internal-link" to="/rules/combat#attack-roll">
            Attack rolls
          </Link>{" "}
          gain <Modifier type="f" count="1" /> against you
        </p>
      ),
    },
    {
      title: "Hastened",
      id: "hastened",
      content: <p>You gain an extra maneuver on your turn</p>,
    },
    {
      title: "Hindered",
      id: "hindered",
      content: (
        <p>
          You take <Modifier type="mf" count="1" /> on{" "}
          <Link className="internal-link" to="/rules/combat#attack-roll">
            attack rolls
          </Link>
        </p>
      ),
    },
    {
      title: "Invisible",
      id: "invisible",
      content: (
        <p>
          You have{" "}
          <Link className="internal-link" to="/rules/combat#stealth">
            concealment
          </Link>{" "}
          to everyone and gain <Modifier type="f" count="1" /> on{" "}
          <Link className="internal-link" to="/rules/combat#attack-roll">
            attack rolls
          </Link>{" "}
          against targets that you have concealment to
        </p>
      ),
    },
    {
      title: "Prone",
      id: "prone",
      content: (
        <div>
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>
                You take <Modifier type="mf" count="1" /> on{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack rolls
                </Link>
              </span>
            </li>
            <li>
              <span>
                Attack rolls gain <Modifier type="f" count="1" /> against you
              </span>
            </li>
            <li>
              <span>Your speed is halved</span>
            </li>
            <li>
              <span>
                An ally within reach can use a maneuver to help you{" "}
                <Link className="internal-link" to="/combat-abilities#stand">
                  stand
                </Link>
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Seized",
      id: "seized",
      content: (
        <div>
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>
                You take <Modifier type="mf" count="1" /> on{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack rolls
                </Link>
              </span>
            </li>
            <li>
              <span>
                Attack rolls gain <Modifier type="f" count="1" /> against you
              </span>
            </li>
            <li>
              <span>
                You can't{" "}
                <Link
                  className="internal-link"
                  to="/combat-abilities#disengage"
                >
                  disengage
                </Link>{" "}
                or{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            </li>
            <li>
              <span>
                If a creature is holding you in place, they can drag you when
                they{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
                , but they can only move at half their speed
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Slowed",
      id: "slowed",
      content: (
        <div>
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>
                On your turn you can only use either a maneuver or an action
              </span>
            </li>
            <li>
              <span>
                If you’re{" "}
                <Link className="internal-link" to="/conditions#hastened">
                  hastened
                </Link>
                , you still gain the extra maneuver
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Taunted",
      id: "taunted",
      content: (
        <div>
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>
                You take <Modifier type="mf" count="1" /> on{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack rolls
                </Link>{" "}
                against creatures other than your taunter.
              </span>
            </li>
            <li>
              <span>
                You can only be taunted by one foe at a time, with newer taunts
                superseding older ones.
              </span>
            </li>
            <li>
              <span>
                This condition ends if your taunter dies or surrenders
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="conditions">
      <div className="conditions-content">
        <h1>Conditions</h1>
        <p>
          Conditions are typically harmful effects that magic or special
          abilities can inflict on creatures, but can sometimes be positive
          effects as well. The duration of a condition is determined by the
          effect that imposed the condition.
        </p>
        {conditionContent.map(({ title, content, id }) => (
          <div id={id}>
            <h2 style={{ marginTop: "0" }}>{title}</h2>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conditions;
