import "./index.scss";
import Monster from "../../components/Monster";
import EquipmentHeader from "../../components/EquipmentHeader";

function Mounts() {
  return (
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Mounts</h1>
        <p>Heroes can purchase mounts to ride in and out of combat, with some mounts being more fantastical.</p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Gold</th>
              <th>Item Tier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Barding</td>
              <td>Special</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Tier 1 Mount</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Tier 2 Mount</td>
              <td>6</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Tier 3 Mount</td>
              <td>12</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <h2>Mount Barding</h2>
        <p>Armor can help save a mount’s life. Worn barding increases the mount’s Evasion by +1. Barding costs more depending on the size of the mount: 1 for medium or smaller, 2 for large, 4 for huge, and 8 for colossal.</p>
        <h2>Mount Rules</h2>
        <p>Mounts can be anything such as giant lizards, elemental drakes, horses, sharks, giant eagles, and more! Mounts all have the same statistics depending on their tier, and get a number of mount traits depending on their tier. Use the sample mount stat block and see the list of mount traits to customize your mount. </p>
        <Monster 
          name="Mount" 
          type="Large Creature (depends on mount)" 
          hp="5 per mount’s tier (T)"
          evn="10 + double T"
          mgt="12 + double T"
          res="8 + double T"
          pb="double T"
          summons
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "EVN",
            damage: "2 physical damage per T"
          }]}
        />
        <h3>Mount Traits</h3>
        <p>Mounts get a number of mount traits equal to their tier.</p>
        <ul>
          <li><span>Resistance to a damage type equal to the mount's tier, with physical counting as two mount traits.</span></li>
          <li><span>Fly speed equal to the land speed (limited to tier 2 or higher mounts)</span></li>
          <li><span>Climb speed equal to the land speed</span></li>
          <li><span>Burrow speed equal to the land speed (limited tier 2 or higher mounts)</span></li>
          <li><span>All speeds increase by +1</span></li>
          <li><span>Swim speed equal to the land speed and can breath underwater</span></li>
          <li><span>Size is huge</span></li>
          <li><span>Hit points per mount's tier increase to 8</span></li>
          <li><span>The mount has a ranged ability that can target a creature within 3 zones with an attack roll against Evasion that deals double tier damage of a damage type appropriate to the mount. A drake might spit fire while a celestial hound might shoot holy energy. </span></li>
          <li><span>Mount has night vision</span></li>
          <li><span>Choose an effect to happen when your mount gets a success on their attack roll for slam: target falls prone, target shoved within their zone, target is seized (overcome ends).</span></li>
          <li><span>You and your mount can telepathically speak to one another</span></li>
        </ul>
        <h3>Mount Examples</h3>
        <p>Here are some examples of mounts:</p>
        <Monster 
          name="Warhorse (Tier 1 Mount)" 
          type="Large Animal" 
          hp="5"
          evn="12"
          mgt="14"
          res="10"
          pb="2"
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "EVN",
            damage: "2 physical damage",
            success: "prone"
          }]}
        />
        <div style={{paddingTop: '25px'}}></div>

        <Monster 
          name="Giant Eagle (Tier 2 Mount)" 
          type="Large Animal" 
          hp="10"
          evn="14"
          mgt="16"
          res="12"
          pb="4"
          speeds="fly 1"
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "EVN",
            damage: "4 physical damage",
            success: "seized (overcome ends)"
          }]}
        />
        <div style={{paddingTop: '25px'}}></div>

        <Monster 
          name="Riding Dragon (Tier 3 Mount)" 
          type="Large Dragon" 
          hp="15"
          evn="16"
          mgt="18"
          res="14"
          pb="6"
          resistances="fire 3"
          speeds="fly 1"
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "EVN",
            damage: "6 physical damage",
          },
          {
            basic: false,
            name: "Fire Spit",
            keywords: "ranged",
            target: "1 creature within 3 zones",
            defense: "EVN",
            damage: "6 fire damage",
          }]}
        />
      </div>
    </div>
  )
}

export default Mounts