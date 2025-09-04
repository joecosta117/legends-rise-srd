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
        evn="14"
        mgt="11"
        res="12"
        speeds="fly 1"
        pb="2"
        type="Tiny Fiend"
        tier="1"
        threat="Minor"
        role="Skirmisher"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
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
            defense: "Guard",
            damage: "3 toxic damage",
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
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Soulwretch"
        hp="2"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Small Fiend"
        tier="1"
        threat="Minion"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
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
            defense: "Guard",
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
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Hellhoud"
        hp="12"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Standard"
        role="Bruiser"
        vision="night"
        resistances="fire, unholy"
        weaknesses="holy"
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
          {
            basic: false,
            name: "Fire Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the hellhound's zone</span>,
            defense: "Guard",
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
        dazed creature, the sloth demon always uses feed on laziness as their
        maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Sloth Demon"
        hp="10"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Standard"
        role="Disabler"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        speeds="land 0"
        traits={[
          {
            name: "Stench of Laziness",
            description: (
              <span>
                When an enemy becomes engaged to the sloth demon or starts their
                turn engaged to the sloth demon, the demon makes an attack roll
                against the creatue's Spirit. On a success, they are{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends).
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
            defense: "Guard",
            damage: "3 physical damage",
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
            name: "Feed on Laziness",
            target: "1 hindered or dazed creatue within 1 zone",
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
    threat: "Boss",
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
        hp="60"
        evn="13"
        mgt="11"
        res="13"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Boss"
        role="Skirmisher"
        vision="night"
        resistances="psychic, unholy"
        weaknesses="holy"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monsters get two turns per round, but can't take these
                turns in a row. At the end of a boss monster's turn, they can
                take direct damage equal to double their proficiency bonus to
                end one condition affecting them.
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
            defense: "Guard",
            damage: "6 physical damage",
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
        bossActions={[
          {
            name: "Nightmare Zone",
            round: "1",
            keywords: "magical, range",
            target: <span>1 zone within 2 zones</span>,
            duration: "Scene ends",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (2 psychic damage), and when a creature takes this damage, the
                demon makes an attack roll against the creature's Spirit. On a
                success, the creature is{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            name: "Fearful Surprise",
            round: "3",
            keywords: "magical, range",
            target: <span>1 creature within 2 zones</span>,
            effect: (
              <span>
                Nightmare demon becomes{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  invisible
                </Link>
                , then{" "}
                <Link
                  className="internal-link"
                  to="/combat/rules#special-movement"
                >
                  teleports
                </Link>{" "}
                to the target and uses claw against them. The invisibility ends
                after the attack roll.
              </span>
            ),
          },
          {
            name: "Nourished by Fear",
            round: "5",
            keywords: "magical, range",
            effect: (
              <span>
                The nightmare demon uses{" "}
                <Link className="internal-link" to="/combat-abilities#hinder">
                  hinder
                </Link>{" "}
                against each enemy within 1 zone, and <ToolTip preset="heals" />{" "}
                3 for each enemy they hinder.
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
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        one before using draining kiss. Lust demons will also use demonic charm
        on dangerous heroes to keep themselves safe from harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Lust Demon"
        hp="20"
        evn="12"
        mgt="11"
        res="14"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Major"
        role="Disabler"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: (
              <span>
                Major monsters get two turns per round, but can't take these
                turns in a row.
              </span>
            ),
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
            defense: "Guard",
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
                (next turn ends) and takes 2 unholy damage, while the lust demon{" "}
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
            defense: "Spirit",
            critical:
              "Same as a success, but the effect lasts for the scecne (overcome ends)",
            success: (
              <span>
                Target can't use hostile abilities against the lust demon (turn
                ends), but this effect ends early if the lust demon uses a
                hostile ability against the target.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Treachery Demon",
    tier: "2",
    type: "Fiend",
    role: "Disabler",
    threat: "Major",
    description:
      "Treachery demons are demonic personification of lies and deception. They enjoy turning mortals against one another with webs of deceitful lies through malicious manipulation. Treachery demons appear as large humanoid spiders with their many arms usually concealed by a cloak covering their body and keeping their grotesque face in shadow.",
    tactics: (
      <span>
        Treachery demons get close to the heroes to use venemous mandibles or
        profane webs if available. These demons always use treacherous whispers
        to turn heroes against each other.
      </span>
    ),
    statBlock: (
      <Monster
        name="Treachery Demon"
        hp="52"
        evn="15"
        mgt="17"
        res="15"
        pb="4"
        type="Large Fiend"
        tier="2"
        threat="Major"
        role="Disabler"
        vision="night"
        resistances="toxic, unholy"
        weaknesses="holy"
        speeds="climb 1"
        traits={[
          {
            name: "Shapechanger",
            description: (
              <span>
                Treachery demons can take the form of any humanoid creature to
                appear more friendly to mortals.
              </span>
            ),
          },
          {
            name: "Major Monster",
            description: (
              <span>
                Major monsters get two turns per round, but can't take these
                turns in a row.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Venemous Mandibles",
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
            damage: "6 toxic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Web",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
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
            name: "Profane Webs",
            keywords: "magical, recharge",
            target: <span>1d4+1 enemies within the demon's zone</span>,
            defense: "Guard",
            critical:
              "Same as a success, and the target takes +1 misfortune to overcome rolls against this effect",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends) and while seized, the target takes 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing damage
                </Link>
              </span>
            ),
            partial: "Seized (next turn ends)",
          },
        ]}
        maneuvers={[
          {
            name: "Treacherous Whispers",
            target: "1 creatue within 2 zones",
            keywords: "magical, range",
            defense: "Spirit",
            critical: "Demon controls the target's turns (overcome ends)",
            success: <span>Demon controls the target's next turn</span>,
          },
        ]}
      />
    ),
  },
  {
    name: "Greed Demon",
    tier: "2",
    type: "Fiend",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Greed demons are demonic personification of greed, primarily for gold and riches. They fill mortals with an unhealthy obsession with material wealth that drives mortals to commit immoral acts. Greed demons resemble like huge overweight humanoids, but their stomach is a giant gaping maw that eagerly swallows anything of value. They often wear lavish jewelry stolen from mortals they've devoured.",
    tactics: (
      <span>
        Greed demons get close to the heroes to use hungry maw and often uses{" "}
        <Link className="internal-link" to="/combat-abilities#hinder">
          hinder
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as maneuvers.
      </span>
    ),
    statBlock: (
      <Monster
        name="Greed Demon"
        hp="30"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Standard"
        role="Bruiser"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        traits={[
          {
            name: "Treasure Sense",
            description: (
              <span>
                A greed demon can see anyone{" "}
                <Link className="internal-link" to="/rules/combat#hidden">
                  hidden
                </Link>{" "}
                or invisible within 1 zone if they have a relic or treasure or
                significant value.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Hungry Maw",
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
                If larger or smaller, the target gets swallowed by the greed
                demon. While swallowed, the target is{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  blinded
                </Link>
                ,{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
                , and takes 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage. If a swallowed creature deals 8 or more damage on
                a single turn, the greed demon throws up the target.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Wrath Demon",
    tier: "2",
    type: "Fiend",
    role: "Bruiser",
    threat: "Major",
    description:
      "Wrath demons are demonic personification of rage and violence. They enjoy inciting violence among mortals and making mortals commit horrible atrocities. Wrath demons appear as huge gorilla like humanoids with four arms ending in claws and red scales covering parts of their body",
    tactics: (
      <span>
        Wrath demons get close to the heroes to use thrash or claw, then fling
        foe of any seized hero.
      </span>
    ),
    statBlock: (
      <Monster
        name="Wrath Demon"
        hp="60"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        traits={[
          {
            name: "Major Monster",
            description: (
              <span>
                Major monsters get two turns per round, but can't take these
                turns in a row.
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
            defense: "Guard",
            damage: "8 physical damage",
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
            name: "Thrash",
            keywords: "melee, weapon",
            target: <span>1d4+1 enemies within the demon's zone</span>,
            effect:
              "The wrath demon uses claw against each target, but the attack roll's degree of success is one lower",
          },
        ]}
        maneuvers={[
          {
            name: "Fling Foe",
            target: "1 creature seized by the demon",
            keywords: "range",
            effect: (
              <span>
                Target flies through the air to land one zone away, taking
                double the crash damage, and falling{" "}
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
    name: "Pride Demon",
    tier: "2",
    type: "Fiend",
    role: "Tank",
    threat: "Standard",
    description:
      "Pride demons are demonic personification of arrogance. They enjoy encouraging mortals to indulge in their pride and become overconfident to a dangerous degree. Pride demons appear as tall, majestic obisidian humanoids with golden veins and glowing red eyes while they wield golden, curved blades.",
    tactics: (
      <span>
        Pride demons get close to the heroes to keep them within their prideful
        aura, then use golden sword or blinding majesty if available. For
        maneuvers, the pride demon uses{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Pride Demon"
        hp="30"
        evn="17"
        mgt="17"
        res="15"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Standard"
        role="Tank"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        traits={[
          {
            name: "Prideful Aura",
            description: (
              <span>
                The pride demon's aura fills their enemies with overconfidence.
                Enemies within the pride demon's zone can't{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                or{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleport
                </Link>{" "}
                away from the demon's zone.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Golden Sword",
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
          {
            basic: false,
            name: "Blinding Majesty",
            keywords: "magical, recharge",
            target: <span>All enemies within the demon's zone</span>,
            defense: "Spirit",
            critical: <span>blinded (overcome ends)</span>,
            success: (
              <span>
                <Link className="internal-link" to="/rules/combat#stealth">
                  blinded
                </Link>{" "}
                (next turn ends)
              </span>
            ),
            partial: "hindered (next turn ends)",
          },
        ]}
      />
    ),
  },
  {
    name: "Envy Demon",
    tier: "2",
    type: "Fiend",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Envy demons are demonic personification of jealousy. They enjoy inciting great jealousy among mortals to push them to commit heinous acts. Envy demons are shapechangers, always changing form to appear like those they most envy, but their natural form is a green scaled humanoid with claws.",
    tactics: (
      <span>
        Envy demons get close to the heroes to keep them within range of stolen
        precision, then they use claw or siphon identity if available. For
        maneuvers, the envy demon uses{" "}
        <Link className="internal-link" to="/combat-abilities#hinder">
          hinder
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Envy Demon"
        hp="26"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Standard"
        role="Skirmisher"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        traits={[
          {
            name: "Shapechanger",
            description: (
              <span>
                Envy demons can take the form of any humanoid creature whose
                appearance or power they covet.
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
            defense: "Guard",
            damage: "8 physical damage",
          },
          {
            basic: false,
            name: "Siphon Identity",
            keywords: "magical, range, recharge",
            target: <span>1 creature within 2 zones</span>,
            defense: "Spirit",
            damage: "8 psychic damage",
            critical: <span>Same as a success, but dazed (overcome ends)</span>,
            success: (
              <span>
                Envy demon takes on the appearance of the target. The target
                experiences disorientation as the demon starts stealing their
                memories and becomes{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Stolen Precision",
            keywords: "magical, range",
            trigger: "The envy demon sees a creature within 1 zone make a roll",
            effect:
              "Creature rerolls and takes the lowest result. The envy demon can instead use the highest result for a roll (next turn ends). The creature is then immune to this ability for the scene.",
          },
        ]}
      />
    ),
  },
  {
    name: "Horned Demon",
    tier: "2",
    type: "Fiend",
    role: "",
    threat: "Minion",
    description:
      "Horned demons are the foot soldiers of hell and answer the generals and demon lords. Horned demons are muscular humanoid red-skinned demons with curved horns and often wield various jagged weapons.",
    tactics: (
      <span>
        Horned demons fight in groups and rush heroes in hopes to prove their
        worth. Each turn they use weapon and{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Horned Demon"
        hp="4"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Medium Fiend"
        tier="2"
        threat="Minion"
        vision="night"
        resistances="fire, unholy"
        weaknesses="holy"
        traits={[
          {
            name: "Infernal Death",
            description:
              "When a horned demon is reduced to 0 hit points, it explodes in profane energy. Each engaged creature to the horned demon takes 2 unholy damage.",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Spear",
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
            name: "Throw Hellfire",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "1 fire damage and 1 unholy damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Infernal Herald",
    tier: "2",
    type: "Fiend",
    role: "Support",
    threat: "Major",
    description:
      "Infernal heralds are representatives of the infamous demon lords, the rulers of the lower realms. Fortunate, or unfortunate depending on their master, chosen demons are promoted to become heralds and are treated with respect by other demons. Each infernal herald appears differntly depending on their patron who reshapes the herald based on their whim.",
    tactics: (
      <span>
        Infernal heralds prefer to stay further away from heroes to use mark of
        the pit while using summon demons to conjure lackeys to distract heroes.
        When the infernal herald or many allies are hurt, it will use demon
        lord's blessing.
      </span>
    ),
    statBlock: (
      <Monster
        name="Infernal Herald"
        hp="52"
        evn="14"
        mgt="13"
        res="16"
        pb="4"
        type="Large Fiend"
        tier="2"
        threat="Major"
        role="Support"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: (
              <span>
                Major monsters get two turns per round, but can't take these
                turns in a row.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Mark of the Pit",
            keywords: "magical, ranged",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "6 unholy damage",
            success: (
              <span>
                Target is cursed until the start of the demon herald's next
                turn. While cursed, creatures gain{" "}
                <Modifier type="f" count="1" /> on attack rolls against the
                target
              </span>
            ),
          },
          {
            basic: false,
            name: "Demon Lord's Blessing",
            keywords: "magical, recharge",
            target: <span>All enemies within the infernal herald's zone</span>,
            defense: "Spirit",
            damage: "6 unholy damage",
            effect: (
              <span>
                Infernal Herald and allies within the demon's zone{" "}
                <ToolTip preset="heal" /> 4
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Summon Demons",
            keywords: "magical, range",
            effect: "2 horned demons are summoned within 1 zone",
          },
        ]}
      />
    ),
  },
  {
    name: "Winged Demon",
    tier: "3",
    type: "Fiend",
    role: "",
    threat: "Minion",
    description:
      "Winged demons are the elit soldiers of hell. Winged demons are large, muscular humanoid demons with bat wings and long, curved claws.",
    tactics: (
      <span>
        Winged demons fight in groups and rush heroes in hopes to prove their
        worth. Each turn they use claw and{" "}
        <Link className="internal-link" to="/conditions#taunt">
          taunt
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Winged Demon"
        hp="6"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Large Fiend"
        tier="3"
        threat="Minion"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        traits={[
          {
            name: "Infernal Death",
            description:
              "When a winged demon is reduced to 0 hit points, it explodes in profane energy. Each engaged creature to the winged demon takes 3 unholy damage.",
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
            defense: "Guard",
            damage: "3 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/combat-abilities#seized">
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
    name: "Conquest Demon",
    tier: "3",
    type: "Fiend",
    role: "Bruiser",
    threat: "Major",
    description:
      "Conquest demons are the generals of the lower realms, only answering to the demon lords. Conquest demons marshal the armies of hell to fight the celestial hosts of the heavens or even lead demons against other demons in the case of political in fighting. Conquest demons are huge humanoid demons with with fiery skin, large wings, and wield weapons of pure fire.",
    tactics: (
      <span>
        Conquest demons prefer to get close to the heroes to get them in range
        of their flame aura. A conquest demon will start off combat by using
        hellfire entrance to teleport to their foes. Each turn the demon will
        use flaming sword and flaming whip.
      </span>
    ),
    statBlock: (
      <Monster
        name="Conquest Demon"
        hp="108"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Huge Fiend"
        tier="3"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="fire, unholy"
        weaknesses="cold, holy"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: (
              <span>
                Major monsters get two turns per round, but can't take these
                turns in a row.
              </span>
            ),
          },
          {
            name: "Death Throes",
            description: (
              <span>
                When the conquest demon is reduced to 0 hit points, it explodes
                in hellfire. Make an attack roll against each creature's Spirit
                within 1 zone of the conquest demon, dealing 6 fire damage and 6
                unholy damage. Any creature reduced to 0 hit points from this
                damage is incinerated to ash.
              </span>
            ),
          },
          {
            name: "Flame Aura",
            description: (
              <span>
                The conquest demon's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 fire) to enemies.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Flaming Sword",
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
            damage: "12 fire damage",
          },
          {
            basic: false,
            name: "Hellfire Arrival",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "12 unholy damage",
            effect: (
              <span>
                Conquest demon can{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleport
                </Link>{" "}
                to the targeted zone.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Flame Whip",
            keywords: "range, weapon",
            target: "1 creature within 1 zone",
            defense: "Guard",
            damage: "6 fire damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends) and the conquest demon can pull the target to
                their zone
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "War Demon",
    tier: "3",
    type: "Fiend",
    role: "Tank",
    threat: "Standard",
    description:
      "War demons are the greatest warriors of the hells and their arrival on the battlefield ensures doom for their foes. Unlike conquest demons that lead the armies of hell, war demons prefer to be in the thick of battle and revel in bloodshed. War demons are large demons encased in blood stained armor with dozens of weapons impaled on their body from past attempts to kill them. War demons prefer to wield large jagged glaives while telekinetically pulling weapons from their body to impale their foes.",
    tactics: (
      <span>
        War demons prefer to get close to the heroes to use giant glaive or all
        foes to me! if available. If a foe tries to run, the war demon uses
        their no escape reaction. Against ranged foes, the war demon uses flying
        weapon to keep them in place.
      </span>
    ),
    statBlock: (
      <Monster
        name="War Demon"
        hp="54"
        evn="20"
        mgt="19"
        res="16"
        pb="6"
        type="Large Fiend"
        tier="3"
        threat="Standard"
        role="Tank"
        vision="night"
        resistances="unholy"
        weaknesses="holy"
        actions={[
          {
            basic: true,
            name: "Giant Glaive",
            keywords: "weapon",
            target: <span>1 creature within the war demon's zone</span>,
            defense: "Guard",
            damage: "9 physical damage",
          },
          {
            basic: false,
            name: "All Foes To Me!",
            keywords: "magical, recharge",
            target: <span>All enemies within 1 zone</span>,
            defense: "Guard",
            damage: "9 physical",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                and pulled to become{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                to the war demon
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Flying Weapon",
            keywords: "range, weapon",
            target: "1 creature within 3 zones",
            defense: "Guard",
            damage: "3 physcial damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                until the target uses a maneuver to remove the impaling weapon
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "No Escape",
            keywords: "range, weapon",
            target: (
              <span>
                1 creature within the war demon's zone uses{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
            effect:
              "The war demon uses giant glaive against the triggering creature. On a success or higher, the target is knocked prone",
          },
        ]}
      />
    ),
  },
  {
    name: "Death Demon",
    tier: "3",
    type: "Fiend",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Death demons are the greatest assassins of the hells and their appearance marks doom for their prey. Unlike other demons that enjoy tempting mortals into sin to condemn their soul, death demons consume the souls of their victims. Death demons look like large vulture humanoids that wield two curved daggers that leak necrotic energy.",
    tactics: (
      <span>
        Death demons prefer to get close to the heroes with their quick fly
        speed to use death blades. Death demons usually focus on the weakest
        hero, hoping to trigger consume soul and nourished by death. In addition
        to death blades, death demons use their maneuver to move across the
        battlefield to evade retaliation.
      </span>
    ),
    statBlock: (
      <Monster
        name="Death Demon"
        hp="48"
        evn="18"
        mgt="15"
        res="16"
        pb="6"
        type="Large Fiend"
        tier="3"
        threat="Standard"
        role="Skirmisher"
        vision="night"
        resistances="necrotic, unholy"
        weaknesses="holy"
        speeds="fly 2"
        traits={[
          {
            name: "Nourished By Death",
            description: (
              <span>
                The death demon gains <Modifier type="f" count="1" /> on attack
                rolls against <ToolTip preset="shaken" /> creatures. When the
                death demon gets a critical success on an attack roll or reduces
                a creature to 0 hit points, the death demon{" "}
                <ToolTip preset="heals" /> 6.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Death Blades",
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
            damage: "12 necrotic damage",
            success: (
              <span>
                3{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                necrotic damage
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Consume Soul",
            keywords: "magical",
            trigger: (
              <span>
                The death demon deals damage to a <ToolTip preset="shaken" />{" "}
                creature, or deals damage that makes a creature shaken
              </span>
            ),
            target: "Triggering creature",
            defense: "Spirit",
            critical:
              "Same as a success, and the target is reduced to 0 hit points",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            partial: "hindered (next turn ends)",
          },
        ]}
      />
    ),
  },
  {
    name: "Plague Demon",
    tier: "3",
    type: "Fiend",
    role: "Disabler",
    threat: "Standard",
    description:
      "Plague demons are the feared even by other demons for their ability to spread magical diseases that agonize their victims. A plague demon's arrival in the mortal realms is soon followed by horrendous pandemics that decimate nearby civilizations unless the demon is stopped. Plague demons look like large beetle like humanoid with toxic slime dripping from its mandibles and claws.",
    tactics: (
      <span>
        Plague demons prefer to get close to the heroes to use venemous rend and
        keep heroes close for plague aura. Plague demons usually start combat by
        using madness plague on a group of heroes before diving in to use
        venemous rend.
      </span>
    ),
    statBlock: (
      <Monster
        name="Plague Demon"
        hp="48"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Large Fiend"
        tier="3"
        threat="Standard"
        role="Disabler"
        vision="night"
        resistances="toxic, unholy"
        weaknesses="holy"
        speeds="fly 1"
        traits={[
          {
            name: "Plague Aura",
            description: (
              <span>
                The plague demon's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 toxic damage) to enemies. When a creature takes this damage,
                the plague demon makes an attack roll against the creature's
                Guard. On a success, the creature is{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>
                .
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Venemous Rend",
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
            damage: "9 toxic damage",
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
            basic: false,
            name: "Madness Plague",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "9 toxic damage",
            success: (
              <span>
                Target is confused (overcome ends), taking 3{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage while confused. While confused, they must use an
                action to{" "}
                <Link className="internal-link" to="/combat-abilities#charge">
                  charge
                </Link>
                ,{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>
                , or use a tier 0 battle spell against their closest ally.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Persistent Disease",
            keywords: "magical, range",
            trigger: (
              <span>
                The plague demon sees a creature within 1 zone get a success on
                an overcome roll against an effect caused by the plague demon
              </span>
            ),
            effect:
              "The creature rerolls the overcome roll and takes the lower result",
          },
        ]}
      />
    ),
  },
  {
    name: "Demon Lord of Greed",
    tier: "3",
    type: "Fiend",
    role: "Artillery",
    threat: "Boss",
    description:
      "The crafty and intelligent demon lord of greed is a master of demonic magic and legends say they created hellfire. Greed rules one of the seven realms of hell, and although they share a greed demon's fascination with treasure, Greed is more interested in acquiring magical knowledge and relics. Many heroes over the ages have tried to fell Greed, but all have fallen, while the arcane demon lord's treasure trove has only grown. The demon lord of greed appears as a tall demonic humanoid with elegant robes and jewels that show off their vast wealth.",
    tactics: (
      <span>
        The demon lord of greed starts combat with rain hellfire to weaken
        heroes, and prefers to stay far away. Each turn, Greed will use
        nullifying curse or hellfire rays while their winged demon minions
        distract the heroes. If a hero gets too close, Greed will use hellfire
        walk to teleport away.
      </span>
    ),
    statBlock: (
      <Monster
        name="Demon Lord of Greed"
        hp="252"
        evn="16"
        mgt="15"
        res="18"
        pb="6"
        type="Large Fiend"
        tier="3"
        threat="Boss"
        role="Artillery"
        vision="night"
        resistances="fire, unholy"
        weaknesses="holy"
        speeds="fly 1"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monsters get two turns per round, but can't take these
                turns in a row. At the end of a boss monster's turn, they can
                take direct damage equal to double their proficiency bonus to
                end one condition affecting them.
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
            defense: "Guard",
            damage: "15 physical damage",
          },
          {
            basic: true,
            name: "Nullifying Curse",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "15 unholy damage",
            success: "Target can't use or benefit from relics (next turn ends)",
          },
          {
            basic: false,
            name: "Hellfire Rays",
            keywords: "magical, range",
            target: <span>1d4 creatures within 3 zones</span>,
            defense: "Spirit",
            damage: "12 unholy damage",
            success: (
              <span>
                6{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                unholy damage
              </span>
            ),
          },
          {
            basic: false,
            name: "Rain Hellfire",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 3 zones within 5 zones</span>,
            defense: "Spirit",
            damage: "18 unholy damage",
            success: (
              <span>
                6{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                unholy damage
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Hellfire Walk",
            keywords: "magical, range",
            target: "up to 1 zone",
            effect: (
              <span>
                Enemies engaged to the demon lord of greed take 6 unholy damage,
                and the demon lord{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                up to anywhere within the targeted zone
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Summon Demons",
            round: "1",
            keywords: "magical, range",
            effect: "Greed conjures 6 greater demon minions within 2 zones",
          },
          {
            name: "Greed's Bounty",
            round: "3",
            keywords: "magical, range",
            target: <span>All enemies</span>,
            defense: "Spirit",
            damage: "18 unholy damage",
            success:
              "Target chooses one of the following: they expend 3 mana if they have 3 mana to spend, or an encounter ability that hasn't been used yet can't be used for this scene.",
          },
          {
            name: "Greed's Hunger",
            round: "5",
            keywords: "magical, range",
            target: <span>All enemies</span>,
            defense: "Spirit",
            critical: "Same as a success, but the healing increases to 9",
            success: (
              <span>
                Target can't use or benefit from relics (overcome ends), and
                demon lord of greed <ToolTip preset="heals" /> 6
              </span>
            ),
            partial: "Target can't use or benefit from relics (next turn ends)",
          },
        ]}
      />
    ),
  },
  {
    name: "Demon Lord of Wrath",
    tier: "3",
    type: "Fiend",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The brutish and dangerous demon lord of wrath is the demonic incarnation of carnage and is a walking apocalypse whose presence signals destruction. Wrath leads hell's armies with many powerful conquest demons under their command. Wrath is a towering muscular demon with volcanic skin encased in hellfire forged armor and wields a giant blade broken by many battles but kept together through powerful magic.",
    tactics: (
      <span>
        The demon lord of wrath prefers to fight near the heroes so they suffer
        from their scorching blood. Each turn, Wrath will use broken blade
        unless they have have enough fury to use wrath unbound. As a maneuver,
        Wrath will use{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Demon Lord of Wrath"
        hp="324"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Huge Fiend"
        tier="3"
        threat="Boss"
        role="Bruiser"
        vision="night"
        resistances="fire, unholy"
        weaknesses="cold, holy"
        speeds="fly 1"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monsters get two turns per round, but can't take these
                turns in a row. At the end of a boss monster's turn, they can
                take direct damage equal to double their proficiency bonus to
                end one condition affecting them.
              </span>
            ),
          },
          {
            name: "Wrath Unbound",
            description: (
              <span>
                When the demon lord of wrath takes damage, they gain 1 wrath up
                to a maximum of 4, which is represented by a d4. Wrath can only
                be increased once per turn. The demon lord adds a number of{" "}
                <Modifier type="f" /> to their attack rolls equal to their
                wrath.
              </span>
            ),
          },
          {
            name: "Scorching Blood",
            description: (
              <span>
                When the demon lord of wrath takes damage, all enemies within
                their zone takes 6 fire damage.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Broken Blade",
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
            damage: "18 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            basic: false,
            name: "Unleash Wrath",
            keywords: "magical",
            target: (
              <span>All enemies within the demon lord of wrath's zone</span>
            ),
            defense: "Guard",
            damage: "15 physical damage",
            effect: (
              <span>
                Wrath swings his sword in a wide arc. Their fury resets to 0,
                and they <ToolTip preset="heal" /> 9
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Titantic Leap",
            round: "1",
            keywords: "range",
            target: "All creatues in 1 zone within 5 zones",
            damage: "15 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
            effect:
              "Wrath leaps across the battlefield, landing in the targeted zone",
          },
          {
            name: "Infernal Rampage",
            round: "3",
            keywords: "magical",
            duration: "Scene ends",
            effect:
              "All negative effects end on the demon lord of wrath and their damage deals direct damage. Their sword ignites in hellfire, making broken blade deal 21 unholy damage and unleash wrath deal 18 unholy damage.",
          },
          {
            name: "Burning Seismic Slam",
            round: "5",
            keywords: "magical, range",
            target: (
              <span>All enemies within the demon lord of wrath's zone</span>
            ),
            defense: "Guard",
            damage: "15 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
            effect: (
              <span>
                {" "}
                The demon lord's zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (6 fire damage) for the scene
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default DemonMonsters;
