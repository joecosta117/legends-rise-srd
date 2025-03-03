import "./index.scss";
import RulesHeader from "../../components/RulesHeader";

function WealthRules() {
  return (
    <div className="general">
      <div className="general-content">
        <RulesHeader />
        <h1>Gold and Commerce Rules</h1>
        <p>All heroes acquire treasure and riches as they adventure, which they can use to purchase new equipment and even magical relics!</p>
        <h2>Table of Contents</h2>
        <ul style={{marginTop: '0'}}>
          <li><a href="#gold"><span><b>Gold</b></span></a></li>
          <li><a href="#wealth"><span><b>Wealth Tiers</b></span></a></li>
          <li><a href="#commerce"><span><b>Buying and Selling</b></span></a></li>
        </ul>
        
        <h2 id="gold">Gold</h2>
        <p><b>Gold</b> is an abstract measure of coins and other miscellaneous valuable items. The most common forms of currency across the land are copper, silver, and gold coins. A few silver coins a hero might use during their daily lives isn’t worth tracking.</p>
        <ul>
          <li><span><b>Less than 1 Gold:</b> Rope, candle, flask, shovel, or other minor miscellaneous items.</span></li>
          <li><span><b>1 Gold:</b> A well made piece of armor or weapon, a purse of coins, a month’s wages, renting a horse.</span></li>
          <li><span><b>2 Gold:</b> A piece of jewelry.</span></li>
          <li><span><b>3 Gold:</b> A beautiful gem or other opulent treasure.</span></li>
          <li><span><b>5 Gold:</b> A permanent minor magical item like a flaming sword or magical wand.</span></li>
          <li><span><b>10 Gold:</b> A deed to a fancy house.</span></li>
        </ul>

        <h2 id="wealth">Wealth Tiers</h2>
        <p>Each hero has a <b>wealth tier</b>, which represents the quality level of your hero’s lifestyle and what they can easily afford. Your wealth tier equals your tier.</p>
        <ul>
          <li><span><b>Wealth Tier 1 (Modest):</b> Your group has enough coin to get by, such as affording a cheap meal and room at an inn, but not much more.</span></li>
          <li><span><b>Wealth Tier 2 (Comfortable):</b> Your group can easily afford a comfortable lifestyle, such as nice homes or a small keep.</span></li>
          <li><span><b>Wealth Tier 3 (Wealthy):</b> Your group is rich enough to enjoy a luxurious lifestyle such as owning a castle.</span></li>
          <li><span><b>Wealth Tier 4 (Exorbitantly Rich):</b> Your group is wealthier than rulers of nations.</span></li>
        </ul>

        <h2 id="commerce">Buying and Selling</h2>
        <p>Heroes will typically buy new equipment or even sell equipment they no longer need.</p>
        <h3 className="header">Buying</h3>
        <p>When your hero buys mundane equipment or services, check the good’s item tier. If the good’s item tier is lower than your wealth tier, then you don’t need to pay for the good. It’s assumed you have enough coins to easily pay for it without a second thought. In real life, if you had a wealth tier 1 with a modest lifestyle, then buying a banana (item tier 0) or even a dozen bananas won’t break the bank.</p>
        <p>However, if a good’s item tier is equal to or greater than your wealth tier, you need to spend the good’s cost in gold. This represents a good with a significant cost to your hero. For example, if a hero has wealth tier 1, and wants to buy heavy armor (item tier 1), then that hero needs to spend the armor’s cost in gold.</p>

        <h3 className="header">Selling</h3>
        <p>Similar to buying, selling items or services also depends on the good’s item tier. If the good’s item tier is lower than your wealth tier, then you don’t make enough meaningful profit to increase your gold. If you sell a tomato to someone, you’re not going to make enough money to get excited.</p>
        <p>Like buying, if the good you're selling has an item tier equal to or greater than your wealth tier, then you do gain gold equal to half the item’s original cost, or the full cost if you’re selling a new item. If the item costs 1 gold, then selling it gives you half a gold.</p>
        
        <h3 className="header">Buying and Selling Magic Items</h3>
        <p>The only exception to buying and selling by  wealth tier is magic items, such as magical consumables and relics, which ignore your wealth tier. If you buy a magic item, then you must always pay the cost in gold. Likewise, if you sell a magic item, you always earn gold equal to half the item’s cost. Magic items are rarer and not as easily purchasable or sold.</p>
      </div>
    </div>
  )
}

export default WealthRules;