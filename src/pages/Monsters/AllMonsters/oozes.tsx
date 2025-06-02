import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
// import Modifier from "../../../components/Modifier";

const OozeMonsters = [
  {
    name: "Black Ooze",
    tier: "1",
    type: "Ooze",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Black oozes are hard to kill oozes that constantly multiply and overwhelm their enemies.",
    tactics: (
      <span>
        Black oozes prefer to fight near heroes to use pseudopod, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Black Ooze"
        hp="12"
        evn="11"
        mgt="15"
        res="11"
        pb="2"
        type="Large Ooze"
        tier="1"
        threat="Standard"
        role="Bruiser"
        resistances="toxic 2"
        traits={[
          {
            name: "Ooze Resilience",
            description: (
              <span>
                The ooze doesn't take additional damage from critically
                successful attack rolls.
              </span>
            ),
          },
          {
            name: "Ooze Split",
            description: (
              <span>
                When the black ooze takes physical damage and has more than 2
                hit points, it splits in half and creates two black oozes. Each
                new ooze has half the hit points of the original ooze.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Pseudopod",
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
            damage: "4 toxic damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Ooze Cube",
    tier: "1",
    type: "Ooze",
    role: "Disabler",
    threat: "Standard",
    description:
      "Ooze cubes are giant gelatinious creatures that frequently haunt dungeons. They are hard to notice and hunt down the living to swallow and slowly melt them down.",
    tactics: (
      <span>
        Ooze cubes prefer to fight near heroes to use pseudopod or engulf, and
        uses{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ooze Cube"
        hp="10"
        evn="11"
        mgt="15"
        res="11"
        pb="2"
        type="Large Ooze"
        tier="1"
        threat="Standard"
        role="Disabler"
        resistances="toxic 2"
        traits={[
          {
            name: "Ooze Resilience",
            description: (
              <span>
                The ooze doesn't take additional damage from critically
                successful attack rolls.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Pseudopod",
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
            damage: "3 toxic damage",
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
            name: "Engulf",
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
            damage: "3 toxic damage",
            success: (
              <span>
                If medium or smaller, the target gets engulfed by the ooze cube.
                While engulfed, the target is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
                , begins drowning, and takes 1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage. An engulfed creatue can use their action to make
                an attack roll against the ooze cube's Guard, and on a success
                or higher, they escape. Otherwise, another creatue can try to
                pull the engulfed creature out using the same attack roll, but
                they also take 3 toxic damage as part of the process.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Necro Ooze",
    tier: "1",
    type: "Ooze",
    role: "Disabler",
    threat: "Boss",
    description:
      "Necro oozes are terrible, magical oozes that look like living blood congealed with bone. Necro oozes form in areas of intense necromantic energy, and have a thirst for the living much like undead.",
    tactics: (
      <span>
        Necro oozes prefer to fight near heroes to use draining pseudopod, and
        uses{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Necro Ooze"
        hp="10"
        evn="11"
        mgt="15"
        res="11"
        pb="2"
        type="Large Ooze"
        tier="1"
        threat="Boss"
        role="Disabler"
        resistances="necrotic 2"
        traits={[
          {
            name: "Ooze Resilience",
            description: (
              <span>
                The ooze doesn't take additional damage from critically
                successful attack rolls.
              </span>
            ),
          },
          {
            name: "Ooze Spawn",
            description: (
              <span>
                When the necro ooze takes damage and has more than 2 hit points,
                a part of it splits off to become a necro slime (see below
                statblock).
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Draining Pseudopod",
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
            defense: "Spirit",
            damage: "3 necroitc damage",
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
        reactions={[
          {
            name: "Siphon Life",
            keywords: "magical, range",
            trigger: "Necro ooze sees a creature within 1 zone heal",
            effect: (
              <span>
                The triggering healing amount is halved, and the necro ooze{" "}
                <ToolTip preset="heals" /> 2
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Drain Life",
            round: "1",
            keywords: "magical, range",
            target: "All creatures in 1 zone within 3 zones",
            defense: "Spirit",
            damage: "3 necrotic damage",
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
            name: "Create Spawn",
            round: "3",
            effect:
              "The necro ooze creates 4 necro slimes within the ooze's zone",
          },
          {
            name: "Eat Spawn",
            round: "5",
            effect: (
              <span>
                The necro ooze kills any number of necro spawn it created, and{" "}
                <ToolTip preset="heals" /> 2 per killed necro spawn. If there
                are no necro spawn left, the necro ooze instead heals 2.
              </span>
            ),
          },
        ]}
      />
    ),
    secondaryMonster: (
      <Monster
        name="Necro Slime"
        hp="2"
        evn="11"
        mgt="15"
        res="11"
        pb="2"
        type="Small Ooze"
        tier="1"
        threat="Minion"
        role=""
        resistances="necrotic 2"
        actions={[
          {
            basic: true,
            name: "Pseudopod",
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
            defense: "Spirit",
            damage: "1 necroitc damage",
          },
        ]}
      />
    ),
  },
];

export default OozeMonsters;
