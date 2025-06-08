import "./index.scss";
import Modifier from "../../components/Modifier";
import { Link } from "react-router-dom";
import scrollToHash from "../../utils/scrollToHash";

function Conditions() {
  scrollToHash();

  const conditionContent = [
    {
      title: "Confused",
      id: "confused",
      content: (
        <p>
          On your turn, you must use your action to{" "}
          <Link className="internal-link" to="/combat-abilities#charge">
            charge
          </Link>
          ,{" "}
          <Link className="internal-link" to="/combat-abilities#strike">
            strike
          </Link>
          , or use a tier 0 battle spell against the nearest creature.
        </p>
      ),
    },
    {
      title: "Dazed",
      id: "dazed",
      content: (
        <p>On your turn, you lose either a maneuver or action (your choice).</p>
      ),
    },
    {
      title: "Hindered",
      id: "hindered",
      content: (
        <p>
          You take <Modifier type="mf" count="1" /> to attack rolls and skill
          rolls.
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
                You take <Modifier type="mf" count="1" /> to{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack rolls
                </Link>
                , and attack rolls against you gain{" "}
                <Modifier type="f" count="1" />
              </span>
            </li>
            <li>
              <span>Your speed is halved</span>
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
                You take <Modifier type="mf" count="1" /> to{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack rolls
                </Link>
                , and attack rolls against you gain{" "}
                <Modifier type="f" count="1" />
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
            <li>
              <span>
                You can use a maneuver to attempt to escape by making an
                overcome roll, and ending this condition on a success.
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
              <span>This condition ends early if your taunter is defeated</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Vulnerable",
      id: "vulnerable",
      content: (
        <p>
          <Link className="internal-link" to="/rules/combat#attack-roll">
            Attack rolls
          </Link>{" "}
          against you gain <Modifier type="f" count="1" />
        </p>
      ),
    },
  ];

  return (
    <div className="conditions">
      <div className="conditions-content">
        <h1>Conditions</h1>
        <p>
          Conditions are typically harmful effects that magic or special
          abilities can inflict on creatures. The duration of a condition is
          determined by the effect that imposed the condition.
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
