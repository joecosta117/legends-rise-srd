import "./index.scss";
import Modifier from "../../components/Modifier";
import Accordion from "../../components/Accordion";
import RulesHeader from "../../components/RulesHeader";
import scrollToHash from "../../utils/scrollToHash";
import { Link } from "react-router-dom";

function SkillRules() {
  scrollToHash();

  return (
    <div className="general">
      <div className="general-content">
        <RulesHeader />
        <h1>Skill Rules</h1>
        <p>
          Skill rolls represent your hero’s attempts to succeed at usually a
          non-combat challenge. When you make a skill roll to see if you succeed
          at a challenge, your GM will generally describe the challenge.{" "}
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#making-skill-rolls">
              <span>
                <b>Making Skill Rolls</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#repeated-attempts">
              <span>
                <b>Repeating Attempts</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#helping-another-hero">
              <span>
                <b>Helping Other Heroes</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#tempt-fate">
              <span>
                <b>Tempt Fate</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#group-rolls">
              <span>
                <b>Group Rolls</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#progress-countdowns">
              <span>
                <b>Countdowns</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#downtime-activities">
              <span>
                <b>Downtime Activities</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="making-skill-rolls">Making Skill Rolls</h2>
        <b style={{ textAlign: "left" }}>1d20 + Experience vs TN 12</b>
        <p>Follow the below three steps for every skill roll.</p>
        <h3 className="header">Step 1: GM Sets the Skill Difficulty</h3>
        <p>
          When a hero attempts a skill roll, the GM sets the{" "}
          <b>skill difficulty</b> of the challenge. This determines how easy or
          hard it is to achieve a good result. The GM determines the skill
          difficulty depending on the severity of the challenge, the hero's
          capabilities, or their approach to solving the problem.
        </p>
        <h4 className="header">Difficulty Levels</h4>
        <p>There are three difficulty levels for skill rolls:</p>
        <ul>
          <li>
            <span>
              <b>Easy: </b>The challenge is well within reach or the heroes have
              a strong advantage.
            </span>
          </li>
          <li>
            <span>
              <b>Normal: </b>The challenge is appropriately risky or uncertain.
              This is the default difficulty for skill rolls.
            </span>
          </li>
          <li>
            <span>
              <b>Hard: </b>The challenge is well above the heroes’ abilities, or
              the situation is highly unfavorable.
            </span>
          </li>
        </ul>
        <p>
          If the challenge seems easier than easy, then the hero automatically
          succeeds without a roll. If the challenge seems harder than hard, then
          the hero automatically fails without a roll.
        </p>

        <h4 className="header">Appropriate Challenges</h4>
        <p>
          Heroes grow in skill as they level up and jump to new tiers. The
          following are examples of normal difficulty challenges a hero of that
          tier might face.
        </p>
        <table>
          <thead>
            <tr>
              <th style={{ padding: "0 10px" }}>Hero Tier</th>
              <th>Normal Difficulty Challenges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>
                Overhearing a loud argument nearby, climbing a knotted rope, or
                recalling a well known fact.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Sneaking past cultists, navigating through a forest, or breaking
                down a heavy door.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Disarming a powerful mage's trap, persuading a monarch, or
                leaping across a very wide chasm.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Closing a planar portal with their bare hands, safely navigating
                the elemental realms, or threatening an archfiend to back down.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Swimming up a waterfall, deceiving a god, or stealing someone’s
                worn armor without them noticing!
              </td>
            </tr>
          </tbody>
        </table>
        <h4 className="header">Different Tier Challenges</h4>
        <p>
          If the heroes are facing a challenge that is a higher tier than them,
          the GM should make any skill rolls have a hard difficulty. If the
          heroes face a challenge with a lower tier than them, the GM should
          instead give skill rolls an easy difficulty. For example, if a tier 2
          hero is using the craft downtime activity to make a tier 1 item, the
          GM sets the skill difficulty to easy.
        </p>

        <h4 className="header">Minor Difficulty Adjustments</h4>
        <p>
          A GM might want to grant a hero a small bonus or penalty on a skill
          roll without changing the skill difficulty. You can easily give a hero
          either <Modifier type="f" /> and <Modifier type="mf" /> in this case.
          Perhaps, a hero wants to break down a regular door, but the door is
          old and less sturdy than normal. The GM gives the hero{" "}
          <Modifier type="f" count="1" /> on their skill roll.
        </p>
        <h3 className="header">Step 2: Invoking Experiences</h3>
        <p>
          If a player has an appropriate experience, they can invoke it to add
          their proficiency bonus to their skill roll. You can only invoke one
          experience per skill roll. The GM is the final arbiter if your
          experience fits the challenge or not.
        </p>

        <h3 className="header">Step 3: Roll and Interpret the Result</h3>
        <p>
          The hero rolls their dice and checks their result. Normal difficulty
          challenges have three roll results:
        </p>
        <ul>
          <li>
            <span>
              <b>Success (17+): </b> You achieve your goal.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success (12-16): </b> You achieve your goal, but with a
              consequence or complication.
            </span>
          </li>
          <li>
            <span>
              <b>Failure (11 or Lower): </b> You do not achieve your goal.
            </span>
          </li>
        </ul>
        <h4 className="header">Adjusting Results for Difficulty</h4>
        <p>If the difficulty is easy or hard, you adjust the roll results:</p>
        <ul>
          <li>
            <span>
              <b>Easy: </b>Upgrade the roll result with success becoming a
              critical success. A critical success is the same as a success, but
              with a bonus benefit.
            </span>
          </li>
          <li>
            <span>
              <b>Hard: </b>Downgrade the roll result with failure becoming a
              critical failure. A critical failure is the same as a failure, but
              with an extra complication.
            </span>
          </li>
        </ul>

        <table>
          <thead>
            <tr>
              <th style={{ padding: "0 10px" }}>Roll Result</th>
              <th>Easy Difficulty</th>
              <th>Normal Difficulty</th>
              <th>Hard Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>17+</td>
              <td>Critical Success</td>
              <td>Success</td>
              <td>Partial Success</td>
            </tr>
            <tr>
              <td>12-16</td>
              <td>Success</td>
              <td>Partial Success</td>
              <td>Failure</td>
            </tr>
            <tr>
              <td>11 or Lower</td>
              <td>Partial Success</td>
              <td>Failure</td>
              <td>Critical Failure</td>
            </tr>
          </tbody>
        </table>

        <h4 className="header">Extra Benefit Guidelines</h4>
        <p>
          For an extra benefit from a critical success, the heroes earn a reward
          beyond achieving their goal. Possible benefits include:
        </p>
        <ul>
          <li>
            <span>
              <b>Speed: </b>Finish the task faster than expected, saving time or
              gaining an extra action, such as during downtime.
            </span>
          </li>
          <li>
            <span>
              <b>Quality: </b>Produce an exceptional result (a finely crafted
              item, a more detailed clue, a perfect disguise).
            </span>
          </li>
          <li>
            <span>
              <b>Momentum: </b>Gain a <Modifier type="f" /> on the next related
              roll, give an ally a bonus, or even increase the momentum die by
              1.
            </span>
          </li>
          <li>
            <span>
              <b>Resource Boon: </b>Save materials, earn extra profit, or gain
              an unexpected useful item.
            </span>
          </li>
          <li>
            <span>
              <b>Narrative Shift: </b>Impress an NPC, uncover a secret, or
              create a new opportunity.
            </span>
          </li>
        </ul>
        <h4 className="header">Extra Complication Guidelines</h4>
        <p>
          For a complication or consequence from a partial success or critical
          failure, the heroes suffer a setback as the scene becomes more tense
          and interesting. Possible complications include:
        </p>
        <ul>
          <li>
            <span>
              <b>Escalation: </b>Increase an existing countdown or worsen an
              ongoing danger.
            </span>
          </li>
          <li>
            <span>
              <b>Collateral: </b>Break something valuable, harm an ally (damage
              equal to their proficiency bonus), or alert an enemy.
            </span>
          </li>
          <li>
            <span>
              <b>Setback: </b>Lose time, waste resources, or make the task
              harder going forward.
            </span>
          </li>
          <li>
            <span>
              <b>Narrative Twist: </b>Introduce a new obstacle, negative
              countdown, rival, or enemy action.
            </span>
          </li>
          <li>
            <span>
              <b>Spillover: </b>The failure causes problems in another area
              (drawing unwanted attention, creating a new complication
              elsewhere).
            </span>
          </li>
        </ul>
        <p>
          <i>
            <b>GM Tip: </b> Complications should push the story forward, but not
            stall it. Even a critical failure should create interesting new
            choices, not dead ends.
          </i>
        </p>

        {/* <h4 className="header">
          Critical Success <i>"Yes, and benefit..."</i>
        </h4>
        <p>
          Same as a success, but you performed extraordinarily. You achieved
          what you wanted and more. Here are some examples:
        </p>
        <ul>
          <li>
            <span>
              You convince the ruler to aid your friends, but also provide
              additional support.
            </span>
          </li>
          <li>
            <span>
              You scale the enemy fortress so swiftly, no guard even notices
              you.
            </span>
          </li>
          <li>
            <span>
              As you successfully disarm the trap, you notice someone lurking
              nearby in the shadows that's unaware you caught them.
            </span>
          </li>
          <li>
            <span>
              You slam open the door so hard, you knock down the two guards that
              were waiting on the other side.
            </span>
          </li>
        </ul>
        <h4 className="header">
          Success <i>"Yes"</i>
        </h4>
        <p>
          You succeed at the challenge, achieving what you wanted without any
          consequences.
        </p>
        <h4 className="header">
          Partial Success <i>"Yes, but consequence..."</i>
        </h4>
        <p>
          When you get a partial success on a skill roll, then you achieve a
          success, but you also suffer a setback. It is up to the GM’s
          discretion to determine what a consequence looks like for the ongoing
          story. Some examples include:
        </p>
        <ul>
          <li>
            <span>
              <i>You Don’t Succeed Completely:</i> You jump over a ravine, but
              instead of clearing the landing, you barely make it, and are now
              gripping the edge of the chasm for dear life.
            </span>
          </li>
          <li>
            <span>
              <i>Problem Arises:</i> You successfully pick a locked door, but
              you alert the tomb’s magic guardians!
            </span>
          </li>
          <li>
            <span>
              <i>Long Term Problems:</i> You successfully learned more about the
              criminal thieves guild from asking around the city, but your
              inquiries haven’t gone unnoticed. The city’s guards are now
              watching you, and the GM starts a negative countdown "guards try
              to arrest you"!
            </span>
          </li>
        </ul>
        <h4 className="header">
          Minor Failure <i>"No"</i>
        </h4>
        <p>
          If you get a minor failure on a skill roll, you fail to overcome the
          challenge. You must try a different approach to solving the problem.
        </p>
        <h4 className="header">
          Failure <i>"No, and consequence..."</i>
        </h4>
        <p>
          If you get a failure on a skill roll, you fail to overcome the
          challenge and something bad happens. Here are some examples:
        </p>
        <ul>
          <li>
            <span>
              You failed to persuade the queen to help you, and you angered her
              enough to detain you!
            </span>
          </li>
          <li>
            <span>
              You failed to disable the trap, and instead set it off, you take
              physical damage equal to your shaken value!
            </span>
          </li>
          <li>
            <span>
              You failed to navigate through the forest and are now lost.
              However, you've drawn attention of hungry dark faeries. The GM
              sstarts a negative countdown "dark faeries find you"!
            </span>
          </li>
        </ul> */}

        <h2 id="repeated-attempts">Repeated Attempts</h2>
        <p>
          When you make a skill roll, you’re giving it all in hopes of
          overcoming the challenge. Therefore, you can’t continue to make the
          same skill roll in hopes of rolling better, because you already tried
          your best on the original attempt.{" "}
        </p>
        <p>
          Skill rolls shouldn’t be re-attempted unless the circumstances change.
          For example, if you fail to convince a ruler to help you, you can’t
          persuade them again. However, if you take time to learn about the
          ruler’s motivations and goals, you can then leverage that knowledge to
          try again later.
        </p>

        {/* <h2 id="helping-another-hero">Helping Another Hero</h2>
        <p>
          A hero can aid another at a task. One hero will make the final skill
          roll, while the assister helps them by also making the same skill roll
          at a normal difficulty. Only one hero can assist another at a time.
        </p>
        <ul>
          <li>
            <span>
              <b>Critical Success:</b> The ally attempting the task gains{" "}
              <Modifier type="f" count="2" /> to their skill roll.
            </span>
          </li>
          <li>
            <span>
              <b>Success:</b> The ally attempting the task gains{" "}
              <Modifier type="f" count="1" /> to their skill roll.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> No effect.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            The ally attempting the task takes <Modifier type="mf" count="1" />{" "}
            to their skill roll.
          </li>
        </ul>
        <p>Only one person can assist another at a time.</p> */}

        <h2 id="tempt-fate">Tempt Fate</h2>
        <p>
          When a hero makes a skill roll, they can decide to <b>tempt fate</b>{" "}
          by taking an extra complication to gain{" "}
          <Modifier type="f" count="1" /> to their skill roll. The GM usually
          decides the bonus consequence, which happens regardless of the skill
          roll’s outcome.
        </p>
        {/* <p>Common complications include:</p>
        <ul>
          <li>
            <span>
              Collateral damage, as in you or someone else takes unintended
              damage, usually equal to the creature’s proficiency bonus.
            </span>
          </li>
          <li>
            <span>
              Sacrifice a number of gold equal to your proficiency bonus, or an
              item
            </span>
          </li>
          <li>
            <span>Betray an ally or anger someone</span>
          </li>
          <li>
            <span>Start a negative countdown, or increase an existing one</span>
          </li>
        </ul> */}
        <p>
          Tempt fate is always a choice that you can willingly reject or suggest
          an alteration that would make you consider taking it. The GM has the
          final say on the complication to tempt fate.
        </p>
        <h3 className="header">Tempt Fate Examples</h3>
        <p>Here are more detailed examples:</p>
        <ul>
          <li>
            <span>
              <i>
                A trap will spring when you break the relic’s protective
                enchantment, and you will take physical damage equal to your
                shaken value.
              </i>
            </span>
          </li>
          <li>
            <span>
              <i>
                You will lose some treasure that you collected if you can sneak
                past the dragon.
              </i>
            </span>
          </li>
          <li>
            <span>
              <i>
                Your reputation with your church will be ruined if you use your
                divine power in this way.
              </i>
            </span>
          </li>
          <li>
            <span>
              <i>
                You can try again to open the door, but the negative countdown
                for the guards being alerted is going to increase by two ticks.
              </i>
            </span>
          </li>
        </ul>

        <h2 id="group-rolls">Group Rolls</h2>
        <p>
          When a party of heroes attempts a challenge together, the GM can ask
          for a <b>group roll</b>. The heroes choose one hero to lead the
          effort. That hero makes the skill roll that determines the outcome for
          the entire group.
        </p>
        <p>
          Before rolling, each other hero declares how they are helping (or
          hindering) the group.
        </p>
        <ul>
          <li>
            <span>
              If a hero has a relevant experience, the leader gains{" "}
              <Modifier type="f" count="1" /> to their skill roll.
            </span>
          </li>
          <li>
            <span>
              If a hero doesn't have a relevant experience, the leader takes{" "}
              <Modifier type="mf" count="1" /> to their skill roll.
            </span>
          </li>
        </ul>
        <p>
          A rogue leads their allies in sneaking through a bandit camp. The
          arcanist has the “street urchin” experience and recalls their time
          sneaking through the city to avoid trouble, which grants the rogue{" "}
          <Modifier type="f" count="1" />. However, the paladin and cleric have
          no relevant experience and the rogue takes{" "}
          <Modifier type="mf" count="2" />. The rogue makes the group's skill
          roll with <Modifier type="mf" count="1" />, and gets a success, so the
          heroes sneak past the bandits without trouble!
        </p>

        <h2 id="progress-countdowns">Countdowns</h2>
        <p>
          For longer term challenges, such as crafting an item or infiltrating
          an evil castle, the GM can use <b>countdowns</b>, which mark the
          heroes’ ongoing effort. Not every skill roll requires a progress
          countdown, as most challenges can be resolved by a single skill roll.
          However, for complex or long term challenges, countdowns are a useful
          tool.
        </p>
        <h3 className="header">Countdown Die</h3>
        <p>
          <b>Countdown die</b> help track the progression, usually represented
          by a die set to its highest number. The GM sets the die size needed to
          accomplish the task, usually a d4 for a positive countdown, then sets
          a d4 on the table at 4.
          {/* You can consult the below table for further
          guidance. */}
        </p>
        {/* <table style={{ marginBottom: "10px" }}>
          <thead>
            <tr>
              <th>Difficulty</th>
              <th>Positive Countdown Die</th>
              <th>Negative Countdown Die</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Easy</td>
              <td>number of heroes</td>
              <td>1.5 x number of heroes</td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>1.5 x number of heroes</td>
              <td>number of heroes</td>
            </tr>
            <tr>
              <td>Hard</td>
              <td>2 x number of heroes</td>
              <td>1/2 x number of heroes</td>
            </tr>
          </tbody>
        </table> */}
        <p>
          For group challenges, if the challenge is simple enough, you can use
          the group roll rules. However, for more complex group challenges, set
          the countdown die equal to the number of heroes. For example, the GM
          can set the countdown "escape the collapsing evil fortress" for a
          group of heroes. There are six heroes, so the GM places a d6 on the
          table at 6.
        </p>
        {/* <p>
          For example, the GM can set the countdown "escape the collapsing evil
          fortress" for a group of heroes. The GM decides this is a hard
          challenge, so the countdown die size is double the number of heroes.
          They are four heroes, so the GM places a d8 set at 8 on the table.
        </p> */}

        <h3 className="header">Types of Countdowns</h3>
        <p>
          There are four types of countdowns: positive, negative, dual, and
          simple.{" "}
        </p>
        <h4 className="header">Positive Countdowns</h4>
        <p>
          Positive countdowns are ones that represent a hero or group of heroes’
          goal, and each success ticks the countdown closer to completion. The
          goal can be “infiltrate the iron keep” or “stop the lich’s evil
          ritual”. When a hero makes a skill roll, they tick down the countdown.
        </p>
        <ul>
          <li>
            <span>
              <b>Success:</b> The countdown die lowers by 1.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> The countdown die lowers by 1 and there is
              a consequence.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            No change to the countdown die
          </li>
        </ul>
        <h4 className="header">Negative Countdowns</h4>
        <p>
          Negative countdowns are ones that represent a threat to the heroes,
          which if the heroes aren’t careful might occur. Through a hero’s
          fumbles, they decrement the countdown die as the threat progresses to
          happening. The threat can be “guards are alerted” or “dragon notices
          your presence”. Negative countdown die are smaller than positive
          countdown die as its less likely for heroes to fumble than succeed.
        </p>
        <ul>
          <li>
            <span>
              <b>Success:</b> No effect to the countdown die.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> The countdown die lowers by 1 as the
              complication.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            The countdown die lowers by 1.
          </li>
        </ul>
        <h4 className="header">Dual Countdowns</h4>
        <p>
          Sometimes you want both a positive and negative countdown running at
          the same time. For example, the heroes have a positive countdown to
          safely land their damaged airship. However, the heroes also have a
          negative countdown to see if the heroes fail enough that their airship
          crashes.
        </p>
        <p>
          When you have both a positive and negative countdown for the same
          event, use the following results for skill rolls:{" "}
        </p>
        <ul>
          <li>
            <span>
              <b>Success:</b> The positive countdown die lowers by 1.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> Both countdown die lower by 1.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            The negative countdown die lowers by 1.
          </li>
        </ul>
        <h4 className="header">Simple Countdowns</h4>
        <p>
          Simple countdowns are used to keep track of time, and usually tick
          down after certain time has passed. For example, the heroes have to
          hold off zombies for 6 rounds before the local priest finishes
          consecrating the temple. The GM sets a d6 countdown die that lowers
          after each round.
        </p>

        <h2 id="downtime-activities">Downtime Activities</h2>
        <p>
          Between adventures, heroes can relax, train, and work on personal
          projects. These are called <b>downtime activities</b> as listed below.
          During downtime between adventures, typically a few days to a month or
          more, each hero has time for one downtime activity.
        </p>
        <ul>
          <li>
            <span>Craft</span>
          </li>
          <li>
            <span>Earn Gold</span>
          </li>
          <li>
            <span>Leisure</span>
          </li>
          <li>
            <span>Long Term Project</span>
          </li>
          <li>
            <span>Retrain</span>
          </li>
          <li>
            <span>Train</span>
          </li>
        </ul>
        <p>
          Only the listed activities are limited during downtime. Otherwise,
          your heroes can do whatever they want such as going to places or
          buying goods isn’t limited.
        </p>
        <h3 className="header">Additional Downtime Activities</h3>
        <p>
          Normally, heroes can only attempt one downtime activity per downtime.
          However, you can attempt additional downtime activities at a cost.
          Each additional downtime activity costs 1 gold at tier 1, then 3 gold
          at tier 2, and 6 gold at tier 3. This cost represents the time and
          monetary resource drain of attempting multiple tasks when not
          obtaining treasure from adventuring.{" "}
        </p>
        <h3 className="header">Aiding Downtime Rolls</h3>
        <p>
          If the downtime activity requires a skill roll, you can improve your
          chances through an ally’s help or spending gold. A friend can spend
          their downtime activity to give you <Modifier type="f" count="1" /> to
          your skill roll. You can also spend gold to improve your skill roll by{" "}
          <Modifier type="f" count="1" /> for each amount spent. At tier 1, it
          costs 1 gold, then 3 gold at tier 2, and 6 gold at tier 3.
        </p>
        <h3 className="header">List of Downtime Activities</h3>
        <p>
          Below are the list of all activities heroes can perform during
          downtime.
        </p>
        <Accordion
          title="Craft"
          content={
            <div>
              <p>
                You spend your downtime forging an item by making a skill roll.
                If you’re crafting a non-magical item with an item tier lower
                than your wealth tier, then you don’t have to pay the cost in
                raw materials. If you are crafting a magic item that uses a
                spell such as a magic wand of fireball, then unless you know the
                spell, you take <Modifier type="mf" count="1" /> to skill rolls
                to craft this item.
              </p>

              <ul className="degrees">
                <li>
                  <span>
                    <b>Success:</b> You craft the item.
                  </span>
                </li>

                <li>
                  <span>
                    <b>Partial Success:</b> You craft the item if you spend half
                    the item’s cost (rounded down) in raw materials
                  </span>
                </li>
                <li>
                  <span>
                    <b>Failure: </b> You fail to craft the item.
                  </span>
                </li>
              </ul>
              <h4 className="header">Upgrading Relics</h4>
              <p>
                You can upgrade a relic's tier to make the item’s power
                stronger. This process is the same as crafting a relic with the
                item's tier equalling the upgraded tier. The partial success
                cost in raw materials for upgrading a relic is half the
                difference in price between the current item’s value and the
                tier you’re upgrading to.
              </p>
              <p>
                For example, if you have a tier 1 energy weapon, you can upgrade
                it to tier 2 greater energy weapon. A tier 1 relic costs 5 gold,
                and a tier 2 relic costs 15 gold, so half the difference is 5.
                On a partial successful skill roll, you pay 5 gold in raw
                materials then make a skill roll to upgrade the relic's magic.
              </p>
            </div>
          }
        />
        <Accordion
          title="Earn Gold"
          content={
            <div>
              <p>
                You spend your downtime making money by working a job, such as
                being a laborer, monetizing your artistic talents, or using your
                knowledge to consult. Make a skill roll at normal difficulty to
                determine how much gold you earn:
              </p>
              <ul className="degrees">
                <li>
                  <span>
                    <b>Success:</b> At the end of the downtime, you earn 2 gold
                    for tier 1, 4 gold for tier 2, and 8 gold for tier 3.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Partial Success:</b> You earn half the amount of a
                    success.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Failure:</b> You earn nothing.
                  </span>
                </li>
              </ul>
            </div>
          }
        />
        <Accordion
          title="Leisure"
          content={
            <div>
              <p>
                You spend your downtime relaxing and living carefree. At the
                start of your next adventure, you gain{" "}
                <Link
                  className="internal-link"
                  to="/rules/combat#temporary-hit-points"
                >
                  temporary hit points
                </Link>
                equal to your proficiency bonus that last until you enter
                downtime again.
              </p>
            </div>
          }
        />
        <Accordion
          title="Long Term Project"
          content={
            <div>
              <p>
                You spend your downtime working on a long term project (either a
                new one or continuing to work on an old project). If starting a
                new project, start a positive countdown with a d4 or larger die
                if the GM thinks is appropriate. When starting or continuing a
                project, make a skill roll towards that project's countdown. A
                long term project covers any activity such as researching a
                magical ritual, constructing a tower, making an alliance with a
                new ally, investigating a mystery, or more.
              </p>
            </div>
          }
        />
        <Accordion
          title="Retrain"
          content={
            <div>
              <p>
                You spend your downtime retraining your combat skills. Choose
                one class talent, theme talent, fighting style technique, or
                spell you hero knows and change it to another feature of the
                same type and tier. For example, an arcanist that knows the tier
                1 battle spell chaos burst could forget how to cast that battle
                spell and instead learn the tier 1 battle spell arcane barrage.
              </p>
              <p>
                You can with your GM’s permission also change your class,
                subclass, heroic archetype, or legendary archetype choice as
                well although this is a larger narrative change. Work with your
                GM to explain why or how your hero undergoes a large shift in
                their capabilities.
              </p>
            </div>
          }
        />
        <Accordion
          title="Train"
          content={
            <div>
              <p>
                You spend your downtime training your combat skills. You can
                only use this downtime activity once per downtime. Make a skill
                roll at normal difficulty.
              </p>
              <ul className="degrees">
                <li>
                  <span>
                    <b>Success:</b> You gain an experience, learn a technique, a{" "}
                    <Link className="internal-link" to="/battle-spells">
                      battle spell
                    </Link>{" "}
                    , or a{" "}
                    <Link className="internal-link" to="/ritual-spells">
                      ritual spell
                    </Link>{" "}
                    if you have a magically related experience.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Partial Success:</b> Same as a success, but you must
                    spend gold equal to your tier.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Failure:</b> You fail to learn anything.
                  </span>
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default SkillRules;
