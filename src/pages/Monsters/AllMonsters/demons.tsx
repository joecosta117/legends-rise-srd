import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const DemonMonsters = [
  {
    name: "Imp",
    tier: "1",
    type: "Fiend",
    role: "Skirmisher",
    threat: "Minor",
    description:
      "Imps are some of the lowliest of demons, and often serve as familiars for mages that study demonic magic.",
    tactics: (
      <span>
        Imps like to fight in groups by using their flight to avoid too much
        harm. Each turn, an imp will use poison rend then try to escape with
        their flight.
      </span>
    ),
    statBlock: (
      <Monster
        name="Imp"
        hp="5"
        evn="15"
        mgt="11"
        res="13"
        speeds="fly 1"
        pb="2"
        type="Tiny Fiend"
        tier="1"
        threat="Minor"
        role="Skirmisher"
        vision="night"
        resistances="unholy 2"
        weaknesses="holy 2"
        actions={[
          {
            basic: true,
            name: "Poisoned Rend",
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
            defense: "EVN",
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
        ]}
      />
    ),
  },
  {
    name: "Soulwretch",
    tier: "1",
    type: "Fiend",
    role: "",
    threat: "Minion",
    description:
      "Soulwretches are the lowest form of demons as they are fresh souls condemned to the lower realms. Soulwretches resemble vaguely humanoid sludge that's constantly in pain.",
    tactics: (
      <span>
        Soulwretches fight in groups and rush heroes in hopes to prove their
        worth. Each turn they use sludge slam and{" "}
        <Link className="internal-link" to="/conditions#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/conditions#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Soulwretch"
        hp="2"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small Fiend"
        tier="1"
        threat="Minion"
        vision="night"
        resistances="unholy 2"
        weaknesses="holy 2"
        actions={[
          {
            basic: true,
            name: "Sludge Slam",
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
            defense: "EVN",
            damage: "1 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Hellhoud",
    tier: "1",
    type: "Fiend",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Hellhouds are the fiery hounds of the underworld and used by other demons to retrieve wayward souls.",
    tactics: (
      <span>
        Hellhouds charge the heroes using bite or fire breath if available, and
        will{" "}
        <Link className="internal-link" to="/conditions#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/conditions#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Hellhoud"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Standard"
        role="Bruiser"
        vision="night"
        resistances="fire 1, unholy 2"
        weaknesses="holy 2"
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
            defense: "EVN",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Fire Breath",
            keywords: "recharge",
            target: <span>1d4+1 creatures within the hellhound's zone</span>,
            defense: "EVN",
            damage: "3 fire damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Sloth Demon",
    tier: "1",
    type: "Fiend",
    role: "Disabler",
    threat: "Standard",
    description:
      "Sloth demons are demonic personification of the sin of sloth, and the weakest of the sin demons. They resemble humanoid size, demonic slugs with glazed over humanoid faces.",
    tactics: (
      <span>
        Sloth demons slowly charge the heroes to use sloth slam and get heroes
        close enough for stench of laziness. If there is a nearby hindered or
        slowed creature, the sloth demon always uses feed on laziness as their
        maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Sloth Demon"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Standard"
        role="Disabler"
        vision="night"
        resistances="unholy 2"
        weaknesses="holy 2"
        speeds="land 0"
        traits={[
          {
            name: "Stench of Laziness",
            description: (
              <span>
                When an enemy becomes engaged to the sloth demon or starts their
                turn engaged to the sloth demon, the demon makes an attack roll
                against the creatue's Might. On a success, they are{" "}
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
                </Link>{" "}
                (turn starts).
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Sloth Slam",
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
            defense: "EVN",
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
        ]}
        maneuvers={[
          {
            name: "Feed on Laziness",
            target: "1 hindered or slowed creatue within 1 zone",
            effect: (
              <span>
                Sloth demon gains 2{" "}
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
    name: "Nightmare Demon",
    tier: "1",
    type: "Fiend",
    role: "Skirmisher",
    threat: "Major",
    description:
      "Nightmare demons are demonic personification of terror, and can shape change to appear as your worst fear. They stalk their prey, choosing to attack at the moment when they are most scared.",
    tactics: (
      <span>
        Nightmare demons get close to the heroes to use nightmare form and then
        focus on killing their chosen target. Each turn the nightmare demon will
        use claw and{" "}
        <Link className="internal-link" to="/combat-abilities#hinder">
          hinder
        </Link>{" "}
        for their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Nightmare Demon"
        hp="20"
        evn="15"
        mgt="11"
        res="13"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Major"
        role="Skirmisher"
        vision="night"
        resistances="unholy 2"
        weaknesses="holy 2"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Claw",
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
            defense: "EVN",
            damage: "4 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Nightmare Form",
            keywords: "magical, range",
            target: "1 creatue within 2 zones",
            duration: "Until the nightmare demon uses this ability again",
            effect: (
              <span>
                The nightmare demon takes the visual form of the target's fear.
                While in this form, the target takes{" "}
                <Modifier type="mf" count="1" /> to rolls against the nightmare
                demon, and the nightmare gains <Modifier type="f" count="1" />{" "}
                on attack rolls against the target. The nightmare fiend gains
                appropriate traits of their new form such as a fly speed if the
                form has wings or ability to breath underwater if its an aquatic
                creature.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Lust Demon",
    tier: "1",
    type: "Fiend",
    role: "Disabler",
    threat: "Major",
    description:
      "Lust demons are demonic personification of lust, and are often called succubus or incubus. They enjoy luring their prey into a life of sinful debauchery so their souls will be condemned to the lower realms.",
    tactics: (
      <span>
        Lust demons get close to the heroes to use claw or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        one before using draining kiss. Lust demons will also use demonic charm
        on dangerous heroes to keep themselves safe from harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Lust Demon"
        hp="20"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Major"
        role="Disabler"
        vision="night"
        resistances="unholy 2"
        weaknesses="holy 2"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
          {
            name: "Shapechanger",
            description: (
              <span>
                Lust demons can take the form of any humanoid creature to appear
                more alluring to mortals.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Claw",
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
            defense: "EVN",
            damage: "3 physical damage",
          },
          {
            basic: false,
            name: "Draining Kiss",
            keywords: "magical, melee",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature that is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
              </span>
            ),
            effect: (
              <span>
                Target becomes{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends) and takes 2 unholy damage, while the lust demon{" "}
                <ToolTip preset="heals" /> 2.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Demonic Charm",
            target: "1 creatue within 2 zones",
            keywords: "magical, range",
            defense: "RES",
            critical: "charmed (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#charmed">
                  charmed
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default DemonMonsters;
