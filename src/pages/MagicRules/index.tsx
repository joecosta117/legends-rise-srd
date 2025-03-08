import "./index.scss";
import Modifier from "../../components/Modifier";
import RulesHeader from "../../components/RulesHeader";
import { Link } from "react-router-dom";

function MagicRules() {
  return (
    <div className="general">
      <div className="general-content">
        <RulesHeader />
        <h1>Magic Rules</h1>
        <p>
          Magic allows people to do great, but also terrible things. This page
          provides the rules for casting spells.
        </p>
        <h2>Table of Contents</h2>
        <ul style={{ marginTop: "0" }}>
          <li>
            <a href="#basics">
              <span>
                <b>Spell Basics</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#battle">
              <span>
                <b>Battle Spells</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#freeform">
              <span>
                <b>Freeform Spells</b>
              </span>
            </a>
          </li>
          <li>
            <a href="#ritual">
              <span>
                <b>Ritual Spells</b>
              </span>
            </a>
          </li>
        </ul>

        <h2 id="basics">Spell Basics</h2>
        <p>
          A spell is a magical effect that can produce a wide range of effects
          from deadly fireballs to healing wounds.
        </p>
        <h3 className="header">Spell Tiers</h3>
        <p>
          Spells vary in power and scope of their effects. Certain spells are
          ranked using <b>spell tiers</b>, with the higher the number, the more
          powerful the spell. Tier 3 spells are the most powerful spells known
          to mortals, while tier 0 are the most basic. Casting a spell usually
          strains the caster, but tier 0 spells require little to no effort to
          cast.
        </p>
        <h4 className="header">Casting Spells at a High Tier</h4>
        <p>
          You can choose to cast a spell at a higher tier to deal extra damage
          or gain a greater effect. Some spells become more potent when cast a
          higher tier, such as increased damage or other effects.
        </p>
        <h3 className="header">Mana</h3>
        <p>
          <b>Mana</b> represent the resource spellcasters use to cast dangerous
          magic in battle. Casting a high tier battle spells requires an
          incredible amount of mental effort that a mortal can only exert a few
          times in a short time.
        </p>
        <p>
          When you cast a battle spell of tier 1 or higher, you must spend mana
          equal to the spell tier. After a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            short rest
          </Link>
          , a hero regains all expended mana.
        </p>
        <h3 className="header">Learning Spells</h3>
        <p>
          As a spellcaster grows in power, they can learn more spells. In order
          to learn and cast a spell, the hero’s tier must meet or exceed the
          spell’s tier. For example, a tier 2 hero can learn tier 2 or lower
          spells, but can’t learn or cast tier 3 spells. If you’re learning a
          battle spell, then you also know the spell’s{" "}
          <Link className="internal-link" to="/battle-spells">
            magic tradition
          </Link>{" "}
          .
        </p>
        <h3 className="header">Casting Spells Rules</h3>
        <p>
          To cast a spell, you must loudly speak the incantation and flourish
          your hands in a precise pattern. If you can’t speak and can’t move
          your hands, then you can’t cast spells.
        </p>
        <p>
          Instead of moving your hands, you can instead wield an{" "}
          <b>implement</b>. Implements can be anything such as a wand, staff,
          book, prayer beads, weapon, or holy symbol. If you have an implement
          in one of your hands you can cast spells as long as you can also
          speak. You can only use an implement if you have properly aligned your
          magical energy to it, which takes a{" "}
          <Link className="internal-link" to="/rules/adventuring#resting">
            short rest
          </Link>{" "}
          to do so while holding the implement.
        </p>

        <h2 id="battle">Battle Spells</h2>
        <p>
          Exploding fireballs to decimate foes or healing a fallen foe after
          they take a mortal blow are all examples of <b>battle spells</b>.
          Battle spells tend to be powerful effects used primarily in combat to
          cause harm to enemies or protect allies. Battle spells are ranked by
          spell tier and categorized by{" "}
          <Link className="internal-link" to="/battle-spells">
            magic traditions
          </Link>{" "}
          .
        </p>
        <h3 className="header">Magic Traditions</h3>
        <p>
          All battle spells belong to{" "}
          <Link className="internal-link" to="/battle-spells">
            magic traditions
          </Link>{" "}
          . Every tradition represents a theme of magical effects that share
          common effects. For example, the fire magic tradition provides spells
          that manipulate fire.
        </p>
        <h4 className="header">Learning Magic Traditions</h4>
        <p>
          When you learn a{" "}
          <Link className="internal-link" to="/battle-spells">
            magic tradition
          </Link>{" "}
          , you also learn a tier 0 battle spell from that tradition. Once you
          know a magic tradition, you can learn higher tier battle spells from
          it. If a feature makes you learn a magic tradition that you already
          know, then you instead learn another tier 0 battle spell from that
          tradition.
        </p>

        <h2 id="freeform">Freeform Spells</h2>
        <p>
          All explicit spells are battle spells or ritual spells, and ritual
          spells are useful out of combat. However, heroes with magical
          backgrounds can use <b>freeform spells</b> to aid them in{" "}
          <Link className="internal-link" to="/rules/skills">
            skill rolls
          </Link>
          . Freeform spells are narratively restricted by what magic traditions
          the hero knows. A magical hero that only knows the fire magic
          tradition can’t freeze water into ice!
        </p>
        <p>
          For example, a hero needs to leap across a wide chasm and the GM asks
          for a skill roll. The hero invokes their background “shaman of the
          elven woods” to use a magic to help them jump. Knowing the air
          tradition, the hero uses a freeform spell to summon a gust of wind to
          push them across the chasm. The hero makes their skill roll, and after
          adding their background bonus, they get a success!
        </p>
        <p>
          In another example, a GM asks for a skill roll to get past the lock.
          The hero lacks any thievery skills, but their background “archmage’s
          apprentice” might be useful in finding a magical solution. Using their
          time tradition, the hero attempts a freeform spell to magically age
          the door’s lock until it falls apart. The hero makes their skill roll,
          and after adding their background bonus, they get a success!
        </p>

        <h2 id="ritual">Ritual Spells</h2>
        <p>
          Scrying on a distant foe or speaking with animals are examples of{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          . These spells tend to take a long time to cast and might cost gold in
          order to produce powerful and lasting magical effects. Like battle
          spells,{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          are ranked by tier.
        </p>
        <h3 className="header">Learning Ritual Spells</h3>
        <p>
          If you have a magical background, then you can learn{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          . Unlike battle spells, ritual spells are universal magic that aren’t
          categorized by magic tradition.
        </p>
        <p>
          You can learn a ritual spell by buying or finding a spell scroll
          containing the ritual spell. Using the scroll, you can attempt to
          permanently learn the ritual spell by making a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          . The roll’s skill tier matches the spell’s tier.
        </p>
        <ul>
          <li>
            <span>
              <b>Critical Success:</b> Same as a success, and the first time you
              attempt the ritual spell, you gain <Modifier type="f" count="1" />{" "}
              to the skill roll.
            </span>
          </li>
          <li>
            <span>
              <b>Success:</b> You learn the ritual spell. The magic of the
              scroll fades.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> Same as a success, but the first time you
              attempt the ritual spell, you take{" "}
              <Modifier type="mf" count="1" /> to the skill roll.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            You fail to learn the ritual spell, and can’t try again until after
            a{" "}
            <Link className="internal-link" to="/rules/adventuring#resting">
              long rest
            </Link>
            .
          </li>
        </ul>
        <h3 className="header">Casting Ritual Spell</h3>
        <p>
          Although{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          are tiered like battle spells, ritual spells don’t cost mana to cast.
          Instead of their more destructive brethren, ritual spells take much
          longer to cast and often require material costs, while others require
          more esoteric costs.
        </p>
        <h4 className="header">Primary Spellcaster</h4>
        <p>
          Any spellcaster that helps cast the ritual is a participating
          spellcaster for the spell. However, every casting has a primary
          spellcaster, as their magical skills largely decide if the ritual is
          successful or not.
        </p>
        <h4 className="header">Casting Timing</h4>
        <p>
          In the description of a{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spell
          </Link>{" "}
          , the time required to cast the spell will be specified as cast.
          Usually this time is long such as 10 minutes to even a day or week.
          During this time, a participating spellcaster can’t perform any other
          activities. For very long casting durations such as a day or week,
          others can assist in the casting so the primary spellcaster can take
          breaks to eat or sleep.
        </p>
        <h4 className="header">Material Cost</h4>
        <p>
          Some{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          require a material cost to cast such as gold, gems, or other wondrous
          goods. Without the sufficient material cost, the ritual spell fails
          before it can even begin.
        </p>
        <h3 className="header">Ritual Skill Rolls</h3>
        <p>
          The primary spellcaster needs to make a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>{" "}
          when casting a{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spell
          </Link>{" "}
          . Depending on the result of the skill roll, the magical effect
          produced by the spell can vary. The roll’s skill tier matches the
          spell’s tier.
        </p>
        <h3 className="header">Aiding a Ritual</h3>
        <p>
          As{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          can be prolonged, it is common for others to assist the primary
          spellcaster in conjuring the magic. There are two ways someone can aid
          a ritual spell.
        </p>
        <h4 className="header">Secondary Spellcaster</h4>
        <p>
          Anyone with a sufficient magical background, such as “mage’s
          apprentice”, can become a secondary spellcaster in a ritual by
          attempting a{" "}
          <Link className="internal-link" to="/rules/skills">
            skill roll
          </Link>
          .
        </p>
        <ul>
          <li>
            <span>
              <b>Critical Success:</b> The primary spellcaster gains{" "}
              <Modifier type="f" count="2" /> to their ritual's skill roll.
            </span>
          </li>
          <li>
            <span>
              <b>Success:</b> The primary spellcaster gains{" "}
              <Modifier type="f" count="1" /> to their ritual's skill roll.our
              total meets or exceeds the TN.
            </span>
          </li>
          <li>
            <span>
              <b>Partial Success:</b> No effect, as you neither help nor hurt.
            </span>
          </li>
          <li>
            <span>
              <b>Failure:</b>
            </span>{" "}
            The primary spellcaster takes <Modifier type="mf" count="1" /> to
            their ritual's skill roll.
          </li>
        </ul>
        <p>
          Secondary spellcasters can rotate out with the primary spellcaster for
          ritual spells that take very long to cast such as days or more!
          However, the primary spellcaster must start and finish the ritual
          spell.
        </p>
        <h4 className="header">Reduce the Material Cost</h4>
        <p>
          Some{" "}
          <Link className="internal-link" to="/ritual-spells">
            ritual spells
          </Link>{" "}
          require material cost, which others can help supply.
        </p>
      </div>
    </div>
  );
}

export default MagicRules;
