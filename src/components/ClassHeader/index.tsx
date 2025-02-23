import "./index.scss";
import { Link } from 'react-router-dom';

const ClassHeader = () => {
  return (
    <div className="class-tabs">
      <div className="class-tabs__tab"><Link to="/classes/arcanist">Arcanist</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/bard">Bard</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/cleric">Cleric</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/commander">Commander</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/druid">Druid</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/magesmith">Magesmith</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/occultist">Occultist</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/paladin">Paladin</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/ranger">Ranger</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/rogue">Rogue</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/summoner">Summoner</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/swordmage">Swordmage</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/warrior">Warrior</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/classes/dual-class">Dual Class</Link></div>
    </div>
  )
}

export default ClassHeader;