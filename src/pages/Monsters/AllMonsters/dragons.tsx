import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
// import ToolTip from "../../../components/ToolTip";
// import Modifier from "../../../components/Modifier";

const DragonMonsters = [
  {
    name: "Dragon Hatchling",
    tier: "1",
    type: "Dragon",
    role: "Bruiser",
    threat: "Minor",
    description:
      "Dragon hatchlings are baby dragons that while young, are still quite dangerous.",
    tactics: (
      <span>
        Dragon hatchlings tend to fly away when action gets too scary. On each
        turn, a dragon hatchling uses rend or breath weapon if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Dragon Hatchling"
        hp="6"
        evn="13"
        mgt="15"
        res="11"
        speeds="fly 1"
        pb="2"
        type="Medium Dragon"
        tier="1"
        threat="Minor"
        role="Bruiser"
        vision="night"
        resistances="1 of the elemental affinity damage type"
        traits={[
          {
            name: "Elemental Affinity",
            description:
              "Depending on the type of dragon, each hatchling is associated with one damage type: cold, fire, holy, lightning, necrotic, psychic, unholy, or toxic.",
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
            defense: "EVN",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Breath Weapon",
            keywords: "recharge",
            target: (
              <span>1d4+1 enemies within the dragon hatchling's zone</span>
            ),
            defense: "EVN",
            damage: "2 damage of the elemental affinity damage type",
          },
        ]}
      />
    ),
  },
  {
    name: "Flame Drake",
    tier: "1",
    type: "Dragon",
    role: "Artillery",
    threat: "Standard",
    description: "Flame drakes are wingless draconic beasts that radiate heat.",
    tactics: (
      <span>
        Flame drakes tend to stay far away to{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then use fire spit. If they are near death, they charge the nearest
        enemy to explode near them.
      </span>
    ),
    statBlock: (
      <Monster
        name="Flame Drake"
        hp="8"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Standard"
        role="Artillery"
        vision="night"
        resistances="fire 2"
        weaknesses="cold 2"
        speeds="fly 1"
        traits={[
          {
            name: "Fiery Death",
            description:
              "When the flame drake is reduced to 0 hit points, it explodes. Make an attack roll against each creature's Evasion within the drake's zone, dealing 3 fire damage.",
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
            defense: "EVN",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Fire Spit",
            keywords: "range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "3 fire damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Frost Drake",
    tier: "1",
    type: "Dragon",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Frost drakes are wingless draconic beasts that live in frigid environments.",
    tactics: (
      <span>
        Frost drakes tend to charge into combat to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#shove">
          shove
        </Link>
        , and then use rend. If they are near death, they charge the nearest
        enemy to explode near them.
      </span>
    ),
    statBlock: (
      <Monster
        name="Frost Drake"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Standard"
        role="Bruiser"
        vision="night"
        resistances="cold 2"
        weaknesses="fire 2"
        speeds="fly 1"
        traits={[
          {
            name: "Chilly Death",
            description:
              "When the frost drake is reduced to 0 hit points, it explodes. Make an attack roll against each creature's Evasion within the drake's zone, dealing 3 cold damage.",
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
            defense: "EVN",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Cold Spit",
            keywords: "range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "2 cold damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Poison Drake",
    tier: "1",
    type: "Dragon",
    role: "Disabler",
    threat: "Standard",
    description:
      "Poison drakes are wingless draconic beasts that live in tropical environments.",
    tactics: (
      <span>
        Poison drakes tend to charge into combat to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#shove">
          shove
        </Link>
        , and then use rend. If they are near death, they charge the nearest
        enemy to explode near them.
      </span>
    ),
    statBlock: (
      <Monster
        name="Poison Drake"
        hp="10"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Standard"
        role="Disabler"
        vision="night"
        resistances="toxic 2"
        speeds="fly 1"
        traits={[
          {
            name: "Poison Death",
            description:
              "When the poison drake is reduced to 0 hit points, it explodes. Make an attack roll against each creature's Might within the drake's zone, dealing 3 toxic damage.",
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
          {
            basic: true,
            name: "Venom Spit",
            keywords: "range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "2 toxic damage",
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
    name: "Young Volcanic Dragon",
    tier: "1",
    type: "Dragon",
    role: "Tank",
    threat: "Major",
    description:
      "The fiery volcanic dragons live in mountains, especially volcanoes. Their temper is like a volcano, slow to erupt, but once angry, volcanic dragons carve a path of destruction against their foes.",
    tactics: (
      <span>
        Young volcanic dragons tend to charge to the toughest enemy to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        them then use rend. Volcanic dragon always uses its volcanic breath if
        possible.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Volcanic Dragon"
        hp="24"
        evn="11"
        mgt="15"
        res="13"
        speeds="fly 1"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Major"
        role="Tank"
        vision="night"
        resistances="fire 2, physical 1"
        weaknesses="cold 2"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
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
            defense: "EVN",
            damage: "3 physical damage",
          },
          {
            basic: false,
            name: "Volcanic Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "EVN",
            damage: "3 fire damage",
          },
        ]}
        reactions={[
          {
            name: "Tail Lash",
            trigger: (
              <span>
                The dragon sees a creature{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
                , or use a range or magical ability within the dragon's zone
              </span>
            ),
            effect:
              "The dragon can rend the triggering creature even if they aren't engaged to the dragon",
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Volcanic Dragon",
    tier: "2",
    type: "Dragon",
    role: "Tank",
    threat: "Boss",
    description:
      "The fiery volcanic dragons live in mountains, especially volcanoes. Their temper is like a volcano, slow to erupt, but once angry, volcanic dragons carve a path of destruction against their foes.",
    tactics: (
      <span>
        Adult volcanic dragons tend to charge to the toughest enemy to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        them then use rend. Volcanic dragon always uses its volcanic breath if
        possible. Smarter than young dragons, the volcanic dragon will grab a
        creature than fly away to drop them or fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Volcanic Dragon"
        hp="30"
        evn="13"
        mgt="17"
        res="15"
        pb="4"
        type="Huge Dragon"
        tier="2"
        speeds="fly 1"
        threat="Boss"
        role="Tank"
        vision="night"
        resistances="fire 4, physical 2"
        weaknesses="cold 4"
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
            defense: "EVN",
            damage: "6 physical damage",
          },
          {
            basic: false,
            name: "Volcanic Breath",
            keywords: "recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and one adjacent zone
              </span>
            ),
            defense: "EVN",
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
            name: "Tail Lash",
            trigger: (
              <span>
                The dragon sees a creature{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
                , or use a range or magical ability within the dragon's zone
              </span>
            ),
            effect: "The dragon can rend the triggering creature",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Volcanic Quake",
            round: "3",
            keywords: "range",
            target: (
              <span>All creatures in 2 zones within 3 zones of the dragon</span>
            ),
            defense: "MGT",
            damage: "6 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            name: "Raise the Heat",
            round: "5",
            keywords: "aura",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon's zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (4 fire damage)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Volcanic Dragon",
    tier: "3",
    type: "Dragon",
    role: "Tank",
    threat: "Boss",
    description:
      "The fiery volcanic dragons live in mountains, especially volcanoes. Their temper is like a volcano, slow to erupt, but once angry, volcanic dragons carve a path of destruction against their foes.",
    tactics: (
      <span>
        Ancient volcanic dragons tend to charge to the toughest enemy to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        them then use rend. Volcanic dragon always uses its volcanic breath if
        possible. Smarter than young dragons, the volcanic dragon will grab a
        creature than fly away to drop them or fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Volcanic Dragon"
        hp="54"
        evn="15"
        mgt="19"
        res="17"
        pb="6"
        speeds="fly 2"
        type="Colossal Dragon"
        tier="3"
        threat="Boss"
        role="Tank"
        vision="night"
        resistances="fire 6, physical 3"
        weaknesses="cold 6"
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
            defense: "EVN",
            damage: "9 physical damage",
          },
          {
            basic: false,
            name: "Volcanic Breath",
            keywords: "recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and one adjacent zone
              </span>
            ),
            defense: "EVN",
            damage: "9 fire damage",
            success: (
              <span>
                3{" "}
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
                The targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (3 fire damage) for the scene.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Tail Lash",
            trigger: (
              <span>
                The dragon sees a creature{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
                , or use a range or magical ability within 1 zone
              </span>
            ),
            effect: "The dragon can rend the triggering creature",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                (overcome ends), and while hindered, the target loses any
                resistance to fire damage
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Volcanic Quake",
            round: "3",
            keywords: "range",
            target: (
              <span>All creatures in 3 zones within 3 zones of the dragon</span>
            ),
            defense: "MGT",
            damage: "9 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            name: "Raise the Heat",
            round: "5",
            keywords: "aura",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon's zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (6 fire damage)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Young Tundra Dragon",
    tier: "1",
    type: "Dragon",
    role: "Bruiser",
    threat: "Major",
    description:
      "The frigid tundra dragons live in cold edges of the world. They slumber often to preserve their energy, but once awoken, their anger is great, especially against thieves and intruders into their domain.",
    tactics: (
      <span>
        Young tundra dragons tend to charge to the toughest enemy to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        them then use rend. A tundra dragon always uses its glacial breath if
        possible.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Tundra Dragon"
        hp="24"
        evn="13"
        speeds="fly 1"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="cold 2"
        weaknesses="fire 2"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
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
            defense: "EVN",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Glacial Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "MGT",
            damage: "3 cold damage",
          },
        ]}
        reactions={[
          {
            name: "Numbing Blood Spray",
            trigger: <span>The dragon takes damage</span>,
            effect:
              "All other creatures within the dragon's zone take 1 cold damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Tundra Dragon",
    tier: "2",
    type: "Dragon",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The frigid tundra dragons live in cold edges of the world. They slumber often to preserve their energy, but once awoken, their anger is great, especially against thieves and intruders into their domain.",
    tactics: (
      <span>
        Adult tundra dragons tend to charge to the toughest enemy to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        them then use rend. A tundra dragon always uses its glacial breath if
        possible. Smarter than young dragons, the tundra dragon will grab a
        creature than fly away to drop them or fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Tundra Dragon"
        hp="30"
        evn="15"
        mgt="17"
        speeds="fly 1"
        res="13"
        pb="4"
        type="Huge Dragon"
        tier="2"
        threat="Boss"
        role="Bruiser"
        vision="night"
        resistances="cold 4"
        weaknesses="fire 4"
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
            defense: "EVN",
            damage: "8 physical damage",
          },
          {
            basic: false,
            name: "Glacial Breath",
            keywords: "recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "MGT",
            damage: "6 cold damage",
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
        reactions={[
          {
            name: "Numbing Blood Spray",
            trigger: <span>The dragon takes damage</span>,
            effect:
              "All other creatures within the dragon's zone take 2 cold damage",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Chilling Winds",
            round: "3",
            keywords: "range",
            target: (
              <span>All creatures in 2 zones within 3 zones of the dragon</span>
            ),
            defense: "MGT",
            damage: "6 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            name: "Furious Thrash",
            round: "5",
            effect:
              "The dragon uses rend against each creature within their zone",
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Tundra Dragon",
    tier: "3",
    type: "Dragon",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The frigid tundra dragons live in cold edges of the world. They slumber often to preserve their energy, but once awoken, their anger is great, especially against thieves and intruders into their domain.",
    tactics: (
      <span>
        Ancient tundra dragons tend to charge to the toughest enemy to{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        them then use rend. A tundra dragon always uses its glacial breath if
        possible. Smarter than young dragons, the tundra dragon will grab a
        creature than fly away to drop them or fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Tundra Dragon"
        hp="54"
        evn="17"
        mgt="19"
        res="15"
        speeds="fly 2"
        pb="6"
        type="Colossal Dragon"
        tier="3"
        threat="Boss"
        role="Bruiser"
        vision="night"
        resistances="cold 6"
        weaknesses="fire 6"
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
            defense: "EVN",
            damage: "12 physical damage",
          },
          {
            basic: false,
            name: "Glacial Breath",
            keywords: "recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "MGT",
            damage: "9 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            effect: (
              <span>
                Targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zones
                </Link>{" "}
                that don't affect the dragon
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Numbing Blood Spray",
            trigger: <span>The dragon takes damage</span>,
            effect:
              "All other creatures within the dragon's zone take 3 cold damage",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                resistance to cold damage
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Chilling Winds",
            round: "3",
            keywords: "range",
            target: (
              <span>All creatures in 3 zones within 3 zones of the dragon</span>
            ),
            defense: "MGT",
            damage: "9 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            name: "Furious Thrash",
            round: "5",
            effect:
              "The dragon uses rend against each creature within their zone",
          },
        ]}
      />
    ),
  },
  {
    name: "Young Storm Dragon",
    tier: "1",
    type: "Dragon",
    role: "Artillery",
    threat: "Major",
    description:
      "The impetuous storm dragons live high up in mountains and the clouds. As their name suggests, storm dragons are chaotic in temperament and often a symbol of fear in the skies for smaller mortals.",
    tactics: (
      <span>
        Young storm dragons tend to fly far from the heroes to{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then use lightning spit or lightning breath if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Storm Dragon"
        hp="16"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Major"
        role="Artillery"
        vision="night"
        resistances="lightning 2"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
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
            defense: "EVN",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Lightning Spit",
            keywords: "range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "3 lightning damage",
            success:
              "light arcs to another creature within the same zone, dealing 1 lightning damage",
          },
          {
            basic: false,
            name: "Lightning Breath",
            keywords: "range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "EVN",
            damage: "4 lightning damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Storm Dragon",
    tier: "2",
    type: "Dragon",
    role: "Artillery",
    threat: "Boss",
    description:
      "The impetuous storm dragons live high up in mountains and the clouds. As their name suggests, storm dragons are chaotic in temperament and often a symbol of fear in the skies for smaller mortals.",
    tactics: (
      <span>
        Adult storm dragons tend to fly far from the heroes to{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then use lightning spit or lightning breath if available. Smarter than
        young dragons, the adult storm dragon will fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Storm Dragon"
        hp="22"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Dragon"
        tier="2"
        threat="Boss"
        role="Artillery"
        vision="night"
        resistances="lightning 4"
        speeds="fly 1"
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
            defense: "EVN",
            damage: "6 physical damage",
          },
          {
            basic: true,
            name: "Lightning Spit",
            keywords: "range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "6 lightning damage",
            success:
              "light arcs to another creature within the same zone, dealing 2 lightning damage",
          },
          {
            basic: false,
            name: "Wing Gust",
            keywords: "range",
            target: <span>1d4 creatures within 3 zones</span>,
            defense: "MGT",
            damage: "4 physical damage",
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
            name: "Lightning Breath",
            keywords: "range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "EVN",
            damage: "8 lightning damage",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Tornadoe",
            round: "3",
            keywords: "range",
            target: <span>1 zone within 3 zones</span>,
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (2 physical damage). When a creature takes this damage, the
                dragon makes an attack roll against the creature's Might. On a
                success, the creature is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (turn starts). As a maneuver, the dragon can move the tornado
                one zone.
              </span>
            ),
          },
          {
            name: "Thunder Cloud",
            round: "5",
            keywords: "range",
            target: "All creatures in 2 zones within 3 zones",
            defense: "EVN",
            damage: "8 lightning damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Storm Dragon",
    tier: "3",
    type: "Dragon",
    role: "Artillery",
    threat: "Boss",
    description:
      "The impetuous storm dragons live high up in mountains and the clouds. As their name suggests, storm dragons are chaotic in temperament and often a symbol of fear in the skies for smaller mortals.",
    tactics: (
      <span>
        Ancient storm dragons tend to fly far from the heroes to{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then use lightning spit or lightning breath if available. Smarter than
        young dragons, the ancient storm dragon will fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Storm Dragon"
        hp="42"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Huge Dragon"
        tier="3"
        threat="Boss"
        role="Artillery"
        vision="night"
        resistances="lightning 6"
        speeds="fly 2"
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
            defense: "EVN",
            damage: "9 physical damage",
          },
          {
            basic: true,
            name: "Lightning Spit",
            keywords: "range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "9 lightning damage",
            success:
              "light arcs to another creature within the same zone, dealing 3 lightning damage",
          },
          {
            basic: false,
            name: "Wing Gust",
            keywords: "range",
            target: <span>1d4 creatures within 3 zones</span>,
            defense: "MGT",
            damage: "6 physical damage",
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
            name: "Lightning Breath",
            keywords: "range, recharge",
            target: (
              <span>All creatures in 2 connected zones within 3 zones</span>
            ),
            defense: "EVN",
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
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                (overcome ends) and while hindered, targets lose their
                resistance to lightning damage
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Tornadoe",
            round: "3",
            keywords: "range",
            target: <span>1 zone within 3 zones</span>,
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (3 physical damage). When a creature takes this damage, the
                dragon makes an attack roll against the creature's Might. On a
                success, the creature is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (turn starts). As a maneuver, the dragon can move the tornado
                one zone.
              </span>
            ),
          },
          {
            name: "Thunder Cloud",
            round: "5",
            keywords: "range",
            target: "All creatures in 3 zones within 3 zones",
            defense: "EVN",
            damage: "12 lightning damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Young Swamp Dragon",
    tier: "1",
    type: "Dragon",
    role: "Skirmisher",
    threat: "Major",
    description:
      "The cunning swamp dragons live in marshes and swamps. Swamp dragons stalk their prey through swampy water and can quickly escape from harm within their domain.",
    tactics: (
      <span>
        Young swamp dragons start fights with corrosive breath before rushing
        heroes to use rend. If the heroes aren't acquatic, the swamp dragon will
        utilize any nearby water to their advantage.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Swamp Dragon"
        hp="20"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Major"
        role="Skirmisher"
        vision="night"
        resistances="toxic 2"
        speeds="fly 1, swim 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Aquatic",
            description: <span>The dragon can breath underwater.</span>,
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
            defense: "EVN",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Corrosive Breath",
            keywords: "range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "EVN",
            damage: "3 toxic damage",
          },
        ]}
        reactions={[
          {
            name: "Slither Away",
            trigger: "Dragon takes damage",
            effect: (
              <span>
                Dragon can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Swamp Dragon",
    tier: "2",
    type: "Dragon",
    role: "Skirmisher",
    threat: "Boss",
    description:
      "The cunning swamp dragons live in marshes and swamps. Swamp dragons stalk their prey through swampy water and can quickly escape from harm within their domain.",
    tactics: (
      <span>
        Adult swamp dragons start fights with corrosive breath before rushing
        heroes to use rend. If the heroes aren't acquatic, the swamp dragon will
        utilize any nearby water to their advantage. Smarter than young dragons,
        the adult swamp dragon will fly or swim away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Swamp Dragon"
        hp="26"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Dragon"
        tier="2"
        threat="Boss"
        role="Skirmisher"
        vision="night"
        resistances="toxic 4"
        speeds="fly 1, swim 1"
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
          {
            name: "Aquatic",
            description: <span>The dragon can breath underwater.</span>,
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
            defense: "EVN",
            damage: "8 physical damage",
          },
          {
            basic: false,
            name: "Corrosive Breath",
            keywords: "range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "EVN",
            damage: "6 toxic damage",
            success: (
              <span>
                2{" "}
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
        reactions={[
          {
            name: "Slither Away",
            trigger: "Dragon takes damage",
            effect: (
              <span>
                Dragon can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Creeping Marsh",
            round: "3",
            keywords: "range",
            target: <span>2 zones within 3 zones</span>,
            effect: (
              <span>
                Targeted zones becomes{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                that doesn't affect the dragon. Putrid fumes fill the targeted
                zones, and when a creature enters or starts their turn in the
                targeted zones, the dragon makes an attack roll against their
                Might. On a success, the target is hindered (turn starts).
              </span>
            ),
          },
          {
            name: "Acid Rain",
            round: "5",
            keywords: "range",
            target: "All creatures in 2 zones within 3 zones",
            defense: "EVN",
            damage: "4 toxic damage",
            success: (
              <span>
                2{" "}
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
    name: "Ancient Swamp Dragon",
    tier: "3",
    type: "Dragon",
    role: "Skirmisher",
    threat: "Boss",
    description:
      "The cunning swamp dragons live in marshes and swamps. Swamp dragons stalk their prey through swampy water and can quickly escape from harm within their domain.",
    tactics: (
      <span>
        Ancient swamp dragons start fights with corrosive breath before rushing
        heroes to use rend. If the heroes aren't acquatic, the swamp dragon will
        utilize any nearby water to their advantage. Smarter than young dragons,
        the ancient swamp dragon will fly or swim away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Swamp Dragon"
        hp="48"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Colossal Dragon"
        tier="3"
        threat="Boss"
        role="Skirmisher"
        vision="night"
        resistances="toxic 6"
        speeds="fly 2, swim 2"
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
          {
            name: "Aquatic",
            description: <span>The dragon can breath underwater.</span>,
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
            defense: "EVN",
            damage: "12 physical damage",
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
          {
            basic: false,
            name: "Corrosive Breath",
            keywords: "range, recharge",
            target: (
              <span>All creatures in 2 connected zones within 3 zones</span>
            ),
            defense: "EVN",
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
        reactions={[
          {
            name: "Slither Away",
            trigger: "Dragon takes damage",
            effect: (
              <span>
                Dragon can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                resistance to toxic damage
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Creeping Marsh",
            round: "3",
            keywords: "range",
            target: <span>3 zones within 3 zones</span>,
            effect: (
              <span>
                Targeted zones becomes{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                that doesn't affect the dragon. Putrid fumes fill the targeted
                zones, and when a creature enters or starts their turn in the
                targeted zones, the dragon makes an attack roll against their
                Might. On a success, the target is hindered (turn starts).
              </span>
            ),
          },
          {
            name: "Acid Rain",
            round: "5",
            keywords: "range",
            target: "All creatures in 3 zones within 3 zones",
            defense: "EVN",
            damage: "6 toxic damage",
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
    name: "Young Forest Dragon",
    tier: "1",
    type: "Dragon",
    role: "Disabler",
    threat: "Major",
    description:
      "The crafty forest dragons live in deep forests and rarely seen by civilization. Forest dragons are the rulers of their domain, depending fealty from other forest denizens. Some forest dragons rule as a petty tyrant whil others rule more justly.",
    tactics: (
      <span>
        Young forest dragons will rush the heroes to use poisonous rend or
        venemous breath if available. Each turn, the forest dragon will use
        overgrowth to keep heroes from escaping.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Forest Dragon"
        hp="20"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Major"
        role="Disabler"
        vision="night"
        resistances="toxic 2"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Poisonous Rend",
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
          {
            basic: false,
            name: "Venemous Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "MGT",
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
        ]}
        maneuvers={[
          {
            name: "Overgrowth",
            target: "1 zone within 2 zones",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                until the start of the dragon's next turn
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Forest Dragon",
    tier: "2",
    type: "Dragon",
    role: "Disabler",
    threat: "Boss",
    description:
      "The crafty forest dragons live in deep forests and rarely seen by civilization. Forest dragons are the rulers of their domain, depending fealty from other forest denizens. Some forest dragons rule as a petty tyrant whil others rule more justly.",
    tactics: (
      <span>
        Adult forest dragons will rush the heroes to use poisonous rend or
        venemous breath if available. Each turn, the forest dragon will use
        overgrowth to keep heroes from escaping. Smarter than young dragons, the
        adult forest dragon will fly or swim away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Forest Dragon"
        hp="26"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Dragon"
        tier="2"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="toxic 4"
        speeds="fly 1"
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
            name: "Poisonous Rend",
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
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Venemous Breath",
            keywords: "recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "MGT",
            damage: "6 toxic damage",
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
            name: "Overgrowth",
            target: "1 zone within 2 zones",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                until the start of the dragon's next turn that doesn't affect
                the dragon. When an enemy starts or enters the targeted zones,
                the dragon can make an attack roll against the enemy's Might. On
                a success, the target is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (turn start).
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Animated Vines",
            round: "3",
            keywords: "magical, range",
            target: <span>2 creatures within 3 zones</span>,
            defense: "MGT",
            partial: "seized (turn ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends) and while seized, the target takes 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage
              </span>
            ),
            critical:
              "Same as a success, and the targets can be pulled to become engaged to the dragon",
          },
          {
            name: "Mushroom Spore Toxin",
            round: "5",
            keywords: "range",
            target: "2 zones within 3 zones",
            duration: "Scene ends",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (2 toxic damage). When a creature takes this damage, the dragon
                can make an attack roll against the enemy's Might. On a success,
                the target falls{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                from coughing.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Forest Dragon",
    tier: "3",
    type: "Dragon",
    role: "Disabler",
    threat: "Boss",
    description:
      "The crafty forest dragons live in deep forests and rarely seen by civilization. Forest dragons are the rulers of their domain, depending fealty from other forest denizens. Some forest dragons rule as a petty tyrant whil others rule more justly.",
    tactics: (
      <span>
        Ancient forest dragons will rush the heroes to use poisonous rend or
        venemous breath if available. Each turn, the forest dragon will use
        overgrowth to keep heroes from escaping. Smarter than young dragons, the
        ancient forest dragon will fly or swim away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Forest Dragon"
        hp="48"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Colossal Dragon"
        tier="3"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="toxic 6"
        speeds="fly 2"
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
            name: "Poisonous Rend",
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
            damage: "9 physical damage",
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
            name: "Venemous Breath",
            keywords: "recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "MGT",
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
        ]}
        maneuvers={[
          {
            name: "Overgrowth",
            target: "1 zone within 2 zones",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                until the start of the dragon's next turn that doesn't affect
                the dragon. When an enemy starts or enters the targeted zones,
                the dragon can make an attack roll against the enemy's Might. On
                a success, the target is{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (turn start).
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                resistance to toxic damage
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Animated Vines",
            round: "3",
            keywords: "magical, range",
            target: <span>3 creatures within 3 zones</span>,
            defense: "MGT",
            partial: "seized (turn ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends) and while seized, the target takes 3{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage
              </span>
            ),
            critical:
              "Same as a success, and the targets can be pulled to become engaged to the dragon",
          },
          {
            name: "Mushroom Spore Toxin",
            round: "5",
            keywords: "range",
            target: "3 zones within 3 zones",
            duration: "Scene ends",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 toxic damage). When a creature takes this damage, the dragon
                can make an attack roll against the enemy's Might. On a success,
                the target falls{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                from coughing.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Young Infernal Dragon",
    tier: "1",
    type: "Dragon Fiend",
    role: "Bruiser",
    threat: "Major",
    description:
      "The diabolical infernal dragons reside in the hellish lower realms among the demons and tortured souls. Infernal dragons sometimes serve demon lords, while ancient infernal dragons command domains of their own.",
    tactics: (
      <span>
        Young infernal dragons will rush the heroes to use rend or hellfire
        breath if available, as well as{" "}
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
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Infernal Dragon"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon Fiend"
        tier="1"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="fire 1, unholy 2"
        weaknesses="holy 2"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Profane Aura",
            description: (
              <span>
                The dragon's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (1 unholy damage).
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
            defense: "EVN",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Hellfire Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "EVN",
            damage: "1 fire damage and 1 unholy damage",
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
    name: "Adult Infernal Dragon",
    tier: "2",
    type: "Dragon Fiend",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The diabolical infernal dragons reside in the hellish lower realms among the demons and tortured souls. Infernal dragons sometimes serve demon lords, while ancient infernal dragons command domains of their own.",
    tactics: (
      <span>
        Adult infernal dragons will rush the heroes to use rend or hellfire
        breath if available, as well as expand aura. Smarter than young dragons,
        the adult infernal dragon will fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Infernal Dragon"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Dragon Fiend"
        tier="2"
        threat="Boss"
        role="Bruiser"
        vision="night"
        resistances="fire 2, unholy 4"
        weaknesses="holy 4"
        speeds="fly 1"
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
          {
            name: "Profane Aura",
            description: (
              <span>
                The dragon's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (2 unholy damage).
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
            defense: "EVN",
            damage: "8 physical damage",
          },
          {
            basic: false,
            name: "Hellfire Breath",
            keywords: "recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "EVN",
            damage: "2 fire damage and 2 unholy damage",
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
            name: "Expand Aura",
            effect: "The dragon's profane aura's radius expands by 1 zone.",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Summon Demons",
            round: "3",
            keywords: "magical, range",
            effect: "The dragon conjures 5 horned demons within 2 zones",
          },
          {
            name: "None Shall Escape",
            round: "5",
            effect:
              "The dragon's profane aura expands to affect the entire battlefield and the damage doubles.",
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Infernal Dragon",
    tier: "3",
    type: "Dragon Fiend",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The diabolical infernal dragons reside in the hellish lower realms among the demons and tortured souls. Infernal dragons sometimes serve demon lords, while ancient infernal dragons command domains of their own.",
    tactics: (
      <span>
        Ancient infernal dragons will rush the heroes to use rend or hellfire
        breath if available, as well as expand aura. Smarter than young dragons,
        the ancient infernal dragon will fly away to escape harm.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Infernal Dragon"
        hp="54"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Colossal Dragon Fiend"
        tier="3"
        threat="Boss"
        role="Bruiser"
        vision="night"
        resistances="fire 3, unholy 6"
        weaknesses="holy 6"
        speeds="fly 2"
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
          {
            name: "Profane Aura",
            description: (
              <span>
                The dragon's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 unholy damage).
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
            defense: "EVN",
            damage: "12 physical damage",
          },
          {
            basic: false,
            name: "Hellfire Breath",
            keywords: "recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "EVN",
            damage: "3 fire damage and 3 unholy damage",
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
        maneuvers={[
          {
            name: "Expand Aura",
            effect: "The dragon's profane aura's radius expands by 1 zone.",
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                resistance to fire damage or unholy damage
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Summon Demons",
            round: "3",
            keywords: "magical, range",
            effect: "The dragon conjures 6 winged demons within 2 zones",
          },
          {
            name: "None Shall Escape",
            round: "5",
            effect:
              "The dragon's profane aura expands to affect the entire battlefield and the damage doubles.",
          },
        ]}
      />
    ),
  },
  {
    name: "Young Void Dragon",
    tier: "1",
    type: "Dragon Aberration",
    role: "Disabler",
    threat: "Major",
    description:
      "The strange void dragons are an engima. Some believe they were originally dragons captured by the aberrants of the void realm, while others argue void dragons were born in the void realm. Either way, void dragons are dragons shaped by the eldritch powers of the void realm and often seek to spread the realm's maddening influence into other realms.",
    tactics: (
      <span>
        Young void dragons will rush the heroes to use void rend or void breath
        if available, as well as gaze of madness as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Void Dragon"
        hp="20"
        evn="11"
        mgt="15"
        res="13"
        pb="2"
        type="Large Dragon Aberration"
        tier="1"
        threat="Major"
        role="Disabler"
        vision="night"
        resistances="cold 1, psychic 2"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Void Rend",
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
          {
            basic: false,
            name: "Void Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "RES",
            damage: "3 psychic damage",
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
            name: "Gaze of Madness",
            defense: "RES",
            target: "1 creature within 2 zones",
            critical: "confused (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#confused">
                  confused
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
    name: "Adult Void Dragon",
    tier: "2",
    type: "Dragon Aberration",
    role: "Disabler",
    threat: "Boss",
    description:
      "The strange void dragons are an engima. Some believe they were originally dragons captured by the aberrants of the void realm, while others argue void dragons were born in the void realm. Either way, void dragons are dragons shaped by the eldritch powers of the void realm and often seek to spread the realm's maddening influence into other realms.",
    tactics: (
      <span>
        Adult void dragons will rush the heroes to use void rend or void breath
        if available, as well as gaze of madness as their maneuver. Smarter than
        young dragons, adult void dragons will fly away from fights if they are
        weak.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Void Dragon"
        hp="26"
        evn="13"
        mgt="17"
        res="15"
        pb="4"
        type="Huge Dragon Aberration"
        tier="2"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="cold 2, psychic 4"
        speeds="fly 1"
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
            name: "Void Rend",
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
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Void Breath",
            keywords: "range, recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "RES",
            damage: "6 psychic damage",
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
        maneuvers={[
          {
            name: "Gaze of Madness",
            defense: "RES",
            target: "1 creature within 2 zones",
            critical: "confused (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#confused">
                  confused
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Void Rift",
            round: "3",
            keywords: "magical, range",
            target: "1 zone within 3 zones",
            duration: "Scene ends",
            effect: (
              <span>
                The targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (2 cold damage). When an enemy enters or starts their turn in a
                zone adjacent to the targeted zone, the dragon makes an attack
                roll against the enemy's Might. On a success, the enemy is
                pulled into the targeted zone.
              </span>
            ),
          },
          {
            name: "There is No Escaping the Void",
            round: "5",
            keywords: "magical, range",
            target: "All enemies",
            defense: "RES",
            damage: "6 arcane damage",
            success: (
              <span>
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  Teleported
                </Link>{" "}
                to the void rift
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Void Dragon",
    tier: "3",
    type: "Dragon Aberration",
    role: "Disabler",
    threat: "Boss",
    description:
      "The strange void dragons are an engima. Some believe they were originally dragons captured by the aberrants of the void realm, while others argue void dragons were born in the void realm. Either way, void dragons are dragons shaped by the eldritch powers of the void realm and often seek to spread the realm's maddening influence into other realms.",
    tactics: (
      <span>
        Ancient void dragons will rush the heroes to use void rend or void
        breath if available, as well as gaze of madness as their maneuver.
        Smarter than young dragons, ancient void dragons will fly away from
        fights if they are weak.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Void Dragon"
        hp="48"
        evn="15"
        mgt="19"
        res="17"
        pb="6"
        type="Colossal Dragon Aberration"
        tier="3"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="cold 3, psychic 6"
        speeds="fly 2"
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
          {
            name: "Maddening Whispers",
            description:
              "When a hindered or confused creature starts their turn within the dragon's sight, they take 3 psychic damage as the void whispers maddeness into their mind.",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Void Rend",
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
            damage: "9 physical damage",
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
            name: "Void Breath",
            keywords: "range, recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "RES",
            damage: "9 psychic damage",
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
        maneuvers={[
          {
            name: "Gaze of Madness",
            defense: "RES",
            target: "1 creature within 2 zones",
            critical: "confused (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#confused">
                  confused
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                resistance to cold and psychic damage.
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Void Rift",
            round: "3",
            keywords: "magical, range",
            target: "1 zone within 3 zones",
            duration: "Scene ends",
            effect: (
              <span>
                The targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (3 cold damage). When an enemy enters or starts their turn in a
                zone adjacent to the targeted zone, the dragon makes an attack
                roll against the enemy's Might. On a success, the enemy is
                pulled into the targeted zone.
              </span>
            ),
          },
          {
            name: "There is No Escaping the Void",
            round: "5",
            keywords: "magical, range",
            target: "All enemies",
            defense: "RES",
            damage: "9 arcane damage",
            success: (
              <span>
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  Teleported
                </Link>{" "}
                to the void rift
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Young Umbral Dragon",
    tier: "1",
    type: "Dragon",
    role: "Skirmisher",
    threat: "Major",
    description:
      "The elusive umbral dragons live in the dangerous shadow realm, where undead shadows and other horrors dwell. Older umbral dragons often rule over their own domains within the shadow realm or sometimes venture into the mortal realm to spread gloom and darkness,",
    tactics: (
      <span>
        Young umbral dragons will rush the heroes to use rend or shadow breath
        if available, as well as create darkness around themselves as their
        maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Umbral Dragon"
        hp="20"
        evn="15"
        mgt="13"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Major"
        role="Skirmisher"
        vision="night"
        resistances="necrotic 2"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Light Vulnerability",
            description: (
              <span>
                When in normal light, the dragon is{" "}
                <Link className="internal-link" to="/conditions#vulnerable">
                  vulnerable
                </Link>
                .
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
            defense: "EVN",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Shadow Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "MGT",
            damage: "3 necrotic damage",
          },
        ]}
        maneuvers={[
          {
            name: "Create Darkness",
            duration: "End of the dragon's next turn",
            target: "1 zone within 2 zones",
            effect: "Targeted zone is filled with darkness",
          },
        ]}
        reactions={[
          {
            name: "Shadow Lurk",
            trigger: (
              <span>
                The dragon ends its turn with{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  concealment or cover
                </Link>
              </span>
            ),
            effect: (
              <span>
                The dragon becomes{" "}
                <Link className="internal-link" to="/rules/combat#hidden">
                  hidden
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Umbral Dragon",
    tier: "2",
    type: "Dragon",
    role: "Skirmisher",
    threat: "Boss",
    description:
      "The elusive umbral dragons live in the dangerous shadow realm, where undead shadows and other horrors dwell. Older umbral dragons often rule over their own domains within the shadow realm or sometimes venture into the mortal realm to spread gloom and darkness,",
    tactics: (
      <span>
        Adult umbral dragons will rush the heroes to use rend or shadow breath
        if available, as well as create darkness around themselves as their
        maneuver. Smarter than young dragons, adult umbral dragons will fly away
        when weak.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Umbral Dragon"
        hp="26"
        evn="17"
        mgt="15"
        res="13"
        pb="4"
        type="Huge Dragon"
        tier="2"
        threat="Boss"
        role="Skirmisher"
        vision="night"
        resistances="necrotic 4"
        speeds="fly 1"
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
          {
            name: "Light Vulnerability",
            description: (
              <span>
                When in normal light, the dragon is{" "}
                <Link className="internal-link" to="/conditions#vulnerable">
                  vulnerable
                </Link>
                .
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
            defense: "EVN",
            damage: "8 physical damage",
          },
          {
            basic: false,
            name: "Shadow Breath",
            keywords: "range, recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "MGT",
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
        maneuvers={[
          {
            name: "Create Darkness",
            duration: "End of the dragon's next turn",
            target: "1 zone within 2 zones",
            effect: "Targeted zone is filled with darkness",
          },
        ]}
        reactions={[
          {
            name: "Shadow Lurk",
            trigger: (
              <span>
                The dragon ends its turn with{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  concealment or cover
                </Link>
              </span>
            ),
            effect: (
              <span>
                The dragon becomes{" "}
                <Link className="internal-link" to="/rules/combat#hidden">
                  hidden
                </Link>
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
            partial: "hindered (turn ends)",
          },
          {
            name: "Grasping Shadows",
            round: "3",
            keywords: "magical, range",
            target: "2 zones within 3 zones",
            duration: "Scene ends",
            effect: (
              <span>
                The targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (2 necrotic damage). When a creature takes this damage, the
                dragon can make an attack roll against the creature's Might. On
                a success, the creature is seized (turn starts) from shadowy
                claws.
              </span>
            ),
          },
          {
            name: "Umbral Veil",
            round: "5",
            keywords: "magical",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon becomes{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  invisible
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Ancient Umbral Dragon",
    tier: "3",
    type: "Dragon",
    role: "Skirmisher",
    threat: "Boss",
    description:
      "The elusive umbral dragons live in the dangerous shadow realm, where undead shadows and other horrors dwell. Older umbral dragons often rule over their own domains within the shadow realm or sometimes venture into the mortal realm to spread gloom and darkness,",
    tactics: (
      <span>
        Ancient umbral dragons will rush the heroes to use rend or shadow breath
        if available, as well as create darkness around themselves as their
        maneuver. Smarter than young dragons, ancient umbral dragons will fly
        away when weak.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Umbral Dragon"
        hp="48"
        evn="19"
        mgt="17"
        res="15"
        pb="6"
        type="Colossal Dragon"
        tier="3"
        threat="Boss"
        role="Skirmisher"
        vision="night"
        resistances="necrotic 6"
        speeds="fly 2"
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
          {
            name: "Light Vulnerability",
            description: (
              <span>
                When in normal light, the dragon is{" "}
                <Link className="internal-link" to="/conditions#vulnerable">
                  vulnerable
                </Link>
                .
              </span>
            ),
          },
          {
            name: "Superior Night Vision",
            description: <span>The dragon can see in magical darkness.</span>,
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
            defense: "EVN",
            damage: "12 physical damage",
          },
          {
            basic: false,
            name: "Shadow Breath",
            keywords: "range, recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "MGT",
            damage: "9 necrotic damage",
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
        maneuvers={[
          {
            name: "Create Greater Darkness",
            duration: "End of the dragon's next turn",
            target: "1 zone within 2 zones",
            effect: "Targeted zone is filled with magical darkness",
          },
        ]}
        reactions={[
          {
            name: "Shadow Lurk",
            trigger: (
              <span>
                The dragon ends its turn with{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  concealment or cover
                </Link>
              </span>
            ),
            effect: (
              <span>
                The dragon becomes{" "}
                <Link className="internal-link" to="/rules/combat#hidden">
                  hidden
                </Link>
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Frightening Roar",
            round: "1",
            keywords: "range",
            target: <span>All enemies</span>,
            defense: "RES",
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
                resistance to necrotic damage.
              </span>
            ),
            partial: "hindered (turn ends)",
          },
          {
            name: "Grasping Shadows",
            round: "3",
            keywords: "magical, range",
            target: "3 zones within 3 zones",
            duration: "Scene ends",
            effect: (
              <span>
                The targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (3 necrotic damage). When a creature takes this damage, the
                dragon can make an attack roll against the creature's Might. On
                a success, the creature is seized (turn starts) from shadowy
                claws.
              </span>
            ),
          },
          {
            name: "Umbral Veil",
            round: "5",
            keywords: "magical",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon becomes{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  invisible
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Wyvern",
    tier: "1",
    type: "Dragon",
    role: "Disabler",
    threat: "Major",
    description:
      "Wyverns are lesser dragons that lack true dragons' intelligence. Wyverns usually live near mountainous regions and prey on smaller creatures.",
    tactics: (
      <span>
        Wyverns rush the heroes to use grabbing rend then use grab and fly to
        take a seized hero into the air. Once in the air, the wyvern will use
        tail sting or drop the hero.
      </span>
    ),
    statBlock: (
      <Monster
        name="Wyvern"
        hp="20"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Dragon"
        tier="1"
        threat="Major"
        role="Disabler"
        vision="night"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Grabbing Rend",
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
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Tail Sting",
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
            damage: "3 toxic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Grab and Fly",
            trigger: <span>The dragon gets a creature seized by it</span>,
            effect: (
              <span>
                The dragon can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default DragonMonsters;
