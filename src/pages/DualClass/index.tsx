import "./index.scss";
import ClassHeader from "../../components/ClassHeader";
import Accordion from "../../components/Accordion";

function DualClass() {
  const dualClassText = [
    {
      title: "Arcanist Dual Class Features",
      content: (
        <div>
          <p>
            If you choose arcanist as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>
                You gain the arcanist’s arcane magic feature, but your mana
                starts at 1, increasing to 3 at 5th level, and 5 at 8th level.
                For magic traditions, you only learn the arcane magic tradition.
                At levels 3, 6, and 9, you learn a learn a battle spell or a
                magic tradition, except for eldritch, holy, nature, or unholy.
              </span>
            </li>
            <li>
              <span>You gain the arcanist’s high magic feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Bard Dual Class Features",
      content: (
        <div>
          <p>
            If you choose bard as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>
                You gain the bard’s bardic magic feature, but your mana starts
                at 1, increasing to 3 at 5th level, and 5 at 8th level. You only
                learn one magic tradition. At levels 3, 6, and 9, you learn a
                learn a battle spell or a magic tradition from the bard
                tradition list.
              </span>
            </li>
            <li>
              <span>You gain the bard’s bardic performance feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Cleric Dual Class Features",
      content: (
        <div>
          <p>
            If you choose cleric as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>Choose a divine origin.</span>
            </li>
            <li>
              <span>
                You gain the cleric’s cleric magic feature, but your mana starts
                at 1, increasing to 3 at 5th level, and 5 at 8th level. For
                magic traditions, you only learn the holy or unholy magic
                tradition. At levels 3, 6, and 9, you learn a learn a battle
                spell or a magic tradition associated with your deity.
              </span>
            </li>
            <li>
              <span>You gain the cleric’s prayer of healing feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Commander Dual Class Features",
      content: (
        <div>
          <p>
            If you choose commander as one of your two classes, then you gain
            the following features
          </p>
          <ul>
            <li>
              <span>You gain the commander’s commanding attack feature.</span>
            </li>
            <li>
              <span>You gain the commander’s inspiring attack feature.</span>
            </li>
            <li>
              <span>You gain the commander’s commanding presence feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Druid Dual Class Features",
      content: (
        <div>
          <p>
            If you choose druid as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>
                You gain the druid’s druid magic feature, but your mana starts
                at 1, increasing to 3 at 5th level, and 5 at 8th level. For
                magic traditions, you only learn the nature magic tradition. At
                levels 3, 6, and 9, you learn a learn a battle spell or a magic
                tradition from the druid tradition list.
              </span>
            </li>
            <li>
              <span>You gain the druid’s shape terrain feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Magesmith Dual Class Features",
      content: (
        <div>
          <p>
            If you choose magesmith as one of your two classes, then you gain
            the following features
          </p>
          <ul>
            <li>
              <span>
                You gain the magesmith’s magesmith magic feature, but you don’t
                learn a tier 1 battle spell and you don't gain mana. At higher
                levels, you don’t learn magic traditions or battle spells from
                this feature.
              </span>
            </li>
            <li>
              <span>You gain the magesmith’s talented artificer feature.</span>
            </li>
            <li>
              <span>
                You gain the magesmith’s arcane upgrades feature, but you only
                initially learn 2 upgrades.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Furyspawn Dual Class Features",
      content: (
        <div>
          <p>
            If you choose furyspawn as one of your two classes, then you gain
            the following features
          </p>
          <ul>
            <li>
              <span>You gain the furyspawn’s reckless attack feature.</span>
            </li>
            <li>
              <span>You gain the furyspawn’s monstrous form feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Occultist Dual Class Features",
      content: (
        <div>
          <p>
            If you choose occultist as one of your two classes, then you gain
            the following features
          </p>
          <ul>
            <li>
              <span>
                You gain the occultist’s occultist magic feature, but your mana
                starts at 1, increasing to 3 at 5th level, and 5 at 8th level.
                You only learn one magic tradition. At levels 3, 6, and 9, you
                learn a learn a battle spell or a magic tradition from the
                occultist tradition list.
              </span>
            </li>
            <li>
              <span>You gain the occultist’s hex feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Paladin Dual Class Features",
      content: (
        <div>
          <p>
            If you choose paladin as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>You gain the paladin’s protective smite feature.</span>
            </li>
            <li>
              <span>You gain the paladin’s divine smite feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Ranger Dual Class Features",
      content: (
        <div>
          <p>
            If you choose ranger as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>You gain the ranger’s survivalist feature.</span>
            </li>
            <li>
              <span>You gain the ranger’s studied attack feature.</span>
            </li>
            <li>
              <span>You gain the ranger’s mark prey feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Rogue Dual Class Features",
      content: (
        <div>
          <p>
            If you choose rogue as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>You gain the rogue’s expertise feature.</span>
            </li>
            <li>
              <span>You gain the rogue’s cunning strike feature.</span>
            </li>
            <li>
              <span>You gain the rogue’s evasive attack feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Seeker Dual Class Features",
      content: (
        <div>
          <p>
            If you choose seeker as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>You gain the seeker’s spirit strike feature.</span>
            </li>
            <li>
              <span>You gain the seeker’s disrupt essence feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Summoner Dual Class Features",
      content: (
        <div>
          <p>
            If you choose summoner as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>
                Choose a summoner subclass, but your choice only determines your
                theme and any modifications to your summons.
              </span>
            </li>
            <li>
              <span>You gain the summoner’s conjure minion feature.</span>
            </li>
            <li>
              <span>You gain the summoner’s conjure summons feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Swordmage Dual Class Features",
      content: (
        <div>
          <p>
            If you choose swordmage as one of your two classes, then you gain
            the following features
          </p>
          <ul>
            <li>
              <span>
                You gain the swordmage’s swordmage magic feature, but you don’t
                learn a tier 1 battle spell and you don't gain mana. At higher
                levels, you don’t learn magic traditions or battle spells from
                this feature.
              </span>
            </li>
            <li>
              <span>You gain the swordmage’s arcane weapon feature.</span>
            </li>
            <li>
              <span>You gain the swordmage’s enspell weapon feature.</span>
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Warrior Dual Class Features",
      content: (
        <div>
          <p>
            If you choose warrior as one of your two classes, then you gain the
            following features
          </p>
          <ul>
            <li>
              <span>You gain the warrior’s fighting style feature.</span>
            </li>
            <li>
              <span>You gain the warrior’s comeback attack feature.</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="dual-class">
      <div className="dual-class-content">
        <ClassHeader />
        <h1>Dual Class</h1>
        <p>
          Some heroes blend skills from two different professions, called a dual
          class. A dual class is a combination of features from two different
          classes. For example, a hero can choose to play a combination of
          paladin and rogue to play a holy assassin. If you want to play a dual
          class hero, then you choose two different classes at 1st level.
        </p>
        <h2>Dual Class Rules</h2>
        <p>For all dual class heroes, you follow the same rules:</p>
        <ul>
          <li>
            <span>
              <b>HP and Recoveries:</b> If your two classes’ starting hit points
              and number of recoveries are different, then choose the highest of
              your two classes.
            </span>
          </li>
          <li>
            <span>
              <b>Defenses:</b> Choose the defense bonsuses from only one of your
              classes.
            </span>
          </li>
          <li>
            <span>
              <b>Training:</b> If your two classes’ training in weapons and
              armor is different, then choose the best of your two classes.
            </span>
          </li>
          <li>
            <span>
              <b>Themes:</b> You gain the themes from both of your two classes.
              If you have two themes, then when you gain a theme talent, choose
              a talent from only one of your themes.
            </span>
          </li>
          <li>
            <span>
              <b>Class Talents:</b> When you gain a class talent, choose a
              talent from only one of your two classes.
            </span>
          </li>
          <li>
            <span>
              <b>Subclass:</b> You don’t gain a subclass from either class.
            </span>
          </li>
          <li>
            <span>
              <b>Spellcasting:</b> If both of your classes' dual class feautures
              give you mana, then your spellcasting at higher levels is
              different. Your mana increases from 2 to 5 at 5th level, and to 8
              at 8th level. You learn a magic tradition (limited by your
              classes) or a battle spell at levels 2, 4, 6, and 8, instead of at
              3, 6, and 9.
            </span>
          </li>
          <li>
            <span>
              <b>Starting Equipment:</b> Choose one of your class’s starting
              equipments.
            </span>
          </li>
          <li>
            <span>
              <b>Higher Levels:</b> At 3rd level, you choose a 3rd level feature
              from only one of your two classes.
            </span>
          </li>
        </ul>
        <h2>Dual Class Features</h2>
        <p>
          See what features you gain from each class if the class is one of your
          two classes:
        </p>

        {dualClassText.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default DualClass;
