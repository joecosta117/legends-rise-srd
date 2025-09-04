import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const FaerieMonsters = [
  {
    name: "Young Glamour Dragon",
    tier: "1",
    type: "Dragon Faerie",
    role: "Disabler",
    threat: "Major",
    description:
      "The playful glamour dragons are faerie dragons from the green realm. The least serious of the true dragons, glamour dragons enjoy playing pranks on mortals and other faeries. However, their capricious fey nature makes them quick to anger and become quite dangerous. Glamour dragons appear as brightly colored dragons with butterfly like wings.",
    tactics: (
      <span>
        Young Glamour dragons will rush the heroes to use vine rend or dazzling
        breath if available, as well as faerie charm as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Young Glamour Dragon"
        hp="20"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        type="Large Dragon Faerie"
        tier="1"
        threat="Major"
        role="Disabler"
        vision="night"
        resistances="psychic"
        speeds="fly 1, swim 1"
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
            name: "Vine Rend",
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
                (next turn ends) by vines that sprout from the ground
              </span>
            ),
          },
          {
            basic: false,
            name: "Dazzling Breath",
            keywords: "recharge",
            target: <span>1d4+1 enemies within the dragon's zone</span>,
            defense: "Spirit",
            damage: "3 psychic damage",
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
        maneuvers={[
          {
            name: "Faerie Charm",
            defense: "Spirit",
            target: "1 creature within 2 zones",
            critical:
              "Same as a success, but the effect lasts for the scene (overcome ends)",
            success: (
              <span>
                Target can't use hostile abilities against the glamour dragon
                (next turn ends), but this effect ends early if the glamour
                dragon uses a hostile ability against the target.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Adult Glamour Dragon",
    tier: "2",
    type: "Dragon Faerie",
    role: "Disabler",
    threat: "Boss",
    description:
      "The playful glamour dragons are faerie dragons from the green realm. The least serious of the true dragons, glamour dragons enjoy playing pranks on mortals and other faeries. However, their capricious fey nature makes them quick to anger and become quite dangerous. Glamour dragons appear as brightly colored dragons with butterfly like wings.",
    tactics: (
      <span>
        Adult Glamour dragons will rush the heroes to use vine rend or dazzling
        breath if available, as well as faerie charm as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Adult Glamour Dragon"
        hp="156"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Dragon Faerie"
        tier="2"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="psychic"
        speeds="fly 1, swim 1"
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
            name: "Vine Rend",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends) by vines that sprout from the ground
              </span>
            ),
          },
          {
            basic: false,
            name: "Dazzling Breath",
            keywords: "recharge",
            target: (
              <span>
                1d4+1 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "Spirit",
            damage: "10 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#vulnerable">
                  vulnerable
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Faerie Charm",
            defense: "Spirit",
            target: "1 creature within 2 zones",
            critical:
              "Same as a success, but the effect lasts for the scene (overcome ends)",
            success: (
              <span>
                Target can't use hostile abilities against the glamour dragon
                (next turn ends), but this effect ends early if the glamour
                dragon uses a hostile ability against the target.
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
            name: "Mirror Images",
            round: "3",
            keywords: "magical",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon can{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleport
                </Link>{" "}
                up to 1 zone away, and then surrounds themselves in a number of
                illusory duplicates equal to the number of heroes. When a
                creature makes an attack roll only against the dragon, they must
                make an overcome roll. On a success, the dragon is affected as
                normal, but on a failure, the dragon is unaffected and a
                duplicate disappears.
              </span>
            ),
          },
          {
            name: "Faerie Temptations",
            round: "5",
            keywords: "magical, range",
            target: "All enemies",
            defense: "Spirit",
            critical:
              "Same as a success, but the target is captivated for the scene (overcome ends)",
            success: (
              <span>
                An illusion of a beautiful faerie appears before the target. The
                target spends their turn captivated by the faerie and conversing
                with them (next turn ends). If the target takes damage, then
                they can make an overcome roll to end this effect.
              </span>
            ),
            partial: (
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
    name: "Ancient Glamour Dragon",
    tier: "3",
    type: "Dragon Faerie",
    role: "Disabler",
    threat: "Boss",
    description:
      "The playful glamour dragons are faerie dragons from the green realm. The least serious of the true dragons, glamour dragons enjoy playing pranks on mortals and other faeries. However, their capricious fey nature makes them quick to anger and become quite dangerous. Glamour dragons appear as brightly colored dragons with butterfly like wings.",
    tactics: (
      <span>
        Ancient Glamour dragons will rush the heroes to use vine rend or
        dazzling breath if available, as well as faerie charm as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ancient Glamour Dragon"
        hp="288"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Colossal Dragon Faerie"
        tier="3"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="psychic"
        speeds="fly 2, swim 2"
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
            name: "Glamour Form",
            description: (
              <span>
                The dragon's form is blurry from illusionary magic, and all
                attack rolls against the dragon take{" "}
                <Modifier type="mf" count="1" />. When a creature gets a
                critical success on an attack roll against the dragon, this
                magical effect ends until the dragon spends a maneuver to
                activate it again.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Vine Rend",
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
                (next turn ends) by vines that sprout from the ground
              </span>
            ),
          },
          {
            basic: false,
            name: "Dazzling Breath",
            keywords: "recharge",
            target: (
              <span>
                2d4+2 enemies within the dragon's zone and an adjacent zone
              </span>
            ),
            defense: "Spirit",
            damage: "15 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#vulnerable">
                  vulnerable
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Faerie Charm",
            defense: "Spirit",
            target: "1 creature within 2 zones",
            critical:
              "Same as a success, but the effect lasts for the scene (overcome ends)",
            success: (
              <span>
                Target can't use hostile abilities against the glamour dragon
                (next turn ends), but this effect ends early if the glamour
                dragon uses a hostile ability against the target.
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
                (overcome ends), and while hindered, the target loses any
                resistance to psychic damage.
              </span>
            ),
            partial: "hindered (next turn ends)",
          },
          {
            name: "Mirror Images",
            round: "3",
            keywords: "magical",
            duration: "Scene ends",
            effect: (
              <span>
                The dragon can{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleport
                </Link>{" "}
                up to 1 zone away, and then surrounds themselves in a number of
                illusory duplicates equal to the number of heroes. When a
                creature makes an attack roll only against the dragon, they must
                make an overcome roll. On a success, the dragon is affected as
                normal, but on a failure, the dragon is unaffected and a
                duplicate disappears.
              </span>
            ),
          },
          {
            name: "Faerie Temptations",
            round: "5",
            keywords: "magical, range",
            target: "All enemies",
            defense: "Spirit",
            critical:
              "Same as a success, but the target is captivated for the scene (overcome ends)",
            success: (
              <span>
                An illusion of a beautiful faerie appears before the target. The
                target spends their turn captivated by the faerie and conversing
                with them (next turn ends). If the target takes damage, then
                they can make an overcome roll to end this effect.
              </span>
            ),
            partial: (
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
    name: "Sprite",
    tier: "1",
    type: "Faerie",
    role: "Skirmisher",
    threat: "Minor",
    description:
      "Sprites are tiny faeries with butterfly like wings. They enjoy observing mortals but are flighty creatures that prefer to fly away than fight.",
    tactics: (
      <span>
        Sprites prefer to fight afar from heroes to use{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then tiny bow, but if they need to fight nearby, then they use tiny
        rapier to dart in and out of combat.
      </span>
    ),
    statBlock: (
      <Monster
        name="Sprite"
        hp="4"
        evn="14"
        mgt="11"
        res="12"
        pb="2"
        vision="night"
        type="Tiny Faerie"
        tier="1"
        threat="Minor"
        role="Skirmisher"
        speeds="land 0, fly 1"
        actions={[
          {
            basic: true,
            name: "Tiny Rapier",
            keywords: "melee, weapon",
            target: <span>1 engaged creature</span>,
            defense: "Guard",
            damage: "3 physical damage",
            success: (
              <span>
                Sprite can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>
              </span>
            ),
          },
          {
            basic: true,
            name: "Tiny Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 2 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Pixie",
    tier: "1",
    type: "Faerie",
    role: "Disabler",
    threat: "Standard",
    description:
      "Pixies are small faeries with butterfly like wings that enjoy playing tricks on mortals. Pixies are whimsical creatures but can be deadly enemies if provoked.",
    tactics: (
      <span>
        Pixies prefer to fight afar from heroes to use faerie dust then
        shortbow.
      </span>
    ),
    statBlock: (
      <Monster
        name="Pixie"
        hp="10"
        evn="14"
        mgt="11"
        res="12"
        pb="2"
        vision="night"
        type="Small Faerie"
        tier="1"
        threat="Standard"
        role="Disabler"
        speeds="fly 1"
        actions={[
          {
            basic: true,
            name: "Shortsword",
            keywords: "melee, weapon",
            target: <span>1 engaged creature</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Shortbow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Pixie Dust",
            keywords: "magical",
            duration: "End of current turn",
            effect: (
              <span>
                The pixie sprinkles magical dust on their shortsword or shortbow
                that adds one of the following effecs on a successful strike:
                <ul>
                  <li>
                    <i>Charm:</i> target can't use hostile abilities against the
                    pixie (overcome ends), or until the pixie uses a hostile
                    ability against the target
                  </li>
                  <li>
                    <i>Drowsy:</i> target is{" "}
                    <Link className="internal-link" to="/rules/combat#dazed">
                      dazed
                    </Link>{" "}
                    (overcome ends)
                  </li>
                  <li>
                    <i>Subdual:</i> target takes 3 additional damage
                  </li>
                </ul>
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Satyr",
    tier: "1",
    type: "Faerie",
    role: "Support",
    threat: "Standard",
    description:
      "Satyrs are medium faeries with goat legs but humanoid upper half and goat horns. Satyrs are playful and view life as a party, with their hedonism well known. Satyrs enjoy bringing their party lifestyle to mortals for a night of passion and revelry before disappearing the next morning.",
    tactics: (
      <span>
        Satyrs prefer to fight near or afar from heroes with either their
        shortsword or shortbow, but they always use play the pipes as a
        maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Satyr"
        hp="10"
        evn="13"
        mgt="11"
        res="11"
        pb="2"
        vision="night"
        type="Medium Faerie"
        tier="1"
        threat="Standard"
        role="Support"
        actions={[
          {
            basic: true,
            name: "Shortsword",
            keywords: "melee, weapon",
            target: <span>1 engaged creature</span>,
            defense: "Guard",
            damage: "3 physical damage",
          },
          {
            basic: true,
            name: "Shortbow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "Guard",
            damage: "2 physical damage",
          },
        ]}
        maneuvers={[
          {
            name: "Play the Pipes",
            keywords: "magical, range",
            target: "Satyr's allies within 1 zone",
            effect: (
              <span>Targets gain an extra maneuver on their next turn</span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Redcap",
    tier: "1",
    type: "Faerie",
    role: "Bruiser",
    threat: "Major",
    description:
      "Redcaps are violent and sadistic faeries that enjoy murder and torturing mortals. Redcaps dervie their power from the blood of mortals and often travel to mortal realm to commit acts of violence.",
    tactics: (
      <span>
        Redcaps will rush the heroes to use halberd then soak blood if they deal
        damage.
      </span>
    ),
    statBlock: (
      <Monster
        name="Redcap"
        hp="24"
        evn="13"
        mgt="13"
        res="11"
        pb="2"
        type="Small Faerie"
        tier="1"
        threat="Major"
        role="Bruiser"
        vision="night"
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
            name: "Halberd",
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
        maneuvers={[
          {
            name: "Blood Soak",
            duration: "Turn ends",
            effect:
              "The redcap dips their halberd in freshly spilled blood from a foe, and they gain +1 fortune to attack rolls",
          },
        ]}
        reactions={[
          {
            name: "Lethal Cleave",
            trigger:
              "The redcap reduces a creature to 0 hit points or gets a critical success on halberd",
            effect: "The redcap can use halberd against a different creature",
          },
        ]}
      />
    ),
  },
  {
    name: "Forest Hag",
    tier: "1",
    type: "Faerie",
    role: "Disabler",
    threat: "Boss",
    description:
      "Forest hags are the typical hags most know of as they dwell in forest and prey on villagers, even children. Forest hags are ugly creatures that despise beauty and purity, and seek to lure the innocent and beautiful to their homes and then either corrupt or kill them.",
    tactics: (
      <span>
        Forest hags prefer to fight heroes from afar using mocking cackle or
        confusing curse if available, and invisbility to stay hidden.
      </span>
    ),
    statBlock: (
      <Monster
        name="Forest Hag"
        hp="60"
        evn="12"
        mgt="11"
        res="14"
        pb="2"
        type="Medium Faerie"
        tier="1"
        threat="Boss"
        role="Disabler"
        vision="night"
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
            name: "Illusory Appearance",
            description:
              "The forest hag can magically make themselves look like any humanoid and can mimic the sounds of other people and animals.",
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
            damage: "5 physical damage",
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
            name: "Mocking Cackle",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "4 psychic damage",
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
            name: "Sleepy Curse",
            keywords: "magical, range, recharge",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "7 psychic damage",
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
        maneuvers={[
          {
            name: "Invisibility",
            keywords: "magical",
            duration: "Turn starts",
            effect: (
              <span>
                The hag becomes{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  invisible
                </Link>
                , which ends early if they use a hostile ability
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Cursed Vines",
            round: "1",
            keywords: "magical, range",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "5 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
          {
            name: "Corrupting Betrayal",
            round: "3",
            keywords: "magical, range",
            target: "1 creature within 3 zones",
            damage: "7 psychic damage",
            success: (
              <span>
                The target must use their reaction to{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat-abilities#strike"
                >
                  strike
                </Link>{" "}
                or use a tier 0 battle spell against an ally. If there is no
                ally within range, the target hurts themselves, taking 3
                physical damage.
              </span>
            ),
          },
          {
            name: "Exhale Toxic Fumes",
            round: "5",
            keywords: "magical",
            target: "All enemies within the hag's zone",
            defense: "Guard",
            damage: "5 toxic damage",

            success: (
              <span>
                {" "}
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
    name: "Skin Hag",
    tier: "2",
    type: "Faerie",
    role: "Bruiser",
    threat: "Major",
    description:
      "Skin hags are the vile hags that steal the skin of their victims to disguise themselves. A skin hag's true form is vile looking, and they crave to steal the skin of young and beautiful humanoids. Unlike other hags, skin hags prefer brutish violence over magical might.",
    tactics: (
      <span>
        Skin hags prefer to fight near heroes to use tearing claw then{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver. Once a hero is bleeding or seized, the skin hag will use
        drain blood.
      </span>
    ),
    statBlock: (
      <Monster
        name="Skin Hag"
        hp="60"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Medium Faerie"
        tier="2"
        threat="Major"
        role="Bruiser"
        vision="night"
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
            name: "Stolen Skin",
            description:
              "The skin hag can steal the skin of a dead humanoid to appear like them, gaining their memories, and can mimic their voice.",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Tearing Claw",
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
                2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                physical damage
              </span>
            ),
          },
          {
            basic: false,
            name: "Drain Blood",
            keywords: "melee",
            target: <span>1 engaged creature</span>,
            requirement:
              "Target must be seized, unconscious, or taking ongoing physical damage",
            defense: "Guard",
            damage: "8 physical damage",
            success: (
              <span>
                The hag <ToolTip preset="heals" /> half the damage dealt
              </span>
            ),
          },
        ]}
        reactions={[
          {
            name: "Persistent Bleed",
            keywords: "magical",
            trigger:
              "A creature succeeds on an overcome roll against ongoing physical damage",
            effect:
              "The creature rerolls the overcome roll, and takes the lower result",
          },
        ]}
      />
    ),
  },
  {
    name: "Winter Hag",
    tier: "2",
    type: "Faerie",
    role: "Artillery",
    threat: "Major",
    description:
      "Winter hags are the cruel hags that inhabit in the bitter cold places of the world, and prey on the mortals living there. Winter hags enjoy in tricking mortals to fight amongst each other so entire villages end in bloodshed.",
    tactics: (
      <span>
        Winter hags prefer to fight far from heroes to use slowing frost or
        freezing blast and numbing frostfield as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Winter Hag"
        hp="44"
        evn="14"
        mgt="13"
        res="16"
        pb="4"
        type="Medium Faerie"
        tier="2"
        threat="Major"
        role="Artillery"
        vision="night"
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
          {
            name: "Freezing Aura",
            description: (
              <span>
                The winter hag's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (2 cold damage) to enemies
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Ice Staff",
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
            name: "Slowing Frost",
            keywords: "magical, range",
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
            basic: false,
            name: "Freezing Blast",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Guard",
            damage: "8 cold damage",
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
            name: "Numbing Frostfield",
            keywords: "magical, range",
            target: "1 zone within 2 zones",
            duration: "until hag's next turn",
            effect: (
              <span>
                The targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (2 cold damage)
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default FaerieMonsters;
