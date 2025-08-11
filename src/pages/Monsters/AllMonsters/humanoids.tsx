import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const HumanoidMonsters = [
  {
    name: "Dark Priest",
    tier: "1",
    type: "Humanoid",
    role: "Support",
    threat: "Standard",
    description:
      "Dark priests worship dark deities and other sinister entities, and use their divine power to descrate their foes and suppor their allies.",
    tactics: (
      <span>
        Dark priests prefer to stay from afar. On each turn, a dark priest uses
        unholy blast and dark blessing on an ally.
      </span>
    ),
    statBlock: (
      <Monster
        name="Dark Priest"
        hp="10"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Support"
        actions={[
          {
            basic: true,
            name: "Unholy Blast",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 unholy damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Dark Blessing",
            keywords: "magical, range",
            target: "1 ally within 1 zone",
            effect: (
              <span>
                Target gains 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (scene ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Chanter",
    tier: "1",
    type: "Humanoid",
    role: "Support",
    threat: "Standard",
    description:
      "Chanters use the magic of song to uplift their allies while causing woe to their foes.",
    tactics: (
      <span>
        Chanters prefer to stay from afar. On each turn, a chanter uses hymn of
        discord and uplifting song.
      </span>
    ),
    statBlock: (
      <Monster
        name="Chanter"
        hp="10"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Support"
        actions={[
          {
            basic: true,
            name: "Hymn of Discord",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 psychic damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Uplifting Song",
            keywords: "magical, range",
            target: "1 ally within 1 zone",
            effect: (
              <span>
                Target gains 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (scene ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Fiend Cultist",
    tier: "1",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Fiend cultists channel demonic magic and often serve a fell master in order to learn more magic.",
    tactics: (
      <span>
        Fiend cultists prefer to stay from afar. On each turn, a fiend cultist
        uses diabolical curse and then uses profane ray on the same target.
      </span>
    ),
    statBlock: (
      <Monster
        name="Fiend Cultist"
        hp="10"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Profance Ray",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 unholy damage",
            success: (
              <span>
                If the target is hindered, then they become{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                while hindered
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Diabolical Curse",
            keywords: "magical, range",
            target: "1 creature within 2 zones",
            effect: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Berserker",
    tier: "1",
    type: "Humanoid",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Berserkers channel their rage and aggression in battle to be fearsome foes.",
    tactics: (
      <span>
        Berserkers prefer to get close to the heroes. On each turn, a berserker
        uses{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver, then use greataxe.
      </span>
    ),
    statBlock: (
      <Monster
        name="Berserker"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Bruiser"
        traits={[
          {
            name: "Rage",
            description: (
              <span>
                When the berserker is <ToolTip preset="shaken" />, they gain{" "}
                <Modifier type="f" count="1" /> to attack rolls
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Greataxe",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "4 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Knight",
    tier: "1",
    type: "Humanoid",
    role: "Tank",
    threat: "Standard",
    description:
      "Knights are tough combatants that defend others from harm. Knights usually serve as elite guards of rulers.",
    tactics: (
      <span>
        Knights prefer to stay near their allies so they can use knightly
        punishment. On each turn, a knight uses{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#defend">
          defend
        </Link>{" "}
        as a maneuver, then use sword.
      </span>
    ),
    statBlock: (
      <Monster
        name="Knight"
        hp="12"
        evn="15"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Tank"
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "Knightly Punishment",
            trigger:
              "The knight sees a creature within its zone make an attack roll against a knight's ally",
            effect: (
              <span>
                The knight can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                then use sword against the triggering creature
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Mage",
    tier: "1",
    type: "Humanoid",
    role: "Artillery",
    threat: "Standard",
    description:
      "Mages have learned the basics of arcane magic to use against their foes.",
    tactics: (
      <span>
        Mages prefer to stay from afar. On each turn, a mage uses{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then arcane bolt or arcane burst if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Mage"
        hp="8"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Artillery"
        actions={[
          {
            basic: true,
            name: "Arcane Bolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "3 arcane damage",
          },
          {
            basic: false,
            name: "Arcane Burst",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "4 arcane damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Assassin",
    tier: "1",
    type: "Humanoid",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Assassins are deadly and nimble warriors that prefer to strike from the shadows.",
    tactics: (
      <span>
        On each turn, at range, an assassin uses crossbow then cunning movement
        to find{" "}
        <Link className="internal-link" to="/rules/combat#stealth">
          cover
        </Link>{" "}
        then{" "}
        <Link className="internal-link" to="/combat-abilities#hide">
          hide
        </Link>
        . If near the heroes, an assassin instead uses cunning movement to get
        close, uses blade, then{" "}
        <Link className="internal-link" to="/combat-abilities#move">
          move
        </Link>{" "}
        to escape.
      </span>
    ),
    statBlock: (
      <Monster
        name="Assassin"
        hp="10"
        evn="13"
        mgt="11"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        traits={[
          {
            name: "Cunning Movement",
            description: (
              <span>
                When the assassin uses crossbow or blade, it can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                before or after the attack roll.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Hunter",
    tier: "1",
    type: "Humanoid",
    role: "Artillery",
    threat: "Standard",
    description:
      "Hunters stalk their foes from afar, focusing one prey at a time.",
    tactics: (
      <span>
        Hunters prefer to fight from afar. On each turn, at range, a hunter uses
        mark foe or{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        if they already used mark foe, then attacks with bow.
      </span>
    ),
    statBlock: (
      <Monster
        name="Hunter"
        hp="8"
        evn="13"
        mgt="11"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Artillery"
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Longbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Mark Foe",
            keywords: "range",
            target: "1 creature within 2 zones",
            duration: "Scene ends",
            effect:
              "The hunter gains +1 fortune on attack rolls against the target",
          },
        ]}
      />
    ),
  },
  {
    name: "Templar",
    tier: "1",
    type: "Humanoid",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Templars are fighters divinely empowered by their gods to hunt down their faith's foes.",
    tactics: (
      <span>
        Templars prefer to fight near heroes. On each turn, a templar uses
        smite, then uses{" "}
        <Link className="internal-link" to="/combat-abilities#charge">
          charge
        </Link>{" "}
        to get close or if already close, then uses sword.
      </span>
    ),
    statBlock: (
      <Monster
        name="Templar"
        hp="12"
        evn="12"
        mgt="15"
        res="12"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Bruiser"
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Longbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Smite",
            keywords: "magical",
            duration: "Current turn ends",
            effect:
              "The templar's weapons deal an extra 1 holy or unholy damage (your choice).",
          },
        ]}
      />
    ),
  },
  {
    name: "Naturalist",
    tier: "1",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Naturalists are people magically attuned to nature, and turn nature's wrath against others.",
    tactics: (
      <span>
        Naturalists prefer to fight from afar. On each turn, a naturalist uses
        grasping vine and difficult terrain.
      </span>
    ),
    statBlock: (
      <Monster
        name="Naturalist"
        hp="10"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Grasping Vine",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Difficult Terrain",
            keywords: "magical, range",
            target: "1 zone within 2 zones",
            effect: (
              <span>
                Targete zone becomes{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                until the start of the naturalist's next turn.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Thug",
    tier: "1",
    type: "Humanoid",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Thugs are ruffians, pirates, gang members that prefer violence as the best solution to any problem.",
    tactics: (
      <span>
        Thugs prefer to get close to the heroes. On each turn, a berserker uses{" "}
        <Link className="internal-link" to="/combat-abilities#hinder">
          hinder
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver, then uses jagged blade.
      </span>
    ),
    statBlock: (
      <Monster
        name="Thug"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Bruiser"
        traits={[
          {
            name: "Hit Them When They're Down",
            description: (
              <span>
                The thug gains <Modifier type="f" count="1" /> to attack rolls
                against <ToolTip preset="shaken" /> creatures.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Jagged Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Crossbow",
            keywords: "range, weapon",
            target: "1 creature within 3 zones",
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Spellsword",
    tier: "1",
    type: "Humanoid",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Spellswords mix magic with weapons to be fearsome combatants.",
    tactics: (
      <span>
        Spellswords can fight from range or nearby. If they fight near the
        heroes, they use their sword and then dimensional leap to get out of
        danger.
      </span>
    ),
    statBlock: (
      <Monster
        name="Spellsword"
        hp="10"
        evn="12"
        mgt="11"
        res="12"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Arcane Jolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "3 arcane damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Dimensional Leap",
            keywords: "magical, range",
            target: "up to 1 zone away",
            effect: (
              <span>
                The spellsword{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                anywhere within the target zone
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Captain",
    tier: "1",
    type: "Humanoid",
    role: "Support",
    threat: "Standard",
    description:
      "Captains serve as military leaders, either a leader of a bandits, a pirate captain, or guard captain.",
    tactics: (
      <span>
        Captains prefer to fight near their allies so they can give their allies
        extra attacks. On each turn, a captain uses sword or crossobw, then uses{" "}
        <Link className="internal-link" to="/combat-abilities#help">
          help
        </Link>{" "}
        on an ally.
      </span>
    ),
    statBlock: (
      <Monster
        name="Captain"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Support"
        actions={[
          {
            basic: true,
            name: "Guiding Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "3 physical damage",
            success: (
              <span>
                An ally within the captain's zone can use their reaction to{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>
              </span>
            ),
          },
          {
            basic: true,
            name: "Guiding Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
            success: (
              <span>
                An ally within the captain's zone can use their reaction to{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Grunt",
    tier: "1",
    type: "Humanoid",
    role: "",
    threat: "Minion",
    description:
      "Grunts serve as common foot sodliers for an organization, whether pirates, gang members, soldiers, or guards.",
    tactics: (
      <span>
        Grunts work together to take down one or two foes, and follow orders
        from whoever is in charge. Besides their attacks, grunts use their
        maneuver to{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        , or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Grunt"
        hp="2"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Minion"
        role=""
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "1 physical damage",
          },
          {
            basic: true,
            name: "Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "1 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Scout",
    tier: "1",
    type: "Humanoid",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Scouts are highly mobile combatants that often scout ahead for a large force.",
    tactics: (
      <span>
        Scouts prefer to use longbow from range, and use double time to stay out
        of trouble.
      </span>
    ),
    statBlock: (
      <Monster
        name="Scout"
        hp="10"
        evn="13"
        mgt="11"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Longbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Double Time",
            effect: (
              <span>
                The scout can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                twice
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Bounty Hunter",
    tier: "1",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Bounty hunters chase their marks across the land to either capture or kill.",
    tactics: (
      <span>
        Bounty hunters use entrapping crossbow to slown down their marks before
        getting close enough to use net to capture them.
      </span>
    ),
    statBlock: (
      <Monster
        name="Bounty Hunter"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Entrapping Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
            success: (
              <span>
                speed is halved until the target removes the bolt as a maneuver
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Net",
            keywords: "weapon",
            target: <span>1 creature within the bounty hunter's zone</span>,
            defense: "Guard",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Elementalist",
    tier: "1",
    type: "Humanoid",
    role: "Artillery",
    threat: "Standard",
    description:
      "Elementalists have learned the magic of a single element and use it to destructive effect.",
    tactics: (
      <span>
        Elementalists prefer to stay from afar. On each turn, an elementalist
        uses{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then elemental ray or elemental burst if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Elementalist"
        hp="8"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Artillery"
        resistances="chosen element"
        traits={[
          {
            name: "Chosen Element",
            description:
              "Each elementalist specializes in one of the following elements: cold, fire, lightning, or physical.",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Elemental Ray",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 damage of the chosen element damage type",
          },
          {
            basic: false,
            name: "Elemental Burst",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "3 damage of the chosen element damage type",
            effect: (
              <span>
                Targeted zone becomes a dangerous zone (1 damage of the same
                damage type) for the scene
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Tough",
    tier: "1",
    type: "Humanoid",
    role: "Tank",
    threat: "Standard",
    description: "Toughs are durable fighters that are hard to take down.",
    tactics: (
      <span>
        Toughs prefer to fight near heroes. On each turn, a tough uses flail,
        then uses{" "}
        <Link className="internal-link" to="/combat-abilities#defend">
          defend
        </Link>{" "}
        or shake it off.
      </span>
    ),
    statBlock: (
      <Monster
        name="Tough"
        hp="12"
        evn="15"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Tank"
        actions={[
          {
            basic: true,
            name: "Flail",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Shake It Off",
            effect: (
              <span>
                Tough can make an overcome roll against an effect and gains 1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-point"
                >
                  temporary hit point
                </Link>{" "}
                (scene ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Illusionist",
    tier: "1",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Illusionists are mages that specialize in magic that tricks the mind.",
    tactics: (
      <span>
        Illusionists prefer to fight from afar. On each turn, an illusionist
        uses confusing thought and dancing illusions.
      </span>
    ),
    statBlock: (
      <Monster
        name="Illusionist"
        hp="10"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Confusing Thought",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Dancing Illusions",
            keywords: "magical, range",
            target: "1 creature within 2 zones",
            effect: (
              <span>
                Illusions dance around the target until the end of their next
                turn. On their next attack roll, they must succeed on an
                overcome roll, or their attack has no effect and the illusions
                disappear.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Necromancer",
    tier: "1",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Necromancers are mages that specialize in death magic that animate the dead.",
    tactics: (
      <span>
        Necromancers prefer to fight from afar. On each turn, a necromancer uses
        weakening ray and animate skeleton.
      </span>
    ),
    statBlock: (
      <Monster
        name="Necromancer"
        hp="10"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Weakening Ray",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 necrotic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Animate Skeleton",
            keywords: "magical, range",
            duration: "Scene ends",
            effect: (
              <span>
                Necromancer animates a single skeleton minion within 1 zone.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Aberrant Cultist",
    tier: "1",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Aberrant cultists channel the eldritch magic of the void realm to cause confusion and discord.",
    tactics: (
      <span>
        Aberrant cultists prefer to fight from afar. On each turn, an aberrant
        cultist uses maddening thought and summon tentacle.
      </span>
    ),
    statBlock: (
      <Monster
        name="Aberrant Cultist"
        hp="10"
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Maddening Thought",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Summon Tentacle",
            keywords: "magical, range",
            target: "1 creature within 2 zones",
            defense: "Guard",
            critical: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Archer",
    tier: "1",
    type: "Humanoid",
    role: "Artillery",
    threat: "Standard",
    description: "Archers use bows or crossbows to pick off targets from afar.",
    tactics: (
      <span>
        Archers prefer to stay from afar. On each turn, an archer uses{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then bow or burst of arrows if there are multiple heroes grouped up.
      </span>
    ),
    statBlock: (
      <Monster
        name="Archer"
        hp="8"
        evn="13"
        mgt="13"
        res="11"
        pb="2"
        type="Small or Medium Humanoid"
        tier="1"
        threat="Standard"
        role="Artillery"
        actions={[
          {
            basic: true,
            name: "Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
          {
            basic: false,
            name: "Burst of Arrows",
            keywords: "range, weapon",
            target: <span>1d4 creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Master Mage",
    tier: "2",
    type: "Humanoid",
    role: "Artillery",
    threat: "Standard",
    description: "Master mages are advanced spellcasters of the arcane arts.",
    tactics: (
      <span>
        Master mages prefer to stay from afar. On each turn, a mage uses{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then arcane bolt or arcane burst if available. They prefer to use magic
        wall to protect themselves from harm or split hereos up.
      </span>
    ),
    statBlock: (
      <Monster
        name="Master Mage"
        hp="22"
        evn="13"
        mgt="13"
        res="15"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Artillery"
        actions={[
          {
            basic: true,
            name: "Arcane Bolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "6 arcane damage",
          },
          {
            basic: false,
            name: "Arcane Burst",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "8 arcane damage",
          },
          {
            basic: false,
            name: "Magic Wall",
            keywords: "magical, range",
            duration: "Start of master mage's next turn",
            target: <span>2 connected zone borders within 2 zones</span>,
            effect:
              "Transculent magical walls spring up on the targeted zones that impossible to pass. Each wall section has defenses of 14 and 10 hit points.",
          },
        ]}
      />
    ),
  },
  {
    name: "Dark Archpriest",
    tier: "2",
    type: "Humanoid",
    role: "Support",
    threat: "Standard",
    description:
      "Dark archpriests lead worship of dark deities and other sinister entities, and use their divine power to descrate their foes and suppor their allies.",
    tactics: (
      <span>
        Dark archpriests prefer to stay from afar. On each turn, a dark priest
        uses unholy blast and dark blessing on an ally.
      </span>
    ),
    statBlock: (
      <Monster
        name="Dark Archpriest"
        hp="26"
        evn="13"
        mgt="13"
        res="15"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Support"
        actions={[
          {
            basic: true,
            name: "Unholy Blast",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "4 unholy damage",
          },
          {
            basic: false,
            name: "Profane Flames",
            keywords: "magical, range, recharge",
            target: <span>All enemies in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "6 unholy damage",
            effect: (
              <span>
                Allies in the targeted zone gain 4{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (scene ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Dark Blessing",
            keywords: "magical, range",
            target: "1 ally within 1 zone",
            effect: (
              <span>
                Target gains 4{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (scene ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Weapon Master",
    tier: "2",
    type: "Humanoid",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Weapon masters are tough and deadly fighters that are beyond most mortals.",
    tactics: (
      <span>
        Weapon masters prefer to fight nearby. On each turn, a weapon masters
        uses longbow or sword, and then uses swift attack.
      </span>
    ),
    statBlock: (
      <Monster
        name="Weapon Master"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Bruiser"
        traits={[
          {
            name: "Hard to Stop",
            description:
              "The weapon master can make an overcome effect to end a single effect on a success at the end of their turn.",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "8 physical damage",
          },
          {
            basic: true,
            name: "Longbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Swift Attack",
            effect: (
              <span>
                Weapon master uses sword or longbow, but the attack roll's
                degree of success is downgraded by one.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Warlord",
    tier: "2",
    type: "Humanoid",
    role: "Support",
    threat: "Standard",
    description:
      "Warlord serve as military generals either of a mercenary company, fearsome horde, or a nation's army.",
    tactics: (
      <span>
        Warlords prefer to fight near their allies so they can give their allies
        extra attacks. On each turn, a warlord uses guiding sword or guiding
        crossobw, then uses get in here.
      </span>
    ),
    statBlock: (
      <Monster
        name="Warlord"
        hp="26"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Support"
        actions={[
          {
            basic: true,
            name: "Guiding Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "6 physical damage",
            success: (
              <span>
                An ally within the warlord's zone can use their reaction to{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>
              </span>
            ),
          },
          {
            basic: true,
            name: "Guiding Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
            success: (
              <span>
                An ally within the warlord's zone can use their reaction to{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Get in Here",
            effect:
              "Two elite grunts joins the combat within 2 zones of the warlord.",
          },
        ]}
      />
    ),
  },
  {
    name: "Elite Grunt",
    tier: "2",
    type: "Humanoid",
    role: "",
    threat: "Minion",
    description:
      "Elite grunts serve as highly trained sodliers for an organization, whether pirates, gang members, soldiers, or guards.",
    tactics: (
      <span>
        Elite grunts work together to take down one or two foes, and follow
        orders from whoever is in charge. Besides their attacks, elite grunts
        use their maneuver to{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Elite Grunt"
        hp="4"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Minion"
        role=""
        traits={[
          {
            name: "Work Together",
            description: (
              <span>
                The bonus on attack rolls against{" "}
                <Link className="internal-link" to="/rules/combat#vulnerable">
                  vulnerable
                </Link>{" "}
                creatures increases to <Modifier type="f" count="2" />
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "2 physical damage",
          },
          {
            basic: true,
            name: "Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Master Assassin",
    tier: "2",
    type: "Humanoid",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Master assassins are deadly and nimble warriors that prefer to strike from the shadows.",
    tactics: (
      <span>
        On each turn, at range, a master assassin uses poison weapon then
        crossbow and cunning movement to find{" "}
        <Link className="internal-link" to="/rules/combat#stealth">
          cover
        </Link>
        . If near the heroes, an assassin instead uses poison weapon then
        cunning movement to get close, and then attack with blade.
      </span>
    ),
    statBlock: (
      <Monster
        name="Master Assassin"
        hp="26"
        evn="15"
        mgt="13"
        res="13"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Skirmisher"
        traits={[
          {
            name: "Cunning Movement",
            description: (
              <span>
                When the master assassin uses crossbow or blade, it can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                before or after the attack roll.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "8 physical damage",
          },
          {
            basic: true,
            name: "Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Poison Weapon",
            duration: "Current turn ends",
            effect:
              "The master assassin's weapons deal an extra 2 toxic damage.",
          },
        ]}
      />
    ),
  },
  {
    name: "High Templar",
    tier: "2",
    type: "Humanoid",
    role: "Bruiser",
    threat: "Standard",
    description:
      "High templars are expert fighters divinely empowered by their gods to hunt down their faith's foes.",
    tactics: (
      <span>
        High templars prefer to fight near heroes. On each turn, a high templar
        uses smite, then uses{" "}
        <Link className="internal-link" to="/combat-abilities#charge">
          charge
        </Link>{" "}
        to get close or if already close, then uses sword. When they are weak or
        an ally is weak, the high templar uses healing touch.
      </span>
    ),
    statBlock: (
      <Monster
        name="High Templar"
        hp="30"
        evn="14"
        mgt="17"
        res="14"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Bruiser"
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "8 physical damage",
          },
          {
            basic: true,
            name: "Longbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Smite",
            keywords: "magical",
            duration: "Current turn ends",
            effect:
              "The high templar's weapons deal an extra 2 holy or unholy damage (your choice).",
          },
          {
            basic: false,
            name: "Healing Touch",
            keywords: "magical, melee, recharge",
            target: "1 creature the high templar can touch",
            effect: (
              <span>
                Target <ToolTip preset="heals" /> 10 hit points and can make an
                overcome roll to end an effect on a success.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Greater Necromancer",
    tier: "2",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Greater necromancers are powerful mages that specialize in death magic that animate the dead.",
    tactics: (
      <span>
        Greater necromancers prefer to fight from afar. On each turn, a greater
        necromancer uses weakening ray or withering blast if available, and
        animate zombies.
      </span>
    ),
    statBlock: (
      <Monster
        name="Greater Necromancer"
        hp="26"
        evn="13"
        mgt="13"
        res="15"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Weakening Ray",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "4 necrotic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Withering Blast",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "6 necrotic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (2 necrotic damage) for the scene
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Animate Zombies",
            keywords: "magical, range",
            duration: "Scene ends",
            effect: (
              <span>
                Greater necromancer animates two zombie minions within 1 zone.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Master Naturalist",
    tier: "2",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Master naturalists are well trained in the magic of nature, and turn nature's wrath against others.",
    tactics: (
      <span>
        Master naturalists prefer to fight from afar. On each turn, a maturalist
        uses grasping vine and difficult terrain.
      </span>
    ),
    statBlock: (
      <Monster
        name="Master Naturalist"
        hp="26"
        evn="13"
        mgt="13"
        res="15"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Grasping Vine",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Difficult Terrain",
            keywords: "magical, range",
            target: "1 zone within 2 zones",
            effect: (
              <span>
                Targete zone becomes{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                until the start of the naturalist's next turn.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "Nature's Grasp",
            keywords: "magical, range",
            trigger: (
              <span>
                Master naturalist sees a creature within 1 zone{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
            effect: (
              <span>
                Target becomes{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends).
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Grand Knight",
    tier: "2",
    type: "Humanoid",
    role: "Tank",
    threat: "Standard",
    description:
      "Grand knights are exceptional combatants that defend others from harm. Grand knights lead other knights in serving the most powerful of rulers.",
    tactics: (
      <span>
        Grand knights prefer to stay near their allies so they can use knightly
        punishment. On each turn, a knight uses{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#defend">
          defend
        </Link>{" "}
        as a maneuver, then use sword.
      </span>
    ),
    statBlock: (
      <Monster
        name="Grand Knight"
        hp="30"
        evn="17"
        mgt="17"
        res="13"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Tank"
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "6 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Knightly Challenge",
            target: "All enemies within the knight's zone",
            effect: (
              <span>
                Targets are{" "}
                <Link className="internal-link" to="/conditions#taunted">
                  taunted
                </Link>{" "}
                by the knight (next turn ends)
              </span>
            ),
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "Knightly Punishment",
            trigger:
              "The knight sees a creature within its zone make an attack roll against a knight's ally",
            effect: (
              <span>
                The knight can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                then use sword against the triggering creature
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Undying Berserker",
    tier: "2",
    type: "Humanoid",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Undying berserkers channel their rage and aggression in battle to be fearsome foes.",
    tactics: (
      <span>
        Undying berserkers prefer to get close to the heroes. On each turn, an
        undying berserker uses{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver, then use greataxe.
      </span>
    ),
    statBlock: (
      <Monster
        name="Undying Berserker"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Bruiser"
        traits={[
          {
            name: "Rage",
            description: (
              <span>
                When the berserker is <ToolTip preset="shaken" />, they gain{" "}
                <Modifier type="f" count="1" /> to attack rolls
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Greataxe",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "8 physical damage",
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "I Refuse Death",
            trigger: "Undying berserker is reduced to 0 hit points",
            requirement:
              "Undyirng bersker hasn't used this ability yet in this scene",
            effect: (
              <span>
                Undying berserker is instead reduced to 1 hit point and can use
                sword. If no target is close enough, the undying bersker can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                first
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Sharpshooter",
    tier: "2",
    type: "Humanoid",
    role: "Artillery",
    threat: "Standard",
    description:
      "Sharpshooters are expert marksman that are deadly with a bow or crossbow.",
    tactics: (
      <span>
        Sharpshooters prefer to stay from afar. On each turn, a sharpshooter
        uses{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then bow or burst of arrows if there are multiple heroes grouped up.
      </span>
    ),
    statBlock: (
      <Monster
        name="Sharpshooter"
        hp="22"
        evn="15"
        mgt="15"
        res="13"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Artillery"
        traits={[
          {
            name: "Expert Aim",
            description: (
              <span>
                When the sharpshooter uses aim, the bonus increases to{" "}
                <Modifier type="f" count="2" />.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 physical damage",
          },
          {
            basic: false,
            name: "Burst of Arrows",
            keywords: "range, weapon",
            target: <span>1d4 creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Master Spellsword",
    tier: "2",
    type: "Humanoid",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Master spellswords are experts at using magic alongside weapons to become deadly combatants.",
    tactics: (
      <span>
        Master spellswords can fight from range or nearby. If they fight near
        the heroes, they use their sword and then dimensional leap to get out of
        danger. A master spellsword always used weapon storm when possible.
      </span>
    ),
    statBlock: (
      <Monster
        name="Master Spellsword"
        hp="26"
        evn="14"
        mgt="13"
        res="14"
        pb="4"
        type="Small or Medium Humanoid"
        tier="2"
        threat="Standard"
        role="Skirmisher"
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "8 physical damage",
          },
          {
            basic: true,
            name: "Arcane Jolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "6 arcane damage",
          },
          {
            basic: false,
            name: "Weapon Storm",
            keywords: "magical, recharge",
            target: "All enemies within the master spellsword's zone",
            defense: "Guard",
            damage: "6 physical damage",
            success: (
              <span>
                2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                physical damage
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Dimensional Leap",
            keywords: "magical, range",
            target: "up to 1 zone away",
            effect: (
              <span>
                The spellsword{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                anywhere within the target zone
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Legendary Mage",
    tier: "3",
    type: "Humanoid",
    role: "Artillery",
    threat: "Standard",
    description:
      "Legendary mages are the most powerful spellcasters of the arcane arts.",
    tactics: (
      <span>
        Legendary mages prefer to stay from afar. On each turn, a legendary mage
        uses{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then arcane bolt or arcane burst if available. They prefer to use magic
        wall to protect themselves from harm or split hereos up. If heroes get
        too close, the legendary mage will use dimensional jaunt.
      </span>
    ),
    statBlock: (
      <Monster
        name="Legendary Mage"
        hp="42"
        evn="15"
        mgt="15"
        res="17"
        pb="6"
        type="Small or Medium Humanoid"
        tier="3"
        threat="Standard"
        role="Artillery"
        actions={[
          {
            basic: true,
            name: "Arcane Bolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "9 arcane damage",
          },
          {
            basic: false,
            name: "Arcane Burst",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "12 arcane damage",
          },
          {
            basic: false,
            name: "Magic Wall",
            keywords: "magical, range",
            duration: "Start of master mage's next turn",
            target: <span>3 connected zone borders within 2 zones</span>,
            effect:
              "Transculent magical walls spring up on the targeted zones that impossible to pass. Each wall section has defenses of 14 and 10 hit points.",
          },
        ]}
        maneuvers={[
          {
            name: "Dimensional Jaunt",
            keywords: "magic, range",
            target: "Up to 1 zone",
            effect: "Archmage teleports within the targeted zone",
          },
        ]}
      />
    ),
  },
  {
    name: "Legendary Priest",
    tier: "3",
    type: "Humanoid",
    role: "Support",
    threat: "Standard",
    description:
      "Legendary priests are the most powerful worshippers of dark deities, and often personally chosen by their patron.",
    tactics: (
      <span>
        Legendary priests prefer to stay from afar. On each turn, a legendary
        priest uses unholy blast and dark blessing on an ally.
      </span>
    ),
    statBlock: (
      <Monster
        name="Legendary Priest"
        hp="48"
        evn="15"
        mgt="15"
        res="17"
        pb="6"
        type="Small or Medium Humanoid"
        tier="3"
        threat="Standard"
        role="Support"
        actions={[
          {
            basic: true,
            name: "Unholy Blast",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "6 unholy damage",
            success: <span>weakness to all damage (next turn ends)</span>,
          },
          {
            basic: false,
            name: "Profane Flames",
            keywords: "magical, range, recharge",
            target: <span>All enemies in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "9 unholy damage",
            effect: (
              <span>
                Allies in the targeted zone gain 6{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (scene ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Dark Blessing",
            keywords: "magical, range",
            target: "1 ally within 1 zone",
            effect: (
              <span>
                Target gains 6{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (scene ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Legendary Fighter",
    tier: "3",
    type: "Humanoid",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Legendary fighters are the best and most deadly warriors of the land.",
    tactics: (
      <span>
        Legendary fighters prefer to fight nearby. On each turn, a legendary
        fighter uses longbow or sword, and then uses swift attack. When weak or
        under conditions, the legendary fighter will use recover strike.
      </span>
    ),
    statBlock: (
      <Monster
        name="Legendary Fighter"
        hp="54"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Small or Medium Humanoid"
        tier="3"
        threat="Standard"
        role="Bruiser"
        traits={[
          {
            name: "Hard to Stop",
            description:
              "The legendary fighter can make an overcome effect to end a single effect on a success at the end of their turn.",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Sword",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "12 physical damage",
          },
          {
            basic: true,
            name: "Longbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 physical damage",
          },
          {
            basic: false,
            name: "Recovery Strike",
            requirement:
              "The legendary fighter hasn't used this ability this scene",
            effect: (
              <span>
                Legendary fighter regains 18 hit points and end all negative
                effects on themselves.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Swift Attack",
            effect: (
              <span>
                Legendary fighter uses sword or longbow, but the attack roll's
                degree of success is downgraded by one.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Legendary Assassin",
    tier: "3",
    type: "Humanoid",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Legendary assassins are the most dangerous and deadly of their kind, and are feared throughout the land.",
    tactics: (
      <span>
        On each turn, at range, a legendary assassin uses poison weapon then
        crossbow and cunning movement to find{" "}
        <Link className="internal-link" to="/rules/combat#stealth">
          cover
        </Link>
        . If near the heroes, an assassin instead uses poison weapon then
        cunning movement to get close, and then attack with blade.
      </span>
    ),
    statBlock: (
      <Monster
        name="Legendary Assassin"
        hp="48"
        evn="17"
        mgt="15"
        res="15"
        pb="6"
        type="Small or Medium Humanoid"
        tier="3"
        threat="Standard"
        role="Skirmisher"
        traits={[
          {
            name: "Cunning Movement",
            description: (
              <span>
                When the legendary assassin uses crossbow or blade, it can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                before or after the attack roll.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Blade",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            ),
            defense: "Guard",
            damage: "12 physical damage",
          },
          {
            basic: true,
            name: "Crossbow",
            keywords: "ranged, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "9 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Poison Weapon",
            duration: "Current turn ends",
            effect:
              "The legendary assassin's weapons deal an extra 3 toxic damage.",
          },
        ]}
        reactions={[
          {
            name: "Not You See Me, Now You Don't",
            trigger: "Legendary assassin takes damage",
            effect: (
              <span>
                Legendary assassin can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                without triggering reactions, and if they have{" "}
                <Link className="internal-link" to="/rules/combat#cover">
                  cover
                </Link>
                , then they can{" "}
                <Link className="internal-link" to="/combat-abilities#hide">
                  hide
                </Link>
                .
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Legendary Necromancer",
    tier: "3",
    type: "Humanoid",
    role: "Disabler",
    threat: "Standard",
    description:
      "Legendary necromancers are the most powerful of mages that specialize in death magic that animate the dead.",
    tactics: (
      <span>
        Legendary necromancers prefer to fight from afar. On each turn, a
        legendary necromancer uses weakening ray or withering blast if
        available, and animate wraiths.
      </span>
    ),
    statBlock: (
      <Monster
        name="Legendary Necromancer"
        hp="48"
        evn="15"
        mgt="15"
        res="17"
        pb="6"
        type="Small or Medium Humanoid"
        tier="3"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Weakening Ray",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "6 necrotic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Withering Blast",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "9 necrotic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 necrotic damage) for the scene
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Animate Zombies",
            keywords: "magical, range",
            duration: "Scene ends",
            effect: (
              <span>
                Legendary necromancer animates three wraith minions within 1
                zone.
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default HumanoidMonsters;
