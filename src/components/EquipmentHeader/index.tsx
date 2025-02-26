import "./index.scss";
import { Link } from 'react-router-dom';

const EquipmentHeader = () => {
  return (
    <div className="class-tabs">
      <div className="class-tabs__tab"><Link to="/armor">Armor</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/consumables">Consumables</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/mounts">Mounts</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/other-goods">Other Goods</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/relics">Relics</Link></div>
      <div className="divider">|</div>
      <div className="class-tabs__tab"><Link to="/weapons">Weapons</Link></div>
    </div>
  )
}

export default EquipmentHeader;