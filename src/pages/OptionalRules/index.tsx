import "./index.scss";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";
import Accordion from "../../components/Accordion";

function OptionalRules() {
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
    <div className="optional-rules">
      <div className="optional-rules-content">
        <h1 className="optional-rules__title">Optional Rules</h1>
        <p>
          The rest of this website details the core rules of the game, but this
          page has optional rules you as the GM can implement into your
          campaigns. These rules are not required, but they can add more depth
          and variety to your games. Feel free to pick and choose which rules
          you want to use.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#doom-die">
              <span>
                <b>Doom Die</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#dual-class">
              <span>
                <b>Dual Classing</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#xp">
              <span>
                <b>Experience Points Leveling</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#level-0">
              <span>
                <b>Level 0 Heroes</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#damage-rolls">
              <span>
                <b>Roll for Damage</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#scars">
              <span>
                <b>Scars</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#stacking-hero-points">
              <span>
                <b>Stacking Hero Points</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="doom-die">Doom Die</h2>
        <p>
          For darker and more difficult campaigns, the <b>doom die</b> captures
          the growing danger of the world. Similar to the heroes'{" "}
          <Link className="internal-link" to="/rules/combat#momentum">
            momentum die
          </Link>
          , the doom die is represented by a d4 that starts at 0. Whenver the
          heroes get a failure on an attack roll or skill roll, the doom die
          increments by 1 up to a maximum of 4.
        </p>
        <p>
          The GM can reduce the doom die by any amount to gain an equal amount
          of <Modifier type="f" /> to an enemy's roll. When the doom die is at
          4, the GM can reset the die to 0 to do even more powerful moves:
        </p>
        <ul>
          <li>
            <span>
              Regain a use of a monster's recharge ability, even if it was
              already regained.
            </span>
          </li>
          <li>
            <span>A monster takes an extra turn.</span>
          </li>
          <li>
            <span>
              Add a new encounter (combat or skill) or severe narrative
              complication. Perhaps the heroes are traversing across the ocean,
              and the GM reduces the doom die to 0 as an intense storm causes a
              skill encounter for the heroes to survive.
            </span>
          </li>
        </ul>
        <h3 className="header">Tempt Fate Consequence</h3>
        <p>
          When a player chooses to{" "}
          <Link className="internal-link" to="/rules/skills#tempt-fate">
            tempt fate
          </Link>
          , one of the consequences could be the GM incrementing the doom die by
          1.
        </p>

        <h2 id="dual-class">Dual Classing</h2>
        <p>
          For more complex heroes, the GM can allow dual classing as an option
          at hero creation. A dual class is a combination of features from two
          different classes. For example, a hero can choose to play a
          combination of paladin and rogue to play a holy assassin. If you want
          to play a dual class hero, then you choose two different classes at
          1st level. Avoid using this optional rule if you have new players, as
          dual classing adds complexity to hero creation and gameplay.
        </p>
        <h3 className="header">Dual Class Rules</h3>
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
        <h3 className="header">Dual Class Features</h3>
        <p>
          See what features you gain from each class if the class is one of your
          two classes:
        </p>

        {dualClassText.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}

        <h2 id="xp">Experience Points (XP) Leveling</h2>
        <p>
          Instead of milestone leveling, the GM may award XP after encounters:
        </p>
        <ul>
          <li>
            <span>
              <b>Easy Encounter:</b> 50 XP per hero
            </span>
          </li>
          <li>
            <span>
              <b>Medium Encounter:</b> 100 XP per hero
            </span>
          </li>
          <li>
            <span>
              <b>Hard Encounter:</b> 200 XP per hero
            </span>
          </li>
        </ul>
        <p>
          Heroes level up when they reach <b>1,000 XP</b>. Upon leveling up,
          subtract 1,000 XP and continue tracking toward the next level. If the
          GM wants a faster leveling pace, then level up heroes when they reach
          500 XP, or 2,000 XP for a slower leveling pace.
        </p>

        <h2 id="level-0">Level 0 Heroes</h2>
        <p>
          For grounded origin stories or coming-of-age campaigns, level 0 play
          lets heroes begin their journey before choosing a class. They rely
          only on their ancestry, their instincts, and the will to survive.
        </p>
        <p>
          Level 0 heroes still follow the typical hero creation steps, but don't
          pick a class. Instead heroes pick an ancestry and choose only one
          experience. Their tier is still 1, and their proficiency bonus is 2 as
          normal. A level 0 hero's hit points start at 6 and begin with 4
          recoveries. They don't have training in armor or weapons.
        </p>
        <h3 className="header">Starting Equipment</h3>
        <p>
          Depending on the GM's story, level 0 heroes can start with little to
          no starting equipment. Remember that level 0 heroes aren't trained in
          armor or weapons, so they can't benefit from armor, and when they{" "}
          <Link className="internal-link" to="/combat-abilities#strike">
            strike
          </Link>{" "}
          with a weapon other than a natural melee weapon, they don't add their
          proficiency bonus to the attack roll.
        </p>
        <h3 className="header">Humans</h3>
        <p>
          Since level 0 heroes don't have a class, heroes that choose the human
          ancestry can't benefit from their <i>ambitious</i> primary trait.
          Instead, replace the human ancestry's <i>ambitious</i> primary trait
          with the following: "When you{" "}
          <Link className="internal-link" to="/combat-abilities#strike">
            strike
          </Link>{" "}
          with a weapon you aren't trained in, you can add half your proficiency
          bonus to the attack roll".
        </p>
        <p>
          When level 0 human heroes level up, they lose this trait and regain
          the <i>ambitious</i> primary trait.
        </p>
        <h3 className="header">Balancing Combat Encounters</h3>
        <p>
          Level 0 heroes are significantly weaker than level 1 heroes with less
          hit points, low defenses, low accuracy, and no class abilities. Level
          0 heroes count as 1/2 a normal tier 1 hero for the purposes of
          calculating the EPs for a combat encounter. For example, if there are
          four level 0 heroes, treat them as 2 heroes.
        </p>
        <h3 className="header">Leveling Up</h3>
        <p>
          When the heroes level up to 1st level, they choose a class, which
          increases their starting hit points and recoveries to match their
          class's normal amount. They also gain their class's starting equipment
          and choose a second experience.
        </p>

        <h2 id="damage-rolls">Rolling for Damage</h2>
        <p>
          In Legends Rise, there are no damage rolls. However, some players love
          to roll dice, and this optional rule is for them. Keep in mind this
          optional rule introduces more inconsistency to combat as well as
          slowing the game down. Proceed with caution!
        </p>
        <h3 className="header">Ability Damage</h3>
        <p>
          For most damage from weapon or spell attacks, follow the same
          structure of dealing between 2-5 damage per tier of the attacker. For
          higher tier monsters, first divide their base damage by their tier. To
          convert to damage dice, follow the below:
        </p>
        <ul>
          <li>
            <span>
              <b>2 =</b> 1d4 + proficiency bonus (PB)
            </span>
          </li>
          <li>
            <span>
              <b>3 =</b> 1d6 + PB
            </span>
          </li>
          <li>
            <span>
              <b>4 =</b> 1d8 + PB
            </span>
          </li>
          <li>
            <span>
              <b>5 =</b> 1d10 + PB
            </span>
          </li>
          <li>
            <span>
              <b>6 =</b> 1d12 + PB
            </span>
          </li>
        </ul>
        <p>
          At higher tiers, roll a number of dice equal to the attacker's tier.
          For example, a tier 2 dragon attacks with their rend normally dealing
          8 physical damage. If you want to convert this to rolled damage,
          divide 8 by their tier (2) to get 4, and then roll 2d8 + PB (4) for
          the dragon's damage.
        </p>
        <h4 className="header">Why Add Proficiency Bonus?</h4>
        <p>
          This optional rule lets you add your proficiency bonus to damage rolls
          to add some consistency to them. It can feel bad to roll 1d8 and get a
          1, but if you add your proficiency bonus, then a 3 doesn't feel too
          bad. This is a common practice in modern games.
        </p>
        <p>
          However, adding proficiency bonus does inflate damage amounts and hit
          points too. If you wish to avoid changing hit points, then don't add
          proficiency bonus to damage rolls. For bonus damage and persistent
          damage, just use the flat amount instead with no doubling. Hit points
          can stay unadjusted too.
        </p>
        <h3 className="header">Bonus Damage</h3>
        <p>
          When you get bonus damage, such as a rogue's cunning attack, it
          typically deals additional damage equal to your tier. To convert this
          to rolled damage, for each additional point of damage, roll a d4. For
          example, a tier 3 rogue deals an additional 3 damage from cunning
          attack, or 3d4 with this optional rule.
        </p>
        <h3 className="header">Persistent Damage</h3>
        <p>
          For damage from ongoing damage or dangerous zone, still use flat
          damage as these effects happen often and rolling damage for them would
          slow the game down. However, double the damage. For example, if an
          arcanist creates a dangerous zone (1 fire damage), then the dangerous
          zone instead deals 2 fire damage.
        </p>
        <h3 className="header">Hit Points</h3>
        <p>
          With this optional rule, everyone is dealing more damage, so they need
          more hit points to compensate.
        </p>
        <ul>
          <li>
            <span>
              For heroes, classes and archetypes grant 14 instead of 8 hit
              points, 18 instead of 10 hit points, 22 instead of 12 hit points,
              and 26 instead of 14 hit points.
            </span>
          </li>
          <li>
            <span>
              For abilities or talents that grant extra hit points or temporary
              hit points, double the amount.
            </span>
          </li>
          <li>
            <span>
              When creatures heal, double the amount if its a specified amount.
              For example, when a creature heals from the quick heal spell, they
              regain 12 hit points per spell tier instead of 6. However, for
              healing from spending a recovery, you still only heal your shaken
              value.
            </span>
          </li>
          <li>
            <span>
              For monsters, their base hit points are 18 for tier 1, 48 for tier
              2, and 88 for tier 3. For changes to the monster's hit points from
              their role, double the amount. For example, a tier 1 bruiser adds
              4 to their hit points instead of only 2.
            </span>
          </li>
        </ul>

        <h2 id="scars">Scars</h2>
        <p>
          For darker and dangerous campaigns, along with the doom die,{" "}
          <b>scars</b> captures the trauma of heroic adventures from too many
          near death experiences. When a hero goes unconscious from the{" "}
          <Link className="internal-link" to="/rules/combat#dying">
            death actions
          </Link>{" "}
          or is brought back to life, they gain a scar. Scars are permament
          representations of the hero's trauma, and they can be physical or
          mental. When a hero gains scars equal to their recoveries, their
          journey ends, and their fate is determined by their player. The hero
          can still be played as an NPC, but the player must create a new hero
          to play.
        </p>
        <p>
          In certain campaign settings, scars can represent dark corruption that
          slowly transforms heroes into monsters. When a hero gets their final
          scar, the darkness takes them and they return to the story corrupted
          by evil.
        </p>

        <h2 id="stacking-hero-points">Stacking Hero Points</h2>
        <p>
          For even more heroic games or easier ones, the GM can let heroes stack
          hero points up to a maximum of 3. Heroes still only gain 1 hero point
          at the start of a game session, but they can gain more with good rolls
          or save them over multiple game sessions. A clever player can enter a
          pivotal scene with multiple hero points to help sway fate in their
          favor!
        </p>
      </div>
    </div>
  );
}

export default OptionalRules;
