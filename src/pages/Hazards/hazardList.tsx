import Hazard from "../../components/Hazard";
import { Link } from "react-router-dom";
import Monster from "../../components/Monster";

const HazardList = [
  {
    name: "Siphoning Spirits",
    tier: "1",
    threat: "Standard",
    description:
      "Siphoning spirits are malevolent entities that drain the life force of the living. They often haunt places of death or decay, preying on the weak and unsuspecting.",
    statBlock: (
      <Hazard
        name="Siphoning Spirits"
        countdown="d6"
        tier="1"
        threat="Standard"
        consequence="4 necrotic damage"
        actions={[
          {
            basic: true,
            name: "Siphon Life",
            keywords: "magical",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
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
      />
    ),
  },
  {
    name: "Storm Altar",
    tier: "1",
    threat: "Standard",
    description:
      "Storm altars are a powerful conduit of elemental energy, often found in places where storms frequently occur. It crackles with raw lightning power, waiting to be unleashed upon those who dare to approach it.",
    statBlock: (
      <Hazard
        name="Storm Altar"
        countdown="d6"
        tier="1"
        threat="Standard"
        consequence="4 lightning damage"
        actions={[
          {
            basic: true,
            name: "Fork Lightning",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 lightning damage",
            success: (
              <span>
                Make this same attack roll against another creature within 1
                zone of the original target, and the lightning stops
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Astral Rift",
    tier: "3",
    threat: "Standard",
    description:
      "Astral rifts are a mysterious and dangerous phenomenon that tears through the fabric of reality, creating a gateway to the astral realm. These rifts are often found in areas of high magical energy or where powerful spells have been cast.",
    statBlock: (
      <Hazard
        name="Astral Rift"
        countdown="d6"
        tier="3"
        threat="Standard"
        consequence="12 arcane damage"
        actions={[
          {
            basic: true,
            name: "Dimensional Jolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "12 arcane damage",
            critical: (
              <span>
                Same as a success, but the target is in the astral realm for the
                scene (overcome ends)
              </span>
            ),
            success: (
              <span>
                Target is teleported to the astral realm, but reappears at the
                end of their next turn.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Temporal Flux",
    tier: "2",
    threat: "Standard",
    description:
      "Temporal fluxes is a rare and enigmatic phenomenon that disrupts the flow of time itself. These fluxes can occur in areas of intense magical energy or where powerful temporal magic has been used.",
    statBlock: (
      <Hazard
        name="Temporal Flux"
        countdown="d6"
        tier="2"
        threat="Standard"
        consequence="8 arcane damage"
        actions={[
          {
            basic: true,
            name: "Slow Down Time",
            keywords: "magical",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
            defense: "Spirit",
            damage: "4 arcane damage",
            critical: <span>Same as a success, but dazed (overcome ends)</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
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
    name: "Doom Chimes",
    tier: "1",
    threat: "Standard",
    description:
      "Doom chimes are haunted bells that emit a chilling sound when rung. These eerie chimes are often found in abandoned places or near sites of tragedy, and their mournful toll can instill fear in the hearts of those who hear them.",
    statBlock: (
      <Hazard
        name="Doom Chimes"
        countdown="d6"
        tier="1"
        threat="Standard"
        consequence="4 necrotic damage"
        actions={[
          {
            basic: true,
            name: "Ringing of Doom",
            keywords: "magical",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
            defense: "Spirit",
            critical: "Same as a success, and the target falls prone from fear",
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
    name: "Bloodsoaked Ground",
    tier: "1",
    threat: "Major",
    description:
      "Bloodsoaked grounds are cursed battlefields or other places where many died, and now the blood of the fallen reanimate to grab at the feet of the living. This ground is saturated with the blood of countless battles, and it thirsts for more.",
    statBlock: (
      <Hazard
        name="Bloodsoaked Ground"
        countdown="d12"
        tier="1"
        threat="Major"
        consequence="4 necrotic damage"
        traits={[
          {
            name: "Major Hazard",
            description: <span>Major hazards get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Grasp of the Dead",
            keywords: "magical",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
            defense: "Spirit",
            damage: "2 necrotic damage",
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
    name: "Restless Tomb",
    tier: "2",
    threat: "Standard",
    description:
      "Restless tombs are ancient sarcophagi or burial sites that have been disturbed, unleashing restless spirits and undead guardians. These tombs are often found in forgotten catacombs or ancient burial grounds, where the dead refuse to rest.",
    statBlock: (
      <Hazard
        name="Restless Tomb"
        countdown="d6"
        tier="2"
        threat="Standard"
        consequence="8 necrotic damage"
        actions={[
          {
            basic: true,
            name: "Grasp of the Dead",
            keywords: "magical",
            effect: "The hazard summons two ghost warriors within 1 zone",
          },
        ]}
      />
    ),
    secondaryMonster: (
      <Monster
        name="Ghostly Warrior"
        hp="4"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Medium Undead"
        tier="2"
        threat="Minion"
        role=""
        vision="night"
        speeds={
          <span>
            flying 1,{" "}
            <Link className="internal-link" to="/rules/combat#special-movement">
              phasing
            </Link>
          </span>
        }
        resistances="necrotic, physical"
        weaknesses="holy"
        actions={[
          {
            basic: true,
            name: "Ghostly Weapon",
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
            damage: "2 necrotic damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Carnivorous Vines",
    tier: "1",
    threat: "Standard",
    description:
      "Carnivorous vines are living plants that lash at trespassers in hopes to consume the foolish. These violent plants are often used by evil druids or angry faeries to guard their groves.",
    statBlock: (
      <Hazard
        name="Carnivorous Vines"
        countdown="d6"
        tier="1"
        threat="Standard"
        consequence="4 physical damage"
        actions={[
          {
            basic: true,
            name: "Grasping Vines",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
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
      />
    ),
  },
  {
    name: "Sporespawn Fungus",
    tier: "1",
    threat: "Standard",
    description:
      "Sporespawn fungi are a fungal colony that releases toxic spores that poison the living. These dangerous fungus are found in the night lands or deep within caves.",
    statBlock: (
      <Hazard
        name="Sporespawn Fungus"
        countdown="d6"
        tier="1"
        threat="Standard"
        consequence="4 toxic damage"
        actions={[
          {
            basic: true,
            name: "Toxic Spores",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
            defense: "Guard",
            damage: "2 toxic damage",
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
    name: "Howling Tree",
    tier: "2",
    threat: "Standard",
    description:
      "Howling trees are cursed trees that unleash a haunting wail when the wind passes through their branches. These eerie trees are often found in haunted forests or near sites of tragedy, and their mournful cries can instill fear in the hearts of those who hear them.",
    statBlock: (
      <Hazard
        name="Howling Tree"
        countdown="d6"
        tier="2"
        threat="Standard"
        consequence="8 psychic damage"
        actions={[
          {
            basic: true,
            name: "Paralyzing Wail",
            keywords: "magical",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
            defense: "Spirit",
            damage: "4 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
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
    name: "Cursed Idol",
    tier: "2",
    threat: "Major",
    description:
      "Cursed idols are statues of ancient deities or dark entities that radiate malevolent energy. These idols are often found in forgotten temples or hidden cult lairs, and they can corrupt the minds of those who come into contact with them.",
    statBlock: (
      <Hazard
        name="Cursed Idol"
        countdown="d12"
        tier="2"
        threat="Major"
        consequence="8 unholy damage"
        traits={[
          {
            name: "Major Hazard",
            description: <span>Major hazards get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Profane Smite",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "8 unholy damage",
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
    name: "Eldritch Obelisk",
    tier: "2",
    threat: "Major",
    description:
      "Eldritch obelisks are twisted pillars of dark stone that hum with an otherworldly energy. These obelisks are often found in places of ancient power or where the veil between dimensions is thin, and they can drive those who gaze upon them to madness.",
    statBlock: (
      <Hazard
        name="Eldritch Obelisk"
        countdown="d12"
        tier="2"
        threat="Major"
        consequence="8 psychic damage"
        traits={[
          {
            name: "Major Hazard",
            description: <span>Major hazards get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Maddening Whispers",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "8 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#confused">
                  confused
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
    name: "Blasphemous Tome",
    tier: "1",
    threat: "Standard",
    description:
      "Blasphemous tomes are books of unholy knowledge bound in human skin and inked in blood. These sinister tomes are often found in the libraries of dark cults or hidden chambers of forbidden knowledge, and they can corrupt the minds of those who read them.",
    statBlock: (
      <Hazard
        name="Blasphemous Tome"
        countdown="d6"
        tier="1"
        threat="Standard"
        consequence="4 unholy damage"
        actions={[
          {
            basic: true,
            name: "Unending Pain",
            keywords: "magical",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
            defense: "Spirit",
            damage: "2 unholy damage",
            success: (
              <span>
                1{" "}
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
      />
    ),
  },
  {
    name: "Clockwork Turret",
    tier: "2",
    threat: "Standard",
    description:
      "Clockwork turrets are ancient automated turret that scan for movement and fire a bolt of arcane energy at any creature that comes within range. These mechanical guardians are often found in the ruins of long-lost civilizations or in the service of powerful artificers.",
    statBlock: (
      <Hazard
        name="Clockwork Turret"
        countdown="d12"
        tier="2"
        threat="Standard"
        consequence="8 arcane damage"
        actions={[
          {
            basic: true,
            name: "Dual Fire",
            keywords: "magical, range",
            target: <span>2 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "8 arcane damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Raging Fire",
    tier: "1",
    threat: "Standard",
    description:
      "Raging fires burning fields of fire that consume everything in their path. These infernos can erupt spontaneously in dry conditions or be summoned by powerful fire magic. They are a constant threat to nearby settlements and travelers.",
    statBlock: (
      <Hazard
        name="Raging Fire"
        countdown="d6"
        tier="1"
        threat="Standard"
        consequence="4 fire damage"
        actions={[
          {
            basic: true,
            name: "Burning Flames",
            target: <span>1d4+1 enemies within the hazard's zone</span>,
            defense: "Guard",
            damage: "2 fire damage",
            success: (
              <span>
                1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                fire damage
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Doom Eclipse",
    tier: "3",
    threat: "Standard",
    description:
      "Doom Eclipses are phenomenon where the sun is blotted out by a dark celestial body, plunging the world into unnatural darkness. This eerie event can cause widespread panic and despair, as it heralds the arrival of dark omens and ill tidings. During a doom eclipse, the sky is shrouded in an ominous gloom, and the air crackles with malevolent energy.",
    statBlock: (
      <Hazard
        name="Doom Eclipse"
        countdown="d6"
        tier="3"
        threat="Standard"
        consequence="12 necrotic damage"
        actions={[
          {
            basic: true,
            name: "End Life",
            keywords: "magical, range",
            target: <span>1d4+1 enemies within 3 zones</span>,
            defense: "Spirit",
            damage: "6 necrotic damage",
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
];

export default HazardList;
