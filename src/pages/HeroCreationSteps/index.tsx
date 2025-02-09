import "./index.scss";

function HeroCreationSteps() {
    return (
      <div className="hero-creation-steps">
        <div className="hcs-content">
          <h1>Hero Creation</h1>
          <p>You can create a hero using an <b><a target='blank' href='https://docs.google.com/document/d/1-rIBiG8WjHG-kw4yfBgI__ks7ZFQjKbCklnnrQ1l31w/edit?usp=sharing'>empty hero sheet</a></b>. I suggest making a copy of the sheet in your google drive, and then editing from there. You will build a hero using the following steps.</p>

          <h2>Step 1: Choose an Ancestry</h2>
          <p>Your ancestry represents who your hero’s people are, whether they be humans or elves. Ancestries grant your hero special powers. You can look at the list of ancestries here (TODO add link)</p>

          <h2>Step 2: Choose a Class</h2>
          <p>Choose a class for your hero, which represents your training and talents as an adventurer. Classes grant your hero many abilities and powers. You can look at the list of classes here (TODO add link)</p>
        
          <h2>Step 3: Choose Background and Knacks</h2>
          <p>At 1st level, you choose one <b>background</b> and two <b>knacks</b>. Your background represents the story of where your hero came from and summarizes their training. Knacks represent your hero’s expertise and talents. Your hero’s background and knacks contribute to their ability to overcome non-combat challenges. See this page for more information on how to pick your background and knacks (TODO add link)</p>
        
          <h2>Step 4: Choose Equipment</h2>
          <p>Each class determines your starting equipment. For heroes trained in armor and weapons, you can consult this page (TODO) for a list of armor and weapons.</p>

          <h2>Step 5: Finalize Defenses</h2>
          <p>Heroes in Legends Rise have two <b>defenses</b>. These determine how hard it is for enemies to hurt your hero. Each defense has a number associated with it that serves as the TN that attack rolls are made against.</p>
          <ul>
            <li className="defense"><b>Physical Defense (PD):</b> Represents your hero’s protection from physical threats, such as blocking weapon attacks, overcoming poison, or dodging a dragon’s fire breath.</li>
            <li className="defense"><b>Mystical Defense (MD):</b> Represents your hero’s protection from threats that affect your mind, soul, and very essence, such as overcoming mind control, resisting unholy corruption, or withstanding raw magical energy.</li>
          </ul>
          <h3>Calculating Defenses</h3>
          <p>Your PD and MD both equal <b>8 + your proficiency bonus</b> (10 at 1st level). Your defenses are also improved in the following order:</p>
          <ol>
            <li>Your class gives you bonuses to one or two defenses.</li>
            <li>Your defenses can also be improved by wearing certain armor.</li>
          </ol>
          <p>For example, Darian’s proficiency bonus is +2 at 1st level, so both PD and MD start at 10. Their class gives them +1 to PD, which brings their PD to 11. Darian then decides to wear light armor, which increases their PD to 12.</p>

          <h2>Optional Step 6: Starting at Higher Level</h2>
          <p>Although it's recommended to start at 1st level, some campaigns might begin at higher levels. When starting at a higher level, look at the level progression table (TODO link) to see what features you get from higher levels. For equipment, you can still use your class’s starting equipment, but depending on the level, you might start with gold and permanent magic items:
          </p>
          <ul>
            <li className="higher-level"><b>Levels 2-4:</b> 1 gold</li>
            <li className="higher-level"><b>Levels 5-7:</b> 3 gold, one permanent tier 1 magic item</li>
            <li className="higher-level"><b>Levels 8-10:</b> 9 gold, one permanent tier 1 magic item, and one permament tier 2 magic item</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default HeroCreationSteps;