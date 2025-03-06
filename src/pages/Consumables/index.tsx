import "./index.scss";
import EquipmentHeader from "../../components/EquipmentHeader";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";

function Consumables() {
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
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Consumables</h1>
        <p>
          Potions, scrolls, talismans, and other small trinkets with limited,
          one-time magical effects are all consumables.
        </p>
        <div className="equipment-content__tabs">
          <div
            className="tab-items__tab"
            onClick={handleT1}
            data-selected={isT1}
          >
            <p>Tier 1</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleT2}
            data-selected={isT2}
          >
            <p>Tier 2</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleT3}
            data-selected={isT3}
          >
            <p>Tier 3</p>
          </div>
        </div>

        {isT1 && (
          <div>
            <h2>Tier 1 Consumables</h2>
            <Accordion
              stacked
              title="Holy Water"
              content="This vial of sacred water is deadly profane enemies. You can treat holy water as a ranged weapon with a range of 1 zone, and deals 2 holy damage."
            />
            <Accordion
              stacked
              title="Ointment of Energy"
              content="This vial of magical oil’s color depends on the type of energy. Each ointment is tied to a specific damage type. As a maneuver, you can coat a weapon with the ointment, which lasts for the scene. While coated, a weapon deals 1 additional damage. The additional damage’s type depends on each ointment. A weapon can only have one of these ointments on it at a time."
            />
            <Accordion
              stacked
              title="Potion of Climbing"
              content="When this brown potion is drunk, you gain a climb speed of 1 (scene ends)."
            />
            <Accordion
              stacked
              title="Potion of Healing"
              content="This vial of warm red liquid soothes aches and closes wounds beyond your normal limits. When you drink this potion, you regain 4 hit points. You can only gain the benefits of this potion once per long rest."
            />
            <Accordion
              stacked
              title="Potion of Mana"
              content="This vial of cool blue liquid restores magical essence beyond your normal limits. When you drink this potion, you regain 1 mana. You can only gain the benefits of this potion once per long rest."
            />
            <Accordion
              stacked
              title="Potion of Speed"
              content="This vial of yellow liquid quickens your stride. When you drink this potion, your speed doubles (scene ends)."
            />
            <Accordion
              stacked
              title="Potion of Water Breathing"
              content="This vial of watery-green liquid makes you amphibious. When you drink this potion, you can breathe underwater for 1 hour."
            />
            <Accordion
              stacked
              title="Tier 1 Spell Scroll"
              content={
                <div>
                  <p>
                    A scroll with careful arcane instructions for one specific
                    tier 1 battle or{" "}
                    <Link className="internal-link" to="/ritual-spells">
                      ritual spell
                    </Link>{" "}
                    . A creature that knows the spell’s{" "}
                    <Link className="internal-link" to="/battle-spells">
                      magic tradition
                    </Link>{" "}
                    can use this scroll to cast the item’s spell once and then
                    the scroll’s magic fades. If you don’t know the spell’s
                    tradition, you can still attempt to cast the spell, but you
                    must succeed on a tier 1{" "}
                    <Link className="internal-link" to="/rules/skills">
                      skill roll
                    </Link>
                    .
                  </p>
                  <p>
                    For a ritual spell scroll, a spellcaster can instead attempt
                    to permanently learn the ritual spell.
                  </p>
                  <p>
                    Once the magic is successfully used from a scroll, the
                    scroll can’t be used again.
                  </p>
                </div>
              }
            />
          </div>
        )}
        {isT2 && (
          <div>
            <h2>Tier 2 Consumables</h2>
            <Accordion
              stacked
              title="Greater Holy Water"
              content="This vial of sacred water is deadly profane enemies. You can treat holy water as a ranged weapon with a range of 1 zone, and deals 4 holy damage."
            />
            <Accordion
              stacked
              title="Greater Ointment of Energy"
              content="This vial of magical oil’s color depends on the type of energy. Each ointment is tied to a specific damage type. As a maneuver, you can coat a weapon with the ointment, which lasts for the scene. While coated, a weapon deals 2 additional damage. The additional damage’s type depends on each ointment. A weapon can only have one of these ointments on it at a time."
            />
            <Accordion
              stacked
              title="Greater Potion of Healing"
              content="This vial of warm red liquid soothes aches and closes wounds beyond your normal limits. When you drink this potion, you regain 8 hit points. You can only gain the benefits of this potion once per long rest."
            />
            <Accordion
              stacked
              title="Greater Potion of Mana"
              content="This vial of cool blue liquid restores magical essence beyond your normal limits. When you drink this potion, you regain 2 mana. You can only gain the benefits of this potion once per long rest."
            />
            <Accordion
              stacked
              title="Greater Potion of Speed"
              content="This vial of yellow liquid quickens your stride. When you drink this potion, you become hastened (scene ends)."
            />
            <Accordion
              stacked
              title="Potion of Flight"
              content="When this sky blue potion is drunk, you gain a fly speed of 1 (scene ends)."
            />
            <Accordion
              stacked
              title="Potion of Resistance"
              content="Each of these potions is attuned to a certain element: arcane, cold, fire, holy, lightning, mental, necrotic, toxic, or unholy. When this potion is drunk, you gain resistance to the potion’s attuned element equal to your tier (scene ends)."
            />
            <Accordion
              stacked
              title="Potion of Water"
              content="When this deep blue potion is drunk, you gain a swim speed of 1 and can breathe underwater (scene ends)."
            />
            <Accordion
              stacked
              title="Tier 2 Spell Scroll"
              content={
                <div>
                  <p>
                    A scroll with careful arcane instructions for one specific
                    tier 2 battle or{" "}
                    <Link className="internal-link" to="/ritual-spells">
                      ritual spell
                    </Link>{" "}
                    . A creature that knows the spell’s{" "}
                    <Link className="internal-link" to="/battle-spells">
                      magic tradition
                    </Link>{" "}
                    can use this scroll to cast the item’s spell once and then
                    the scroll’s magic fades. If you don’t know the spell’s
                    tradition, you can still attempt to cast the spell, but you
                    must succeed on a tier 2{" "}
                    <Link className="internal-link" to="/rules/skills">
                      skill roll
                    </Link>
                    .
                  </p>
                  <p>
                    For a ritual spell scroll, a spellcaster can instead attempt
                    to permanently learn the ritual spell.
                  </p>
                  <p>
                    Once the magic is successfully used from a scroll, the
                    scroll can’t be used again.
                  </p>
                </div>
              }
            />
          </div>
        )}
        {isT3 && (
          <div>
            <h2>Tier 3 Consumables</h2>
            <Accordion
              stacked
              title="Superior Holy Water"
              content="This vial of sacred water is deadly profane enemies. You can treat holy water as a ranged weapon with a range of 1 zone, and deals 6 holy damage."
            />
            <Accordion
              stacked
              title="Superior Ointment of Energy"
              content="This vial of magical oil’s color depends on the type of energy. Each ointment is tied to a specific damage type. As a maneuver, you can coat a weapon with the ointment, which lasts for the scene. While coated, a weapon deals 3 additional damage. The additional damage’s type depends on each ointment. A weapon can only have one of these ointments on it at a time."
            />
            <Accordion
              stacked
              title="Superior Potion of Healing"
              content="This vial of warm red liquid soothes aches and closes wounds beyond your normal limits. When you drink this potion, you regain 12 hit points. You can only gain the benefits of this potion once per long rest."
            />
            <Accordion
              stacked
              title="Superior Potion of Mana"
              content="This vial of cool blue liquid restores magical essence beyond your normal limits. When you drink this potion, you regain 3 mana. You can only gain the benefits of this potion once per long rest."
            />
            <Accordion
              stacked
              title="Tier 3 Spell Scroll"
              content={
                <div>
                  <p>
                    A scroll with careful arcane instructions for one specific
                    tier 3 battle or{" "}
                    <Link className="internal-link" to="/ritual-spells">
                      ritual spell
                    </Link>{" "}
                    . A creature that knows the spell’s{" "}
                    <Link className="internal-link" to="/battle-spells">
                      magic tradition
                    </Link>{" "}
                    can use this scroll to cast the item’s spell once and then
                    the scroll’s magic fades. If you don’t know the spell’s
                    tradition, you can still attempt to cast the spell, but you
                    must succeed on a tier 3{" "}
                    <Link className="internal-link" to="/rules/skills">
                      skill roll
                    </Link>
                    skill roll.
                  </p>
                  <p>
                    For a ritual spell scroll, a spellcaster can instead attempt
                    to permanently learn the ritual spell.
                  </p>
                  <p>
                    Once the magic is successfully used from a scroll, the
                    scroll can’t be used again.
                  </p>
                </div>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Consumables;
