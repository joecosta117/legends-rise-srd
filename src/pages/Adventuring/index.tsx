import "./index.scss";
import Modifier from "../../components/Modifier";
import RulesHeader from "../../components/RulesHeader";

function Adventuring() {
  return (
    <div className="general">
      <div className="general-content">
        <RulesHeader />
        <h1>Adventuring Rules</h1>
        <p>This section covers information relevant to difficulties you might face during your adventures.</p>
        <h2>Table of Contents</h2>
        <ul style={{marginTop: '0'}}>
          <li><a href="#crashing"><span><b>Crashing</b></span></a></li>
          <li><a href="#lighting"><span><b>Lighting</b></span></a></li>
          <li><a href="#travel"><span><b>Long Distance Travel</b></span></a></li>
          <li><a href="#negotiations"><span><b>Negotiations</b></span></a></li>
          <li><a href="#resting"><span><b>Resting</b></span></a></li>
          <li><a href="#downtime-activities"><span><b>Downtime Activities</b></span></a></li>
        </ul>

        <h2 id="crashing">Crashing</h2>
        <p>Either from falling or being shoved into a wall, you risk taking damage. You only take crash damage from being shoved if you are shoved into another creature or large enough object such as a pillar or wall. Crash damage is 1 physical damage for every 10 feet of distance you either fall or are shoved, for a maximum of 20 physical damage.</p>
        <h3 className="header">Breaking Your Fall</h3>
        <p>You can attempt to catch yourself to soften when falling from a great height. Make a skill roll to see how best you can slow your descent, with the skill tier depending on the severity of the fall as determined by the GM. Falling from a second floor building would be skill tier 1, while falling from the clouds is skill tier 3.</p>
        <ul>
          <li><span><b>Critical Success:</b> You take no damage.</span></li>
          <li><span><b>Success:</b> You take half damage.</span></li>
          <li><span><b>Partial Success:</b> You take full damage.</span></li>
          <li><span><b>Failure:</b></span> You take full damage and fall prone.</li>
        </ul>
        <h4 className="header">Crashing Into Creatures</h4>
        <p>If you land on a creature or crash into one, that creature takes physical damage equal to half of the damage you take from the crash.</p>
        <h3 className="header">Crashing With Zones</h3>
        <p>If you take crash damage during combat, then you take 1 physical damage for each zone you move through, including your starting zone. For example, if you are shoved into a table in your zone, then you take 1 physical damage, but if you are shoved into a wall one zone away, then you take 2 physical damage.</p>

        <h2 id="lighting">Lighting</h2>
        <p>Depending on the illumination of the environment, your heroes might have a hard time seeing and interacting. There are three types of lighting.</p>
        <ul>
          <li><span><b>Normal:</b> Daylight or bright enough anyone can see with little problem.</span></li>
          <li><span><b>Darkness:</b> There is no light. Anyone without night vision is blinded.</span></li>
          <li><span><b>Magical Darkness:</b> Same as darkness, but even those with night vision are blinded.</span></li>
        </ul>
        <h3 className="header">Vision</h3>
        <p>There are different types of vision a hero can have, which affects their ability to see during adventures.</p>
        <ul>
          <li><span><b>Normal Vision:</b> Vision all creatures have to see in daylight.</span></li>
          <li><span><b>Night Vision:</b> You can see well enough in dark conditions, usually in shades of gray, and ignore the penalties from darkness.</span></li>
          <li><span><b>Blind Vision:</b> You can see well regardless of lightning conditions enough while blind, ignoring the penalties from being blinded. Blind vision usually has a number of zones next to it, indicating how far a creature can sense normally while blinded. </span></li>
        </ul>

        <h2 id="travel">Long Distance Travel</h2>
        <p>If you are traveling for a long time, a group of adventurers can move at a normal, fast, or slow pace. Moving at a slow pace gives you <Modifier type="f" count="1" /> to any skill rolls, but moving at a fast pace means you take <Modifier type="mf" count="1" /> to any skill rolls. Generally, heroes can travel 20 miles a day, half at a slow pace, or double at a fast pace.</p>
        
        <h2 id="negotiations">Negotiations</h2>
        <p>When trying to negotiate with NPCs, you can use skill rolls. However, the <b>willingness</b> and <b>attitude</b> of the NPCs can affect what is possible. Only roll if the NPC’s willingness is unsure, and modify the roll depending on their attitude.</p>
        <h3 className="header">Willingness</h3>
        <p>Nonplayer characters (NPC) can have three levels of willingness, with unsure being the default.</p>
        <ul>
          <li><span><b>Willing:</b> The NPC is likely to go along with your request without a skill roll, such a close friend.</span></li>
          <li><span><b>Unsure:</b> You need to make a skill roll to influence this NPC.</span></li>
          <li><span><b>Unwilling:</b> No skill roll, even a critical success, will be enough to get this NPC to change their mind. You can’t convince a king to make you king!</span></li>
        </ul>
        <h3 className="header">Attitude</h3>
        <p>NPCs can have three types of attitudes, with neutral being the default.</p>
        <ul>
          <li><span><b>Friendly:</b> The NPC trusts you, and you gain <Modifier type="f" count="1" /> on skill rolls to interact with them.</span></li>
          <li><span><b>Neutral:</b> The NPC neither trusts nor mistrusts you, and there is no modification to any skill roll.</span></li>
          <li><span><b>Hostile:</b> The NPC mistrusts you, and you take <Modifier type="mf" count="1" /> on skill rolls to interact with them.</span></li>
        </ul>

        <h2 id="resting">Resting</h2>
        <p>During adventures, resting will be your best chance to recover after a harrowing day. There are two types of rest:</p>
        <ul>
          <li><span><b>Short Rest:</b> This rest typically requires a few minutes to catch your breath and quickly mend wounds, but can be shorter if narratively appropriate as decided by the GM. Certain abilities require a short rest before they can be used again.</span></li>
          <li><span><b>Long Rest:</b> This rest requires a full night of sleep. After a long rest, you gain the benefits of taking a short rest, regain all hit points, lose any wounds, and regain spent recoveries. A hero can’t benefit from more than one long rest in a day.</span></li>
        </ul>

      </div>
    </div>
  )
}

export default Adventuring;