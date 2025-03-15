import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../../components/ToolTip";
import Modifier from "../../../components/Modifier";

const UndeadMonsters = [
  {
    name: "Skeleton Minion",
    tier: "1",
    type: "Undead",
    role: "",
    threat: "Minion",
    description: "Skeleton minions are the most basic form of undead.",
    tactics: (
      <span>
        Skeleton minions mindlessly get close to heroes to use rusty sword or
        stay afar to shoot their old bow. Skeletons close to heroes can also{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as a maneuver, while skeletons at range use{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Skeleton Minion"
        hp="2"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        type="Medium Undead"
        tier="1"
        threat=""
        vision="night"
        role="Minion"
        resistances="necrotic 1"
        weaknesses="holy 2"
        actions={[
          {
            basic: true,
            name: "Rusty Sword",
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
          {
            basic: true,
            name: "Old Bow",
            keywords: "range, weapon",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "1 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Zombie",
    tier: "1",
    type: "Undead",
    role: "Bruiser",
    threat: "Minor",
    description:
      "Freshly dead corpses animated by dark magic become zombies, and they have an endless hunger for the living.",
    tactics: (
      <span>
        Zombies mindlessly get close to heroes to use rend, and{" "}
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
        name="Zombie"
        hp="6"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        vision="night"
        type="Medium Undead"
        tier="1"
        threat="Minor"
        role="Bruiser"
        resistances="necrotic 1"
        weaknesses="holy 2"
        traits={[
          {
            name: "Unnatural Endurance",
            description: (
              <span>
                When the zombie is reduced to 0 hit points, it can succeed on an{" "}
                <Link className="internal-link" to="/rules/combat#overcome">
                  overcome roll
                </Link>{" "}
                to instead be reduced to 1 hit point. Holy damage or damage from
                a critical successful{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                ignore this feature.
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
    name: "Zombie Minion",
    tier: "2",
    type: "Undead",
    role: "",
    threat: "Minion",
    description:
      "Freshly dead corpses animated by dark magic become zombies, and they have an endless hunger for the living.",
    tactics: (
      <span>
        Zombie minions mindlessly get close to heroes to use rend, and{" "}
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
        name="Zombie Minion"
        hp="4"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        vision="night"
        type="Medium Undead"
        tier="2"
        threat="Minion"
        role=""
        resistances="necrotic 2"
        weaknesses="holy 4"
        traits={[
          {
            name: "Unnatural Endurance",
            description: (
              <span>
                When the zombie minion is reduced to 0 hit points, it can
                succeed on an{" "}
                <Link className="internal-link" to="/rules/combat#overcome">
                  overcome roll
                </Link>{" "}
                to instead be reduced to 1 hit point. Holy damage or damage from
                a critical successful{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                ignore this feature.
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
    name: "Wraith Minion",
    tier: "3",
    type: "Undead",
    role: "",
    threat: "Minion",
    description:
      "Wraiths are angry souls twisted by necromancy that burn with hatred for the living. Wraiths usually serve a greater undead master",
    tactics: (
      <span>
        Wraith minions harass the nearest heroes to use weakening touch, and be
        close enough for vengeful death. In addition to weakening touch, wraith
        minions use{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          hinder
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          taunt
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Wraith Minion"
        hp="6"
        evn="19"
        mgt="17"
        res="15"
        pb="6"
        vision="night"
        type="Medium Undead"
        tier="3"
        threat="Minion"
        role=""
        resistances="necrotic 3"
        weaknesses="holy 6"
        speeds="fly 1"
        traits={[
          {
            name: "Vengeful Death",
            description: (
              <span>
                When the wraith minion is reduced to 0 hit points, necrotic
                energy lashes out at its slayer. Make an attack roll agains the
                creature's Might that killed the wraith minion, dealing 3
                necrotic damage.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Weakening Touch",
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
            damage: "3 necrotic damage",
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
    name: "Shadow",
    tier: "1",
    type: "Undead",
    role: "Skirmisher",
    threat: "Standard",
    description:
      "The first shadows were creatures of the shadow realm, but have since killed many mortals and populated the mortal realm.",
    tactics: (
      <span>
        Shadows prefer to attack heroes in darkness. On its turn, the shadow
        will use shadow touch to{" "}
        <Link className="internal-link" to="/combat-abilities#hide">
          hide
        </Link>{" "}
        in darkness, or attack then{" "}
        <Link className="internal-link" to="/combat-abilities#disengage">
          disengage
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#move">
          move
        </Link>{" "}
        to an area of darkness.
      </span>
    ),
    statBlock: (
      <Monster
        name="Shadow"
        hp="10"
        evn="15"
        mgt="13"
        res="11"
        pb="2"
        type="Medium Undead"
        tier="1"
        threat="Standard"
        role="Skirmisher"
        resistances="necrotic 1, physical 1"
        weaknesses="holy 2"
        vision="night"
        traits={[
          {
            name: "Light Vulnerability",
            description: (
              <span>
                When in normal light, the shadow is{" "}
                <Link className="internal-link" to="/conditions#exposed">
                  exposed
                </Link>
                .
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Shadow Touch",
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
            success: (
              <span>
                Shadow can{" "}
                <Link className="internal-link" to="/combat-abilities#hide">
                  hide
                </Link>
              </span>
            ),
            defense: "EVN",
            damage: "4 necrotic damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Doomskull",
    tier: "1",
    type: "Undead",
    role: "Artillery",
    threat: "Major",
    description:
      "Doomskulls are the animated skulls of dead mages that failed the ritual to become a lich. Filled with rage at their failure, doomskulls lash out at the living while hoarding magical secrets.",
    tactics: (
      <span>
        Doomeskulls prefer to stay far away from heroes. On its turn, the
        doomskull will use necrotic blast on a group of heroes whenever
        possible. Otherwise, the doomskull will{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        then use doom ray. If the doomskull is near death, it will fly to the
        nearest heroes for death burst.
      </span>
    ),
    statBlock: (
      <Monster
        name="Doomskull"
        hp="16"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Small Undead"
        tier="1"
        threat="Major"
        role="Artillery"
        resistances="necrotic 1"
        weaknesses="holy 2"
        vision="night"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
          {
            name: "Death Burst",
            description: (
              <span>
                When the doomskull is reduced to 0 hit points, it explodes in
                necrotic energy. Make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against each creature's Might within the doomskull's zone,
                dealing 3 necrotic damage.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Doom Ray",
            keywords: "magical, range",
            target: "1 creature within 3 zones</span",
            defense: "EVN",
            damage: "3 necrotic damage",
          },
          {
            basic: true,
            name: "Head Bash",
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
            name: "Necrotic Blast",
            keywords: "magical, range, recharge",
            target: "All creatures in 1 zone within 3 zones",
            defense: "MGT",
            damage: "4 necrotic damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Banshee",
    tier: "1",
    type: "Undead",
    role: "Disabler",
    threat: "Major",
    description:
      "When an individual dies of heartbreak or sorrow, they sometimes return as a banshee, and seek to bring misery to others.",
    tactics:
      "Banshees prefer to be near enough to heroes to use sorrow's touch or banshee's wail. On its turns, the banshee will use banshee's wail whenever possible. Otherwise, the banshee uses sorrow's touch and gaze of torment on a hero already hindered.",
    statBlock: (
      <Monster
        name="Banshee"
        hp="20"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Medium Undead"
        tier="1"
        threat="Major"
        role="Disabler"
        resistances="necrotic 1, physical 1"
        weaknesses="holy 2"
        vision="night"
        speeds={
          <span>
            flying 1,{" "}
            <Link className="internal-link" to="/rules/combat#special-movement">
              phasing
            </Link>
          </span>
        }
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
          {
            name: "Light Vulnerability",
            description: (
              <span>
                When in normal light, the banshee is{" "}
                <Link className="internal-link" to="/conditions#exposed">
                  exposed
                </Link>
                .
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Sorrow's Touch",
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
            success: (
              <span>
                <Link className="internal-link" to="/rules/combat#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
            defense: "EVN",
            damage: "3 necrotic damage",
          },
          {
            basic: false,
            name: "Banshee's Wail",
            keywords: "magical, range, recharge",
            target: "All living enemies within the banshee's zone",
            defense: "MGT",
            damage: "3 necrotic damage",
            success: (
              <span>
                <Link className="internal-link" to="/rules/combat#hindered">
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
            name: "Gaze of Torment",
            keywords: "magical, range",
            target: "1 creature within 2 zones",
            effect:
              "Target becomes hindered (turn ends), or slowed (turn ends) if they are already hindered.",
          },
        ]}
      />
    ),
  },
  {
    name: "Tomb Knight",
    tier: "1",
    type: "Undead",
    role: "Tank",
    threat: "Standard",
    description:
      "Skeletal warriors in armor, tomb knights serve as guardians of tombs or defenders of necromancers.",
    tactics: (
      <span>
        Tomb knights stay near allies to protect them with defend from the
        grave. They use glaive against nearby heroes and{" "}
        <Link className="internal-link" to="/combat-abilities#defend">
          defend
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Tomb Knight"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        vision="night"
        type="Medium Undead"
        tier="1"
        threat="Standard"
        role="Tank"
        resistances="necrotic 1, physical 1"
        weaknesses="holy 2"
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
            defense: "EVN",
            damage: "3 physical damage",
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "Defend from the Grave",
            trigger:
              "Tomb knight sees an ally within the same zone take damage",
            effect: (
              <span>
                Tomb knight can{" "}
                <Link className="internal-link" to="/rules/combat#move">
                  Move
                </Link>{" "}
                to the ally, then reduce the triggering damage by 1
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Poltergeist",
    tier: "1",
    type: "Undead",
    role: "Disabler",
    threat: "Boss",
    description:
      "A powerful, ghostly tormentor that enjoys making the lives of the nearby living miserable and often quite painful. Poltergeists are difficult to destroy and quite deadly within their lair, usually the site of their death.",
    tactics: (
      <span>
        Poltergeists prefer to be near enough to heroes to use draining touch,
        possession, or their later boss actions. Telekinetic aura keeps nearby
        heroes from easily escaping. On its turns, the poltergeist uses
        possession whenever possible. Otherwise it uses draining touch and{" "}
        <Link className="internal-link" to="/combat-abilities#hinder">
          hinder
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Poltergeist"
        hp="10"
        evn="13"
        mgt="11"
        res="15"
        pb="2"
        type="Medium Undead"
        tier="1"
        threat="Boss"
        role="Disabler"
        resistances="necrotic 1, physical 1"
        weaknesses="holy 2"
        vision="night"
        speeds={
          <span>
            flying 1,{" "}
            <Link className="internal-link" to="/rules/combat#special-movement">
              phasing
            </Link>
          </span>
        }
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
                When in normal light, the poltergeist is{" "}
                <Link className="internal-link" to="/conditions#exposed">
                  exposed
                </Link>
                .
              </span>
            ),
          },
          {
            name: "Telekinetic Aura",
            description: (
              <span>
                The poltergeist's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>
                .
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Draining Touch",
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
            damage: "3 necrotic damage",
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
            name: "Possession",
            keywords: "magical, melee, recharge",
            target: "1 creature within 3 zones",
            defense: "RES",
            partial:
              "Poltergeist enters the target’s body and the target is possessed (turn ends). While possessed, the poltergeist decides the target’s turn and the poltergeist is untargetable from any effect and doesn’t take any turns except for boss actions. If the target takes any damage, then they can make an overcome roll, and on a success, the poltergeist is expelled.",
            success:
              "Same as a partial success, but the possession lasts for the scene (overcome ends).",
            critical:
              "Same as a success, but +1 misfortune to overcome rolls to end this effect.",
          },
        ]}
        bossActions={[
          {
            basic: false,
            name: "Ghostly Terrain",
            keywords: "magical, range",
            target: "1 zone within 2 zones",
            duration: "scene ends",
            round: "1",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (1 necrotic damage) from ghostly spectral hands
              </span>
            ),
          },
          {
            basic: false,
            name: "Telekinetic Storm",
            keywords: "magical",
            target: "All enemies within the poltergeist's turn",
            defense: "EVN",
            damage: "3 physical damage",
            round: "3",
            success: (
              <span>
                <Link className="internal-link" to="/conditons#prone">
                  prone
                </Link>
              </span>
            ),
          },
          {
            basic: false,
            name: "Terrifying Scream",
            keywords: "magical",
            target: "All enemies within the poltergeist's turn",
            defense: "RES",
            damage: "3 mental damage",
            round: "5",
            success: (
              <span>
                <Link className="internal-link" to="/conditons#prone">
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
    name: "Ghost",
    tier: "1",
    type: "Undead",
    role: "Disabler",
    threat: "Standard",
    description:
      "Ghosts are remnants of a person's soul that refuses to pass onto the next life. Ghosts often attack any living creature that disturbs their grave or site of their death.",
    tactics: (
      <span>
        Ghosts prefer to get close to heroes to use chilling touch, and use
        their fly speed to easily maneuver out of danger.
      </span>
    ),
    statBlock: (
      <Monster
        name="Ghost"
        hp="10"
        evn="15"
        mgt="13"
        res="11"
        pb="2"
        type="Medium Undead"
        tier="1"
        threat="Standard"
        role="Disabler"
        resistances="necrotic 1, physical 1"
        weaknesses="holy 2"
        vision="night"
        speeds={
          <span>
            flying 1,{" "}
            <Link className="internal-link" to="/rules/combat#special-movement">
              phasing
            </Link>
          </span>
        }
        traits={[
          {
            name: "Light Vulnerability",
            description: (
              <span>
                When in normal light, the ghost is{" "}
                <Link className="internal-link" to="/conditions#exposed">
                  exposed
                </Link>
                .
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Chilling Touch",
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
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends)
              </span>
            ),
            defense: "EVN",
            damage: "3 necrotic damage",
          },
          {
            basic: false,
            name: "Haunting Presence",
            keywords: "magical, recharge",
            target: <span>All enemies within the ghost's zone</span>,
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            defense: "RES",
            partial: "hindered (turn ends)",
            critical:
              "Same as a success, and target must use a maneuver on their next turn to move away from the ghost",
          },
        ]}
      />
    ),
  },
  {
    name: "Ghoul",
    tier: "1",
    type: "Undead",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Unlike zombies, ghouls are not mindless undead, but like zombies, they have an insatiable hunger for living flesh.",
    tactics: (
      <span>
        Ghouls rush towards their prey, hoping to weaken them with their death
        stench. On its turn, a ghoul uses rend along with{" "}
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
        name="Ghoul"
        hp="12"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        vision="night"
        type="Medium Undead"
        tier="1"
        threat="Standard"
        role="Bruiser"
        resistances="necrotic 1"
        weaknesses="holy 2"
        traits={[
          {
            name: "Death Stench",
            description: (
              <span>
                Any creature that starts their turn{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                to the ghoul become{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn starts).
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
      />
    ),
  },
  {
    name: "Skeletal Giant",
    tier: "1",
    type: "Undead",
    role: "Bruiser",
    threat: "Major",
    description:
      "Unlike normal skeletons, skeletal giants are animated skeletons of larger creatures such as minotaurs, hill giants, ogres, or other imposing humanoids.",
    tactics: (
      <span>
        Skeletal giants mindlessly rush towards the heroes, hoping to knock
        someone down with skeletal slam. If engagaged to multiple heroes, the
        skeletal giant will use broad rend instead of skeletal slam. For
        maneuvers, the undead uses{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>
        ,{" "}
        <Link className="internal-link" to="/combat-abilities#shove">
          shove
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
        name="Skeletal Giant"
        hp="24"
        evn="13"
        mgt="15"
        res="11"
        pb="2"
        vision="night"
        type="Large Undead"
        tier="1"
        threat="Major"
        role="Bruiser"
        resistances="necrotic 1"
        weaknesses="holy 2"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Skeletal Slam",
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
            name: "Broad Rend",
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
      />
    ),
  },
  {
    name: "Vampire Spawn",
    tier: "2",
    type: "Undead",
    role: "Tank",
    threat: "Minor",
    description:
      "Once living creatures, vampire spawn have been turned by an elder vampire and now serve their new master. Those that live long enough might plot to despose of the elder vampire and become the new vampiric ruler.",
    tactics: (
      <span>
        Vampire spawns are not mindless undead, and rush the weakest hero. On
        their turn, a vampire spawn uses rend or bite if the target is already
        seized, and{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as their maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Vampire Spawn"
        hp="12"
        evn="17"
        mgt="15"
        res="13"
        pb="4"
        vision="night"
        type="Medium Undead"
        tier="2"
        threat="Minor"
        role="Tank"
        resistances="necrotic 2"
        weaknesses="holy 4"
        traits={[
          {
            name: "Sunlight Weakness",
            description: (
              <span>
                When the vampire spawn starts its turn in daylight, it takes 4
                fire damage.
              </span>
            ),
          },
          {
            name: "Vampiric Regeneration",
            description: (
              <span>
                Vampire spawn has <ToolTip preset="regen" /> 2 while not in
                sunlight.
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
            name: "Bite",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                and{" "}
                <Link className="internal-link" to="/rules/conditions#seized">
                  seized
                </Link>{" "}
                creature
              </span>
            ),
            defense: "MGT",
            damage: "4 physical damage",
            success: (
              <span>
                Vampire spawn gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                equal to half the damage dealt (scene ends)
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Vampire Cabalist",
    tier: "2",
    type: "Undead",
    role: "Disabler",
    threat: "Standard",
    description:
      "Once living creatures, vampire cabalists are vampires that have learned dark magic much to manipulate their prey.",
    tactics: (
      <span>
        Vampire cabalist prefer to stand from afar using{" "}
        <Link className="internal-link" to="/combat-abilities#aim">
          aim
        </Link>{" "}
        to taint blood or uses vampiric domination if available. If heroes get
        too close, then the vampire cabalist uses bite before trying to escape.
      </span>
    ),
    statBlock: (
      <Monster
        name="Vampire Cabalist"
        hp="20"
        evn="15"
        mgt="13"
        res="17"
        pb="4"
        vision="night"
        type="Medium Undead"
        tier="2"
        threat="Standard"
        role="Disabler"
        resistances="necrotic 2"
        weaknesses="holy 4"
        traits={[
          {
            name: "Misty Escape",
            description: (
              <span>
                When the vampire is reduced to 0 hit points, it transforms into
                mist to fly back to its coffin. Within the coffin, the vampire
                remains unconscious for 1 hour and then begins regenerating
                after the hour for normal. If the vampire is impaled with a
                wooden stake while unconscious, then the vampire doesn't
                regenerate and stays unconscious.
              </span>
            ),
          },
          {
            name: "Sunlight Weakness",
            description: (
              <span>
                When the vampire cabalist starts its turn in daylight, it takes
                4 fire damage.
              </span>
            ),
          },
          {
            name: "Vampiric Regeneration",
            description: (
              <span>
                Vampire cabalist has <ToolTip preset="regen" /> 2 while not in
                sunlight.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Taint Blood",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "MGT",
            damage: "4 necrotic damage",
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
            damage: "6 physical damage",
            success: (
              <span>
                Vampire cabalist gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                equal to half the damage dealt (scene ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Vampiric Domination",
            keywords: "magical, range, recharge",
            target: <span>1 creature within 3 zones</span>,
            defense: "RES",
            critical:
              "Same as a success, and the target takes +1 misfortune to overcome rolls to end this effect",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#controlled">
                  controlled
                </Link>{" "}
                (overcome ends)
              </span>
            ),
            partial: "controlled (turn ends)",
          },
        ]}
      />
    ),
  },
  {
    name: "Elder Vampire",
    tier: "2",
    type: "Undead",
    role: "Skirmisher",
    threat: "Major",
    description:
      "A vampire for a long time, an elder vampire controls a cabal of vampires with many vampire spawn at their command. Elder vampires prefer to control mortal politics from the shadows to shape their realm to their liking.",
    tactics: (
      <span>
        Elder vampires use their mobility from claw to quickly attack heroes. If
        the elder vampire can stay close to heroes, it instead uses bite. Every
        turn, the elder vampire uses cloud of bats to escape from danger.
      </span>
    ),
    statBlock: (
      <Monster
        name="Elder Vampire"
        hp="40"
        evn="17"
        mgt="15"
        res="13"
        pb="4"
        vision="night"
        type="Medium Undead"
        tier="2"
        threat="Major"
        role="Skirmisher"
        resistances="necrotic 2"
        weaknesses="holy 4"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
          {
            name: "Misty Escape",
            description: (
              <span>
                When the vampire is reduced to 0 hit points, it transforms into
                mist to fly back to its coffin. Within the coffin, the vampire
                remains unconscious for 1 hour and then begins regenerating
                after the hour for normal. If the vampire is impaled with a
                wooden stake while unconscious, then the vampire doesn't
                regenerate and stays unconscious.
              </span>
            ),
          },
          {
            name: "Sunlight Weakness",
            description: (
              <span>
                When the elder vampire starts its turn in daylight, it takes 4
                fire damage.
              </span>
            ),
          },
          {
            name: "Vampiric Regeneration",
            description: (
              <span>
                Elder vampire has <ToolTip preset="regen" /> 2 while not in
                sunlight.
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
            effect: (
              <span>
                Elder Vampire can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                before or after the attack roll
              </span>
            ),
          },
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
            damage: "8 physical damage",
            success: (
              <span>
                Elder vampire gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                equal to half the damage dealt (scene ends)
              </span>
            ),
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "Cloud of Bats",
            keywords: "magical",
            trigger: "Elder vampire takes damage",
            effect: (
              <span>
                Elder vampire turns into a swarm of bats with a fly speed, and
                can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                up to 1 zone without triggering reactions before turning back
                into its vampiric form.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Royal Mummy",
    tier: "2",
    type: "Undead",
    role: "Support",
    threat: "Major",
    description:
      "Once great rulers, royal mummies were preserved and entombed upon their death, until something awakwened them. Now undead, royal mummies try to reclaim the land they once ruled during life.",
    tactics: (
      <span>
        Royal mummy prefers to fight with nearby allies and get close to heroes
        to use scepter or defend your ruler if available. Each turn, the royal
        mummy uses mummy's curse against a hero.
      </span>
    ),
    statBlock: (
      <Monster
        name="Royal Mummy"
        hp="40"
        evn="15"
        mgt="13"
        res="17"
        pb="4"
        vision="night"
        type="Medium Undead"
        tier="2"
        threat="Major"
        role="Support"
        resistances="necrotic 2"
        weaknesses="holy 4, fire 4"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monster get two turns per round.</span>,
          },
          {
            name: "Regal Presence",
            description: (
              <span>
                Allies within the royal mummy's zone gain{" "}
                <Modifier type="f" count="1" /> to rolls.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Scepter",
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
            name: "Defend your Ruler!",
            keywords: "magical, recharge",
            target: <span>All enemies within the royal mummy's zone</span>,
            defense: "RES",
            damage: "6 psychic damage",
            effect: (
              <span>
                Royal mummy and allies within the royal mummy's zone gain 4{" "}
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
        maneuvers={[
          {
            basic: false,
            name: "Mummy's Curse",
            keywords: "magical, range",
            target: "1 creature within 2 zones",
            effect: (
              <span>
                Target becomes{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (turn ends) and while hindered, they take{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                2 necrotic damage.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Mummy Guardian",
    tier: "2",
    type: "Undead",
    role: "Tank",
    threat: "Minor",
    description:
      "Entombed with their royal rulers that they served in life, mummy guardians awaken with a royal mummy to defend them once again. Mummy guardians are powerful warriors that serve the royal mummy with the remainder of their undead existence.",
    tactics: (
      <span>
        Mummy guardians stay within 1 zone of allies, especially a royal mummy
        so they can use their guardian's sacrifice reaction. Each turn, a mummy
        guardian will use khopesh to taunt heroes, and use{" "}
        <Link className="internal-link" to="/combat-abilities#shove">
          shove
        </Link>{" "}
        heroes away or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>{" "}
        as maneuvers.
      </span>
    ),
    statBlock: (
      <Monster
        name="Mummy Guardian"
        hp="12"
        evn="15"
        mgt="17"
        res="13"
        pb="4"
        vision="night"
        type="Medium Undead"
        tier="2"
        threat="Minor"
        role="Tank"
        resistances="necrotic 2, physical 2"
        weaknesses="holy 4, fire 4"
        actions={[
          {
            basic: true,
            name: "Khopesh",
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
                <Link className="internal-link" to="/conditions#taunted">
                  taunted
                </Link>{" "}
                by mummy guardian (turn ends)
              </span>
            ),
          },
        ]}
        reactions={[
          {
            basic: false,
            name: "Guardian's Sacrifice",
            keywords: "magical, range",
            trigger: "Mummy guardian sees ally take damage within 1 zone",
            effect: (
              <span>
                Triggering damage reduced by half, and mummy guardian takes half
                of the original damage that can't be reduced in anyway.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Gravewyrm",
    tier: "3",
    type: "Undead",
    role: "Disabler",
    threat: "Boss",
    description:
      "Some dragons afraid of their life ending turn to necromancy or pacts with dark powers to become powerful undead to live forever. However, in order to maintain their sanity, gravewyrms need to periodically feed on mortal souls.",
    tactics: (
      <span>
        A gravewyrm opens up with draining breath before moving near heroes to
        keep them in its doom aura. Otherwise, the gravewyrm uses draining rend
        and dominating gaze as a maneuver to turn heroes against each other.
      </span>
    ),
    statBlock: (
      <Monster
        name="Gravewyrm"
        hp="30"
        evn="15"
        mgt="19"
        res="17"
        pb="6"
        vision="night"
        type="Colossal Undead"
        tier="3"
        threat="Boss"
        role="Disabler"
        resistances="necrotic 3, physical 3"
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
            name: "Doom Aura",
            description: (
              <span>
                Enemies within the zone of the gravewyrm can't{" "}
                <ToolTip preset="heal" /> or gain{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>
                .
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Draining Rend",
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
            name: "Draining Breath",
            keywords: "magical, range, recharge",
            target: <span>2d4+2 enemies within 1 zone</span>,
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
            basic: false,
            name: "Dominating Gaze",
            keywords: "magical, range",
            target: "1 creature within 2 zones",
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
        reactions={[
          {
            basic: false,
            name: "Consume Soul",
            keywords: "magical, range",
            trigger: "A living creature within 1 zone of the gravewyrm dies",
            effect: (
              <span>
                Gravewyrm consumes the creature's soul, regaining 6 hit points.
                The creature can't be resurrected as long as the gravewyrm
                exists except by{" "}
                <Link className="internal-link" to="/ritual-spells#resurrect">
                  resurrect
                </Link>{" "}
                or{" "}
                <Link className="internal-link" to="/ritual-spells#wish">
                  wish
                </Link>{" "}
                ritual spells cast at spell tier 4.
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            basic: false,
            name: "Roar of Doom",
            keywords: "magical, range",
            target: "All enemies",
            defense: "RES",
            round: "1",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (overcome ends), and they lose resistance to necrotic damage
                while hindered
              </span>
            ),
            partial: "Same as a success, but only hindered (turn ends)",
            critical: (
              <span>
                Same as a success, and they must use a maneuver to{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                away from the gravewyrm on their next turn
              </span>
            ),
          },
          {
            basic: false,
            round: "3",
            name: "Unleash Souls",
            keywords: "magical",
            effect:
              "Graveyrm releases souls that become 6 wraith minions within 2 zones",
          },
          {
            basic: false,
            name: "Your Souls Belong to Me",
            keywords: "magical",
            target: "All enemies",
            defense: "RES",
            damage: "9 necrotic damage",
            round: "5",
            success: (
              <span>
                Any <ToolTip preset="shaken" /> target gets pulled to the
                gravewyrm's zone
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Gravewyrm Remnant",
    tier: "3",
    type: "Undead",
    role: "Bruiser",
    threat: "Standard",
    description:
      "Gravewyrms are dragons that turned to undeath to live forever by consuming souls. However, a gravewyrm can become a remnant if it fails to continue to consume souls. As a remnant, these undead dragons are nearly mindless undead that hunger after anything living.",
    tactics: (
      <span>
        A gravewyrm remnant opens up with draining breath before moving near
        heroes to keep them in range of boneshatter. Otherwise, the gravewyrm
        remnant uses decaying rend and{" "}
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
        name="Gravewyrm Remnant"
        hp="36"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        vision="night"
        type="Colossal Undead"
        tier="3"
        threat="Standard"
        role="Bruiser"
        resistances="necrotic 3"
        weaknesses="holy 6"
        speeds="fly 2"
        actions={[
          {
            basic: true,
            name: "Decaying Rend",
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
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                3 necrotic damage
              </span>
            ),
          },
          {
            basic: false,
            name: "Draining Breath",
            keywords: "magical, range, recharge",
            target: <span>2d4+2 enemies within 1 zone</span>,
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
        reactions={[
          {
            basic: false,
            name: "Boneshatter",
            keywords: "magical, range",
            trigger: "Gravewyrm remnant takes damage",
            effect:
              "The dead dragon's bones snap and spray bone shards. Each other creature within the gravewyrm remnant's zone takes 3 physical damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Umbral Titan",
    tier: "3",
    type: "Undead",
    role: "Bruiser",
    threat: "Major",
    description:
      "Hateful beings composed of pure shadow, umbral titans spread death and despair in the shadow realm. When they travel to the mortal realm, calamity falls.",
    tactics: (
      <span>
        Umbral titans prefer to fight up close to heroes to get them within
        their annihilation aura. Each turn, the umbral titan uses umbral claw or
        finger of death if a hero is near <ToolTip preset="shaken" />. If heroes
        don't have night vision, the umbral titan uses{" "}
        <Link className="internal-link" to="/combat-abilities#hide">
          hide
        </Link>{" "}
        as a maneuver, otherwise it uses{" "}
        <Link className="internal-link" to="/combat-abilities#grab">
          grab
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Umbral Titan"
        hp="72"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        vision="night"
        type="Huge Undead"
        tier="3"
        threat="Major"
        role="Bruiser"
        resistances="necrotic 6"
        weaknesses="holy 6"
        traits={[
          {
            name: "Annihilation Aura",
            description: (
              <span>
                The umbral titan's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 necrotic damage) to enemies and filled with darkness.
                Creatures within the umbral titan's zone take{" "}
                <Modifier type="mf" count="1" /> to overcome rolls from{" "}
                <Link className="internal-link" to="/rules/combat#dying">
                  dying
                </Link>
                .
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Umbral Claw",
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
            damage: "12 necrotic damage",
            success: (
              <span>
                Target can't <ToolTip preset="heal" /> or gain{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Finger of Death",
            keywords: "magical, range, recharge",
            target: <span>1 creature within 3 zones</span>,
            defense: "MGT",
            damage: "12 necrotic damage",
            effect: (
              <span>
                If the target is <ToolTip preset="shaken" /> after taking this
                damage, then they are instead reduced to 0 hit points.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Death Knight",
    tier: "3",
    type: "Undead",
    role: "Tank",
    threat: "Standard",
    description:
      "The most powerful of mortal warriors, death knights bound their souls to their weapon to fight eternally. When a mortal creature picks up the death knight's weapon, they are transformed into a death knight as their mind is overtaken by the long dead warrior eager for battle.",
    tactics: (
      <span>
        Death knights prefer to fight up close to heroes to get them within
        their warrior's aura. Each turn, the umbral titan uses death blade or
        necrotic wave if available. For maneuvers, the death knight uses heroes
        don't have night vision, the umbral titan uses{" "}
        <Link className="internal-link" to="/combat-abilities#defend">
          defend
        </Link>
        ,{" "}
        <Link className="internal-link" to="/combat-abilities#taunt">
          taunt
        </Link>
        , or{" "}
        <Link className="internal-link" to="/combat-abilities#trip">
          trip
        </Link>
        .
      </span>
    ),
    statBlock: (
      <Monster
        name="Death Knight"
        hp="36"
        evn="17"
        mgt="19"
        res="15"
        pb="6"
        vision="night"
        type="Medium Undead"
        tier="3"
        threat="Standard"
        role="Tank"
        resistances="necrotic 3, physical 3"
        weaknesses="holy 6"
        traits={[
          {
            name: "Warrior's Aura",
            description: (
              <span>
                Enemies within the death knight's zone are{" "}
                <Link className="internal-link" to="/conditions#taunted">
                  taunted
                </Link>{" "}
                by the death knight.
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Death Blade",
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
                <Link className="internal-link" to="/conditions/slowed">
                  slowed
                </Link>{" "}
                (turn ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Necrotic Wave",
            keywords: "magical, range, recharge",
            target: <span>All enemies within 1 zone</span>,
            defense: "MGT",
            damage: "9 necrotic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions/slowed">
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
    name: "Lich",
    tier: "3",
    type: "Undead",
    role: "Artillery",
    threat: "Boss",
    description:
      "Powerful mortal mages that fear death turn to necromancy to live forever by performing a vile ritual to become a lich. They bind their souls to a soulcage, which preserves their undead existence. Ever hungry for power, liches pursue forbidden magic and treasure while usually ruling over lesser beings.",
    tactics: (
      <span>
        A lich uses withering burst against groups of heroes or dark bolt
        against one lone threat. If a hero is weak enough, the lich will use die
        mortal. If heroes get too close, the lich will use weakening touch
        before using shadow walk to escape.
      </span>
    ),
    statBlock: (
      <Monster
        name="Lich"
        hp="24"
        evn="17"
        mgt="15"
        res="19"
        pb="6"
        vision="night"
        type="Medium Undead"
        tier="3"
        threat="Boss"
        role="Artillery"
        resistances="necrotic 3"
        weaknesses="holy 6"
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
            name: "Soulcage",
            description:
              "When a lich is reduced to 0 hit points, its essence returns to an inanimate object called a soulcage. As long as the lich's soulcage isn't destroyed, the lich returns to life after 1d10 days later.",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Weakening Touch",
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
            damage: "9 necrotic damage",
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
            name: "Dark Bolt",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "EVN",
            damage: "9 necrotic damage",
          },
          {
            basic: false,
            name: "Withering Burst",
            keywords: "magical, range",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "MGT",
            damage: "6 necrotic damage",
            effect: (
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 necrotic damage) for the scene
              </span>
            ),
          },
          {
            basic: false,
            name: "Die Mortal",
            keywords: "magical, range, recharge",
            target: <span>1 creature within 3 zones</span>,
            defense: "MGT",
            damage: "15 necrotic damage",
            success: (
              <span>
                If the target is <ToolTip preset="shaken" /> after taking this
                damage, then they are instead reduced to 0 hit points.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Shadow Walk",
            keywords: "magical, range",
            target: "up to 1 zone",
            effect: (
              <span>
                Lich{" "}
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
            basic: false,
            name: "Rise My Minions",
            keywords: "magical, range",
            round: "1",
            success: <span>Lich summons 6 wraith minions within 3 zones.</span>,
          },
          {
            basic: false,
            round: "3",
            name: "Drain Life",
            keywords: "magical, range",
            target: "All enemies",
            defense: "MGT",
            damage: "9 necrotic damage",
            effect: "Lich regains hit points equal to half the damage dealt",
          },
          {
            basic: false,
            name: "Death Aura",
            keywords: "aura, magical",
            effect: (
              <span>
                The lich's zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (6 necrotic damage) only for enemies.
              </span>
            ),
            round: "5",
          },
        ]}
      />
    ),
  },
];

export default UndeadMonsters;
