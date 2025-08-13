import Monster from "../../../components/Monster";
import { Link } from "react-router-dom";
import Tooltip from "../../../components/ToolTip";
// import ToolTip from "../../../components/ToolTip";
// import Modifier from "../../../components/Modifier";

const AberrationMonsters = [
  {
    name: "Deep One",
    tier: "1",
    type: "Aberration",
    role: "Bruiser",
    threat: "Major",
    description:
      "Deep ones are large crab like humanoid monsters that serve the void realm. Once humanoids, they were transformed by deep lurkers into monsters to become better foot soldiers. Deep ones retain fleeting memories of their past life, but are driven by a desire to serve their aberrant masters.",
    tactics: (
      <span>
        Deep ones prefer to fight near heroes to use pincer into paralyzing
        tentacle, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Deep One"
        hp="24"
        evn="14"
        mgt="15"
        res="12"
        pb="2"
        vision="night"
        type="Large Aberration"
        tier="1"
        threat="Major"
        role="Bruiser"
        speeds="swim 1"
        resistances="psychic"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Aquatic",
            description: "The deep one can breath underwater",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Pincer",
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
          {
            basic: true,
            name: "Paralyzing Tentacles",
            keywords: "melee, weapon",
            target: (
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature that is seized by the deep one
              </span>
            ),
            defense: "Guard",
            damage: "4 physical damage",
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
    name: "Void Cursed",
    tier: "1",
    type: "Aberration",
    role: "Brusier",
    threat: "Standard",
    description:
      "Void cursed were humanoids transformed by a deep lurker into mindless aberrant like zombies that follow simple commands. A void cursed's eyes glow a sinister purple with purple veins pulsating on their body.",
    tactics: (
      <span>
        Void cursed prefer to fight near heroes to use void touch, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Void Cursed"
        hp="12"
        evn="14"
        vision="night"
        mgt="15"
        res="12"
        pb="2"
        speeds="swim 1"
        type="Medium Aberration"
        tier="1"
        threat="Standard"
        role="Brusier"
        resistances="psychic"
        traits={[
          {
            name: "Aquatic",
            description: "The void cursed can breath underwater",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Void Touch",
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
        ]}
      />
    ),
  },
  {
    name: "Deep Lurker",
    tier: "1",
    type: "Aberration",
    role: "Disabler",
    threat: "Boss",
    description:
      "Deep lurkers are ancient aberrant terrors that live underwater and plot how to advance the void realm's madness upon the mortal realm. Deep lurkers rarely fight as they prefer to use deep ones, void cursed, and mortal loyalists to enact their bidding.",
    tactics: (
      <span>
        Deep Lurkers prefer to fight near heroes to use tentacle or eldritch
        domination if available, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#hinder">
          hinder
        </Link>{" "}
        or{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Deep Lurker"
        hp="10"
        evn="14"
        mgt="13"
        res="14"
        pb="2"
        type="Large Aberration"
        tier="1"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="psychic"
        speeds="swim 1"
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
            name: "Tentacle",
            keywords: "melee, weapon",
            target: <span>1 creature within the deep lurker's zone</span>,
            defense: "Guard",
            damage: "3 physical damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (overcome ends) and deep lurker gains 1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit point
                </Link>{" "}
                as it learns some of the target's memories
              </span>
            ),
          },
          {
            basic: false,
            name: "Psychic Probe",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "2 psychic damage",
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
            name: "Eldritch Domination",
            keywords: "magical, range, recharge",
            target: <span>1 creature within 2 zones</span>,
            defense: "Spirit",
            success: "target controlled by the deep lurker (next turn ends)",
            critical: "target controlled by the deep lurker (overcome ends)",
            partial: (
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends)
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Psychic Scramble",
            keywords: "magical, range",
            round: "1",
            target: "All creatures in 1 zone within 3 zones",
            defense: "Spirit",
            damage: "3 psychic damage",
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
            name: "Assist Your Master",
            keywords: "magical, range",
            round: "3",
            effect: "Deep lurker summons a void cursed within 1 zone",
          },
          {
            name: "Tentacle Fury",
            keywords: "magical, range",
            round: "5",
            target: "All enemies within the deep lurker's zone",
            effect:
              "The deep lurker can use tentacle against each target, and the temporary hit points gained by this ability stack.",
          },
        ]}
      />
    ),
  },
  {
    name: "Brain Reaper",
    tier: "2",
    type: "Aberration",
    role: "Disabler",
    threat: "Standard",
    description:
      "Brain Reapers are intelligent horrors from the void realm that look like humanoids with tentacles for a mouth. Brain reapers feast on mortal brains and command powerful psychic abilities. Highly intelligent, brain reapers seek to expand their dominion in the mortal world to create their own empire with mortals as mindless slaves.",
    tactics: (
      <span>
        Brain Reapers prefer to fight near heroes to use tentacle or psychic
        blast if available, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver. If they have a seized foe, then the brain reaper always
        uses devour brain.
      </span>
    ),
    statBlock: (
      <Monster
        name="Brain Reaper"
        hp="26"
        evn="14"
        mgt="13"
        res="16"
        pb="4"
        type="Medium Aberration"
        tier="2"
        threat="Standard"
        role="Disabler"
        vision="night"
        resistances="psychic"
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
            damage: "6 physical damage",
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
            name: "Devour Brain",
            keywords: "melee",
            target: <span>1 creature seized by the brain reaper</span>,
            defense: "Spirit",
            damage: "10 physical damage",
            success: (
              <span>
                If this damage reduces the creature to 0 hit points, then they
                are immediately defeated
              </span>
            ),
          },
          {
            basic: false,
            name: "Psychic Blast",
            keywords: "magical, range, recharge",
            target: <span>1d4+1 enemies within 1 zone</span>,
            defense: "Spirit",
            damage: "6 psychic damage",
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
    name: "Brain Spawn",
    tier: "2",
    type: "Aberration",
    role: "Bruiser",
    threat: "Minor",
    description:
      "Brain Reapers are intelligent horrors from the void realm that look like humanoids with tentacles for a mouth. Brain reapers feast on mortal brains and command powerful psychic abilities. Highly intelligent, brain reapers seek to expand their dominion in the mortal world to create their own empire with mortals as mindless slaves. Brain spawns are the baby versions of brain reapers and resemble a small creature on four legs and a mass of tentacles. Brain spawn take over a host's mind, and overtime, the host is physically transformed into a brain reaper.",
    tactics: (
      <span>
        Brain spawn prefer to fight near heroes to use tentacle and uses{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver. If they have a seized foe, then the brain spawn always
        uses body snatcher.
      </span>
    ),
    statBlock: (
      <Monster
        name="Brain Spawn"
        hp="15"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Small Aberration"
        tier="2"
        threat="Minor"
        role="Bruiser"
        vision="night"
        resistances="psychic"
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
            damage: "6 physical damage",
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
            name: "Body Snatcher",
            keywords: "melee",
            target: <span>1 creature seized by the brain spawn</span>,
            defense: "Spirit",
            damage: "8 physical damage",
            success: (
              <span>
                If this damage reduces the creature to 0 hit points, then they
                are instead reduced to 1 hit point, but the the brain spawn
                slithers into the creature's brain and takes over their body.
                The brain spawn learns all the memories of their new host.
              </span>
            ),
          },
        ]}
      />
    ),
  },
  {
    name: "Brain Abomination",
    tier: "2",
    type: "Aberration",
    role: "Bruiser",
    threat: "Major",
    description:
      "Brain Reapers are intelligent horrors from the void realm that look like humanoids with tentacles for a mouth. Brain reapers feast on mortal brains and command powerful psychic abilities. Highly intelligent, brain reapers seek to expand their dominion in the mortal world to create their own empire with mortals as mindless slaves. Brain abominations are monstrosities that occur when a brain spawn takes over a large host, typically a monster like a worm or dragon. For unknown reasons, this results in a nearly mindless abomination that hungers for the living and can be barely controlled by the brain reapers.",
    tactics: (
      <span>
        Brain abominations prefer to fight near heroes to use tentacle, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver. Against ranged foes, the abomination uses psychic spike
        or mental agony if available.
      </span>
    ),
    statBlock: (
      <Monster
        name="Brain Abomination"
        hp="60"
        evn="16"
        mgt="17"
        res="14"
        pb="4"
        type="Huge Aberration"
        tier="2"
        threat="Major"
        role="Bruiser"
        vision="blind 3 zones"
        resistances="psychic"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
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
            damage: "8 physical damage",
            success: (
              <span>
                If large or smaller, the target gets swallowed by the brain
                abomination. While swallowed, the target is{" "}
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
                a single turn, the brain abomination throws up the target.
              </span>
            ),
          },
          {
            basic: false,
            name: "Mental Agony",
            keywords: "magical, range, recharge",
            target: <span>All creatures in 1 zone within 3 zones</span>,
            defense: "Spirit",
            damage: "6 psychic damage",
            success: (
              <span>
                <Link className="internal-link" to="/conditions#confused">
                  confused
                </Link>{" "}
                (overcome ends)
              </span>
            ),
          },
          {
            basic: false,
            name: "Psychic Spike",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "4 psychic damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Elder Reaper",
    tier: "2",
    type: "Aberration",
    role: "Disabler",
    threat: "Boss",
    description:
      "Brain Reapers are intelligent horrors from the void realm that look like humanoids with tentacles for a mouth. Brain reapers feast on mortal brains and command powerful psychic abilities. Highly intelligent, brain reapers seek to expand their dominion in the mortal world to create their own empire with mortals as mindless slaves. Elder reapers are the leaders of a hive of brain reapers. Elder reapers are a large brain with tentacles in a vat of vile liquid as the elder stores the memories of all past elders.",
    tactics: (
      <span>
        Elder Reapers prefer to fight near heroes to use tentacle or psychic
        blast if available, and uses reaper domination if it has a seized
        creature as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Elder Reaper"
        hp="26"
        evn="14"
        mgt="15"
        res="16"
        pb="4"
        type="Large Aberration"
        tier="2"
        threat="Boss"
        role="Disabler"
        vision="night"
        resistances="psychic"
        speeds="land 0, swim 1"
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
            name: "Tentacle",
            keywords: "melee, weapon",
            target: <span>1 creature within the elder reaper's zone</span>,
            defense: "Guard",
            damage: "6 physical damage",
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
            name: "Psychic Disrupt",
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
            name: "Psychic Blast",
            keywords: "magical, range, recharge",
            target: <span>1d4+1 enemies within 1 zone</span>,
            defense: "Spirit",
            damage: "6 psychic damage",
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
        reactions={[
          {
            basic: false,
            name: "Mental Interruption",
            keywords: "magical, range",
            trigger: (
              <span>
                Elder reaper sees a creature within 1 zone make an overcome roll
              </span>
            ),
            effect:
              "The triggering creature takes +1 misfortune to their overcome roll",
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Reaper Domination",
            keywords: "magical",
            target: <span>1 creature seized by the elder reaper</span>,
            defense: "Spirit",
            success: "target controlled by the elder reaper (next turn ends)",
            critical: "target controlled by the elder reaper (overcome ends)",
          },
        ]}
        bossActions={[
          {
            name: "Mental Break",
            keywords: "magical, range",
            round: "1",
            target: "All creatures in 1 zone within 3 zones",
            defense: "Spirit",
            damage: "6 psychic damage",
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
            name: "Defend Your Elder",
            keywords: "magical, range",
            round: "3",
            effect: "Elder reaper summons a brain reapear within 1 zone",
          },
          {
            name: "Tentacle Fury",
            keywords: "magical, range",
            round: "5",
            target: "All enemies within the elder reaper's zone",
            effect: "The elder reaper can use tentacle against each target.",
          },
        ]}
      />
    ),
  },
  {
    name: "Void Seer",
    tier: "2",
    type: "Aberration",
    role: "Artillery",
    threat: "Boss",
    description:
      "Void seers are strange, twisted creatures from the void realm that are sent to other realms to study them. Highly intelligent, but utterly mad, void seers resemble a giant floating had with a single eye and numerous smaller eyes connected by tentacle like stalks. Most void seers operate as solitary creatures but some gather a cult like following in the mortal realm.",
    tactics: (
      <span>
        Void Seers prefer to fight far from heroes to use eye ray and antimagic
        gaze to disrupt magical effects of heroes.
      </span>
    ),
    statBlock: (
      <Monster
        name="Void Seer"
        hp="22"
        evn="14"
        mgt="15"
        res="16"
        pb="4"
        type="Large Aberration"
        tier="2"
        threat="Boss"
        role="Artillery"
        vision="night"
        resistances="psychic"
        speeds="land 0, fly 1"
        traits={[
          {
            name: "Boss Monster",
            description: (
              <span>
                Boss monster's hit points equal the listed total multiplied by
                the number of heroes. Boss monsters also get one turn per hero.
                At the end of a boss monster's turn, they can take direct damage
                equal to their proficiency bonusto end one condition affecting
                them.
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
            damage: "6 physical damage",
          },
          {
            basic: false,
            name: "Eye Ray",
            keywords: "magical, range",
            effect: (
              <span>
                <span>
                  Void seer unleashes a magical ray from one of its many eyes.
                  Choose a ray from below or roll a 1d8:
                </span>
                <ul>
                  <li>
                    <i>1. Control Ray:</i> Void seer makes an attack roll
                    against the Spirit of 1 creature within 3 zones. The target
                    is{" "}
                    <Link className="internal-link" to="/conditions#hindered">
                      hindered
                    </Link>{" "}
                    (next turn ends) on a partial success, controlled by the
                    void seer (next turn ends) on a success, and controlled for
                    the scene (overcome ends) on a critical success.
                  </li>
                  <li>
                    <i>2. Disintegrate:</i> Void seer makes an attack roll
                    against the Spirit of 1 creature within 3 zones, dealing 8
                    arcane damage. If this damage reduces the the target to 0
                    hit points, then they beceome defeated.
                  </li>
                  <li>
                    <i>3. Explosion:</i> Void seer makes an attack roll against
                    the Guard of all creatures in 1 zone within 3 zones, dealing
                    4 fire damage.
                  </li>
                  <li>
                    <i>4. Freezing Ray:</i> Void seer makes an attack roll
                    against the Guard of 1 creature within 3 zones, dealing 6
                    cold damage and the target is{" "}
                    <Link className="internal-link" to="/conditions#dazed">
                      dazed
                    </Link>{" "}
                    (next turn ends) on a success or higher.
                  </li>
                  <li>
                    <i>5. Poison Ray:</i> Void seer makes an attack roll against
                    the Guard of 1 creature within 3 zones, dealing 6 toxic
                    damage and the target falls{" "}
                    <Link className="internal-link" to="/conditions#prone">
                      prone
                    </Link>{" "}
                    in a coughing fit on a success or higher.
                  </li>
                  <li>
                    <i>6. Psychic Confusion:</i> Void seer makes an attack roll
                    against the Spirit of 1 creature within 3 zones, dealing 6
                    psychic damage and the target is{" "}
                    <Link className="internal-link" to="/conditions#confused">
                      confused
                    </Link>{" "}
                    (next turn ends) on a success or higher.
                  </li>
                  <li>
                    <i>7. Telekinetic Beam:</i> Void seer makes an attack roll
                    against the Guard of 1 creature within 3 zones, dealing 6
                    physical damage and the target is moved within 1 zone on a
                    success or higher.
                  </li>

                  <li>
                    <i>8. Wither:</i> Void seer makes an attack roll against the
                    Spirit of 1 creature within 3 zones, dealing 6 necrotic
                    damage and the target takes 2{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#ongoing-damage"
                    >
                      ongoing
                    </Link>{" "}
                    necrotic damage on a success or higher.
                  </li>
                </ul>
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            basic: false,
            name: "Antimagic Gaze",
            keywords: "magical, range",
            target: <span>1 magical effect within 3 zones</span>,
            effect: (
              <span>
                If the magical effect’s tier (spell tier if the effect
                originates from a spell) is 2 or less, then the targeted effect
                ends. Otherwise, the void seer must succeed on an attack roll
                against the Spirit of the targeted effect’s origin (spellcaster
                for a spell) or a TN of 10 + double the effect’s tier.
              </span>
            ),
          },
        ]}
        bossActions={[
          {
            name: "Opening Salvo",
            keywords: "magical, range",
            round: "1",
            target: "1d4+1 creatures within 3 zones",
            effect:
              "The void seer uses eye ray against each target, and uses a different ray for each target",
          },
          {
            name: "You Won't Catch Me",
            keywords: "magical, range",
            round: "3",
            effect: (
              <span>
                The void seer becomes{" "}
                <Link className="internal-link" to="/rules/combat#stealth">
                  invisible
                </Link>{" "}
                (next turn ends) and then{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleports
                </Link>{" "}
                up to 2 zones.
              </span>
            ),
          },
          {
            name: "Ending Salvo",
            keywords: "magical, range",
            round: "5",
            target: "1d4+1 creatures within 3 zones",
            effect:
              "The void seer uses eye ray against each target, and uses a different ray for each target",
          },
        ]}
      />
    ),
  },
  {
    name: "Void Herald",
    tier: "3",
    type: "Aberration",
    role: "Support",
    threat: "Major",
    description:
      "Void heralds are the prophets of the elder terrors from the void realm. When they arrive in a world, their presence signals a void invasion will soon occur. Void heralds are eyeless humanoid creatures that fly through telekinesis.",
    tactics: (
      <span>
        Void heralds prefer to fight afar from heroes to use rupture mind and
        summon voidlings.
      </span>
    ),
    statBlock: (
      <Monster
        name="Void Herald"
        hp="96"
        evn="16"
        mgt="15"
        res="18"
        pb="6"
        type="Medium Aberration"
        tier="3"
        threat="Major"
        role="Support"
        vision="blind 3 zones"
        resistances="psychic"
        speeds="fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Gift of the Void",
            description:
              "Allies of the void herald gain +1 fortune to attack rolls",
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Void Staff",
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
          },
          {
            basic: false,
            name: "Rupture Mind",
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
        maneuvers={[
          {
            name: "Summon Voidling",
            keywords: "magical, range",
            effect: "Void herald summons 3 voidlings within 2 zones",
          },
        ]}
        reactions={[
          {
            name: "Psychic Death Throes",
            keywords: "magical, range",
            trigger:
              "The void herald sees an ally be reduced to 0 hit points within 1 zone",
            target: "All creatures engaged to the triggering ally",
            damage: "3 psychic damage",
          },
        ]}
      />
    ),
  },
  {
    name: "Voidling",
    tier: "3",
    type: "Aberration",
    role: "",
    threat: "Minion",
    description:
      "Voidlings are large bipedal horrors with tentacles for a mouth and large clawed hands. They aren't very intelligent but hunger for life, and follow the commands of their masters.",
    tactics: (
      <span>
        Voidlings prefer to fight near heroes to use tentacl rend, and uses{" "}
        <Link className="internal-link" to="/combat-abilities#overpower">
          overpower
        </Link>{" "}
        as a maneuver.
      </span>
    ),
    statBlock: (
      <Monster
        name="Voidling"
        hp="6"
        evn="18"
        mgt="19"
        res="16"
        pb="6"
        type="Large Aberration"
        tier="3"
        threat="Minion"
        role=""
        vision="blind 1 zone"
        resistances="psychic"
        actions={[
          {
            basic: true,
            name: "Tentacle Rend",
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
          {
            basic: false,
            name: "Void Intrusion",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "3 psychic damage",
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
    name: "Nascent Elder God",
    tier: "3",
    type: "Aberration",
    role: "Disabler",
    threat: "Major",
    description:
      "When an elder god emerges into reality, it starts off in a cacoon of void energy until the prophesized birth when they emerge from their cacoon to devour the world they're in to get enough strength to become a true elder god.",
    tactics: (
      <span>
        Nascent elder gods prefer to fight from afar using void pulse or unravel
        reality if available, and telekinetic throw as a maneuver. Once they
        emerge from their cacoon, the god focuses instead on using bite.
      </span>
    ),
    statBlock: (
      <Monster
        name="Nascent Elder God"
        hp="96"
        evn="16"
        mgt="17"
        res="18"
        pb="6"
        type="Colossal Aberration"
        tier="3"
        threat="Major"
        role="Disabler"
        vision="blind 3 zones"
        resistances="psychic"
        speeds="speed 0, fly 1"
        traits={[
          {
            name: "Major Monster",
            description: <span>Major monsters get two turns per round.</span>,
          },
          {
            name: "Dreams of the Elder God",
            description: (
              <span>
                The nascent elder god's zone is a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zone
                </Link>{" "}
                (3 psychic damage) to enemies, and when a creature takes this
                damage, the nascent elder god makes an attack roll against their
                Spirit. On a success, they are{" "}
                <Link className="internal-link" to="/conditions#confused">
                  confused
                </Link>{" "}
                (next turn ends).
              </span>
            ),
          },
        ]}
        actions={[
          {
            basic: true,
            name: "Void Pulse (cacoon only)",
            keywords: "magical, range",
            target: <span>1 creature within 3 zones</span>,
            defense: "Spirit",
            damage: "6 psychic damage",
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
            name: "Bite (birth only)",
            keywords: "melee, weapon",
            target: <span>1 engaged creature</span>,
            defense: "Guard",
            damage: "9 physical damage",
            success: (
              <span>
                Target swallowed by the nascent elder god. While swallowed, the
                target is{" "}
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
                a single turn, the nascent elder god vomits out the creature.
              </span>
            ),
          },
          {
            basic: true,
            name: "Unravel Reality",
            keywords: "magical, range, recharge",
            target: <span>All enemies within 1 zone</span>,
            defense: "Spirit",
            damage: "9 psychic damage",
            critical:
              "Samee as a success, but the target is erased for the scene (overcome ends)",
            success: (
              <span>
                Target is briefly erased from this reality with all memories of
                them forgotten, but they return at the end of their next turn.
              </span>
            ),
          },
        ]}
        maneuvers={[
          {
            name: "Telekinetic Throw",
            keywords: "magical, range",
            target: "1 creature within 3 zones",
            defense: "Guard",
            critical:
              "Same as a success, but the target is shoved up to 2 zones",
            success: "Target shoved up to 1 zone and falls prone",
          },
        ]}
        reactions={[
          {
            name: "Forced Birth",
            keywords: "magical",
            trigger: (
              <span>
                The nascent elder god becomes <Tooltip preset="shaken" />
              </span>
            ),
            effect: (
              <span>
                The nascent elder god breaks out of its cacoon and emerges
                earlier. The baby elder god is still weak, but very angry and
                hungry. It loses any abilities marked 'cocoon only', gains any
                abilities 'birth only', <Tooltip preset="heals" /> 24, and their
                land speed becomes 1.
              </span>
            ),
          },
        ]}
      />
    ),
  },
];

export default AberrationMonsters;
