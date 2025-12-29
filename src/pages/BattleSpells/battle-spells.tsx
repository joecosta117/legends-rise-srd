import AbilityCard from "../../components/AbilityCard";
import Modifier from "../../components/Modifier";
import Monster from "../../components/Monster";
import ToolTip from "../../components/ToolTip";
import { Link } from "react-router-dom";

export const airSpells = [
  [
    {
      title: "Gust (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure a small blast of air."
          frequency="Spell 0 (Air)"
          target="1 creature within 3 zones"
          defense="Guard"
          keywords="Magical, Range"
          damage="2 physical damage per your tier"
          critical="Pushed within their zone"
        />
      ),
    },
    {
      title: "Zap (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="Spark of electricity crackles from your fingertips to a foe."
          frequency="Spell 0 (Air)"
          target="1 creature within 3 zones"
          keywords="Magical, Range"
          defense="Guard"
          damage="2 lightning damage per your tier"
          critical="Choose a second target within the same zone as the original target to take the same damage"
        />
      ),
    },
  ],
  [
    {
      title: "Gentle Descent (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard
          accordion
          descriptor="As everyone falls to their deaths, you slow their descent to one of a slow leaf."
          frequency="Spell 1 (Air)"
          trigger="When you see creatures falling within 1 zone"
          keywords="Magical, Range"
          effect={
            <span>
              Choose up to 2 triggering creatures per spell tier to not take{" "}
              <Link className="internal-link" to="/rules/adventuring#crashing">
                crash
              </Link>{" "}
              damage and they land on their feet.
            </span>
          }
        />
      ),
    },
    {
      title: "Lightning Bolt (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You call down a bolt of lightning on your enemy."
          frequency="Spell 1 (Air)"
          keywords="Escalation, Magical, Range"
          target="1 creature within 3 zones"
          defense="Guard"
          damage="5 lightning damage per spell tier"
        />
      ),
    },
    {
      title: "Thunderclap (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You clap your hands to unleash a thunderous boom that deafens foes."
          frequency="Spell 1 (Air)"
          keywords="Escalation, Magical"
          target="All enemies within your zone"
          defense="Guard"
          damage="2 physical damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Wind Wall (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure a wall of bustling wind."
          frequency="Spell 1 (Air)"
          keywords="Magical, Range"
          target="1 zone border per spell tier (borders must connect) within 2 zones"
          duration="Scene ends"
          effect={
            <span>
              <span>
                Range abilities fail to pass through the wall, and when a
                creature passes through the wall, you can stop them on a
                successful attack roll against their Guard.
              </span>
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Chain Lightning (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash lightning that arcs through multiple enemies."
          frequency="Spell 2 (Air)"
          target="1 creature within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="3 lightning damage per spell tier"
          effect={
            <span>
              <span>
                Repeat this spell's attack roll as lightning leaps to another
                enemy within 1 zone of the previous target, then leaps again,
                and so on. You can't target the same creature twice. On a failed
                attack roll, this spell ends.
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Summon Air Elemental (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a breezy elemental spirit from the air realms."
            frequency="Spell 2 (Air)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon an air elemental within 1 zone."
          />
          <Monster
            name="Air Elemental"
            type="Large Elemental"
            hp="10 per spell tier (ST)"
            evn="10 + PB"
            mgt="10 + PB"
            res="8 + PB"
            pb="double ST"
            speeds="fly 1"
            resistances="lightning"
            summons
            accordion
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
                damage: "triple ST physical damage",
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
                name: "Zap",
                keywords: "range, weapon",
                target: "1 creature within 3 zones",
                defense: "Guard",
                damage: "double ST lightning damage",
              },
            ]}
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Tempest (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash a localized thunderstorm with a cyclone in the middle of it."
          frequency="Spell 3 (Air)"
          target="1 zone within 5 zones"
          duration="Scene ends"
          keywords="Magical, Range"
          effect={
            <span>
              <span>
                A cyclone turns the targeted zone into a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone and dangerous zone
                </Link>{" "}
                (1 physical damage per spell tier). When a huge or smaller
                creature takes this damage, make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against their Guard, and on a success, they are{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends). Zones adjacent to the targeted zone become
                dangerous zones (1 lightning damage per spell tier). Once per
                turn, as a maneuver you can move the cyclone up to 1 zone away.
              </span>
            </span>
          }
        />
      ),
    },
  ],
];
export const arcaneSpells = [
  [
    {
      title: "Arcane Dart (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You fire a small dart of raw magical energy."
          frequency="Spell 0 (Arcane)"
          target="1 creature within 3 zones"
          defense="Spirit"
          keywords="Magical, Range"
          damage="2 arcane damage per your tier"
          critical="1 additional damage per your tier"
        />
      ),
    },
    {
      title: "Chaos Spray (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="Random energy explodes from your hands."
          frequency="Spell 0 (Arcane)"
          target="1d4+1 enemies within your zone"
          keywords="Magical"
          defense="Guard"
          damage="1 damage per your tier. Roll 1d6 to determine the damage type: 1) toxic, 2) fire, 3) cold, 4) lightning, 5) physical, and 6) arcane"
        />
      ),
    },
  ],
  [
    {
      title: "Arcane Barrage (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash numerous magical missiles."
          frequency="Spell 1 (Arcane)"
          target="1 creature per dart within 3 zones"
          keywords="Magical, Range"
          defense="Spirit"
          damage="2 arcane damage"
          effect="You create 2 darts per spell tier"
        />
      ),
    },
    {
      title: "Chaos Burst (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You explode elemental magic to chaotic effect."
          frequency="Spell 1 (Arcane)"
          keywords="Escalation, Magical, Range"
          target="All creatures in 1 zone within 3 zones"
          defense="Guard"
          damage="3 damage per spell tier. Roll 1d6 to determine the damage type: 1) toxic, 2) fire, 3) cold, 4) lightning, 5) physical, and 6) arcane"
        />
      ),
    },
    {
      title: "Nullify Magic (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You attempt to destroy a magical effect."
          frequency="Spell 1 (Arcane)"
          keywords="Magical, Range"
          target="1 magical effect within 1 zone"
          effect={
            <span>
              <span>
                If this spell’s tier is equal to or higher than the targeted
                effect’s tier, the effect ends. Otherwise, you must succeed on
                an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against the Spirit of the effect’s origin or a TN of 10 + double
                the effect’s tier.
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Summon Dragon Spirit (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure the spirit of a dragon to aid you."
            frequency="Spell 1 (Arcane)"
            keywords="Magical, Range, Summon"
            duration="Focus until scene ends"
            effect="You summon a dragon spirit within 1 zone. Choose one of the following elements to represent your dragon spirit: cold, fire, lightning, or toxic."
          />
          <Monster
            name="Dragon Spirit"
            type="Large Dragon"
            hp="10 per spell tier (ST)"
            evn="12 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            speeds="fly 1"
            resistances="chosen element"
            summons
            accordion
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
                damage: "double ST physical damage",
              },
              {
                basic: false,
                name: "Breath Weapon",
                frequency: "Once per spell",
                keywords: "magical",
                target: "1d4+1 enemies within the dragon spirit’s zone",
                defense: "Guard",
                damage: "2 damage of the chosen damage type per spell tier",
              },
            ]}
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Arcane Hand (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a floating hand of magical energy."
            frequency="Spell 2 (Arcane)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon a magical hand within 1 zone."
          />
          <Monster
            name="Arcane Hand"
            type="Large export Construct"
            hp="8 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            speeds="fly 1"
            resistances="arcane"
            summons
            accordion
            actions={[
              {
                basic: true,
                name: "Punch",
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
                damage: "double ST physical damage",
                success: (
                  <span>
                    <Link className="internal-link" to="/conditions#seized">
                      seized
                    </Link>{" "}
                    (scene ends), but the hand can only have one creature seized
                    at a time
                  </span>
                ),
              },
            ]}
            reactions={[
              {
                name: "Hand Block",
                trigger:
                  "You see a creature within your arcane hand’s zone take damage",
                effect: " Arcane hand instead takes the damage",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Dragon Transformation (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You transform into a dragon."
          frequency="Spell 2 (Arcane)"
          duration="Scene ends"
          keywords="Magical, Shapeshift"
          effect={
            <span>
              <span>
                You transform into a large dragon (huge at spell tier 3) and
                choose cold, fire, lightning, or toxic as your dragon’s damage
                type. While transformed, you gain:
              </span>

              <ul>
                <li>
                  <span>
                    4{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#temporary-hit-points"
                    >
                      temporary hit points
                    </Link>{" "}
                    per the spell tier
                  </span>
                </li>
                <li>
                  <span>Guard = 12 + double the spell tier</span>
                </li>
                <li>
                  <span>Your natural melee weapons deal 3 physical damage</span>
                </li>
                <li>
                  <span>Fly speed of 1</span>
                </li>
                <li>
                  <span>
                    <Link
                      className="internal-link"
                      to="/rules/combat#resistances-and-weaknesses"
                    >
                      Resistance
                    </Link>{" "}
                    to the chosen damage type
                  </span>
                </li>
                <li>
                  <span>
                    Once per spell, you can unleash energy as an action. Make an{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    against the Guard of each creature in 1 zone within 3 zones,
                    dealing 3 damage per spell tier of the chosen damage type
                  </span>
                </li>
              </ul>
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Erase (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You remove a foe's essence from existence."
          frequency="Spell 3 (Arcane)"
          target="1 creature within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          damage="5 arcane damage per spell tier. If this damage kills the target, then they can’t be resurrected outside of mythical tier magic."
        />
      ),
    },
  ],
];
export const deathSpells = [
  [
    {
      title: "Minor Drain (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="As your hand glows with dark power, you steal a foe’s lifeforce."
          frequency="Spell 0 (Death)"
          target={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#engaged">
                engaged
              </Link>{" "}
              creature
            </span>
          }
          defense="Spirit"
          keywords="Magical, Melee"
          damage="3 necrotic damage per your tier"
          critical={
            <span>
              You gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your proficiency bonus (scene ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Wither (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You decay your enemy with necrotic energy."
          frequency="Spell 0 (Death)"
          target="1 creature within 3 zones"
          keywords="Magical, Range"
          defense="Spirit"
          damage="2 necrotic damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (scene ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Enfeeble (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You curse a foe with necromantic energy, causing their muscles to weaken."
          frequency="Spell 1 (Death)"
          target="1 creature within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          damage="4 necrotic damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Necrosis Field (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You infuse the land with draining magic."
          frequency="Spell 1 (Death)"
          keywords="Escalation, Magical, Range"
          target="All creatures in 1 zone within 3 zones"
          defense="Spirit"
          damage="2 necroitc damage per spell tier"
          effect={
            <span>
              Targeted zone becomes a{" "}
              <Link className="internal-link" to="/rules/combat#zone-types">
                dangerous zone
              </Link>{" "}
              (1 necrotic damage per spell tier) for the scene
            </span>
          }
        />
      ),
    },
    {
      title: "Summon Undead (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You raise the dead to bring forth an undead abomination."
            frequency="Spell 1 (Death)"
            keywords="Magical, Range, Summon"
            duration="Focus until scene ends"
            effect="You summon an undead (ghost, ghoul, or zombie) within 1 zone."
          />
          <Monster
            name="Undead"
            type="Medium Undead"
            hp="8 per spell tier (ST)"
            evn="10 + double ST"
            mgt="12 + double ST"
            res="8 + double ST"
            pb="double ST"
            resistances="necrotic, physical (ghost only)"
            weaknesses="holy"
            summons
            accordion
            traits={[
              {
                name: "Unnatural Endurance (zombie only)",
                description: (
                  <span>
                    When the undead is reduced to 0 hit points, it can succeed
                    on an{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome roll
                    </Link>{" "}
                    to instead be reduced to 1 hit point. Holy damage or damage
                    from a critical successful{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    ignore this trait.
                  </span>
                ),
              },
              {
                name: "Death Stench (ghoul only)",
                description: (
                  <span>
                    Creatures that end their turn{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    to the undead must succeed on an{" "}
                    <Link className="internal-link" to="/rules/combat#overcome">
                      overcome roll
                    </Link>{" "}
                    or become{" "}
                    <Link className="internal-link" to="/conditions#hindered">
                      hindered
                    </Link>{" "}
                    (next turn ends).
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
                damage:
                  "double ST physical damage or necrotic damage (ghost only)",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Vampiric Drain (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You touch a foe, and drain their vitality like a vampire."
            frequency="Spell 1 (Death)"
            keywords="Escalation, Magical, Melee"
            target={
              <span>
                1{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                creature
              </span>
            }
            defense="Spirit"
            damage="5 necrotic damage per spell tier"
            success={
              <span>
                You <ToolTip preset="heal" /> equal to half the damage dealt
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Blood Tendril (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You connect a line of dark blood from you to your foe, which you can use to drain their vitality."
            frequency="Spell 2 (Death)"
            target="1 creature within 2 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="4 necrotic damage per spell tier"
            effect={
              <span>
                Whenever you deal damage from this spell, you gain{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                equal to half the damage dealt (scene ends)
              </span>
            }
            success="You become linked to the target for the scene while you focus. When you focus on this spell, the target takes 2 necrotic damage per spell tier."
          />
        </div>
      ),
    },
    {
      title: "Withering Wave (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash a blast of necrotic energy that saps the strength of nearby foes."
          frequency="Spell 2 (Death)"
          target="All enemies in your zone"
          keywords="Escalation, Magical"
          defense="Spirit"
          damage="2 necrotic damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (scene ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Word of Death (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="With a single word, you imbue your foe with necrotic energy to force undeath upon them."
            frequency="Spell 3 (Death)"
            target="1 creature within 3 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="5 necrotic damage per spell tier. If this damage kills the target, then they are reanimated as a death wraith (see below statistics) under your control, and this spell gains the summon keyword. The death wraith lasts as long as you focus on it during the scene."
          />
          <Monster
            name="Death Wraith"
            type="Undead (same size as original target)"
            hp="6 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            speeds="other speeds depending on the original target"
            resistances="necrotic"
            weaknesses="holy"
            summons
            accordion
            actions={[
              {
                basic: true,
                name: "Death Touch",
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
                defense: "Spirit",
                damage: "triple ST necrotic damage",
                success: "hindered (scene ends)",
              },
            ]}
          />
        </div>
      ),
    },
  ],
];
export const earthSpells = [
  [
    {
      title: "Hurl Stone (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You launch a small stone at a foe."
          frequency="Spell 0 (Earth)"
          target="1 creature within 3 zones"
          defense="Guard"
          keywords="Magical, Range"
          damage="2 physical damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#prone">
                prone
              </Link>
            </span>
          }
        />
      ),
    },
    {
      title: "Rumble (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You shake the ground underneath your foes."
          frequency="Spell 0 (Earth)"
          target="1d4+1 enemies within your zone"
          keywords="Magical"
          defense="Guard"
          critical="Same as success, and 1 physical damage per your tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#prone">
                prone
              </Link>
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Earthen Grasp (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You entrap your enemy in dirt and stone until they can’t move."
          frequency="Spell 1 (Earth)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          critical={
            <span>
              Same as a success, and 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              physical damage per spell tier while seized
            </span>
          }
          success={
            <span>
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              (scene ends)
            </span>
          }
          partial="Seized (next turn ends)"
        />
      ),
    },
    {
      title: "Seismic Shift (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash the ground below your foes to shower them with the upturned earth."
          frequency="Spell 1 (Earth)"
          keywords="Magical, Range"
          target="All creatures in 1 zone within 3 zones"
          defense="Guard"
          damage="2 physical damage per spell tier"
          effect={
            <span>
              Targeted zone becomes a{" "}
              <Link className="internal-link" to="/rules/combat#zone-types">
                difficult zone
              </Link>{" "}
              (scene ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Shape Earth (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You manipulate the ground to serve your whims."
            frequency="Spell 1 (Earth)"
            target="1 zone per spell tier within 2 zones"
            keywords="Magical, Range"
            duration="Scene ends"
            effect="Targeted zones become same choice of difficult zones, dangerous zones (1 physical damage per spell tier), defensive zones, or elevated zones."
          />
        </div>
      ),
    },
    {
      title: "Stone Armor (Maneuver)",
      actType: "Maneuver",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You cover an ally in stone to protect their weak spots and enhance their strength."
            frequency="Spell 1 (Earth)"
            keywords="Magical"
            target="1 creature per spell tier in your zone"
            effect={
              <span>
                Target gains 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                per spell tier (scene ends). While the target has these
                temporary hit points, they gain <Modifier count="1" type="f" />{" "}
                to melee attack rolls.
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Stone Wall (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You create a wall of solid stone."
            frequency="Spell 2 (Earth)"
            target="1 zone border per spell tier (borders must connect) within 2 zones"
            keywords="Magical, Range"
            effect={
              <span>
                Nothing can pass through the wall. Each targeted zone border has
                defenses equal to 10 + double spell tier and 6 hit points per
                spell tier.
              </span>
            }
            duration="Scene ends"
          />
        </div>
      ),
    },
    {
      title: "Summon Earth Elemental (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a stone elemental spirit from the earth realm."
            frequency="Spell 2 (Earth)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon an earth elemental within 1 zone."
          />
          <Monster
            name="Earth Elemental"
            type="Large Elemental"
            hp="10 per spell tier (ST)"
            evn="12 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            // resistances="physical ST"
            summons
            accordion
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
                damage: "double ST physical damage",
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
                name: "Rock Throw",
                keywords: "range, weapon",
                target: "1 creature within 3 zones",
                defense: "Guard",
                damage: "double ST physical damage",
              },
            ]}
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Earthquake (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You send shocks to shake the earth at its very foundation."
            frequency="Spell 3 (Earth)"
            target="1 zone per spell tier within 5 zones"
            keywords="Magical, Range"
            duration="Scene ends"
            effect={
              <span>
                <span>
                  Targeted zones become difficult zones and dangerous zones (1
                  physical damage per spell tier). When a creature takes this
                  damage, make an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against their Guard, and on a success, they fall{" "}
                  <Link className="internal-link" to="/conditions#prone">
                    prone
                  </Link>
                  . Any huge or smaller structure within the targeted zones are
                  reduced to rubble.
                </span>
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const eldritchSpells = [
  [
    {
      title: "Telekinetic Push (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="With the powers of your mind, you shove a creature away."
          frequency="Spell 0 (Eldritch)"
          target="1 creature within 3 zones"
          defense="Guard"
          keywords="Magical, Range"
          damage="2 physical damage per your tier"
          critical="Pushed within their zone"
        />
      ),
    },
    {
      title: "Visions of the Void (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You open a foe’s mind to the madness of the void realm."
          frequency="Spell 0 (Eldritch)"
          target="1 creature within 3 zones"
          keywords="Magical, Range"
          defense="Spirit"
          damage="2 psychic damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Curse of Madness (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You infuse a foe’s mind with the madness of the void realm."
          frequency="Spell 1 (Eldritch)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          critical={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              psychic damage per spell tier while confused
            </span>
          }
          success={
            <span>
              Target is confused (scene ends). While confused, they must use an
              action to{" "}
              <Link className="internal-link" to="/combat-abilities#charge">
                charge
              </Link>{" "}
              or{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>{" "}
              their closest ally
            </span>
          }
          partial={
            <span>Same as a success, but confused (next turn ends)</span>
          }
        />
      ),
    },
    {
      title: "Eldritch Tentacles (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You summon strange tentacles from the void realm. "
          frequency="Spell 1 (Eldritch)"
          keywords="Magical, Range"
          target="1 zone per spell tier within 2 zones"
          duration="Scene ends"
          effect={
            <span>
              <span>
                Targeted zones become dangerous zones (1 physical damage per
                spell tier). When a creature takes this damage, make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against their Guard, and on a success, the creature becomes{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (scene ends).
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Otherworldly Whispers (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You unleash a cacophony of whispering voices that overwhelm the minds of your enemies"
            frequency="Spell 1 (Eldritch)"
            target="All creatures in 1 zone within 3 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="2 psychic damage per spell tier"
            success={
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends)
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Twist Reality (Reaction)",
      actType: "Reaction",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="As you bend reality for a more favorable outcome, you risk your own mind."
            frequency="Spell 1 (Eldritch)"
            keywords="Magical, Range"
            trigger="You see the result of an enemy’s roll within 1 zone"
            effect={
              <span>
                Target rerolls the triggering roll and takes the lower result.
                You must then succeed on an{" "}
                <Link className="internal-link" to="/rules/combat#overcome">
                  overcome roll
                </Link>{" "}
                or become{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends).
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Summon Aberration (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a tentacled, psychic nightmare from the void realm."
            frequency="Spell 2 (Eldritch)"
            duration="Focus until scene end"
            keywords="Magical, Summon, Range"
            effect="You summon an aberration within 1 zone."
          />
          <Monster
            name="Aberration"
            type="Large Aberration"
            hp="10 per spell tier (ST)"
            evn="10 + PB"
            mgt="10 + PB"
            res="8 + PB"
            resistances="psychic"
            pb="double ST"
            summons
            accordion
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
                damage: "double ST physical damage",
                success: (
                  <span>
                    {" "}
                    <Link className="internal-link" to="/conditions#seized">
                      seized
                    </Link>{" "}
                    (scene ends)
                  </span>
                ),
              },
              {
                basic: false,
                name: "Mind Blast",
                keywords: "magical, range",
                target: "1 creature within 3 zones",
                defense: "Spirit",
                damage: "double ST psychic damage",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Telekinesis (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You manipulate objects or creatures with your mind."
            frequency="Spell 2 (Eldritch)"
            target="1 huge or smaller creature within 2 zones"
            duration="Focus until scene ends"
            keywords="Escalation, Magical, Range"
            defense="Guard"
            critical="Same as a success, but you can move the target up to 1 zone away"
            success={
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (scene ends) and you can move the target within their zone
              </span>
            }
            partial="Seized (next turn ends)"
            effect={
              <span>
                <span>
                  When you focus on this spell, you can move the{" "}
                  <Link className="internal-link" to="/conditions#seized">
                    seized
                  </Link>{" "}
                  target up to 1 zone or let them go to repeat this spell’s{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against another target. You can only have one seized target at
                  a time.
                </span>
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Psychic Overload (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You shatter your foes' minds with relentless psychic energy that threatens to destroy them."
            frequency="Spell 3 (Eldritch)"
            target="All enemies within 1 zone"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="3 psychic damage per spell tier. If any damage from this spell kills the target, then their head explodes."
            success={
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (scene ends)
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const enchantmentSpells = [
  [
    {
      title: "Disrupt Thoughts (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You disturb your foe’s mind."
          frequency="Spell 0 (Enchantment)"
          target="1 creature within 3 zones"
          defense="Spirit"
          keywords="Magical, Range"
          damage="2 psychic damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#vulnerable">
                vulnerable
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Induced Aggression (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You encourage an ally’s aggression with powerful mind magic."
          frequency="Spell 0 (Enchantment)"
          target="1 creature within 1 zone"
          keywords="Magical, Range"
          effect={
            <span>
              <span>
                Target gains <Modifier type="f" count="1" /> to their next{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                (next turn ends)
              </span>
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Charm (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You attempt to make your foes your friends."
          frequency="Spell 1 (Enchantment)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          critical={
            <span>Same as a success, but the effect lasts for the scene.</span>
          }
          success={
            <span>
              Target can't use hostile abilities against you (next turn ends) or
              until you or your allies use a hostile ability against them
            </span>
          }
          partial={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Command (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You magically force obedience with a simple one word command."
          frequency="Spell 1 (Enchantment)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          critical="Same as success, but the target uses both their action and maneuver to follow your command."
          success="Target uses their action or maneuver to follow your one word command, such as “run” or “drop”."
          partial={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Sleep (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You magically make a foe drowsy."
          frequency="Spell 1 (Enchantment)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          critical={
            <span>
              Falls{" "}
              <Link className="internal-link" to="/conditions#prone">
                prone
              </Link>{" "}
              and asleep, but can be woken up with a maneuver from an{" "}
              <Link className="internal-link" to="/rules/combat#engaged">
                engaged
              </Link>{" "}
              creature
            </span>
          }
          success={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (scene ends)
            </span>
          }
          partial={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Terrify (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You magically make the creatures afraid of you."
          frequency="Spell 1 (Enchantment)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          critical={
            <span>
              Same as a success, and the target must use their next maneuver to{" "}
              <Link className="internal-link" to="/combat-abilities#move">
                move
              </Link>{" "}
              away from you
            </span>
          }
          success={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (scene ends)
            </span>
          }
          partial="hindered (next turn ends)"
        />
      ),
    },
  ],
  [
    {
      title: "Confusion (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You disrupt the minds of many, turning them against one another."
            frequency="Spell 2 (Enchantment)"
            target="All creatures in 1 zone within 3 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="2 psychic damage per spell tier"
            success={
              <span>
                Target is confused (scene ends). While confused, they must use
                an action to{" "}
                <Link className="internal-link" to="/combat-abilities#charge">
                  charge
                </Link>{" "}
                or{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>{" "}
                their closest ally.
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Mind Control (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You dominate another’s mind to control them."
            frequency="Spell 2 (Enchantment)"
            target="1 creature (+1 creatures for each higher spell tier) within 3 zones"
            defense="Spirit"
            keywords="Escalation, Magical, Range"
            critical="You control the target's turns (scene ends)."
            success="You control the target's turns (overcome ends)."
            partial={<span>You control the target's next turn</span>}
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Majestic Presence (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You take on the visage of a deific entity that overwhelms your foes."
            frequency="Spell 3 (Enchantment)"
            target="All enemies within 1 zone"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            critical={
              <span>
                Same as a success, but also{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                while dazed
              </span>
            }
            success={<span>dazed (scene ends)</span>}
            partial={
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends)
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const fireSpells = [
  [
    {
      title: "Fire Burst (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="Flames explode from your hands."
          frequency="Spell 0 (Fire)"
          target="1d4+1 enemies in your zone"
          defense="Guard"
          keywords="Magical"
          damage="1 fire damage per your tier"
        />
      ),
    },
    {
      title: "Flame Bolt (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You send out a ray of fire"
          frequency="Spell 0 (Fire)"
          target="1 creature within 3 zones"
          defense="Guard"
          keywords="Magical, Range"
          damage="2 fire damage per your tier"
          critical={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              fire damage per your tier
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Blazing Arrow (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You fire a fiery arrow that ignites a foe."
          frequency="Spell 1 (Fire)"
          target="1 creature within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="4 fire damage per spell tier"
          success={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              fire damage per spell tier
            </span>
          }
        />
      ),
    },
    {
      title: "Fireball (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You send out a tiny ball of flame that explodes."
          frequency="Spell 1 (Fire)"
          target="All creatures in 1 zone within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="3 fire damage per spell tier"
        />
      ),
    },
    {
      title: "Lava Field (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You momentarily open a portal to the realm of fire as hot lava spills over the ground."
          frequency="Spell 1 (Fire)"
          target="1 zone per spell tier within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect="Targeted zones become difficult zones and dangerous zones (1 fire damage per spell tier)"
        />
      ),
    },
    {
      title: "Set Ablaze (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="With a snap of your fingers, you set a foe on fire."
          frequency="Spell 1 (Fire)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          critical={
            <span>
              Same as a success, and the target is{" "}
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              while taking this ongoing damage
            </span>
          }
          success={
            <span>
              2{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              fire damage per spell tier
            </span>
          }
          partial="1 ongoing fire damage per spell tier"
        />
      ),
    },
  ],
  [
    {
      title: "Fire Wall (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a wall of burning flames."
            frequency="Spell 2 (Fire)"
            target="1 zone border per spell tier (borders must connect) within 2 zones"
            keywords="Magical, Range"
            effect={
              <span>
                Range abilities can’t pass through the wall, and when a creature
                passes through the wall, they take 2 fire damage per spell tier.
                Zones adjacent to the wall become dangerous zones (1 fire damage
                per spell tier).
              </span>
            }
            duration="Scene ends"
          />
        </div>
      ),
    },
    {
      title: "Summon Fire Elemental (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a fiery elemental spirit from the fire realm."
            frequency="Spell 2 (Fire)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon a fire elemental within 1 zone."
          />
          <Monster
            name="Fire Elemental"
            type="Large Elemental"
            hp="10 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            resistances="fire"
            weaknesses="cold"
            summons
            accordion
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
                damage: "triple ST fire damage",
                success: (
                  <span>
                    1{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#ongoing-damage"
                    >
                      ongoing
                    </Link>{" "}
                    fire damage per spell tier
                  </span>
                ),
              },
              {
                basic: false,
                name: "Throw Fire",
                keywords: "range",
                target: "1 creature within 3 zones",
                defense: "Guard",
                damage: "double ST fire damage",
              },
            ]}
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Meteor Fall (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You bring down flaming meteors from the sky that explode upon your enemies."
            frequency="Spell 3 (Fire)"
            target="All creatures in 1 zone per spell tier within 5 zones"
            keywords="Escalation, Magical, Range"
            defense="Guard"
            damage="3 fire damage per spell tier"
            success={
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const gravitySpells = [
  [
    {
      title: "Astral Pressure (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You double the gravity to slow your foes."
          frequency="Spell 0 (Gravity)"
          target="1d4+1 enemies in your zone"
          defense="Guard"
          keywords="Magical"
          critical="Same as success, and 1 physical damage per your spell tier"
          success={<span>Target's speed is halved (next turn ends)</span>}
        />
      ),
    },
    {
      title: "Crush (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You draw gravity close to immobilize a foe."
          frequency="Spell 0 (Gravity)"
          target="1 creature within 3 zones"
          defense="Guard"
          keywords="Magical, Range"
          damage="2 physical damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Astral Breach (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a line of intense gravitational force that draws everything towards it."
          frequency="Spell 1 (Gravity)"
          target="1 zone border per spell tier (borders must connect) within 2 zones"
          duration="Scene ends"
          keywords="Magical, Range"
          effect={
            <span>
              <span>
                Make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against any creature’s Guard that enters or starts their turn in
                a zone adjacent to the targeted zone borders. On a success, the
                target is pulled to the zone border. You can only make this
                attack roll against a creature once per turn.
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Graviton Shift (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You invert the gravity around a creature."
          frequency="Spell 1 (Gravity)"
          target="1 creature per spell tier within 2 zones"
          defense="Guard"
          keywords="Escalation, Magical, Range"
          success="The gravity effect lasts for the scene."
          partial="Gravity on the target flips (next turn ends) as they fly up or fall down a number of zones equal to the spell tier."
          critical={
            <span>
              Target is{" "}
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              while the gravity effect lasts
            </span>
          }
        />
      ),
    },
    {
      title: "Pressure Wave (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You manipulate gravity around you to either draw your enemies closer or push them away."
          frequency="Spell 1 (Gravity)"
          target="All enemies in your zone"
          defense="Guard"
          damage="2 physical damage per spell tier"
          keywords="Escalation, Magical"
          success={
            <span>
              Pull the target to become{" "}
              <Link className="internal-link" to="/rules/combat#engaged">
                engaged
              </Link>{" "}
              with you or push them away within your zone (your choice)
            </span>
          }
        />
      ),
    },
    {
      title: "Weight Field (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You adjust the gravity in an area to speed or slow down creatures."
          frequency="Spell 1 (Gravity)"
          target="1 zone per spell tier within 2 zones"
          duration="Scene ends"
          effect={
            <span>
              <span>
                Choose to decrease or increase gravity in the targeted zones:
              </span>
              <ul>
                <li>
                  <span>
                    <i>Decrease:</i> Creatures that start their turn within the
                    zone have their speeds increased by +1 until the end of
                    their turn.
                  </span>
                </li>
                <li>
                  <span>
                    <i>Increase:</i> Targeted zones become difficult zones.
                  </span>
                </li>
              </ul>
            </span>
          }
          keywords="Magical, Range"
        />
      ),
    },
  ],
  [
    {
      title: "Reverse Gravity (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You turn gravity upside down in an area."
          frequency="Spell 2 (Gravity)"
          target="1 zone per spell tier within 2 zones"
          keywords="Magical, Range"
          effect={
            <span>
              The targeted zones' gravity flips as everything flies up a number
              of zones equal to the spell tier, and take{" "}
              <Link className="internal-link" to="/rules/adventuring#crashing">
                crash
              </Link>{" "}
              damage. If a creature walks out of the targeted zone, then regular
              gravity resumes on them, and they fall to the ground.
            </span>
          }
          duration="Scene ends"
        />
      ),
    },
    {
      title: "Singular Collapse (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You concentrate the density of a foe to crush them with gravitational force."
          frequency="Spell 2 (Gravity)"
          target="1 creature within 2 zones"
          defense="Guard"
          damage="4 physical damage per spell tier"
          keywords="Escalation, Magical, Range"
          success={
            <span>
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              (scene ends), and 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              physical damage per spell tier while seized
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Black Hole (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a miniature star to only then collapse it into a black hole that annihilates all nearby life."
            frequency="Spell 3 (Gravity)"
            target="1 zone within 5 zones"
            keywords="Magical, Range"
            duration="Scene ends"
            effect={
              <span>
                <span>
                  Targeted zone becomes a{" "}
                  <Link className="internal-link" to="/rules/combat#zone-types">
                    difficult zone and dangerous zone
                  </Link>{" "}
                  (1 physical damage per spell tier) filled with darkness that
                  blocks out sound. When a creature takes this damage, make an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against their Guard, and on a success, they become{" "}
                  <Link className="internal-link" to="/conditions#seized">
                    seized
                  </Link>{" "}
                  (next turn ends). If a creature is killed while within the
                  targeted zone, then their body is disintegrated.
                </span>
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const holySpells = [
  [
    {
      title: "Blessed Aegis (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You shield an ally with celestial protection."
          frequency="Spell 0 (Holy)"
          target="1 creature within 1 zone"
          keywords="Magical, Range"
          duration="Start of your next turn"
          effect={
            <span>
              <span>
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  Attack rolls
                </Link>{" "}
                against the target take <Modifier type="mf" count="1" />
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Sacred Fire (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You burn a foe with celestial flames while blessing an ally"
          frequency="Spell 0 (Holy)"
          target="1 creature within 3 zones"
          defense="Spirit"
          keywords="Magical, Range"
          damage="2 holy damage per your tier"
          critical={
            <span>
              Choose one creature within 3 zones to gain{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              equal to your proficiency bonus (scene ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Bless Weapon (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You touch a weapon to bless it with sacred energy."
          frequency="Spell 1 (Holy)"
          target="1 weapon in your zone"
          keywords="Magical"
          duration="Scene ends"
          effect={
            <span>
              When a creature uses the target weapon to{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , they deal holy damage instead of the weapon's normal damage
              type, and on a critical success, the target takes 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              holy damage per spell tier.
            </span>
          }
        />
      ),
    },
    {
      title: "Boon (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You bless an ally with divine power."
          frequency="Spell 1 (Holy)"
          target="1 creature per spell tier within your zone"
          keywords="Magical"
          duration="Scene ends"
          effect="Target gains +1 fortune to attack rolls and overcome rolls."
        />
      ),
    },
    {
      title: "Condemning Decree (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash divine wrath upon a foe and mark them for swift death."
          frequency="Spell 1 (Holy)"
          target="1 creature within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          damage="4 holy damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#vulnerable">
                vulnerable
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Holy Weapon (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You summon a heavenly weapon."
          frequency="Spell 1 (Holy)"
          target="1 creature within 1 zone"
          keywords="Magical, Range"
          duration="Focus for the scene"
          defense="Guard"
          damage="2 holy damage per spell tier"
          effect={
            <span>
              <span>
                When you focus on this spell, you can move the weapon up to 1
                zone to become{" "}
                <Link className="internal-link" to="/rules/combat#engaged">
                  engaged
                </Link>{" "}
                to a creature and then make this spell's{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against that creature.
              </span>
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Summon Angel (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a celestial warrior from the heavenly realms."
            frequency="Spell 2 (Holy)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon an angelic warrior within 1 zone."
          />
          <Monster
            name="Angelic Warrior"
            type="Medium Angel"
            hp="10 per spell tier (ST)"
            evn="11 + PB"
            mgt="10 + PB"
            res="9 + PB"
            pb="double ST"
            speeds="fly 1"
            resistances="holy"
            weaknesses="unholy"
            summons
            accordion
            traits={[
              {
                name: "Celestial Aura",
                description: (
                  <span>
                    <span>
                      Angel and allies within the angel’s zone gain{" "}
                      <Modifier type="f" count="1" /> to{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#overcome"
                      >
                        overcome rolls
                      </Link>
                    </span>
                  </span>
                ),
              },
            ]}
            actions={[
              {
                basic: true,
                name: "Holy Sword",
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
                defense: "Spirit",
                damage: "double ST holy damage",
              },
            ]}
            maneuvers={[
              {
                name: "Angelic Prayer",
                frequency: "Once per spell",
                keywords: "magical, range",
                target: "1 creature within 1 zone",
                effect:
                  "Target can spend a recovery, but instead regains 6 hit points per ST",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Banish (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="With a prayer you attempt to send a creature back to its home realm of existence."
          frequency="Spell 2 (Holy)"
          target="1 creature (+1 creatures for each higher spell tier) within 2 zones that is not native to the current realm"
          defense="Spirit"
          keywords="Escalation, Magical, Range"
          critical={
            <span>
              <span>
                Same as a success, but if the creature fails an{" "}
                <Link className="internal-link" to="/rules/combat#overcome">
                  overcome roll
                </Link>{" "}
                against this spell, then they can't return unless through other
                means
              </span>
            </span>
          }
          success="Returned to their home realm (overcome ends)"
          partial="Returned to their home realm (next turn ends)"
        />
      ),
    },
  ],
  [
    {
      title: "Holy Word (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="As you proclaim a divine word, you scour the souls of your foes with righteous wrath."
            frequency="Spell 3 (Holy)"
            target="All enemies within 1 zone"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="2 holy damage per spell tier"
            critical="Same as a success, but the target is banished (overcome ends)"
            success="If the target isn’t from this realm, then they’re banished to their home realm (next turn ends)"
            effect={
              <span>
                You and each ally within 1 zone gain 2{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>{" "}
                per spell tier (scene ends)
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const iceSpells = [
  [
    {
      title: "Rime Field (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You coat the ground in slick frost."
          frequency="Spell 0 (Ice)"
          target="1 zone within 2 zones"
          keywords="Magical, Range"
          duration="End of your next turn"
          effect={
            <span>
              Targeted zone becomes a{" "}
              <Link className="internal-link" to="/rules/combat#zone-types">
                difficult zone
              </Link>
            </span>
          }
        />
      ),
    },
    {
      title: "Snowball (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You shoot a foe with a freezing snowball."
          frequency="Spell 0 (Ice)"
          target="1 creature within 3 zones"
          defense="Guard"
          keywords="Magical, Range"
          damage="2 cold damage per your tier"
          critical={<span>Target's speed is halved (next turn ends)</span>}
        />
      ),
    },
  ],
  [
    {
      title: "Frost Armor (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You cover a creature in hardened ice that protects them while harming their foes."
          frequency="Spell 1 (Ice)"
          target="1 creature per spell tier in your zone"
          keywords="Magical"
          effect={
            <span>
              Target gains 2{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              per spell tier (scene ends), and the spell ends when the temporary
              hit points become 0. When a creature damages the target with a
              melee ability, the creature takes 2 cold damage per spell tier.
            </span>
          }
        />
      ),
    },
    {
      title: "Frozen Prison (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You encase your foes arms and legs in ice."
          frequency="Spell 1 (Ice)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          critical="seized (scene ends)"
          success={
            <span>
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              (next turn ends)
            </span>
          }
          partial={<span>Target's speed is halved (next turn ends)</span>}
        />
      ),
    },
    {
      title: "Ice Wall (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure a wall of chilling ice."
          frequency="Spell 1 (Ice)"
          keywords="Magical, Range"
          target="1 zone border per spell tier (borders must connect) within 2 zones"
          duration="Scene ends"
          effect={
            <span>
              Nothing can pass through the wall. Each zone border of the wall
              has defenses equal to 8 + double the spell tier and 4 hit points
              per spell tier. The wall has{" "}
              <Link
                className="internal-link"
                to="/rules/combat#resistances-and-weaknesses"
              >
                resistance
              </Link>{" "}
              to cold damage, but{" "}
              <Link
                className="internal-link"
                to="/rules/combat#resistances-and-weaknesses"
              >
                weakness
              </Link>{" "}
              to fire damage.
            </span>
          }
        />
      ),
    },
    {
      title: "Wintery Blast (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You explode a shard of ice that covers everything in frost."
          frequency="Spell 1 (Ice)"
          target="All creatures in 1 zone within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="2 cold damage per spell tier"
          effect={
            <span>
              Targeted zone becomes a{" "}
              <Link className="internal-link" to="/rules/combat#zone-types">
                difficult zone
              </Link>{" "}
              (scene ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Ice Storm (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash a storm of freezing air and hail."
          frequency="Spell 2 (Ice)"
          target="1 zone per spell tier within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={
            <span>
              <span>
                Targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zones and dangerous zones
                </Link>{" "}
                (1 cold damage per spell tier). When a creature takes this
                damage, make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against their Guard. On a success, the creature's speed is
                halved (next turn ends).
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Summon Ice Elemental (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a frozen spirit from the ice realm."
            frequency="Spell 2 (Ice)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon an ice elemental within 1 zone."
          />
          <Monster
            name="Ice Elemental"
            type="Large Elemental"
            hp="10 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            resistances="cold"
            weaknesses="fire"
            summons
            accordion
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
                damage: "triple ST cold damage",
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
                name: "Ice Spike",
                keywords: "ranged, weapon",
                target: "1 creature within 3 zones",
                defense: "Guard",
                damage: "double ST cold damage",
              },
            ]}
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Avalanche (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You summon a massive wave of bone chilling snow upon your foes."
            frequency="Spell 3 (Ice)"
            target="All creatures in 1 zone per spell tier within 5 zones"
            keywords="Escalation, Magical, Range"
            defense="Guard"
            damage="2 cold damage per spell tier"
            critical="Same as a success, but seized (scene ends)"
            success={
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends), and 1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                cold damage per spell tier while seized
              </span>
            }
            effect={
              <span>
                Targeted zone becomes a{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  difficult zone
                </Link>
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const illusionSpells = [
  [
    {
      title: "Distraction (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard
          accordion
          descriptor="With an illusory sound or image, you distract a foe."
          frequency="Spell 0 (Illusion)"
          trigger="You see a creature within 1 zone make a roll"
          keywords="Magical, Range"
          effect={
            <span>
              You impose <Modifier type="mf" count="1" /> on the triggering
              roll. The target is then immune to this spell for the{" "}
              <Link className="internal-link" to="/rules/adventuring#scene">
                scene
              </Link>
              .
            </span>
          }
        />
      ),
    },
    {
      title: "Imaginary Rend (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You make your foe see their nightmare lash out at them."
          frequency="Spell 0 (Illusion)"
          target="1 creature within 3 zones"
          defense="Spirit"
          keywords="Magical, Range"
          damage="2 psychic damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Dancing Duplicates (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create magical duplicates that swirl around the target, potentially causing attacks to miss."
          frequency="Spell 1 (Illusion)"
          target="1 creature per spell tier you can touch"
          keywords="Magical, Melee"
          duration="Scene ends"
          effect={
            <span>
              You create 3 duplicates that mirror the target. To use a harmful
              ability against the target, a creature must succeed on an{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome roll
              </Link>
              . On a failed overcome roll, a duplicate is destroyed, and the
              ability has no effect. Abilities that affect multiple targets
              ignore this spell.
            </span>
          }
        />
      ),
    },
    {
      title: "Dazzling Lights (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure faerie lights that distract weak minded foes."
          frequency="Spell 1 (Illusion)"
          target="All creatures in 1 zone within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#vulnerable">
                vulnerable
              </Link>{" "}
              (scene ends)
            </span>
          }
          success={
            <span>
              <Link className="internal-link" to="/conditions#vulnerable">
                vulnerable
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Illusionary Creature (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You create an illusion of a creature that you can speak through."
            frequency="Spell 1 (Illusion)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect={
              <span>You create an illusion of a creature within 1 zone.</span>
            }
          />
          <Monster
            name="Illusionary Creature"
            type="Medium Construct"
            hp="8 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            resistances="psychic"
            summons
            accordion
            actions={[
              {
                basic: true,
                name: "Illusionary Rend",
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
                defense: "Spirit",
                damage: "double ST psychic damage",
              },
              {
                basic: false,
                name: "Scary Visage",
                keywords: "magical",
                frequency: "Once per spell",
                target: "1d4+1 enemies in the illusionary creature’s zone",
                defense: "Spirit",
                critical: "hindered (scene ends)",
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
        </div>
      ),
    },
    {
      title: "Illusionary Wall (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You raise an illusion of an opaque wall made out of sturdy material such as stone or iron."
          frequency="Spell 1 (Illusion)"
          keywords="Magical, Range"
          target="1 zone border per spell tier (borders must connect) within 2 zones"
          duration="Scene ends"
          effect={
            <span>
              Choose creatures that can see through the wall. Others believe the
              wall is solid unless move through it, are told it's fake, or use
              the{" "}
              <Link className="internal-link" to="/combat-abilities#interact">
                interact
              </Link>{" "}
              maneuver. The creature can then succeed on an{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome roll
              </Link>{" "}
              to see through the illusion.
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Greater Invisibility (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You cloak a creature so they can’t be seen."
          frequency="Spell 2 (Illusion)"
          target="1 creature (+1 creatures for each higher spell tier) within your zone"
          keywords="Magical"
          duration="Scene ends"
          effect={
            <span>
              Target becomes{" "}
              <Link className="internal-link" to="/rules/combat#stealth">
                invisible
              </Link>
            </span>
          }
        />
      ),
    },
    {
      title: "Illusionary Prison (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You place a foe in a phantasmal prison of their worst nightmare."
            frequency="Spell 2 (Illusion)"
            target="1 creature within 3 zones"
            keywords="Escalation, Magical, Range"
            damage="4 psychic damage per spell tier"
            defense="Spirit"
            success="Seized (scene ends), and if the target escapes, they take 2 psychic damage per spell tier"
            partial={
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends)
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Living Nightmares (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure nightmarish illusions that terrify and attack your enemies."
            frequency="Spell 3 (Illusion)"
            target="All creatures in 1 zone per spell tier within 5 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="2 psychic damage per spell tier"
            critical="Same as a success, but ongoing damage increases to 2 per spell tier"
            success={
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (scene ends), and 1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                psychic damage per spell tier while hindered
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const lifeSpells = [
  [
    {
      title: "Minor Heal (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You infuse a nearby creature with life."
          frequency="Spell 0 (Life)"
          target="1 creature within your zone"
          keywords="Magical"
          effect="Target can spend a recovery"
        />
      ),
    },
    {
      title: "Stabilize (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You infuse a dying creature with life."
          frequency="Spell 0 (Life)"
          target={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#dying">
                unconscious
              </Link>{" "}
              creature within your zone
            </span>
          }
          keywords="Magical"
          effect={
            <span>
              Target <ToolTip preset="heals" /> equal to your tier
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Life Link (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You link your lifeforce with another."
          frequency="Spell 1 (Life)"
          target="1 creature per spell tier within your zone"
          keywords="Magical"
          duration="Scene ends"
          effect="Each time a target takes damage, they take half the damage and you take the same amount before resistances are applied."
        />
      ),
    },
    {
      title: "Mass Heal (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You infuse everyone with positive energy."
          frequency="Spell 1 (Life)"
          target="Each creature of your choice within your zone"
          keywords="Magical"
          effect={
            <span>
              Target can spend a recovery, but they instead{" "}
              <ToolTip preset="heal" /> 7 per spell tier
            </span>
          }
        />
      ),
    },
    {
      title: "Quick Heal (Maneuver)",
      actType: "Maneuver",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="With a word, you mend an ally’s wounds."
            frequency="Spell 1 (Life)"
            keywords="Magical, Range"
            target="1 creature within 1 zone"
            effect={
              <span>
                Target can spend a recovery, but they instead{" "}
                <ToolTip preset="heal" /> 8 per spell tier
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Restore (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You send positive energy to remove debilitations from an ally."
          frequency="Spell 1 (Life)"
          keywords="Magical"
          target="1 creature per spell tier within your zone"
          effect="End 1 condition affecting the target"
        />
      ),
    },
  ],
  [
    {
      title: "Emergency Revival (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard
          accordion
          descriptor="With a word, you save an ally from near death."
          frequency="Spell 2 (Life)"
          trigger={
            <span>
              You see a creature within 1 zone reduced to 0 hit points
            </span>
          }
          keywords="Magical, Range"
          effect={
            <span>
              Triggering creature can spend a recovery, but they instead{" "}
              <ToolTip preset="heal" /> 8 per spell tier, or heal 1 if they
              don't spend a recovery
            </span>
          }
        />
      ),
    },
    {
      title: "Regeneration (Maneuver)",
      actType: "Maneuver",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You fill a creature with energy that export constantly heals dire wounds."
            frequency="Spell 2 (Life)"
            target="1 creature (+1 creatures for each higher spell tier) within your zone"
            keywords="Magical"
            effect={
              <span>
                <span>
                  If <ToolTip preset="shaken" />, they <ToolTip preset="heal" />{" "}
                  1 per spell tier. While shaken, they gain{" "}
                  <ToolTip preset="regen" /> equal to the spell tier.
                </span>
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Wellspring of Life (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You infuse a creature with enough positive energy that they exude healing energy."
            frequency="Spell 3 (Life)"
            target="1 creature within 2 zones"
            keywords="Aura, Magical, Range"
            effect={
              <span>
                Target ends all negative conditions affecting them, and gains{" "}
                <ToolTip preset="regen" /> 2 per the spell tier while{" "}
                <ToolTip preset="shaken" />. At the start of their turn, all
                shaken allies within their zone also heal this same amount.
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const lightSpells = [
  [
    {
      title: "Blinding Flash (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="With a flash of light, you attempt to blind your foes."
          frequency="Spell 0 (Light)"
          target="1d4+1 enemies in your zone"
          keywords="Magical"
          defense="Guard"
          critical={
            <span>
              <Link className="internal-link" to="/rules/combat#stealth">
                blinded
              </Link>{" "}
              (next turn ends)
            </span>
          }
          success={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Solar Ray (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash a ray of blinding light at a foe."
          frequency="Spell 0 (Light)"
          target="1 creature within 3 zones"
          defense="Guard"
          damage="2 fire damage per your tier"
          keywords="Magical, Range"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Revealing Light (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure starlight that reveals hidden foes."
          frequency="Spell 1 (Light)"
          target="1 zone per spell tier within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={
            <span>
              Any{" "}
              <Link className="internal-link" to="/rules/combat#hidden">
                hidden
              </Link>{" "}
              creatures become visibile while within the targeted zones
            </span>
          }
        />
      ),
    },
    {
      title: "Starfire (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash blinding starlight at your foes"
          frequency="Spell 1 (Light)"
          target="All creatures in 1 zone within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="2 fire damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Sunlight (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You brighten an area."
            frequency="Spell 1 (Light)"
            keywords="Magical, Range"
            duration="Scene ends"
            target="1 zone within 2 zones"
            effect="Targeted zones' lighting becomes normal"
          />
        </div>
      ),
    },
    {
      title: "Warding Flare (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard
          accordion
          descriptor="You use a burning flash to deter a foe’s attack."
          frequency="Spell 1 (Light)"
          keywords="Magical, Range"
          trigger={
            <span>
              <span>
                You see a creature within 1 zone make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
              </span>
            </span>
          }
          effect="Triggering attack roll takes +1 misfortune and the creature takes 2 fire damage per spell tier"
        />
      ),
    },
  ],
  [
    {
      title: "Starbeam (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You channel blinding sunlight in your hand and fire it off at your foes."
          frequency="Spell 2 (Light)"
          target="1 creature within 2 zones"
          duration="Focus for the scene"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="2 fire damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/rules/combat#stealth">
                blinded
              </Link>{" "}
              (next turn ends)
            </span>
          }
          effect={
            <span>
              <span>
                When you focus on this spell, you can repeat this spell’s{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against a creature within 2 zones
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Wall of Light (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a wall of blinding radiance."
            frequency="Spell 2 (Light)"
            target="1 zone border per spell tier (borders must connect) within 2 zones"
            keywords="Magical, Range"
            duration="Scene ends"
            effect={
              <span>
                <span>The wall has the following properties:</span>
                <ul>
                  <li>
                    <span>Creatures can’t see through the wall</span>
                  </li>
                  <li>
                    <span>
                      As a maneuver, make an{" "}
                      <Link
                        className="internal-link"
                        to="/rules/combat#attack-roll"
                      >
                        attack roll
                      </Link>{" "}
                      against a creature's Guard within 2 zones of the wall,
                      dealing 2 fire damage per spell tier from a beam of light.
                    </span>
                  </li>
                  <li>
                    Make an attack roll against the Guard of any creature that
                    enters or starts their turn within a zone touching the wall.
                    On a success, the target is{" "}
                    <Link className="internal-link" to="/rules/combat#stealth">
                      blinded
                    </Link>{" "}
                    (next turn ends).
                  </li>
                </ul>
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Supernova (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a miniature sun to only explode it in a blinding display of light."
            frequency="Spell 3 (Light)"
            target="All creatures in 1 zone within 5 zones"
            defense="Guard"
            damage="3 fire damage per spell tier"
            keywords="Escalation, Magical, Range"
            critical={
              <span>
                Same as a success, but also{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                while blinded
              </span>
            }
            success={
              <span>
                <Link className="internal-link" to="/rules/combat#stealth">
                  blinded
                </Link>{" "}
                (scene ends)
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const natureSpells = [
  [
    {
      title: "Savage Claw (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You lash out with your hand as it briefly transforms into a claw."
          frequency="Spell 0 (Nature)"
          target={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#engaged">
                engaged
              </Link>{" "}
              creature
            </span>
          }
          keywords="Magical, Melee"
          defense="Guard"
          damage="3 physical damage per your tier"
          critical={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              physical damage per your tier
            </span>
          }
        />
      ),
    },
    {
      title: "Vine Whip (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure a vine that lashes at the target."
          frequency="Spell 0 (Nature)"
          target="1 creature within 3 zones"
          defense="Guard"
          damage="2 physical damage per your tier"
          keywords="Magical, Range"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Entangle (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You magically create an area of overgrown roots that wrap around anyone in the area."
          frequency="Spell 1 (Nature)"
          target="1 zone per spell tier within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={
            <span>
              <span>
                Targeted zones become difficult zones. When a creature enters or
                starts their turn in a targeted zone, make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against their Guard, and on a success, the creature becomes
                seized (scene ends).
              </span>
            </span>
          }
        />
      ),
    },
    {
      title: "Shielding Tree (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a tree that protects you or your allies with its branches."
          frequency="Spell 1 (Nature)"
          duration="Scene ends"
          keywords="Magical, Range"
          effect="You create a tree within 1 zone that has 6 hit points per spell tier and defenses of 8 + double the spell tier. If a friendly creature takes damages within the tree's zone, the tree instead takes the damage. If the damage reduces the tree to 0 hit points, the tree withers away and any remaining damage is dealt to the original target."
        />
      ),
    },
    {
      title: "Summon Nature Spirit (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a primal spirit, either a beast or plant-like creature."
            frequency="Spell 1 (Nature)"
            keywords="Magical, Range, Summon"
            duration="Focus until scene ends"
            effect="You summon a primal spirit (air, water, land, or plant) within 1 zone."
          />
          <Monster
            name="Nature Spirit"
            type="Medium Animal or Plant"
            hp="8 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            speeds="fly 1 (air only), swim 1 (water only)"
            summons
            accordion
            traits={[
              {
                name: "Aquatic (water only)",
                description: "Spirit can breath underwater.",
              },
              {
                name: "Reach (plant only)",
                description: (
                  <span>
                    Spirit treats anyone within their zone as{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>
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
                  "double ST physical damage or triple ST physical damage (land only)",
              },
            ]}
            reactions={[
              {
                name: "Nature's Fury",
                trigger:
                  "Nature spirit sees ally within their zone take damage",
                effect: (
                  <span>
                    "Nature spirit can{" "}
                    <Link
                      className="internal-link"
                      to="/combat-abilities#charge"
                    >
                      charge
                    </Link>{" "}
                    to use slam"
                  </span>
                ),
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Wild Morph (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You alter a creature’s biology with that of an animal."
          frequency="Spell 1 (Nature)"
          keywords="Magical"
          duration="Scene ends"
          target="1 creature per spell tier within your zone"
          effect={
            <span>
              <span>Targets gain one of the same benefits:</span>
              <ul>
                <li>
                  <span>Breathe underwater and swim speed 1</span>
                </li>
                <li>
                  <span>
                    <ToolTip preset="night" />
                  </span>
                </li>
                <li>
                  <span>Climb speed 1</span>
                </li>
              </ul>
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Primal Transformation (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You transform a creature into an animal."
          frequency="Spell 2 (Nature)"
          keywords="Magical, Range, Shapeshift"
          duration="Scene ends"
          target="1 creature within 2 zones"
          effect={
            <span>
              <span>
                You transform the target into a large or smaller creature of
                your choice. If the target is unwilling, then the spell only
                transforms them for the scene (overcome ends) on a successful{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against the target’s Spirit. While transformed, they gain:
              </span>
              <ul>
                <li>
                  <span>
                    4{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#temporary-hit-points"
                    >
                      temporary hit points
                    </Link>{" "}
                    per the spell tier
                  </span>
                </li>
                <li>
                  <span>Guard = 10 + double the spell tier</span>
                </li>
                <li>
                  <span>
                    Natural melee weapons deal physical damage depending on the
                    animal’s size: 2 for small, 3 for medium, or 4 for large
                  </span>
                </li>
              </ul>
            </span>
          }
        />
      ),
    },
    {
      title: "Summon Faerie (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a faerie warrior from the green realm."
            frequency="Spell 2 (Nature)"
            keywords="Magical, Range, Summon"
            duration="Focus until scene ends"
            effect="You summon a faerie warrior within 1 zone."
          />
          <Monster
            name="Faerie Warrior"
            type="Small Faerie"
            hp="8 per spell tier (ST)"
            evn="10 + PB"
            mgt="8 + PB"
            res="10 + PB"
            pb="double ST"
            speeds="fly 1"
            summons
            accordion
            actions={[
              {
                basic: true,
                name: "Sleepy Bow",
                keywords: "range, weapon",
                target: "1 creature within 3 zones",
                defense: "Guard",
                damage: "double ST physical damage",
                success: <span>Target's speed is halved (next turn ends)</span>,
              },
              {
                basic: false,
                name: "Faerie Charm",
                keywords: "magical, range",
                target: "1 creature per spell tier within 3 zones",
                frequency: "Once per spell",
                defense: "Spirit",
                critical: <span>The success effect lasts for the scene</span>,
                success: (
                  <span>
                    Target can't use hostile abilities against you or your
                    allies (next turn ends), but this effect ends early if you
                    or your allies harm the target.
                  </span>
                ),
              },
            ]}
            maneuvers={[
              {
                name: "Faerie Glamour",
                keywords: "magical",
                effect: (
                  <span>
                    Faerie warrior becomes{" "}
                    <Link className="internal-link" to="/rules/combat#stealth">
                      invisible
                    </Link>{" "}
                    (next turn ends), but this effect ends early if they use a
                    hostile ability
                  </span>
                ),
              },
            ]}
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Summon Kaiju (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a kaiju, a massive, rampaging monster whose arrival usually means doom for nearby civilizations."
            frequency="Spell 3 (Nature)"
            keywords="Magical, Range, Summon"
            duration="Focus until scene ends"
            effect="You summon a kaiju within 3 zones."
          />
          <Monster
            name="Kaiju"
            type="Colossal Monstrosity"
            hp="10 per spell tier (ST)"
            evn="12 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            speeds="land 2"
            summons
            accordion
            actions={[
              {
                basic: true,
                name: "Bite",
                keywords: "melee, weapon",
                target: (
                  <span>
                    1 creature{" "}
                    <Link className="internal-link" to="/rules/combat#engaged">
                      engaged
                    </Link>{" "}
                    to the kaiju
                  </span>
                ),
                defense: "Guard",
                damage: "4 physical damage per ST",
                success: (
                  <span>
                    Target is swallowed if they are huge or smaller. While
                    swallowed, a target is{" "}
                    <Link className="internal-link" to="/rules/combat#stealth">
                      blinded
                    </Link>
                    ,{" "}
                    <Link className="internal-link" to="/conditions#seized">
                      seized
                    </Link>
                    , and takes 1{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#ongoing-damage"
                    >
                      ongoing
                    </Link>{" "}
                    toxic damage per ST. If a swallowed creature deals 4 or more
                    damage per ST on a single turn, the kaiju throws up the
                    target.
                  </span>
                ),
              },
            ]}
          />
        </div>
      ),
    },
  ],
];
export const protectionSpells = [
  [
    {
      title: "Floating Shield (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure a magical shield that follows an ally."
          frequency="Spell 0 (Protection)"
          target="1 creature within 1 zone"
          keywords="Magical, Range"
          duration="Start of your next turn"
          effect="Target gains resistance to all damage, but the spell ends after the target takes damage."
        />
      ),
    },
    {
      title: "Quick Ward (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a magical barrier around yourself."
          frequency="Spell 0 (Protection)"
          trigger={
            <span>
              <span>
                You see a creature make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against your Guard
              </span>
            </span>
          }
          effect="Triggering attack roll against only you takes +1 misfortune"
          keywords="Magical"
        />
      ),
    },
  ],
  [
    {
      title: "Deflecting Mirror (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create an arcane mirror to make the aggressor feel their own power."
          frequency="Spell 1 (Protection)"
          trigger="You see a creature deal damage to another creature within 1 zone"
          keywords="Magical, Range"
          effect="The attacked creature takes half of the triggering damage, and the attacker takes arcane damage equal to half of the triggering damage."
        />
      ),
    },
    {
      title: "Greater Ward (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You guard a creature with sigils of protection."
          frequency="Spell 1 (Protection)"
          duration="Scene ends"
          keywords="Magical"
          target="1 creature per spell tier within your zone"
          effect={
            <span>
              Creatures take <Modifier type="mf" count="1" /> on{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack rolls
              </Link>{" "}
              against the target
            </span>
          }
        />
      ),
    },
    {
      title: "Resist (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You protect a creature from harmful elements."
            frequency="Spell 1 (Protection)"
            keywords="Magical"
            target="1 creature per spell tier within your zone"
            duration="Scene ends"
            effect={
              <span>
                Choose a damage type and the target gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#resistances-and-weaknesses"
                >
                  resistance
                </Link>{" "}
                to it
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Sigil of Peace (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You place an ally under your protection."
          frequency="Spell 1 (Protection)"
          keywords="Magical"
          target="1 creature per spell tier within your zone"
          duration="Scene ends"
          effect={
            <span>
              When a creature uses a harmful ability against the target, except
              for abilities that affect a zone or multiple targets, they must
              succeed on an{" "}
              <Link className="internal-link" to="/rules/combat#overcome">
                overcome roll
              </Link>{" "}
              or waste their ability. If the target uses a harmful ability, then
              this spell ends.
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Antimagic Zone (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create an area where magic can’t function."
          frequency="Spell 2 (Protection)"
          keywords="Magical, Range"
          duration="Scene ends"
          target="1 zone (+1 zones for each higher spell tier) within 2 zones"
          effect="Within the targeted zone, both existing magical effects and further magical abilities of this spell’s tier or lower have no effect."
        />
      ),
    },
    {
      title: "Spell Ward (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You protect a creature from harmful magic."
            frequency="Spell 2 (Protection)"
            duration="Scene ends"
            keywords="Magical"
            target="1 creature (+1 creatures for each higher spell tier) in your zone"
            effect={
              <span>
                Target gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#resistances-and-weaknesses"
                >
                  resistance
                </Link>{" "}
                to all damage from magical abilities
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Invulnerable (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You shroud an ally in powerful protection that also hurts their attackers."
            frequency="Spell 3 (Protection)"
            duration="Scene ends"
            keywords="Magical, Range"
            target="1 creature (+1 creatures for each higher spell tier) within 1 zone"
            effect={
              <span>
                Target gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#resistances-and-weaknesses"
                >
                  resistance
                </Link>{" "}
                to all damage. Whenever a creature deals damage to the target,
                they take arcane damage equal to double the spell tier.
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const shadowSpells = [
  [
    {
      title: "Dim the Lights (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You temporarily darken a nearby area."
          frequency="Spell 0 (Shadow)"
          target="1 zone within 2 zones"
          keywords="Magical, Range"
          duration="End of your next turn"
          effect="You reduce the lighting of an area to darkness."
        />
      ),
    },
    {
      title: "Shadow Dart (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You fire a shadowy projectile that distracts your foe with imaginary threats."
          frequency="Spell 0 (Shadow)"
          target="1 creature within 3 zones"
          defense="Spirit"
          keywords="Magical, Range"
          damage="2 necrotic damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#vulnerable">
                vulnerable
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Animate Shadow (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You bring to life the shadow of a friend or enemy to aid you."
            frequency="Spell 1 (Shadow)"
            duration="Focus until scene ends"
            target="1 creature within 1 zone"
            keywords="Magical, Range, Summon"
            effect="Target’s shadow becomes under your control."
          />
          <Monster
            name="Living Shadow"
            type="Medium Undead"
            hp="8 per spell tier (ST)"
            evn="10 + PB"
            mgt="10 + PB"
            res="8 + PB"
            pb="double ST"
            resistances="necrotic"
            weaknesses="holy"
            vision="night"
            summons
            accordion
            traits={[
              {
                name: "Shadow Enmity",
                description: (
                  <span>
                    Living shadow gains <Modifier type="f" count="1" /> on{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack rolls
                    </Link>{" "}
                    against its original owner.
                  </span>
                ),
              },
            ]}
            actions={[
              {
                basic: true,
                name: "Shadow Claw",
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
                defense: "Spirit",
                damage: "double ST necrotic damage",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Blind (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You cover a foe’s eyes in magical darkness to blind them."
          frequency="Spell 1 (Shadow)"
          target="1 creature per spell tier within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          partial={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
          success={
            <span>
              <Link className="internal-link" to="/rules/combat#stealth">
                blinded
              </Link>{" "}
              (next turn ends)
            </span>
          }
          critical={<span>blinded (scene ends)</span>}
        />
      ),
    },
    {
      title: "Darkness (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You darken an area."
          frequency="Spell 1 (Shadow)"
          target="1 zone per spell tier within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect="Targeted zones' lighting becomes darkness"
        />
      ),
    },
    {
      title: "Wall of Gloom (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a wall of inky darkness that whispers terrors to those that dare approach."
          frequency="Spell 1 (Shadow)"
          target="1 zone border per spell tier (borders must connect) within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={
            <span>
              The wall is made of magical darkness, and when a creature passes
              through the wall, they take 2 necrotic damage per spell tier.
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Shadow Assault (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure dozens of shadowy duplicates that swarm the battlefield around you."
            frequency="Spell 2 (Shadow)"
            target="1 zone per spell tier within 2 zones"
            keywords="Magical, Range"
            effect={
              <span>
                Targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (1 necrotic damage per spell tier) that only hurts enemies. Your
                duplicates give you{" "}
                <Link className="internal-link" to="/rules/combat#cover">
                  cover
                </Link>{" "}
                in the targeted zones.
              </span>
            }
            duration="Scene ends"
          />
        </div>
      ),
    },
    {
      title: "Umbral Armor (Maneuver)",
      actType: "Maneuver",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You surround an ally with shadows that shroud them but also lash out at attackers."
            frequency="Spell 2 (Shadow)"
            duration="Scene ends"
            keywords="Magical"
            target="1 creature (+1 creatures per higher spell tier) within your zone"
            effect={
              <span>
                Target gains{" "}
                <Link className="internal-link" to="/rules/combat#cover">
                  cover
                </Link>
                . When a creature damages the target with a melee ability, they
                take 2 necrotic damage per spell tier.
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Hungry Darkness (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You summon magical darkness from the shadow realm that weakens and consumes life."
            frequency="Spell 3 (Shadow)"
            target="1 zone per spell tier within 5 zones"
            keywords="Magical, Range"
            effect={
              <span>
                Targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (1 necrotic damage per spell tier) filled with magical darkness.
                When a creature takes this damage, make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack rolls
                </Link>{" "}
                against their Spirit, and on a success, they are{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (next turn ends) by shadowy tendrils.
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const teleportationSpells = [
  [
    {
      title: "Dimensional Shutter (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You undo space within a foe."
          frequency="Spell 0 (Teleportation)"
          target="1 creature within 3 zones"
          defense="Spirit"
          keywords="Magical, Range"
          damage="2 arcane damage per your tier"
          critical={
            <span>
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                Teleported
              </Link>{" "}
              up to 1 zone away on a standing surface
            </span>
          }
        />
      ),
    },
    {
      title: "Shift Object (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You teleport a small item to an ally."
          frequency="Spell 0 (Teleportation)"
          target="1 willing creature within 1 zone"
          effect={
            <span>
              One medium or smaller object that you hold{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleports
              </Link>{" "}
              to the target’s hand. If they can’t hold the object, then it falls
              to the ground.
            </span>
          }
          keywords="Magical, Range"
        />
      ),
    },
  ],
  [
    {
      title: "Away (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You forcibly teleport enemies away."
            frequency="Spell 1 (Teleportation)"
            target="1 creature within 2 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="4 arcane damage per spell tier"
            success={
              <span>
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  Teleported
                </Link>{" "}
                to a standing surface up to a number of zones away equal to the
                spell tier
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Dimensional Step (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You take a step through space as you teleport."
          frequency="Spell 1 (Teleportation)"
          target="Up to 1 zone per spell tier"
          keywords="Magical, Range"
          effect={
            <span>
              You{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              up to anywhere within the targeted zone
            </span>
          }
        />
      ),
    },
    {
      title: "Recall Point (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You mark an area as a safe spot to teleport back to in case of danger."
          frequency="Spell 1 (Teleportation)"
          target="Your zone"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={
            <span>
              Choose willing creatures within your zone equal to the spell tier.
              During the duration, you can end the spell by using a maneuver to{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              chosen creatures to the targeted zone, even without line of sight.
            </span>
          }
        />
      ),
    },
    {
      title: "Translocative Swap (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You switch places with a creature through teleportation."
          frequency="Spell 1 (Teleportation)"
          target="1 creature within 1 zone per spell tier"
          keywords="Magical, Range"
          effect={
            <span>
              You and the target{" "}
              <Link
                className="internal-link"
                to="/rules/combat#special-movement"
              >
                teleport
              </Link>{" "}
              to switch places. If the target is unwilling, you must succeed on
              an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              against the target’s Spirit.
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Create Portal (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You create temporary teleportation portals that others can travel through."
            frequency="Spell 2 (Teleportation)"
            target="Your zone and another zone within a number of zones equal to the spell tier"
            keywords="Magical, Range"
            effect={
              <span>
                Create a portal in each of the targeted zones. Creatures of your
                choice can{" "}
                <Link className="internal-link" to="/combat-abilities#move">
                  move
                </Link>{" "}
                to enter a portal to teleport to the other side.
              </span>
            }
            duration="Scene ends"
          />
        </div>
      ),
    },
    {
      title: "Far Step (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You teleport far away."
            frequency="Spell 2 (Teleportation)"
            target="Up to 3 zones per spell tier"
            keywords="Magical, Range"
            effect={
              <span>
                You{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleport
                </Link>{" "}
                anywhere within the target zones and can bring a willing
                creature with you.
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Hurl Through Reality (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You teleport a foe through multiple realms at a pace beyond comprehension."
            frequency="Spell 3 (Teleportation)"
            target="1 creature within 3 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            damage="4 arcane damage per spell tier. If this damage kills the target, then their body is lost within a random realm"
            critical={
              <span>
                Same as a success, but target becomes{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (scene ends) when they reappear
              </span>
            }
            success="Target disappears and then reappears at the end of their next turn"
          />
        </div>
      ),
    },
  ],
];
export const timeSpells = [
  [
    {
      title: "Chronal Adjustment (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You temporarily manipulate time around someone."
          frequency="Spell 0 (Time)"
          target="1 creature within 1 zone"
          duration="Next turn ends"
          keywords="Magical, Range"
          effect={
            <span>
              <span>
                Choose to speed up to slow down the target. If the target is
                unwilling, you must succeed on an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against their Spirit
              </span>
              <ul>
                <li>
                  <span>
                    <i>Speed Up:</i> Target’s speed is doubled
                  </span>
                </li>
                <li>
                  <span>
                    <i>Slow Down:</i> Target's speed is halved
                  </span>
                </li>
              </ul>
            </span>
          }
        />
      ),
    },
    {
      title: "Temporal Harm (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You rapidly age and deage a foe as their body suffers from erratic time fluctuations."
          frequency="Spell 0 (Time)"
          target="1 creature within 3 zones"
          defense="Spirit"
          damage="2 arcane damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (next turn ends)
            </span>
          }
          keywords="Magical, Range"
        />
      ),
    },
  ],
  [
    {
      title: "Delay Consequences (Reaction)",
      actType: "Reaction",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You warp time so an ally’s incoming pain is delayed."
            frequency="Spell 1 (Time)"
            trigger={
              <span>
                You see a creature within 1 zone affected by an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>
              </span>
            }
            keywords="Magical, Range"
            effect="Target isn’t affected by the triggering attack roll until the end of their next turn"
          />
        </div>
      ),
    },
    {
      title: "Haste (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You speed up time around an ally to make them impossibly fast."
          frequency="Spell 1 (Time)"
          target="1 creature per spell tier in your zone"
          keywords="Magical"
          duration="Scene ends"
          effect={<span>Target gains an extra maneuver each turn.</span>}
        />
      ),
    },
    {
      title: "Slow (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You slow down time around a foe."
          frequency="Spell 1 (Time)"
          target="1 creature per spell tier within 2 zones"
          keywords="Magical, Range"
          defense="Spirit"
          partial={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (next turn ends)
            </span>
          }
          success={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (scene ends)
            </span>
          }
          critical={
            <span>
              Same as a success, and{" "}
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              while dazed
            </span>
          }
        />
      ),
    },
    {
      title: "Temporal Duplicate (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You manifest another version of yourself from another timeline to aid you."
          frequency="Spell 1 (Time)"
          duration="Scene ends"
          keywords="Magical, Range"
          effect={
            <span>
              You create a translucent duplicate of yourself within 1 zone. The
              duplicate’s defenses equal 10 + double the spell tier and hit
              points equal 4 per spell tier. You can see and hear through your
              duplicate and use your abilities from your duplicate’s position.
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Chronal Field (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You either spped up or slow down time in an area"
          frequency="Spell 2 (Time)"
          target="1 zone per spell tier within 2 zones"
          duration="Scene ends"
          keywords="Magical, Range"
          effect={
            <span>
              <span>Choose how to affect time in the targeted zones:</span>
              <ul>
                <li>
                  <span>
                    <i>Hasten:</i> Creatures that start their turn in the
                    targeted zones gain an extra maneuver that turn.
                  </span>
                </li>

                <li>
                  <span>
                    <i>Slow:</i> When a creature enters or starts their turn in
                    the targeted zones, make an{" "}
                    <Link
                      className="internal-link"
                      to="/rules/combat#attack-roll"
                    >
                      attack roll
                    </Link>{" "}
                    against their Spirit. On a success, they are{" "}
                    <Link className="internal-link" to="/conditions#dazed">
                      dazed
                    </Link>{" "}
                    (next turn ends).
                  </span>
                </li>
              </ul>
            </span>
          }
        />
      ),
    },
    {
      title: "Temporal Stasis (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You freeze a creature within time, holding them in place."
            frequency="Spell 2 (Time)"
            target="1 creature (+1 creatures per higher tier) within 2 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            critical="The success's effect lasts for the scene"
            success="Time pauses around the target (next turn ends), but ends early if they take damage. Any current effects already on the target are paused until the spell ends."
            partial={
              <span>
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends) and{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                while dazed
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Time Stop (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You briefly stop time for everyone except yourself."
            frequency="Spell 3 (Time)"
            keywords="Magical"
            effect="Time stops for everyone except you for two more turns. Current conditions on you persist, and you can use abilities that only affect yourself. Abilities affecting others take effect only after time resumes, such as a fireball exploding only after this spell ends."
          />
        </div>
      ),
    },
  ],
];
export const toxicSpells = [
  [
    {
      title: "Acid Spray (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You launch a spray of acid at multiple foes."
          frequency="Spell 0 (Toxic)"
          target="1d4+1 enemies in your zone"
          defense="Guard"
          damage="1 acid damage per your tier"
          keywords="Magical"
        />
      ),
    },
    {
      title: "Venomous Spit (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You throw toxic venom at a foe."
          frequency="Spell 0 (Toxic)"
          target="1 creature within 3 zones"
          defense="Guard"
          damage="2 toxic damage per your tier"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
          keywords="Magical, Range"
        />
      ),
    },
  ],
  [
    {
      title: "Acid Rain (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You unleash acid rain from the sky."
            frequency="Spell 1 (Toxic)"
            target="1 zone per spell tier within 2 zones"
            keywords="Magical, Range"
            duration="Scene ends"
            effect={
              <span>
                Targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (1 toxic damage per spell tier). When a creature takes this
                damage, make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against their Guard, and on a success, the creature becomes{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends).
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Corrosive Arrow (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You shoot a bolt of burning acid."
          frequency="Spell 1 (Toxic)"
          target="1 creature within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="4 toxic damage per spell tier"
          success={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              toxic damage per spell tier
            </span>
          }
        />
      ),
    },
    {
      title: "Paralyzing Sting (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="With a touch, you magically inject your foe with paralyzing venom."
          frequency="Spell 1 (Toxic)"
          target={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#engaged">
                engaged
              </Link>{" "}
              creature
            </span>
          }
          keywords="Escalation, Magical, Melee"
          defense="Guard"
          damage="5 toxic damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Toxic Burst (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash a blast of poisonous fumes that infect your enemies."
          frequency="Spell 1 (Toxic)"
          target="All creatures in 1 zone within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Guard"
          damage="2 toxic damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Corrosive Spray (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You spray burning acid from your fingertips."
          frequency="Spell 2 (Toxic)"
          target="All enemies in your zone"
          defense="Guard"
          damage="2 toxic damage per spell tier"
          keywords="Escalation, Magical"
          success={
            <span>
              1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              toxic damage per spell tier and{" "}
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              while taking this ongoing damage
            </span>
          }
        />
      ),
    },
    {
      title: "Poison Cloud (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a deadly cloud of venomous vapor."
            frequency="Spell 2 (Toxic)"
            target="1 zone per spell tier within 2 zones"
            keywords="Magical, Range"
            duration="Scene ends"
            effect={
              <span>
                Targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (1 toxic damage per spell tier). When a creature takes this
                damage, make an{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against their Guard, and on a success, they are{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                (next turn ends). On your turn, you can spend a maneuver to move
                each cloud up to 1 zone.
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Ravenous Plague (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You infect an enemy with a sickness that quickly eats them away from the inside and can possibly infect others."
            frequency="Spell 3 (Toxic)"
            target="1 creature within 5 zones"
            defense="Guard"
            damage="4 toxic damage per spell tier"
            effect={
              <span>
                If this spell kills the target, then you can infect another
                creature within the same zone as the previous target. Repeat
                this spell’s{" "}
                <Link className="internal-link" to="/rules/combat#attack-roll">
                  attack roll
                </Link>{" "}
                against the new target.
              </span>
            }
            keywords="Escalation, Magical, Range"
            success={
              <span>
                1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                toxic damage per spell tier
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const unholySpells = [
  [
    {
      title: "Hellfire Scorch (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You burn a foe’s soul with corrupting flames."
          frequency="Spell 0 (Unholy)"
          target="1 creature within 3 zones"
          defense="Spirit"
          damage="2 unholy damage per your tier"
          keywords="Magical, Range"
          critical={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Underworld Grasp (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You summon forth grasping hands of sinners to capture your enemies."
          frequency="Spell 0 (Unholy)"
          target="1d4+1 enemies in your zone"
          defense="Spirit"
          success={
            <span>
              <Link className="internal-link" to="/conditions#seized">
                seized
              </Link>{" "}
              (next turn ends)
            </span>
          }
          critical="Same as a success, and 1 unholy damage per your tier"
          keywords="Magical"
        />
      ),
    },
  ],
  [
    {
      title: "Bane (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You place a sigil of the lower realms on a foe, marking them for damnation."
            frequency="Spell 1 (Unholy)"
            target="1 creature per spell tier within 2 zones"
            keywords="Escalation, Magical, Range"
            defense="Spirit"
            critical={
              <span>
                Same as a success, and{" "}
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                while marked
              </span>
            }
            success="Marked (scene ends)"
            partial="Marked (next turn ends). While the marked target takes damage, they take additional damage equal to the spell tier once per turn"
          />
        </div>
      ),
    },
    {
      title: "Descrating Blast (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You unleash hellfire that curses the souls of your enemies."
          frequency="Spell 1 (Unholy)"
          target="All creatures in 1 zone within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          damage="2 unholy damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#hindered">
                hindered
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
    {
      title: "Profane Weapon (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You touch a weapon to curse it with profane energy."
          frequency="Spell 1 (Unholy)"
          target="1 weapon in your zone"
          keywords="Magical"
          duration="Scene ends"
          effect={
            <span>
              When a creature uses the target weapon to{" "}
              <Link className="internal-link" to="/combat-abilities#strike">
                strike
              </Link>
              , they deal unholy damage instead of the weapon's normal damage
              type, and on a critical success, the target takes 1{" "}
              <Link className="internal-link" to="/rules/combat#ongoing-damage">
                ongoing
              </Link>{" "}
              unholy damage per spell tier.
            </span>
          }
        />
      ),
    },
    {
      title: "Visions of Sin (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You overwhelm a foe with their past transgressions."
          frequency="Spell 1 (Unholy)"
          target="1 creature within 2 zones"
          keywords="Escalation, Magical, Range"
          defense="Spirit"
          damage="4 unholy damage per spell tier"
          success={
            <span>
              <Link className="internal-link" to="/conditions#dazed">
                dazed
              </Link>{" "}
              (next turn ends)
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Summon Fiend (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a demon from the lower realms."
            frequency="Spell 2 (Unholy)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon a demon within 1 zone."
          />
          <Monster
            name="Demon"
            type="Large Fiend"
            hp="10 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            vision="night"
            resistances="unholy"
            weaknesses="holy"
            summons
            accordion
            actions={[
              {
                basic: true,
                name: "Corrupting Rend",
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
                damage: "triple ST unholy damage",
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
            reactions={[
              {
                name: "Death Throes",
                keywords: "magical",
                target: "1d4+1 enemies within the demon's zone",
                defense: "Spirit",
                damage: "double ST unholy damage",
                trigger: "Demon dies",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Wall of Sinners (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a wall with spirits of the damned that tempt others to suffer the same fate."
            frequency="Spell 2 (Unholy)"
            target="1 zone border per spell tier (borders must connect) within 2 zones"
            keywords="Magical, Range"
            duration="Scene ends"
            effect={
              <span>
                <span>
                  None can can pass through the wall. Each zone border of the
                  wall has defenses equal to 10 + double spell tier and 5 hit
                  points per spell tier. When a creature enters or starts their
                  turn in a zone touching the wall, make an{" "}
                  <Link
                    className="internal-link"
                    to="/rules/combat#attack-roll"
                  >
                    attack roll
                  </Link>{" "}
                  against their Spirit. On a success, the target must use a
                  maneuver to{" "}
                  <Link className="internal-link" to="/combat-abilities#move">
                    move
                  </Link>{" "}
                  up to the wall, and then take 2 unholy damage per spell tier.
                </span>
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Blasphemous Word (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="After you utter a damned word, you scourge the souls of your foes with infernal wrath."
            frequency="Spell 3 (Unholy)"
            target="All enemies within 1 zone"
            defense="Spirit"
            damage="2 unholy damage per spell tier, and if this damage kills the target, then their soul is dragged to the lower realms."
            keywords="Escalation, Magical, Range"
            critical="Same as a success, but hindered (scene ends)"
            success={
              <span>
                <Link className="internal-link" to="/conditions#hindered">
                  hindered
                </Link>{" "}
                (next turn ends), and{" "}
                <Link className="internal-link" to="/conditions#dazed">
                  dazed
                </Link>{" "}
                while hindered
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const warSpells = [
  [
    {
      title: "Bladed Armor (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure spectral spikes on your armor."
          frequency="Spell 0 (War)"
          duration="Next turn ends"
          effect="When you take damage from a melee ability, the attacker takes 1 physical damage per your tier."
          keywords="Magical"
        />
      ),
    },
    {
      title: "Empowered Strike (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You attack with a magically empowered weapon."
          frequency="Spell 0 (War)"
          effect={
            <span>
              <Link className="internal-link" to="/combat-abilities#strike">
                Strike
              </Link>{" "}
              and you deal additional damage equal to your tier
            </span>
          }
          keywords="Magical"
        />
      ),
    },
  ],
  [
    {
      title: "Elemental Attack (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="As you attack, your weapon radiates elemental energy."
            frequency="Spell 1 (War)"
            keywords="Escalation, Magical"
            effect={
              <span>
                Choose cold, fire, lightning, physical, or toxic.{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  Strike
                </Link>
                , dealing the chosen damage type instead of your weapon's normal
                damage type, and you deal an additional 2 damage per spell tier
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Magical Vigor (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard
          accordion
          descriptor="You empower a creature’s body to withstand the hardships of battle."
          frequency="Spell 1 (War)"
          target="1 creature per spell tier in your zone"
          keywords="Magical"
          duration="Scene ends"
          effect={
            <span>
              Target gains 4{" "}
              <Link
                className="internal-link"
                to="/rules/combat#temporary-hit-points"
              >
                temporary hit points
              </Link>{" "}
              per spell tier
            </span>
          }
        />
      ),
    },
    {
      title: "Predictive Strike (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You briefly glimpse into the future to better strike your foe."
          frequency="Spell 1 (War)"
          keywords="Magical"
          effect={
            <span>
              <Link className="internal-link" to="/combat-abilities#strike">
                Strike
              </Link>{" "}
              with <Modifier type="f" count="1" /> per spell tier. Your{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              ignores any <Modifier type="mf" /> on the roll.
            </span>
          }
        />
      ),
    },
    {
      title: "Steel Arc (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create spectral copies of your weapon that strike all foes around you."
          frequency="Spell 1 (War)"
          target="All enemies in your zone"
          keywords="Escalation, Magical"
          defense="Guard"
          damage="3 physical damage per spell tier"
        />
      ),
    },
  ],
  [
    {
      title: "Blade Storm (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure a cloud of floating weapons that strike any nearby creature."
            frequency="Spell 2 (War)"
            target="1 zone per spell tier within 2 zones"
            duration="Scene ends"
            keywords="Magical, Range"
            effect={
              <span>
                Targeted zones become{" "}
                <Link className="internal-link" to="/rules/combat#zone-types">
                  dangerous zones
                </Link>{" "}
                (1 physical damage per spell tier), and when creatures take this
                damage, they also take 1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                physical damage per spell tier. As a maneuver, you can move each
                targeted blade storm up to 1 zone away.
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Elemental Armor (Maneuver)",
      actType: "Maneuver",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You charge your armor with elemental power to guard you, but also hurt your attackers."
            frequency="Spell 2 (War)"
            target="1 creature within your zone"
            keywords="Magical"
            duration="Scene ends"
            effect={
              <span>
                Choose cold, fire, lightning, or toxic. Target gains{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#resistances-and-weaknesses"
                >
                  resistance
                </Link>{" "}
                to the chosen damage type, and when a creature damages the
                target with a melee ability, they take 2 damage per spell tier
                of the chosen damage type.
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Dimensional Assault (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You flourish your weapon then teleport around the battlefield, striking each foe within sight."
            frequency="Spell 3 (War)"
            keywords="Magical"
            target="All enemies within 1 zone"
            effect={
              <span>
                <Link className="internal-link" to="/combat-abilities#strike">
                  Strike
                </Link>{" "}
                each target, and you can{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#special-movement"
                >
                  teleport
                </Link>{" "}
                to each target before you strike
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
export const waterSpells = [
  [
    {
      title: "Shoving Wave (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="A wave of water bursts from you to push nearby foes away."
          frequency="Spell 0 (Water)"
          target="1d4+1 enemies in your zone"
          defense="Guard"
          critical="Pushed up to 1 zone away"
          success="Pushed within your zone"
          keywords="Magical"
        />
      ),
    },
    {
      title: "Splash (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You launch a small wave at your enemy."
          frequency="Spell 0 (Water)"
          defense="Guard"
          target="1 creature within 3 zones"
          damage="2 physical damage per your tier"
          critical="Pushed within their zone"
          keywords="Magical, Range"
        />
      ),
    },
  ],
  [
    {
      title: "Caught in the Current (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard
          accordion
          descriptor="You blast back someone with a small wave of water."
          frequency="Spell 1 (Water)"
          trigger={
            <span>
              You see a creature{" "}
              <Link className="internal-link" to="/combat-abilities#move">
                move
              </Link>{" "}
              or teleport within 1 zone
            </span>
          }
          keywords="Escalation, Magical, Range"
          target="Triggering creature"
          defense="Guard"
          critical="Pushed up to 1 zone away"
          success="Pushed within their zone"
        />
      ),
    },
    {
      title: "Crashing Wave (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You send forth a giant wave of water to knock your foes off their feet."
            target="All creatures in 1 zone within 3 zones"
            defense="Guard"
            damage="2 physical damage per spell tier"
            frequency="Spell 1 (Water)"
            keywords="Escalation, Magical, Range"
            success={
              <span>
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>
              </span>
            }
          />
        </div>
      ),
    },
    {
      title: "Rainfall (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure heavy rainfall that makes the ground slippery."
          frequency="Spell 1 (Water)"
          target="1 zone per spell tier within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={
            <span>
              Targeted zones become{" "}
              <Link className="internal-link" to="/rules/combat#zone-types">
                difficult zones
              </Link>
              . When a creature enters or starts their turn in the zone, make an{" "}
              <Link className="internal-link" to="/rules/combat#attack-roll">
                attack roll
              </Link>{" "}
              against their Guard, and on a success, the creature falls{" "}
              <Link className="internal-link" to="/conditions#prone">
                prone
              </Link>
              .
            </span>
          }
        />
      ),
    },
    {
      title: "Wall of Water (Action)",
      actType: "Action",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a wall of rushing water. "
          frequency="Spell 1 (Water)"
          target="1 zone border per spell tier (borders must connect) within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={
            <span>
              <span>
                Range abilities fail to pass through the wall. When a creature
                attempts to pass through the wall, make an attack roll against
                their Guard. On a success, they fall{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                after passing through the wall.
              </span>
            </span>
          }
        />
      ),
    },
  ],
  [
    {
      title: "Summon Water Elemental (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You conjure an aquatic spirit from the water realm."
            frequency="Spell 2 (Water)"
            duration="Focus until scene ends"
            keywords="Magical, Summon, Range"
            effect="You summon a water elemental within 1 zone. "
          />
          <Monster
            name="Water Elemental"
            type="Large Elemental"
            hp="10 per spell tier (ST)"
            evn="10 + PB"
            mgt="12 + PB"
            res="8 + PB"
            pb="double ST"
            resistances="fire"
            weaknesses="cold"
            speeds="swim 1"
            summons
            accordion
            traits={[
              {
                name: "Aquatic",
                description: "elemental can breath underwater",
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
                damage: "triple ST physical damage",
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
                name: "Splash",
                keywords: "ranged, weapon",
                target: "1 creature within 3 zones",
                defense: "Guard",
                damage: "double ST physical damage",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Watery Cage (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You encircle a foe in an aquatic orb, drowning them as moving water restrains them."
            frequency="Spell 2 (Water)"
            target="1 creature (+1 creatures per higher spell tier) within 1 zone"
            keywords="Escalation, Magical, Range"
            defense="Guard"
            critical={
              <span>
                1{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#ongoing-damage"
                >
                  ongoing
                </Link>{" "}
                physical damage per spell tier while seized
              </span>
            }
            success={
              <span>
                Same as a partial success, but{" "}
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (scene ends)
              </span>
            }
            partial={
              <span>
                Seized (next turn ends), and the target must hold their breath
                or begin{" "}
                <Link className="internal-link" to="/rules/combat#underwater">
                  drowning
                </Link>{" "}
                while seized
              </span>
            }
          />
        </div>
      ),
    },
  ],
  [
    {
      title: "Tsunami (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard
            accordion
            descriptor="You summon a gigantic wave that traps and drowns your foes."
            frequency="Spell 3 (Water)"
            target="All creatures in 1 zone within 5 zones"
            keywords="Escalation, Magical, Range"
            defense="Guard"
            damage="2 physical damage per spell tier"
            success={
              <span>
                <Link className="internal-link" to="/conditions#seized">
                  seized
                </Link>{" "}
                (scene ends) if huge or smaller, or{" "}
                <Link className="internal-link" to="/conditions#prone">
                  prone
                </Link>{" "}
                if colossal
              </span>
            }
            effect={
              <span>
                Anyone within the affected zone must hold their breath or begin{" "}
                <Link className="internal-link" to="/rules/combat#underwater">
                  drowning
                </Link>
                . On your subsequent turns, the wave moves forward, targeting
                all creatures in an adjacent zone, and bringing any seized
                creatures with the wave. The wave collapses at the end of the
                scene.
              </span>
            }
          />
        </div>
      ),
    },
  ],
];
