import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const ConstructMonsters = [
  {
    name: "Animated Weapon",
    tier: "1",
    type: "Construct",
    role: "",
    threat: "Minion",
    description:
      "Animated weapons are normal weapons come to life from some magical means. Usually animated weapons serve as mindless guardians to mages or a place of great treasure.",
    tactics: (
      <span>
        Animated weapons usually fight in groups and swarm the heroes. Each
        turn, an animated weapon will use slash or fire depending on the type of
        weapon.
      </span>
    ),
    statBlock: (
      <Monster
        name="Animated Weapon"
        hp="2"
        evn="14"
        mgt="15"
        res="12"
        speeds="fly 1"
        pb="2"
        type="Small Construct"
        tier="1"
        threat="Minion"
        role=""
        actions={[
          {
            basic: true,
            name: "Slash",
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
            name: "Fire",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "1 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Animated Armor",
    tier: "1",
    type: "Construct",
    role: "Tank",
    threat: "Minor",
    description:
      "Animated armor are normal armor come to life from some magical means. Usually animated armor wield weapons and serve as mindless guardians to mages or a place of great treasure.",
    tactics: (
      <span>
        Animated armor prefer to fight near heroes by using glaive then{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Animated Armor"
        hp="6"
        evn="16"
        mgt="15"
        res="12"
        speeds="fly 1"
        pb="2"
        type="Small Construct"
        tier="1"
        threat="Minor"
        role="Tank"
        resistances="physical"
        traits={[
          {
            name: "Broken Armor",
            description: (
              <span>
                When a creatue deals damage to the construct with a critical
                success or the construct becomes <ToolTip preset="shaken" />,
                their armor breaks. The construct's physical resistance is gone
                and their Guard decreases by 2.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Glaive",
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
        ]}
      />
    ),
  },
  {
    name: "Iron Hound",
    tier: "1",
    type: "Construct",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Iron hounds are hound shaped constructs built to hunt down and retrieve prisoners. More magical cities often have magesmiths create iron hounds to chase fugitives or escaped prisoners.",
    tactics: (
      <span>
        Iron hounds chase after their designated target and use bite to capture
        them along with{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Iron Hound"
        hp="10"
        evn="14"
        mgt="13"
        res="12"
        pb="2"
        type="Small Construct"
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
    name: "Clockwork Defender",
    type: "Construct",
    tier: "1",
    role: "Tank",
    threat: "Standard",
    description:
      "Clockworks are constructed soldiers, but unlike forgeborn, have limited thinking capabilities and are created with basic directions. Clockwork defenders are created to guard others or their clockwork brethern, and stand tall with a shield and flail.",
    tactics: (
      <span>
        Clockwork defender prefer to fight near heroes by using flail then{" "}
        <Link className="internal-link" to="/combat-abilities#defend">
          defend
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Clockwork Defender"
        hp="12"
        evn="16"
        mgt="15"
        res="12"
        pb="2"
        type="Medium Construct"
        tier="1"
        threat="Standard"
        role="Tank"
        resistances="physical"
        traits={[
          {
            name: "Broken Armor",
            description: (
              <span>
                When a creatue deals damage to the construct with a critical
                success or the construct becomes <ToolTip preset="shaken" />,
                their armor breaks. The construct's physical resistance is gone
                and their Guard decreases by 2.
              </span>
            ),
          },
        ]}
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
        ]}
      />
    ),
  },
  {
    name: "Clockwork Juggernaut",
    type: "Construct",
    tier: "1",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Clockworks are constructed soldiers, but unlike forgeborn, have limited thinking capabilities and are created with basic directions. Clockwork juggernauts are created as terrifying brutish warriors that terrify normal soldiers.",
    tactics: (
      <span>
        Clockwork juggernauts prefer to fight near heroes by using juggernaut's
        charge or axe, then{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Clockwork Juggernaut"
        hp="12"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Large Construct"
        tier="1"
        threat="Standard"
        role="Bruiser"
        actions={[
          {
            basic: true,
            name: "Axe",
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
            name: "Juggernaut's Charge",
            effect: (
              <span>
                Clockwork juggernaut uses{" "}
                <Link className="internal-link" to="/combat-abilities#charge">
                  charge
                </Link>{" "}
                and gains <Modifier type="f" count="1" /> to their attack roll
                from charge.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Clockwork Drone",
    type: "Construct",
    tier: "1",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Clockworks are constructed soldiers, but unlike forgeborn, have limited thinking capabilities and are created with basic directions. Clockwork drones are different from other clockworks in that they resemble large birds to serve as scouts and spotters.",
    tactics: (
      <span>
        Clockwork drones prefer to fight near heroes by using flyby rend to get
        close or attack then fly away, and use their maneuver to fly around the
        heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Clockwork Drone"
        hp="10"
        evn="13"
        mgt="13"
        res="11"
        pb="2"
        type="Small Construct"
        tier="1"
        speeds="fly 1"
        threat="Standard"
        role="Skirmisher"
        actions={[
          {
            basic: true,
            name: "Flyby Rend",
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
            effect: (
              <span>
                The clockwork drone can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                before or after their attack roll
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Flesh Golem",
    type: "Construct",
    tier: "1",
    role: "Bruiser",
    threat: "Boss",
    description:
      "Flesh golems are constructs made of flesh stitched together limbs. Flesh golems are grotesque looking creatures that follow their master's commands, but when deeply hurt, these golems can go beserk.",
    tactics: (
      <span>
        Flesh golems prefer to fight near heroes by using slam, then{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Flesh Golem"
        hp="12"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Large Construct"
        tier="1"
        threat="Boss"
        role="Bruiser"
        resistances="arcane, lightning"
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
            name: "Beserk",
            description: (
              <span>
                When <ToolTip preset="shaken" />, the flesh golem goes beserk.
                It gains <Modifier type="f" count="1" /> to attack rolls and on
                its turn, the golem uses slam against the nearest creature.
              </span>
            ),
          },
          {
            name: "Electric Haste",
            description: (
              <span>
                When the flesh golem takes lightning damage, it gains an extra
                maneuver on its next turn.
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
            damage: "4 physical damage",
          },
        ]}
        bossActions={[
          {
            name: "Charge and Smash",
            round: "1",
            target: <span>1 creature within 3 zones</span>,
            effect: (
              <span>
                The flesh golem charges forward at near super speed then uses
                slam against the target. On a success or higher, the target is
                knocked{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
                .
              </span>
            ),
          },
          {
            name: "Detach Limb",
            round: "3",
            keywords: "range",
            effect:
              "The flesh golem rips off one of its limbs and throws it within 1 zone. The detached limb acts on its own turn (see below statblock).",
          },
          {
            name: "Thrash",
            round: "5",
            effect: (
              <span>
                The flesh golem uses slam against each engaged creature and
                knocks a target{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                on a success or higher.
              </span>
            ),
          },
        ]}
      />
    ),
    secondaryMonster: (
      <Monster
        name="Detached Limb"
        hp="6"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Small Construct"
        tier="1"
        threat="Minor"
        role="Bruiser"
        actions={[
          {
            basic: true,
            name: "Grab",
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
    name: "Stone Golem",
    tier: "2",
    type: "Construct",
    role: "Bruiser",
    threat: "Major",
    description:
      "Stone golems are magical constructs made out of stone and marble. These powerful guardians are used to protect sites of great value and reverence.",
    tactics: (
      <span>
        Stone Golems prefer to fight near heroes to use slam and binding stone
        if available. For maneuvers, stone golems often use{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Stone Golem"
        hp="60"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Large Construct"
        tier="2"
        threat="Major"
        role="Bruiser"
        resistances="arcane, physical"
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
            basic: false,
            name: "Binding Stone",
            keywords: "magical, recharge",
            target: <span>1d4+1 enemies within the golem's zone</span>,
            defense: "Guard",
            critical: (
              <span>
                Same as a success, and 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                physical damage while seized
              </span>
            ),
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            partial: "seized (next turn ends)",
          },
        ]}
      />
    ),
  },
  {
    name: "Clockwork Minion",
    tier: "2",
    type: "Construct",
    role: "",
    threat: "Minion",
    description:
      "Clockworks are constructed soldiers, but unlike forgeborn, have limited thinking capabilities and are created with basic directions. Clockwork minions are durable soldiers that often serve a powerful mage or anyone rich enough to own clockworks.",
    tactics: (
      <span>
        Clockwork minions prefer to fight together against heroes from either at
        range or nearaby depending on their weapons.
      </span>
    ),
    statBlock: (
      <Monster
        name="Clockwork Minion"
        hp="4"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Medium Construct"
        tier="2"
        threat="Minion"
        role=""
        resistances="physical"
        actions={[
          {
            basic: true,
            name: "Melee Weapon",
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
            name: "Ranged Weapon",
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
    name: "Arcane Guardian",
    tier: "2",
    type: "Construct",
    role: "Tank",
    threat: "Standard",
    description:
      "Arcane guardians are created to protect their owners or others from harm. Arcane guardians are usually assigned as bodyguards to serve a single person, such as a noble or powerful mage.",
    tactics: (
      <span>
        Arcane guardians prioritize defending their charge through guardian's
        transfer and using taunt pulse to keep attention on them.
      </span>
    ),
    statBlock: (
      <Monster
        name="Arcane Guardian"
        hp="30"
        evn="17"
        mgt="17"
        res="13"
        pb="4"
        type="Large Construct"
        tier="2"
        threat="Standard"
        role="Tank"
        resistances="arcane"
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
        ]}
        maneuvers={[
          {
            name: "Taunt Pulse",
            target: "1d4+1 enemies within the arcane guardian's zone",
            keywords: "magical",
            effect: (
              <span>
                Target becomes{" "}
                <Link className="internal-link" to="/conditions#taunted">
                  taunted
                </Link>{" "}
                by the arcane guardian (next turn ends)
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Guardian's Transfer",
            trigger: "Arcane guardian sees an ally take damage within 1 zone",
            keywords: "magical, range",
            effect:
              "Ally takes half of the triggering damage and the arcane guardian also takes half of the triggering damage.",
          },
        ]}
      />
    ),
  },
  {
    name: "Iron Golem",
    tier: "3",
    type: "Construct",
    role: "Bruiser",
    threat: "Major",
    description:
      "Iron golems are among the most powerful and rare of golems. Created out of iron, these golems feel little from the fire of forges and are echanted with toxic fumes that can emanate from their core.",
    tactics: (
      <span>
        Iron Golems prefer to fight near heroes to use iron blade and poison
        breath if available. For maneuvers, Iron golems often use{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Iron Golem"
        hp="108"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Large Construct"
        tier="3"
        threat="Major"
        role="Tank"
        resistances="arcane, fire, physical"
        weaknesses="lightning"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Broken Armor",
            description: (
              <span>
                When a creatue deals damage to the construct with a critical
                success or the construct becomes <ToolTip preset="shaken" />,
                their armor breaks. The construct's physical resistance is gone.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Iron Blade",
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
            damage: "9 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#taunted">
                  taunted
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Poison Breath",
            keywords: "magical, recharge",
            target: <span>1d4+1 enemies within the golem's zone</span>,
            defense: "Guard",
            damage: "9 toxic damage",
            critical: <span>dazed (overcome ends)</span>,
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
        reactions={[
          {
            name: "Toxic Death",
            keywords: "magical",
            trigger: "Iron golem reduced to 0 hit points",
            target: "Each creature within the iron golem's zone",
            defense: "Guard",
            damage: "9 toxic damage",
            success: (
              <span>
                3{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Golem",
    tier: "3",
    type: "Construct",
    role: "",
    threat: "Minion",
    description:
      "Golems are magical constructs that are tougher and more capable than lesser constructs such as clockworks. Golems typically serve a master, who is usually their creator. Golems can be created out of various materials such as wood, flesh, stone, or clay.",
    tactics: (
      <span>
        Golems prefer to fight together against neraby heroes to use slam.
      </span>
    ),
    statBlock: (
      <Monster
        name="Golem"
        hp="6"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Large Construct"
        tier="3"
        threat="Minion"
        role=""
        resistances="physical"
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
        ]}
      />
    ),
  },
  {
    name: "Clockwork Colossus",
    type: "Construct",
    tier: "3",
    role: "Bruiser",
    threat: "Boss",
    description:
      "Clockwork Colossuss are towering titanic constructs that were created long ago with powerful magic long forgotten. Clockwork colossus have rarely been seen as any surviving ones are buried under crumbled ruins of once great empires. However, if a clockwork colossus was awoken, it could be used to level cities.",
    tactics: (
      <span>
        Clockwork Colossuss prefer to fight near heroes by using slam or hyper
        beam if available, and always use stomp ground if near heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Clockwork Colossus"
        hp="54"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Colossal Construct"
        tier="3"
        threat="Boss"
        role="Bruiser"
        resistances="arcane, physical"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monster's hit points equal the listed total multiplied by
                the number of heroes. Boss monsters also get one turn per hero.
                At the end of a boss monster's turn, they can take direct damage
                to end one condition affecting them.
              </span>
            ),
          },
          {
            name: "Broken Armor",
            description: (
              <span>
                When a creatue deals damage to the construct with a critical
                success or the construct becomes <ToolTip preset="shaken" />,
                their armor breaks. The construct's physical resistance is gone.
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
            name: "Energy Beam",
            keywords: "magical, range",
            target: <span>1 creature within 5 zones</span>,
            defense: "Spirit",
            damage: "6 arcane damage",
          },
          {
            basic: false,
            name: "Hyper Beam",
            keywords: "magical, range, recharge",
            target: (
              <span>
                2d4+2 enemies within the clockwork colossus's zone and an
                adjacent zone
              </span>
            ),
            defense: "Spirit",
            damage: "9 arcane damage",
            effect:
              "Any creature reduced to 0 hit points from this damage is immediately defeated.",
          },
        ]}
        maneuvers={[
          {
            name: "Stomp Ground",
            target:
              "All huge or smaller creatures within the clockwork colossus's zone",
            defense: "Guard",
            critical: "Same as success, and takes 3 physical damage",
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
            name: "Dimensional Capture",
            round: "1",
            target: <span>All enemies</span>,
            defense: "Spirit",
            damage: "9 arcane damage",
            success: (
              <span>
                Target{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleported
                </Link>{" "}
                to the clockwork colossus's zone
              </span>
            ),
          },
          {
            name: "Create Golems",
            round: "3",
            keywords: "range",
            effect: "The clockwork colossus creates 6 golems within 2 zones",
          },
          {
            name: "Energy Pulse",
            round: "5",
            target: <span>All other creatures</span>,
            defense: "Spirit",
            damage: "9 arcane damage",
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
];

export default ConstructMonsters;
