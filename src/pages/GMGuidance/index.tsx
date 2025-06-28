import "./index.scss";
// import { Link } from "react-router-dom";
// import Modifier from "../../components/Modifier";
import Accordion from "../../components/Accordion";

function OptionalRules() {
  return (
    <div className="gm-guidance">
      <div className="gm-guidance-content">
        <h1 className="gm-guidance__title">GM's Advice</h1>
        <p>
          This page lists geneneral advice on running the game for the GM from
          when to level up heroes to what kind of adventures to run.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#gm-guidance">
              <span>
                <b>GM Guidance</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#adventures-by-tier">
              <span>
                <b>Designing Adventures by Tier</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#handing-out-treasure">
              <span>
                <b>Handing Out Treasure</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#leveling-up">
              <span>
                <b>When to Level Up</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="gm-guidance">GM Guidance</h2>
        <p>
          This section offers general advice for running the game with GM
          Principles to follow, as well as GM Pitfalls to avoid.
        </p>
        <h3 className="header">GM Principles</h3>
        <p>
          Follow the below principles to create a fun game for you and your
          players.
        </p>

        <h4 className="header">Collaborative Spirit</h4>
        <p>
          Work with your players to create a rich story. All of you are in this
          together.
        </p>
        <h4 className="header">Cut to the Action</h4>
        <p>
          Skip the boring parts of the story. If the heroes are traveling for
          days, just say they travel for days. If the heroes are in a tavern,
          skip to the part where they meet someone interesting. If a scene is
          dragging on, end it or introduce an exciting element.
        </p>
        <h4 className="header">Encourage Creativity</h4>
        <p>
          Encourage your players to solve problems with creative solutions. When
          your players use their background or knacks in creative ways, say yes,
          unless the player's idea clashes too hard with the fiction and tone.
        </p>
        <h4 className="header">Every Rolls Matters</h4>
        <p>
          Only ask for a roll during meaningful or narratively important
          moments. Following the tracks of a ravaging monster should require a
          skill roll, but gathering food for the heroes' campfire shouldn't. If
          a roll doesn't matter, then don't ask for it.
        </p>
        <h4 className="header">Help your Players</h4>
        <p>
          The game is more fun when everyone is having fun. Help your newer
          players with learning the rules.
        </p>
        <h4 className="header">Heroes are Badass</h4>
        <p>
          Heroes in Legends Rise start off strong and become powerful. Embrace
          the high fantasy heroics. When in doubt, let the heroes try something,
          even if it involves comic book logic.
        </p>
        <h4 className="header">Incorporate the Player's Ideas</h4>
        <p>
          Ask for your players' ideas and weave them into the story. If their
          ideas conflict with the fiction or the narrative tone you want to
          tell, work with the player to reframe their idea.
        </p>
        <h4 className="header">Keep the Story Going</h4>
        <p>
          A roll should always result in the narrative advancing whether from a
          new complication, new information, or a changed circumstance.
        </p>
        <h4 className="header">Start and End with the Fiction</h4>
        <p>
          Rely on the fiction to guide the game, and connect mechanics back to
          the fiction whenever possible.
        </p>
        <h3 className="header">GM Pitfalls</h3>
        <p>
          Avoid the below pitfalls to create a fun game for you and your
          players.
        </p>
        <h4 className="header">Be Antagonist to the Heroes</h4>
        <p>
          Don't undermine the heroes by highlighting their incompetence on a
          poor roll or constantly saying no to a player's story contributions.
          Be on their side, not against them!
        </p>

        <h4 className="header">Only One Solution</h4>
        <p>
          Avoid every problem having only one solution. If the players come up
          with a clever plan you didn't account for, let them try it! They are
          the heroes of the story.
        </p>
        <h4 className="header">Overplanning</h4>
        <p>
          Avoid spending your prep time meticulously planning out every scene.
          Instead, focus on the big picture and important details. Let the
          players' actions and decisions shape the story.
        </p>
        <h4 className="header">Scenes Dragging On</h4>
        <p>
          Avoid letting scenes drag on when you feel your players' energy waning
          or people are talking in circles. If a encounter is taking too long,
          consider ending it early ("The remaining foes surrender or flee") or
          introducing a new complication to keep the players engaged.
        </p>

        <h2 id="adventures-by-tier">Designing Adventures By Tier</h2>
        <p>
          As heroes grow in power, so too should the scale and stakes of their
          adventures. Use the guidelines below to craft challenges that feel
          appropriate to each tier, ensuring your players always feel like
          legends rising to meet their destiny.
        </p>
        <h3 className="header">Tier 1 Adventures (Levels 1-4)</h3>
        <p>
          At this tier, your heroes are emerging legends. They are brave
          adventurers just beginning to make a name for themselves. Adventures
          should focus on localized threats and personal stakes. Think village
          raids by goblins, a haunted forest on the outskirts of town, or a
          corrupt noble threatening a small hamlet. The tone should feel
          grounded and immediate, with danger that's real but not overwhelming.
          Players should feel like they’re making a difference in a world that
          doesn’t yet know their names. This is also a great time to build
          personal connections, lay the groundwork for future villains, and let
          players discover who their characters are.
        </p>
        <Accordion
          title="Tier 1 Adventure Ideas"
          content={
            <div>
              <div>
                <p>
                  Local heroes dealing with emerging threats and humble
                  beginnings.
                </p>
                <ul>
                  <li>
                    <span>
                      A mining village has stopped sending shipments. Rumors say
                      something ancient was unearthed in the deepest tunnel.
                    </span>
                  </li>
                  <li>
                    <span>
                      A forest shrine is cursed, and travelers vanish near its
                      ruins.
                    </span>
                  </li>
                  <li>
                    <span>
                      Bandits armed with unusual arcane gear have taken over the
                      local trade route.
                    </span>
                  </li>
                  <li>
                    <span>
                      A small town is plagued by nightly attacks from shadowy
                      wolves that vanish at dawn.
                    </span>
                  </li>
                  <li>
                    <span>
                      A child has gone missing after speaking to a “star that
                      speaks", and now others have begun dreaming of it too.
                    </span>
                  </li>
                  <li>
                    <span>
                      A ghost begs the heroes to recover its bones from the
                      hands of a grave-robbing noble.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <h3 className="header">Tier 2 Adventures (Levels 5-7)</h3>
        <p>
          Now your heroes are seasoned champions, well-known across regions or
          even entire nations. The scale of threats and the reach of their
          impact should grow accordingly. A tyrant threatens to plunge a kingdom
          into war. A long-buried evil stirs beneath a capital city. A mighty
          beast ravages coastal towns, and only the heroes can stop it. In this
          tier, adventures should challenge players both tactically and morally,
          introducing political intrigue, large-scale conflicts, and dangerous
          enemies with complex goals. The world is watching, and the choices the
          heroes make can reshape entire nations.
        </p>
        <Accordion
          title="Tier 2 Adventure Ideas"
          content={
            <div>
              <p>
                <span>
                  Renowned champions confronting major regional threats and
                  political upheaval.
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    A usurper backed by a cult promises peace in exchange for
                    dark sacrifices.
                  </span>
                </li>
                <li>
                  <span>
                    A once-sealed dwarven vault has opened, releasing an ancient
                    war construct upon the countryside.
                  </span>
                </li>
                <li>
                  <span>
                    Civil war looms as the queen falls under the influence of a
                    charming, otherworldly advisor.
                  </span>
                </li>
                <li>
                  <span>
                    A dragon demands tribute or threatens to raze the capital,
                    and no one has seen it before.
                  </span>
                </li>
                <li>
                  <span>
                    An eclipse lingers far longer than it should, and night
                    terrors begin stalking the capital.
                  </span>
                </li>
                <li>
                  <span>
                    A magical plague spreads from city to city, aging victims to
                    dust in a matter of days.
                  </span>
                </li>
              </ul>
            </div>
          }
        />
        <h3 className="header">Tier 3 Adventures (Levels 8-10)</h3>
        <p>
          These are no longer mere adventurers. They are icons, demigods in the
          making, the kind of heroes that songs and epics are written about.
          Adventures at this tier should feel epic in every sense: journeys into
          other realms and realities, battles against ancient dragons or demon
          lords, quests to recover lost artifacts of cosmic power. A simple
          bandit raid no longer fits, unless those bandits are possessed by a
          cursed relic that’s tearing a hole in reality! Tier 3 stories are
          about existential threats: saving the world, stopping the collapse of
          time, sealing rifts between realms, or restoring balance to a dying
          sun. Every choice carries massive weight, and every victory reshapes
          the fate of existence.
        </p>
        <Accordion
          title="Tier 3 Adventure Ideas"
          content={
            <div>
              <p>
                <span>
                  World-shaking heroes battling cosmic threats and reshaping
                  reality.
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    The stars fall out of alignment, and ancient gates between
                    realms begin to flicker open.
                  </span>
                </li>
                <li>
                  <span>
                    A dead god's dreams leak into the material world, warping
                    reality and birthing horrors.
                  </span>
                </li>
                <li>
                  <span>
                    The moon shatters, and fragments rain down. Each one a
                    vessel of imprisoned celestial beings.
                  </span>
                </li>
                <li>
                  <span>
                    A time-traveling army marches toward the present, seeking to
                    rewrite a prophecy of ruin.
                  </span>
                </li>
                <li>
                  <span>
                    A primordial dragon stirs beneath the ocean, threatening to
                    awaken a second age of flame.
                  </span>
                </li>
                <li>
                  <span>
                    A cult awakens an imprisoned demon lord that will destroy
                    the world with an army of demons.
                  </span>
                </li>
              </ul>
            </div>
          }
        />

        <h2 id="handing-out-treasure">Handing Out Treasure</h2>
        <p>
          As heroes progress through the game, they will find treasure. The
          Treasure By Hero Table lists how many relics, consumables, and gold a
          hero should acquire over the course of adventuring in one tier. For
          example, by the time a hero reaches 5th level (tier 2), they should
          have all the treasure listed in the hero's tier 1 row. The total value
          column shows how much gold worth of treasure a hero has by combining
          the cost of the relics, consumables, and extra gold they acquire. The
          amount of treasure is a guideline, and you can adjust it based on your
          campaign's needs.
        </p>
        <h3 className="header">Treasure By Hero Table</h3>
        <table>
          <thead>
            <tr>
              <th>Hero's Tier</th>
              <th>Relics Acquired</th>
              <th>Consumables Acquired</th>
              <th>Extra Gold</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tier 1: 1</td>
              <td>Tier 1: 4</td>
              <td>3 gold</td>
              <td>12 gold</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tier 2: 1</td>
              <td>Tier 2: 3</td>
              <td>9 gold</td>
              <td>33 gold</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tier 3: 1</td>
              <td>Tier 3: 3</td>
              <td>18 gold</td>
              <td>66 gold</td>
            </tr>
          </tbody>
        </table>

        <h2 id="leveling-up">When to Level Up</h2>
        <p>
          In Legends Rise, character advancement is driven by story, not
          experience points. The GM determines when the party levels up,
          typically after achieving a significant narrative milestone. These
          moments often mark the conclusion of a major story beat or the party’s
          meaningful progress in a campaign arc. A common rule of thumb is to
          level up every 3 to 4 sessions, but this can vary depending on the
          pacing and stakes of your campaign.
        </p>
        <p>
          Narrative leveling keeps the focus on heroic moments and narrative
          accomplishments. For example, completing a dangerous journey through
          an undead-infested swamp to recover a lost relic, uncovering the
          traitor behind a noble house’s fall, or defeating the warlord
          terrorizing a region might all warrant a level up. Similarly, forging
          a political alliance, gaining the favor of a powerful patron, or
          surviving a harrowing trial in the green realm could mark a
          significant victory that leads to a stronger, wiser group of heroes.
          GMs are encouraged to use narrative leveling to reinforce the tone and
          themes of their campaign, rewarding character-driven growth and
          world-shaping choices as much as combat prowess.
        </p>
      </div>
    </div>
  );
}

export default OptionalRules;
