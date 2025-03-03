import "./index.scss";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import Dropdown from "../../components/Dropdown";
import { ritualSpells } from "./ritual-spells";

function RitualSpells() {
  const [isT1, setT1] = useState(true);
  const [isT2, setT2] = useState(false);
  const [isT3, setT3] = useState(false);

  function handleT1() {
    setT1(true);
    setT2(false);
    setT3(false);
  }
  function handleT2() {
    setT1(false);
    setT2(true);
    setT3(false);
  }
  function handleT3() {
    setT1(false);
    setT2(false);
    setT3(true);
  }

  return (
    <div className="spells">
      <div className="spells-content">
    
        <h1>Ritual Spells</h1>
        <p>Scrying on a distant foe or speaking with animals are examples of ritual spells. These spells tend to take a long time to cast and might cost gold in order to produce powerful and lasting magical effects. Like battle spells, ritual spells are ranked by tier.</p>
        <p>TODO: see full rules on ritual spells</p>

        <div className="tab-items">
          <div className="tab-items__tab" onClick={handleT1} data-selected={isT1}><p>Tier 1</p></div>
          <div className="tab-items__divider">|</div>
          <div className="tab-items__tab" onClick={handleT2} data-selected={isT2}><p>Tier 2</p></div>
          <div className="tab-items__divider">|</div>
          <div className="tab-items__tab" onClick={handleT3} data-selected={isT3}><p>Tier 3</p></div>
        </div>

        {isT1 && (
          <div>
            <h2>Tier 1 Ritual Spells</h2>
            <p>Below are all ritual spells of this spell tier.</p>
            {ritualSpells[0].map(({ title, spell, actType }, index) => (
                <Accordion key={index} stacked title={title} content={spell} type="spell" actType={actType} />
              ))}
          </div>
        )}
        {isT2 && (
          <div>
            <h2>Tier 2 Ritual Spells</h2>
            <p>Below are all ritual spells of this spell tier.</p>
            {ritualSpells[1].map(({ title, spell, actType }, index) => (
                <Accordion key={index} stacked title={title} content={spell} type="spell" actType={actType} />
              ))}
          </div>
        )}
        {isT3 && (
          <div>
            <h2>Tier 3 Ritual Spells</h2>
            <p>Below are all ritual spells of this spell tier.</p>
            {ritualSpells[2].map(({ title, spell, actType }, index) => (
                <Accordion key={index} stacked title={title} content={spell} type="spell" actType={actType} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default RitualSpells;