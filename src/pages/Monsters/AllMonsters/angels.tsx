import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const AngelMonsters = [
  {
    name: "Lantern Angel",
    tier: "1",
    type: "Angel",
    role: "Artillery",
    threat: "Minor",
    description:
      "Lantern angels are the most basic of celestials and appear as small balls of warm light. When provoked, they glow angrily before shooting beams of holy light. Lantern angels serve as watchers and caretakers of mortals, and often act as a guide to the devout.",
    tactics: (
      <span>
        Latnern angels prefer to fight afar from heroes to use{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then revealing beam.
      </span>
    ),
    statBlock: (
      <Monster
        name="Lantern Angel"
        hp="4"
        evn="14"
        mgt="11"
        res="12"
        pb="2"
        vision="night"
        type="Small Angel"
        tier="1"
        threat="Minor"
        role="Artillery"
        speeds="fly 1"
        resistances="holy"
        weaknesses="unholy"
        actions={[
          {
            basic: true,
            name: "Revealing Beam",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 holy damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#vulnerable">
                  vulnerable
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
    name: "Unicorn",
    tier: "1",
    type: "Angel Beast",
    role: "Support",
    threat: "Standard",
    description:
      "Unicorns are majestic angelic white horses with pearl horns. These mythical beasts are seen as a good omen, and their touch can save someone from the brink of death. Unicorns have been known to let others ride them, but only if they have a true heart of goodness.",
    tactics: (
      <span>
        Unicorns prefer to fight near the heroes to{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        then horn.
      </span>
    ),
    statBlock: (
      <Monster
        name="Unicorn"
        hp="10"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        vision="night"
        type="Large Angel Beast"
        tier="1"
        threat="Standard"
        role="Support"
        resistances="holy"
        weaknesses="unholy"
        actions={[
          {
            basic: true,
            name: "Horn",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Healing Touch",
            keywords: "magical, melee, recharge",
            target:
              "1 ally the unicorn can touch that hasn't benefited from this ability today",
            effect: (
              <span>
                Targeted ally <ToolTip preset="heals" /> 4
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Pegasus",
    tier: "1",
    type: "Angel Beast",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Pegasi are majestic angelic horses with angel wings. These mythical beasts are seen as a good omen, and often serve as mounts for good hearted heroes, such as mighty paladins or clerics of goodly gods.",
    tactics: (
      <span>
        Pegasi prefer to fight near the heroes to{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        then hoof.
      </span>
    ),
    statBlock: (
      <Monster
        name="Pegasus"
        hp="10"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        vision="night"
        type="Large Angel Beast"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        resistances="holy"
        weaknesses="unholy"
        speeds="fly 2"
        actions={[
          {
            basic: true,
            name: "Hoof",
            keywords: "melee, weapon",
            target: <span>1 engaged creature</span>,
            defense: "Guard",
            damage: "4 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Young Celestial Dragon",
    tier: "1",
    type: "Angel Dragon",
    role: "Tank",
    threat: "Major",
    description:
      "The goodly celestial dragons flourish in the heavenly upper realms among the angels and blessed souls. Celestial dragons sometimes serve good deities and archangels, while ancient celestial dragons justly rule domains of their own. Celestial dragons sometimes appear in the mortal realm to help guide mortals on a path of goodness or help prevent a great evil.",
    tactics: (
      <span>
        Young celestial dragons will rush the heroes to use rend or holyfire
        breath if available, as well as{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        , or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Celestial Dragon"
        hp="24"
        evn="15"
        mgt="15"
        res="13"
        pb="2"
        type="Large Angel Dragon"
        tier="1"
        threat="Major"
        role="Tank"
        vision="night"
        resistances="fire, holy"
        weaknesses="unholy"
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
            name: "Blessed Aura",
            description: (
              <span>
                When the dragon or an ally within the dragon's zone{" "}
                <ToolTip preset="heals" /> or gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>
                , the amount increases by 1.
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
            damage: "3 physical damage",
          },
          {
            basic: false,
            name: "Holyfire Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "Spirit",
            damage: "2 holy damage",
            effect: (
              <span>
                The dragon and 1d4+1 allies within the dragon's zone{" "}
                <ToolTip preset="heal" /> 2.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Celestial Dragon",
    tier: "2",
    type: "Angel Dragon",
    role: "Tank",
    threat: "Boss",
    description:
      "The goodly celestial dragons flourish in the heavenly upper realms among the angels and blessed souls. Celestial dragons sometimes serve good deities and archangels, while ancient celestial dragons justly rule domains of their own. Celestial dragons sometimes appear in the mortal realm to help guide mortals on a path of goodness or help prevent a great evil.",
    tactics: (
      <span>
        Adult celestial dragons will rush the heroes to use rend or holyfire
        breath if available, as well as{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        , or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Celestial Dragon"
        hp="180"
        evn="17"
        mgt="17"
        res="15"
        pb="4"
        type="Huge Angel Dragon"
        tier="2"
        threat="Boss"
        role="Tank"
        vision="night"
        resistances="fire, holy"
        weaknesses="unholy"
        speeds="fly 1"
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
            name: "Blessed Aura",
            description: (
              <span>
                When the dragon or an ally within the dragon's zone{" "}
                <ToolTip preset="heals" /> or gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>
                , the amount increases by 4.
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
            damage: "10 physical damage",
          },
          {
            basic: false,
            name: "Holyfire Breath",
            keywords: "recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "Spirit",
            damage: "8 holy damage",
            effect: (
              <span>
                The dragon and 1d4+1 allies within the targeted zones{" "}
                <ToolTip preset="heal" /> 12.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Angelic Matyr",
            trigger: "The dragon sees a creatue take damage within 1 zone",
            keywords: "magical, range",
            effect:
              "The triggering damage is halved, and the dragon takes half of the original damage, which can't be reduced in anyway.",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "Spirit",
            critical: (
              <span>
                Same as a success, and the target must spend a maneuver on their
                next turn to{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                away from the dragon
              </span>
            ),
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
          {
            name: "Condemning Flames",
            round: "3",
            keywords: "magical, range",
            target: "All creatures in 1 zone within 3 zones",
            damage: "10 holy damage",
            defense: "Spirit",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            name: "Heavenly Blessing",
            round: "5",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon gains <ToolTip preset="regen" /> 4 and{" "}
                <Modifier type="f" count="1" /> to all attack rolls
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Celestial Dragon",
    tier: "3",
    type: "Angel Dragon",
    role: "Tank",
    threat: "Boss",
    description:
      "The goodly celestial dragons flourish in the heavenly upper realms among the angels and blessed souls. Celestial dragons sometimes serve good deities and archangels, while ancient celestial dragons justly rule domains of their own. Celestial dragons sometimes appear in the mortal realm to help guide mortals on a path of goodness or help prevent a great evil.",
    tactics: (
      <span>
        Ancient celestial dragons will rush the heroes to use rend or holyfire
        breath if available, as well as{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        , or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Celestial Dragon"
        hp="324"
        evn="19"
        mgt="19"
        res="17"
        pb="6"
        type="Colossal Angel Dragon"
        tier="3"
        threat="Boss"
        role="Tank"
        vision="night"
        resistances="fire, holy"
        weaknesses="unholy"
        speeds="fly 2"
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
            name: "Blessed Aura",
            description: (
              <span>
                When the dragon or an ally within the dragon's zone{" "}
                <ToolTip preset="heals" /> or gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>
                , the amount increases by 6.
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
            damage: "15 physical damage",
            success: (
              <span>
                {" "}
                <Link className="internal-link" to="/conditions#vulnerable">
                  vulnerable
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Holyfire Breath",
            keywords: "recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "Spirit",
            damage: "12 holy damage",
            effect: (
              <span>
                The dragon and 2d4+2 allies within the targeted zones{" "}
                <ToolTip preset="heal" /> 18.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Angelic Matyr",
            trigger: "The dragon sees a creatue take damage within 1 zone",
            keywords: "magical, range",
            effect:
              "The triggering damage is halved, and the dragon takes half of the original damage, which can't be reduced in anyway.",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "Spirit",
            critical: (
              <span>
                Same as a success, and the target must spend a maneuver on their
                next turn to{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                away from the dragon
              </span>
            ),
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends) and while hindered, the target loses any
                resistance to fire and holy damage
              </span>
            ),
            partial: "hindered (next turn ends)",
          },
          {
            name: "Condemning Flames",
            round: "3",
            keywords: "magical, range",
            target: "All creatures in 1 zone within 3 zones",
            defense: "Spirit",
            damage: "16 holy damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            name: "Heavenly Blessing",
            round: "5",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon gains <ToolTip preset="regen" /> 6 and{" "}
                <Modifier type="f" count="1" /> to all attack rolls
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Angel Guardian",
    tier: "2",
    type: "Angel",
    role: "Tank",
    threat: "Standard",
    description:
      "Angel guardians are the defenders of the upper realms, and lead the frontlines of heaven's army against the foul demons. Standing over 10 feet tall, angel guardians have majestic white feathered wings and are clad in beautiful plate armor covering their humanoid form.",
    tactics: (
      <span>
        Angel guardians prefer to fight near the heroes to use holy blade and
        protect an ally with guardian's ward.
      </span>
    ),
    statBlock: (
      <Monster
        name="Angel Guardian"
        hp="30"
        evn="17"
        mgt="17"
        res="15"
        pb="4"
        vision="night"
        type="Large Angel"
        tier="2"
        threat="Standard"
        role="Tank"
        resistances="holy"
        weaknesses="unholy"
        speeds="fly 1"
        actions={[
          {
            basic: true,
            name: "Holy Blade",
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
            damage: "6 holy damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#taunted">
                  taunted
                </Link>{" "}
                by the angel (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Sacred Blast",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "4 holy damage",
          },
        ]}
        maneuvers={[
          {
            name: "Guardian's Ward",
            target: "1 ally within 1 zone",
            duration:
              "Scene ends or until the angel guardian uses this ability on another creature",
            effect: <span>Target gains resistance to all damage</span>,
          },
        ]}
      />
    ),
  },
  {
    name: "Angel Avenger",
    tier: "2",
    type: "Angel",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Angel avengers are the swords of the upper realms, and specialize in slaying demons and other evils. Standing over 10 feet tall, angel avengers have majestic white feathered wings and are clad in lighter metal armor covering their humanoid form.",
    tactics: (
      <span>
        Angel avengers prefer to fight near the heroes to use vengeful blade and
        mark an enemy with avenger's mark.
      </span>
    ),
    statBlock: (
      <Monster
        name="Angel Avenger"
        hp="30"
        evn="15"
        mgt="17"
        res="15"
        pb="4"
        vision="night"
        type="Large Angel"
        tier="2"
        threat="Standard"
        role="Bruiser"
        resistances="holy"
        weaknesses="unholy"
        speeds="fly 1"
        actions={[
          {
            basic: true,
            name: "Vengeful Blade",
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
            damage: "8 holy damage",
            success: (
              <span>
                2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                holy damage
              </span>
            ),
          },
          {
            basic: true,
            name: "Sacred Blast",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "4 holy damage",
          },
        ]}
        maneuvers={[
          {
            name: "Avenger's Mark",
            target: "1 creature within 1 zone",
            duration:
              "Scene ends or until the angel avenger uses this ability on another creature",
            effect: (
              <span>
                Angel guardian{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                to the target, and gains <Modifier type="f" count="1" /> on
                attack rolls against the target.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Angel Invoker",
    tier: "2",
    type: "Angel",
    role: "Disabler",
    threat: "Standard",
    description:
      "Angel invokers are the mages of the upper realms, and specialize in using holy magic to debilitate and imprison evil. Standing over 10 feet tall, angel avengers have majestic white feathered wings and are clad in light armor covering their humanoid form.",
    tactics: (
      <span>
        Angel invokers prefer to fight afar the heroes to use holy chains and
        mark an enemy with sigil of punishment.
      </span>
    ),
    statBlock: (
      <Monster
        name="Angel Invoker"
        hp="26"
        evn="14"
        mgt="13"
        res="16"
        pb="4"
        vision="night"
        type="Large Angel"
        tier="2"
        threat="Standard"
        role="Disabler"
        resistances="holy"
        weaknesses="unholy"
        speeds="fly 1"
        actions={[
          {
            basic: true,
            name: "Disrupting Mace",
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
            damage: "6 holy damage",
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
            name: "Holy Chains",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "4 holy damage",
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
            name: "Sigil of Punishment",
            target: "1 creature within 1 zone",
            duration:
              "Scene ends or until the angel invoker uses this ability on another creature",
            effect: (
              <span>
                Target is{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                and when they deal damage, they take 2 holy damage.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Angel High Guard",
    tier: "3",
    type: "Angel",
    role: "",
    threat: "Minion",
    description:
      "Angel high guard are powerful warriors of the heavens that typically protect archangels and other important members of the heavenly courts.  Standing over 10 feet tall, angel high guards have majestic white feathered wings and are clad in beautiful plate armor covering their humanoid form.",
    tactics: (
      <span>
        Angel high guards prefer to fight near the heroes to use holy spear and
        use{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as maneuvers to keep foes away from the angel's protectee.
      </span>
    ),
    statBlock: (
      <Monster
        name="Angel High Guard"
        hp="6"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        vision="night"
        type="Large Angel"
        tier="3"
        threat="Minion"
        role=""
        resistances="holy"
        weaknesses="unholy"
        speeds="fly 1"
        actions={[
          {
            basic: true,
            name: "Holy Spear",
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
            damage: "3 holy damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#taunted">
                  taunted
                </Link>{" "}
                by the angel (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Sacred Blast",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "3 holy damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Archangel",
    tier: "3",
    type: "Angel",
    role: "Bruiser",
    threat: "Boss",
    description:
      "Archangels are the most powerful angels of the upper realms and lead lesser angels. Only seven archangels exist, and they rule as a unified body against the evils of the multiverse. When an archangel appears on the mortal realm, usually its a sign of mythical favor or great evil has befallen the world that threatens to destroy all of creation. Each archangel looks different, but generally they are over 20 feet tall humanoids clad in immaculate plate armor with large feathered wings and eyes that glow gold.",
    tactics: (
      <span>
        Archangels will rush the heroes to use heavenly blade or banishing smite
        if available. If foes flee, then the archangel will use celestial pull
        to bring them back. Each turn the archangel will use angelic step,{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>
        , or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Archangel"
        hp="324"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Huge Angel"
        tier="3"
        threat="Boss"
        role="Bruiser"
        vision="night"
        resistances="fire, holy"
        weaknesses="unholy"
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
            name: "Archangel Aura",
            description: (
              <span>
                Allies within the archangel's zone gain{" "}
                <Modifier type="f" count="1" /> to all rolls, and enemies within
                the archangel's zone instead take{" "}
                <Modifier type="mf" count="1" /> to all rolls.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Heavenly Blade",
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
            damage: "18 holy damage",
          },
          {
            basic: false,
            name: "Celestial Pull",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "12 holy damage",
            success: (
              <span>
                Target{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                to become engaged to the archangel
              </span>
            ),
          },
          {
            basic: false,
            name: "Banishing Smite",
            keywords: "magical, recharge",
            effect: (
              <span>
                Archangel uses holy blade, but deals 9 additional damage, and on
                a success, the target is banished to their home realm (turn
                ends), or banished (overcome ends) on a critical success.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Angelic Step",
            keywords: "magical, range",
            target: "up to 1 zone",
            effect: (
              <span>
                Archangel{" "}
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
            name: "High Guards to Me!",
            round: "1",
            keywords: "magical, range",
            effect: "Archangel summons 6 angel high guards within 2 zones",
          },
          {
            name: "Cleansing Flames",
            round: "3",
            keywords: "magical",
            defense: "Spirit",
            target: "All enemies in the archangel's zone",
            damage: "16 holy damage",
            effect: (
              <span>
                Archangel ends all negative effects on them and{" "}
                <ToolTip preset="heals" /> 18
              </span>
            ),
          },
          {
            name: "Seals of Condemnation",
            round: "5",
            keywords: "magical, range",
            target: "3 zones within 5 zones",
            defense: "Spirit",
            damage: "16 holy damage",
          },
        ]}
      />
    ),
  },
];

export default AngelMonsters;
