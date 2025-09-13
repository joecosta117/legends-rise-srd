import "./index.scss";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import ToolTip from "../../components/ToolTip";

function EncounterDesign() {
  return (
    <div className="encounter">
      <div className="encounter-content">
        <h1>Building Encounters</h1>
        <p>
          Legends Rise is about heroes battling evil, and an important gameplay
          loop of the game are encounters. On this page, GMs will find rules and
          advice on building encounters for your players. There are two types of
          encounters: <b>combat encounters</b> and <b>skill encounters</b>. Both
          will be covered on this page.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#encounter-points">
              <span>
                <b>Encounter Difficulty </b>
              </span>
            </a>
          </li>
          <li>
            <a href="#combat-encounter">
              <span>
                <b>Combat Encounters</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#combat-encounter-objectives">
              <span>
                <b>Combat Objectives</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#skill-encounter">
              <span>
                <b>Skill Encounters</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="encounter-points">Encounter Difficulty</h2>
        <p>Heroes can face three different difficulties of encounters:</p>
        <ul>
          <li>
            <span>
              <b>Easy Encounters:</b> An easily winnable battle that can serve
              as a reminder that the heroes are badass. For even easier
              challenges, you can still have them, but don't increase the{" "}
              <Link className="internal-link" to="/rules/combat#momentum">
                momentum die
              </Link>{" "}
              from such trivial enounters.
            </span>
          </li>
          <li>
            <span>
              <b>Medium Encounters:</b> A fierce challenge that will tax the
              heroes, but they should succeed barring terrible luck or terrible
              tactics. This is the standard for encounters.
            </span>
          </li>
          <li>
            <span>
              <b>Hard Encounters:</b> A really tough challenge that endangers
              the heroes, but they should prevail with good tactics. This is a
              good standard for boss fights or significant challenge of a story
              arc.
            </span>
          </li>
        </ul>
        <p>
          Heroes can typically handle a maximum of 4 to 6 medium encounters
          between safe rests. Two easy encounters equals a medium encounter, and
          a hard encounter is worth two medium encounters.
        </p>

        {/* <p>
          Each encounter is worth a number of <b>encounter points (EP)</b>,
          which determines the difficulty. Typically 1 EP is equal to one hero.
          The higher number of EPs, the more difficult an encounter.
        </p>
        <h3 className="header">Encounter Difficulties</h3>
        <p>
          There are four difficulties for encounters: easy, medium, hard, and
          insane. Most combats should be medium difficulty, with some being easy
          or hard for thematically appropriate challenges. The number of EPs
          determine the encounter's difficulty, which is also modified by the
          number of heroes. More heroes can handle more difficult challenges.
        </p>
        <h4 className="header">Easy Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes - 1</b>
        <p>
          An easily winnable battle that can serve as a reminder that the heroes
          are badass. A classic example is the party fighting two groups of
          minions led by a standard enemy support. For even easier challenges,
          you can still have them, but don't increase the{" "}
          <Link className="internal-link" to="/rules/combat#momentum">
            momentum die
          </Link>{" "}
          from such trivial enounters.
        </p>
        <h4 className="header">Medium Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes</b>
        <p>
          A fierce challenge that will tax the heroes, but they should succeed
          barring terrible luck or terrible tactics. This is the standard for
          encounters.
        </p>
        <h4 className="header">Hard Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes + 1</b>
        <p>
          A really tough challenge that endangers the heroes, but they should
          prevail with good tactics. This is a good standard for boss fights or
          significant challenge of a story arc.
        </p>
        <h4 className="header">Insane Encounter</h4>
        <b className="encounter-content__subtitle">EP = Number of Heroes + 2</b>
        <p>
          These incredibly dificult challenges can easily lead to the defeat of
          all your heroes, and should be rarely used, such as the final boss at
          the end of a campaign. Avoid insane encounters for tier 1 heroes as
          only higher tier heroes have enough tools to survive such a harrowing
          challenge.
        </p>

        <h3 className="header">Adventuring Day</h3>
        <p>
          Since all heroic resources (encounter abilities and mana) recover on a
          short rest, the only long rest limits to heroes are wounds and
          recoveries. Therefore, heroes can face any number of encounters per
          long rest as long as they have recoveries and few enough wounds.
          Typically, heroes can handle a maximum number of encounters per long
          rest with a total EP amount equal to three times the number of heroes,
          give or take. Usually this means a maximum of 3 medium encounters per
          long rest.
        </p>
        <p>
          For example, for four heroes, they can handle at most 12 EP (give or
          take) per long rest. This can mean:
        </p>
        <ul>
          <li>
            <span>3 medium encounters</span>
          </li>
          <li>
            <span>4 easy encounters</span>
          </li>
          <li>
            <span>2 medium encounters and 1 hard encounter</span>
          </li>
          <li>
            <span>1 easy encounter and 2 hard encounters</span>
          </li>
        </ul> */}

        <h2 id="combat-encounter">Combat Encounters</h2>
        <p>
          When heroes need to fight monsters with weapons and magic, it's time
          for a combat encounter. This is the most common type of encounter in
          Legends Rise. Combat encounter difficulty is determined by the number
          of <b>adversaries</b>:
        </p>
        <ul>
          <li>
            <span>
              <b>Easy Encounter:</b> An easy encounter has less adversaries than
              the number of heroes, but not less than half.
            </span>
          </li>
          <li>
            <span>
              <b>Medium Encounter:</b> A medium encounter has an equal number of
              adversaries to the heroes.
            </span>
          </li>
          <li>
            <span>
              <b>Hard Encounter:</b> A hard encounter has more adversaries than
              the heroes, but no more than double the number of heroes. For a
              climatic battle that ends an arc or campaign, you can possibly
              create an even harder encounters such as a boss monster with an
              extra monster or two.
            </span>
          </li>
        </ul>
        <h3 className="header">Adversary Threat Level</h3>
        <p>
          A standard monster or hazard equals one adversary, so a medium
          encounter for four heroes is four standard monsters.
        </p>
        <h4 className="header">Minion Threats</h4>
        <p>
          Minion foes easily dispatched by the heroes, such as stormtroopers in
          Star Wars. Only monsters can be minions. Minions come in groups, with
          the number of minions depending on the heroes' tier:
          <ul style={{ marginTop: "0" }}>
            <li>
              <span>
                <b>Tier 1:</b> 4 minions equal one adversary
              </span>
            </li>
            <li>
              <span>
                <b>Tier 2:</b> 5 minions equal one adversary
              </span>
            </li>
            <li>
              <span>
                <b>Tier 3:</b> 6 minions equal one adversary
              </span>
            </li>
          </ul>
          <Accordion
            title="Minion Rules"
            content={
              <div>
                <p>
                  Minions follow different rules from regular monsters. Minions
                  of the same type are part of a <b>minion group</b>.
                </p>
                <h3 className="header">One Turn, One Act</h3>
                <p>
                  All minions of a minion group act on the same turn in combat.
                  On a minion's turn, they can use a maneuver or action, but not
                  both.
                </p>
                <h3 className="header">Easy to Kill</h3>
                <p>
                  When a minion takes damage, if the damage is less than the
                  minion’s maximum hit points, then the minion becomes{" "}
                  <ToolTip preset="shaken" />. If the minion is already shaken,
                  then any damage kills it.
                </p>

                <h3 className="header">Overkill</h3>
                <p>
                  When a minion dies from an ability that targets only it with
                  an attack roll, any leftover damage beyond the minion’s
                  remaining hit points is applied to another minion of the same
                  group within the same zone. If the leftover damage is enough
                  to kill the second minion, then any remaining damage is
                  carried over to a third minion, and so on!
                </p>

                <h3 className="header">Group Attack</h3>
                <p>
                  Minions within the same group and zone can{" "}
                  <Link className="internal-link" to="/combat-abilities#strike">
                    strike
                  </Link>{" "}
                  the same target using one{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>
                  . Multiply the strike’s base damage by the number of attacking
                  minions.
                </p>
                <p>
                  For GMs, in order to speed up your turn, either have all
                  minions in one group focus the same hero, or split the minions
                  to focus two different heroes. One or two attack rolls is
                  always quicker than four to six attack rolls! You can also
                  have players optionally roll one attack roll against a group
                  of minions to also speed up time as well.
                </p>
              </div>
            }
          />
        </p>

        <h4 className="header">Minor Threats</h4>
        <b className="encounter-content__subtitle">½ Adversary</b>
        <p>
          Minor monsters and hazards are weaker than standard threats, but
          stronger than minions. Since minors are weaker, always use two minors
          to equal one adversary. A group of two minor threats act on the same
          turn in combat.
        </p>

        <h4 className="header">Major Threats</h4>
        <b className="encounter-content__subtitle">2 Adversaries</b>
        <p>
          Major monsters and hazards are stronger than standard threats, but
          weaker than bosses. Major threats always get two turns per round, but
          can't take these turns in a row. On attack rolls, they deal half
          damage even on a failure.
        </p>
        <h4 className="header">Boss Threats</h4>
        <b className="encounter-content__subtitle">6 Adversaries</b>
        <p>
          Boss threats are the strongest monster heroes can face. Only monsters
          can be bosses. Like major monsters, boss monsters get two turns per
          round, but can't take these turns in a row. On attack rolls, they deal
          half damage even on a failure. Boss monsters are meant to be a hard
          encounter for a group of heroes.
        </p>
        <Accordion
          title="Bosses for Different Sized Parties"
          content={
            <div>
              <p>
                Boss monsters are meant to be a solo threat for a group of 4-5
                heroes, and provide a hard encounter. However, for smaller or
                larger groups of heroes, you can make some adjustments.
              </p>
              <h3 className="header">Smaller Number of Heroes</h3>
              <p>
                If you have 3 heroes, then remove a fourth of the boss's hit
                points. For 2 heroes, instead remove half the boss's hit points.
              </p>
              <h3 className="header">Larger Number of Heroes</h3>
              <p>
                If you have 6-7 heroes, then add the boss's hit points by a
                third, and give it a third turn per round. For 8 or more heroes,
                double the boss's hit points and give it a fourth turn.
                Alternatively, for larger groups of heroes, keep the boss
                monster as is, and instead add lackeys to the fight like a group
                of minions or two.
              </p>
            </div>
          }
        />

        <h3 className="header">Different Tier Threats</h3>
        <p>
          The above guidelines per threat assumes the heroes are facing monsters
          and hazards of their tier. In general, you should only use monsters
          and hazards of the same tier as the heroes. Otherwise, the encounter
          builder rules won't work. This is because heroes have a huge advantage
          against lower tier threats, but are hugely disadvantaged against
          higher tier threats.
        </p>

        <h3 className="header">Monster Roles</h3>
        <p>
          Each monster has a threat level, but also a <b>role</b>, which is
          similar to hero classes. Roles are broard enemy archetypes that help
          the GM use the monsters more strategically. There are six monster
          roles:
        </p>
        <ul>
          <li>
            <span>
              <b>Artillery: </b> These monsters are ranged combatants that deal
              reliable damage from afar but are weak in melee range. Archers and
              battle mages are good examples of artillery.
            </span>
          </li>
          <li>
            <span>
              <b>Bruiser: </b> These monsters are tough creatures that deal high
              melee damage. Giants and giant worms are good examples of
              bruisers.
            </span>
          </li>
          <li>
            <span>
              <b>Disabler: </b> These monsters focus on debilitating the heroes
              with negative effects. They focus less on damage, and more on
              making the heroes less effective. Venemous spiders and medusas are
              good example of disablers.
            </span>
          </li>
          <li>
            <span>
              <b>Skirmisher: </b> These monsters are mobile foes that prioritize
              weak or unsuspecting targets. Skirmishers deal high damage and
              usually have mobility abilities. Assassins and shadows are good
              examples of skirmishers.
            </span>
          </li>
          <li>
            <span>
              <b>Support: </b> These monsters have abilities to aid their
              allies. Supports usually have an aura and abilities to buff their
              allies. Evil priests or warlord commanders are good examples of
              supports.
            </span>
          </li>
          <li>
            <span>
              <b>Tank: </b> These monsters are hard to hit creatures often with
              ways to disrupt the heroes and protect other enemies. Heavily
              armored knights or defensive golems are examples of tanks.
            </span>
          </li>
        </ul>
        <h4 className="header">Using Roles to Build Encounters</h4>
        <p>
          It is best to mix and match monsters with different roles when
          building encounters. This creates more tactically interesting combats.
          For example, you could have four bruisers face four heroes for a tough
          fight, but the strategy to defeat each monster is the same. A more
          exciting encounter might be a bruiser to deal high damage, a tank to
          work alongside the bruiser to draw the heroes' attention, a disabler
          to debilitate the heroes, and an artillery to deal high damage from
          afar. Now the heroes have to deal with the frontline bruiser and tank,
          while also struggling against the more ranged disabler and artillery.
        </p>
        <h4 className="header">Minion Roles</h4>
        <p>
          Minion monsters are the only monsters without a role. Minions are very
          simple to keep their turns quick as they are many of them at
          once.{" "}
        </p>

        <h2 id="combat-encounter-objectives">Combat Objectives</h2>
        <p>
          Not every battle should end with every enemy lying dead. In Legends
          Rise, combat encounters are more exciting and memorable when they
          serve a larger purpose. Giving fights a clear objective that players
          know from the outset, helps keep the pacing sharp, creates tactical
          variety, and reinforces story stakes. When designing encounters,
          consider what the heroes are trying to achieve beyond just survival.
        </p>
        <p>
          Letting players know the objective at the start helps them strategize,
          use their abilities with purpose, and engage with the fiction. Once
          the objective is completed, end the encounter, even if enemies remain.
          A retreating force, a crumbling dungeon, or a sudden shift in the
          battlefield can all justify moving on. Not every fight should be a
          slugfest, and the most memorable combats are often the ones where
          killing wasn’t the point.
        </p>
        <p>
          Below are several objective types you can use to keep combat fresh and
          meaningful:
        </p>
        <Accordion
          title="Defeat All Enemies"
          content={
            <div>
              <p>
                The classic objective: defeat every enemy on the battlefield.
                This works well when the enemy is personally invested in the
                fight, the stakes are clear, and both sides are committed to
                total victory. For example, the heroes are ambushed by assassins
                sent to eliminate them and must slay every attacker to survive.
              </p>
            </div>
          }
        />
        <Accordion
          title="Reduce Their Numbers"
          content={
            <div>
              <p>
                Sometimes, the goal isn’t complete extermination but turning the
                tide. You can end the encounter early when all non-minion
                enemies are defeated, less than half the enemy force remains, or
                when the heroes now outnumber the foes (especially if they
                started outnumbered). This allows for satisfying victories
                without grinding down minor enemies. For example, a skirmish
                with a roving warband ends once the war leader and her champions
                are defeated, causing the remaining minion troops to scatter.
              </p>
            </div>
          }
        />
        <Accordion
          title="Defeat a Specific Foe"
          content={
            <div>
              <p>
                Targeted elimination puts the focus on one powerful enemy. Once
                that key target falls, the rest may surrender, flee, or no
                longer matter. This objective works well in boss fights or
                battles against leaders whose forces lose morale when their
                commander dies. For example, the heroes must take down a
                necromancer raising the dead, and once he's gone, the undead
                collapse.
              </p>
            </div>
          }
        />
        <Accordion
          title="Retrieve Something"
          content={
            <div>
              <p>
                This objective involves reaching and securing a specific item or
                resource, either in the middle of a chaotic battlefield or
                behind enemy lines. Make sure the players know what they’re
                after and where it is. For example, a rogue steals a powerful
                relic mid-fight and attempts to escape while their allies delay
                the party. The heroes must retrieve the relic before it’s lost.
              </p>
            </div>
          }
        />
        <Accordion
          title="Destroy or Stop Something"
          content={
            <div>
              <p>
                Sometimes the goal is to break or disable something vital: a
                summoning circle, a war machine, a power crystal, or a cursed
                artifact. These objectives often involve a countdown as multiple
                rolls are needed to complete the objective in addition to
                fighting enemies. For example, during a ritual to awaken a
                slumbering god, the heroes must destroy the four eldritch sigils
                (d4 countdown) before the final verse is sung.
              </p>
            </div>
          }
        />
        <Accordion
          title="Protect or Save Something"
          content={
            <div>
              <p>
                This type flips the usual script: the players are on the
                defensive. Their job is to keep someone or something alive or
                intact. This works great for escort missions, hostage rescues,
                or guarding fragile objectives. For example, the heroes must
                defend an ancient tree from cultists seeking to corrupt the
                forest's heart with a negative countdown representing how close
                the cultists are to victory. If the heroes defeat the cultists
                before the culitists decrease the countdown to 0, then the tree
                is saved.
              </p>
            </div>
          }
        />
        <Accordion
          title="Hold Them Off"
          content={
            <div>
              <p>
                This objective introduces a time limit usually in the form of a
                countdown. The players aren’t meant to win by force, just
                survive or delay the enemy long enough. After each round,
                deincrement the countdown die to signal when the objective is
                complete. For example, the heroes must hold the gates for a d6
                countdown until the townspeople can evacuate and the mages seal
                the portal.
              </p>
            </div>
          }
        />

        <h2 id="skill-encounter">Skill Encounters</h2>
        <p>
          Not all encounters are fights. Skill encounters are challenges that
          require a group effort but aren't resolved by combat. Skill encounters
          utilize{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          along with other out of combat abilities such as theme talents. A
          skill encounter could be flying an airship through a magical storm or
          a chase scene through a bustling city.
        </p>
        <h3 className="header">Countdowns</h3>
        <p>
          Skill encounters utilize{" "}
          <Link
            className="internal-link"
            to="/rules/skills#progress-countdowns"
          >
            positive countdowns
          </Link>{" "}
          to mark the progress of the skill encounter. The encounter's
          difficulty is determined by the countdown die:
        </p>
        <ul>
          <li>
            <span>
              <b>Easy Encounter:</b> Countdown die size is equal to half the
              number of heroes.
            </span>
          </li>
          <li>
            <span>
              <b>Medium Encounter:</b> Countdown die size is equal to number of
              heroes.
            </span>
          </li>
          <li>
            <span>
              <b>Hard Encounter:</b> Countdown die size is equal to the number
              of heroes multiplied by 1.5, but no more than doubled. So for four
              heroes, the countdown die is a d6, or a d8 for extremely hard
              encounters.
            </span>
          </li>
        </ul>

        <h4 className="header">Consequences</h4>
        <p>
          During skill encounters, the consequences on a failure or partial
          success skill roll should be significant. Taking damage is the
          standard consequence during a skill encounter with two types:
        </p>
        <ul>
          <li>
            <span>
              <b>
                The hero that got the consequence takes damage equal to double
                their proficiency bonus
              </b>
              . For example, a hero tries to close a magic portal to hell, but
              hellfire lashes out of the portal at the hero as they fail.
            </span>
          </li>
          <li>
            <span>
              <b>All heroes take damage equal to their proficiency bonus</b>.
              For example, a hero tries to steer a ship through a storm, but a
              giant wave smashes into the ship, which hurts everyone.
            </span>
          </li>
        </ul>
        <p>
          From a meta perspective, the consequence of skill encounters is
          usually damage or something as signifcant due to skill encounters
          boosting the heroes'{" "}
          <Link className="internal-link" to="/rules/combat#momentum">
            momentum die
          </Link>
          . If the consequences aren't impactful, then heroes can easily do many
          skill encounters without much risk and max out the momentum die.
          However, if some heroes take enough damage during a skill encounter,
          they will have to spend recoveries, which limits their how much more
          they can press on for the day.
        </p>

        {/* TODO: Add lancer like sitreps here
        <h2 id="encounter-situations">Encounter Situations</h2>
        <p>PUt lancer type of sit reps</p> */}
      </div>
    </div>
  );
}

export default EncounterDesign;
