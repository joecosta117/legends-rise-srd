import "./index.scss";
import RulesHeader from "../../components/RulesHeader";
import Modifier from "../../components/Modifier";
import Accordion from "../../components/Accordion";
import scrollToHash from "../../utils/scrollToHash";
import { Link } from "react-router-dom";

function CombatRules() {
  scrollToHash();

  return (
    <div className="general">
      <div className="general-content">
        <RulesHeader />
        <h1>Combat Rules</h1>
        <p>
          When heroes engage monsters and villains in a narratively significant
          combat, follow these rules. For minor squabbles, instead rely on skill
          rolls such as utilizing a progress countdown.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#organization">
              <span>
                <b>Combat Organization</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#zones">
              <span>
                <b>Zones</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#attack-roll">
              <span>
                <b>Attack Rolls</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#hp-damage">
              <span>
                <b>Hit Points and Damage</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#dying">
              <span>
                <b>Defeat and Dying</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#momentum">
              <span>
                <b>Momentum Die</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#size">
              <span>
                <b>Creature Sizes</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#stealth">
              <span>
                <b>Concealment, Cover, and Stealth</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#mounted">
              <span>
                <b>Mounted Combat</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#underwater">
              <span>
                <b>Underwater Combat</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="organization">Combat Organization</h2>
        <p>
          Combats are organized in <b>rounds</b> and <b>turns</b>. Each creature
          in combat gets one turn per round. A round lasts six seconds long, so
          ten rounds equals one minute. You can expect most combats to last
          three to four rounds, with easier combats being shorter and more
          difficult encounters lasting longer.
        </p>
        <h3 className="header">Turns</h3>
        <p>
          Each player and enemy gets a turn during each round of combat. On your
          turn, you can use two maneuvers, or one maneuver and one action. You
          also always can use a reaction per round.{" "}
        </p>
        <h3 className="header">Steps in Combat</h3>
        <p>Here is the flow of every combat.</p>
        <ol>
          <li>
            <span>
              <b>Determine Surprise:</b> The GM determines whether anyone starts
              the combat surprised. Aware creatures gain{" "}
              <Modifier type="f" count="1" /> to attack rolls against surprised
              creatures in the first round.
            </span>
          </li>
          <li>
            <span>
              <b>Establish Positions and Round:</b> The GM decides the location
              of the heroes and enemies at the start of combat.
            </span>
          </li>
          <li>
            <span>
              <b>First Player Goes:</b> The players decide amongst one another
              which one of them will take the first turn.
            </span>
          </li>
          <li>
            <span>
              <b>Enemy Goes Next:</b> The GM decides which enemy will then take
              their turn.
            </span>
          </li>
          <li>
            <span>
              <b>Second Player Goes:</b> Once again, the players decide who will
              take the next turn as long as no one repeats a turn within the
              same round.
            </span>
          </li>
          <li>
            <span>
              <b>Second Enemy Next:</b> The GM again decides which enemy takes
              the next turn as long as the enemy didn’t already take a turn this
              round.
            </span>
          </li>
          <li>
            <span>
              <b>Repeat:</b> After the second enemy, the turn order goes back
              and forth between the heroes and the enemies until everyone has
              taken a turn.
            </span>
          </li>
          <li>
            <span>
              <b>Begin the Next Round:</b> When everyone has had a turn, the
              round ends. Repeat steps 3-8 until the fighting ends!
            </span>
          </li>
        </ol>

        <h2 id="zones">Zones</h2>
        <p>
          The battlefield is divided into zones. Zones can have certain traits
          like difficult, dangerous, and others that affect anyone within the
          zone.
        </p>
        <h3 className="header">Positioning</h3>
        <p>
          Instead of counting squares on a grid, zones provide abstract
          positioning. When you and an enemy share a zone, you’re both close to
          each other (within 10 to 20 feet). If someone is in a nearby zone,
          then they’re close enough to run up to them in a turn.
        </p>
        <h4 className="header">Engaged</h4>
        <p>
          If you are close enough to a creature to hit them with a sword, then
          you’re <b>engaged</b> to them. If you’re using miniatures or tokens on
          a battle map, engaged can be represented by two miniatures touching.
          While a creature is engaged by two or more enemies, it is{" "}
          <Link className="internal-link" to="/conditions#exposed">
            exposed
          </Link>
          .
        </p>
        <h3 className="header">Zone Border</h3>
        <p>
          Normally the edges of zones are abstract, but certain mechanics
          reference a zone’s border.
        </p>
        <h3 className="header">Moving With Zones</h3>
        <p>
          When you use the Move maneuver, you can stride anywhere within your
          zone or up to a number of zones equal to your speed. Most heroes and
          monsters have a speed of 1, so they can Move up to an adjacent zone.
          There are other types of speeds too:
        </p>
        <ul>
          <li>
            <span>
              <b>Burrow:</b> You can move through the ground. Only a creature
              with a burrow speed can do this quickly enough.
            </span>
          </li>
          <li>
            <span>
              <b>Climb:</b> You climb vertical surfaces easily, which is treated
              as a difficult zone unless you have a climb speed. A GM might
              require a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              to climb if you lack reasonable means of ascending or descending,
              such as a ladder, rope, or handholds.
            </span>
          </li>
          <li>
            <span>
              <b>Fly:</b> You can fly through the air through wings or magic.
              Only creatures with a fly speed can fly.
            </span>
          </li>
          <li>
            <span>
              <b>Swim:</b> You move through the water easily, which is treated
              as a difficult zone unless you have a swim speed. A GM might
              require a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              to move if the waters are particularly rough.
            </span>
          </li>
        </ul>
        <h4 className="header">Speed 0</h4>
        <p>
          If your speed ever becomes 0, then you can only Move within your zone,
          or to an adjacent zone if you’re at a zone’s border. You can’t
          Disengage while your speed is 0. If you’re in a difficult zone, then
          you can’t Move at all.
        </p>
        <h4 className="header">Special Types of Movement</h4>
        <p>
          Some abilities or features can grant you special types of movement.
        </p>
        <ul>
          <li>
            <span>
              <b>Forced Movement:</b> When you are shoved or pulled by another
              force, this movement doesn’t trigger reactions. When forcibly
              moved, if the effect specifies within a zone, then you can be
              moved to an adjacent zone if you’re already at the zone’s border.
            </span>
          </li>
          <li>
            <span>
              <b>Phasing:</b> Your form is less substantial. You can stride
              freely through obstacles, and you ignore difficult zones and
              impassable zones.
            </span>
          </li>
          <li>
            <span>
              <b>Teleportation:</b> You can disappear and reappear in an
              unoccupied location, ignoring any obstacles without triggering
              reactions. Unless otherwise specified, teleportation follows these
              rules:
            </span>
            <ul style={{ marginTop: "0", marginLeft: "10px" }}>
              <li>
                <span>You need to see your destination to teleport.</span>
              </li>
              <li>
                <span>
                  If you are prone, then you are still prone after teleporting.
                </span>
              </li>
              <li>
                <span>
                  If a creature is teleported against their will to a
                  destination that would cause them to fall, they can succeed on
                  an{" "}
                  <Link className="internal-link" to="/rules/combat#overcome">
                    overcome roll
                  </Link>{" "}
                  for the teleportation to fail.
                </span>
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="header">Types of Zones</h3>
        <p>
          There are different types of zones that affect anyone within them.
        </p>
        <ul>
          <li>
            <span>
              <b>Dangerous Zone:</b> If a zone is dangerous, magic or natural
              obstacles make it harmful to be in the area. When you first enter
              or start your turn within a dangerous zone, you take the specified
              damage.
            </span>
          </li>
          <li>
            <span>
              <b>Defensive Zone:</b> These zones typically have an abundance of
              cover such as a graveyard with tall tombs, foggy terrain, or many
              stalagmites in a cave. Creatures within the defensive zone have
              cover against creatures outside of the zone.
            </span>
          </li>
          <li>
            <span>
              <b>Difficult Zone:</b> If a zone is difficult, magic or natural
              obstacles make it hard to easily move through the area. Difficult
              zones count as two zones for the purpose of moving through them.
              If your speed is 1, then when you Move to enter or exit a
              difficult zone, you only get to the border of the zone, and next
              time you Move, you can fully enter or exit the zone. You also
              can’t crawl or Disengage inside a difficult zone.
            </span>
          </li>
          <li>
            <span>
              <b>Elevated Zone:</b> The zone is either higher or lower than
              surrounding zones. If you’re in a lower zone, then you take{" "}
              <Modifier type="mf" count="1" /> to attack rolls from a range
              ability against targets on higher ground. If you’re in a higher
              zone, then you gain <Modifier type="f" count="1" /> to attack
              rolls from range abilities against targets on lower ground.
            </span>
          </li>
          <li>
            <span>
              <b>Impassable Zone:</b> These zones are impossible to cross either
              from a large tower, wall, or other obstacle blocking movement. You
              can’t stride through this zone.
            </span>
          </li>
        </ul>

        <h2 id="attack-roll">Attack Rolls</h2>
        <b style={{ textAlign: "left" }}>
          1d20 + proficiency bonus vs specific defense
        </b>
        <p>
          During combat, when you use a hostile ability or ability contested by
          another, such as attacking with a weapon or shooting a fireball, you
          make an attack roll. When a feature calls for an attack roll, it
          specifies the defense being targeted.
        </p>
        <h3 className="header">Resolving an Attack Roll</h3>
        <p>
          Compare your attack roll to the target’s specified defense. Abilities
          often have other effects that happen on certain degrees of success. If
          the ability deals damage, then the degrees of success are always the
          same:
        </p>
        <ul>
          <li>
            <span>
              <b>Critical Success:</b> Same as a success, and you deal
              additional damage equal to your proficiency bonus.
            </span>
          </li>
          <li>
            <span>
              <b>Success:</b> You deal full damage from your ability.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> You graze the target, dealing half damage.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            Same as a partial success.
          </li>
        </ul>
        <h4 className="header">No Whiffs</h4>
        <p>
          Unlike{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>
          , attack rolls treat partial successes and failures as the same.
          Legends Rise is a heroic game, where heroes are assumed to be highly
          competent and enemies deadly. This keeps combat's tension always on
          and deadly.
        </p>
        <p>
          From a meta perspective, missing isn't fun for anyone, especially
          after waiting for your turn. For abilities with attack rolls, you can
          assume any effect on a partial success also happens on a failure,
          unless otherwise specified. For example, if an arcanist gets a failure
          on their terrify spell, then the target is still hindered (turn ends),
          which is the partial success effect.
        </p>
        <h3 className="header">Weapon Attacks</h3>
        <p>
          Normally, you add your proficiency bonus to attack rolls, including
          with weapons. However, if you aren’t trained in a weapon you’re using,
          then you don’t add your proficiency bonus to the attack roll. The
          exception is natural melee weapons, which everyone is trained in.{" "}
        </p>
        <h3 className="header">Non Lethal Attacks</h3>
        <p>
          You can make an attack roll at a foe with intent to knock them out
          instead of killing them. You take <Modifier type="mf" count="1" /> to
          your attack roll. If you deal enough damage to reduce your target to 0
          hit points, they are knocked out of the fight instead of killed.
        </p>
        <h3 className="header">Targeting Multiple Creatures</h3>
        <p>
          If an ability targets multiple creatures, then you make an attack roll
          against each target. If you have a penalty to an ability, then you
          apply that penalty to each attack roll when targeting multiple
          creatures. For example, an arcanist uses countermagic against an enemy
          cultist’s corrupting wave ability. The cultist takes{" "}
          <Modifier type="mf" count="1" /> to each attack roll they make for
          corrupting wave.
        </p>

        <h2 id="hp-damage">Hit Points and Damage</h2>
        <p>
          Every creature has hit points, which represents their stamina and
          health to stay in the fight. When you take damage, subtract it from
          your current hit points.
        </p>
        <h3 className="header">Damage Types</h3>
        <p>
          There are different damage types, depending on the source of the
          damage. The damage type doesn’t affect the amount of damage, but
          certain damage types might trigger features. Natural damage types are
          elemental. Mystical damage types often come from magical effects.
        </p>
        <ul>
          <li>
            <span>
              <b>Mystical:</b> arcane, holy, mental, necrotic, and unholy
            </span>
          </li>
          <li>
            <span>
              <b>Natural:</b> cold, fire, lightning, physical, and toxic
            </span>
          </li>
        </ul>
        <Accordion
          title="Damage Types in Detail"
          content={
            <div>
              <p>
                <b>Arcane:</b> Raw, magical damage that blasts apart your very
                essence.
              </p>
              <p>
                <b>Cold:</b> Freezing damage from ice or snow.
              </p>
              <p>
                <b>Holy:</b> Sacred energy from the gods that scorches the soul.
                Divine energy can look different depending on the source.
                Channeling holy energy from a fire god might appear as holy
                flames while holy energy of the storm god might appear as sacred
                lightning.
              </p>
              <p>
                <b>Fire:</b> Heat and burning damage from flames.
              </p>
              <p>
                <b>Lightning:</b> Electrical damage that shocks.
              </p>
              <p>
                <b>Mental:</b> Psychic damage that harms the mind.
              </p>
              <p>
                <b>Necrotic:</b> Magical death energy that decays and damages
                your essence.
              </p>
              <p>
                <b>Physical:</b> Damage from weapons, a fist, rocks, wind,
                thunderous boom, or other natural hazards.
              </p>
              <p>
                <b>Toxic:</b> Harmful chemicals or gas that can be caustic or
                hindering.
              </p>
              <p>
                <b>Unholy:</b> The opposite of holy damage, unholy is profane
                energy that corrupts the soul. Similar to holy damage, unholy
                energy can appear differently depending on the source.
              </p>
            </div>
          }
        />
        <h3 className="header">Ongoing Damage</h3>
        <p>
          When you make a foe suffer a bleeding wound or set them ablaze, you
          are dealing ongoing damage. Instead of taking that damage immediately,
          creatures take ongoing damage at the end of each of their turns. After
          taking the damage, the creature makes an{" "}
          <Link className="internal-link" to="/rules/combat#overcome">
            overcome roll
          </Link>{" "}
          to end the effect on a success.
        </p>
        <h4 className="header">Multiple Ongoing Damage Effects</h4>
        <p>
          You can suffer ongoing damage from more than one source. Each instance
          of ongoing damage from a different damage type requires its own
          <Link className="internal-link" to="/rules/combat#overcome">
            overcome roll
          </Link>{" "}
          to end. Ongoing damage of the same damage type doesn't stack, and you
          only suffer the damage from the highest damaging effect.
        </p>
        <p>
          For example, you take ongoing necrotic damage, but you are already
          taking ongoing fire damage. At the start of your turns, you take
          damage from each effect. At the end of your turns, you make a separate
          overcome roll against each ongoing effect.
        </p>
        <h3 className="header">Resistances and Weaknesses</h3>
        <p>
          When a creature has resistance to a damage type, then any damage taken
          from the specified type is reduced by a specified number. For example,
          if a dragon has fire resistance 2, and they take 3 fire damage, their
          resistance reduces the damage to 1.
        </p>
        <p>
          When a creature has weakness to a damage type, then any damage taken
          from the specified type is increased by a specified number. For
          example, if a demon has holy weakness 2, and they take 3 holy damage,
          their weakness increases the damage to 5.
        </p>
        <p>
          Resistances and weaknesses are calculated after damage is reduced by
          other means such as from magic.
        </p>
        <h3 className="header">Shaken</h3>
        <p>
          When your current hit points equals half or less of your maximum hit
          points, then you are <b>shaken</b>. Certain features trigger off your
          hero being shaken or reference your shaken value, which equals half
          your maximum hit points.
        </p>
        <h3 className="header">Healing</h3>
        <p>
          When you regain hit points, you add the hit points regained to your
          current hit points, which is referred to as <b>heal</b> with the
          amount specified. The total can’t exceed your maximum amount of hit
          points, which is your normal hit points without any damage.
        </p>
        <h4 className="header">Temporary Hit Points</h4>
        <p>
          Some features or spells grant you temporary hit points, which aren’t
          actual hit points, but serve as a buffer against future damage. When
          you have temporary hit points and take damage, remove the{" "}
          <b>temporary hit points</b> first, and any leftover damage is taken
          out of your hit points as normal.
        </p>
        <ul>
          <li>
            <span>
              Temporary hit points can exceed your maximum hit points.
            </span>
          </li>
          <li>
            <span>Healing can’t make you regain temporary hit points.</span>
          </li>
          <li>
            <span>
              Resistances reduce damage before reducing temporary hit points.
            </span>
          </li>
          <li>
            <span>
              If you gain temporary hit points while already having temporary
              hit points, the two don’t stack, and you instead gain the higher
              number.
            </span>
          </li>
          <li>
            <span>
              Unless the feature specifies, temporary hit points last until
              after a long rest.
            </span>
          </li>
        </ul>
        <h4 className="header">Recoveries</h4>
        <p>
          Heroes can attempt to pull themselves together during combat or out of
          combat by using <b>recoveries</b>. Each class gives you a certain
          amount of recoveries.
        </p>
        <p>
          You can spend a single recovery by using the Rally action in combat.
          Outside of combat, you can spend any number of recoveries during a
          short rest. When you spend a recovery, you heal equal to your shaken
          value.
        </p>
        <h4 className="header">Regeneration</h4>
        <p>
          Some effects might give you <b>regeneration</b>, which lets you heal
          at the start of your turn equal to the amount stated.
        </p>

        <h2 id="dying">Defeat and Dying</h2>
        <p>
          When your hit points equal 0, you are <b>dying</b>. While dying, you
          take <Modifier type="mf" count="1" /> to attack and skill rolls. You
          are no longer dying if you regain any hit points.
        </p>
        <h3 className="header">Wounds</h3>
        <p>
          At the end of your turn while dying, make an overcomer roll to see if
          you inch closer to death or cling to life. On a failure, you take a{" "}
          <b>wound</b>. If you take damage while dying, you also take a wound,
          or two wounds if the damage came from a critical success. If damage
          from a critical success makes you dying, then you also take a wound.
        </p>
        <p>
          Wounds represent how close your hero is to death after sustaining
          massive injuries. Wounds always reset to 0 after a long rest.
        </p>
        <h3 className="header">Defeat</h3>
        <p>
          If your hero ever accumulates 3 wounds, then you are <b>defeated</b>.
          When this happens you have two options:
        </p>
        <ul>
          <li>
            <span>
              <b>Vanquished:</b> You fall unconscious and are narratively
              removed from the combat, but you don’t die. You can’t heal until
              the combat is over. Once you heal, your wounds are decreased to 2
              but you are hindered until you take a long rest.
            </span>
          </li>
          <li>
            <span>
              <b>Last Stand:</b> You choose to go out in a blaze of glory. You
              immediately can use any ability as narratively appropriate. If the
              ability requires a roll, you automatically get a critical success.
              After your last stand is over, you die.
            </span>
          </li>
        </ul>
        <h3 className="header">NPC Death</h3>
        <p>
          When an enemy drops to 0 hit points, typically the enemy dies
          immediately. However, for special villains or important NPCs, the GM
          can decide for them to follow the same rules as heroes.
        </p>

        <h2 id="overcome">Overcome Rolls</h2>
        <b style={{ textAlign: "left" }}>1d20 vs TN 10</b>
        <p>
          Overcome rolls represent your ability to resist ongoing harmful
          effects, such as poison or escaping a grapple. The TN for overcome
          rolls is always 10, and unlike normal rolls, there are only two
          degrees of success: failure and success. On a success, the effect
          ends, but on a failure, the effect continues. Most ongoing effects
          will specify you can make an overcome roll with “(overcome ends)”
          mentioned at the end.
        </p>

        <h2 id="momentum">Momentum Die</h2>
        <p>
          As the heroes achieve victories, they gain momentum to help push them
          to greater heroics, which is represented by a d4 die called the{" "}
          <b>momentum die</b>. After each victory in a skill encounter, combat
          encounter, or important role playing scenes (determined by the GM),
          the heroes increase the momentum die's value by 1 to a maximum of 4.
          Heroes add the momentum die's value to all rolls. Your momentum die
          always resets to 0 after a long rest.
        </p>
        <p>
          For example, the heroes defeated a small group of demons, increasing
          their momentum die from 0 to 1. In the next battle, the heroes all
          gain +1 to all their rolls. After winning that second battle, their
          momentum increases to 2. The heroes then approach a fearsome demon
          warlord, who although normally evil, is the sworn enemy to the dragons
          the heroes hope to vanquish. Through a negotiation skill encounter,
          the heroes convince the demonic warlord to help their cause,
          increasing their momentum to 3.
        </p>
        <h3 className="header">Bag of Rats Problem</h3>
        <p>
          Cunning players might try to abuse the momentum die by pursuing minor
          threats in an attempt to easily increase the momentum die without
          risk, such as killing a bag of rats. This isn't heroic. The momentum
          die only increases after a heroic victory whether in combat or out of
          combat. Minor victories against challenges that don't pose a threat to
          the heroes don't count.
        </p>

        <h2 id="size">Creature Sizes</h2>
        <p>
          Creatures can have certain sizes which can affect their presence in
          combat.
        </p>
        <ul>
          <li>
            <span>
              Tiny<b>:</b> A creature as tiny as a house cat, small bird, or
              pixie
            </span>
          </li>
          <li>
            <span>
              <b>Small:</b> A creature between 2 to 4 feet tall such as a
              goblin, kobold, or human child.
            </span>
          </li>
          <li>
            <span>
              <b>Medium:</b> A creature between 5 to 8 feet tall such as most
              standard humanoids.
            </span>
          </li>
          <li>
            <span>
              <b>Large:</b> A creature between 9 to 16 feet tall, such as an
              ogre, small giant, or minotaur.
            </span>
          </li>
          <li>
            <span>
              <b>Huge:</b> A creature between 17 to 32 feet tall, such as a
              dragon or giant. Huge creatures are engaged to all creatures
              within their zone.
            </span>
          </li>
          <li>
            <span>
              <b>Colossal:</b> A towering creature bigger than a huge creature.
              Colossal creatures are engaged to all creatures within 1 zone.
            </span>
          </li>
        </ul>

        <h2 id="stealth">Concealment, Cover, and Stealth</h2>
        <p>
          Depending on the battlefield, creatures might try hiding or using the
          terrain to gain cover.
        </p>
        <h3 className="header">Concealment</h3>
        <p>
          A creature obscured by darkness, thick fog, or invisiblity has{" "}
          <b>concealment</b>. Creatures take <Modifier type="mf" count="1" /> on
          rolls that require sight against a concealed target.
        </p>
        <h3 className="header">Cover</h3>
        <p>
          A creature blocked by an obstacle or other people has <b>cover</b>.
          Creatures take <Modifier type="mf" count="1" /> on rolls that require
          sight against a covered target.
        </p>
        <h3 className="header">Stealth</h3>
        <p>
          Sometimes in or out of combat, creatures might attempt to sneak to go
          unnoticed. You can become <b>hidden</b> if you use the Hide maneuver
          while having cover or concealment. While hidden, you can't be targeted
          by hostile abilities, except ones that affect a zone. You also have{" "}
          <Modifier type="f" count="1" /> on rolls against creatures that you
          are hidden from. You become visible if you use a hostile ability, your
          concealment ends, your cover disappears, you stride with sneaking (see
          below), or you are spotted.
        </p>
        <h4 className="header">Sneaking</h4>
        <p>
          While hidden, you can Disengage or Move without avoiding detection if
          reduce your speed by half. You must also end your movement behind
          cover or still concealed.
        </p>
        <h4 className="header">Spotting Hidden Creatures</h4>
        <p>
          A creature can attempt to discover nearby hidden creatures by using a
          maneuver to make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          with the skill tier being the tier of the hidden creature. Once a
          hidden creature is spotted, they are no longer hidden as the spotter
          usually informs their allies of the sneaking enemy.
        </p>

        <h2 id="mount">Mounted Combat</h2>
        <p>
          Sometimes creatures might be in combat while riding a mount, such as a
          horse or even a dragon! Follow the below rules for fighting on a
          mount:
        </p>
        <ul>
          <li>
            <span>
              On your turn, a rider can use a maneuver to command their mount to
              use a maneuver or action. Otherwise the mount doesn’t get a turn.
            </span>
          </li>
          <li>
            <span>
              Any ability that targets only one creature can only target the
              rider or their mount, not both.
            </span>
          </li>
          <li>
            <span>Mounts must be one size larger than the rider.</span>
          </li>
          <li>
            <span>When a mount dies, the rider falls prone.</span>
          </li>
        </ul>

        <h2 id="underwater">Underwater Combat</h2>
        <p>
          When fighting underwater, certain actions are more difficult. If you
          don’t have a swim speed, then you take{" "}
          <Modifier type="mf" count="1" /> on weapon abilities and are slowed.
          Any creature fully immersed in water gains resistance to fire damage
          equal to their tier.
        </p>
        <h3 className="header">Drowning</h3>
        <p>
          A creature can hold their breath for a number of rounds equal to
          double their tier. When a creature runs out of breath, the creature
          drops to 0 hit points at the start of their next turn and begins
          drowning. While drowning, a creature automatically fails dying
          <Link className="internal-link" to="/rules/combat#overcome">
            overcome rolls
          </Link>{" "}
          to avoid getting wounds. The creature can’t heal until they can breath
          again.
        </p>
      </div>
    </div>
  );
}

export default CombatRules;
