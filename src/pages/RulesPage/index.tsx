import RulesHeader from "../../components/RulesHeader";

function RulesPage() {
  return (
    <div className="general">
      <div className="general-content">
      <RulesHeader />
        <h1>Game Rules</h1>
        <p>Legends Rise has game rules to help adjudicate different situations. However, the game are only has a couple general rules, but remember specific rules always override general ones.</p>
        <h2>Always Round Down</h2>
        <p>If you normally deal 3 fire damage with an ability, but get a partial success on your attack roll, which halves the damage. You instead deal 1 fire damage.</p>
        <h2>Multiple Effects Don’t Stack</h2>
        <p>You can’t benefit or suffer from the same effect multiple times at once. For example, you can’t wear two rings of heroism to raise your proficiency bonus twice, nor can heroes benefit from multiple commanders’ momentous start features, and if you're hindered from two different sources, you only apply the penalty once.</p>
        <h2>Game Master's (GM) Word is Law</h2>
        <p>The GM always has the final call on a ruling dispute.</p>

      </div>
    </div>
  )
}

export default RulesPage;