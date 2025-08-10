import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
// import ToolTip from "../../../components/ToolTip";
// import Modifier from "../../../components/Modifier";

const PlantMonsters = [
  {
    name: "Rot Sapling",
    tier: "1",
    type: "Plant",
    role: "",
    threat: "Minion",
    description:
      "Rot saplings are small sentient plant creatues animated by dark magic to hate the living.",
    tactics: (
      <span>
        Rot saplings prefer to fight near heroes to use scratch, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#gambit">
          gambit
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Rot Sapling"
        hp="2"
        evn="13"
        mgt="13"
        res="11"
        pb="2"
        type="Small Plant"
        tier="1"
        threat="Minion"
        role=""
        resistances="necrotic"
        weaknesses="fire"
        actions={[
          {
            basic: true,
            name: "Scratch",
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
        ]}
      />
    ),
  },
  {
    name: "Rot Spawn",
    tier: "1",
    type: "Plant",
    role: "Disabler",
    threat: "Standard",
    description:
      "Rot spawns are medium sized sentient plant creatues animated by dark magic to hate the living.",
    tactics: (
      <span>
        Rot spawns prefer to fight near heroes to use scratch, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#gambit">
          gambit
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Rot Spawn"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Medium Plant"
        tier="1"
        threat="Standard"
        role="Disabler"
        resistances="necrotic"
        weaknesses="fire"
        traits={[
          {
            name: "Rotting Aura",
            description: (
              <span>
                When a creature becomes engaged to the rot spawn or starts their
                turn engaged to the rot spawn, the rot spawn makes an attack
                roll against their Guard. On a success or higher, the creature
                is{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Grasping Scratch",
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
    name: "Rot Needler",
    tier: "1",
    type: "Plant",
    role: "Artillery",
    threat: "Standard",
    description:
      "Rot needlers are medium sized sentient plant creatues animated by dark magic to hate the living that shoot barbed needles at foes.",
    tactics: (
      <span>
        Rot needlers prefer to fight afar from heroes to use{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then bleeding needle.
      </span>
    ),
    statBlock: (
      <Monster
        name="Rot Needler"
        hp="8"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Medium Plant"
        tier="1"
        threat="Standard"
        role="Artillery"
        resistances="necrotic"
        weaknesses="fire"
        actions={[
          {
            basic: true,
            name: "Scratch",
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
            name: "Bleeding Needle",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
            success: (
              <span>
                1{" "}
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
      />
    ),
  },
  {
    name: "Rot Tree",
    tier: "1",
    type: "Plant",
    role: "Disabler",
    threat: "Major",
    description:
      "Rot tree are large sentient trees animated by dark magic to hate the living. Rot trees are usually the source of the rot curse, and create rot saplings.",
    tactics: (
      <span>
        Rot tree are slow but prefer to be near heroes to use grasping vine into
        rot curse or create sapling if they don't have anyone seized.
      </span>
    ),
    statBlock: (
      <Monster
        name="Rot Tree"
        hp="20"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Huge Plant"
        tier="1"
        threat="Major"
        role="Disabler"
        resistances="necrotic"
        weaknesses="fire"
        speeds="land 0"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Grasping Vine",
            keywords: "range, weapon",
            target: <span>1 creature within 1 zone</span>,
            defense: "Guard",
            damage: "3 physical damage",
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
        maneuvers={[
          {
            name: "Rot Curse",
            keywords: "magical",
            defense: "Spirit",
            target: "1 creature seized by the rot tree",
            critical: (
              <span>
                Target becomes controlled by the rot tree (overcome ends)
              </span>
            ),
            success: (
              <span>
                Target becomes controlled by the rot tree (next turn ends)
              </span>
            ),
          },
          {
            name: "Create Sapling",
            keywords: "magical, range",
            effect: "The rot tree creates 1 rot sapling within 1 zone",
          },
        ]}
      />
    ),
  },
  {
    name: "Dryad",
    tier: "1",
    type: "Faerie Plant",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Dryads are faerie guardians of trees and those that dwell in wooded areas. Dryads prefer to convince intruders to leave or not harm their trees, but will resort to violence if necessary.",
    tactics: (
      <span>
        Dryads prefer to fight near heroes to use branch, and uses tree stride
        as a maneuver to keep their distance.
      </span>
    ),
    statBlock: (
      <Monster
        name="Dryad"
        hp="10"
        evn="13"
        mgt="11"
        res="11"
        pb="2"
        type="Medium Faerie Plant"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        weaknesses="fire"
        actions={[
          {
            basic: true,
            name: "Branch",
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
        maneuvers={[
          {
            name: "Tree Stride",
            keywords: "magical, range",
            target: "1 tree within 1 zone",
            effect: (
              <span>
                Dryad{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                next to the targeted tree
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Dryad Queen",
    tier: "1",
    type: "Faerie Plant",
    role: "Disabler",
    threat: "Boss",
    description:
      "Dryads are faerie guardians of trees and those that dwell in wooded areas. Dryads prefer to convince intruders to leave or not harm their trees, but will resort to violence if necessary. Dryad queen rule a grove of other dryads.",
    tactics: (
      <span>
        Dryad queens prefer to fight near heroes to use branch and keep them in
        range of their dryad's beauty, and uses tree stride as a maneuver to
        keep their distance.
      </span>
    ),
    statBlock: (
      <Monster
        name="Dryad Queen"
        hp="10"
        evn="13"
        mgt="11"
        res="11"
        pb="2"
        type="Medium Faerie Plant"
        tier="1"
        threat="Boss"
        role="Disabler"
        weaknesses="fire"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monster's hit points equal the listed total multiplied by
                the number of heroes. Boss monsters also get one turn per hero.
                At the end of a boss monster's turn, they can take direct damage
                equal to their proficiency bonus to end one condition affecting
                them.
              </span>
            ),
          },
          {
            name: "Dryad's Beauty",
            description: (
              <span>
                Whenever an enemy enters or starts their turn in the dryad
                queen's zone, the dryad queen makes an attack roll against their
                Spirit. On a success or higher, the creature can't use hostile
                abilities against the dryad queen (next turn ends).
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Branch",
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
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Leaf",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Tree Stride",
            keywords: "magical, range",
            target: "1 tree within 1 zone",
            effect: (
              <span>
                Dryad{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                next to the targeted tree
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Overgrowth",
            keywords: "magical, range",
            round: "1",
            target: "1 zone within 3 zones",
            duration: "Scene ends",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>
                , and when a creature enters or starts their turn in the zone,
                the dryad queen makes an attack roll against the creature's
                Guard. On a success or higher, the target is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends).
              </span>
            ),
          },
          {
            name: "Assist Your Queen!",
            keywords: "magical, range",
            round: "3",
            effect: "Dryad queen summons a dryad within 1 zone",
          },
          {
            name: "You Serve Me Now",
            keywords: "magical, range",
            round: "5",
            target: "1 creature within 2 zones",
            defense: "Spirit",
            critical:
              "Target becomes controlled by the dryad queen (overcome ends)",
            success:
              "Target becomes controlled by the dryad queen (next turn ends)",
          },
        ]}
      />
    ),
  },
  {
    name: "Woodlord",
    tier: "2",
    type: "Plant",
    role: "Tank",
    threat: "Major",
    description:
      "Woodlords are large tree like guardians of forests. They are rare as their kind takes centuries to grow from awakened trees. Woodlords avoid violence unless provoked or their land is threatened, especially by fire",
    tactics: (
      <span>
        Woodlords prefer to be near heroes to use slam and uproot. They also use
        awakened tree if they need help.
      </span>
    ),
    statBlock: (
      <Monster
        name="Woodlord"
        hp="60"
        evn="17"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Plant"
        tier="2"
        threat="Major"
        role="Tank"
        weaknesses="fire"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Slam",
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
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Throw Rock",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Awaken Tree",
            keywords: "magical, range, recharge",
            target: <span>1 tree within 2 zones</span>,
            effect:
              "The targeted tree becomes an awakened tree that is friendly to the woodlord and listens to the woodlord's commands",
          },
        ]}
        maneuvers={[
          {
            name: "Uproot",
            defense: "Guard",
            target: "1d4+1 enemies in the woodlord's zone",
            critical: <span>Same as a success, and 2 physical damage</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Awakened Tree",
    tier: "2",
    type: "Plant",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Awakened trees are large trees given life by magic, usually by woodlords. After centuries, they eventually become woodlords.",
    tactics: (
      <span>
        Awakened trees prefer to be near heroes to use slam and{" "}
        <Link className="internal-link" to="/combat-abilities#gambit">
          gambit
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Awakened Tree"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Plant"
        tier="2"
        threat="Standard"
        role="Bruiser"
        weaknesses="fire"
        actions={[
          {
            basic: true,
            name: "Slam",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            basic: true,
            name: "Throw Rock",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Rot Woodlord",
    tier: "2",
    type: "Plant",
    role: "Disabler",
    threat: "Boss",
    description:
      "Rot woodlords are large tree like guardians of forests that have been corrupted by the rot curse. Filled with hatred for the living, these corrupted trees seek to eradicate any newcomer to their woods. Overtime, a rot woodlord's woods becomes corruped as well and transforms into an area of great evil.",
    tactics: (
      <span>
        Rot woodlords prefer to be near heroes to use slam and uproot. They also
        use awakened tree if they need help.
      </span>
    ),
    statBlock: (
      <Monster
        name="Rot Woodlord"
        hp="26"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Plant"
        tier="2"
        threat="Boss"
        role="Disabler"
        resistances="necrotic"
        weaknesses="fire"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monster's hit points equal the listed total multiplied by
                the number of heroes. Boss monsters also get one turn per hero.
                At the end of a boss monster's turn, they can take direct damage
                equal to their proficiency bonus to end one condition affecting
                them.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Rotting Slam",
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
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Throw Rock",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Awaken Tree",
            keywords: "magical, range, recharge",
            target: <span>1 tree within 2 zones</span>,
            effect:
              "The targeted tree becomes an awakened tree that is friendly to the rot woodlord and listens to the rot woodlord's commands",
          },
        ]}
        maneuvers={[
          {
            name: "Uproot",
            defense: "Guard",
            target: "1d4+1 enemies in the rot woodlord's zone",
            critical: <span>Same as a success, and 2 physical damage</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Summon the Rot",
            round: "1",
            keywords: "magical, range",
            effect:
              "The rot woodlord summons 5 rot spawn minions (see below statblock) within 2 zones",
          },
          {
            name: "Rot Aura",
            round: "3",
            keywords: "aura, magical",
            duration: "Scene ends",
            effect: (
              <span>
                When a creature enters or starts their turn in the rot
                woodlord's zone, the rot woodlord makes an attack roll against
                their Spirit. On a success or higher, the creature is{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends). If they're already hindered, then they instead
                take 2 necrotic damage.
              </span>
            ),
          },
          {
            name: "Animate Roots",
            round: "5",
            keywords: "aura, magical",
            duration: "Scene ends",
            effect: (
              <span>
                The rot woodlord's zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                for enemies. When the rot woodlord makes an attack roll from rot
                aura, the target is also{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends) on a success or higher.
              </span>
            ),
          },
        ]}
      />
    ),
    secondaryMonster: (
      <Monster
        name="Rot Spawn Minion"
        hp="4"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Medium Plant"
        tier="2"
        threat="Minion"
        role=""
        resistances="necrotic"
        weaknesses="fire"
        actions={[
          {
            basic: true,
            name: "Grasping Slam",
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
    name: "Green Man",
    tier: "3",
    type: "Faerie Plant",
    role: "Bruiser",
    threat: "Major",
    description:
      "Green men are mythical humanoid plant creatures from the green realm that often rule as kings of their domain. Their presence is sometimes worshipped by mortals while others fear the green men as they can transform mortals into plants when angered.",
    tactics: (
      <span>
        Green Mans prefer to be near heroes to use slam and uproot. They also
        use awakened tree if they need help.
      </span>
    ),
    statBlock: (
      <Monster
        name="Green Man"
        hp="108"
        evn="17"
        mgt="19"
        res="15"
        pb="4"
        type="Medium Faerie Plant"
        tier="3"
        threat="Major"
        role="Bruiser"
        weaknesses="fire"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Green Aura",
            description: (
              <span>
                When a non-plant enemy enters or starts their turn in the green
                man's zone, the green man makes an attack roll against their
                Spirit. On a success, the target becomes{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends), or dazed (overcome ends) on a critical
                success. If the target is already dazed by this trait, then on a
                success or higher, the target becomes an inanimate plant.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Vine",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Thorn",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 physical damage",
          },
          {
            basic: false,
            name: "Vine Lash",
            keywords: "magical, range, recharge",
            target: <span>All enemies within 1 zone</span>,
            defense: "Guard",
            damage: "9 physical",
            success: "Target is pulled to become engaged to the green man",
          },
        ]}
        maneuvers={[
          {
            name: "Quick Vine",
            effect:
              "The green man can use vine, but treats the attack roll as one degree of success lower",
          },
        ]}
      />
    ),
  },
];

export default PlantMonsters;
