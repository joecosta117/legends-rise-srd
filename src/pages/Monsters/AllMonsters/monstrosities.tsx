import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

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
            basic: false,
            name: "Paralyzing Gaze",
            keywords: "magical, range",
            target: <span>1 creature within 1 zone</span>,
            defense: "Guard",
            critical: <span>dazed (overcome ends)</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends) or dazed (overcome ends) if they're already
                dazed by this ability or paralyzing glance
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
            defense: "Guard",
            success: (
              <span>
                {" "}
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
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Medium Monstrosity"
        tier="1"
        threat="Boss"
        role="Disabler"
        resistances="toxic"
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
          {
            basic: true,
            name: "Poison Bow",
            keywords: "range, weapon",
            target: <span>1 creatue within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
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
            basic: false,
            name: "Petrifying Glance",
            keywords: "magical, range",
            target: <span>1 creature within 1 zone</span>,
            defense: "Guard",
            critical: <span>dazed (overcome ends)</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends) or dazed (overcome ends) if they're already
                dazed by this ability
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
            defense: "Guard",
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
        evn="13"
        mgt="11"
        res="11"
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
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Harpy's Song",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            partial: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
            success: (
              <span>
                Target can't use hostile abilities against the harpy (turn
                ends), but this effect ends early if the harpy uses a hostile
                ability against the target.
              </span>
            ),
            critical:
              "Same as a success, but the effect lasts for the scene (overcome ends)",
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
                At the end of a boss monster's turn, they can take direct damage
                equal to their proficiency bonus to end one condition affecting
                them.
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
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Dragon Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies in the chimera's zone</span>,
            defense: "Guard",
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
            defense: "Spirit",
            target: "All enemies within the chimera's zone",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
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
        res="11"
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
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Web",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
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
        evn="13"
        mgt="13"
        res="11"
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
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: false,
            name: "Griffon Shriek",
            keywords: "range, recharge",
            target: <span>All enemies within the griffon's zone</span>,
            defense: "Spirit",
            critical: "hindered (overcome ends)",
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
        res="11"
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
            defense: "Guard",
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
                At the end of a boss monster's turn, they can take direct damage
                equal to their proficiency bonus to end one condition affecting
                them.
              </span>
            ),
          },
          {
            name: "Hydra Regeneration",
            description: (
              <span>
                Hydra has <ToolTip preset="regen" /> 2. When the hydra takes
                fire or toxic damage, then their regeneration doesn't work on
                their next turn. When the hydra takes 5 or more damage in a
                single turn, one of its heads dies. When the hydra regenerates,
                it regrows up to two heads if any heads are dead.
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
            defense: "Guard",
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
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        bossActions={[
          {
            name: "Hydra Roar",
            target: "All enemies",
            keywords: "range",
            round: "1",
            defense: "Spirit",
            critical: "hindered (overcome ends)",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
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
        evn="11"
        mgt="11"
        res="13"
        resistances="toxic"
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
          {
            basic: false,
            name: "Confusing Whisper",
            keywords: "magical, range",
            target: <span>1 creature within 2 zones</span>,
            defense: "Spirit",
            damage: "2 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#confused">
                  confused
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
        evn="11"
        mgt="11"
        res="13"
        pb="2"
        type="Medium Monstrosity"
        tier="1"
        threat="Major"
        role="Support"
        vision="night"
        resistances="toxic"
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
            defense: "Guard",
            damage: "3 physical damage",
            success: <span>Gains weakness to all damage (next turn ends)</span>,
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
        res="11"
        pb="2"
        type="Large Monstrosity"
        tier="1"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="toxic"
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
            defense: "Guard",
            damage: "4 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: true,
            name: "Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
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
            defense: "Guard",
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
  {
    name: "Wererat",
    tier: "1",
    type: "Monstrosity",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "Quick, shape-shifting predator cursed by the moon, wererats bite their foes with cunning fury and unnatural resilience.",
    tactics: (
      <span>
        Wererats will rush the heroes to use cursed bite and{" "}
        <Link className="internal-link" to="/combat-abilities#disengage">
          disengage
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Wererat"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Monstrosity"
        tier="1"
        vision="night"
        threat="Standard"
        role="Skirmisher"
        actions={[
          {
            basic: true,
            name: "Cursed Bite (Rat Form Only)",
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
            success:
              "Target becomes cursed with lycanthropy (long rest ends). If reduced to 0 hit points, then the target must make an overcome roll. On a failure, they transform into a wererat under the GM's control and heal equal to their shaken value. On a success, they become immune to the curse until after a long rest.",
          },
          {
            basic: true,
            name: "Shortsword",
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
            basic: true,
            name: "Crossbow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: true,
            name: "Shapechange",
            keywords: "magical, shapeshift",
            effect:
              "Wererat transforms into a humanoid rat form, or they return to their true humanoid form.",
          },
        ]}
      />
    ),
  },
  {
    name: "Werewolf",
    tier: "1",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Major",
    description:
      "Savage, shape-shifting predator cursed by the moon, werewolves tears through foes with primal fury and unnatural resilience.",
    tactics: (
      <span>
        Werewolves will rush the heroes to use cursed bite and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Werewolf"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Monstrosity"
        tier="1"
        threat="Major"
        role="Bruiser"
        vision="night"
        traits={[
          {
            name: "Pack Tactics",
            description:
              "The werewolf gains +1 fortune on attack rolls against creatures engaged to an ally",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Cursed Bite (Wolf Form Only)",
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
            success:
              "Target becomes cursed with lycanthropy (long rest ends). If reduced to 0 hit points, then the target must make an overcome roll. On a failure, they transform into a werewolf under the GM's control and heal equal to their shaken value. On a success, they become immune to the curse until after a long rest.",
          },
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
            basic: true,
            name: "Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: true,
            name: "Shapechange",
            keywords: "magical, shapeshift",
            effect:
              "Werewolf transforms into a large humanoid wolf form, or they return to their true humanoid form.",
          },
        ]}
      />
    ),
  },
  {
    name: "Alpha Werewolf",
    tier: "1",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Boss",
    description:
      "Savage, shape-shifting predator cursed by the moon, werewolves tears through foes with primal fury and unnatural resilience. The alpha werewolf is the fierce leader of a pack of werewolves, and is the most powerful of them all.",
    tactics: (
      <span>
        The alpha werewolf will rush the heroes to use cursed bite and{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Alpha Werewolf"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Small or Medium Monstrosity"
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
                At the end of a boss monster's turn, they can take direct damage
                equal to their proficiency bonus to end one condition affecting
                them.
              </span>
            ),
          },
          {
            name: "Blood Sense",
            description:
              "The alpha werewolf gains +1 fortune on attack rolls against shaken creatures",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Cursed Bite (Wolf Form Only)",
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
            success:
              "Target becomes cursed with lycanthropy (long rest ends). If reduced to 0 hit points, then the target must make an overcome roll. On a failure, they transform into a werewolf under the GM's control and heal equal to their shaken value. On a success, they become immune to the curse until after a long rest.",
          },
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
            defense: "Guard",
            damage: "4 physical damage",
          },
          {
            basic: true,
            name: "Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
        ]}
        maneuvers={[
          {
            basic: true,
            name: "Shapechange",
            keywords: "magical, shapeshift",
            effect:
              "Alpha werewolf transforms into a large humanoid wolf form, or they return to their true humanoid form.",
          },
        ]}
        bossActions={[
          {
            name: "Primal Roar",
            round: "1",
            keywords: "range",
            target: <span>1d4+1 enemies</span>,
            defense: "Spirit",
            critical: (
              <span>
                Same as a success, and the target must spend a maneuver on their
                next turn to{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                away from the alpha werewolf
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
            name: "Summon the Pack",
            round: "3",
            effect:
              "4 lesser werewolves (see below statblock) appear within 2 zones of the alpha werewolf",
          },
          {
            name: "Savage Rage",
            round: "5",
            duration: "Scene ends",
            effect:
              "The alpha werewolf gains +1 fortune to all attack rolls and ends any negative effects on itself",
          },
        ]}
      />
    ),
    secondaryMonster: (
      <Monster
        name="Lesser Werewolf"
        hp="2"
        evn="13"
        mgt="17"
        res="11"
        pb="2"
        type="Medium Monstrosity"
        tier="1"
        threat="Minion"
        role=""
        vision="night"
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
            damage: "1 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Cave Worm",
    tier: "2",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Boss",
    description:
      "Cave worms are colossal worms that burrow through the earth and leaving behind massive tracts of tunnels. Most travelers rarely see cave worms but the tremors from their incoming arrival is a fear many share.",
    tactics: (
      <span>
        Cave worms prefer to fight close enough to heroes to use bite and each
        turn use{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Cave Worm"
        hp="30"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        type="Colossal Monstrosity"
        tier="2"
        threat="Boss"
        role="Bruiser"
        vision="night"
        speeds="burrow 1"
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
            name: "Inexorable Movement",
            description: (
              <span>
                The cave worm ignores movement penalties from difficult zones.
              </span>
            ),
          },
          {
            name: "Shifting Ground",
            description: (
              <span>
                The ave worm's colossal movements make the ground shake as it
                burrows. The cave worm's zone is a difficult zone for huge or
                smaller creatures.
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
            defense: "Guard",
            damage: "8 physical damage",
            success: (
              <span>
                If huge or smaller, the target gets swallowed by the cave worm.
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
                a single turn, the cave worm throws up the target.
              </span>
            ),
          },
          {
            basic: false,
            name: "Regurgitate",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "4 physical damage",
            effect:
              "The cave worm spits out a creature or rock from its stomach. If the spit out entity is a creature, it takes crash damage.",
          },
        ]}
        bossActions={[
          {
            name: "Burrow Charge",
            target: "All creatures in 1 zone",
            keywords: "range",
            round: "1",
            defense: "Guard",
            damage: "9 physical",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
            effect: (
              <span>
                The cave worm burrows underground and pops up in the targeted
                zone.
              </span>
            ),
          },
          {
            name: "Thrash",
            round: "3",
            target: "Each other creature within 1 zone of the worm",
            keywords: "range",
            defense: "Guard",
            damage: "9 physical",
          },
          {
            name: "Tail Tremors",
            round: "5",
            duration: "Scene ends",
            target: "All creatures within within 1 zone of the cave worm",
            critical: "Same as success, and 4 physical damage",
            success: "prone",
            effect: "Targeted zones become difficult zones",
          },
        ]}
      />
    ),
  },
  {
    name: "Sphinx",
    tier: "2",
    type: "Monstrosity",
    role: "Disabler",
    threat: "Boss",
    description:
      "Sphinxes are majestic and magical creatures that look like a large lion with the head of a human. Sphinxes collect knowledge and have an innate understanding of prophecy and time. They are usually willing to help respectable mortals, but sphinxes are quick to anger.",
    tactics: (
      <span>
        Sphinxs prefer to fight close enough to heroes to use claw and each turn
        use{" "}
        <Link className="internal-link" to="/combat-abilities#hinder">
          hinder
        </Link>{" "}
        or infinite knowledge as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Sphinx"
        hp="26"
        evn="14"
        mgt="15"
        res="14"
        pb="4"
        type="Large Monstrosity"
        tier="2"
        threat="Boss"
        role="Disabler"
        vision="night"
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
            name: "Oracle's Curse",
            description: (
              <span>
                Enemies within the sphinx's zone take{" "}
                <Modifier type="mf" count="1" /> to all rolls.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: false,
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
            basic: false,
            name: "Unravel Magic",
            keywords: "magical, range",
            target: <span>1 magical effect within 1 zone</span>,
            effect:
              "If the magical effect's tier (spell tier if the effect originates from a spell) is 2 or less, then the targeted effect ends. Otherwise, the sphinx must succeed on an attack roll against the Spirit of the targeted effect’s origin (spellcaster for a spell) or a TN of 10 + double the effect’s tier. ",
          },
        ]}
        maneuvers={[
          {
            name: "Infinite Knowledge",
            effect: (
              <span>
                Spinx can use{" "}
                <Link className="internal-link" to="/combat-abilities#study">
                  study
                </Link>{" "}
                on all enemies
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Time Dilation",
            target: "All creatures in 1 zone",
            keywords: "magical, range",
            round: "1",
            defense: "Spirit",
            damage: "9 arcane",
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
            name: "Greater Curse",
            round: "3",
            keywords: "magical",
            effect:
              "The sphinx's oracle's curse penalty increases to +2 misfortunes, and it affects all enemies within 1 zone of the sphinx",
          },
          {
            name: "Desperate Foresight",
            round: "5",
            duration: "Scene ends",
            effect:
              "When the sphinx makes a roll, it can roll again and take the higher result.",
          },
        ]}
      />
    ),
  },
  {
    name: "Storm Eagle",
    tier: "2",
    type: "Monstrosity",
    role: "Artillery",
    threat: "Major",
    description:
      "Storm Eagles are huge blue feathered eagles that command the weather around them. They call lightning down upon their prey to fry it before swooping down to claim their prize.",
    tactics: (
      <span>
        Storm Eagles prefer to fight afar from heroes to use{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then either call lightning or cyclone.
      </span>
    ),
    statBlock: (
      <Monster
        name="Storm Eagle"
        hp="44"
        evn="15"
        mgt="15"
        res="13"
        pb="4"
        type="Huge Monstrosity"
        tier="2"
        threat="Major"
        role="Artillery"
        resistances="lighting"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Storm Aura",
            description: (
              <span>
                The storm eagle's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (2 lightning damage) for enemies.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Talon",
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
            name: "Call Lightning",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "6 lightning damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Cyclone",
            keywords: "magical, range, recharge",
            target: <span>1 zone within 2 zones</span>,
            duration: "Scene ends",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (2 physical damage). As a maneuver, the storm eagle can make an
                attack roll against 1 creature's Guard within 1 zone of the
                cyclone, dealing 3 lightning damage.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Kraken",
    tier: "3",
    type: "Monstrosity",
    role: "Disabler",
    threat: "Boss",
    description:
      "Krakenes are mysterious and enormous squid-like leviathans that incredibly intelligent and cruel. Legends say the krakens were the first creations of the gods, and once the gods created other mortals, krakens developed an ages old grudge against other creatures. Krakens dwell deep within the ocean while plotting sinister plans that takes centuries to unfold.",
    tactics: (
      <span>
        Krakens prefer to fight close enough to heroes to use tentacle or bite
        if they have a seized target, and will use constrict if they have anyone
        seized.
      </span>
    ),
    statBlock: (
      <Monster
        name="Kraken"
        hp="48"
        evn="16"
        mgt="17"
        res="16"
        pb="6"
        type="Colossal Monstrosity"
        tier="3"
        threat="Boss"
        role="Disabler"
        vision="night"
        speeds="swim 2"
        resistances="cold, psychic, toxic"
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
            name: "Aquatic",
            description: "The kraken can breath underwater",
          },
          {
            name: "Turbulent Waters",
            description: (
              <span>
                All zones within 1 zone of the kraken are{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zones
                </Link>{" "}
                except to the kraken.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Tentacle",
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
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Bite",
            keywords: "melee, weapon",
            target: <span>1 creature seized by the kraken</span>,
            defense: "Guard",
            damage: "9 physical damage",
            success: (
              <span>
                If huge or smaller, the target gets swallowed by the greed
                demon. While swallowed, the target is{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  blinded
                </Link>
                ,{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
                , and takes 3{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage. If a swallowed creature deals 12 or more damage on
                a single turn, the kraken throws up the target.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Constrict",
            target: "All creatures seized by the kraken",
            damage: "3 physical damage",
            effect:
              "If the target is holding their breath, then they lose 1d4 rounds of air",
          },
        ]}
        bossActions={[
          {
            name: "Lightning Storm",
            target: "All creatures in 1 zone",
            keywords: "magical, range",
            round: "1",
            defense: "Guard",
            damage: "9 lightning",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 lightning damage) for the scene
              </span>
            ),
          },
          {
            name: "Ink Cloud",
            round: "3",
            keywords: "magical, range",
            duration: "Scene ends",
            target: "All zones within 1 zone of the kraken",
            effect: (
              <span>
                Targeted zones become filled with black ink, making anyone in
                them{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  obscured
                </Link>{" "}
                and the zones also become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 toxic damage). When a creature takes this damage, the kraken
                makes an attack roll against the creatue's Guard, and the
                creatue is{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends) on a success or higher.
              </span>
            ),
          },
          {
            name: "Psychic Scream",
            round: "5",
            keywords: "magical, range",
            target: "All enemies",
            damage: "9 psychic damage",
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
    name: "Terror That Walks",
    tier: "3",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Boss",
    description:
      "The Terror That Walks is colossal kaiju like repitle that hibernates for centuries before eventually awakening to cause massive destruction that can level entire kingdoms and then once satiated, retreats back into the ocean. The origins and motivations of the giant monstrosity are unknown as none except the world's mightiest heroes can get close enough to the beast and live.",
    tactics: (
      <span>
        The Terror That Walks prefer to fight close enough to heroes to use bite
        and uses beam of utter destruction against any clustered or ranged foes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Terror That Walks"
        hp="54"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Colossal Monstrosity"
        tier="3"
        threat="Boss"
        role="Bruiser"
        vision="night"
        speeds="land 2, swim 2"
        resistances="arcane, physical, toxic"
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
            name: "Aquatic",
            description: "The terror that walks can breath underwater",
          },
          {
            name: "Regeneration",
            description: (
              <span>
                The terror that walks has <ToolTip preset="regen" /> 3.
              </span>
            ),
          },
        ]}
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
            damage: "12 physical damage",
            success: (
              <span>
                If huge or smaller, the target gets swallowed by the kaiju.
                While swallowed, the target is{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  blinded
                </Link>
                ,{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>
                , and takes 3{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage. If a swallowed creature deals 12 or more damage on
                a single turn, the kaiju throws up the target.
              </span>
            ),
          },
          {
            basic: true,
            name: "Beam of Utter Destruction",
            keywords: "magical, range, recharge",
            target: <span>3 connected zones within 5 zones</span>,
            defense: "Spirit",
            damage: "9 arcane damage",
            success: (
              <span>
                3{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                arcane damage
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "World Ending Roar",
            target: "All enemies",
            keywords: "range",
            round: "1",
            defense: "Spirit",
            critical: (
              <span>
                Same as a success, and the target becomes{" "}
                <Link className="internal-link" to="/conditions#confused">
                  confused
                </Link>{" "}
                (next turn ends)
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
            name: "Trample",
            round: "3",
            target: "All other creatues within 1 zone of the terror that walks",
            defense: "Guard",
            damage: "9 physical",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            name: "Destructive Blood",
            round: "5",
            duration: "Scene ends",
            effect: (
              <span>
                The terror that walks' blood begins creating magically
                radiation. All zones within 1 zone of the terror that walks
                become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 arcane damage)
              </span>
            ),
            keywords: "aura, magical",
          },
        ]}
      />
    ),
  },
  {
    name: "Astral Worm",
    tier: "3",
    type: "Monstrosity",
    role: "Bruiser",
    threat: "Major",
    description:
      "Astral worms are giant flying worms that swim through the astral sea and feast upon unaware travellers to the strange place. Anyone swallowed by the giant worm is trapped inside its dimensional stomach. Those that have survived an astral worm attack speak of great treasures trapped within the astral worm's dimensional stomach.",
    tactics: (
      <span>
        Astral Worms prefer to fight near heroes using bite, thrash, or mental
        overload if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Astral Worm"
        hp="108"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        type="Colossal Monstrosity"
        tier="3"
        threat="Major"
        role="Bruiser"
        vision="night"
        resistances="arcane"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Antimagic Zone",
            description: (
              <span>
                When a creature within 1 zone of the astral worm uses a magical
                ability, they must succeed on an overcome roll or the ability
                has no effect.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Bite",
            keywords: "melee, weapon",
            target: <span>1 engaged creature</span>,
            defense: "Guard",
            damage: "12 physical damage",
            success: (
              <span>
                Target swallowed by the astral worm. While swallowed, the target
                is in a small dimensional realm with the other contents of the
                worm's stomach. The only way to escape is if the astral worm is
                killed, or by succeeding on a d4{" "}
                <Link
                  className="internal-link"
                  to="/rules/skills#progress-countdowns"
                >
                  countdown
                </Link>{" "}
                'break out' of skill tier 3.
              </span>
            ),
          },
          {
            basic: false,
            name: "Thrash",
            keywords: "melee, weapon",
            target: <span>1d4+1 engaged creature</span>,
            defense: "Guard",
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
            basic: false,
            name: "Mental Overload",
            keywords: "magical, range, recharge",
            target: <span>All enemies within 1 zone</span>,
            defense: "Spirit",
            damage: "9 psychic damage",
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
];

export default MonstrosityMonsters;
