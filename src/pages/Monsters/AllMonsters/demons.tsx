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
        hp="10"
        evn="15"
        mgt="11"
        res="13"
        pb="2"
        type="Medium Fiend"
        tier="1"
        threat="Boss"
        role="Skirmisher"
        vision="night"
        resistances="psychic 1, unholy 2"
        weaknesses="holy 2"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monster's hit points equal the listed total multiplied by
                the number of heroes. Boss monsters also get one turn per hero.
                At the end of a boss monster's turn, they can take damage equal
                to their proficiency bonus (this damage can't be reduced in
                anyway) to end one condition affecting them.
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
                (1 psychic damage), and when a creature takes this damage, the
                demon makes an attack roll against the creature's Resolve. On a
                success, the creature is{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn starts)
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
                <Link className="internal-link" to="/conditions#invisible">
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
                2 for each enemy they hinder.
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
        evn="13"
        mgt="17"
        res="15"
        pb="4"
        type="Large Fiend"
        tier="2"
        threat="Major"
        role="Disabler"
        vision="night"
        resistances="unholy 4"
        weaknesses="holy 4"
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
            description: <span>Major monster get two turns per round.</span>,
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
            defense: "EVN",
            damage: "6 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
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
            defense: "EVN",
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
            target: <span>1d4+1 creatures within the demon's zone</span>,
            defense: "MGT",
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
            partial: "Seized (turn ends)",
          },
        ]}
        maneuvers={[
          {
            name: "Treacherous Whispers",
            target: "1 creatue within 2 zones",
            keywords: "magical, range",
            defense: "RES",
            critical: "controlled (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#controlled">
                  controlled
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
        </Link>
        ,{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>
        , or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as maneuvers.
      </span>
    ),
    statBlock: (
      <Monster
        name="Greed Demon"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Standard"
        role="Bruiser"
        vision="night"
        resistances="unholy 4"
        weaknesses="holy 4"
        traits={[
          {
            name: "Treasure Sense",
            description: (
              <span>
                A greed demon can see anyone{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
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
            defense: "EVN",
            damage: "8 physical damage",
            success: (
              <span>
                If larger or smaller, the target gets swallowed by the greed
                demon. While swallowed, the target is{" "}
                <Link className="internal-link" to="/conditions#blinded">
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
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="unholy 4"
        weaknesses="holy 4"
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
            target: <span>1d4+1 creatures within the demon's zone</span>,
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
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Standard"
        role="Tank"
        vision="night"
        resistances="physical 2, unholy 4"
        weaknesses="holy 4"
        traits={[
          {
            name: "Prideful Aura",
            description: (
              <span>
                The pride demon's aura fills their enemies with overconfidence.
                Enemies within the pride demon's zone can't{" "}
                <Link
                  className="internal-link"
                  to="/combat-abilities#disengage"
                >
                  disengage
                </Link>
                ,{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
                , or{" "}
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
            defense: "EVN",
            damage: "6 physical damage",
          },
          {
            basic: false,
            name: "Blinding Majesty",
            keywords: "magical, recharge",
            target: <span>All enemies within the demon's zone</span>,
            defense: "RES",
            critical: <span>blinded (overcome ends)</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#blinded">
                  blinded
                </Link>{" "}
                (turn ends)
              </span>
            ),
            partial: "hindered (turn ends)",
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
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Fiend"
        tier="2"
        threat="Standard"
        role="Skirmisher"
        vision="night"
        resistances="unholy 4"
        weaknesses="holy 4"
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
            defense: "EVN",
            damage: "8 physical damage",
          },
          {
            basic: false,
            name: "Siphon Identity",
            keywords: "magical, range, recharge",
            target: <span>1 creature within 2 zones</span>,
            defense: "RES",
            damage: "8 psychic damage",
            critical: (
              <span>Same as a success, but confused (overcome ends)</span>
            ),
            success: (
              <span>
                Envy demon takes on the appearance of the target. The target
                experiences disorientation as the demon starts stealing their
                memories and becomes{" "}
                <Link className="internal-link" to="/conditions#confused">
                  confused
                </Link>{" "}
                (turn ends)
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
              "Creature rerolls and takes the lowest result. The envy demon can instead use the highest result for a roll (turn ends). The creature is then immune to this ability for the scene.",
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
        name="Horned Demon"
        hp="4"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Medium Fiend"
        tier="2"
        threat="Minion"
        vision="night"
        resistances="fire 2, unholy 4"
        weaknesses="holy 4"
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
            name: "Weapon",
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
            damage: "2 physical damage",
          },
          {
            basic: true,
            name: "Throw Hellfire",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
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
        evn="15"
        mgt="13"
        res="17"
        pb="4"
        type="Large Fiend"
        tier="2"
        threat="Major"
        role="Support"
        vision="night"
        resistances="unholy 4"
        weaknesses="holy 4"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Mark of the Pit",
            keywords: "magical, ranged",
            target: <span>1 creature within 3 zones</span>,
            defense: "RES",
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
            defense: "RES",
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
        <Link className="internal-link" to="/conditions#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Winged Demon"
        hp="6"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Large Fiend"
        tier="3"
        threat="Minion"
        vision="night"
        resistances="unholy 4"
        weaknesses="holy 4"
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
            defense: "EVN",
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
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Huge Fiend"
        tier="3"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="fire 6, unholy 6"
        weaknesses="cold 6, holy 6"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
          {
            name: "Death Throes",
            description: (
              <span>
                When the conquest demon is reduced to 0 hit points, it explodes
                in hellfire. Make an attack roll against each creature's Evasion
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
                (3 fire) only for enemies.
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
            defense: "EVN",
            damage: "12 fire damage",
          },
          {
            basic: false,
            name: "Hellfire Arrival",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "EVN",
            damage: "6 fire damage and 6 unholy damage",
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
            defense: "EVN",
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
      "War demons are the greatest warriors of the hells and their arrival on the battlefield ensures doom for their foes. Unlike conquest demons that lead the armies of hell, war demons prefer to be in the thick of battle and revel in bloodshed. War demons are large demons encased in plate armor with dozens of weapons impaled on their body from past attempts to kill them.",
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
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Large Fiend"
        tier="3"
        threat="Standard"
        role="Tank"
        vision="night"
        resistances="physical 3, unholy 6"
        weaknesses="holy 6"
        actions={[
          {
            basic: true,
            name: "Giant Glaive",
            keywords: "weapon",
            target: <span>1 creature within the war demon's zone</span>,
            defense: "EVN",
            damage: "9 physical damage",
          },
          {
            basic: false,
            name: "All Foes To Me!",
            keywords: "magical, recharge",
            target: <span>All enemies within 1 zone</span>,
            defense: "MGT",
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
            defense: "EVN",
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
];

export default DemonMonsters;
