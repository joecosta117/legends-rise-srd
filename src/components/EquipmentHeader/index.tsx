import "./index.scss";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const EquipmentHeader = () => {
  useEffect(() => {
    const path = window.location.pathname.split("/").pop();
    const capPath = path && path.charAt(0).toUpperCase() + path.slice(1);
    const tabs = document.querySelectorAll('.class-tabs__tab') as  NodeListOf<HTMLElement>;

    tabs.forEach(tab => {
      if (tab.children[0].innerHTML === capPath) {
        tab.dataset.selected = 'true';
      } else if (tab.children[0].innerHTML === 'Other Goods' && capPath === 'Other-goods') {
        tab.dataset.selected = 'true';
      } else {
        tab.dataset.selected = 'false';
      }
    })
  }, []);

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