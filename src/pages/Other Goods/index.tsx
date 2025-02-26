import "./index.scss";
import EquipmentHeader from "../../components/EquipmentHeader";

function OtherGoods() {
  return (
    <div className="equipment">
      <div className="equipment-content">
        <EquipmentHeader />
        <h1>Other Goods</h1>
        <p>Besides armor and weapons, your heroes can purchase other items and services. Most goods cost a number of gold, usually one. For minor goods such as a candle, rope, or getting a mug all cost less than 1 gold, and it can be assumed you have enough coins to purchase them without spending gold. All other goods unless magical or made out of special material are item tier 1.</p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Gold</th>
              <th>Item Tier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Magic Implement</td>
              <td>An item to channel magic such as a tome, staff, wand, or holy symbol</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Magic Implement</td>
              <td>An item to channel magic such as a tome, staff, wand, or holy symbol</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Fancy Lodgings</td>
              <td>Room and board at an extravagant inn</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Spellcasting</td>
              <td>Hiring someone to Spellcast a spell. Cost is the listed amount plus any other costs needed for the spell.</td>
              <td>1 for tier 1 spell, 3 for tier 2 spell, 6 for tier 3 spell</td>
              <td>Equals the spell tier</td>
            </tr>
            <tr>
              <td>Transportation (Mundane)</td>
              <td>Booking passage on a caravan, boat, or other form of transportation. Price is per day.</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Transportation (Magical)</td>
              <td>Booking passage on an airship or magically enhanced mode of transportation. Price is per day.</td>
              <td>3</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OtherGoods