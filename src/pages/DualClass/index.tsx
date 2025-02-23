import "./index.scss";
import AbilityCard from "../../components/AbilityCard";
import ClassHeader from "../../components/ClassHeader";
import Accordion from "../../components/Accordion";

function DualClass() {
  const dualClassText = [
    {
      title: "Arcanist Dual Class Features",
      content: (<div><p>If you choose arcanist as one of your two classes, then you gain the following features</p><ul><li><span>You don’t have training in armor or weapons.</span></li><li><span>Your starting hit points equals 8 and your recoveries equal 4.</span></li><li><span>Your theme is arcane.</span></li><li><span>You gain the arcanist’s arcane magic feature, but your mana starts at 1, increasing to 3 at 5th level, and 5 at 8th level. For magic traditions, you only learn the arcane magic tradition.</span></li><li><span>You gain the arcanist’s high magic feature.</span></li></ul></div>)
    },
    {
      title: "Bard Dual Class Features",
      content: (<div><p>If you choose bard as one of your two classes, then you gain the following features</p><ul><li><span>You don’t have training in armor or weapons.</span></li><li><span>Your starting hit points equals 8 and your recoveries equal 4.</span></li><li><span>Your theme is cunning.</span></li><li><span>You gain the bard’s bardic magic feature, but your mana starts at 1, increasing to 3 at 5th level, and 5 at 8th level. You only learn one magic tradition.</span></li><li><span>You gain the bard’s bardic performance feature.</span></li></ul></div>)
    },
    {
      title: "Cleric Dual Class Features",
      content: (<div><p>If you choose cleric as one of your two classes, then you gain the following features</p><ul><li><span>You don’t have training in armor or weapons.</span></li><li><span>Your starting hit points equals 8 and your recoveries equal 4.</span></li><li><span>Your theme is divine.</span></li><li><span>Choose a divine origin.</span></li><li><span>You gain the cleric’s cleric magic feature, but your mana starts at 1, increasing to 3 at 5th level, and 5 at 8th level. For magic traditions, you only learn the holy or unholy magic tradition.</span></li><li><span>You gain the cleric’s prayer of healing feature.</span></li></ul></div>)
    },
    {
      title: "Commander Dual Class Features",
      content: (<div><p>If you choose commander as one of your two classes, then you gain the following features</p><ul><li><span>You gain training in all weapons and armor.</span></li><li><span>Your starting hit points equals 10 and your recoveries equal 5.</span></li><li><span>Your theme is martial.</span></li><li><span>You gain the commander’s commanding attack feature.</span></li><li><span>You gain the commander’s inspiring attack feature.</span></li><li><span>You gain the commander’s commanding presence feature.</span></li></ul></div>)
    },
    {
      title: "Druid Dual Class Features",
      content: (<div><p>If you choose druid as one of your two classes, then you gain the following features</p><ul><li><span>You don’t have training in armor or weapons.</span></li><li><span>Your starting hit points equals 8 and your recoveries equal 4.</span></li><li><span>Your theme is nature.</span></li><li><span>You gain the druid’s druid magic feature, but your mana starts at 1, increasing to 3 at 5th level, and 5 at 8th level. For magic traditions, you only learn the nature magic tradition.</span></li><li><span>You gain the druid’s shape terrain feature.</span></li></ul></div>)
    },
    {
      title: "Magesmith Dual Class Features",
      content: (<div><p>If you choose magesmith as one of your two classes, then you gain the following features</p><ul><li><span>You gain training in all weapons and light armor.</span></li><li><span>Your starting hit points equals 10 and your recoveries equal 5.</span></li><li><span>Your theme is arcane.</span></li><li><span>You gain the magesmith’s magesmith magic feature, but you don’t learn a tier 1 battle spell and you don't gain mana. At higher levels, you don’t learn magic traditions or battle spells from this feature.</span></li><li><span>You gain the magesmith’s talented artificer feature.</span></li><li><span>You gain the magesmith’s arcane upgrades feature, but you only initially learn 2 upgrades.</span></li></ul></div>)
    },
    {
      title: "Occultist Dual Class Features",
      content: (<div><p>If you choose occultist as one of your two classes, then you gain the following features</p><ul><li><span>You don’t have training in armor or weapons.</span></li><li><span>Your starting hit points equals 8 and your recoveries equal 4.</span></li><li><span>Your theme is arcane.</span></li><li><span>You gain the occultist’s occultist magic feature, but your mana starts at 1, increasing to 3 at 5th level, and 5 at 8th level. You only learn one magic tradition.</span></li><li><span>You gain the occultist’s hex feature.</span></li></ul></div>)
    },
    {
      title: "Paladin Dual Class Features",
      content: (<div><p>If you choose paladin as one of your two classes, then you gain the following features</p><ul><li><span>You gain training in all weapons and armor.</span></li><li><span>Your starting hit points equals 12 and your recoveries equal 6.</span></li><li><span>Your theme is divine.</span></li><li><span>You gain the paladin’s protective smite feature.</span></li><li><span>You gain the paladin’s holy smite feature.</span></li></ul></div>)
    },
    {
      title: "Ranger Dual Class Features",
      content: (<div><p>If you choose ranger as one of your two classes, then you gain the following features</p><ul><li><span>You gain training in light armor and all weapons.</span></li><li><span>Your starting hit points equals 10 and your recoveries equal 5.</span></li><li><span>Your theme is nature.</span></li><li><span>You gain the ranger’s monster bestiary feature.</span></li><li><span>You gain the ranger’s studied attack feature.</span></li><li><span>You gain the ranger’s mark prey feature.</span></li></ul></div>)
    },
    {
      title: "Rogue Dual Class Features",
      content: (<div><p>If you choose rogue as one of your two classes, then you gain the following features</p><ul><li><span>You gain training in light armor, standard melee weapons, and all ranged weapons.</span></li><li><span>Your starting hit points equals 10 and your recoveries equal 5.</span></li><li><span>Your theme is cunning.</span></li><li><span>You gain the rogue’s expertise feature.</span></li><li><span>You gain the rogue’s cunning strike feature.</span></li><li><span>You gain the rogue’s evasive attack feature.</span></li></ul></div>)
    },
    {
      title: "Summoner Dual Class Features",
      content: (<div><p>If you choose summoner as one of your two classes, then you gain the following features</p><ul><li><span>You don’t have training in armor or weapons.</span></li><li><span>Your starting hit points equals 8 and your recoveries equal 4.</span></li><li><span>Choose a summoner subclass, but your choice only determines your theme and any modifications to your summons.</span></li><li><span>You gain the summoner’s conjure minion feature.</span></li><li><span>You gain the summoner’s conjure summons feature.</span></li></ul></div>)
    },
    {
      title: "Swordmage Dual Class Features",
      content: (<div><p>If you choose swordmage as one of your two classes, then you gain the following features</p><ul><li><span>You gain training in all weapons and armor.</span></li><li><span>Your starting hit points equals 10 and your recoveries equal 5.</span></li><li><span>Your theme is arcane.</span></li><li><span>You gain the swordmage’s swordmage magic feature, but you don’t learn a tier 1 battle spell and you don't gain mana. At higher levels, you don’t learn magic traditions or battle spells from this feature.</span></li><li><span>You gain the swordmage’s arcane weapon feature.</span></li><li><span>You gain the swordmage’s enspell weapon feature.</span></li></ul></div>)
    },
    {
      title: "Warrior Dual Class Features",
      content: (<div><p>If you choose warrior as one of your two classes, then you gain the following features</p><ul><li><span>You gain training in all armor and weapons.</span></li><li><span>Your starting hit points equals 12 and your recoveries equal 6.</span></li><li><span>Your theme is martial.</span></li><li><span>You gain the warrior’s fighting style feature.</span></li><li><span>You gain the warrior’s comeback attack feature.</span></li></ul></div>)
    }
  ]

  return (
    <div className="dual-class">
      <div className="dual-class-content">
        <ClassHeader />
        <h1>Dual Class</h1>
        <p>Some heroes blend skills from two different professions, called a dual class. A dual class is a combination of features from two different classes. For example, a hero can choose to play a combination of paladin and rogue to play a holy assassin. If you want to play a dual class hero, then you choose two different classes at 1st level.</p>
        <h2>Dual Class Rules</h2>
        <p>For all dual class heroes, you follow the same rules:</p>
        <ul>
          <li><span><b>HP and Recoveries:</b> If your two classes’ starting hit points and number of recoveries are different, then choose the highest of your two classes.</span></li>
          <li><span><b>Defenses:</b> Choose to gain only one of your classes’ defense bonuses.</span></li>
          <li><span><b>Training:</b> If your two classes’ training in weapons and armor is different, then choose the best of your two classes.</span></li>
          <li><span><b>Themes:</b> You gain the themes from both of your two classes. If you have two themes, then when you gain a theme talent, choose a talent from only one of your themes.</span></li>
          <li><span><b>Class Talents:</b> When you gain a class talent, choose a talent from only one of your two classes.</span></li>
          <li><span><b>Subclass:</b> You don’t gain a subclass from either class.</span></li>
          <li><span><b>Spellcasting:</b> If both of your classes give you mana, your mana starts at 2, increasing to 5 at 5th level, and 8 at 8th level. At levels 2, 4, 6, and 8, you learn a magic tradition (limited by your classes) or a battle spell.</span></li>
          <li><span><b>Starting Equipment:</b> Choose one of your class’s starting equipments.</span></li>
          <li><span><b>Higher Levels:</b> At 3rd level, you choose a 3rd level feature from only one of your two classes.</span></li>
        </ul>
        <h2>Dual Class Features</h2>
        <p>See what features you gain from each class if the class is one of your two classes:</p>
        
        {dualClassText.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default DualClass;