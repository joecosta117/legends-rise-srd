import "./index.scss";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Accordion from "../../components/Accordion";

function HomePage() {
  return (
    <div className="homepage">
      <Banner />
      <div className="homepage-content">
        <h1 className="title">Legends Rise</h1>
        <h1 className="subtitle">Created by Joe Costa</h1>

        <div className="section">
          <div className="section__container">
            <div className="section__container__tile">
              <div className="section__container__content">
                <h2 className="section__title">What is Legends Rise?</h2>
                <p>
                  Legends Rise is a high fantasy tabletop roleplaying game where
                  a game master (GM) tells a fantastic story and players play as
                  heroes that become legends!
                </p>
                <div className="section__button">
                  <Link
                    to="/hero-creation-steps"
                    className="section__button__link"
                  >
                    CREATE A HERO
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section__content">
            <Accordion
              title="High Fantasy"
              content="Legends Rise assumes a high fantasy setting filled with magical kingdoms, elves, dwarves, and other worlds. However, there are also powerful creatures of great evil, such as vile demons, capricious faeries, rampaging giants, titanic dragons, and other horrors from beyond."
            />
            <Accordion
              title="Heroic"
              content="You play as heroes that stop evil from saving a monster infested town to preventing the release of an ancient evil that threatens the world."
            />
            <Accordion
              title="Tactical"
              content="Fighting monsters and villains is an important part of Legends Rise, and each hero has plenty of tactical options to choose in combat. Spellcasters cast different spells while martial heroes use different weapon techniques."
            />
            <Accordion
              title="Cinematic"
              content="All heroes have flashy moves that change the battlefield from exploding fireballs to unleashing a hail of arrows. Out of combat, heroes have powerful narrative abilities such as always being hidden or creating your own mercenary company!"
            />
            <Accordion
              title="Legendary"
              content="Heroes start as competent and continue to climb in power. High level heroes choose a legendary archetype that defines their destiny from becoming a demigod or even a dragon!"
            />
          </div>
        </div>

        <div className="section">
          <div className="section__container">
            <div className="section__container__tile">
              <div className="section__container__content">
                <h2 className="section__title">
                  What Makes Legends Rise Unique?
                </h2>
                <p>
                  There are many high fantasy TTRPGs from D&D to Pathfinder, so
                  why play Legends Rise?
                </p>
                <div className="section__button">
                  <Link to="/rules" className="section__button__link">
                    DIVE INTO THE RULES
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section__content">
            <Accordion
              title="High Customization"
              content="At 1st level, heroes choose from an ancestry, class, and subclass. As your hero levels up, they gain talents, a heroic archetype, and a legendary archetype. You can play a giantkin warrior that chooses the juggernaut subclass, but then later learns fire magic from the pyromancer heroic archetype and then finally becomes a elemental lord of fire through the emergent primordial legendary archetype."
            />
            <Accordion
              title="Unique Magic System"
              content="Spellcasters use mana to cast powerful battle spells, which refreshes after a quick breather, so don't hold back in combat! Battle spells are categorized by magic traditions, such as time or fire, which allows players to create thematic spellcasters. Out of combat, anyone can learn powerful ritual spells that provide useful narrative effects, or use freeform spells for improvisational, spur of the moment magic."
            />
            <Accordion
              title="Exciting Martial Heroes"
              content="Doing the same thing every turn gets boring fast. When martial heroes in Legends Rise attack, they choose from different weapon techniques. Do you ground slam, juggernaut's charge, or cleave? Outside of combat, martial heroes gain powerful narrative abilities such as breaking buildings with a punch or become permamently invisible."
            />
            <Accordion
              title="One Roll Attacks"
              content="In Legends Rise, every attack is fast, impactful, and intuitive as just one roll decides both your accuracy and your damage. No more clunky “hit, but deal 2 damage” moments or wasting turns with total whiffs; even a partial success still leaves a mark. High rolls feel truly rewarding because the better you strike, the harder you hit, keeping combat both exciting and streamlined."
            />
            <Accordion
              title="Exciting Narrative Rules"
              content="Legends Rise encourages heroic fantasy even outside of combat. Heroes leverage their experiences to conquer skill challenges, while also having powerful narrative powers from their theme talents. GMs can utilize countdowns for complex skill encounters. Every roll in Legends Rise has 4 results: failure, partial success, success, and critical success; which leads to interesting and dynamic results during skill challenges."
            />
            <Accordion
              title="Easy to Run"
              content="As a long time game master, I wanted to make running Legends Rise an easy experience. Legends Rise provides plenty of tools to game masters to handle all sorts of situations such as negotiations, downtime, and more. Building encounters has never been easier with enemies having defined roles and easy to build enemy rules."
            />
          </div>
        </div>

        <div className="section">
          <div className="section__container">
            <div className="section__container__tile">
              <div className="section__container__content">
                <h2 className="section__title">
                  What Does Legends Rise Not Do?
                </h2>
                <p>
                  Legends Rise is meant to emulate high fantasy heroes fighting
                  monsters in cinematic and tactical ways as the heroes steadily
                  rise to legendary status. As such, there are some things that
                  Legends Rise does not do.
                </p>
              </div>
            </div>
          </div>

          <div className="section__content">
            <Accordion
              title="Low Fantasy"
              content="Legends Rise is not a low fantasy game. Heroes are powerful and can do amazing things. Combat is fast and furious with heroes unleashing powerful attacks and spells against epic monsters. Eventually heroes can become demigods, legendary rulers, or even a dragon! If you want a low fantasy game that is more gritty, look at an OSR games like Shadowdark."
            />
            <Accordion
              title="Realism"
              content="Legends Rise is not a simulationist game with rules on encumberance, tracking rations, calculating jump distance, or rules on attacking different body parts. The rules are designed to be easy to remember and use, with a focus on fun and cinematic gameplay. If you want a more realistic game, look at Mythras or RuneQuest."
            />
            <Accordion
              title="Fully Narrative Rules"
              content="Although Legends Rise embraces some narrative gameplay with theme talents, tempt fate, experiences, and degrees of success, it is not a fully narrative game like FATE or Powered by the Apocalypse. Legends Rise has tactical combat with zones, complex battle abilities, and monsters with tactical depth. If you want a more narrative game, look at Daggerheart, Dungeon World, Fabula Ultima, or Quest."
            />
            <Accordion
              title="No Combat"
              content="Legends Rise is focused on epic heroes battling monsters and villains. Combat is an important part of the game with many rules and abilities centered on combat. However, combat is not the only part of the game, and there are plenty of opportunities for roleplaying, exploration, and problem solving. However, if you want a game without combat or very rare combat, such as a game about political intrigue, look at Legend of the Five Rings or Court of Blades."
            />
            <Accordion
              title="Grid Combat"
              content="Legends Rise does not use a grid for combat. Instead, combat uses zones to represent different areas of the battlefield. This abstraction maintains a degree of tactical positioning without going full theater of the mind. However, if you want to play a game with more precise tactical movement with a grid, look at Draw Steel or Pathfinder."
            />
          </div>
        </div>

        {/* 
        <h3 className="header">Death is in Your Hands</h3>
        <p>Would you rather your hero die a random death by a minor monster or go down like Boromir from Lord of the Rings? In Legends Rise, when you drop to 0 hit points, your hero keeps fighting and when they take enough wounds, you have a choice: make a final stand before you die, or become defeated.</p>
        <h3 className="header">Fast and Fun</h3>
        <p>From zone based movement in combat to easy to remember bonuses and penalties, Legends Rise is all about streamlined, fun gameplay, without overly fiddly mechanics that slow the game down or make you have to look up the rules.</p> */}
      </div>
    </div>
  );
}

export default HomePage;
