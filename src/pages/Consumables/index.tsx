import "./index.scss";
import EquipmentHeader from "../../components/EquipmentHeader";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";

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
        <Accordion
          title="Buying and Selling Consumables"
          content={
            <div>
              <p>
                Most consumables are found during adventuring, but depending on
                the GM's setting, consumables might also be for sale in larger
                settlements. If so, you can use the following prices for
                consumables depending on their item tier:
              </p>
              <ul>
                <li>
                  <span>
                    <b>Tier 1:</b> 1 gold
                  </span>
                </li>
                <li>
                  <span>
                    <b>Tier 2:</b> 3 gold
                  </span>
                </li>
                <li>
                  <span>
                    <b>Tier 3:</b> 6 gold
                  </span>
                </li>
              </ul>
              <p>
                Tier 3 consumables contain very powerful magic and are rarely
                found for sale.
              </p>
            </div>
          }
        />
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
              content="This vial of magical oil’s color depends on the type of energy. Each ointment is tied to a specific damage type. As a maneuver, you can coat a weapon with the ointment, which lasts for the scene. While coated, the weapon deals the oinment's damage type instead of your weapon's normal damage type. A weapon can only have one of these ointments on it at a time."
            />
            <Accordion
              stacked
              title="Potion of Climbing"
              content="When this brown potion is drunk, you gain a climb speed of 1 (scene ends)."
            />
            <Accordion
              stacked
              title="Potion of Healing"
              content={
                <span>
                  This vial of warm red liquid soothes aches and closes wounds
                  beyond your normal limits. When you drink this potion, you{" "}
                  <ToolTip preset="heal" /> 6.
                </span>
              }
            />
            <Accordion
              stacked
              title="Potion of Mana"
              content={
                <span>
                  This vial of cool blue liquid restores magical essence beyond
                  your normal limits. When you drink this potion, you regain 1
                  mana.
                </span>
              }
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
              content="This vial of magical oil’s color depends on the type of energy. Each ointment is tied to a specific damage type. As a maneuver, you can coat a weapon with the ointment, which lasts for the scene. While coated, the weapon deals the oinment's damage type instead of your weapon's normal damage type, and deals 2 additional damage. A weapon can only have one of these ointments on it at a time."
            />
            <Accordion
              stacked
              title="Greater Potion of Healing"
              content={
                <span>
                  This vial of warm red liquid soothes aches and closes wounds
                  beyond your normal limits. When you drink this potion, you{" "}
                  <ToolTip preset="heal" /> 12.
                </span>
              }
            />
            <Accordion
              stacked
              title="Greater Potion of Mana"
              content={
                <span>
                  This vial of cool blue liquid restores magical essence beyond
                  your normal limits. When you drink this potion, you regain 2
                  mana.
                </span>
              }
            />
            <Accordion
              stacked
              title="Greater Potion of Speed"
              content={
                <span>
                  This vial of yellow liquid quickens your stride. When you
                  drink this potion, you gain an extra maneuver each turn (scene
                  ends).
                </span>
              }
            />
            <Accordion
              stacked
              title="Potion of Flight"
              content="When this sky blue potion is drunk, you gain a fly speed of 1 (scene ends)."
            />
            <Accordion
              stacked
              title="Potion of Resistance"
              content={
                <div>
                  <p>
                    Each of these potions is attuned to a certain element:
                    arcane, cold, fire, holy, lightning, psychic, necrotic,
                    toxic, or unholy. When this potion is drunk, you gain{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#resistances-and-weaknesses"
                    >
                      resistance
                    </Link>{" "}
                    to the potion’s attuned element (scene ends).
                  </p>
                </div>
              }
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
              content="This vial of magical oil’s color depends on the type of energy. Each ointment is tied to a specific damage type. As a maneuver, you can coat a weapon with the ointment, which lasts for the scene. While coated, the weapon deals the oinment's damage type instead of your weapon's normal damage type, and deals 3 additional damage. A weapon can only have one of these ointments on it at a time."
            />
            <Accordion
              stacked
              title="Superior Potion of Healing"
              content={
                <span>
                  This vial of warm red liquid soothes aches and closes wounds
                  beyond your normal limits. When you drink this potion, you{" "}
                  <ToolTip preset="heal" /> 18.
                </span>
              }
            />
            <Accordion
              stacked
              title="Superior Potion of Mana"
              content={
                <span>
                  This vial of cool blue liquid restores magical essence beyond
                  your normal limits. When you drink this potion, you regain 3
                  mana.
                </span>
              }
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
