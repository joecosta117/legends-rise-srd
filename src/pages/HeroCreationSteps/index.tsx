import "./index.scss";
import Accordion from "../../components/Accordion";
import Modifier from "../../components/Modifier";
import { useNavigate, Link } from "react-router-dom";

function HeroCreationSteps() {
  const navigate = useNavigate();
  function handleLink(link: string) {
    navigate(`/${link}`);
  }

  const backgroundInfo = (
    <div>
      <p>
        You choose a background at 1st level. Here are some suggestions on the
        context of your background:
      </p>
      <p>
        <b>Birthplace or Upbringing:</b> Your hero growing up in an elven forest
        has a very different origin compared to another hero that grew up in the
        dangerous streets of a seedy city.
      </p>
      <p>
        <b>Professions, Trades, or Connections:</b> Did your hero have any
        professional training prior to adventuring, such as being a blacksmith
        or being a diplomat? Or maybe they belong to a thieves guild or another
        organization?
      </p>
      <p>
        <b>Class:</b> Choose a background tied to your class in some way. An
        arcanist with the background <i>smith</i> isn’t informative if the hero
        knows about magic. A better background would be <i>magical smith</i> or{" "}
        <i>smith that awoke with magical powers</i> so your hero can leverage
        their class’s magical talents during{" "}
        <Link className="internal-link" to="/rules/skills">
          skill rolls
        </Link>
        .
      </p>

      <h3 className="header">Background Examples</h3>
      <p>
        Take a look at some of these examples of backgrounds and how they can be
        applicable out of combat.
      </p>
      <h4 className="header">Templar of the Sun God</h4>
      <p>This hero could use their background in the following situations:</p>
      <ul>
        <li>
          <span>To recall information on obscure religious lore.</span>
        </li>
        <li>
          <span>
            To use their militant training to break down a heavy door.
          </span>
        </li>
        <li>
          <span>
            Find their party shelter for the night with a local church.
          </span>
        </li>
      </ul>
      <h4 className="header">Magician of the Thousand Eye Cult</h4>
      <p>This hero could use their background in the following situations:</p>
      <ul>
        <li>
          <span>Identify the magical effects of a magical object.</span>
        </li>
        <li>
          <span>Obtain knowledge of cults and other dark groups.</span>
        </li>
        <li>
          <span>Understand forbidden magic.</span>
        </li>
      </ul>

      <h4 className="header">Other Background Examples</h4>
      <p>
        Besides the ones mentioned in detail, see the below list for some other
        ideas. In general, it's better to come up with your own backgrounds that
        are tailored towards your hero.
      </p>
      <ul>
        <li>
          <span>
            <i>Acrobat of the Grand Circus</i>
          </span>
        </li>
        <li>
          <span>
            <i>Academy Archaeologist</i>
          </span>
        </li>
        <li>
          <span>
            <i>Agent of the Guild</i>
          </span>
        </li>
        <li>
          <span>
            <i>Archmage’s Apprentice</i>
          </span>
        </li>
        <li>
          <span>
            <i>Assassin of the Bloody Knives Gang</i>
          </span>
        </li>
        <li>
          <span>
            <i>Blessed of the Seven</i>
          </span>
        </li>
        <li>
          <span>
            <i>Con Artist Wanted by the City</i>
          </span>
        </li>
        <li>
          <span>
            <i>Exiled Princess on the Run</i>
          </span>
        </li>
        <li>
          <span>
            <i>Pirate of the West Seas</i>
          </span>
        </li>
        <li>
          <span>
            <i>Survivor of the Red Death</i>
          </span>
        </li>
      </ul>

      <h3 className="header">Tips on Creating Backgrounds</h3>
      <p>
        Your hero is unique because of their own story, so here are some
        guidelines for coming up with your own background.
      </p>
      <h4 className="header">Evocative, Not Simple</h4>
      <p>
        A background shouldn’t be a single word, but instead should be a short
        phrase or title. Instead of picking the background <i>fighter</i> for
        your warrior, figure out what type of fighting your hero did in the
        past. Did your hero learn combat as a gladiator, mercenary,
        bounty-hunter, soldier, or knight? Now you know the type of fighting,
        where did your hero learn to use weapons or who taught them or did they
        earn any prestige for their combat prowess? Now your warrior’s
        background could be <i>mercenary of the dreaded Sun Company</i>!
      </p>
      <p>
        A good rule of thumb is that a background should follow the same
        structure: <i>[Noun] of the [Setting Information]</i> or{" "}
        <i>[Noun] from the [Location]</i> or <i>[Adjective] [Noun]</i>. Feel
        free to deviate from this structure, but take a look at the below
        examples of simple versions vs more evocative backgrounds.
      </p>
      <ul>
        <li>
          <span>
            <i>Wizard</i> vs <i>Runaway Apprentice of the Archmage</i>
          </span>
        </li>
        <li>
          <span>
            <i>Soldier</i> vs <i>Veteran of the Great War</i>
          </span>
        </li>
        <li>
          <span>
            <i>Priest</i> vs <i>Exorcist of the Holy Order</i>
          </span>
        </li>
        <li>
          <span>
            <i>Noble</i> vs <i>Exiled Princess from the Dragon Kingdom</i>
          </span>
        </li>
        <li>
          <span>
            <i>Farmer</i> vs <i>Great Plains Farmer</i>
          </span>
        </li>
        <li>
          <span>
            <i>Rogue</i> vs <i>Smuggler of the Shadow Network</i>
          </span>
        </li>
        <li>
          <span>
            <i>Orphan</i> vs <i>Street Urchin from the Capital</i>
          </span>
        </li>
        <li>
          <span>
            <i>Ranger</i> vs <i>Dragon Hunter</i>
          </span>
        </li>
      </ul>
      <p>
        Evocative backgrounds help you better understand your hero’s backstory,
        and also establishes their ties to the game world. Cementing your hero’s
        backstory in the campaign setting makes your hero feel more real in the
        fiction and gives story hooks for your GM to use.
      </p>
    </div>
  );
  const knackInfo = (
    <div>
      <p>
        All heroes learn two knacks at 1st level, of which players define
        themselves. A knack is a word or phrase that represent specific talents,
        skills, or characterists your hero possesses. As your hero progresses,
        they will automatically gain more knacks.
      </p>
      <p>
        Here are some examples of knacks you could pick, but feel free to make
        up your own:
      </p>
      <p>
        <b>Characteristics:</b>{" "}
        <i>
          athletic, bookworm, charming, helpful, intimidating, leader, lone
          wolf, silver tongue, survivor, young and naive
        </i>
      </p>
      <p>
        <b>Skills:</b>{" "}
        <i>
          animal friend, ancient history, dragon lore, military tactics, lock
          perception, picking, sneaking, tinkering, tracking
        </i>
      </p>
      <p>
        <b>Phrases:</b>{" "}
        <i>
          always a step ahead, burn it all down, for the greater good, keep them
          guessing, I still remember, it's all a part of the plan, love is my
          shield, nature provides, pain makes you stronger
        </i>
      </p>
    </div>
  );

  return (
    <div className="hero-creation-steps">
      <div className="hcs-content">
        <h1>Hero Creation</h1>
        <p>
          You can create a hero using an{" "}
          <b>
            <a
              target="blank"
              href="https://docs.google.com/spreadsheets/d/10AUYI0NB5eaLV8NIlhpq8890wbQaZaupdt8BCWV14Uc/edit?usp=sharing"
            >
              empty hero sheet
            </a>
          </b>
          . I suggest making a copy of the sheet in your google drive, and then
          editing from there. You will build a hero using the following steps.
        </p>
        <button
          className="link-button"
          onClick={() =>
            window.open(
              "https://docs.google.com/spreadsheets/d/10AUYI0NB5eaLV8NIlhpq8890wbQaZaupdt8BCWV14Uc/edit?usp=sharing",
              "_blank",
            )
          }
        >
          CHARACTER SHEET
        </button>

        <h2>Step 1: Choose an Ancestry</h2>
        <p>
          Your ancestry represents who your hero’s people are, whether they be
          humans or elves. Ancestries grant your hero special powers.
        </p>
        <button
          className="link-button"
          onClick={() => handleLink("ancestries")}
        >
          ANCESTRIES LIST
        </button>
        <h2>Step 2: Choose a Class</h2>
        <p>
          Choose a class for your hero, which represents your training and
          talents as an adventurer. Classes grant your hero many abilities and
          powers. You also choose a <b>subclass</b>, which represents a further
          specialization of your chosen class.
        </p>
        <button className="link-button" onClick={() => handleLink("classes")}>
          CLASSES LIST
        </button>

        <h2>Step 3: Choose Background and Knacks</h2>
        <p>
          At 1st level, you choose one <b>background</b> and two <b>knacks</b>.
          Your background represents the story of where your hero came from and
          summarizes their training. Knacks represent your hero’s expertise and
          talents. Your hero’s background and knacks contribute to their ability
          to overcome non-combat challenges with skill rolls.
        </p>
        <button
          style={{ marginBottom: "16px" }}
          className="link-button"
          onClick={() => handleLink("rules/skills")}
        >
          SKILL RULES
        </button>
        <h3 className="header">Invoking Backgrounds</h3>
        <p>
          You can <b>invoke</b> your background when you make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          to add your proficiency bonus to the result. You can only invoke your
          background if the background is relevant towards the challenge. For
          example, a hero with the background <i>dragon hunter</i> could invoke
          this background to add their proficiency bonus on their skill roll to
          track a monster in the forest.
        </p>
        <Accordion title="Choosing Your Background" content={backgroundInfo} />
        <h3 className="header">Invoking Knacks</h3>
        <p>
          You can invoke your knacks when you make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          to add <Modifier type="f" count="1" /> to the result. For example, a
          hero can invoke their knack “stealth” to try to move past goblin
          sentires without being noticed. The hero then gains{" "}
          <Modifier type="f" count="1" /> to their skill roll. You can only
          invoke up to one knack per skill roll.
        </p>
        <Accordion title="Choosing Your Knacks" content={knackInfo} />

        <h2>Step 4: Choose Equipment</h2>
        <p>
          Each class determines your starting equipment. For heroes trained in
          armor and weapons, you can pick from a number of different armor and
          weapons.
        </p>
        <div className="two-buttons">
          <button className="link-button" onClick={() => handleLink("armor")}>
            ARMOR LIST
          </button>
          <button className="link-button" onClick={() => handleLink("weapons")}>
            WEAPONS LIST
          </button>
        </div>

        <h2>Step 5: Finalize Defenses</h2>
        <p>
          Characters in Legends Rise have two defenses against attacks:{" "}
          <b>Guard</b> and <b>Spirit</b>. Each defense has a number associated
          with it that serves as the TN that{" "}
          <Link className="internal-link" to="/rules/combat#attack-roll">
            attack rolls
          </Link>{" "}
          are made against.
        </p>
        <ul>
          <li className="defense">
            <b data-type="EVN">Guard (GRD):</b> Represents your hero’s
            protection from physical threats, such as blocking weapon attacks,
            dodging a dragon’s fire breath, or withstanding poison.
          </li>
          <li className="defense">
            <b data-type="RES">Spirit (SPT):</b> Represents your hero’s
            protection from threats against your essence, mind, or soul, such as
            overcoming mind control, withstanding raw arcane energy, or
            resisting unholy corruption.
          </li>
        </ul>
        <h3 className="header">Calculating Defenses</h3>
        <p>
          Guard and Spirit both start at <b>8 + your proficiency bonus</b> (10
          at 1st level). They are also improved in the following order:
        </p>
        <ol>
          <li>Your class gives you bonuses to one or both defenses.</li>
          <li>Your defenses can also be improved by wearing certain armor.</li>
        </ol>
        <p>
          For example, Darian’s proficiency bonus is +2 at 1st level, so both
          Guard and Spirit start at 10. Their class gives them +1 to Guard,
          which brings their Guard to 11. Darian then decides to wear light
          armor, which increases their Guard by +1 to 12.
        </p>

        <h2>Optional Step 6: Starting at Higher Level</h2>
        <p>
          Although it's recommended to start at 1st level, some campaigns might
          begin at higher levels. When starting at a higher level, look at the{" "}
          <Link className="internal-link" to="/classes#progression-table">
            level progression table
          </Link>{" "}
          to see what features you get from higher levels. For equipment, you
          can still use your class’s starting equipment, but depending on the
          level, you might start with gold and relics:
        </p>
        <ul>
          <li className="higher-level">
            <b>Levels 2-4:</b> 1 gold
          </li>
          <li className="higher-level">
            <b>Levels 5-7:</b> 3 gold, one tier 1 relic
          </li>
          <li className="higher-level">
            <b>Levels 8-10:</b> 9 gold, one tier 1 relic, and one tier 2 relic
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroCreationSteps;
