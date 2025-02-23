import "./index.scss";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import Modifier from "../../components/Modifier";
import Dropdown from "../../components/Dropdown";
import AbilityCard from "../../components/AbilityCard";
import Monster from "../../components/Monster";
import { ritualSpells } from "./ritual-spells";
import { airSpells, arcaneSpells, deathSpells, earthSpells, enchantmentSpells, eldritchSpells, fireSpells, gravitySpells, lightSpells, holySpells, iceSpells, illusionSpells, lifeSpells, natureSpells, protectionSpells, shadowSpells, teleportationSpells, timeSpells, toxicSpells, unholySpells, warSpells, waterSpells } from "./battle-spells";

function Spells() {
  const [isBattleSpells, setBattleSpells] = useState(true);
  const [isRitualSpells, setRitualSpells] = useState(false);
  const [selectedTradition, setSelectedTradition] = useState('')

  function handleBattleSpells() {
    setBattleSpells(true);
    setRitualSpells(false);
  }
  function handleRitualSpells() {
    setBattleSpells(false);
    setRitualSpells(true);
  }
  function handleMagicTradition(label: string) {
    setSelectedTradition(label)
  }

  const dropdownItems = [
    { label: "Air Tradition", onClick: handleMagicTradition },
    { label: "Arcane Tradition", onClick: handleMagicTradition },
    { label: "Death Tradition", onClick: handleMagicTradition },
    { label: "Earth Tradition", onClick: handleMagicTradition },
    { label: "Eldritch Tradition", onClick: handleMagicTradition },
    { label: "Enchantment Tradition", onClick: handleMagicTradition },
    { label: "Fire Tradition", onClick: handleMagicTradition },
    { label: "Gravity Tradition", onClick: handleMagicTradition },
    { label: "Holy Tradition", onClick: handleMagicTradition },
    { label: "Ice Tradition", onClick: handleMagicTradition },
    { label: "Illusion Tradition", onClick: handleMagicTradition },
    { label: "Life Tradition", onClick: handleMagicTradition },
    { label: "Light Tradition", onClick: handleMagicTradition },
    { label: "Nature Tradition", onClick: handleMagicTradition },
    { label: "Protection Tradition", onClick: handleMagicTradition },
    { label: "Shadow Tradition", onClick: handleMagicTradition },
    { label: "Teleportation Tradition", onClick: handleMagicTradition },
    { label: "Time Tradition", onClick: handleMagicTradition },
    { label: "Toxic Tradition", onClick: handleMagicTradition },
    { label: "Unholy Tradition", onClick: handleMagicTradition },
    { label: "War Tradition", onClick: handleMagicTradition },
    { label: "Water Tradition", onClick: handleMagicTradition },
  ]

  return (
    <div className="spells">
      <div className="spells-content">
        <div className="spells-content__tabs">
          <div className="spells-content__tabs__tab" onClick={handleBattleSpells}><p>Battle Spells</p></div>
          <div className="spells-content__tabs__divider">|</div>
          <div className="spells-content__tabs__tab" onClick={handleRitualSpells}><p>Ritual Spells</p></div>
        </div>

        {isRitualSpells && (
          <div>
            <h1>Ritual Spells</h1>
            <p>Scrying on a distant foe or speaking with animals are examples of ritual spells. These spells tend to take a long time to cast and might cost gold in order to produce powerful and lasting magical effects. Like battle spells, ritual spells are ranked by tier.</p>
            <p>TODO: see full rules on ritual spells</p>
            {ritualSpells.map((spells, index) => (
              <div>
                <h3>Tier {index + 1} Ritual Spells</h3>
                {spells.map(({ title, spell, actType }) => (
                  <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                ))}
              </div>
            ))}
          </div>
        )}

        {isBattleSpells && (
          <div>
            <h1>Battle Spells</h1>
            <p>Exploding fireballs to decimate foes or healing a fallen foe after they take a mortal blow are all examples of battle spells. battle spells tend to be powerful effects used primarily in combat to cause harm to enemies or protect allies. battle spells are tiered by spell tier and categorized by magic traditions.</p>
            <p>TODO: see full rules to Spellcast</p>
            <Dropdown items={dropdownItems} startLabel="Select a magic tradition" />

            {selectedTradition === 'Air Tradition' && (
              <div>
                <h2>Air Tradition</h2>
                <p>Practitioners of the air tradition channel the primordial magic of skies and storms.</p>
                {airSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Arcane Tradition' && (
              <div>
                <h2>Arcane Tradition</h2>
                <p>Students of the arcane tradition manipulate the raw essence of magic, sometimes with unpredictable results.</p>
                {arcaneSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Death Tradition' && (
              <div>
                <h2>Death Tradition</h2>
                <p>Those that study the death tradition are reviled as fearsome necromancers.</p>
                {deathSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Earth Tradition' && (
              <div>
                <h2>Earth Tradition</h2>
                <p>The earth tradition channels the power of the ground and mountains.</p>
                {earthSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Eldritch Tradition' && (
              <div>
                <h2>Eldritch Tradition</h2>
                <p>The eldritch tradition focuses on otherworldly psychic magic that can induce madness in others.</p>
                {eldritchSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Enchantment Tradition' && (
              <div>
                <h2>Enchantment Tradition</h2>
                <p>The enchantment tradition is subtle magic that manipulates others’ emotions or mind.</p>
                {enchantmentSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Fire Tradition' && (
              <div>
                <h2>Fire Tradition</h2>
                <p>Of the elemental traditions, fire is considered the most destructive and dangerous.</p>
                {fireSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Gravity Tradition' && (
              <div>
                <h2>Gravity Tradition</h2>
                <p>The gravity tradition calls upon the esoteric magic of gravity to crush foes.</p>
                {gravitySpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Holy Tradition' && (
              <div>
                <h2>Holy Tradition</h2>
                <p>Acolytes of the holy tradition channel the raw power of heavens and their servitors.</p>
                {holySpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Ice Tradition' && (
              <div>
                <h2>Ice Tradition</h2>
                <p>Practitioners of the ice tradition freeze their foes and make the environment hazardous.</p>
                {iceSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Illusion Tradition' && (
              <div>
                <h2>Illusion Tradition</h2>
                <p>The illusion tradition is cunning magic that uses deceitful illusions to trick others.</p>
                {illusionSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Life Tradition' && (
              <div>
                <h2>Life Tradition</h2>
                <p>Those that specialize in the life tradition restore wounds and keep others alive.</p>
                {lifeSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Light Tradition' && (
              <div>
                <h2>Light Tradition</h2>
                <p>The light tradition channels the power of stars and sun.</p>
                {lightSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Nature Tradition' && (
              <div>
                <h2>Nature Tradition</h2>
                <p>Practitioners of the nature tradition learn to manipulate the earth and animals around them.</p>
                {natureSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Protection Tradition' && (
              <div>
                <h2>Protection Tradition</h2>
                <p>The protection tradition focuses on magic to shield yourself and others from harm.</p>
                {protectionSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Shadow Tradition' && (
              <div>
                <h2>Shadow Tradition</h2>
                <p>The shadow tradition channels life draining darkness that lives within the shadow realm.</p>
                {shadowSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Teleportation Tradition' && (
              <div>
                <h2>Teleportation Tradition</h2>
                <p>Students of the teleportation tradition prefer to travel in style.</p>
                {teleportationSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Time Tradition' && (
              <div>
                <h2>Time Tradition</h2>
                <p>The time tradition taps into the esoteric and dangerous magic of chronomancy.</p>
                {timeSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Toxic Tradition' && (
              <div>
                <h2>Toxic Tradition</h2>
                <p>The toxic tradition manipulates the dangerous power of poison and acid.</p>
                {toxicSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Unholy Tradition' && (
              <div>
                <h2>Unholy Tradition</h2>
                <p>The unholy tradition calls upon the dark powers of the lower realms.</p>
                {unholySpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'War Tradition' && (
              <div>
                <h2>War Tradition</h2>
                <p>Developed as a way for magic to be utilized in battle, the war tradition is well practiced by mages that wield weapons.</p>
                {warSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {selectedTradition === 'Water Tradition' && (
              <div>
                <h2>Water Tradition</h2>
                <p>The water tradition channels the power of the rivers and oceans.</p>
                {waterSpells.map((spells, index) => (
                  <div>
                    <h3>Tier {index} Battle Spells</h3>
                    {spells.map(({ title, spell, actType }) => (
                      <Accordion stacked title={title} content={spell} type="spell" actType={actType} />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Spells;