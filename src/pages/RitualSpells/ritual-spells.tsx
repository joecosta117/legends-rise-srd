import AbilityCard from "../../components/AbilityCard";
import Modifier from "../../components/Modifier";
import { Link } from "react-router-dom";

export const ritualSpells = [
  [
    {
      title: "Alarm",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create invisible sensors that warn you when a creature enters the area."
          frequency="Spell 1 (Ritual)"
          keywords="Magical, Range"
          cast="10 minutes"
          target="1 zone per tier (each zone must be connected) within 1 zone"
          duration="8 hours"
          effect={
            <span>
              When you cast the spell, you can designate creatures that the
              spell ignores. A creature can succeed on a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              to either detect the sensors or move without triggering the alarm.
              The skill tier matches your tier.
            </span>
          }
          critical="Same as success, and the sensors see through invisibility"
          success="Sensors have night vision"
          partial="Sensors can see in normal light"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Arcane Servant",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create an Invisible, mindless force that performs simple tasks at your command."
          frequency="Spell 1 (Ritual)"
          keywords="Magical"
          cast="10 minutes"
          effect="You create an invisible servant next to you that follows your commands and can interact with objects. The servant has defenses of 10 and automatically is destroyed if they take any damage, or if they are more than a mile from you."
          critical="Servant lasts for a full day"
          success="Servant lasts for 8 hours"
          partial="Servant lasts for 1 hour"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Create Item",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a temporary, non-magical item such as a shovel, rope, or a weapon."
          frequency="Spell 1 (Ritual)"
          keywords="Magical"
          cast="10 minutes"
          effect="You create an item within your hands. The item can’t weigh more than a heavy piece of armor. If you attempt to cast this spell again, the previous item is destroyed."
          critical="Item lasts for a full day"
          success="Item lasts for 8 hours"
          partial="Item lasts for 1 hour"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Create Steed",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You conjure a large land creature that a small or medium sized creature can ride."
          frequency="Spell 1 (Ritual)"
          keywords="Magical"
          cast="10 minutes"
          effect="The steed appears before you and can take the shape of whichever you choose such as a horse, camel, or giant lizard. The steed’s defenses equal your own, and it has 1 hit point."
          critical="Same as success, and the steed can walk on water and gains a fly speed of 1"
          success="Steed lasts for 8 hours"
          partial="Steed lasts for 1 hour"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Disguise",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You make the target look different by changing their clothes, armor, weapons, or body."
          frequency="Spell 1 (Ritual)"
          keywords="Magical, Melee"
          cast="10 minutes"
          target="1 creature per your tier you can touch"
          effect={
            <span>
              You make the target look like another creature of the same size. A
              creature can see through the illusion with a successful{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              with the skill tier matching the spellcaster’s tier.
            </span>
          }
          critical="Same as success, but the size of the disguise can be one larger or smaller"
          success="Disguise lasts for 8 hours"
          partial="Disguise lasts for 1 hour, and creatures have +1 fortune on skill rolls to see through the illusion"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Enhance Sight",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You magically sharpen the target’s vision."
          frequency="Spell 1 (Ritual)"
          keywords="Magical, Melee"
          cast="10 minutes"
          target="1 creature per your tier you can touch"
          effect="The steed appears before you and can take the shape of whichever you choose such as a horse, camel, or giant lizard. The steed’s defenses equal your own, and it has 1 hit point."
          critical="Target gains night vision for a full day"
          success="Target gains night vision for 8 hours"
          partial="Target gains night vision for 1 hour"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Invisibility",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You cloak the target in illusionary magic, making them and their belongings invisible."
          frequency="Spell 1 (Ritual)"
          keywords="Magical, Melee"
          cast="10 minutes"
          target="1 creature per your tier you can touch"
          effect="Invisibility ends early if the target uses a hostile ability."
          critical="Target becomes invisible for 8 hours"
          success="Target becomes invisible for 1 hour"
          partial="Target becomes invisible for 10 minutes"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Lock",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You magically lock an item from everyone, but you."
          frequency="Spell 1 (Ritual)"
          keywords="Magical"
          cast="10 minutes"
          target="1 lock, door, or container with a latch you can touch"
          effect={
            <span>
              Target’s latch mechanism is magically locked to everyone but you
              and other creatures you designate. The target can be opened by a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              with the skill tier matching your tier. When the target is opened
              by anyone not designated by you, the spell ends.
            </span>
          }
          critical="Lock duration is unlimited"
          success="Lock duration is a full day"
          partial="Lock duration is 1 hour"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Spider Climb",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You give an ally the power of spiders."
          frequency="Spell 1 (Ritual)"
          keywords="Magical, Melee"
          cast="10 minutes"
          target="1 creature per your tier you can touch"
          effect="Target can walk on any solid surface"
          critical="Duration is 8 hours"
          success="Duration is 1 hour"
          partial="Duration is 10 minutes"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Understand Languages",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You understand all languages."
          frequency="Spell 1 (Ritual)"
          keywords="Magical, Melee"
          cast="10 minutes"
          target="1 creature per your tier you can touch"
          effect="Target can understand all languages"
          critical="Same as a success, and the target can write and speak the language perfectly too"
          success="Target understands the language perfectly"
          partial="Target doesn’t understand the language perfectly, but instead only makes out bits and pieces of words correctly"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
  ],
  [
    {
      title: "Duplicate",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a duplicate of a creature by transmuting rare metal with arcane energy."
          frequency="Spell 2 (Ritual)"
          keywords="Magical"
          cast="12 hours"
          requirement="Hair or blood of the target and 3 gold worth of precious material"
          target="1 living creature"
          effect={
            <span>
              You create a duplicate of the target. The duplicate has no
              memories of the original target, but can pass itself off as the
              original through a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              with <Modifier type="f" count="1" />. The duplicate has no special
              abilities that the original has such as casting spells. The
              duplicate’s defenses equal 8 + double the spell tier, they have
              hit points equal to double the spell tier, and their proficiency
              bonus equals double the spell tier.
            </span>
          }
          critical="Same as a success, but you and the duplicate can communicate telepathically with one another"
          success="You have control over the duplicate and can give it verbal commands"
          partial="Duplicate is not under your control, and might regard you as neutral or hostile"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Flight",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You give a creature the power of flight."
          frequency="Spell 2 (Ritual)"
          keywords="Magical, Melee"
          cast="10 minutes"
          target="1 creature you can touch"
          effect="Target gains a fly speed of 1"
          critical="Spell lasts for 8 hours"
          success="Spell lasts for 1 hour"
          partial="Spell lasts for 10 minutes"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Locate",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You divine the location of a specific object or person that is near you."
          frequency="Spell 2 (Ritual)"
          keywords="Magical, Range"
          cast="10 minutes"
          target="1 object or creature familiar to you"
          effect="You sense the direction to the target’s location. If the target is in motion, you know the direction of their movement"
          critical="Range of the spell is your realm"
          success="Range of the spell is 10 miles"
          partial="Range of the spell is 1 mile"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Magic Eye",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create an hovering, invisible eye that can scout for you."
          frequency="Spell 2 (Ritual)"
          keywords="Magical"
          cast="10 minutes"
          duration="1 hour"
          effect="You create an invisible eye next to you that you can see through. You can move the eye with your mind with a fly speed of 1, but the eye can’t pass through solid barriers."
          critical="Eye has blind vision"
          success="Eye has night vision"
          partial="Eye has normal vision"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Message",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You send a short message to a creature."
          frequency="Spell 2 (Ritual)"
          keywords="Magical, Range"
          cast="10 minutes"
          target="1 familiar creature"
          effect="You send a short, spoken message (1 minute or less) that is heard in the target’s mind, and the target can respond with the same message limitations"
          critical="Target can be anywhere within your realm"
          success="Target can't be more than 100 miles away"
          partial="Target can't be more than 10 miles away"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Safe Haven",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You construct a small structure of arcane energy that you can safely rest in."
          frequency="Spell 2 (Ritual)"
          duration="8 hours"
          keywords="Magical"
          cast="10 minutes"
          effect={
            <span>
              Your zone is surrounded by a dome of transparent arcane energy.
              You and designated creatures can freely move in and out of the
              dome. Other creatures can’t enter without succeeding on a{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>{" "}
              with the skill tier matching the spell tier.
            </span>
          }
          critical="Other creatures take +1 misfortune to enter the dome"
          success="Spell works"
          partial="Other creatures gain +1 fortune to enter the dome"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Scry",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You magically spy on a creature."
          frequency="Spell 2 (Ritual)"
          requirement="Minor possession of the target, such as hair, small personal effect, or blood"
          duration="1 hour"
          keywords="Magical"
          cast="10 minutes"
          target="1 creature in your realm"
          effect="You create an invisible sensor floating above the target that lets you see and hear everything nearby."
          critical="Your sensor can see anything invisible"
          success="Spell works"
          partial="Spell works, but the target is aware they’re being magically spied on"
          failure="Spell fails, target gains a brief glimpse of you and knows your location, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
  ],
  [
    {
      title: "Create Sanctuary",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You create a castle, tower, or temple to serve as a home base."
          frequency="Spell 3 (Ritual)"
          keywords="Magical"
          cast="1 day"
          requirement="Precious materials worth 6 gold"
          effect="You construct a castle, mansion, tower, temple, or any type of structure near you. You can determine if the structure has walls surrounding it or any other nearby structural features."
          critical="Structure is the size of a large keep"
          success="Structure is the size of a mansion"
          partial="Structure is the size of a normal house"
          failure="Spell fails, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Realm Shift",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You teleport yourself and allies to another realm."
          frequency="Spell 3 (Ritual)"
          keywords="Magical"
          cast="10 minutes"
          requirement="A small token from the target realm such as a rock from the earth realm"
          target="Any location within another realm"
          effect="You teleport a number of willing creatures next to you, possibly including yourself, equal to your proficiency bonus."
          critical="Teleportation works as intended"
          success="Teleport to a location 1d12 miles away from the intended target"
          partial="Teleport to a location 2d12+6 miles away from the intended target"
          failure="Teleport to a random location within a random realm, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Resurrect",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You bring someone back from death."
          frequency="Spell 3 (Ritual)"
          keywords="Magical"
          cast="1 day"
          requirement={
            <span>
              1 dead creature. If you don’t have access to the body, then you
              take <Modifier type="mf" count="1" /> to this spell’s{" "}
              <Link className="internal-link" to="/rules/skills">
                skill roll
              </Link>
            </span>
          }
          critical="Same as a success, but the target isn’t hindered"
          success="If the target is willing, they are resurrected with 1 hit point and any resources are already spent, such as recoveries. The journey from the afterlife leaves the target weak, and they’re hindered until after a long rest."
          partial="Same as a success, but the target is hindered for a week"
          failure="Spell fails, you can't attempt this spell again until after a long rest, and you take a growing +1 misfortune on this spell to resurrect the same target again."
        />
      ),
    },
    {
      title: "Teleport",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="As you all gather around, you teleport everyone across the world."
          frequency="Spell 3 (Ritual)"
          keywords="Magical"
          cast="10 minutes"
          requirement="A small token from the target realm such as a rock from the earth realm"
          target="Any location within your realm"
          effect="You teleport a number of willing creatures next to you, possibly including yourself, equal to your proficiency bonus."
          critical="Teleportation works as intended"
          success="Teleport to a location 1d12 miles away from the intended target"
          partial="Teleport to a location 2d12+6 miles away from the intended target"
          failure="Teleport to a random location within your realm, and you can't attempt this spell again until after a long rest"
        />
      ),
    },
    {
      title: "Wish",
      actType: "Ritual",
      spell: (
        <AbilityCard
          accordion
          descriptor="You change the fabric of reality to your whims with a wish."
          frequency="Spell 3 (Ritual)"
          keywords="Magical"
          cast="1 day"
          requirement="Precious materials worth 15 gold"
          critical="Same as a success, but there are no complications"
          success="You make a wish that is granted with complications, such as angering a god or taking riches from a criminal organization now mad at you. You also take a growing +1 misfortune to this spell"
          partial="Same as a success, but the wish isn’t granted nor are there complications"
          failure="Same as a partial, but an ironic complication occurs such as being trapped in a vault of treasure or achieving divinity in a reality with no one else"
        />
      ),
    },
  ],
];
