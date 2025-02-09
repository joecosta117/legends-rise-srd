import "./index.scss";
import React, { useState } from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";

function BkgdKnacks() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="skills">
      <div className="skills-content">
        <h1>Background and Knacks</h1>
        <p>Your background represents the story of where your hero came from and summarizes their training. Knacks represent your hero’s expertise and talents. Your hero’s background and knacks contribute to their ability to overcome non-combat challenges.</p>

        <h2>Skill Rolls</h2>
        <p>You can read more about skill rolls here (TODO link), but skill rolls represent your hero’s attempts to succeed at non-combat challenges, such as persuading a monarch or unlocking a magically sealed door. Backgrounds and knacks can give you an edge in these challenges.</p>

        <h3>Invoking Backgrounds</h3>
        <p>You can <b>invoke</b> your background when you make a skill roll to add your proficiency bonus to the result. You can only invoke your background if the background is relevant towards the challenge. For example, a hero with the background “dragon hunter” could invoke this background to add their proficiency bonus on their skill roll to track a monster in the forest.</p>
      
        <h3>Invoking Knacks</h3>
        <p>You can invoke your knacks when you make a skill roll to add <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> to the result. For example, a hero can invoke their knack “stealth” to try to move past goblin sentires without being noticed. The hero then gains <b>+1 <img className="icon" src={fortune} alt="fortune icon" /></b> to their skill roll. You can only invoke up to one knack per skill roll.</p>
        <p>For both invoking backgrounds and knacks, the GM is the final judge if the background or knack works given the context of the challenge.</p>

        <h2 onClick={toggleExpand} className="collapsed-section" data-is-expanded={isExpanded}>
          Choosing Background {isExpanded ? "▲" : "▶"}
        </h2>
        {isExpanded && (
          <div className="expanded-section">
            <p>You choose a background at 1st level. Here are some suggestions on the context of your background:</p>
            <p><b>Birthplace or Upbringing:</b> Your hero growing up in an elven forest has a very different origin compared to another hero that grew up in the dangerous streets of a seedy city.</p>
            <p><b>Professions, Trades, or Connections:</b> Did your hero have any professional training prior to adventuring, such as being a blacksmith or being a diplomat? Or maybe they belong to a thieves guild or another organization?</p>
            <p><b>Class:</b> Choose a background tied to your class in some way. An arcanist with the background “smith” isn’t informative if the hero knows about magic. A better background would be “magical smith” or “smith that awoke with magical powers” so your hero can leverage their class’s magical talents during skill rolls.</p>

            <h3>Background Examples</h3>
            <p>Take a look at some of these examples of backgrounds and how they can be applicable out of combat.</p>
            <h4>“Templar of the Sun God”</h4>
            <p>This hero could use their background in the following situations:</p>
            <ul>
              <li><span>To recall information on obscure religious lore.</span></li>
              <li><span>To use their militant training to break down a heavy door.</span></li>
              <li><span>Find their party shelter for the night with a local church.</span></li>
            </ul>
            <h4>“Magician of the Thousand Eye Cult”</h4>
            <p>This hero could use their background in the following situations:</p>
            <ul>
              <li><span>Identify the magical effects of a magical object.</span></li>
              <li><span>Obtain knowledge of cults and other dark groups.</span></li>
              <li><span>Understand forbidden magic.</span></li>
            </ul>

            <h4>Other Background Examples</h4>
            <p>Besides the ones mentioned in detail, see the below list for some other ideas. In general, it's better to come up with your own backgrounds that are tailored towards your hero.</p>
            <ul>
              <li><span>“Acrobat of the Grand Circus”</span></li>
              <li><span>“Academy Archaeologist”</span></li>
              <li><span>“Agent of the Guild”</span></li>
              <li><span>“Archmage’s Apprentice”</span></li>
              <li><span>“Assassin of the Bloody Knives Gang”</span></li>
              <li><span>“Blessed of the Seven”</span></li>
              <li><span>“Con Artist Wanted by the City”</span></li>
              <li><span>“Exiled Princess on the Run”</span></li>
              <li><span>“Pirate of the West Seas”</span></li>
              <li><span>“Survivor of a Dragon Attack by the Red Death”</span></li>
            </ul>

            <h3>Tips on Creating Backgrounds</h3>
            <p>Your hero is unique because of their own story, so here are some guidelines for coming up with your own background.</p>
            <h4>Evocative, Not Simple</h4>
            <p>A background shouldn’t be a single word, but instead should be a short phrase or title. Instead of picking the background “fighter” for your warrior, figure out what type of fighting your hero did in the past. Did your hero learn combat as a gladiator, mercenary, bounty-hunter, soldier, or knight? Now you know the type of fighting, where did your hero learn to use weapons or who taught them or did they earn any prestige for their combat prowess? Now your warrior’s background could be “mercenary of the dreaded Sun Company”!</p>
            <p>A good rule of thumb is that a background should follow the same structure: <b>“[Noun] of the [Setting Information]”</b> or <b>“[Noun] from the [Location]”</b> or <b>“[Adjective] [Noun]”</b>. Feel free to deviate from this structure, but take a look at the below examples of simple versions vs more evocative backgrounds.</p>
            <ul>
              <li><span>“Wizard” vs “Runaway Apprentice of the Archmage”</span></li>
              <li><span>“Soldier” vs “Veteran of the Great War”</span></li>
              <li><span>“Priest” vs “Exorcist of the Holy Order”</span></li>
              <li><span>“Noble” vs “Exiled Princess from the Dragon Kingdom”</span></li>
              <li><span>“Farmer” vs “Great Plains Farmer”</span></li>
              <li><span>“Rogue” vs “Smuggler of the Shadow Network”</span></li>
              <li><span>“Orphan” vs “Street Urchin from the Capital”</span></li>
              <li><span>“Ranger” vs “Dragon Hunter”</span></li>
            </ul>
            <p>Evocative backgrounds help you better understand your hero’s backstory, and also establishes their ties to the game world. Cementing your hero’s backstory in the campaign setting makes your hero feel more real in the fiction and gives story hooks for your GM to use.</p>
            <h3>Backgrounds At Higher Levels</h3>
            <p>As your hero gains experience, so too does their skillset. When your tier increases at 5th and 8th levels, you can add to your background. You can expand your background by adding a small phrase detailing your hero’s continued journey.</p>
            <p>For example, at 1st level Damarin chooses the “Orphaned Rogue from the Capital'' as his background. At 5th level, when Damarin’s tier becomes 2, he expands his background to “Orphaned Rogue from the Capital that is hunting demons'' to better reflect the knowledge he’s gained on fiends during his past adventure. At 8th level, when Damarin’s tier becomes 3, he further expands his background to “Orphaned Rogue from the Capital that hunts demons and travels to otherworldly realms” to represent his time spent traversing other realms during his adventures.</p>
          </div>
        )}



      </div>
    </div>
  );
}

export default BkgdKnacks;