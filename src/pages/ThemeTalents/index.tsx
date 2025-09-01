import "./index.scss";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";
import Modifier from "../../components/Modifier";
import ToolTip from "../../components/ToolTip";

function ThemeTalents() {
  const [isRules, setRules] = useState(true);
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
    setRules(false);
  };

  const handleCunning = () => {
    setArcane(false);
    setCunning(true);
    setDivine(false);
    setMartial(false);
    setNature(false);
    setRules(false);
  };

  const handleDivine = () => {
    setArcane(false);
    setRules(false);
    setCunning(false);
    setDivine(true);
    setMartial(false);
    setNature(false);
  };

  const handleMartial = () => {
    setArcane(false);
    setCunning(false);
    setRules(false);
    setDivine(false);
    setMartial(true);
    setNature(false);
  };

  const handleNature = () => {
    setArcane(false);
    setCunning(false);
    setRules(false);
    setDivine(false);
    setMartial(false);
    setNature(true);
  };

  const handleOverview = () => {
    setArcane(false);
    setCunning(false);
    setRules(true);
    setDivine(false);
    setMartial(false);
    setNature(false);
  };

  const arcaneT1Talents = [
    {
      title: "Arcane Improviser",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can cast a{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spell
          </Link>{" "}
          you don’t know, but the spell’s tier must be equal to or lower than
          your tier. You take <Modifier type="mf" count="1" /> to the ritual{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          .
        </span>
      ),
    },
    {
      title: "Artificer",
      content: (
        <span>
          You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          to identify, craft, or upgrade relics, as well as transfer magic
          between items.
        </span>
      ),
    },
    {
      title: "Familiar",
      content: (
        <span>
          You gain the service of a minor spirit that takes the form of a tiny
          creature such as an animal or construct. Your familiar’s defenses
          equal 8 + your proficiency bonus and has hit points equal to double
          your proficiency bonus. You and your familiar can telepathically
          communicate with one another within 1 mile. When the familiar is
          reduced to 0 hit points, it dies, but you can resummon it at full hit
          points by spending a recovery. After a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can freely resummon the familiar.
        </span>
      ),
    },
    {
      title: "Magic Specialist",
      content: (
        <span>
          Choose one{" "}
          <Link className="internal-link" to="/battle-spells">
            magic tradition
          </Link>{" "}
          you know. You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          when you utilize magic from the chosen tradition outside of combat.
          You can choose this theme talent more than once, but each time you
          must pick a different magic tradition.
        </span>
      ),
    },
    {
      title: "Rapid Downtime",
      content: (
        <span>
          During a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can do a{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>{" "}
          activity, but you can't spend gold to attempt additional downtime
          activities during this rest.
        </span>
      ),
    },
    {
      title: "Ritual Caster",
      content: (
        <span>
          You have begun the study of utility magic. You gain{" "}
          <Modifier type="f" count="1" /> on{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          to learn{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          . You also learn two ritual spells of a spell tier no higher than your
          tier. You can take this theme talent multiple times to learn
          additional ritual spells.
        </span>
      ),
    },
    {
      title: "Sense Magic",
      content: (
        <span>
          You always can detect magic near you, such as in the same room, but
          you don’t know the precise location or nature of the magic. Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can heighten your senses to discern the precise location and
          nature of magic within the same room, or within 1 mile at tier 2, or
          within your realm at tier 3.
        </span>
      ),
    },
  ];
  const arcaneT2Talents = [
    {
      title: "Favorite Ritual",
      content: (
        <span>
          Choose a{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spell
          </Link>{" "}
          that you know. You can get an automatic success on the chosen spell’s{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          , unless you decide to roll. You can take this theme talent multiple
          times to choose additional favorite rituals.
        </span>
      ),
    },
    {
      title: "Rapid Construction",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can use an action to do the craft{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime activity
          </Link>
          .
        </span>
      ),
    },
    {
      title: "Spell Learner",
      content: (
        <span>
          During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , when you choose to train as your downtime activity, you can learn a{" "}
          <Link className="internal-link" to="/battle-spells">
            magic tradition
          </Link>{" "}
          .
        </span>
      ),
    },
    {
      title: "Quick Ritual",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can cast a{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spell
          </Link>{" "}
          as an action, even if it normally takes a longer time.
        </span>
      ),
    },
  ];
  const arcaneT3Talents = [
    {
      title: "Legendary Scholar",
      content: (
        <span>
          You have acquired a supernatural breadth of knowledge. Whenever you
          make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          to recall information, you treat your tier as one higher.
        </span>
      ),
    },
    {
      title: "Master Mage",
      content: (
        <span>
          You have acquired enough of a reputation to attract apprentices that
          are eager to learn from you. During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , you gain an extra downtime activity that represents the assistance
          of your apprentices. You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          when you can leverage your apprentices.
        </span>
      ),
    },
    {
      title: "Permament Ritual",
      content: (
        <span>
          You can extend a ritual’s magic to last forever. When you cast a{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spell
          </Link>{" "}
          with a duration, you can spend an additional 30 gold worth of precious
          materials to enhance the spell’s duration. Make the ritual spell’s
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          , and on a success or higher, the duration becomes permanent.
          Otherwise, the spell works as normal.
        </span>
      ),
    },
  ];
  const cunningT1Talents = [
    {
      title: "Chameleon",
      content: (
        <span>
          You can spend 1 minute to disguise yourself as any creature of your
          size. You also can mimic voices, gaining{" "}
          <Modifier type="f" count="1" /> on{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          to deceive others with a mimicked voice.
        </span>
      ),
    },
    {
      title: "Doublespeak",
      content: (
        <span>
          You can speak in cloaked language and hidden meanings with allies in a
          way others can’t easily understand your true intent without a
          successful{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          .
        </span>
      ),
    },
    {
      title: "Flashback",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#scene">
            scene
          </Link>
          , when you make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          , you can retroactively say how you prepared for a challenge to gain{" "}
          <Modifier type="f" count="1" /> to the skill roll.
        </span>
      ),
    },
    {
      title: "Polyglot",
      content:
        "You know enough languages to communicate with anyone, even if you don’t share a common language.",
    },
    {
      title: "Right Tool for the Job",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#scene">
            scene
          </Link>
          , you can declare to have any non-magical item of your tier on your
          person.
        </span>
      ),
    },
    {
      title: "Rapid Downtime",
      content: (
        <span>
          During a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can do a{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>{" "}
          activity, but you can't spend gold to attempt additional downtime
          activities during this rest.
        </span>
      ),
    },
    {
      title: "Wide Network",
      content: (
        <span>
          Once per significant location, such as a town or city, you can create
          a non-player character (NPC) that you know in the area. You gain{" "}
          <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          with your contact.
        </span>
      ),
    },
  ];
  const cunningT2Talents = [
    {
      title: "Always Hidden",
      content: (
        <span>
          You can start any non-combat scene{" "}
          <Link className="internal-link" to="/rules/combat#hidden">
            hidden
          </Link>{" "}
          as long as it's narratively possible
        </span>
      ),
    },
    {
      title: "Clever Edge",
      content: (
        <span>
          When you make a skill roll with <Modifier type="f" />, reroll the{" "}
          <Modifier type="f" /> die and take the higher result.
        </span>
      ),
    },
    {
      title: "Gambler",
      content: (
        <span>
          When you{" "}
          <Link className="internal-link" to="/rules/skills#tempt-fate">
            tempt fate
          </Link>{" "}
          on a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          , you gain an additional <Modifier type="f" count="1" /> to your roll.
        </span>
      ),
    },
    {
      title: "Jack of All Trades",
      content:
        "Choose a theme talent from another theme that is lower than your tier. You can choose this theme talent multiple times.",
    },
  ];
  const cunningT3Talents = [
    {
      title: "Guildmaster",
      content: (
        <span>
          You have started your own guild of thieves, assassins, spies, or other
          underhand followers. During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , you gain an extra downtime activity that represents the assistance
          of your guild. You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          when you can leverage your guild members.
        </span>
      ),
    },
    {
      title: "Legendary Trickster",
      content: (
        <span>
          You have gained supernatural cunning, and are able to pull off
          impossible stunts such as stealing one’s armor before their very eyes.
          Whenever you make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          related to trickery such as deception or stealing, you treat your tier
          as one higher.
        </span>
      ),
    },
    {
      title: "Veil of Night",
      content: (
        <span>
          Your trickery has tapped into deep magic that enshrouds you from the
          sight of others. You are always{" "}
          <Link className="internal-link" to="/rules/combat#stealth">
            invisible
          </Link>{" "}
          unless you choose to be visible. At the start of a combat encounter,
          you become visible for the scene as you can’t maintain concentration
          while in imminent danger.
        </span>
      ),
    },
  ];
  const divineT1Talents = [
    {
      title: "Aid of the Faithful",
      content:
        "Once per significant location, such as a town or city, you can declare that there is a small church or shrine to your deity. The location can provide basic shelter and any occupants are friendly to you.",
    },
    {
      title: "Augury",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can ask a higher power on the result of a proposed course of
          action. The entity replies in a one word answer (good, bad, or
          unknown) to the best of its knowledge.
        </span>
      ),
    },
    {
      title: "Desperate Prayer",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#scene">
            scene
          </Link>
          , you can quickly ask the higher powers for a creature to gain{" "}
          <Modifier type="f" count="1" /> to a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          .
        </span>
      ),
    },
    {
      title: "Divine Awareness",
      content: (
        <span>
          Within the same room or nearby area, you can sense the presence of
          undead and creatures from the outer realms, such as angels, fiends, or
          faeries. Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can heighten your senses to discern the precise location and
          nature of the creatures within the same room, or within 1 mile at tier
          2, or within your realm at tier 3.
        </span>
      ),
    },
    {
      title: "Downtime Guidance",
      content: (
        <span>
          During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , you can help one ally without using a downtime activity.
        </span>
      ),
    },
    {
      title: "Faithful Servitor",
      content: (
        <span>
          You gain the service of a minor, tiny angelic or fiendish spirit
          depending on your deity. Your deity’s servitor’s defenses equal 8 +
          your proficiency bonus and has hit points equal to double your
          proficiency bonus. You and the servitor can telepathically communicate
          with one another within 1 mile. When the servitor is reduced to 0 hit
          points, it dies, but you can resummon it at full hit points by
          spending a recovery. After a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can freely resummon the servitor.
        </span>
      ),
    },
    {
      title: "Rapid Downtime",
      content: (
        <span>
          During a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can do a{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>{" "}
          activity, but you can't spend gold to attempt additional downtime
          activities during this rest.
        </span>
      ),
    },
  ];
  const divineT2Talents = [
    {
      title: "Eyes of Truth",
      content:
        "You always know if someone of your tier or lower is lying to you.",
    },
    {
      title: "Group Prayer",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#scene">
            scene
          </Link>
          , when you and your allies do a{" "}
          <Link className="internal-link" to="/rules/skills#group-rolls">
            group roll
          </Link>
          , you all gain <Modifier type="f" count="1" /> to your skill roll.
        </span>
      ),
    },
    {
      title: "Purifying Touch",
      content:
        "With a quick prayer and touch, you can cure people of minor afflictions such as non-magical illnesses or diseases, or magical illnesses or diseases at tier 3.",
    },
    {
      title: "Spell Learner",
      content: (
        <span>
          During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , when you choose to train as your downtime activity, you can learn a{" "}
          <Link className="internal-link" to="/battle-spells">
            magic tradition
          </Link>{" "}
          .
        </span>
      ),
    },
  ];
  const divineT3Talents = [
    {
      title: "Archpriest",
      content: (
        <span>
          You have gathered your own following of faithful that believe your
          teachings and edicts on faith. During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , you gain an extra downtime activity that represents the assistance
          of your flock. You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          when you can leverage your faithful followers.
        </span>
      ),
    },
    {
      title: "Minor Miracle",
      content: (
        <span>
          You can channel your faith to manifest a minor miracle. Once per
          session, when you see a creature get a success or lower on a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          , you can turn the result into a critical success.
        </span>
      ),
    },
    {
      title: "Legendary Prophet",
      content: (
        <span>
          You are supernaturally connected to the divine. Whenever you make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          concerning the gods, their servants, or religion, you treat your tier
          as one higher.
        </span>
      ),
    },
  ];
  const martialT1Talents = [
    {
      title: "Adrenaline Rush",
      content: (
        <span>
          You can push your body beyond your limits. You can take direct damage
          equal to your proficiency bonus to gain{" "}
          <Modifier type="f" count="1" /> to a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          .
        </span>
      ),
    },
    {
      title: "Mercenary",
      content: (
        <span>
          If you use your martial skills to earn gold as a{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>{" "}
          activity, you treat the result of your{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          as one degree higher.
        </span>
      ),
    },
    {
      title: "Natural Leader",
      content: (
        <span>
          You gain <Modifier type="f" count="1" /> on{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          to help another person’s skill rolls.
        </span>
      ),
    },
    {
      title: "Protector",
      content:
        "When an ally close to you takes damage from a non-combat related danger, you can instead take the damage.",
    },
    {
      title: "Rapid Downtime",
      content: (
        <span>
          During a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can do a{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>{" "}
          activity, but you can't spend gold to attempt additional downtime
          activities during this rest.
        </span>
      ),
    },
    {
      title: "Risk Taker",
      content: (
        <span>
          You gain{" "}
          <Link
            className="internal-link"
            to="/rules/combat#resistances-and-weaknesses"
          >
            resistance
          </Link>{" "}
          to damage taken as a consequence from{" "}
          <Link className="internal-link" to="/rules/skills#tempt-fate">
            tempt fate
          </Link>{" "}
          or poor{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>
          .
        </span>
      ),
    },
    {
      title: "Show Rank",
      content: (
        <span>
          You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          on interacting with fellow warriors, such as guards or soldiers.
        </span>
      ),
    },
  ];
  const martialT2Talents = [
    {
      title: "Mighty Deed",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#scene">
            scene
          </Link>
          , you can treat the result of your{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          as one degree higher.
        </span>
      ),
    },
    {
      title: "Technique Learner",
      content: (
        <span>
          During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , when you choose to train as your downtime activity, you can learn a{" "}
          <Link className="internal-link" to="/fighting-styles">
            fighting style
          </Link>{" "}
          .
        </span>
      ),
    },
    {
      title: "Warrior's Presence",
      content: (
        <span>
          Choose respected or feared as your presence. When you or an ally makes
          a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          , they gain <Modifier type="f" count="1" /> if your chosen presence
          would help in the situation, such as respected helping persuade a lord
          or feared helping scare off a gang.
        </span>
      ),
    },
    {
      title: "We Stand Together",
      content: (
        <span>
          When you enter a skill encounter, you and your allies each gain{" "}
          <Link
            className="internal-link"
            to="/rules/combat#temporary-hit-points"
          >
            temporary hit points
          </Link>{" "}
          equal to your proficiency bonus (scene ends).
        </span>
      ),
    },
  ];
  const martialT3Talents = [
    {
      title: "General",
      content: (
        <span>
          You have started your own mercenary company of soldiers. During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , you gain an extra downtime activity that represents the assistance
          of your soldiers. You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          when you can leverage your troops.
        </span>
      ),
    },
    {
      title: "Heroic Champion",
      content: (
        <span>
          Your legendary heroism inspires others. You start off each game
          session with an additional{" "}
          <Link className="internal-link" to="/rules/rolling#hero-point">
            hero point
          </Link>
          , and your maximum amount of hero points you can have at once
          increases by +1. When you spend a hero point on a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          , all allies gain a stacking <Modifier type="f" count="1" /> to their
          next skill roll that lasts until after a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          .
        </span>
      ),
    },
    {
      title: "Legendary Athlete",
      content: (
        <span>
          You possess supernatural physicality and can do stunts impossible for
          mortals such as swimming up a waterfall or breaking a mundane castle
          wall with a punch. Whenever you make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          requiring athleticism, you treat your tier as one higher.
        </span>
      ),
    },
  ];
  const natureT1Talents = [
    {
      title: "Apothecary",
      content: (
        <span>
          You can craft natural poultices and other herbal remedies that enhance
          one’s physical capabilities. After a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can create a number of poultices equal to your proficiency
          bonus, but their effects fade after the next safe rest. When a
          creature uses one of your poultices, they gain one of the following
          effects of your choice: swim speed 1 for a scene, climb speed 1 for a
          scene, <ToolTip preset="night" /> for a scene, cure a non-magical
          disease.
        </span>
      ),
    },
    {
      title: "Capricious Deal",
      content: (
        <span>
          You call upon the aid of fickle faeries in times of need. When you{" "}
          <Link className="internal-link" to="/rules/skills#tempt-fate">
            tempt fate
          </Link>{" "}
          , you can accept an additional complication or increase the severity
          of the original complication to increase your bonus from tempt fate to{" "}
          <Modifier type="f" count="2" />.
        </span>
      ),
    },
    {
      title: "Consult Spirits",
      content: (
        <span>
          You reach out to the ancient spirits that inhabit the land, plants,
          and elements. Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can speak to ancient spirits for a scene. The spirits do their
          best to answer your questions, but their knowledge is limited to the
          nearby area.
        </span>
      ),
    },
    {
      title: "Extreme Survivalist",
      content: (
        <span>
          You know how to keep your allies safe from elemental hazards usually
          found in the wilds. You and your companions gain{" "}
          <Link
            className="internal-link"
            to="/rules/combat#resistances-and-weaknesses"
          >
            resistance
          </Link>{" "}
          to damage taken from environmental hazards and gain{" "}
          <Modifier type="f" count="1" /> on{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          to navigate environmental hazards. These types of hazards could
          include landslides, slipping off a cliffside, enduring a snowstorm, or
          weathering the fire realm’s supernatural heat.
        </span>
      ),
    },
    {
      title: "Nature Companion",
      content: (
        <span>
          You befriend an animal, small elemental spirit, or small faerie. Your
          nature companion’s defenses equal 8 + your proficiency bonus and has
          hit points equal to double your proficiency bonus. You and your
          companion can understand each other well enough that you can give it
          basic commands, but the nature companion isn't strong enough to fight.
          When the companion is reduced to 0 hit points, it dies, but you can
          resummon it at full hit points by spending a recovery. After a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can freely resummon the companion.
        </span>
      ),
    },
    {
      title: "Primal Talents",
      content: (
        <span>
          You are attuned to the natural world. You gain one of the following:
          climb speed equal to your land speed, <ToolTip preset="night" />, or
          swim speed equal to your land speed. You can choose this theme talent
          multiple times, choosing a different option each time.
        </span>
      ),
    },
    {
      title: "Rapid Downtime",
      content: (
        <span>
          During a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can do a{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>{" "}
          activity, but you can't spend gold to attempt additional downtime
          activities during this rest.
        </span>
      ),
    },
  ];
  const natureT2Talents = [
    {
      title: "Shapeshifter",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#scene">
            scene
          </Link>
          , you can transform into an animal of large size or smaller. Your
          Guard equals 8 plus your proficiency bonus, and if you take any
          damage, you revert back to your normal form.
        </span>
      ),
    },
    {
      title: "Speak with Nature",
      content: "You can have basic conversations with animals or plants.",
    },
    {
      title: "Spell Learner",
      content: (
        <span>
          During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , when you choose to train as your downtime activity, you can learn a{" "}
          <Link className="internal-link" to="/battle-spells">
            magic tradition
          </Link>{" "}
          .
        </span>
      ),
    },
    {
      title: "Tree Travel",
      content: (
        <span>
          Once per{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            safe rest
          </Link>
          , you can teleport you and your allies through one tree to another
          tree within 20 miles, or within the same realm at tier 3.
        </span>
      ),
    },
  ];
  const natureT3Talents = [
    {
      title: "Grove Leader",
      content: (
        <span>
          You have gathered like minded followers of nature around you to form
          your own grove much like a priest has a temple. During{" "}
          <Link
            className="internal-link"
            to="/rules/skills#downtime-activities"
          >
            downtime
          </Link>
          , you gain an extra downtime activity that represents the assistance
          of your grove. You gain <Modifier type="f" count="1" /> to{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>{" "}
          when you can leverage members of your grove.
        </span>
      ),
    },
    {
      title: "Legendary Naturalist",
      content: (
        <span>
          You are supernaturally one with nature. Whenever you make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          about interacting with the natural world, elemental realms, or green
          realm, you treat your tier as one higher.
        </span>
      ),
    },
    {
      title: "Skies Answer to Me",
      content:
        "You control the weather around you in a 1 mile radius, such as melting the snow in a tundra by warming the environment.",
    },
  ];

  return (
    <div className="theme-talents">
      <div className="theme-talents-content">
        <div className="tab-items">
          <div
            className="tab-items__tab"
            onClick={handleOverview}
            data-selected={isRules}
          >
            <p>Overview</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleArcane}
            data-selected={isArcane}
          >
            <p>Arcane</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleCunning}
            data-selected={isCunning}
          >
            <p>Cunning</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleDivine}
            data-selected={isDivine}
          >
            <p>Divine</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleMartial}
            data-selected={isMartial}
          >
            <p>Martial</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleNature}
            data-selected={isNature}
          >
            <p>Nature</p>
          </div>
        </div>

        {isRules && (
          <div>
            <h1>Themes</h1>
            <p>
              Each class is categorized by Themes, which determines what theme
              talents you can choose at later levels. There are five themes:
            </p>
            <ul>
              <li>
                <span>
                  <b>Arcane:</b> You use arcane magic to manifest creative
                  solutions.
                </span>
              </li>
              <li>
                <span>
                  <b>Cunning:</b> You excel at subterfuge and employ cunning.
                </span>
              </li>
              <li>
                <span>
                  <b>Divine:</b> You pray to your faith for aid to handle
                  challenges.
                </span>
              </li>
              <li>
                <span>
                  <b>Martial:</b> You rely on your physical prowess and presence
                  outside of fighting.
                </span>
              </li>
              <li>
                <span>
                  <b>Nature:</b> You are an expert in navigating beyond
                  civilization.
                </span>
              </li>
            </ul>
            <p>
              At 2nd, 4th, 6th, and 9th level, choose a theme talent from your
              class’s theme. You can only pick a theme talent of your tier or
              lower.
            </p>
          </div>
        )}

        {isArcane && (
          <div>
            <h1>Arcane Theme</h1>
            <p>
              You see challenges as puzzles to solve through clever use of
              magic, usually arcane in nature.
            </p>
            <h2>Tier 1 Theme Talents</h2>
            {arcaneT1Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 2 Theme Talents</h2>
            {arcaneT2Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 3 Theme Talents</h2>
            {arcaneT3Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isCunning && (
          <div>
            <h1>Cunning Theme</h1>
            <p>
              With clever tricks and expert knowledge, you navigate challenges
              out of combat.
            </p>
            <h2>Tier 1 Theme Talents</h2>
            {cunningT1Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 2 Theme Talents</h2>
            {cunningT2Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 3 Theme Talents</h2>
            {cunningT3Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isDivine && (
          <div>
            <h1>Divine Theme</h1>
            <p>
              You resolve challenges through prayer or magic you channel from a
              higher power, such as a deity or the heavens.
            </p>
            <h2>Tier 1 Theme Talents</h2>
            {divineT1Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 2 Theme Talents</h2>
            {divineT2Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 3 Theme Talents</h2>
            {divineT3Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isMartial && (
          <div>
            <h1>Martial Theme</h1>
            <p>
              You rely on your warrior training as well as your physical prowess
              to surpass any challenge you face.
            </p>
            <h2>Tier 1 Theme Talents</h2>
            {martialT1Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 2 Theme Talents</h2>
            {martialT2Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 3 Theme Talents</h2>
            {martialT3Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
          </div>
        )}
        {isNature && (
          <div>
            <h1>Nature Theme</h1>
            <p>
              You feel at home in the wilds. You understand how to best navigate
              the dangers of nature, as well as tap into ancient, primal magic.
            </p>
            <h2>Tier 1 Theme Talents</h2>
            {natureT1Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 2 Theme Talents</h2>
            {natureT2Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
            <h2>Tier 3 Theme Talents</h2>
            {natureT3Talents.map(({ title, content }, index) => (
              <Accordion key={index} stacked title={title} content={content} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ThemeTalents;
