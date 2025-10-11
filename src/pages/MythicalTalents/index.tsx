import "./index.scss";
import { Link } from "react-router-dom";

function MythicalTalents() {
  return (
    <div className="mythical">
      <div className="mythical-content">
        <h1 className="mythical__title">Mythical Talents</h1>
        <p>
          Starting at levels 11 and at each higher level, you gain a mythical
          talent. You can choose from any of the below talents.
        </p>
        <h3 className="header">Mythical Flight</h3>
        <p>You gain a fly speed equal to your land speed.</p>

        <h3 className="header">Mythical Fortitude</h3>
        <p>Your hit points increase by +12 and recoveries by +1.</p>

        <h3 className="header">Mythical Hero</h3>
        <p>
          You gain a class talent or theme talent. You can take this mythical
          talent multiple times.
        </p>

        <h3 className="header">Mythical Luck</h3>
        <p>
          You start off each game session with an additional hero point, and
          your maximum amount of hero points you can have at once increases by
          +1.
        </p>

        <h3 className="header">Mythical Magic</h3>
        <p>
          You learn a tier 1 battle spell from any magic tradition. You can use
          this spell at spell tier 1 without spending mana. You can take this
          mythical talent multiple times.
        </p>

        <h3 className="header">Mythical Proficiency</h3>
        <p>Your proficiency bonus increases by +1.</p>

        <h3 className="header">Mythical Relic User</h3>
        <p>
          Your{" "}
          <Link className="internal-link" to="/relics">
            align limit
          </Link>{" "}
          for relics increases by +1. You can take this mythical talent multiple
          times.
        </p>

        <h3 className="header">Mythical Resistance</h3>
        <p>
          You gain resistance to two damage types of your choice (except for
          physical). You can take this mythical talent multiple times.
        </p>

        <h3 className="header">Mythical Sight</h3>
        <p>
          You gain night vision and can see through magical darkness. You can
          also see any invisible creatures or objects.
        </p>

        <h3 className="header">Mythical Speed</h3>
        <p>Increase all of your speeds by +1.</p>
      </div>
    </div>
  );
}

export default MythicalTalents;
