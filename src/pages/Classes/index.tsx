import "./index.scss";
import { Link } from 'react-router-dom';

function Classes() {
  return (
    <div className="classes">
      <div className="classes-content">
        <h1>Classes</h1>
        <p>Your Class represents your training and talents as an adventurer, as a hero. If you live long enough, your mighty deeds will become legend.</p>
        <h2>Choosing a Class</h2>
        <p>At 1st level, you choose a class that represents your profession and talents. You can choose from the following classes:</p>
        <ul>
          <li><span><b><Link to="/classes/arcanist">Arcanist</Link>:</b> You are a mage that has learned arcane magic.</span></li>
          <li><span><b><Link to="/classes/bard">Bard</Link>:</b> You are a performer that weaves magic through art.</span></li>
          <li><span><b>Cleric:</b> You are a priest blessed with divine magic from your faith.</span></li>
          <li><span><b>Commander:</b> You marshall your allies to victory in battle.</span></li>
          <li><span><b>Druid:</b> You are attuned to the magic of the natural world.</span></li>
          <li><span><b>Magesmith:</b> You tinker with magical items.</span></li>
          <li><span><b>Occultist:</b> You tap into dark and forbidden magic.</span></li>
          <li><span><b>Paladin:</b> You are a divinely empowered warrior.</span></li>
          <li><span><b>Ranger:</b> You are a survivalist that stalks monsters.</span></li>
          <li><span><b>Rogue:</b> You are a skillful and cunning combatant.</span></li>
          <li><span><b>Summoner:</b> By binding yourself to the outer realms, you can summon creatures to aid you.</span></li>
          <li><span><b>Swordmage:</b> You blend magic with fighting.</span></li>
          <li><span><b>Warrior:</b> You are tough and deadly in combat.</span></li>
        </ul>

        <h3>Dual Class</h3>
        <p>Some heroes blend skills from two different professions, called a dual class. A dual class is a combination of features from two different classes. See the this page (TODO link) for more rules on picking a dual class.</p>
        <h3>Themes</h3>
        <p>Each class is categorized into a theme, which determines what theme talents you can choose at later levels.</p>
        <h3>Level Progression</h3>
        <p>Most heroes start off at 1st level, and as you progress, you become more powerful. You can see the below level progression table to see what you gain at each level.</p>
        <p>At levels 5 and 8, you enter a new tier of play. At both levels, your background expands. At 5th level, you choose a heroic archetype, or a legendary archetype at 8th level.</p>

        <h4>Level Progression Table</h4>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Features</th>
              <th>Tier</th>
              <th>Proficiency Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ancestry, class, subclass</td>
              <td>1</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>class talent, theme talent</td>
              <td>1</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>class feature, new knack</td>
              <td>1</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>class talent, theme talent</td>
              <td>1</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>heroic archetype, expanded background</td>
              <td>2</td>
              <td>+4</td>
            </tr>
            <tr>
              <td>6</td>
              <td>class talent, theme talent</td>
              <td>2</td>
              <td>+4</td>
            </tr>
            <tr>
              <td>7</td>
              <td>heroic archetype feature, new knack</td>
              <td>2</td>
              <td>+4</td>
            </tr>
            <tr>
              <td>8</td>
              <td>legendary archetype, expanded background</td>
              <td>3</td>
              <td>+6</td>
            </tr>
            <tr>
              <td>9</td>
              <td>class talent, theme talent</td>
              <td>3</td>
              <td>+6</td>
            </tr>
            <tr>
              <td>10</td>
              <td>legendary archetype feature, new knack</td>
              <td>3</td>
              <td>+6</td>
            </tr>
          </tbody>
        </table>

        <h3>Class Basics</h3>
        <p>Once you pick a class at 1st level, your class determines the following:</p>
        <ul>
          <li><span>Theme</span></li>
          <li><span>Defense bonuses</span></li>
          <li><span>Starting hit points and number of recoveries</span></li>
          <li><span>Training for armor and weapons</span></li>
          <li><span>Starting equipment</span></li>
          <li><span>Class features such as magic or combat skills</span></li>
          <li><span>A subclass, which represents further specialization of your class</span></li>
          <li><span>Class talents, which are features you can choose from at later levels</span></li>
        </ul>

      </div>
    </div>
  );
}

export default Classes;