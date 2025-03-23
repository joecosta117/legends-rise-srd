import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
// import Modifier from "../../../components/Modifier";

const MonstrosityMonsters = [
  {
    name: "Basilisk",
    tier: "1",
    type: "Monstrosity",
    role: "Disabler",
    threat: "Major",
    description:
      "Basilisks are giant, magical snakes whose gaze can paralyze their victims before eating them. These terrifying monstrosities have ended the lives of many overly brazen adventurers that underestimate the dangerous monster.",
    tactics: (
      <span>
        Basilisks prefer to fight near heroes to use venemous bite, and uses
        paralyzing gaze every turn.
      </span>
    ),
    statBlock: (
      <Monster
        name="Basilisk"
        hp="20"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Monstrosity"
        tier="1"
        threat="Major"
        role="Disabler"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Venemous Bite",
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
            basic: false,
            name: "Paralyzing Gaze",
            keywords: "magical, range",
            target: <span>1 creature within 1 zone</span>,
            defense: "MGT",
            critical: <span>slowed (overcome ends)</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
                </Link>{" "}
                (turn ends) or slowed (overcome ends) if they're already slowed
                by this ability or paralyzing glance
              </span>
            ),
            effect: (
              <span>
                When a creature fails an overcome roll against this effect, then
                they become permanently petrified. A paralyzed creature can
                doused in fresh basilisk blood to be restored to normal.
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Paralyzing Glance",
            keywords: "magical, range",
            trigger:
              "A creature starts their turn within 1 zone of the basilisk that the basilisk can see",
            defense: "MGT",
            success: (
              <span>
                {" "}
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
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
    name: "Medusa",
    tier: "1",
    type: "Monstrosity",
    role: "Disabler",
    threat: "Boss",
    description:
      "Medusas are humans with snakes for hair and their gaze turns anyone into stone. Legend says medusas were cursed by the gods for their vanity, and now medusas hate all other mortals.",
    tactics: (
      <span>
        Medusas prefer to fight close enough to heroes for them to be in range
        of petrifying gaze and each turn uses petrifying glance.
      </span>
    ),
    statBlock: (
      <Monster
        name="Medusa"
        hp="10"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Medium Monstrosity"
        tier="1"
        threat="Boss"
        role="Disabler"
        resistances="toxic 1"
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
            name: "Petrifying Gaze",
            description: (
              <span>
                When a creature enters or starts their turn in the medusa's
                zone, the medusa can use petrifying glance at them as a free
                action.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Snake Fangs",
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
            name: "Poison Bow",
            keywords: "range, weapon",
            target: <span>1 creatue within 3 zones</span>,
            defense: "EVN",
            damage: "2 physical damage",
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
            basic: false,
            name: "Petrifying Glance",
            keywords: "magical, range",
            target: <span>1 creature within 1 zone</span>,
            defense: "MGT",
            critical: <span>slowed (overcome ends)</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#slowed">
                  slowed
                </Link>{" "}
                (turn ends) or slowed (overcome ends) if they're already slowed
                by this ability
              </span>
            ),
            effect: (
              <span>
                When a creature fails an overcome roll against this effect, then
                they become permanently petrified. A petrified creature can
                doused in fresh medusa blood to be restored to normal.
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Spit Venom",
            target: "All creatures in 1 zone within 3 zones",
            keywords: "range",
            round: "1",
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
          {
            name: "Animate Statues",
            keywords: "magical, range",
            round: "3",
            duration: "Scene ends",
            effect:
              "Medusa animates 4 statues of her previous victims (see below statblock) within 2 zones",
          },
          {
            name: "Expand Gaze",
            round: "5",
            duration: "Scene ends",
            effect:
              "Petrifying gaze extends to any creature that starts or enters anywhere within 1 zone of the medusa",
          },
        ]}
      />
    ),
    secondaryMonster: (
      <Monster
        name="Animated Statue"
        hp="2"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Medium Construct"
        tier="1"
        threat="Minion"
        role=""
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
            defense: "EVN",
            damage: "1 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Harpy",
    tier: "1",
    type: "Monstrosity",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Harpies are human looking creatures with black feathered wings. Their enchanted voices can lure the foolish into their clutches where they are killed and eaten.",
    tactics: (
      <span>
        Harpies prefer to fight near heroes to use harpy's song to lure heroes
        close before then using rend on them.
      </span>
    ),
    statBlock: (
      <Monster
        name="Harpy"
        hp="10"
        evn="15"
        mgt="11"
        res="13"
        pb="2"
        type="Medium Monstrosity"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        speeds="fly 1"
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
            name: "Harpy's Song",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "RES",
            partial: "charmed (turn ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#charmed">
                  charmed
                </Link>{" "}
                (overcome ends) while the harpy uses a maneuver to focus on this
                ability
              </span>
            ),
            critical: "Same as a success, but the harpy doesn't have to focus",
          },
        ]}
      />
    ),
  },
  {
    name: "Chimera",
    tier: "1",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Boss",
    description:
      "Chimeras are magical abominations created as arcane experiments by fusing a lion, young dragon, and goat together into one body. Although the fusion works, the chimera's mind is filled with endless anger as multiple minds fight for control while raging at their predictiment.",
    tactics: (
      <span>
        Chimeras prefer to fight close enough to heroes for them to use dragon
        breath or rend, and then use{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Chimera"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Large Monstrosity"
        tier="1"
        threat="Boss"
        role="Bruiser"
        vision="night"
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
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Dragon Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies in the chimera's zone</span>,
            defense: "EVN",
            damage: "3 fire damage",
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "Tail Lash",
            trigger: (
              <span>
                The chimera sees a creature{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
                , or use a range or magical ability within its zone
              </span>
            ),
            effect:
              "The chimera can use rend against the triggering creature even if they aren't engaged to the chimera",
          },
        ]}
        bossActions={[
          {
            name: "Ram Charge",
            round: "1",
            effect: (
              <span>
                The chimera uses{" "}
                <Link className="internal-link" to="/combat-abilities#charge">
                  charge
                </Link>{" "}
                to use rend, but can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                twice. On a successful rend, the target is knocked{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
                .
              </span>
            ),
          },
          {
            name: "Lion Roar",
            keywords: "magical, range",
            round: "3",
            defense: "RES",
            target: "All enemies within the chimera's zone",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
            critical: <span>hindered (overcome ends)</span>,
          },
          {
            name: "Thrash",
            round: "5",
            effect:
              "The chimera uses rend against three creatures, and if no creature is close enough, then it can move first.",
          },
        ]}
      />
    ),
  },
  {
    name: "Spiderling",
    tier: "1",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Spiderlings are a horrifying creatures that resemble a humanoid top half with a spider bottom half. They are cursed creatures that hate mortals and actively hunt those that live an uncursed life. Some spiderlings shun their anger and form small communities deep in the nightlands to mind their own business.",
    tactics: (
      <span>
        Spiderlings prefer to fight near heroes to use sword but can also use
        web to stop fleeing creatures.
      </span>
    ),
    statBlock: (
      <Monster
        name="Spiderling"
        hp="12"
        evn="13"
        mgt="15"
        res="13"
        pb="2"
        type="Large Monstrosity"
        tier="1"
        threat="Standard"
        role="Bruiser"
        speeds="climb 1"
        vision="night"
        actions={[
          {
            basic: true,
            name: "Sword",
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
            name: "Web",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "2 physical damage",
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
    name: "Griffon",
    tier: "1",
    type: "Monstrosity",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Griffons are regal beasts that resemble a cross between an eagle and lion. Griffons are terrifying hunters and quick to anger if disrepected.",
    tactics: (
      <span>
        Griffons prefer to fight near heroes to use rend or griffon shriek if
        available, and{" "}
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
        name="Griffon"
        hp="10"
        evn="15"
        mgt="13"
        res="13"
        pb="2"
        type="Large Monstrosity"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        speeds="fly 1"
        vision="night"
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
            name: "Griffon Shriek",
            keywords: "range, recharge",
            target: <span>All enemies within the griffon's zone</span>,
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
          },
        ]}
      />
    ),
  },
  {
    name: "Minotaur Exile",
    tier: "1",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Minotaurs are a proud people that look like humanoid bulls. However, some minotaurs are exiled to live in mazes as punishment for crimes which drives these minotaurs to become mad tormentors of other mortals.",
    tactics: (
      <span>
        Minotaur exiles prefer to fight near heroes by moving towards them with
        minotaur's charge, and use{" "}
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
        name="Minotaur Exile"
        hp="12"
        evn="13"
        mgt="15"
        res="13"
        pb="2"
        type="Large Monstrosity"
        tier="1"
        threat="Standard"
        role="Bruiser"
        actions={[
          {
            basic: true,
            name: "Horns",
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
            name: "Minotaur's Charge",
            effect: (
              <span>
                Minotaur uses{" "}
                <Link className="internal-link" to="/combat-abilities#charge">
                  charge
                </Link>{" "}
                to use horns, and on a success or higher attack roll, the target
                is knocked{" "}
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
    name: "Hydra",
    tier: "1",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Boss",
    description:
      "Hydras are legendary monsters known for their many heads and being nearly impossible to kill. Hydras are often used by powerful entities as guardians to ancient sites much like a human would have a guard dog.",
    tactics: (
      <span>
        Hydras prefer to fight close enough to heroes for them to be in range of
        bite and each turn use{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Hydra"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Huge Monstrosity"
        tier="1"
        threat="Boss"
        role="Bruiser"
        vision="night"
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
            name: "Hydra Regeneration",
            description: (
              <span>
                Hydra has <ToolTip preset="regeneration" /> 2. When the hydra
                takes fire or toxic damage, then their regeneration doesn't work
                on their next turn. When the hydra takes 5 or more damage in a
                single turn, one of its heads dies. When the hydra regenerates,
                it regrows up to two heads if any heads are dead.
              </span>
            ),
          },
          {
            name: "Hydra Heads",
            description: (
              <span>
                When the hydra takes 5 or more damage in a single turn, one of
                its five heads dies. When the hydra regenerates, it regrows up
                to two heads if any heads are dead.
              </span>
            ),
          },
        ]}
        actions={[
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
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Frenzy",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature for each head
              </span>
            ),
            defense: "EVN",
            damage: "3 physical damage",
          },
        ]}
        bossActions={[
          {
            name: "Hydra Roar",
            target: "All enemies",
            keywords: "range",
            round: "1",
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
          },
          {
            name: "Frenzy",
            round: "3",
            target: "Each enemy within the hydra's zone",
            effect: "Hydra uses bite against each target",
          },
          {
            name: "Hydra Rage",
            round: "5",
            duration: "Scene ends",
            effect:
              "Hydra gains +1 fortune on all attack rolls and immediately ends all conditions on itself.",
          },
        ]}
      />
    ),
  },
  {
    name: "Serpentfolk Whisper",
    tier: "1",
    type: "Monstrosity",
    role: "Disabler",
    threat: "Standard",
    description:
      "Serpentfolk were once humans but have been mutated into snake like humanoids by worshipping a vile snake god. Zealous followers of their evil deity, serpentfolk expand their ranks by spreading the faith while secretly undermining civilizations to prepare for serpentfolk to once rule the lands. Serpentfolk whispers are the most human looking of serpentfolks, which makes them the perfect spy and propaganda spreaders.",
    tactics: (
      <span>
        Serpentfolk whispers prefer to fight near heroes but use confusing
        whisper to turn heroes against each other.
      </span>
    ),
    statBlock: (
      <Monster
        name="Serpentfolk Whisper"
        hp="10"
        evn="13"
        mgt="11"
        res="15"
        resistances="toxic 1"
        pb="2"
        type="Medium Monstrosity"
        tier="1"
        threat="Standard"
        role="Disabler"
        vision="night"
        actions={[
          {
            basic: true,
            name: "Poisoned Dagger",
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
            name: "Confusing Whisper",
            keywords: "magical, range",
            target: <span>1 creature within 2 zones</span>,
            defense: "EVN",
            damage: "2 psychic damage",
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
    name: "Serpentfolk Priest",
    tier: "1",
    type: "Monstrosity",
    role: "Support",
    threat: "Major",
    description:
      "Serpentfolk were once humans but have been mutated into snake like humanoids by worshipping a vile snake god. Zealous followers of their evil deity, serpentfolk expand their ranks by spreading the faith while secretly undermining civilizations to prepare for serpentfolk to once rule the lands. Serpentfolk priests are humanoid creatures with snake heads that espouse the vile beliefs of their snake god.",
    tactics: (
      <span>
        Serpentfolk priests prefer to fight near heroes to use profane bite, and
        always uses serpent's blessing.
      </span>
    ),
    statBlock: (
      <Monster
        name="Serpentfolk Priest"
        hp="10"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Medium Monstrosity"
        tier="1"
        threat="Major"
        role="Support"
        vision="night"
        resistances="toxic 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Profane Bite",
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
            success: <span>Gains weakness 1 to all damage (turn ends)</span>,
          },
        ]}
        maneuvers={[
          {
            name: "Serpent's Blessing",
            keywords: "magical, range",
            target: "1 creature within 1 zone",
            effect:
              "Target heals 2 and venom sprays around them, dealing 1 toxic damage to all engaged enemies.",
          },
        ]}
      />
    ),
  },
  {
    name: "Serpentfolk Abomination",
    tier: "1",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Major",
    description:
      "Serpentfolk were once humans but have been mutated into snake like humanoids by worshipping a vile snake god. Zealous followers of their evil deity, serpentfolk expand their ranks by spreading the faith while secretly undermining civilizations to prepare for serpentfolk to once rule the lands. Serpentfolk abominations are large snake like monsters that are the elite warriors of the serpentfolks.",
    tactics: (
      <span>
        Serpentfolk abominations prefer to fight near heroes to use poison
        scimitar and constrict, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Serpentfolk Abomination"
        hp="20"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Large Monstrosity"
        tier="1"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="toxic 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Poison Scimitar",
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
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "2 physical damage",
          },
          {
            basic: true,
            name: "Constrict",
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
                <Link className="internal-link" to="/conditions#hindered">
                  seized
                </Link>{" "}
                (overcome ends) and the serpentfolk abomination can only have
                one creature seized in this way at a time
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default MonstrosityMonsters;
