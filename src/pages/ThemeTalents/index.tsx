import "./index.scss";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import Modifier from "../../components/Modifier";
import Dropdown from "../../components/Dropdown";

function ThemeTalents() {
  const [isArcane, setArcane] = useState(false);
  const [isCunning, setCunning] = useState(false);
  const [isDivine, setDivine] = useState(false);
  const [isMartial, setMartial] = useState(false);
  const [isNature, setNature] = useState(false);

  const handleArcane = () => {
    setArcane(true);
    setCunning(false);
    setDivine(false);
    setMartial(false);
    setNature(false);
  };
  
  const handleCunning = () => {
    setArcane(false);
    setCunning(true);
    setDivine(false);
    setMartial(false);
    setNature(false);
  };

  const handleDivine = () => {
    setArcane(false);
    setCunning(false);
    setDivine(true);
    setMartial(false);
    setNature(false);
  };

  const handleMartial = () => {
    setArcane(false);
    setCunning(false);
    setDivine(false);
    setMartial(true);
    setNature(false);
  };

  const handleNature = () => {
    setArcane(false);
    setCunning(false);
    setDivine(false);
    setMartial(false);
    setNature(true);
  };

  const arcaneT1Talents = [
    {
      title: 'Artificer',
      content: "You gain +1 fortune to skill rolls to identify, craft, or upgrade magic items, as well as transfer magic between items."
    },
    {
      title: 'Familiar',
      content:  "You gain the service of a minor spirit that takes the form of a tiny creature such as an animal or construct. Your familiar’s defenses equal 8 + your proficiency bonus. You and your familiar can telepathically communicate with one another within 1 mile. The familiar dies after taking any damage, but can be resummoned after a long rest."
    },
    {
      title: 'Magic Specialist',
      content: "Choose one magic tradition you know. You gain +1 fortune to skill rolls when you utilize magic from the chosen tradition outside of combat. You can choose this theme talent more than once, but each time you must pick a different magic tradition."
    },
    {
      title: 'Risky Ritual',
      content: "Once per long rest, you can Spellcast a ritual spell you don’t know, but the spell’s tier must be equal to or lower than your tier. You take +1 misfortune to the ritual skill roll."
    },
    {
      title: 'Ritual Caster',
      content: "You have begun the study of utility magic. You gain +1 fortune on skill rolls to learn ritual spells. You also learn two ritual spells of a spell tier no higher than your tier. You can take this theme talent multiple times to learn additional ritual spells."
    },
    {
      title: 'Sense Magic',
      content: "You always can detect magic near you, such as in the same room, but you don’t know the precise location or nature of the magic. Once per long rest, you can heighten your senses to discern the precise location and nature of magic within the same room, or within 1 mile at tier 2, or within your realm at tier 3."
    }
  ]
  const arcaneT2Talents = [
    {
      title: 'Favorite Ritual',
      content: "Choose a ritual spell that you know. You can get an automatic success on the chosen spell’s skill roll, unless you decide to roll. You can take this theme talent multiple times to choose additional favorite rituals."
    },
    {
      title: 'Spell Learner',
      content: "During downtime, when you choose to train as your downtime activity, you can learn a magic tradition."
    },
    {
      title: 'Quick Ritual',
      content: "Once per long rest, you can Spellcast a ritual spell as an action, even if it normally takes a longer time."
    },
  ]
  const arcaneT3Talents = [
    {
      title: 'Legendary Scholar',
      content: "You have acquired a supernatural breadth of knowledge. Whenever you make a skill roll to recall information, you treat your tier as one higher."
    },
    {
      title: 'Master Mage',
      content: "You have acquired enough of a reputation to attract apprentices that are eager to learn from you. During downtime, you gain an extra downtime activity that represents the assistance of your apprentices. You gain the knack “Master Mage” towards skill rolls when you can leverage your apprentices."
    },
    {
      title: 'Permament Ritual',
      content: "You can extend a ritual’s magic to last forever. When you Spellcast a ritual spell with a duration, you can spend an additional 30 gold worth of precious materials to enhance the spell’s duration. Make the ritual spell’s skill roll, and on a success or higher, the duration becomes permanent. Otherwise, the spell works as normal."
    },
  ]
  const cunningT1Talents = [
    {
      title: "Chameleon",
      content: "You can spend 1 minute to disguise yourself as any creature of your size. You also can mimic voices, gaining +1 fortune on skill rolls to deceive others with a mimicked voice."
    },
    {
        title: "Doublespeak",
        content: "You can speak in cloaked language and hidden meanings with allies in a way others can’t easily understand your true intent without a successful skill roll."
    },
    {
        title: "Flashback",
        content: "You’re always prepared. Once per long rest, when you make a skill roll, you can retroactively say how you prepared for a challenge to gain +1 fortune on the skill roll."
    },
    {
        title: "Polyglot",
        content: "You know enough languages to communicate with anyone, even if you don’t share a common language."
    },
    {
        title: "Right Tool for the Job",
        content: "Once per long rest, you can declare to have any non-magical item of your tier on your person."
    },
    {
        title: "Wide Network",
        content: "Once per significant location, such as a town or city, you can create a non-player character (NPC) that you know in the area. You gain +1 fortune to skill rolls to interact with your contact."
    }
  ]
  const cunningT2Talents = [
    {
      title: "Always Hidden",
      content: "You can start any non-combat scene hidden as long as it's narratively possible."
    },
    {
        title: "Gambler",
        content: "When you tempt fate on a skill roll, you gain an additional +1 fortune to your roll."
    },
    {
        title: "Jack of All Trades",
        content: "Choose a theme talent from another theme that is lower than your tier. You can choose this theme talent multiple times."
    }
  ]
  const cunningT3Talents = [
    {
      title: "Guildmaster",
      content: "You have started your own guild of thieves, assassins, spies, or other underhand followers. During downtime, you gain an extra downtime activity that represents the assistance of your guild. You gain the knack 'Guildmaster' towards skill rolls when you can leverage your guild members."
    },
    {
        title: "Legendary Trickster",
        content: "You have gained supernatural cunning, and are able to pull off impossible stunts such as stealing one’s armor before their very eyes. Whenever you make a skill roll related to trickery such as deception or stealing, you treat your tier as one higher."
    },
    {
        title: "Veil of Night",
        content: "Your trickery has tapped into deep magic that enshrouds you from the sight of others. You are always invisible unless you choose to be visible. At the start of a combat encounter, you become visible for the scene as you can’t maintain concentration while in imminent danger."
    }
  ]
  const divineT1Talents = [
    {
      title: "Aid of the Faithful",
      content: "Once per significant location, such as a town or city, you can declare that there is a small church or shrine to your deity. The location can provide basic shelter and any occupants are friendly to you."
    },
    {
        title: "Augury",
        content: "Once per long rest, you can ask a higher power on the result of a proposed course of action. The entity replies in a one word answer (good, bad, or unknown) to the best of its knowledge."
    },
    {
        title: "Desperate Prayer",
        content: "Once per long rest, you can quickly ask the higher powers for a creature to gain +1 fortune to a skill roll."
    },
    {
        title: "Divine Awareness",
        content: "Within the same room or nearby area, you can sense the presence of undead and creatures from the outer realms, such as angels, fiends, or faeries. Once per long rest, you can heighten your senses to discern the precise location and nature of the creatures within the same room, or within 1 mile at tier 2, or within your realm at tier 3."
    },
    {
        title: "Downtime Guidance",
        content: "During downtime, you can choose to help one ally without spending your downtime activity."
    },
    {
        title: "Faithful Servitor",
        content: "You gain the service of a minor, tiny angelic or fiendish spirit depending on your deity. Your deity’s servitor’s defenses equal 8 + your proficiency bonus. You and the servitor can telepathically communicate with one another within 1 mile. The servitor dies after taking any damage, but can be resummoned after a long rest."
    }
  ]
  const divineT2Talents = [
    {
      title: "Eyes of Truth",
      content: "You always know if someone of your tier or lower is lying to you."
    },
    {
        title: "Purifying Touch",
        content: "With a quick prayer and touch, you can cure people of minor afflictions such as non-magical illnesses or diseases, or magical illnesses or diseases at tier 3."
    },
    {
        title: "Spell Learner",
        content: "During downtime, when you choose to train as your downtime activity, you can learn a magic tradition."
    }
  ]
  const divineT3Talents = [
    {
      title: "Archpriest",
      content: "You have gathered your own following of faithful that believe your teachings and edicts on faith. During downtime, you gain an extra downtime activity that represents the assistance of your flock. You gain the knack 'Archpriest' towards skill rolls when you can leverage your faithful followers."
    },
    {
        title: "Minor Miracle",
        content: "You can channel your faith to manifest a minor miracle. Once per long rest, when you see a creature get a failure or partial success on a skill roll, you can turn the result into an automatic success."
    },
    {
        title: "Legendary Prophet",
        content: "You are supernaturally connected to the divine. Whenever you make a skill roll concerning the gods, their servants, or religion, you treat your tier as one higher."
    }
  ]
  const martialT1Talents = [
    {
      title: "Adrenaline Rush",
      content: "Once per long rest, you can gain +1 fortune to all skill rolls during a scene, but then take +1 misfortune to all skill rolls until you take a long rest."
    },
    {
        title: "Mercenary",
        content: "If you use your martial skills to earn gold as a downtime activity, you treat the result of your skill roll as one degree higher."
    },
    {
        title: "Natural Leader",
        content: "You gain +1 fortune on skill rolls to help another person’s skill rolls."
    },
    {
        title: "Protector",
        content: "When an ally close to you takes damage from a non-combat related danger, you can instead take the damage."
    },
    {
        title: "Risk Taker",
        content: "You gain resistance to damage you take as a consequence from tempt fate or poor skill rolls."
    },
    {
        title: "Show Rank",
        content: "You gain +1 fortune to skill rolls on interacting with fellow warriors, such as guards or soldiers."
    }
  ]
  const martialT2Talents = [
    {
      title: "Martial Persistence",
      content: "Once per long rest, when you get a failure on a skill roll, you can reroll and take the higher result."
    },
    {
        title: "Technique Learner",
        content: "During downtime, when you choose to train as your downtime activity, you can learn a fighting style."
    },
    {
        title: "Warrior's Presence",
        content: "Choose respected or feared as your presence. When you or a nearby ally makes a skill roll, they gain +1 fortune if your chosen presence would help in the situation, such as respected helping persuade a lord or feared helping scare off a gang."
    }
  ]
  const martialT3Talents = [
    {
      title: "General",
      content: "You have started your own mercenary company of soldiers. During downtime, you gain an extra downtime activity that represents the assistance of your soldiers. You gain the knack 'General' towards skill rolls when you can leverage your mercenaries."
    },
    {
        title: "Heroic Champion",
        content: "Your legendary heroism inspires others. You start off each game session with an additional hero point, and your maximum amount of hero points you can have at once increases by +1. When you spend a hero point on a skill roll, all allies gain a stacking +1 to their next skill roll that lasts until after a long rest."
    },
    {
        title: "Legendary Athlete",
        content: "You possess supernatural physicality and can do stunts impossible for mortals such as swimming up a waterfall or breaking a mundane castle wall with a punch. Whenever you make a skill roll requiring athleticism, you treat your tier as one higher."
    }
  ]
  const natureT1Talents = [
    {
      title: "Apothecary",
      content: "You can craft natural poultices and other herbal remedies that enhance one’s physical capabilities. After a long rest, you can create a number of poultices equal to your proficiency bonus, but their effects fade after the next long rest. When a creature uses one of your poultices, they gain one of the following effects of your choice: Swim speed 1 for a scene, Climb speed 1 for a scene, Night vision for a scene, Cure a non-magical disease."
    },
    {
        title: "Capricious Deal",
        content: "You call upon the aid of fickle faeries in times of need. When you tempt fate, you can accept an additional complication or increase the severity of the original complication to increase your bonus from tempt fate to +2 fortunes."
    },
    {
        title: "Consult Spirits",
        content: "You reach out to the ancient spirits that inhabit the land, plants, and elements. Once per long rest, you can speak to ancient spirits for a scene. The spirits do their best to answer your questions, but their knowledge is limited to the nearby area."
    },
    {
        title: "Extreme Survivalist",
        content: "You know how to keep your allies safe from elemental hazards usually found in the wilds. You and your companions gain resistance to damage taken from environmental hazards and gain +1 on skill rolls to navigate environmental hazards. These types of hazards could include landslides, slipping off a cliffside, enduring a snowstorm, or weathering the fire realm’s supernatural heat."
    },
    {
        title: "Nature Companion",
        content: "You befriend an animal, small elemental spirit, or small faerie. Your nature companion’s defenses equal 8 + your proficiency bonus. You and your companion can understand each other well enough that you can give it basic commands, but the nature companion won’t fight for you. Your nature companion dies after taking any damage, but you can befriend a new companion after a long rest."
    },
    {
        title: "Primal Talents",
        content: "You are attuned to the natural world. You gain one of the following: climb speed equal to your land speed, night vision, or swim speed equal to your land speed. You can choose this theme talent multiple times, choosing a different option each time."
    }
  ]
  const natureT2Talents = [
    {
      title: 'Shapeshifter',
      content: "You can transform into a tiny or small creature such as a spider, robin, cat, or fish. Your defenses all equal 10, and if you take any damage, you revert back to your normal form and can’t transform again until after a long rest."
    },
    {
      title: 'Speak with Nature',
      content: "You can have basic conversations with animals or plants."
    },
    {
      title: 'Spell Learner',
      content: "During downtime, when you choose to train as your downtime activity, you can learn a magic tradition."
    }
  ]
  const natureT3Talents = [
    {
      title: 'Grove Leader',
      content: "You have gathered like minded followers of nature around you to form your own grove much like a priest has a temple. During downtime, you gain an extra downtime activity that represents the assistance of your grove. You gain the knack “Grove Leader'' towards skill rolls when you can leverage members of your grove."
    },
    {
      title: 'Legendary Naturalist',
      content: "You are supernaturally one with nature. Whenever you make a skill roll about interacting with the natural world, elemental realms, or green realm, you treat your tier as one higher."
    },
    {
      title: 'Skies Answer to Me',
      content: "You control the weather around you in a 1 mile radius, such as melting the snow in a tundra by warming the environment."
    }
  ]

  const dropdownItems = [
    { label: "Arcane", onClick: handleArcane },
    { label: "Cunning", onClick: handleCunning },
    { label: "Divine", onClick: handleDivine },
    { label: "Martial", onClick: handleMartial },
    { label: "Nature", onClick: handleNature }
  ]

  return (
    <div className="theme-talents">
      <div className="theme-talents-content">
        <h1>Themes</h1>
        <p>Each class is categorized by Themes, which determines what theme talents you can choose at later levels. There are five themes:</p>
        <ul>
          <li><span><b>Arcane:</b> You use arcane magic to manifest creative solutions.</span></li>
          <li><span><b>Cunning:</b> You excel at subterfuge and employ cunning.</span></li>
          <li><span><b>Divine:</b> You pray to your faith for aid to handle challenges.</span></li>
          <li><span><b>Martial:</b> You rely on your physical prowess and presence outside of fighting.</span></li>
          <li><span><b>Nature:</b> You are an expert in navigating beyond civilization.</span></li>
        </ul>
        <p>At 2nd, 4th, 6th, and 9th level, choose a theme talent from your class’s theme. You can only pick a theme talent of your tier or lower.</p>

        <Dropdown items={dropdownItems} startLabel="Select a theme" />

        {isArcane && (
        <div>
            <h2>Arcane Theme</h2>
            <p>You see challenges as puzzles to solve through clever use of magic, usually arcane in nature.</p>
            <h3>Tier 1 Theme Talents</h3>
            {arcaneT1Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 2 Theme Talents</h3>
            {arcaneT2Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 3 Theme Talents</h3>
            {arcaneT3Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isCunning && (
          <div>
            <h2>Cunning Theme</h2>
            <p>With clever tricks and expert knowledge, you navigate challenges out of combat.</p>
            <h3>Tier 1 Theme Talents</h3>
            {cunningT1Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 2 Theme Talents</h3>
            {cunningT2Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 3 Theme Talents</h3>
            {cunningT3Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isDivine && (
          <div>
            <h2>Divine Theme</h2>
            <p>You resolve challenges through prayer or magic you channel from a higher power, such as a deity or the heavens.</p>
            <h3>Tier 1 Theme Talents</h3>
            {divineT1Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 2 Theme Talents</h3>
            {divineT2Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 3 Theme Talents</h3>
            {divineT3Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isMartial && (
          <div>
            <h2>Martial Theme</h2>
            <p>You rely on your warrior training as well as your physical prowess to surpass any challenge you face.</p>
            <h3>Tier 1 Theme Talents</h3>
            {martialT1Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 2 Theme Talents</h3>
            {martialT2Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 3 Theme Talents</h3>
            {martialT3Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isNature && (
          <div>
            <h2>Nature Theme</h2>
            <p>You feel at home in the wilds. You understand how to best navigate the dangers of nature, as well as tap into ancient, primal magic.</p>
            <h3>Tier 1 Theme Talents</h3>
            {natureT1Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 2 Theme Talents</h3>
            {natureT2Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
            <h3>Tier 3 Theme Talents</h3>
            {natureT3Talents.map(({ title, content }) => (
              <Accordion stacked title={title} content={content} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ThemeTalents