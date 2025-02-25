import "./index.scss";
import fortune from "../../assets/fortune-icon-v2.png";
import AbilityCard from "../../components/AbilityCard";
import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Accordion from "../../components/Accordion";

function Ancestries() {
  const [selectedAncestry, setSelectedAncestry] = useState('')

  function handleAncestry(label: string) {
    setSelectedAncestry(label)
  }
  const dropdownItems = [
    { label: "Human", onClick: handleAncestry },
    { label: "Beastkin", onClick: handleAncestry },
    { label: "Cambion", onClick: handleAncestry },
    { label: "Dhampir", onClick: handleAncestry },
    { label: "Drakkin", onClick: handleAncestry },
    { label: "Dwarf", onClick: handleAncestry },
    { label: "Elementalkin", onClick: handleAncestry },
    { label: "Elf", onClick: handleAncestry },
    { label: "Forgeborn", onClick: handleAncestry },
    { label: "Goblin", onClick: handleAncestry },
    { label: "Giantkin", onClick: handleAncestry },
    { label: "Gnome", onClick: handleAncestry },
    { label: "Halfling", onClick: handleAncestry },
    { label: "Kobold", onClick: handleAncestry },
    { label: "Lycanblood", onClick: handleAncestry },
    { label: "Nephilim", onClick: handleAncestry },
    { label: "Orc", onClick: handleAncestry },
    { label: "Silvan", onClick: handleAncestry },
    { label: "Umbraling", onClick: handleAncestry },
    { label: "Wight", onClick: handleAncestry },
    { label: "Mixed", onClick: handleAncestry },
  ]

  return (
    <div className='ancestries'>
      <div className='ancestries-content'>
        <h1>Ancestries</h1>
        <p>Your ancestry represents who your hero’s people are, whether they be humans or elves. Ancestries give your hero starting features and powers typical of their people. Each ancestry has one <b>primary trait (P)</b> and one <b>secondary trait (S)</b>.</p>

        <h2>Languages</h2>
        <p>Legends Rise assumes everyone speaks the common language, and that sign language is widely understood throughout most communities. Discuss with your table and GM if your hero knows more specific languages that are appropriate for their hero. An elven hero that grew up among elves likely knows the elven language, but might know the dwarven language if they were adopted by dwarves at an early age. Meanwhile an arcanist likely knows the ancient language of magic.</p>
      
        <h2>List of Ancestries</h2>
        <p>You can choose from a large list of ancestries, including mixed ancestry (combination of two ancestries).</p>
        <Accordion title="Ancestry List" content={(
          <div>
            <ul className="ancestries-list" style={{paddingTop: '10px'}}>  
              <li><b>Humans:</b> <span>You are the most ambitious and adaptable of the mortals.</span></li>
              <li><b>Beastkin:</b> <span>You are an animal-like humanoid attuned to nature.</span></li>
              <li><b>Cambion:</b> <span>You have been touched by the dark powers of the lower realms.</span></li>
              <li><b>Dhampir:</b> <span>You have vampiric powers.</span></li>
              <li><b>Drakkin:</b> <span>You are a draconic humanoid.</span></li>
              <li><b>Dwarf:</b> <span>You are stout but as tough as the mountains.</span></li>
              <li><b>Elementalkin:</b> <span>You have an affinity for the elemental realms, embodying air, earth, fire, ice, or water.</span></li>
              <li><b>Elf:</b> <span>You are nimble and graceful.</span></li>
              <li><b>Forgeborn:</b> <span>You are a sentient construct, animated by magic or ancient craftsmanship.</span></li>
              <li><b>Goblin:</b> <span>You are small, mischievous, with a knack for survival.</span></li>
              <li><b>Giantkin:</b> <span>You possess the power of giants in your blood.</span></li>
              <li><b>Gnome:</b> <span>You are a shorter people with faerie magic.</span></li>
              <li><b>Halfling:</b> <span>Smaller humanoids with uncanny luck.</span></li>
              <li><b>Kobold:</b> <span>You are a small reptilian humanoid that thrives in groups.</span></li>
              <li><b>Lycanblood:</b> <span>You possess the latent powers of a were-creature.</span></li>
              <li><b>Nephilim:</b> <span>You have been blessed with celestial powers.</span></li>
              <li><b>Orc:</b> <span>You are fierce and proud.</span></li>
              <li><b>Silvan:</b> <span>You are a sentient, humanoid plant or tree.</span></li>
              <li><b>Umbraling:</b> <span>You have the dark powers of the shadow realm.</span></li>
              <li><b>Wight:</b> <span>You are an undead revenant, kept alive by your anger.</span></li>
              <li><b>Mixed:</b> <span>Your parents are from two different ancestries, granting you a unique blend of traits.</span></li>
            </ul>
          </div>
        )} />

        <Dropdown items={dropdownItems} startLabel="Select an ancestry" />

        {selectedAncestry === "Human" && (
          <div>
            <h3 id="human">Human Ancestry</h3>
            <p>Humans are the most common ancestry in Xorik.</p>
            <ul>
              <li><span><b>Size:</b> Choose small or medium, as humans typically are between 4 to 7 feet tall.</span></li>
              <li><span><b>Expert (S):</b> You gain another knack.</span></li>
              <li><span><b>Ambitious (P):</b> You gain a tier 1 class talent or a tier 1 theme talent.</span></li>
            </ul>
          </div>
        )}
        {selectedAncestry === "Beastkin" && (
          <div>
            <h3 id="beastkin">Beastkin Ancestry</h3>
            <p>Animal-like humanoids, beastkin all differ widely depending on their animal likeness. Originally creatures from the green realm, beastkin have formed communities in the mortal world.</p>
            <ul>
              <li><span><b>Size:</b> Choose small or medium, as beastkin typically are between 4 to 7 feet tall.</span></li>
              <li><span><b>Primal Connection (S):</b> You can communicate with animals that resemble you, such a bird beastkin communicating with birds.</span></li>
              <li><span><b>Animal Characteristics (P):</b> Choose two characteristics from the following list.</span>
                <ul className="beastkin-characteristics">
                  <li><span><b>Aquatic:</b> You can breathe underwater and gain a swim speed of 1.</span></li>
                  <li><span><b>Behemoth:</b> Your size increases to large.</span></li>
                  <li><span><b>Climber:</b> You gain a climb speed of 1.</span></li>
                  <li><span><b>Hunter:</b> You gain night vision.</span></li>
                  <li><span><b>Natural Weapons:</b> You have claws, sharp teeth, horns, or other means of hurting foes. Your natural melee weapons deal 3 physical damage.</span></li>
                  <li><span><b>Scales:</b> Your EVN increases by +1 while unarmored.</span></li>
                  <li><span><b>Wings:</b> You gain a fly speed of 1. However, your hollow bones make you fragile, so your maximum hit points decrease by your proficiency bonus.</span></li>
                  <li><span><b>Venomous:</b> On a critically successful Strike with your natural melee weapon, the target is hindered (turn ends).</span></li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {selectedAncestry === "Cambion" && (
          <div>
            <h3 id="cambion">Cambion Ancestry</h3>
            <p>When mortals consort with fiends and dabble in dark magic, the lower realms influence on the mortal realm deepens, sometimes resulting in people born with dark powers.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium depending on the cambion’s parents. An cambion born to gnomish parents would likely be small, while one born among humans is likely medium.</span></li>
              <li><span><b>Infernal Heart (S):</b> You gain resistance to unholy damage equal to your tier.</span></li>
              <li><span><b>Fiend Form (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Fiend Form"
              actType="Maneuver"
              descriptor="You unleash the power of the lower realms to transform into a fiend."
              frequency="Encounter"
              keywords="Magical"
              duration="Scene ends"
              effect="You gain temporary hit points equal to your proficiency bonus. When you deal damage from an attack roll, you deal additional unholy damage equal to your tier." 
            />
          </div>
        )}
        {selectedAncestry === "Dhampir" && (
          <div>
            <h3 id="dhampir">Dhampir Ancestry</h3>
            <p>Dhampirs are rare creatures born out of the union between a vampire and mortal. Other dhampirs are created when a mortal is cursed with vampiric magic. Dhampirs only possess minor powers of true vampires.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium</span></li>
              <li><span><b>Child of Darkness (S):</b> You gain resistance to necrotic damage equal to your tier.</span></li>
              <li><span><b>Vampiric Bite (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Vampiric Bite"
              actType="Action"
              descriptor="You bite down on a living foe, draining their blood, and gaining a surge of vitality."
              frequency="Encounter"
              keywords="Escalation, Melee"
              target="1 living engaged creature"
              defense="EVN"
              damage="5 physical damage per your tier"
              effect="You gain temporary hit points equal to half the damage dealt (scene ends)" 
            />
          </div>
        )}
        {selectedAncestry === "Drakkin" && (
          <div>
            <h3 id="drakkin">Drakkin Ancestry</h3>
            <p>Proud dragon-like humanoids, drakkins can be a terrifying foe or great ally.</p>
            <ul>
              <li><span><b>Size:</b> Medium</span></li>
              <li><span><b>Draconic Heritage:</b> Choose cold, fire, lightning, or toxic as your draconic heritage. Your draconic heritage determines the features you gain from this ancestry. For mixed ancestries, you still choose a draconic heritage.</span></li>
              <li><span><b>Draconic Resistance (S):</b> You gain resistance to the damage type chosen for draconic heritage equal to your tier.</span></li>
              <li><span><b>Drakkin Breath Weapon (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Drakkin Breath Weapon"
              actType="Action"
              descriptor="Like a dragon, you exhale elemental energy at your foes."
              frequency="Encounter"
              keywords="Escalation"
              target="1d4+1 enemies in your zone"
              defense="EVN"
              damage="3 damage per your tier of the damage type chosen for draconic heritage"
            />
          </div>
        )}
        {selectedAncestry === "Dwarf" && (
          <div>
            <h3 id="dwarf">Dwarf Ancestry</h3>
            <p>Dwarves are an ancient ancestry of Xorik, living in the great mountains.</p>
            <ul>
              <li><span><b>Size:</b> Medium</span></li>
              <li><span><b>Dwarven Constitution (S):</b> Your starting hit points increase by your proficiency bonus.</span></li>
              <li><span><b>Dwarven Resilience (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Dwarven Resilience"
              actType="Free"
              descriptor="You dig deep and rely on the stubborn toughness of your ancestors."
              frequency="Encounter"
              trigger="You become shaken"
              effect="Spend a recovery"
            />
          </div>
        )}
        {selectedAncestry === "Elementalkin" && (
          <div>
            <h3 id="elementalkin">Elementalkin Ancestry</h3>
            <p>In some places, the barrier between the mortal realm and elemental realms are thin, resulting in some being born with elemental power.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium depending on the elementalkin’s parents. An elementalkin born to gnomish parents would likely be small, while one born among drakkins is likely medium.</span></li>
              <li><span><b>Elemental Soul:</b> Choose air, earth, fire, ice, or water as your elemental soul. Your elemental soul determines the features you gain from this ancestry. For mixed ancestries, you still choose an elemental soul.</span></li>
              <li><span><b>Elemental Affinity (S):</b> You gain resistance to a damage type depending on your elemental soul equal to your tier: lightning (air), fire (fire), or cold (ice). For water, you can breath underwater and gain a swim speed of 1. For earth, your starting hit points increase by your proficiency bonus.</span></li>
              <li><span><b>Elemental Magic (P):</b> You learn a battle spell depending on your elemental soul even if you don’t know the spell’s magic tradition: lightning bolts (air), stone armor (earth), fireball (fire), frozen prison (ice), or crashing wave (water). Once per short rest, you can Spellcast this spell at a spell tier equal to your tier without spending mana.</span></li>
            </ul>
          </div>
        )}
        {selectedAncestry === "Elf" && (
          <div>
            <h3 id="elf">Elf Ancestry</h3>
            <p>The long lived and nimble elves are outsiders that escaped a calamity on their homeworld by traveling to this world.</p>
            <ul>
              <li><span><b>Size:</b> Medium</span></li>
              <li><span><b>Elven Heritage:</b> Choose whether you are a light elf or dark elf. Light elves are most well known to other surface dwellers, and often make wondrous cities within nature. Dark elves often live underground in the night lands, and have adapted to their subterranean home.</span></li>
              <li><span><b>Subterranean Sight (Dark Elf Only) (S):</b> You gain night vision.</span></li>
              <li><span><b>Nimble Steps (Ligh Elf Only) (S):</b> When you Disengage, you can traverse up to 1 zone away. </span></li>
              <li><span><b>Elven Accuracy (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Elven Accuracy"
              actType="Free"
              descriptor="Relying on your heightened senses and agility, you strike true."
              frequency="Encounter"
              trigger="You see the result of your attack roll"
              effect="Reroll the triggering attack roll, and take the higher result"
            />
          </div>
        )}
        {selectedAncestry === "Forgeborn" && (
          <div>
            <h3 id="forgeborn">Forgeborn Ancestry</h3>
            <p>Forgeborn are sentient constructs that were created to help fight in past wars.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium, depending on their construction with smaller models made for scouting.</span></li>
              <li><span><b>Armored Core (S):</b> Your Evasion increases by +1.</span></li>
              <li><span><b>Overdrive (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Overdrive"
              actType="Free"
              descriptor="You push your constructed body to the limits."
              frequency="Encounter"
              duration="End of your turn"
              effect="You become hastened"
            />
          </div>
        )}
        {selectedAncestry === "Giantkin" && (
          <div>
            <h3 id="giantkin">Giantkin Ancestry</h3>
            <p>Giantkins claim the latent powers of giants either from through their bloodline, or being blessed by giant magic. Many giantkins have their own communities while others live closely with true giants.</p>
            <ul>
              <li><span><b>Size:</b> Medium unless you have tall stature. </span></li>
              <li><span><b>Tall Stature (S):</b> Your size becomes large. You can still fit into most spaces a medium sized creature can, but it's not always comfortable.</span></li>
              <li><span><b>Might of Giants (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Might of Giants"
              actType="Maneuver"
              descriptor="You call upon the power of giants to grow in stature."
              frequency="Encounter"
              keywords="Magical"
              duration="Scene ends"
              effect="You gain temporary hit points equal to your proficiency bonus. Your size can become huge."
            />
          </div>
        )}
        {selectedAncestry === "Goblin" && (
          <div>
            <h3 id="goblin">Goblin Ancestry</h3>
            <p>Small people, goblins are survivors, rumored to once have come from the green realm along with gnomes. Unlike gnomes, goblins possess a tricky gift for getting out of trouble.</p>
            <ul>
              <li><span><b>Size:</b> Small </span></li>
              <li><span><b>Tricksy Eyes (S):</b> You gain night vision.</span></li>
              <li><span><b>Not Today! (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Not Today!"
              actType="Reaction"
              descriptor="As you see an attack coming, you dart away."
              frequency="Encounter"
              trigger="You see a creature make an attack roll against you"
              effect="Disengage. If your movement puts you out of range of the triggering attack roll, then the roll has no effect on you."
            />
          </div>
        )}
        {selectedAncestry === "Gnome" && (
          <div>
            <h3 id="gnome">Gnome Ancestry</h3>
            <p>Gnomes originated from the magical green realm, and still retain faerie magic as well as a neverending drive to try new things.</p>
            <ul>
              <li><span><b>Size:</b> Small </span></li>
              <li><span><b>Faerie Trickery (S):</b> You learn the illusion magic tradition.</span></li>
              <li><span><b>Faerie Lights (P):</b> You learn the dazzling lights battle spell. Once per short rest, you can Spellcast this spell at a spell tier equal to your tier without spending mana.</span></li>
            </ul>
          </div>
        )}
        {selectedAncestry === "Halfling" && (
          <div>
            <h3 id="halfling">Halfling Ancestry</h3>
            <p>Short humanoids resembling smaller humans, halflings make up for their size with luck and bravery to overcome danger.</p>
            <ul>
              <li><span><b>Size:</b> Small </span></li>
              <li><span><b>Resolve (S):</b> You gain +1 to overcome rolls.</span></li>
              <li><span><b>Lucky (P):</b> You start off each game session with an additional hero point, and your maximum amount of hero points you can have at once increases by +1.</span></li>
            </ul>
          </div>
        )}
        {selectedAncestry === "Kobold" && (
          <div>
            <h3 id="kobold">Kobold Ancestry</h3>
            <p>Small reptilian humanoids, kobolds make up for their frail bodies with cunning tactics and group mentality.</p>
            <ul>
              <li><span><b>Size:</b> Small </span></li>
              <li><span><b>Strenght in Numbers (S):</b> You gain <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> to attack rolls against targets engaged to an ally.</span></li>
              <li><span><b>Distracting Cry (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Distracting Cry"
              actType="Maneuver"
              descriptor="With a loud yip from such a small frame, you momentarily catch your foes’ bewildered attention."
              frequency="Encounter"
              target="1d4+1 enemies within your zone"
              defense="RES"
              critical="exposed (scene ends)"
              success="exposed (turn ends)"
            />
          </div>
        )}
        {selectedAncestry === "Lycanblood" && (
          <div>
            <h3 id="lycanblood">Lycanblood Ancestry</h3>
            <p>Children of lycanthropes often possess minor powers of their cursed parents, including animalistic traits. There are many types of lycanthropes from werewolves to wererats, so consider what your heritage manifests.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium </span></li>
              <li><span><b>Supernatural Predator (S):</b> You gain <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> to attack rolls against shaken targets.</span></li>
              <li><span><b>Lycan Form (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Lycan Form"
              actType="Maneuver"
              descriptor="Your body transforms into an animalistic hybrid form that makes you stronger than normal."
              frequency="Encounter"
              keywords="Magical"
              duration="Scene ends"
              effect="You gain temporary hit points equal to your proficiency bonus, your natural melee weapons deal 3 physical damage, and +1 fortune to Disarm, Grab, Shove, Trip, and any skill rolls requiring athleticism."
            />
          </div>
        )}
        {selectedAncestry === "Nephilim" && (
          <div>
            <h3 id="nephilim">Nephilim Ancestry</h3>
            <p>When mortals mingle with angels or perform extraordinary good deeds, the heavenly realms bestow gifts upon the mortal realm, sometimes resulting in people born with angelic powers.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium depending on the nephilim's parents. A nephilim born to gnomish parents would likely be small, while one born among drakkins is likely medium.</span></li>
              <li><span><b>Pure of Heart (S):</b> You gain resistance to holy damage equal to your tier.</span></li>
              <li><span><b>Celestial Form (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Celestial Form"
              actType="Maneuver"
              descriptor="You unleash the power of the heavens to transform into an angel."
              frequency="Encounter"
              keywords="Magical"
              duration="Scene ends"
              effect="You gain a fly speed equal to your land speed. When you deal damage from an attack roll, you deal additional holy damage equal to your tier."
            /> 
          </div>
        )}
        {selectedAncestry === "Orc" && (
          <div>
            <h3 id="orc">Orc Ancestry</h3>
            <p>Orcs are a martial focused people that favor athleticism and accomplishments.</p>
            <ul>
              <li><span><b>Size:</b> Medium</span></li>
              <li><span><b>Orcish Fury (S):</b> When you are shaken, you gain <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> to attack rolls.</span></li>
              <li><span><b>Glorious Vigor (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Glorious Vigor"
              actType="Maneuver"
              descriptor="You can push your body’s resilience beyond mortal limits."
              frequency="Encounter"
              duration="Scene ends"
              effect="You gain temporary hit points equal to your shaken value."
            /> 
          </div>
        )}
        {selectedAncestry === "Silvan" && (
          <div>
            <h3 id="silvan">Silvan Ancestry</h3>
            <p>Deep within forests where the borders between the green realm and mortal world are thin, primal magic awakens the plants and trees creating silvans. Each silvan is different with some resembling humanoid plants while others are more tree-like. Silvans typically guard their natural homes or carry a great purpose assigned to them upon their creation.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium</span></li>
              <li><span><b>Regenerative Flora (S):</b> You gain an extra recovery.</span></li>
              <li><span><b>Verdant Reach (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Verdant Reach"
              actType="Free"
              descriptor="You stretch your plant-like limb or vine to reach farther than possible."
              frequency="Encounter"
              duration="End of your turn"
              effect="Whenever you use a range ability with a target, you can increase the range by 1 zone. For a melee ability, you can target anyone within 1 zone."
            />  
          </div>
        )}
        {selectedAncestry === "Umbraling" && (
          <div>
            <h3 id="umbraling">Umbraling Ancestry</h3>
            <p>Umbralings are humanoids that have been touched by the shadow realm’s ebony power. Some communities of umbralings even live in the dreaded realm.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium depending on the umbraling’s parents. An umbraling born to gnomish parents would likely be small, while one born among drakkins is likely medium.</span></li>
              <li><span><b>Dark Sight (S):</b> You gain night vision.</span></li>
              <li><span><b>Umbral Magic (P):</b> You learn the darkness battle spell even if you don’t know the shadow magic tradition. Once per short rest, you can Spellcast this spell at a spell tier equal to your tier without spending mana.</span></li>
            </ul>
          </div>
        )}
        {selectedAncestry === "Wight" && (
          <div>
            <h3 id="wight">Wight Ancestry</h3>
            <p>Undead humanoids that mostly resemble their former living forms. A wight’s undeath is fueled by vengeance or a desire to satisfy a purpose left unfulfilled during their mortal life.</p>
            <ul>
              <li><span><b>Size:</b> Small or medium, as wights are the same size as when they lived.</span></li>
              <li><span><b>Undead:</b> Your creature type becomes undead.</span></li>
              <li><span><b>Undead Resilience (S):</b> You gain resistance to necrotic damage equal to your tier.</span></li>
              <li><span><b>Death Mark (P):</b> You gain the following ability:</span></li>
            </ul>
            <AbilityCard
              name="Death Mark"
              actType="Maneuver"
              descriptor="You focus your undying rage on a foe, and your purpose becomes to end their life."
              frequency="Encounter"
              keywords="Magical"
              target="1 creature within 1 zone"
              duration="Scene ends or the target dies"
              effect="When you deal damage from an attack roll against the target, you deal additional necrotic damage equal to your tier. When the target dies, you gain temporary hit points equal to double your proficiency bonus until your next rest."
            />  
          </div>
        )}
        {selectedAncestry === "Mixed" && (
          <div>
            <h3 id="mixed">Mixed Ancestry</h3>
            <p>You were born with parents from two different ancestries, such as an elven father and human mother. If you would like to play a hero with two different ancestries, choose an ancestry for each of your hero’s parents. You can mix and match your visual appearance, as well as the features you gain from your mixed ancestry, including secondary and primary ancestral traits.</p>
            <ul>
              <li><span><b>Size:</b> Choose a size from one of your parental ancestries.</span></li>
              <li><span><b>Traits:</b>  Choose a primary trait from one of your parental ancestries and the secondary trait from your other parental ancestry.</span></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ancestries;