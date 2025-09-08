import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";

const ElementalMonsters = [
  {
    name: "Elemental Sprite",
    tier: "1",
    type: "Elemental",
    role: "Skirmisher",
    threat: "Minor",
    description:
      "Elemental sprites are the most basic of elemental creatures and resemble small humanoids with wings.",
    tactics: (
      <span>
        Elemental sprites like to fight in groups by using their flight to avoid
        too much harm. Each turn, a sprite will use slam or spew elements if
        available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Elemental Sprite"
        hp="5"
        evn="14"
        mgt="13"
        res="12"
        speeds="fly 1"
        pb="2"
        type="Tiny Elemental"
        tier="1"
        threat="Minor"
        role="Skirmisher"
        traits={[
          {
            name: "Elemental Type",
            description:
              "Each elemental sprite comes from one of the five elemental realms: air (lightning, fire), earth (physical), fire (fire, cold), ice (cold, fire), or water (fire, cold). The elemental minion has resistance to their realm's first listed damage type and weakness to the second damage type listed. Water elemental sprites also gain a swim speed 1 and can breath underwater",
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
            damage:
              "3 physical (earth, water), fire (fire), lightning (air), or cold (ice) damage",
          },
          {
            basic: false,
            name: "Spew Elements",
            target: "1d4+1 enemies within the sprite's zone",
            keywords: "powerful, recharge",
            defense: "Guard",
            damage:
              "2 physical (earth, water), fire (fire), lightning (air), or cold (ice) damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Air Elemental",
    tier: "1",
    type: "Elemental",
    role: "Artillery",
    threat: "Standard",
    description:
      "Air elementals are powerful creatures from the air realm that resemble vaguely humanoid shaped swirling wind.",
    tactics: (
      <span>
        Air elementals like to fight far from heroes by using{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then electrical zap to hurt multiple heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Air Elemental"
        hp="8"
        evn="14"
        mgt="13"
        res="12"
        speeds="fly 1"
        pb="2"
        type="Large Elemental"
        tier="1"
        threat="Standard"
        role="Artillery"
        resistances="lightning"
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
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Electrical Zap",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 lightning damage",
            success:
              "Lightning leaps out at another enemy within the target's zone dealing 2 lightning damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Earth Elemental",
    tier: "1",
    type: "Elemental",
    role: "Tank",
    threat: "Standard",
    description:
      "Earth elementals are powerful creatures from the earth realm that resemble vaguely humanoid shaped rocks.",
    tactics: (
      <span>
        Earth elementals like to fight near heroes by using slam followed up by{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Earth Elemental"
        hp="12"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Large Elemental"
        tier="1"
        threat="Standard"
        role="Tank"
        resistances="physical"
        speeds="burrow 1"
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
            damage: "3 physical damage",
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
            name: "Hurl Stone",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Fire Elemental",
    tier: "1",
    type: "Elemental",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Fire elementals are powerful creatures from the fire realm that resemble vaguely humanoid shaped fire.",
    tactics: (
      <span>
        Fire elementals like to fight near heroes by using slam followed up by{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Fire Elemental"
        hp="10"
        evn="14"
        mgt="13"
        res="12"
        pb="2"
        type="Large Elemental"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        resistances="fire"
        weaknesses="cold"
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
            damage: "4 fire damage",
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
          {
            basic: true,
            name: "Hurl Flame",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 fire damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Ice Elemental",
    tier: "1",
    type: "Elemental",
    role: "Disabler",
    threat: "Standard",
    description:
      "Ice elementals are powerful creatures from the ice realm that resemble vaguely humanoid shaped ice.",
    tactics: (
      <span>
        Ice elementals like to fight near heroes by using slam followed up by{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Ice Elemental"
        hp="10"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Large Elemental"
        tier="1"
        threat="Standard"
        role="Disabler"
        resistances="cold"
        weaknesses="fire"
        traits={[
          {
            name: "Freezing Aura",
            description: (
              <span>
                The elemental's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                for enemies.
              </span>
            ),
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
            damage: "3 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Hurl Ice",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 cold damage",
            success: "speed halved (next turn ends)",
          },
        ]}
      />
    ),
  },
  {
    name: "Water Elemental",
    tier: "1",
    type: "Elemental",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Water elementals are powerful creatures from the water realm that resemble vaguely humanoid shaped water.",
    tactics: (
      <span>
        Water elementals like to fight near heroes by using slam followed up by{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Water Elemental"
        hp="12"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Large Elemental"
        tier="1"
        speeds="swim 1"
        threat="Standard"
        role="Bruiser"
        resistances="fire"
        weaknesses="cold"
        traits={[
          {
            name: "Aquatic",
            description: "Elemental can breath underwater",
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
            damage: "4 physical damage",
            success: <span>Shoved within their zone</span>,
          },
          {
            basic: true,
            name: "Hurl Water",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Elemental Minion",
    tier: "2",
    type: "Elemental",
    role: "",
    threat: "Minion",
    description:
      "Elemental minions are elemental creatures and resemble large humanoids of their elemental realm.",
    tactics: (
      <span>
        Elemental minions like to fight in groups and use slam or hurl elements
        against ranged foes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Elemental Minion"
        hp="4"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Large Elemental"
        tier="2"
        threat="Minion"
        role=""
        traits={[
          {
            name: "Elemental Type",
            description:
              "Each elemental minion comes from one of the five elemental realms: air (lightning, fire), earth (physical), fire (fire, cold), ice (cold, fire), or water (fire, cold). The elemental minion has resistance to their realm's first listed damage type and weakness to the second damage type listed. Air elemental minons have a fly speed 1, water elemental minions have a swim speed 1 and can breath underwater, and earth elemental minions have a burrow speed 1.",
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
            damage:
              "2 physical (earth, water), fire (fire), lightning (air), or cold (ice) damage",
          },
          {
            basic: false,
            name: "Hurl Element",
            target: "1d4+1 enemies within the sprite's zone",
            keywords: "powerful, recharge",
            defense: "Guard",
            damage:
              "2 physical (earth, water), fire (fire), lightning (air), or cold (ice) damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Storm Elemental",
    tier: "2",
    type: "Elemental",
    role: "Artillery",
    threat: "Standard",
    description:
      "Storm elementals are powerful creatures from the air realm that resemble vaguely humanoid shaped thunderstorms and swirling air.",
    tactics: (
      <span>
        Storm elementals like to fight far from heroes by using{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then Electrocuting bolt or storm's vengeance if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Storm Elemental"
        hp="22"
        evn="16"
        mgt="15"
        res="14"
        speeds="fly 1"
        pb="4"
        type="Huge Elemental"
        tier="2"
        threat="Standard"
        role="Artillery"
        resistances="lightning"
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
            damage: "6 physical damage",
          },
          {
            basic: true,
            name: "Electrocuting Bolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 lightning damage",
            success:
              "Lightning leaps out at another enemy within the target's zone dealing 4 lightning damage",
          },
          {
            basic: false,
            name: "Storm's Vengeance",
            keywords: "magical, range",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "8 lightning damage",
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
    name: "Earthquake Elemental",
    tier: "2",
    type: "Elemental",
    role: "Tank",
    threat: "Standard",
    description:
      "Earthquake elementals are huge creatures from the earth realm that resemble vaguely humanoid shaped rocks.",
    tactics: (
      <span>
        Earthquake elementals like to fight near heroes by using slam followed
        up by{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Earthquake Elemental"
        hp="30"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Elemental"
        tier="2"
        threat="Standard"
        role="Tank"
        resistances="physical"
        speeds="burrow 1"
        traits={[
          {
            name: "Quake Aura",
            description: (
              <span>
                When an enemy enters the elemental's zone or starts their turn
                there, the elemental makes an attack roll against the creature's
                Guard. On a success, the creature falls{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
                .
              </span>
            ),
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
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
                , or if they're already prone, then they become{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Hurl Stone",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Inferno Elemental",
    tier: "2",
    type: "Elemental",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Inferno elementals are huge creatures from the fire realm that resemble vaguely humanoid shaped fire.",
    tactics: (
      <span>
        Inferno elementals like to fight near heroes by using slam followed up
        by{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Inferno Elemental"
        hp="26"
        evn="16"
        mgt="15"
        res="14"
        pb="2"
        type="Huge Elemental"
        tier="2"
        threat="Standard"
        role="Skirmisher"
        resistances="fire"
        weaknesses="cold"
        traits={[
          {
            name: "Explosive Flames",
            description: (
              <span>
                When the inferno elemental takes damage, all enemies within the
                elemental's zone take 2 fire damage.
              </span>
            ),
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
            damage: "8 fire damage",
            success: (
              <span>
                2{" "}
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
          {
            basic: true,
            name: "Hurl Flame",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 fire damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Blizzard Elemental",
    tier: "2",
    type: "Elemental",
    role: "Disabler",
    threat: "Standard",
    description:
      "Blizzard elementals are huge creatures from the ice realm that resemble vaguely humanoid shaped ice.",
    tactics: (
      <span>
        Blizzard elementals like to fight near heroes by using slam followed up
        by create blizzard.
      </span>
    ),
    statBlock: (
      <Monster
        name="Blizzard Elemental"
        hp="26"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Elemental"
        tier="2"
        threat="Standard"
        role="Disabler"
        resistances="cold"
        weaknesses="fire"
        traits={[
          {
            name: "Freezing Aura",
            description: (
              <span>
                The elemental's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                for enemies.
              </span>
            ),
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
            damage: "6 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Hurl Ice",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 cold damage",
            success: "speed halved (next turn ends)",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Create Blizzard",
            keywords: "magical, range",
            target: <span>1 zone within 3 zones</span>,
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (2 cold damage) until the end of the elementa's next turn.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Tsunami Elemental",
    tier: "2",
    type: "Elemental",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Tsunami elementals are huge creatures from the water realm that resemble vaguely humanoid shaped water.",
    tactics: (
      <span>
        Tsunami elementals like to fight near heroes by using slam or crashing
        undercurrent if available, and then followed up by{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Tsunami Elemental"
        hp="30"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Elemental"
        tier="2"
        speeds="swim 1"
        threat="Standard"
        role="Bruiser"
        resistances="fire"
        weaknesses="cold"
        traits={[
          {
            name: "Aquatic",
            description: "Elemental can breath underwater",
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
            damage: "8 physical damage",
            success: <span>Shoved within their zone</span>,
          },
          {
            basic: true,
            name: "Hurl Water",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Crashing Undercurrent",
            keywords: "magical, recharge",
            target: <span>All enemies within 1 zone</span>,
            defense: "Guard",
            damage: "4 physical damage",
            success: "Pulled to the elemental's zone",
          },
        ]}
      />
    ),
  },
  {
    name: "Greater Elemental Minion",
    tier: "3",
    type: "Elemental",
    role: "",
    threat: "Minion",
    description:
      "Greater elemental minions are elemental creatures and resemble huge humanoids of their elemental realm.",
    tactics: (
      <span>
        Greater elemental minions like to fight in groups and use slam or hurl
        elements against ranged foes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Greater Elemental Minion"
        hp="6"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Huge Elemental"
        tier="3"
        threat="Minion"
        role=""
        traits={[
          {
            name: "Elemental Type",
            description:
              "Each elemental minion comes from one of the five elemental realms: air (lightning, fire), earth (physical), fire (fire, cold), ice (cold, fire), or water (fire, cold). The elemental minion has resistance to their realm's first listed damage type and weakness to the second damage type listed. Air elemental minons have a fly speed 1, water elemental minions have a swim speed 1 and can breath underwater, and earth elemental minions have a burrow speed 1.",
          },
          {
            name: "Elemental Aura",
            description: (
              <span>
                The greater elemental minion's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 physical [earth, water], fire [fire], lightning [air], or
                cold [ice] damage) for enemies. If there are multiple greater
                elemental minions of the same elemental type in the same zone,
                then only one aura is present.{" "}
              </span>
            ),
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
            damage:
              "3 physical (earth, water), fire (fire), lightning (air), or cold (ice) damage",
          },
          {
            basic: false,
            name: "Hurl Element",
            target: "1d4+1 enemies within the sprite's zone",
            keywords: "powerful, recharge",
            defense: "Guard",
            damage:
              "3 physical (earth, water), fire (fire), lightning (air), or cold (ice) damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Air Genie",
    tier: "2",
    type: "Elemental",
    role: "Skirmisher",
    threat: "Major",
    description:
      "Air genies are powerful nobles of the air realm that command lesser elementals and resemble humanoids with noble attire.",
    tactics: (
      <span>
        Air genies like to fight close to heroes by using lightning blades or
        lightning flurry if available. They can easily escape harm with
        lightning dash.
      </span>
    ),
    statBlock: (
      <Monster
        name="Air Genie"
        hp="26"
        evn="15"
        mgt="15"
        res="15"
        speeds="fly 1"
        pb="4"
        type="Large Elemental"
        tier="2"
        threat="Major"
        role="Skirmisher"
        resistances="lightning"
        weaknesses="fire"
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
            name: "Lightning Blades",
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
            damage: "8 lightning damage",
            success: (
              <span>
                2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                lightning damage
              </span>
            ),
          },
          {
            basic: true,
            name: "Zapping Ray",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 lightning damage",
          },
          {
            basic: false,
            name: "Lightning Flurry",
            keywords: "magical, powerful, recharge",
            target: <span>All enemies in the genie's zone</span>,
            defense: "Guard",
            damage: "6 lightning damage",
            success: (
              <span>
                2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                lightning damage
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Lightning Dash",
            keywords: "magical",
            effect: (
              <span>
                Air genie uses{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                and all engaged enemies take 2 lightning damage
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Earth Genie",
    tier: "2",
    type: "Elemental",
    role: "Disabler",
    threat: "Major",
    description:
      "Earth genies are powerful nobles of the earth realm that command lesser elementals and resemble humanoids with noble attire.",
    tactics: (
      <span>
        Earth genies like to fight close to heroes by using hammer and create
        barriers through earth wall. Each turn the genie will use shake ground.
      </span>
    ),
    statBlock: (
      <Monster
        name="Earth Genie"
        hp="26"
        evn="14"
        mgt="17"
        res="14"
        speeds="burrow 1"
        pb="4"
        type="Large Elemental"
        tier="2"
        threat="Major"
        role="Disabler"
        resistances="physical"
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
            name: "Hammer",
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
                <Link className="internal-link" to="/conditions/#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            basic: true,
            name: "Hurl Stone",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions/#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            basic: false,
            name: "Earth Wall",
            keywords: "magical, range",
            target: <span>1 zone border within 3 zones</span>,
            duration: "Scene ends",
            effect:
              "A stone wall forms at the targeted zone border breaking line of sight and being impassable. The wall has defenses of of 14 and 10 hit points.",
          },
        ]}
        maneuvers={[
          {
            name: "Shake Ground",
            keywords: "magical, range",
            target: "All enemies in 1 zone within 3 zones",
            defense: "Guard",
            critical: "Same as a success, and take 2 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions/#prone">
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
    name: "Fire Genie",
    tier: "2",
    type: "Elemental",
    role: "Artillery",
    threat: "Major",
    description:
      "Fire genies are powerful nobles of the fire realm that command lesser elementals and resemble humanoids with noble attire.",
    tactics: (
      <span>
        Fire genies like to fight far from heroes by using{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        into flaming orb or incinerating blast if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Fire Genie"
        hp="22"
        evn="13"
        mgt="13"
        res="15"
        speeds="fly 1"
        pb="4"
        type="Large Elemental"
        tier="2"
        threat="Major"
        role="Artillery"
        resistances="fire"
        weaknesses="cold"
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
            name: "Flaming Scimitar",
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
            damage: "6 fire damage",
          },
          {
            basic: true,
            name: "Flaming Orb",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 fire damage",
            success: (
              <span>
                2{" "}
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
          {
            basic: false,
            name: "Incinerating Blast",
            keywords: "magical, range,",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "6 fire damage",
            success: (
              <span>
                2{" "}
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
        reactions={[
          {
            name: "Intensify Burning",
            keywords: "magical, range",
            target:
              "Fire genie sees creature within 2 zones take ongoing fire damage",
            effect: "The triggering damage is doubled",
          },
        ]}
      />
    ),
  },
  {
    name: "Ice Genie",
    tier: "2",
    type: "Elemental",
    role: "Tank",
    threat: "Major",
    description:
      "Ice genies are powerful nobles of the ice realm that command lesser elementals and resemble humanoids with noble attire.",
    tactics: (
      <span>
        Ice genies like to fight near heroes by using frozen flail and use ice
        shield on itself or nearby allies.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ice Genie"
        hp="30"
        evn="17"
        mgt="17"
        res="15"
        pb="4"
        type="Large Elemental"
        tier="2"
        threat="Major"
        role="Tank"
        resistances="cold"
        weaknesses="fire"
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
            name: "Frozen Flail",
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
            damage: "6 cold damage",
            success: (
              <span>
                2{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Freezing Ray",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 cold damage",
            success: (
              <span>
                2{" "}
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
            name: "Ice Shield",
            keywords: "magical, range",
            target: "Ice genie sees a creature within 1 zone take damage",
            effect: (
              <span>
                Creature gains 4{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                that can be used to reduce the triggering damage
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Water Genie",
    tier: "2",
    type: "Elemental",
    role: "Support",
    threat: "Major",
    description:
      "Water genies are powerful nobles of the water realm that command lesser elementals and resemble humanoids with noble attire.",
    tactics: (
      <span>
        Water genies like to fight far from heroes by using aqua orb to heal
        others or great wave if available, and otherwise always use healing
        wave.
      </span>
    ),
    statBlock: (
      <Monster
        name="Water Genie"
        hp="26"
        evn="14"
        mgt="13"
        res="16"
        pb="4"
        type="Large Elemental"
        tier="2"
        threat="Major"
        role="Support"
        resistances="fire"
        weaknesses="cold"
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
            name: "Staff",
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
            basic: true,
            name: "Aqua Orb",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
            success: (
              <span>
                1 creature within 1 zone of the genie can{" "}
                <ToolTip preset="heal" /> 2
              </span>
            ),
          },
          {
            basic: false,
            name: "Great Wave",
            keywords: "magical, powerful, range, recharge",
            target: <span>All enemies in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "6 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Healing Wave",
            keywords: "magical, range",
            target: "1 willing creature within 2 zones",
            effect: (
              <span>
                Target is shoved up to 1 zone away and{" "}
                <ToolTip preset="heals" /> 2
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Fire Primordial",
    tier: "3",
    type: "Elemental",
    role: "Artillery",
    threat: "Boss",
    description:
      "The fire primordial is the ruler of the fire realm with only one such primordial existing at a time. If the current primordial dies, another primordial is eventually created by the realm to seize control. The current fire primordial is a colossal pheonix whose mere presence can create sweltering heat for miles.",
    tactics: (
      <span>
        The fire primordial likes to fight from afar by using{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        into scorching orb or inferno burst if available. When near death, the
        fire primordial will fly near the heroes to trigger explosive death.
      </span>
    ),
    statBlock: (
      <Monster
        name="Fire Primordial"
        hp="252"
        evn="18"
        mgt="17"
        res="16"
        speeds="fly 2"
        pb="6"
        type="Colossal Elemental"
        tier="3"
        threat="Boss"
        role="Artillery"
        resistances="fire"
        weaknesses="cold"
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
            name: "Explosive Death",
            description: (
              <span>
                When the fire primordial is reduced to 0 hit points, it explodes
                in flames. Make an attack roll against each creature within 1
                zone of the fire primordial, dealing 18 fire damage.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Flaming Beak",
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
            damage: "15 fire damage",
          },
          {
            basic: true,
            name: "Scorching Orb",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "15 fire damage",
            success: (
              <span>
                6{" "}
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
          {
            basic: false,
            name: "Inferno Burst",
            keywords: "magical, powerful, range,recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "18 fire damage",
            success: (
              <span>
                6{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                fire damage
              </span>
            ),
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (6 fire damage) for the scene
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Rebirth",
            keywords: "magical",
            trigger:
              "Fire primordial reduced to 0 hit points and explosive death happens",
            requirement:
              "The fire primordial hasn't used this ability in this scene",
            effect: (
              <span>
                Fire primordial <ToolTip preset="heals" /> 50
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Summon Elementals",
            round: "1",
            keywords: "magical, range",
            effect:
              "Fire primordial conjures 6 greater elemental minions (fire) within 2 zones",
          },
          {
            name: "Set the World Ablaze",
            round: "3",
            keywords: "magical, range",
            target: <span>All zones</span>,
            effect: (
              <span>
                All zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (6 fire damage)
              </span>
            ),
          },
          {
            name: "Consuming Flames",
            round: "5",
            keywords: "magical",
            target: <span>All enemies</span>,
            effect: (
              <span>
                When a creature takes fire damge from ongoing damage or a
                dangerous zone, the damage doubles.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Air Primordial",
    tier: "3",
    type: "Elemental",
    role: "Disabler",
    threat: "Boss",
    description:
      "The air primordial is the ruler of the air realm with only one such primordial existing at a time. If the current primordial dies, another primordial is eventually created by the realm to seize control. The current air primordial is a colossal dragon like creature comprised of swirling air whose mere presence can create terrible thunderstorms.",
    tactics: (
      <span>
        The air primordial likes to fight near the heroes to use entrapping rend
        to get heroes within range of the primordial's living tempest. The
        primordial will use tempest's pull when possible to pull all heroes into
        its zone and always uses cyclone as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Air Primordial"
        hp="288"
        evn="18"
        mgt="17"
        res="16"
        speeds="fly 2"
        pb="6"
        type="Colossal Elemental"
        tier="3"
        threat="Boss"
        role="Disabler"
        resistances="lighting"
        weaknesses="fire"
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
            name: "Living Tempest",
            description: (
              <span>
                Wind swirls around the air primordial's zone making it a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (6 physical damage).
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Entrapping Rend",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends), and pulled into the primordial's zone if they
                aren't already in that zone
              </span>
            ),
          },
          {
            basic: true,
            name: "Paralyzing Lightning",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "12 lightning damage",
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
            basic: false,
            name: "Tempest's Pull",
            keywords: "magical, powerful, range, recharge",
            target: <span>All enemies within 3 zones</span>,
            defense: "Guard",
            critical: (
              <span>
                Same as a success, and{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            success: <span>Target pulled into the primordial's zone</span>,
            partial: "Target pulled 1 zone closer to the primordial",
          },
        ]}
        maneuvers={[
          {
            name: "Cyclone",
            keywords: "magical, range",
            target: "1 zone within 3 zones",
            duration: "Until the end of the primordial's next turn",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (6 physical damage)
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Storm Breath",
            round: "1",
            keywords: "magical, powerful, range",
            target: <span>All creatues in 3 connected zones</span>,
            defense: "Guard",
            damage: "15 lightning damage",
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
            name: "Summon Elementals",
            round: "3",
            keywords: "magical, range",
            effect:
              "Air primordial conjures 6 greater elemental minions (air) within 2 zones",
          },
          {
            name: "Greater Tempest",
            round: "5",
            keywords: "magical",
            effect: (
              <span>
                The primordial's living tempest extends to affect all zones
                within 2 zones of the primordial, and the primordial regains a
                use of tempest's pull.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Earth Primordial",
    tier: "3",
    type: "Elemental",
    role: "Tank",
    threat: "Boss",
    description:
      "The earth primordial is the ruler of the earth realm with only one such primordial existing at a time. If the current primordial dies, another primordial is eventually created by the realm to seize control. The current earth primordial is a colossal dragon like creature comprised of swirling air whose mere presence can create terrible thunderstorms.",
    tactics: (
      <span>
        The earth primordial likes to fight near the heroes to use quaking slam
        but always uses swallowed by the earth against the most powerful hero if
        available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Earth Primordial"
        hp="324"
        evn="20"
        mgt="19"
        res="16"
        speeds="burrow 1"
        pb="6"
        type="Colossal Elemental"
        tier="3"
        threat="Boss"
        role="Tank"
        resistances="physical"
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
            name: "Broken Shell",
            description: (
              <span>
                When a creatue deals damage to the earth primordial with a
                critical success or the earth primodrial becomes{" "}
                <ToolTip preset="shaken" />, their shell cracks. The
                primordial's physical resistance is gone and their Guard
                decreases by 2.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Quaking Slam",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
                , and all other creatures huge or smaller within the target's
                zone must succeed on an overcome roll or fall prone.
              </span>
            ),
          },
          {
            basic: true,
            name: "Throw Boulder",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "12 physical damage",
          },
          {
            basic: false,
            name: "Swallowed by the Earth",
            keywords: "magical, powerful, range, recharge",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "18 physical damage",
            success: (
              <span>
                Target swallowed by the earth. While swallowed, the target is{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  blinded
                </Link>
                ,{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
                , and takes 6{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                physical damage. If a swallowed creature deals 12 or more damage
                on a single turn, they break through the earth and escape.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Stomping Tail",
            trigger: (
              <span>
                1 creature within 1 zone of the primordial uses{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
            effect: (
              <span>
                Primordial uses quaking slam against the triggering creature
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Earthquake",
            round: "1",
            keywords: "magical, powerful, range",
            target: <span>All huge or smaller creatures</span>,
            defense: "Guard",
            damage: "15 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            name: "Summon Elementals",
            round: "3",
            keywords: "magical, range",
            effect:
              "Air primordial conjures 6 greater elemental minions (earth) within 2 zones",
          },
          {
            name: "Rageful Thrash",
            round: "5",
            effect: (
              <span>
                The primordial uses quaking slam against each creature within 1
                zone, and this ability gains the powerful keyword for this use.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Water Primordial",
    tier: "3",
    type: "Elemental",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The water primordial is the ruler of the water realm with only one such primordial existing at a time. If the current primordial dies, another primordial is eventually created by the realm to seize control. The current water primordial is a colossal sea serpent comprised of water whose mere presence can create terrible tsunamis.",
    tactics: (
      <span>
        The water primordial likes to fight near the heroes by getting close
        with tsuanmi surge into consuming slam or hydraulic cyclone if
        available, and hydraulic cyclone aalways uses swallowed by the water
        against the most powerful hero if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Water Primordial"
        hp="324"
        evn="18"
        mgt="19"
        res="16"
        speeds="swim 2"
        pb="6"
        type="Colossal Elemental"
        tier="3"
        threat="Boss"
        role="Bruiser"
        resistances="fire"
        weaknesses="cold"
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
            name: "Consuming Slam",
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
                If huge or smaller, the target gets swallowed by the water
                primordial. While swallowed, the target is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
                , takes 6{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                physical damage, and begins drowning if it can't breath
                underwater. If a swallowed creature deals 12 or more damage on a
                single turn, the primordial throws up the target.
              </span>
            ),
          },
          {
            basic: true,
            name: "Send Wave",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "12 physical damage",
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
            name: "Hydraulic Cyclone",
            keywords: "magical, range, recharge",
            target: <span>1 zone within 3 zones</span>,
            duration: "Scene ends",
            effect: (
              <span>
                The targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (6 physical damage). When a creature takes this damage, make an
                attack roll against their Guard, and on a success, they are{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends). As a maneuver, the primordial can move the
                cyclone one zone and carries anyone seized along with it.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Tsunami Surge",
            effect: (
              <span>
                Primordial can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
                , and makes attack rolls against the Guard of each creature in
                the zones it passes through. On a success, the creature is
                dragged along with the primordial and knocked{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
                .
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Summon Elementals",
            round: "1",
            keywords: "magical, range",
            effect:
              "Air primordial conjures 6 greater elemental minions (water) within 2 zones",
          },
          {
            name: "Steam Breath",
            round: "3",
            keywords: "magical, powerful, range",
            target: (
              <span>
                2d4+2 enemies within the primordial's zone and adjacent zone
              </span>
            ),
            defense: "Guard",
            damage: "15 fire damage",
          },
          {
            name: "Pulling Waves",
            round: "5",
            keywords: "magical, powerful, range",
            target: <span>All enemies</span>,
            defense: "Guard",
            damage: "12 physical damage",
            success: "Target pulled into the primordial's zone",
          },
        ]}
      />
    ),
  },
  {
    name: "Ice Primordial",
    tier: "3",
    type: "Elemental",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The ice primordial is the ruler of the ice realm with only one such primordial existing at a time. If the current primordial dies, another primordial is eventually created by the realm to seize control. The current ice primordial is a colossal polar bear comprised of ice whose mere presence can create freezing temperatures.",
    tactics: (
      <span>
        The ice primordial likes to fight near the heroes by getting close to
        use freezing rend or primordial blizzards if available. On each turn,
        the primordial uses encase in ice to keep heroes from escaping.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ice Primordial"
        hp="324"
        evn="18"
        mgt="19"
        res="16"
        speeds="land 2"
        pb="6"
        type="Colossal Elemental"
        tier="3"
        threat="Boss"
        role="Bruiser"
        resistances="cold"
        weaknesses="fire"
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
            name: "Winter's Presence",
            description: (
              <span>
                The ice primordial's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (6 cold damage) to enemies. The ice primordial is also immune to
                the penalties caused by its own difficult zones.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Freezing Rend",
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
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Freeze",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "12 cold damage",
          },
          {
            basic: false,
            name: "Primordial Blizzards",
            keywords: "magical, range, recharge",
            target: <span>3 zones within 3 zones</span>,
            duration: "Scene ends",
            effect: (
              <span>
                The targeted zones becomes{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (6 cold damage). When a creature takes this damage, make an
                attack roll against their Guard, and on a success, they are{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends).
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Encase in Ice",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends)
              </span>
            ),
            critical: "seized (overcome ends)",
          },
        ]}
        bossActions={[
          {
            name: "Winter's Armor",
            round: "1",
            keywords: "magical",
            effect: (
              <span>
                Ice primordial gains 30{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (scene ends). When a creature damages the primordial while it
                has these temporary hit points, the creature takes 9 cold
                damage.
              </span>
            ),
          },
          {
            name: "Summon Elementals",
            round: "3",
            keywords: "magical, range",
            effect:
              "Air primordial conjures 6 greater elemental minions (ice) within 2 zones",
          },
          {
            name: "Roar of Defiance",
            round: "5",
            keywords: "powerful, range",
            target: <span>All enemies</span>,
            defense: "Spirit",
            critical: (
              <span>
                Same as a success, and the target must spend a maneuver on their
                next turn to{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                away from the primordial
              </span>
            ),
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends) and the primordial <ToolTip preset="heals" /> 6
              </span>
            ),
            partial: "hindered (next turn ends)",
          },
        ]}
      />
    ),
  },
];

export default ElementalMonsters;
