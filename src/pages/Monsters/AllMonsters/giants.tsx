import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const GiantMonsters = [
  {
    name: "Ogre Warrior",
    tier: "1",
    type: "Giant",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Ogres are the most brutish and dim witted of giants, with many other giants not even considering ogres as true giants. Ogre warriors are usually led by a cruel warlord. An ogre stands around 10 feet tall.",
    tactics: (
      <span>
        Ogre warriors rush to fight the heroes close up to use their greatclub.
        On each turn, an ogre will also use{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ogre Warrior"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Giant"
        tier="1"
        threat="Standard"
        role="Bruiser"
        actions={[
          {
            basic: true,
            name: "Greatclub",
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
            name: "Javelin",
            keywords: "range, weapon",
            target: <span>1 creature within 2 zones</span>,
            defense: "EVN",
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Ogre Thrower",
    tier: "1",
    type: "Giant",
    role: "Artillery",
    threat: "Standard",
    description:
      "Ogres are the most brutish and dim witted of giants, with many other giants not even considering ogres as true giants. Ogre throwers heft giant spears that they throw at foes to impale them, and are usually led a cruel warlord. An ogre stands around 10 feet tall.",
    tactics: (
      <span>
        Ogre throwers tend to stay far from heroes to{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then use thrown spear.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ogre Thrower"
        hp="8"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Giant"
        tier="1"
        threat="Standard"
        role="Artillery"
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
            defense: "EVN",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Thrown Spear",
            keywords: "melee, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "3 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                until the target uses a maneuver to remove the spear
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Ogre Warlord",
    tier: "1",
    type: "Giant",
    role: "Support",
    threat: "Major",
    description:
      "Ogres are the most brutish and dim witted of giants, with many other giants not even considering ogres as true giants. Ogre warlords lead groups of ogre marauders to pillage and incite violence against others. An ogre stands around 10 feet tall.",
    tactics: (
      <span>
        Ogre warlords prefer to fight near heroes and near their ogre allies so
        they can use brutish command.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ogre Warlord"
        hp="20"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Giant"
        tier="1"
        threat="Major"
        role="Support"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Jagged Axe",
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
                1{" "}
                <Link className="internal-link" to="/combat/rules#ongoing">
                  ongoing damage
                </Link>{" "}
                physical damage
              </span>
            ),
          },
          {
            basic: true,
            name: "Spear",
            keywords: "melee, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "2 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                until the target uses a maneuver to remove the spear
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Brutish Command",
            target: "All allies within 1 zone",
            keywords: "range",
            effect: (
              <span>Target gain an extra maneuver on their next turn</span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Troll",
    tier: "1",
    type: "Giant",
    role: "Bruiser",
    threat: "Major",
    description:
      "Trolls are strange mutations of giants, with true giants believing trolls to be a former kingdom of giants cursed for their greed. Now trolls are tall greenish humanoid monsters consumed with hunger and can only be killed with acid or fire.",
    tactics: (
      <span>
        Trolls prefer to fight near heroes to use rend and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Troll"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Giant"
        tier="1"
        threat="Major"
        role="Bruiser"
        vision="night"
        weaknesses="fire 2, toxic 2"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Troll Regeneration",
            description: (
              <span>
                Troll has <ToolTip preset="regeneration" /> 2. When the troll
                takes fire or toxic damage, then their regeneration doesn't work
                on their next turn.
              </span>
            ),
          },
          {
            name: "Undying Troll",
            description: (
              <span>
                If the troll is reduced to 0 hit points from damage that isn't
                fire or toxic, then it doesn't die but instead falls{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                and is unconscious. On the troll's next turn, they wake up with
                2 hit points.
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
        ]}
        reactions={[
          {
            name: "Angry Thrashing",
            trigger: "The troll takes fire or toxic damage",
            effect: <span>Troll can use rend</span>,
          },
        ]}
      />
    ),
  },
  {
    name: "Cyclops Warrior",
    tier: "1",
    type: "Giant",
    role: "Bruiser",
    threat: "Major",
    description:
      "Cyclops once had a great civilization where they discovered the magic of fate and prophecy, but their civilization collapsed long ago. The remaining cylcops are sad remnants with many having forgotten the great magic they once possessed. Ogres stand around 12 feet tall and have only one eye.",
    tactics: (
      <span>
        Cyclops warriors prefer to fight near heroes and use sweep against
        multiple heroes whenever possible along with{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Cyclops Warrior"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Giant"
        tier="1"
        threat="Major"
        role="Bruiser"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Club",
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
            name: "Throw Spear",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "2 physical damage",
          },
          {
            basic: false,
            name: "Sweep",
            keywords: "melee, weapon",
            target: (
              <span>
                2{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creatures
              </span>
            ),
            defense: "EVN",
            damage: "4 physical damage",
          },
        ]}
        reactions={[
          {
            name: "Flash of Divination",
            keywords: "recharge",
            trigger: "The cyclops sees the result of their roll",
            effect: <span>Cyclops can reroll and take the higher result</span>,
          },
        ]}
      />
    ),
  },
  {
    name: "Oni",
    tier: "1",
    type: "Giant",
    role: "Disabler",
    threat: "Boss",
    description:
      "Ogres are the most brutish and dim witted of giants, with many other giants not even considering ogres as true giants. Oni are ogres with demonic blood either through a demonic parent, fell experimentations, or ogres that have made pacts with demons. Like ogres, onis stand tall but possess cunning and magic that their simple kin lack. Onis are rare, but either prefer to strike out on their own to cause mischief while other onis lead ogres.",
    tactics: (
      <span>
        Oni like to rush the heroes to use demonic chill. On each turn, the oni
        uses one of its actions and prefers to use shadows embrace to keep the
        heroes guessing its location.
      </span>
    ),
    statBlock: (
      <Monster
        name="Oni"
        hp="10"
        evn="13"
        mgt="13"
        res="13"
        pb="2"
        type="Large Giant"
        tier="1"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="unholy 1"
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
            name: "Cursed Falchion",
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
            name: "Dark Curse",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "RES",
            damage: "2 unholy damage",
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
            name: "Demonic Chill",
            keywords: "magical, recharge",
            target: <span>1d4+1 enemies within the oni's zone</span>,
            defense: "MGT",
            damage: "3 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Shadows Embrace",
            keywords: "magical",
            effect: (
              <span>
                Oni becomes{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  invisible
                </Link>{" "}
                (turn ends), but this invisibility ends early if the oni uses a
                hostile ability
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Fear My Power",
            round: "1",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "RES",
            critical: (
              <span>
                Same as a success, and the target must spend a maneuver on their
                next turn to{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                away from the oni
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
            name: "Demonic Control",
            round: "3",
            keywords: "magical, range",
            target: <span>1 creature within 2 zones</span>,
            defense: "RES",
            critical: (
              <span>Oni controls the target's turns (overcome ends)</span>
            ),
            success: <span>Oni controls the target's next turn</span>,
            partial: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            name: "Hellfire Blade",
            round: "5",
            keywords: "magical",
            duration: "Scene ends",
            effect:
              "Oni's cursed falchion lights with hellfire, and it deals 1 unholy and 1 fire additional damage.",
          },
        ]}
      />
    ),
  },
  {
    name: "Troll Minion",
    tier: "2",
    type: "Giant",
    role: "",
    threat: "Minion",
    description:
      "Trolls are strange mutations of giants, with true giants believing trolls to be a former kingdom of giants cursed for their greed. Now trolls are tall greenish humanoid monsters consumed with hunger and can only be killed with acid or fire.",
    tactics: (
      <span>
        Troll minions prefer to fight near heroes to use rend and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Troll Minion"
        hp="4"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Large Giant"
        tier="2"
        threat="Minion"
        role=""
        vision="night"
        weaknesses="fire 4, toxic 4"
        traits={[
          {
            name: "Troll Regeneration",
            description: (
              <span>
                Troll minion has <ToolTip preset="regeneration" /> 4. When the
                troll minion takes fire or toxic damage, then their regeneration
                doesn't work on their next turn.
              </span>
            ),
          },
          {
            name: "Undying Troll",
            description: (
              <span>
                If the troll minion is reduced to 0 hit points from damage that
                isn't fire or toxic, then it doesn't die but instead falls{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                and is unconscious. On the troll minion's next turn, they wake
                up with 4 hit points.
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
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Dire Troll",
    tier: "2",
    type: "Giant",
    role: "Bruiser",
    threat: "Major",
    description:
      "Trolls are strange mutations of giants, with true giants believing trolls to be a former kingdom of giants cursed for their greed. Now trolls are tall greenish humanoid monsters consumed with hunger and can only be killed with acid or fire. Dire trolls are rare further mutations of trolls as they are twice as large and have a gruesome habit of eating their prey whole.",
    tactics: (
      <span>
        Dire trolls prefer to fight near heroes to use bite and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Dire Troll"
        hp="60"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Major"
        role="Bruiser"
        vision="night"
        weaknesses="fire 4, toxic 4"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Troll Regeneration",
            description: (
              <span>
                Dire trolls has <ToolTip preset="regeneration" /> 4. When the
                dire trolls takes fire or toxic damage, then their regeneration
                doesn't work on their next turn.
              </span>
            ),
          },
          {
            name: "Undying Troll",
            description: (
              <span>
                If the dire trolls is reduced to 0 hit points from damage that
                isn't fire or toxic, then it doesn't die but instead falls{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                and is unconscious. On the dire trolls's next turn, they wake up
                with 4 hit points.
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
            damage: "8 physical damage",
            success: (
              <span>
                If larger or smaller, the target gets swallowed by the troll.
                While swallowed, the target is{" "}
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
                a single turn, the troll throws up the target.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Angry Thrashing",
            trigger: "The troll takes fire or toxic damage",
            effect: <span>Troll can use rend</span>,
          },
        ]}
      />
    ),
  },
  {
    name: "Troll Warchief",
    tier: "2",
    type: "Giant",
    role: "Support",
    threat: "Major",
    description:
      "Trolls are strange mutations of giants, with true giants believing trolls to be a former kingdom of giants cursed for their greed. Now trolls are tall greenish humanoid monsters consumed with hunger and can only be killed with acid or fire. Troll Warchiefs are brutish leaders that organize trolls to become a force of terror for smaller settelments.",
    tactics: (
      <span>
        Troll Warchiefs prefer to fight near heroes to use axe and intimidating
        roar as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Troll Warchief"
        hp="52"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Major"
        role="Support"
        vision="night"
        weaknesses="fire 4, toxic 4"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Troll Regeneration",
            description: (
              <span>
                Troll warchief has <ToolTip preset="regeneration" /> 4. When the
                troll warchief takes fire or toxic damage, then their
                regeneration doesn't work on their next turn.
              </span>
            ),
          },
          {
            name: "Undying Troll",
            description: (
              <span>
                If the troll warchief is reduced to 0 hit points from damage
                that isn't fire or toxic, then it doesn't die but instead falls{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                and is unconscious. On the troll warchief's next turn, they wake
                up with 4 hit points.
              </span>
            ),
          },
        ]}
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
            defense: "EVN",
            damage: "6 physical damage",
          },
          {
            basic: true,
            name: "Throwing Axe",
            keywords: "range, weapon",
            target: <span>1 creature within 2 zones</span>,
            defense: "EVN",
            damage: "4 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Intimidating Roar",
            target: "All enemies within the troll warchief's zone",
            defense: "RES",
            critical: "hindered (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
            effect: (
              <span>
                All allies within the warchief's zone gain an extra maneuver on
                their next turn
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Angry Thrashing",
            trigger: "The troll takes fire or toxic damage",
            effect: <span>Troll can use axe</span>,
          },
        ]}
      />
    ),
  },
  {
    name: "Fire Giant",
    tier: "2",
    type: "Giant",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Fire giants are true giants that live near volcanoes and elemental rifts to the fire realm. Fire giants focus on forging great weapons with their innate fire magic as well as training to become great warriors. A fire giant stands nearly 20 feet tall with well forged armor and giant swords.",
    tactics: (
      <span>
        Fire giants prefer to fight near heroes to inflame weapon then use
        greatsword or cleave against multiple heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Fire Giant"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Standard"
        role="Bruiser"
        resistances="fire 4"
        weaknesses="cold 4"
        actions={[
          {
            basic: true,
            name: "Greatsword",
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
            name: "Throw Flame",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "4 fire damage",
          },
          {
            basic: false,
            name: "Cleave",
            keywords: "melee, weapon",
            target: (
              <span>
                2{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creatures
              </span>
            ),
            defense: "EVN",
            damage: "8 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Inflame Weapon",
            duration: "Until the fire giant's current turn ends",
            effect: (
              <span>
                The fire giant's greatsword and cleave deals an additional 2
                fire damage
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Fire Giant Pyromancer",
    tier: "2",
    type: "Giant",
    role: "Artillery",
    threat: "Standard",
    description:
      "Fire giants are true giants that live near volcanoes and elemental rifts to the fire realm. Fire giants focus on forging great weapons with their innate fire magic as well as training to become great warriors. A fire giant pyromancer stands nearly 20 feet tall with well forged armor and channels fire magic.",
    tactics: (
      <span>
        Fire giant pyromancers prefer to fight far from heroes amd always start
        a fight with volcanic burst against multiple heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Fire Giant Pyromancer"
        hp="22"
        evn="13"
        mgt="17"
        res="15"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Standard"
        role="Artillery"
        resistances="fire 4"
        weaknesses="cold 4"
        actions={[
          {
            basic: true,
            name: "Mace",
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
            name: "Throw Flame",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
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
          {
            basic: false,
            name: "Volcanic Burst",
            keywords: "magical, range",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "EVN",
            damage: "6 physical damage",
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
      />
    ),
  },
  {
    name: "Frost Giant",
    tier: "2",
    type: "Giant",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Frost giants are true giants that live in the coldest regions of the world. Frost giants fight for survival from other apex predators that thrive in the tundras. A Frost giant stands nearly 20 feet tall with makeshift  armor and giant axes.",
    tactics: (
      <span>
        Frost giants prefer to fight near heroes to use{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          grab
        </Link>
        , then use ice breath if avaialbe. On other turns, frost giants use
        greataxe or cleave against multiple heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Frost Giant"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Standard"
        role="Bruiser"
        resistances="cold 4"
        weaknesses="fire 4"
        actions={[
          {
            basic: true,
            name: "Greataxe",
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
            name: "Ice Spike",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "4 cold damage",
          },
          {
            basic: false,
            name: "Cleave",
            keywords: "melee, weapon",
            target: (
              <span>
                2{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creatures
              </span>
            ),
            defense: "EVN",
            damage: "8 physical damage",
          },
          {
            basic: false,
            name: "Ice Breath",
            keywords: "magical, recharge",
            target: <span>1d4+1 enemies within the giant's zone</span>,
            defense: "EVN",
            damage: "6 cold damage",
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
    name: "Frost Giant Cyromancer",
    tier: "2",
    type: "Giant",
    role: "Disabler",
    threat: "Standard",
    description:
      "Frost giants are true giants that live in the coldest regions of the world. Frost giants fight for survival from other apex predators that thrive in the tundras. A frost giant cyromancer stands nearly 20 feet tall with mystic robes and commands powerful ice magic.",
    tactics: (
      <span>
        Frost giant cyromancers prefer to fight from afar to use{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          aim
        </Link>{" "}
        then ice spike or winter's chill if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Frost Giant"
        hp="26"
        evn="13"
        mgt="17"
        res="15"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Standard"
        role="Disabler"
        resistances="cold 4"
        weaknesses="fire 4"
        actions={[
          {
            basic: true,
            name: "Mace",
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
                (turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Ice Spike",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "4 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Winter's Chill",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "MGT",
            damage: "6 cold damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
                </Link>{" "}
                (turn ends)
              </span>
            ),
            effect: (
              <span>
                The zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>{" "}
                for the scene that doesn't affect frost giants.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Freeze Feet",
            trigger: (
              <span>
                The frost giant cyromancer sees a creature use{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                within 1 zone
              </span>
            ),
            defense: "MGT",
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
    name: "Mountain Giant",
    tier: "2",
    type: "Giant",
    role: "Tank",
    threat: "Standard",
    description:
      "Mountain giants are true giants that live in the highest reaches of the world within beautifully made stone fortresses created by their geomancers. Mountain giants rarely interact with other mortals but sometimes demand fealty from lesser settlements that live near their mountain. A mountain giant stands nearly 25 feet tall with iron armor and giant hammer.",
    tactics: (
      <span>
        Mountain giants prefer to fight near heroes to use{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          grab
        </Link>
        , then use maul or sweep against multiple heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Moutain Giant"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Standard"
        role="Tank"
        resistances="physical 2"
        actions={[
          {
            basic: true,
            name: "Maul",
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
                <span>
                  <Link className="internal-link" to="/conditions#prone">
                    prone
                  </Link>
                </span>
              </span>
            ),
          },
          {
            basic: true,
            name: "Throw Rock",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Sweep",
            keywords: "melee, weapon",
            target: (
              <span>
                2{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creatures
              </span>
            ),
            defense: "EVN",
            damage: "8 physical damage",
            success: (
              <span>
                <span>
                  <Link className="internal-link" to="/conditions#prone">
                    prone
                  </Link>
                </span>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Mountain Giant Geomancer",
    tier: "2",
    type: "Giant",
    role: "Support",
    threat: "Standard",
    description:
      "Mountain giants are true giants that live in the highest reaches of the world within beautifully made stone fortresses created by their geomancers. Mountain giants rarely interact with other mortals but sometimes demand fealty from lesser settlements that live near their mountain. A mountain giant geomancer stands nearly 25 feet tall with ceremonial robes and commands powerful earth magic.",
    tactics: (
      <span>
        Mountain giant geomancers prefer to fight far from heroes to use throw
        rock and strength of the mountains. They stay near allies to trigger
        stone shield.
      </span>
    ),
    statBlock: (
      <Monster
        name="Moutain Giant Geomancer"
        hp="26"
        evn="13"
        mgt="17"
        res="15"
        pb="4"
        type="Huge Giant"
        tier="2"
        threat="Standard"
        role="Support"
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
            defense: "EVN",
            damage: "6 physical damage",
          },
          {
            basic: true,
            name: "Throw Rock",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "4 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Toughness of the Mountains",
            target: "1 creature within 1 zone",
            keywords: "magical, range",
            effect: (
              <span>
                Target gains 4{" "}
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
        reactions={[
          {
            name: "Stone Shield",
            target:
              "Mountain giant geomancer sees an attack roll made against a creature within 1 zone",
            keywords: "magical, range",
            effect: (
              <span>
                Triggering attack roll takes <Modifier type="mf" count="1" />{" "}
                and then the stone shield shatters. If attacker is engaged to
                the attacked creature, then they take 4 physical damage.
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default GiantMonsters;
