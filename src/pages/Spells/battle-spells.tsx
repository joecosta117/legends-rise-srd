
import AbilityCard from "../../components/AbilityCard";
import Monster from "../../components/Monster";

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
          defense="PD"
          keywords="Magical, Range"
          damage="2 force damage per your tier"
          critical="Pushed within their zone"
        />
      )
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
          defense="PD"
          damage="2 lightning damage per your tier"
          critical="Choose a second target within the same zone as the original target to take the same damage"
        />
      )
    }
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
          effect="Choose up to 2 triggering creatures per spell tier to not take crash damage and they land on their feet."
        />
      )
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
          defense="PD"
          damage="5 lightning damage per your tier"
        />
      )
    },
    {
      title: "Thunderclap (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You clap your hands to unleash a thunderous boom that deafens."
          frequency="Spell 1 (Air)"
          keywords="Escalation, Magical"
          target="1d4+1 enemies within your zone"
          defense="PD"
          damage="2 force damage per spell tier"
          success="Hindered (turn ends)"
        />
      )
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
          effect={(
            <span>
              <span>The wall has the following properties:</span>
              <ul>
                <li><span>Range abilities using attack rolls against PD fail if the target is beyond the wall.</span></li>
                <li><span>When a creature attempts to pass through the wall, you can stop their movement on a successful attack roll against their PD.</span></li>
              </ul>
            </span>
          )}
        />
      )
    }
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
          defense="PD"
          damage="3 lightning damage per spell tier"
          failure="Spell ends"
          partial="Make the same attack roll against another target within 1 zone of the previous target unless you stop the spell. No target can be affected more than once."
        />
      )
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
          effect="You summon an air elemental within 1 zone. When the elemental is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Air Elemental" 
          type="Large Elemental" 
          hp="6 per spell tier (ST)"
          pd="10 + double ST"
          md="8 + double ST"
          pb="double ST"
          speeds="fly 1"
          resistances="lightning"
          summons
          accordion
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "triple ST force damage",
            success: "Prone"
          },
          {
            basic: false,
            name: "Zap",
            keywords: "range, weapon",
            target: "1 creature within 3 zones",
            defense: "PD",
            damage: "double ST lightning damage",
          }]}
          />
        </div>
      )
    }
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
          keywords="Magical, Range"
          effect="A cyclone turns the targeted zone into a difficult zone and dangerous zone (1 force damage per spell tier). When a huge or smaller creature takes this damage, make an attack roll against their PD, and on a success, they are seized (turn starts). Zones adjacent to the targeted zone become dangerous zones (1 lightning damage per spell tier). Once a turn, as a maneuver you can move the cyclone up to 1 zone away."
        />
      )
    },
  ]
]
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
          defense="MD"
          keywords="Magical, Range"
          damage="2 arcane damage per your tier"
          critical="1 additional damage per your tier"
        />
      )
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
          defense="PD"
          damage="1 damage per your tier. Roll 1d6 to determine the damage type: 1) toxic, 2) fire, 3) cold, 4) lightning, 5) force, and 6) arcane"
        />
      )
    }
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
          defense="MD"
          damage="2 arcane damage"
          effect="You create 2 darts per spell tier"
        />
      )
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
          defense="PD"
          damage="3 damage per spell tier. Roll 1d6 to determine the damage type: 1) toxic, 2) fire, 3) cold, 4) lightning, 5) force, and 6) arcane"
        />
      )
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
          effect="If this spell’s tier is equal to or higher than the magical effect’s tier (spell tier if the effect originates from a spell), then the targeted effect ends. Otherwise, you must succeed on an attack roll against the MD of the targeted effect’s origin (spellcaster for a spell) or a TN of 10 + double the effect’s tier."
        />
      )
    },
    {
      title: "Summpon Dragon Spirit (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You conjure the spirit of a dragon to aid you."
            frequency="Spell 1 (Arcane)"
            keywords="Magical, Range, Summon"
            duration="Focus until scene ends"
            effect="You summon a dragon spirit within 1 zone. Choose one of the following elements to represent your dragon spirit: cold, fire, lightning, or toxic. When the dragon spirit is reduced to 0 Hit Points, the spell ends."
          />
          <Monster 
            name="Dragon Spirit" 
            type="Large Dragon" 
            hp="6 per spell tier (ST)"
            pd="12 + double ST"
            md="8 + double ST"
            pb="double ST"
            speeds="fly 1"
            resistances="chosen element"
            summons
            accordion
            actions={[{
              basic: true,
              name: "Rend",
              keywords: "melee, weapon",
              target: "1 engaged creature",
              defense: "PD",
              damage: "double ST force damage",
            },
            {
              basic: false,
              name: "Breath Weapon",
              frequency: "Once per spell",
              keywords: "range",
              target: "1d4+1 enemies within the dragon spirit’s zone",
              defense: "PD",
              damage: "2 damage of the chosen damage type per spell tier",
            }]}
          />
        </div>
      )
    }
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
          effect="You summon a magical hand within 1 zone. When the hand is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Arcane Hand" 
          type="Large export Construct" 
          hp="5 per spell tier (ST)"
          pd="10 + double ST"
          md="8 + double ST"
          pb="double ST"
          speeds="fly 1"
          resistances="arcane"
          summons
          accordion
          actions={[{
            basic: true,
            name: "Punch",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "double ST force damage",
            success: "Seized (scene ends), but the hand can only have creature seized at a time"
          }]}
          reactions={[{
            name: "Hand Block",
            trigger: "You see a creature within your arcane hand’s zone take damage",
            effect: " Arcane hand instead takes the damage",
          }]}
          />
        </div>
      )
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
          keywords="Magical"
          effect={(
            <span>
              <span>sYou transform into a large dragon (huge dragon at spell tier 3) and choose cold, fire, lightning, or toxic as your dragon’s damage type. While transformed:</span>s
              <ul>
                <li><span>You can’t Spellcast or use any abilities you can’t do as a dragon.</span></li>
                <li><span>You gain 4 temporary hit points per the spell tier</span></li>
                <li><span>Your PD equals 12 + double the spell tier</span></li>
                <li><span>Your natural melee weapons deal 3 force damage</span></li>
                <li><span>You gain fly speed of 1</span></li>
                <li><span>You gain resistance to your chosen damage type</span></li>
                <li><span>Once per spell, you unleash energy as an action. Make an attack roll against the PD of each creature in 1 zone within 3 zones, dealing 3 damage per spell tier of the chosen damage type</span></li>
                <li><span>Once you start dying, you revert back to your form and the magic ends</span></li>
              </ul>
            </span>
          )}
        />
      )
    }
  ],
  [
    {
      title: "Erase (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You undo the very essence of your foe."
          frequency="Spell 3 (Arcane)"
          target="1 creature within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="MD"
          damage="5 arcane damage per spell tier. If this damage kills the target, then their essence is removed from reality and they can’t be resurrected outside of mythical magic from deities or other powerful sources."
        />
      )
    },
  ]
]
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
          target="1 creature engaged to you"
          defense="MD"
          keywords="Magical, Melee"
          damage="3 necrotic damage per your tier"
          critical="You gain temporary hit points equal to your proficiency bonus (scene ends)"
        />
      )
    },
    {
      title: "Withering Ray (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You shoot a bolt of necrotic energy at your enemy."
          frequency="Spell 0 (Death)"
          target="1 creature within 3 zones"
          keywords="Magical, Range"
          defense="MD"
          damage="2 necrotic damage per your tier"
          critical="hindered (scene ends)"
        />
      )
    }
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
          defense="MD"
          damage="4 necrotic damage per spell tier"
          success="hindered (turn ends)"
        />
      )
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
          defense="MD"
          damage="2 necroitc damage per spell tier"
          effect="Targeted zone becomes a dangerous zone (1 necrotic damage per spell tier) for the scene"
        />
      )
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
            effect="You summon an undead (ghost, ghoul, or zombie) within 1 zone. When the spirit is reduced to 0 Hit Points, the spell ends."
          />
          <Monster 
            name="Undead" 
            type="Medium Undead" 
            hp="5 per spell tier (ST)"
            pd="10 + double ST"
            md="8 + double ST"
            pb="double ST"
            resistances="necrotic, force (ghost only)"
            summons
            accordion
            traits={[{
              name:"Unnatural Endurance (zombie only)",
              description:"When the undead is reduced to 0 hit points, it can succeed on an overcome roll to instead be reduced to 1 hit point. Holy damage or damage from a critical successful attack roll ignore this feature."
            },
            {
              name: "Death Stench (ghoul only)",
              description: "Creatures that end their turn engaged to the undead must succeed on an overcome roll or become hindered (turn ends)."
            }]}
            actions={[{
              basic: true,
              name: "Rend",
              keywords: "melee, weapon",
              target: "1 engaged creature",
              defense: "PD or MD (ghost only)",
              damage: "double ST force damage or necrotic damage (ghost only)",
            }]}
          />
        </div>
      )
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
            target="1 creature engaged to you"
            defense="MD"
            damage="5 necrotic damage per spell tier"
            success="You regain hit points equal to half the damage dealt"
          />
        </div>
      )
    }
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
          defense="MD"
          damage="4 necrotic damage per spell tier"
          effect="Whenever you deal damage from this spell, you gain temporary hit points equal to half the damage dealt (scene ends)"
          success="You become linked to the target for the scene while you focus. When you focus on this spell, the target takes 2 necrotic damage per spell tier."
        />
        </div>
      )
    },
    {
      title: "Withering Wave (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You unleash a blast of necrotic energy that saps the energy of anything it touches."
          frequency="Spell 2 (Death)"
          target="1d4+1 enemies in your zone"
          keywords="Escalation, Magical, Range"
          defense="MD"
          damage="2 necrotic damage per spell tier"
          success="hindered (scene ends)"
        />
      )
    }
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
            defense="MD"
            damage="5 necrotic damage per spell tier. If this damage kills the target, then they are reanimated as a death wraith (see below statistics) under your control, and this spell gains the summon keyword. The death wraith lasts as long as you focus on it during the scene."
          />
          <Monster 
            name="Death Wraith" 
            type="Undead (same size as original target)" 
            hp="6 per spell tier (ST)"
            pd="10 + double ST"
            md="8 + double ST"
            pb="double ST"
            speeds="other speeds depending on the original target"
            resistances="necrotic"
            summons
            accordion
            actions={[{
              basic: true,
              name: "Death Touch",
              keywords: "melee, weapon",
              target: "1 engaged creature",
              defense: "MD",
              damage: "triple ST necrotic damage",
              success: "hindered (scene ends)"
            }]}
          />
        </div>
      )
    },
  ]
]
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
          defense="PD"
          keywords="Magical, Range"
          damage="2 force damage per your tier"
          critical="Prone"
        />
      )
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
          defense="PD"
          critical="Same as success, and 1 force damage per your tier"
          success="Prone"
        />
      )
    }
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
          defense="PD"
          critical="Same as success, and 1 ongoing force damage per spell tier while seized"
          success="Seized (scene ends)"
          partial="Seized (turn ends)"
        />
      )
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
          defense="PD"
          damage="2 force damage per spell tier"
          effect="Targeted zone becomes a difficult zone for the scene"
        />
      )
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
            effect="Targeted zones become same choice of difficult zones, dangerous zones (1 force damage per spell tier), defensive zones, or elevated zones."
          />
        </div>
      )
    },
    {
      title: "Stone Armor (Maneuver)",
      actType: "Maneuver",
      spell: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You cover an ally in stone to protect their weak spots."
            frequency="Spell 1 (Earth)"
            keywords="Magical"
            target="1 creature per spell tier in your zone"
            duration="Scene ends"
            effect="Target's PD increases by +1"
          />
        </div>
      )
    }
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
          effect={(
            <span>
              <span>The wall has the following properties</span>
              <ul>
                <span><li>Nothing can pass through the wall.</li></span>
                <span><li>Each part of the wall (one zone border) has defenses equal to 10 + double spell tier and 6 hit points per spell tier.</li></span>
              </ul>
            </span>
          )}
          duration="Scene ends"
        />
        </div>
      )
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
          effect="You summon an earth elemental within 1 zone. When the elemental is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Earth Elemental" 
          type="Large Elemental" 
          hp="6 per spell tier (ST)"
          pd="12 + double ST"
          md="8 + double ST"
          pb="double ST"
          summons
          accordion
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "double ST force damage",
            success: "Prone"
          },
          {
            basic: false,
            name: "Rock Throw",
            keywords: "range, weapon",
            target: "1 creature within 3 zones",
            defense: "PD",
            damage: "double ST force damage",
          }]}
          />
        </div>
      )
    }
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
            effect="Targeted zones become difficult zones and dangerous zones (1 force damage per spell tier). When a creature takes this damage, make an attack roll against their PD, and on a success, they fall prone. Any huge or smaller structure within the targeted zones are reduced to rubble."
          />
        </div>
      )
    },
  ]
]
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
          defense="PD"
          keywords="Magical, Range"
          damage="2 force damage per your tier"
          critical="Pushed within their zone"
        />
      )
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
          defense="MD"
          damage="2psychic damage per your tier"
          critical="Confused (turn ends)"
        />
      )
    }
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
          defense="MD"
          critical="Same as success, and 1 ongoingpsychic damage per spell tier while confused"
          success="Confused (scene ends)"
          partial="Confused (turn ends)"
        />
      )
    },
    {
      title: "Eldritch Tentacles",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You summon strange tentacles from the void realm. "
          frequency="Spell 1 (Eldritch)"
          keywords="Magical, Range"
          target="1 zone per spell tier within 2 zones"
          duration="Scene ends"
          effect="Targeted zones become dangerous zones (1 force damage per spell tier). When a creature takes this damage, make an attack roll against their PD, and on a success, the creature becomes seized (scene ends)."
        />
      )
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
            defense="MD"
            damage="2psychic damage per spell tier"
            success="Confused (turn ends)"
          />
        </div>
      )
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
            effect="Target rerolls the triggering roll and takes the lower result. You must then succeed on an overcome roll or become dazed (turn ends)."
          />
        </div>
      )
    }
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
          effect="You summon an aberration within 1 zone. When the aberration is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Aberration" 
          type="Large Aberration" 
          hp="6 per spell tier (ST)"
          pd="9 + double ST"
          md="9 + double ST"
          resistances="mental"
          pb="double ST"
          summons
          accordion
          actions={[{
            basic: true,
            name: "Tentacle",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "double ST force damage",
            success: "Seized (scene ends)"
          },
          {
            basic: false,
            name: "Mind Blast",
            keywords: "magical, range",
            target: "1 creature within 3 zones",
            defense: "MD",
            damage: "double STpsychic damage",
          }]}
          />
        </div>
      )
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
          target="1 huge or smaller creatures within 2 zones"
          duration="Focus until scene ends"
          keywords="Escalation, Magical, Range"
          defense="PD"
          critical="Same as success, but you can move the target up to 1 zone away"
          success="Seized (scene ends) and you can move the target within their zone"
          partial="Seized (turn ends)"
          effect="When you focus on this spell, you can move the seized target up to 1 zone or let go of a seized target to repeat this spell’s attack roll against another target. You can only have one seized target at a time. Your attack roll automatically critically succeeds against an unworn object if it's huge or smaller."
        />
        </div>
      )
    }
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
            defense="MD"
            damage="3psychic damage per spell tier. If any damage from this spell kills the target, then their head explodes (assuming they have one)."
            success="Dazed (scene ends)"
          />
        </div>
      )
    },
  ]
]
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
          defense="MD"
          keywords="Magical, Range"
          damage="2psychic damage per your tier"
          critical="Exposed (turn ends)"
        />
      )
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
          effect="Target gains +1 fortune to their next attack roll (turn ends)"
        />
      )
    }
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
          defense="MD"
          critical="Charmed (scene ends)"
          success="Charmed (turn ends)"
          partial="Hindered (turn ends)"
        />
      )
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
          defense="MD"
          critical="Same as success, but the target uses both their action and maneuver to follow your command."
          success="Target uses their action or maneuver to follow your one word command, such as “run” or “drop”."
          partial="Hindered (turn ends)"
        />
      )
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
          defense="MD"
          critical="Falls prone and asleep, but can be woken up with a maneuver from an engaged creature"
          success="Dazed (scene ends)"
          partial="Dazed (turn ends)"
        />
      )
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
          defense="MD"
          critical="Same as a success, and the target must use their next maneuver to Move away from you"
          success="Hindered (scene ends)"
          partial="Hindered (turn ends)"
        />
      )
    }
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
          defense="MD"
          damage="2psychic damage per spell tier"
          success="Confused (scene ends)"
        />
        </div>
      )
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
          defense="MD"
          keywords="Escalation, Magical, Range"
          critical="Same as a success, but the target takes +1 misfortune to their overcome rolls to end this spell"
          success="Same as a partial, but you control the target for the scene (scene ends)."
          partial="You control the target (turn ends). While controlled, you direct all of the target’s acts on their turn, including reactions."
        />
        </div>
      )
    }
  ],
  [
    {
      title: "Majestic Presence (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You take on the visage of a deific entity that compels your foes to worship you."
            frequency="Spell 3 (Enchantment)"
            target="All enemies within 1 zone"
            keywords="Escalation, Magical, Range"
            defense="MD"
            critical="Same as a success, but also prone"
            success="Same as a partial, but charmed (scene ends)"
            partial="Charmed (turn ends), and dazed while charmed as they bask in your glory"
          />
        </div>
      )
    },
  ]
]
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
          defense="PD"
          keywords="Magical"
          damage="1 fire damage per your tier"
        />
      )
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
          defense="PD"
          keywords="Magical, Range"
          damage="2 fire damage per your tier"
          critical="1 ongoing fire damage per your tier"
        />
      )
    }
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
          target="1 creature per spell tier within 3 zones"
          keywords="Escalation, Magical, Range"
          defense="PD"
          damage="4 fire damage per spell tier"
          success="1 ongoing fire damage per spell tier"
        />
      )
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
          defense="PD"
          damage="3 fire damage per spell tier"
        />
      )
    },
    {
      title: "Lavafield (Action)",
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
      )
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
          defense="PD"
          critical="Same as a success, and the target is hindered while taking this ongoing damage"
          success="2 ongoing fire damage per spell tier"
          partial="1 ongoing fire damage per spell tier"
        />
      )
    }
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
          effect={(
            <span>
              <span>The wall has the following properties</span>
              <ul>
                <span><li>Ranged abilities can’t target anyone on the other side of the wall</li></span>
                <span><li>When a creature passes through the wall, they take 2 fire damage per spell tier.</li></span>
                <span><li>The zones on either side of the targeted zone borders become dangerous zones (1 fire damage per spell tier).</li></span>
              </ul>
            </span>
          )}
          duration="Scene ends"
        />
        </div>
      )
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
          effect="You summon a fire elemental within 1 zone. When the elemental is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Fire Elemental" 
          type="Large Elemental" 
          hp="6 per spell tier (ST)"
          pd="10 + double ST"
          md="8 + double ST"
          pb="double ST"
          resistances="fire"
          summons
          accordion
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "triple ST fire damage",
            success: "1 ongoing fire damage per spell tier"
          },
          {
            basic: false,
            name: "Throw Fire",
            keywords: "range",
            target: "1 creature within 3 zones",
            defense: "PD",
            damage: "double ST fire damage",
          }]}
          />
        </div>
      )
    }
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
            defense="PD"
            damage="3 fire damage per spell tier"
            success="Prone"
          />
        </div>
      )
    },
  ]
]
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
          defense="PD"
          keywords="Magical"
          critical="Same as success, and 1 force damage per your spell tier"
          success="Slowed (turn ends)"
        />
      )
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
          defense="PD"
          keywords="Magical, Range"
          damage="2 force damage per your tier"
          critical="Seized (turn ends)"
        />
      )
    }
  ],
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
          defense="PD"
          keywords="Magical"
          critical="Same as success, and 1 force damage per your spell tier"
          success="Slowed (turn ends)"
        />
      )
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
          defense="PD"
          keywords="Magical, Range"
          damage="2 force damage per your tier"
          critical="Seized (turn ends)"
        />
      )
    }
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
          effect="The targeted zone’s gravity flips and all creatures and unattended objects fly up a number of zones equal to the spell tier, and take crash damage. If a creature walks out of the targeted zone, then regular gravity resumes on them, and they fall to the ground."
          duration="Scene ends"
        />
      )
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
          defense="PD"
          damage="4 force damage per spell tier"
          keywords="Escalation, Magical, Range"
          success="Seized (scene ends), and 1 ongoing force damage per spell tier while seized"
        />
      )
    }
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
            effect="Targeted zone becomes a difficult zone and dangerous zone (1 force damage per spell tier) filled with darkness and blocks out any sound. When a creature takes this damage, make an attack roll against their PD, and on a success, they are pulled to the center of the targeted zone. If a creature is killed while within the targeted zone, then their body is disintegrated and consumed by the blackhole."
          />
        </div>
      )
    },
  ]
]
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
          effect="Attack rolls against the target take +1 misfortune"
        />
      )
    },
    {
      title: "Sacred Fire (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You burn a foe with celestial flames while  blessing an ally"
          frequency="Spell 0 (Holy)"
          target="1 creature within 3 zones"
          defense="MD"
          keywords="Magical, Range"
          damage="2 holy damage per your tier"
          critical="Choose one creature within 3 zones to gain temporary hit points equal to your proficiency bonus (scene ends)"
        />
      )
    }
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
          effect="When a creature uses the target weapon to Strike, they deal an additional 1 holy damage per spell tier."
        />
      )
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
          effect="Target gains +1 fortune to all rolls."
        />
      )
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
          defense="MD"
          damage="4 holy damage per spell tier"
          success="Exposed (turn ends)"
        />
      )
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
          defense="PD"
          damage="2 holy damage per spell tier"
          effect="When you focus on this spell, you can move the weapon up to 1 zone to become engaged to a creature and then make this spell's attack roll against that creature."
        />
      )
    }
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
          effect="You summon an angelic warrior within 1 zone. When the angel is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Angelic Warrior" 
          type="Medium Celestial" 
          hp="6 per spell tier (ST)"
          pd="11 + double ST"
          md="9 + double ST"
          pb="double ST"
          speeds="fly 1"
          resistances="holy"
          summons
          accordion
          traits={[{
            name: "Celestial Aura",
            description: "Angel and allies within the angel’s zone gain +1 fortune to overcome rolls"
          }]}
          actions={[{
            basic: true,
            name: "Holy Sword",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "double ST holy damage",
          }]}
          maneuvers={[{
            name: "Angelic Prayer",
            frequency: "Once per spell",
            keywords: "magical, range",
            target: "1 creature within 1 zone",
            effect: "Target can spend a recovery, but instead regains 6 hit points per ST",
          }]}
          />
        </div>
      )
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
          defense="MD"
          keywords="Escalation, Magical, Range"
          critical="Same as a success, but after a minute of being banished, the creature can't make overcome rolls to return."
          success="Returned to their home realm (scene ends)"
          partial="Returned to their home realm (turn ends)"
        />
      )
    }
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
            defense="MD"
            damage="2 holy damage per spell tier"
            critical="Same as a success, but the target is banished for the scene (scene ends)"
            success="If the target isn’t from this realm, then they’re returned to their home realm (turn ends)"
            effect="You and each ally within 1 zone gain 2 temporary hit points per spell tier (scene ends)"
          />
        </div>
      )
    },
  ]
]
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
          effect="Targeted zone becomes a difficult zone"
        />
      )
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
          defense="PD"
          keywords="Magical, Range"
          damage="2 cold damage per your tier"
          critical="Slowed (turn ends)"
        />
      )
    }
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
          effect="Target gains 2 temporary hit points per spell tier (scene ends), and the spell ends when the temporary hit points become 0. When a creature damages the target with a melee ability, the creature takes 2 cold damage per spell tier."
        />
      )
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
          defense="PD"
          critical="Seized (scene ends)"
          success="Seized (turn ends)"
          partial="Slowed (turn ends)"
        />
      )
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
          effect={(
            <span>
              <span>The wall has the following properties:</span>
              <ul>
                <li><span>Nothing can pass through the wall.</span></li>
                <li><span>Each part of the wall (one zone border) has defenses of 8 + double the spell tier and 4 hit points per spell tier. It has resistance to cold damage.</span></li>
              </ul>
            </span>
          )}
        />
      )
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
          defense="PD"
          damage="2 cold damage per spell tier"
          effect="Targeted zone becomes a difficult zone for the scene"
        />
      )
    }
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
          effect="Targeted zones become difficult zones and dangerous zones (1 cold damage per spell tier). When a creature takes this damage, make an attack roll against their PD. On a success, the creature is slowed (turn starts)."
        />
      )
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
          effect="You summon an ice elemental within 1 zone. When the elemental is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Ice Elemental" 
          type="Large Elemental" 
          hp="6 per spell tier (ST)"
          pd="10 + double ST"
          md="8 + double ST"
          pb="double ST"
          resistances="cold"
          summons
          accordion
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "triple ST cold damage",
            success: "dazed (turn ends)"
          },
          {
            basic: false,
            name: "Ice Spike",
            keywords: "ranged, weapon",
            target: "1 creature within 3 zones",
            defense: "PD",
            damage: "double ST cold damage"
          }]}
          />
        </div>
      )
    }
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
            defense="PD"
            damage="2 cold damage per spell tier"
            critical="Same as a success, but seized (scene ends)"
            success="Seized (turn ends), and 1 ongoing cold damage per spell tier while seized"
            effect="Targeted zone becomes a difficult zone until cleared"
          />
        </div>
      )
    },
  ]
]
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
          effect="You impose +1 misfortune on the triggering roll. The target is then immune to this spell until after a short rest."
        />
      )
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
          defense="MD"
          keywords="Magical, Range"
          damage="2psychic damage per your tier"
          critical="Hindered (turn ends)"
        />
      )
    }
  ],
  [
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
          defense="MD"
          critical="Exposed (scene ends)"
          success="Exposed (turn ends)"
        />
      )
    },
    {
      title: "Duplicates (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You create magical duplicates that swirl around the target, potentially causing attacks to miss."
          frequency="Spell 1 (Illusion)"
          target="1 creature per spell tier you can touch"
          keywords="Magical, Melee"
          duration="Scene ends"
          effect="You create 3 duplicates around the target that follow and mirror them. A creature must succeed on an overcome roll to use a harmful ability against the target. On a failed overcome roll, a duplicate is destroyed and the ability has no effect. Abilities that affect multiple targets ignore this spell."
        />
      )
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
          effect="You create an illusion of a creature within 1 zone. When the illusion is reduced to 0 Hit Points, the spell ends. After a creature interacts with your illusion, such as attacking it, they can succeed on an overcome roll to see through the illusion, and the illusion takes +1 misfortune on attack rolls against the creature."
        />
        <Monster 
          name="Illusionary Creature" 
          type="Medium export Construct" 
          hp="5 per spell tier (ST)"
          pd="10 + double ST"
          md="8 + double ST"
          pb="double ST"
          resistances="mental"
          summons
          accordion
          actions={[{
            basic: true,
            name: "Rend",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "double STpsychic damage",
          },
          {
            basic: false,
            name: "Scary Visage",
            keywords: "magical, ranged",
            frequency: "Once per spell",
            target: "1d4+1 enemies within the illusionary creature’s zone",
            defense: "MD",
            critical: "hindered (scene ends)",
            success: "hindered (turn ends)"
          }]}
          />
        </div>
      )
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
          effect="Designate any number of creatures that can see through the illusionary wall. For non-designated creatures, they believe the wall is solid unless they try to interact with the wall such as moving through it, using the Interact maneuver, or being told that the wall is fake. The creature can then succeed on an overcome roll to see through the illusion."
        />
      )
    }
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
          effect="Target becomes invisible"
        />
      )
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
          damage="4psychic damage per spell tier"
          defense="MD"
          success="Seized (scene ends), and if the target attempts to escape, then they take 2psychic damage per spell tier"
          partial="Seized (turn ends)"
        />
        </div>
      )
    }
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
            defense="MD"
            damage="2psychic damage per spell tier"
            critical="Same as a partial, but ongoing damage increases to 2 per spell tier"
            success="Hindered (scene ends), and 1 ongoingpsychic damage per spell tier while hindered"
          />
        </div>
      )
    },
  ]
]
export const lifeSpells = [
  [
    {
      title: "Minor Heal (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You infuse a creature with life from your touch."
          frequency="Spell 0 (Life)"
          target="1 creature you can touch"
          keywords="Magical, Melee"
          effect="Target can spend a recovery"
        />
      )
    },
    {
      title: "Stabilize (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You infuse a dying creature with life."
          frequency="Spell 0 (Life)"
          target="1 dying creature within your zone"
          keywords="Magical"
          effect="Target regains 1 hit point"
        />
      )
    }
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
          effect="Target gains resistance to all damage. Each time the target takes damage, you take the same amount after resistance is applied."
        />
      )
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
          effect="Target can spend a recovery, but they instead only regain 4 hit points per spell tier."
        />
      )
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
          effect="Target can spend a recovery, but they instead only regain 6 hit points per spell tier."
        />
        </div>
      )
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
          effect="End 1 condition affecting the target except for prone"
        />
      )
    }
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
          trigger="You see a creature within 1 zone become vanquished or start dying"
          keywords="Magical, Range"
          effect="Triggering creature can spend a recovery, but they instead regain 6 hit points per spell tier, or 1 hit point if they don’t spend a recovery."
        />
      )
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
          effect={(
            <span>
              <span>Target gains the following:</span>
              <ul>
                <li><span>If shaken, then they regain 1 hit point per spell tier</span></li>
                <li><span>Regeneration equal to the spell tier while shaken</span></li>
              </ul>
            </span>
          )}
        />
        </div>
      )
    }
  ],
  [
    {
      title: "Full Heal (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard 
            accordion
            descriptor="You infuse an ally with a wave of positive energy that mends all their wounds."
            frequency="Spell 3 (Life)"
            target="1 creature within 3 zones"
            keywords="Magical, Range"
            effect="Target can spend a recovery, but regains 12 hit points per spell tier, can Stand, and ends all negative conditions affecting them."
          />
        </div>
      )
    },
  ]
]
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
          target="1d4+1 enemies within your zone"
          keywords="Magical"
          defense="PD"
          critical="blinded (turn ends)"
          success="hindered (turn ends)"
        />
      )
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
          defense="PD"
          damage="2 fire damage per your tier"
          keywords="Magical, Range"
          critical="hindered (turn ends)"
        />
      )
    }
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
          effect="Any hidden creatures are visibile while within the targeted zones"
        />
      )
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
          defense="PD"
          damage="2 fire damage per spell tier"
          success="Hindered (turn ends)"
        />
      )
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
      )
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
          trigger="You see a creature within 1 zone make an attack roll"
          effect="Triggering attack roll takes +1 misfortune and the creature takes 2 fire damage per spell tier"
        />
      )
    }
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
          defense="PD"
          damage="2 fire damage per spell tier"
          success="Blinded (turn ends)"
          effect="When you focus on this spell, you can repeat this spell’s attack roll against a creature within 2 zones"
        />
      )
    },
    {
      title: "Wall of Light (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard 
          accordion
          descriptor="You conjure a wall of pure radiance."
          frequency="Spell 2 (Light)"
          target="1 zone border per spell tier (borders must connect) within 2 zones"
          keywords="Magical, Range"
          duration="Scene ends"
          effect={(
            <span>
              <span>The wall has the following properties:</span>
              <ul>
                <li><span>Creatures can’t see through the wall</span></li>
                <li><span>As a maneuver, you can fire a light beam at a creature within 2 zones of the wall. Make an attack roll against the target’s PD, dealing 2 fire damage per spell tier.</span></li>
                <li><span></span>Make an attack roll against the PD of any creature that starts their turn within a zone touching the wall or enters a zone touching the wall. On a success, the target is blinded (turn ends).</li>
              </ul>
            </span>
          )}
        />
        </div>
      )
    }
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
            defense="PD"
            damage="3 fire damage per spell tier"
            keywords="Escalation, Magical, Range"
            critical="Same as a success, but also dazed while blinded"
            success="Blinded (scene ends)"
          />
        </div>
      )
    },
  ]
]
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
          target="1 creature engaged to you"
          keywords="Magical, Melee"
          defense="PD"
          damage="3 force damage per your tier"
          critical="1 ongoing force damage per your tier"
        />
      )
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
          defense="PD"
          damage="2 force damage per your tier"
          keywords="Magical, Range"
          critical="seized (turn ends)"
        />
      )
    }
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
          effect="Targeted zones become difficult zones. When a creature starts their turn in a targeted zone or moves through a targeted zone, make an attack roll against their PD, and on a success, the creature becomes seized (scene ends). You can only make this attack roll against a creature once per turn."
        />
      )
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
          effect="You create a tree within 1 zone that has 6 hit points per spell tier and defenses of 8 + double the spell tier. If a friendly creature is damaged within the same zone as the tree, the tree instead takes the damage. If the damage reduces the tree to 0 hit points then the tree withers away and any additional damage is dealt to the original target."
        />
      )
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
            effect="You summon a primal spirit (air, water, land, or plant) within 1 zone. When the spirit is reduced to 0 Hit Points, the spell ends."
          />
          <Monster 
            name="Nature Spirit" 
            type="Medium Animal or Plant" 
            hp="5 per spell tier (ST), or 4 per ST (air only)"
            pd="10 + double ST"
            md="8 + double ST"
            pb="double ST"
            speeds="fly 1 (air only), swim 1 (water only)"
            resistances="necrotic, force (ghost only)"
            summons
            accordion
            traits={[{
              name:"Aquatic (water only)",
              description:"Spirit can breath underwater."
            },
            {
              name:"Reach (plant only)",
              description:"Spirit treats anyone within their zone as engaged."
            }]}
            actions={[{
              basic: true,
              name: "Slam",
              keywords: "melee, weapon",
              target: "1 engaged creature",
              defense: "PD or MD (ghost only)",
              damage: "double ST force damage or triple ST force damage (land only)",
            }]}
            reactions={[{
              name: "Nature's Fury",
              trigger: "Nature spirit sees ally within their zone take damage",
              effect: "Nature spirit can Charge to use Slam",
            }]}
          />
        </div>
      )
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
          effect={(
            <span>
              <span>Targets gain one of the same benefits:</span>
              <ul>
                <li><span>Breathe underwater and swim speed 1</span></li>
                <li><span>Night vision</span></li>
                <li><span>Climb speed 1</span></li>
              </ul>
            </span>
          )}
        />
      )
    }
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
          keywords="Magical, Range"
          duration="Scene ends"
          target="1 creature within 2 zones"
          effect={(
            <span>
              <span>You transform the target’s body and equipment into a small, medium, or large creature of your choice. If the target is unwilling, then the spell only works on a successful attack roll against the target’s MD,  and they can make an overcome roll at the end of their turns to end the effect. While transformed:</span>
              <ul>
                <li><span>Target can’t Spellcast or use any abilities you can’t do as an animal</span></li>
                <li><span>Target gains 4 temporary hit points per the spell tier</span></li>
                <li><span>Target’s PD equals 10 + double the spell tier, and MD equals 8 + double the spell tier</span></li>
                <li><span>Target’s natural melee weapons deal force damage depending on the animal’s size: 2 for small, 3 for medium, 4 for large</span></li>
                <li><span>Target gains traits the animal would have such as breathing underwater if they become a shark. Any new speeds equal the same speed as their land speed.</span></li>
                <li><span>Once the target is defeated, they revert back to their form and the magic ends</span></li>
              </ul>
            </span>
          )}
        />
      )
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
            effect="You summon a faerie warrior within 1 zone. When the faerie is reduced to 0 Hit Points, the spell ends."
          />
          <Monster 
            name="Faerie Warrior" 
            type="Small Faerie" 
            hp="5 per spell tier (ST)"
            pd="9 + double ST"
            md="9 + double ST"
            pb="double ST"
            speeds="fly 1"
            summons
            accordion
            actions={[{
              basic: true,
              name: "Sleepy Bow",
              keywords: "range, weapon",
              target: "1 creature within 3 zones",
              defense: "PD",
              damage: "double ST force damage",
              success: "slowed (turn ends)"
            },
            {
              basic: false,
              name: "Faerie Charm",
              keywords: "magical, range",
              target: "1 creature per spell tier within 3 zones",
              frequency: "Once per spell",
              defense: "MD",
              critical: "charmed (scene ends)",
              success: "charmed (turn ends)"
            }]}
            maneuvers={[{
              name: "Faerie Glamour",
              keywords: "magical",
              effect: "Faerie warrior becomes invisible (turn starts), but this effect ends early if they use a hostile act",
            }]}
          />
        </div>
      )
    }
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
            effect="You summon a kaiju within 3 zones. When the kaiju is reduced to 0 Hit Points, the spell ends."
          />
          <Monster 
            name="Kaiju" 
            type="Colossal Monstrosity" 
            hp="6 per spell tier (ST)"
            pd="10 + double ST"
            md="8 + double ST"
            pb="double ST"
            speeds="land 2"
            summons
            accordion
            actions={[{
              basic: true,
              name: "Bite",
              keywords: "melee, weapon",
              target: "1 creature engaged to the kaiju",
              defense: "PD",
              damage: "4 force damage per ST",
              success: "Target is swallowed if they are huge or smaller. While swallowed, a target is blinded, seized, and takes 1 ongoing toxic damage per ST. If a swallowed creature deals 4 or more damage per ST on a single turn, the kaiju throws up the target."
            }]}
          />
        </div>
      )
    },
  ]
]
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
          effect="When the target takes damage, the shield reduces the damage by your tier, and then the spell ends."
        />
      )
    },
    {
      title: "Quick Ward (Reaction)",
      actType: "Reaction",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You create a magical barrier around yourself."
          frequency="Spell 0 (Protection)"
          trigger="You see a creature make an attack roll against your PD"
          effect="Triggering attack roll takes +1 misfortune"
          keywords="Magical"
        />
      )
    }
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
          effect="The attacked creature gains resistance only to the triggering damage, and the attacker takes arcane damage equal to half of the triggering damage."
        />
      )
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
          effect="Creatures take +1 misfortune on attack rolls against the target"
        />
      )
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
            effect="Choose a damage type and the target gains resistance to it"
          />
        </div>
      )
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
          effect="When a creature uses a harmful ability against the target, except for abilities that affect a zone or multiple creatures, they must succeed on an overcome roll or waste their ability. If the target uses a harmful ability, then this spell ends."
        />
      )
    }
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
      )
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
            effect="Target gains resistance to all damage from magical abilities"
          />
        </div>
      )
    }
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
            effect="Target gains resistance to all damage. Whenever a creature deals damage to the target, they take arcane damage equal to half of the original damage."
          />
        </div>
      )
    },
  ]
]
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
          damage="You reduce the lighting of an area to darkness."
        />
      )
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
          defense="MD"
          keywords="Magical, Range"
          damage="2 necrotic damage per your tier"
          critical="Exposed (turn ends)"
        />
      )
    }
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
            effect="Target’s shadow becomes under your control. When the shadow is reduced to 0 hit points, the spell ends and the shadow returns to its original owner."
          />
          <Monster 
            name="Living Shadow" 
            type="Medium Undead" 
            hp="5 per spell tier (ST)"
            pd="10 + double ST"
            md="8 + double ST"
            pb="double ST"
            resistances="necrotic"
            vision="night"
            summons
            accordion
            traits={[{
              name: "Shadow Enmity",
              description: "Living shadow gains +1 fortune on attack rolls against its original owner"
            }]}
            actions={[{
              basic: true,
              name: "Shadow Claw",
              keywords: "melee, weapon",
              target: "1 engaged creature",
              defense: "MD",
              damage: "double ST necrotic damage",
            }]}
          />
        </div>
      )
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
          defense="MD"
          partial="Hinderd (turn ends)"
          success="Blinded (turn ends)"
          critical="Blinded (scene ends)"
        />
      )
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
      )
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
          effect={(
            <span>
              <span>The wall has the following properties:</span>
              <ul>
                <li><span>Wall is made of magical darkness</span></li>
                <li><span>When a creature passes through the wall, they take 2 necrotic damage per spell tier</span></li>
              </ul>
            </span>
          )}
        />
      )
    }
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
          effect="Targeted zones become dangerous zones (1 necrotic damage per spell tier) that only hurts enemies. You are obscured in the targeted zones as you are nearly indistinguishable from your shadows."
          duration="Scene ends"
        />
        </div>
      )
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
          effect="Target becomes obscured. When a creature damages the target with a melee ability, they take 2 necrotic damage per spell tier."
        />
        </div>
      )
    }
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
            effect="Targeted zones become dangerous zones (1 necrotic damage per spell tier) filled with magical darkness. When a creature takes this damage, make an attack roll against their MD, and on a success, they are seized (turn starts) by shadowy tendrils."
          />
        </div>
      )
    },
  ]
]
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
          defense="MD"
          keywords="Magical, Range"
          damage="2 arcane damage per your tier"
          critical="Teleported up to 1 zone away on a standing surface"
        />
      )
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
          effect="One medium or smaller object that you hold teleports to the target’s hand. If they can’t hold the object, then it falls to the ground."
          keywords="Magical, Range"
        />
      )
    }
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
            defense="MD"
            damage="4 arcane damage per spell tier"
            success="Teleported to a standing surface up to a number of zones away equal to the spell tier"
          />
        </div>
      )
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
          effect="You teleport up to anywhere within the targeted zone"
        />
      )
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
          effect="Designate willing creatures within your zone equal to the spell tier. During the duration, you can use a maneuver to teleport designated creatures to the targeted zone, even without line of sight. Then the spell ends."
        />
      )
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
          effect="You and the target teleport to switch places. If the target is unwilling, you must succeed on an attack roll against the target’s MD."
        />
      )
    }
  ],
  [
    {
      title: "Create Portal (Action)",
      actType: "Action",
      spell: (
        <div>
          <AbilityCard 
          accordion
          descriptor="You create a temporary teleportation portal that others can travel through."
          frequency="Spell 2 (Teleportation)"
          target="Your zone and another zone within a number of zones equal to the spell tier"
          keywords="Magical, Range"
          effect="Your zone and another zone within a number of zones equal to the spell tier"
          duration="Scene ends"
        />
        </div>
      )
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
          effect="You teleport anywhere within the target zones and can bring a willing creature with you."
        />
        </div>
      )
    }
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
            defense="MD"
            damage="4 arcane damage per spell tier. If this damage kills the target, then their body is lost within a random realm"
            critical="Same as a success, but target becomes confused (scene ends) when they reappear"
            success="Target disappears and then reappears at the end of their next turn"
          />
        </div>
      )
    },
  ]
]
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
          duration="Turn ends"
          keywords="Magical, Range"
          effect={(
            <span>
              <span>Choose to speed up to slow down the target. If the target is unwilling, you must succeed on an attack roll against their MD</span>
              <ul>
                <li><span><i>Speed Up:</i> Target’s speeds are doubled</span></li>
                <li><span><i>Slow Down:</i> Target is slowed</span></li>
              </ul>
            </span>
          )}
        />
      )
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
          defense="MD"
          damage="2 arcane damage per your tier"
          critical="Dazed (turn ends)"
          keywords="Magical, Range"
        />
      )
    }
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
            trigger="You see a creature within 1 zone affected by an attack roll."
            keywords="Magical, Range"
            effect="Target isn’t affected by the triggering attack roll until the end of their next turn"
          />
        </div>
      )
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
          effect="Target becomes hastened"
        />
      )
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
          defense="MD"
          partial="Dazed (turn ends)"
          success="Dazed (scene ends)"
          critical="Same as a success, and slowed while dazed"
        />
      )
    },
    {
      title: "Temporal Duplicate (Maneuver)",
      actType: "Maneuver",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You manifest a slightly different version of yourself from another timeline to aid you."
          frequency="Spell 1 (Time)"
          duration="Focus for the scene"
          keywords="Magical, Range"
          effect="You create a slightly translucent duplicate of yourself within 1 zone. The duplicate’s defenses equal 10 + double the spell tier and hit points equal 4 per spell tier. When you focus on this spell, your duplicate can Disengage or Move. You can see and hear through your duplicate and take any acts from the duplicate’s position."
        />
      )
    }
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
          keywords="Escalation, Magical, Range"
          effect={(
            <span>
              <span>Choose to speed up to slow down the targeted zones:</span>
              <ul>
                <li><span><i>Speed Up:</i> Any creature that starts their turn in the targeted zones becomes hastened (turn starts)</span></li>
                <li><span><i>Slow Down:</i> Whenever a creature starts their turn in the targeted zones or enters the targeted zones, make an attack roll against their MD. On a success, they are dazed (turn starts). You can only make this attack roll against the same creature once per turn.</span></li>
              </ul>
            </span>
          )}
        />
      )
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
          defense="MD"
          critical="Same as success, but time pauses for the scene (scene ends)"
          success="Time pauses for the target and they can’t act or be interacted with (turn ends). Any current effects already on the target like ongoing damage is paused until time resumes for the target."
          partial="Slowed (turn ends) and dazed (turn ends)"
        />
        </div>
      )
    }
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
            effect="Time stops and you have 2 turns after your current turn before time returns to normal. Any current conditions on you continue and you can use abilities that only affect yourself as normal. If you use any ability that affects others, then the ability doesn’t start until time returns to normal. For example, if you Spellcast fireball at enemies during the time freeze, the spell doesn’t damage your foes until time resumes normally."
          />
        </div>
      )
    },
  ]
]
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
          target="1d4+1 enemies within your zone"
          defense="PD"
          damage="1 acid damage per your tier"
          keywords="Magical"
        />
      )
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
          defense="PD"
          damage="2 toxic damage per your tier"
          critical="Hindered (turn ends)"
          keywords="Magical, Range"
        />
      )
    }
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
            effect="Targeted zones become dangerous zones (1 toxic damage per spell tier). When a creature takes this damage, make an attack roll against their PD, and on a success, the creature becomes hindered (turn starts)."
          />
        </div>
      )
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
          defense="PD"
          damage="4 toxic damage per spell tier"
          success="1 ongoing toxic damage per spell tier"
        />
      )
    },
    {
      title: "Paralyzing Sting (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="With a touch, you magically inject your foe with paralyzing venom."
          frequency="Spell 1 (Toxic)"
          target="1 creature engaged to you"
          keywords="Escalation, Magical, Melee"
          defense="PD"
          damage="5 toxic damage per spell tier"
          success="Dazed (turn ends)"
        />
      )
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
          defense="PD"
          damage="2 toxic damage per spell tier"
          success="Hindered (turn ends)"
        />
      )
    }
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
          target="1d4+1 creatures within your zone"
          defense="PD"
          damage="2 toxic damage per spell tier"
          keywords="Escalation, Magical, Range"
          success="1 ongoing toxic damage per spell tier and hindered while taking this ongoing damage"
        />
      )
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
          effect="The targeted zones become dangerous zones (1 toxic damage per spell tier). When a creature takes this damage, make an attack roll against their PD, and on a success, they are dazed (turn ends). On your turn, you can spend a maneuver to move each cloud up to 1 zone."
        />
        </div>
      )
    }
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
            defense="PD"
            damage="4 toxic damage per spell tier. If any damage from this spell kills the target, then you can choose to infect another creature within the same zone as the previous target. Repeat this spell’s attack roll against the new target."
            keywords="Escalation, Magical, Range"
            success="1 ongoing toxic damage per spell tier"
          />
        </div>
      )
    },
  ]
]
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
          defense="MD"
          damage="2 unholy damage per your tier"
          keywords="Magical, Range"
          critical="Hindered (turn ends)"
        />
      )
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
          defense="PD"
          success="Seized (turn ends)"
          critical="Same as a success, and 1 unholy damage per your tier"
          keywords="Magical"
        />
      )
    }
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
            defense="MD"
            critical="Same as a success, and hindered while marked"
            success="Same as a partial, but marked (scene ends)"
            partial="Marked (turn ends). While marked, the target takes additional 1 unholy damage per spell tier whenever they take damage"
          />
        </div>
      )
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
          defense="MD"
          damage="2 unholy damage per spell tier"
          success="Hindered (turn ends)"
        />
      )
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
          effect="When a creature uses the target weapon to Strike, they deal an additional 1 unholy damage per spell tier."
        />
      )
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
          defense="MD"
          damage="4 unholy damage per spell tier"
          success="Dazed (turn ends)"
        />
      )
    }
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
          effect="You summon a demon within 1 zone. When the demon is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Demon" 
          type="Large Fiend" 
          hp="6 per spell tier (ST)"
          pd="10 + double ST"
          md="8 + double ST"
          pb="double ST"
          resistances="unholy"
          summons
          accordion
          traits={[{
            name: "Fiendish Aura",
            description: "Enemies within the fiend’s zone gain +1 misfortune to overcome rolls"
          }]}
          actions={[{
            basic: true,
            name: "Corrupting Rend",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "triple ST force damage",
            success: "hindered (turn ends)"
          }]}
          />
        </div>
      )
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
          effect={(
            <div>
              <p>The wall has the following properties:</p>
              <ul>
                <li><span>Creatures, objects, and physical effects can’t pass through the wall.</span></li>
                <li><span>Each part of the wall (one zone border) has defenses equal to 10 + double spell tier and 5 hit points per spell tier.</span></li>
                <li><span>Make an attack roll against the MD of any creature that starts their turn within a zone touching the wall or enters a zone touching the wall. On a success, the target must use a maneuver to Move up to the wall, and then take 2 unholy damage per spell tier.</span></li>
              </ul>
            </div>
          )}
        />
        </div>
      )
    }
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
            defense="MD"
            damage="2 unholy damage per spell tier, and if this damage kills the target, then their soul is dragged to the lower realms."
            keywords="Escalation, Magical, Range"
            critical="Same as a success, but hindered (scene ends)"
            success="Hindered (turn ends), and dazed while hindered"
          />
        </div>
      )
    },
  ]
]
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
          duration="Turn ends"
          effect="When you take damage from a melee ability, the attacker takes 1 force damage per your tier."
          keywords="Magical"
        />
      )
    },
    {
      title: "Empowered Strike (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You attack with a magically empowered weapon."
          frequency="Spell 0 (War)"
          effect="Strike and you deal 1 additional arcane damage per your tier"
          keywords="Magical"
        />
      )
    }
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
            effect="Choose cold, fire, force, lightning, or toxic. Strike, and your weapon deals an additional 2 damage per spell tier of the chosen damage type."
          />
        </div>
      )
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
          effect="Target gains 4 temporary hit points per spell tier"
        />
      )
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
          effect="Strike with +1 fortune per spell tier. Your attack roll ignores any misfortune on the roll."
        />
      )
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
          defense="PD"
          damage="3 force damage per spell tier"
        />
      )
    }
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
          effect="Targeted zones become dangerous zones (1 force damage per spell tier), and when creatures take this damage, they also take 1 ongoing force damage per spell tier. As a maneuver, you can move each targeted blade storm up to 1 zone away."
        />
        </div>
      )
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
          effect="Choose cold, fire, lightning, or toxic. Target gains resistance to the chosen damage type, and when a creature damages the target with a melee ability, they take 2 damage per spell tier of the chosen damage type."
        />
        </div>
      )
    }
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
            target="All enemies within 1 zone"
            effect="Strike each target, and you can teleport to each target before you Strike"
          />
        </div>
      )
    },
  ]
]
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
          defense="PD"
          critical="Pushed up to 1 zone away"
          success="Pushed within your zone"
          keywords="Magical"
        />
      )
    },
    {
      title: "Splash (Action)",
      actType: "Action",
      spell: (
        <AbilityCard 
          accordion
          descriptor="You launch a small wave at your enemy."
          frequency="Spell 0 (Water)"
          defense="PD"
          target="1 creature within 3 zones"
          damage="2 force damage per your tier"
          critical="Pushed within their zone"
          keywords="Magical, Range"
        />
      )
    }
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
          trigger="You see a creature Move or teleport within 1 zone"
          keywords="Escalation, Magical, Range"
          target="Triggering creature"
          defense="PD"
          critical="Pushed up to 1 zone away"
          success="Pushed within their zone"
        />
      )
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
            defense="PD"
            damage="2 force damage per spell tier"
            frequency="Spell 1 (Water)"
            keywords="Escalation, Magical, Range"
            success="Prone"
          />
        </div>
      )
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
          effect="Targeted zones become difficult zones. When a creature starts their turn in the zone or moves through the zone, make an attack roll against their PD, and on a success, the creature falls prone You can only make this attack roll against a creature once per turn."
        />
      )
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
          effect={(
            <div>
              <p>The wall has the following properties:</p>
              <ul>
                <li><span>Range abilities using attack rolls take +1 if the target is beyond the wall. Any abilities that pass through the wall that deal fire damage only deals half damage.</span></li>
                <li><span>Any cold damage abilities that pass through the wall instead freeze one zone border of the wall. The frozen section has defenses of 8 + double spell tier and 4 hit points per spell tier.</span></li>
                <li><span>When a creature attempts to pass through the wall, you can stop their movement on a successful attack roll against their PD.</span></li>
              </ul>
            </div>
          )}
        />
      )
    }
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
          effect="You summon a water elemental within 1 zone. When the elemental is reduced to 0 hit points, the spell ends."
        />
        <Monster 
          name="Water Elemental" 
          type="Large Elemental" 
          hp="6 per spell tier (ST)"
          pd="10 + double ST"
          md="8 + double ST"
          pb="double ST"
          resistances="fire"
          speeds="swim 1"
          summons
          accordion
          traits={[{ name: 'Aquatic', description: 'elemental can breath underwater'}]}
          actions={[{
            basic: true,
            name: "Slam",
            keywords: "melee, weapon",
            target: "1 engaged creature",
            defense: "PD",
            damage: "triple ST force damage",
            success: "prone"
          },
          {
            basic: false,
            name: "Splash",
            keywords: "ranged, weapon",
            target: "1 creature within 3 zones",
            defense: "PD",
            damage: "double ST force damage"
          }]}
          />
        </div>
      )
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
          defense="PD"
          critical="Same as success, but 1 ongoing force damage per spell tier while seized"
          success="Same as a partial success, but seized (scene ends)"
          partial="Seized (turn ends), and the target must hold their breath or begin drowning while seized"
        />
        </div>
      )
    }
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
            defense="PD"
            damage="2 force damage per spell tier"
            success="seized (scene ends) if huge or smaller, or prone if colossal"
            effect="Anyone within the affected zone is submerged in water, and must hold their breath. At the start of your subsequent turns, the wave moves forward in a straight line, targeting all creatures in an adjacent zone, and bringing any seized creatures with the wave. The wave stops and collapses at the end of the scene."
          />
        </div>
      )
    },
  ]
]