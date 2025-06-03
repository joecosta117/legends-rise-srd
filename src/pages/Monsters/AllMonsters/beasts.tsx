import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const BeastMonsters = [
  {
    name: "Giant Ape",
    tier: "1",
    type: "Beast",
    role: "Bruiser",
    threat: "Major",
    description:
      "Giant apes are huge apes that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant apes will rush the heroes to use fist and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Ape"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Huge Beast"
        tier="1"
        threat="Major"
        role="Bruiser"
        speeds="climb 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Fist",
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
            basic: false,
            name: "Throw Rock",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
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
    name: "Tyrannosaurus",
    tier: "1",
    type: "Beast",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The king of dinosaurs, the tyrannosaurus is a gigantic predator. Some brave giant tribes tame tyrannosaurus as dangerous mounts.",
    tactics: (
      <span>
        Tyrannosaurus will rush the heroes to use bite and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Tyrannosaurus"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Huge Beast"
        tier="1"
        threat="Boss"
        role="Bruiser"
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
            name: "Bite",
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
            success: (
              <span>
                If larger or smaller, the target gets swallowed by the
                tyrannosaurus. While swallowed, the target is{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  blinded
                </Link>
                ,{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
                , and takes 1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage. If a swallowed creature deals 4 or more damage on
                a single turn, the tyrannosaurus throws up the target.
              </span>
            ),
          },
          {
            basic: true,
            name: "Tail",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Tail Lash",
            trigger: "A creature enters the tyrannosaurus' zone",
            effect:
              "The tyrannosaurus can use tail against the triggering creature",
          },
        ]}
        bossActions={[
          {
            name: "Tyrannosaurus Roar",
            round: "1",
            keywords: "range",
            target: "All enemies",
            defense: "Spirit",
            critical: "hindered (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            name: "Swinging Tail",
            round: "3",
            target: "All enemies in the tyrannosaurus' zone",
            effect: "The tyrannosaurus can use tail against each target",
          },
          {
            name: "Enraged",
            round: "5",
            duration: "Scene ends",
            effect:
              "The tyrannosaurus gains +1 fortune to all attack rolls and ends any negative effects on itself",
          },
        ]}
      />
    ),
  },
  {
    name: "Giant Shark",
    tier: "1",
    type: "Beast",
    role: "Bruiser",
    threat: "Major",
    description:
      "Giant sharks are huge sharks that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant sharks will rush the heroes to use bite and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Shark"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Huge Beast"
        tier="1"
        threat="Major"
        role="Bruiser"
        speeds="swim 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Aquatic",
            description: (
              <span>The giant shark can only breath underwater.</span>
            ),
          },
          {
            name: "Predator",
            description: (
              <span>
                The giant shark gains <Modifier type="f" count="1" /> to attack
                rolls against <ToolTip preset="shaken" />
                targets
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Bite",
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
    name: "Giant Bear",
    tier: "1",
    type: "Beast",
    role: "Bruiser",
    threat: "Major",
    description:
      "Giant bears are huge bears that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant bears will rush the heroes to use rend and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Bear"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Huge Beast"
        tier="1"
        threat="Major"
        role="Bruiser"
        speeds="climb 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Mauler",
            description: (
              <span>
                The giant bear gains <Modifier type="f" count="1" /> to attack
                rolls against seized targets
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Rend",
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
            basic: false,
            name: "Bear Charge",
            effect: (
              <span>
                The giant bear uses{" "}
                <Link className="internal-link" to="/combat-abilities#charge">
                  charge
                </Link>
                , but can move twice as part of their charge.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Giant Scorpion",
    tier: "1",
    type: "Beast",
    role: "Disabler",
    threat: "Standard",
    description:
      "Giant scorpions are huge scorpions that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant scorpions will rush the heroes to use pincer or stinger and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Scorpion"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Beast"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Pincer",
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
            name: "Stinger",
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
    name: "Giant Spider",
    tier: "1",
    type: "Beast",
    role: "Disabler",
    threat: "Standard",
    description:
      "Giant spiders are huge spiders that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant spiders will rush the heroes to use mandibles or web area and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Spider"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Beast"
        tier="1"
        threat="Standard"
        role="Disabler"
        actions={[
          {
            basic: true,
            name: "Mandible",
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
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Web Area",
            target: <span>1d4+1 enemies within the giant spider's zone</span>,
            defense: "Guard",
            critical: "seized (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Giant Snake",
    tier: "1",
    type: "Beast",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Giant snakes are huge snakes that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant snakes will rush the heroes to use bite and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Snake"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Beast"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        actions={[
          {
            basic: true,
            name: "Bite",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Lion",
    tier: "1",
    type: "Beast",
    role: "Bruiser",
    threat: "Minor",
    description:
      "Lions are majestic large cats that are sometimes tamed by humanoids.",
    tactics: (
      <span>
        Lions will rush the heroes to use fist and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Lion"
        hp="6"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Beast"
        tier="1"
        threat="Minor"
        role="Bruiser"
        actions={[
          {
            basic: true,
            name: "Pounce",
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
    name: "Giant Wolf",
    tier: "1",
    type: "Beast",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Giant wolves are huge wolves that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant wolves will rush the heroes to use bite and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Wolf"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Beast"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        traits={[
          {
            name: "Pack Tactics",
            description:
              "The giant wolf gains +1 fortune on attack rolls against creatures engaged to an ally",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Bite",
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
    name: "Giant Octopus",
    tier: "1",
    type: "Beast",
    role: "Disabler",
    threat: "Standard",
    description:
      "Giant octopuses are huge octopuses that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant octopuses will rush the heroes to use tentacle and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Octopus"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Beast"
        tier="1"
        threat="Standard"
        role="Disabler"
        speeds="swim 1"
        traits={[
          {
            name: "Aquatic",
            description: (
              <span>The giant octopus can only breath underwater.</span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Tentacle",
            keywords: "weapon",
            target: <span>1 creature within the octopus' zone</span>,
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
    name: "Veliciraptor",
    tier: "1",
    type: "Beast",
    role: "Skirmisher",
    threat: "Minor",
    description: "Veliciraptors are smaller dinosaurs that hunt in packs.",
    tactics: (
      <span>
        Veliciraptors will rush the heroes to use bite and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Veliciraptor"
        hp="5"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small Beast"
        tier="1"
        threat="Minor"
        role="Skirmisher"
        traits={[
          {
            name: "Pack Tactics",
            description:
              "The veliciraptor gains +1 fortune on attack rolls against creatures engaged to an ally",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Bite",
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
      />
    ),
  },
  {
    name: "Giant Crab",
    tier: "1",
    type: "Beast",
    role: "Tank",
    threat: "Standard",
    description:
      "Giant crabs are huge crabs that like other giant beasts were believed to have been created by magical experiments in ages past.",
    tactics: (
      <span>
        Giant crabs will rush the heroes to use tentacle and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Giant Crab"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Beast"
        tier="1"
        threat="Standard"
        role="Tank"
        resistances="physical 1"
        speeds="swim 1"
        traits={[
          {
            name: "Aquatic",
            description: <span>The giant crab can breath underwater.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Pincer",
            keywords: "weapon",
            target: <span>1 engaged creature</span>,
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
];

export default BeastMonsters;
