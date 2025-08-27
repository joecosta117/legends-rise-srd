import "./index.scss";
import UndeadMonsters from "./AllMonsters/undead";
import Accordion from "../../components/Accordion";
import HumanoidMonsters from "./AllMonsters/humanoids";
import DragonMonsters from "./AllMonsters/dragons";
import DemonMonsters from "./AllMonsters/demons";
import ElementalMonsters from "./AllMonsters/elementals";
import GiantMonsters from "./AllMonsters/giants";
import Dropdown from "../../components/Dropdown";
import ConstructMonsters from "./AllMonsters/constructs";
import MonstrosityMonsters from "./AllMonsters/monstrosities";
import OozeMonsters from "./AllMonsters/oozes";
import PlantMonsters from "./AllMonsters/plants";
import AberrationMonsters from "./AllMonsters/aberrations";
import AngelMonsters from "./AllMonsters/angels";
import FaerieMonsters from "./AllMonsters/faeries";
import BeastMonsters from "./AllMonsters/beasts";
import { useState, useEffect, JSX } from "react";
import Pagination from "../../components/Pagination";
import Monster from "../../components/Monster";
import { Link } from "react-router-dom";
import ToolTip from "../../components/ToolTip";
import basicAtk from "../../assets/monster-strike.png";

interface MonsterListProps {
  name: string;
  tier: string;
  type: string;
  description: string;
  role: string;
  tactics: string | JSX.Element;
  threat: string;
  statBlock: JSX.Element;
  secondaryMonster?: JSX.Element;
}

function Monsters() {
  const MonsterList = [
    ...AberrationMonsters,
    ...AngelMonsters,
    ...BeastMonsters,
    ...ConstructMonsters,
    ...DragonMonsters,
    ...DemonMonsters,
    ...ElementalMonsters,
    ...FaerieMonsters,
    ...GiantMonsters,
    ...HumanoidMonsters,
    ...MonstrosityMonsters,
    ...OozeMonsters,
    ...PlantMonsters,
    ...UndeadMonsters,
  ].sort((a, b) => a.name.localeCompare(b.name));
  const [sortNameOrder, setSortNameOrder] = useState<"asc" | "desc">("asc");
  const [sortTierOrder, setSortTierOrder] = useState<"asc" | "desc" | "">("");
  const [roleFilter, setRoleFilter] = useState("");
  const [tierFilter, setTierFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [threatFilter, setThreatFilter] = useState("");
  const [currentMonsters, setCurrentMonsters] =
    //@ts-ignore
    useState<MonsterListProps[]>(MonsterList);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const monstersPerPage = 20;

  // Calculate the monsters to display based on the current page
  const indexOfLastMonster = currentPage * monstersPerPage;
  const indexOfFirstMonster = indexOfLastMonster - monstersPerPage;
  const currentMonstersToDisplay = currentMonsters.slice(
    indexOfFirstMonster,
    indexOfLastMonster,
  );

  // Tier Filter Logic
  function handleTierFilter(label: string) {
    setTierFilter(label);
  }
  const tierDropdownItems = [
    { label: "-", onClick: handleTierFilter },
    { label: "Tier 1", onClick: handleTierFilter },
    { label: "Tier 2", onClick: handleTierFilter },
    { label: "Tier 3", onClick: handleTierFilter },
  ];
  // Role Filter Logic
  function handleRoleFilter(label: string) {
    setRoleFilter(label);
  }
  const roleDropdownItems = [
    { label: "-", onClick: handleRoleFilter },
    { label: "Artillery", onClick: handleRoleFilter },
    { label: "Bruiser", onClick: handleRoleFilter },
    { label: "Disabler", onClick: handleRoleFilter },
    { label: "Skirmisher", onClick: handleRoleFilter },
    { label: "Support", onClick: handleRoleFilter },
    { label: "Tank", onClick: handleRoleFilter },
  ];
  // Type Filter Logic
  function handleTypeFilter(label: string) {
    setTypeFilter(label);
  }
  const typeDropdownItems = [
    { label: "-", onClick: handleTypeFilter },
    { label: "Aberration", onClick: handleTypeFilter },
    { label: "Angel", onClick: handleTypeFilter },
    { label: "Beast", onClick: handleTypeFilter },
    { label: "Construct", onClick: handleTypeFilter },
    { label: "Dragon", onClick: handleTypeFilter },
    { label: "Elemental", onClick: handleTypeFilter },
    { label: "Faerie", onClick: handleTypeFilter },
    { label: "Fiend", onClick: handleTypeFilter },
    { label: "Giant", onClick: handleTypeFilter },
    { label: "Humanoid", onClick: handleTypeFilter },
    { label: "Monstrosity", onClick: handleTypeFilter },
    { label: "Ooze", onClick: handleTypeFilter },
    { label: "Plant", onClick: handleTypeFilter },
    { label: "Undead", onClick: handleTypeFilter },
  ];
  // Threat Filter Logic
  function handleThreatFilter(label: string) {
    setThreatFilter(label);
  }
  const threatDropdownItems = [
    { label: "-", onClick: handleThreatFilter },
    { label: "Minion", onClick: handleThreatFilter },
    { label: "Minor", onClick: handleThreatFilter },
    { label: "Standard", onClick: handleThreatFilter },
    { label: "Major", onClick: handleThreatFilter },
    { label: "Boss", onClick: handleThreatFilter },
  ];

  // Sort Monsters Logic
  function sortMonsters() {
    const sortedMonsters = [...currentMonsters].sort((a, b) =>
      sortNameOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    if (sortTierOrder) {
      sortedMonsters.sort((a, b) =>
        sortTierOrder === "asc"
          ? a.tier.localeCompare(b.tier)
          : b.tier.localeCompare(a.tier),
      );
    }

    setCurrentMonsters(sortedMonsters);
  }
  function handleNameSort() {
    setSortNameOrder(sortNameOrder === "asc" ? "desc" : "asc");
  }
  function handleTierSort() {
    setSortTierOrder(sortTierOrder === "asc" ? "desc" : "asc");
  }
  useEffect(() => {
    sortMonsters();
  }, [sortNameOrder, sortTierOrder]);

  // FILTER functions
  function filterMonsters() {
    const newMonsterList = MonsterList.filter((monster) => {
      const matchesRoleFilter =
        !roleFilter || roleFilter === "-" || monster.role === roleFilter;
      const matchesTierFilter =
        !tierFilter ||
        tierFilter === "-" ||
        monster.tier === tierFilter.charAt(tierFilter.length - 1);
      const matchesTypeFilter =
        !typeFilter || typeFilter === "-" || monster.type.includes(typeFilter);
      const matchesThreatFilter =
        !threatFilter ||
        threatFilter === "-" ||
        monster.threat === threatFilter;

      return (
        matchesRoleFilter &&
        matchesTierFilter &&
        matchesTypeFilter &&
        matchesThreatFilter
      );
    });

    setCurrentMonsters(newMonsterList);
    setSortNameOrder("asc");
    setCurrentPage(1); // Reset to the first page after filtering
  }

  function resetFilters() {
    setTierFilter("-");
    setRoleFilter("-");
    setThreatFilter("-");
    setTypeFilter("-");
    setCurrentPage(1); // Reset to the first page after filtering
  }

  return (
    <div className="monsters">
      <div className="monsters-content">
        <h1>Monsters</h1>
        <p>
          When building encounters, carefully consider how many enemies to use
          as well as the type and class of your chosen enemies.
        </p>
        <Accordion
          title="Reading Monster Entries"
          content={
            <div>
              <p>
                Each monster entry begins with its name, tier, role, and threat
                level. Each monster also has a brief description of them as well
                as preferred tactics in combat. Their stat block provides
                essential information such as hit points (HP), defenses, and
                special abilities.
              </p>
              <Monster
                name="Monster Example"
                hp="12"
                evn="14"
                res="12"
                pb="2"
                type="Size and Creature Type"
                tier="1"
                threat="Standard"
                role="Role"
                resistances="any resistances"
                weaknesses="any weaknesses"
                speeds="fly 1"
                vision="night"
                traits={[
                  {
                    name: "Trait Example",
                    description: (
                      <span>
                        Traits such as regeneration, auras, or other passive
                        effects are listed under traits.
                      </span>
                    ),
                  },
                ]}
                actions={[
                  {
                    basic: true,
                    name: "Attack Example",
                    keywords: "melee, weapon",
                    target: (
                      <span>
                        1{" "}
                        <Link
                          className="internal-link"
                          to="/rules/combat#engaged"
                        >
                          engaged
                        </Link>{" "}
                        creature
                      </span>
                    ),
                    defense: "Guard",
                    damage: "4 physical damage",
                  },
                ]}
                maneuvers={[
                  {
                    name: "Maneuver Example",
                    effect:
                      "Any special maneuvers are listed under the maneuver section.",
                  },
                ]}
                reactions={[
                  {
                    name: "Reaction Example",
                    effect:
                      "Any special reactions are listed under the maneuver section.",
                  },
                ]}
              />
              <h3 className="header" style={{ marginTop: "15px" }}>
                General Statistics
              </h3>
              <p>
                In the top section of a monster's entry, you will find general
                information on the monster:
              </p>
              <ul>
                <li>
                  <span>
                    <b>Hit Points:</b> Will be abbreviated as HP with the
                    monster's <ToolTip preset="shaken" /> value in parenthesis.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Proficiency Bonus:</b> Will be abbreviated as PB. Add
                    this bonus to all attack rolls the monster makes.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Resistances and Weaknesses:</b> If the monster has any
                    resistances or weaknesses, then they will be listed.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Speed:</b> If the monster has any special speeds, then
                    they will be listed. Otherwise, you can assume all monstes
                    have a land speed of 1.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Vision:</b> If the monster has any special vision, then
                    they will be listed.
                  </span>
                </li>
              </ul>

              <h3 className="header">Special Abilities</h3>
              <p>
                On the bottom half of a monster's entry, you'll find any special
                abilities they have such as passive traits, actions, maneuvers,
                and reactions. Like heroes, monsters can use basic actions and
                maneuvers. The symbol{" "}
                <img className="attack-icon" src={basicAtk} alt="attack icon" />{" "}
                that appears next to a monster's action indicates the ability is
                treated as a{" "}
                <Link className="internal-link" to="/combat-abilities#strike">
                  strike
                </Link>
                .
              </p>
              <p>
                For boss monsters, they also have boss abilities, which are
                special abilities that activate at the start of round 1, 3, and
                5. These abilities don't count as the boss's turn.
              </p>
            </div>
          }
        />

        <div className="filters">
          <div className="filters__section">
            <div className="filters__section__title">Tier</div>
            <Dropdown
              items={tierDropdownItems}
              startLabel="–"
              type="tier"
              selected={tierFilter}
            />
          </div>
          <div className="filters__section">
            <div className="filters__section__title">Role</div>
            <Dropdown
              items={roleDropdownItems}
              startLabel="–"
              type="role"
              selected={roleFilter}
            />
          </div>
          <div className="filters__section">
            <div className="filters__section__title">Threat</div>
            <Dropdown
              items={threatDropdownItems}
              startLabel="–"
              type="threat"
              selected={threatFilter}
            />
          </div>
          <div className="filters__section">
            <div className="filters__section__title">Creature Type</div>
            <Dropdown
              items={typeDropdownItems}
              startLabel="–"
              type="type"
              selected={typeFilter}
            />
          </div>

          <div className="filters__button-container">
            <button className="filters__button" onClick={filterMonsters}>
              APPLY FITLERS
            </button>
            <p className="filters__reset" onClick={resetFilters}>
              RESET FILTERS
            </p>
          </div>
        </div>

        <div className="monsters-content__monster-section">
          <div className="sorters">
            <div className="sort" onClick={handleNameSort}>
              Name Sort
              <span
                className={`sort__arrow${sortNameOrder === "asc" ? "--active" : ""}`}
              >
                ▲
              </span>
              <span
                className={`sort__arrow${sortNameOrder === "desc" ? "--active" : ""}`}
              >
                ▼
              </span>
            </div>

            {!tierFilter || tierFilter === "-" ? (
              <div className="sort" onClick={handleTierSort}>
                Tier Sort
                <span
                  className={`sort__arrow${sortTierOrder === "asc" ? "--active" : ""}`}
                >
                  ▲
                </span>
                <span
                  className={`sort__arrow${sortTierOrder === "desc" ? "--active" : ""}`}
                >
                  ▼
                </span>
              </div>
            ) : (
              <div className="sort--disabled">
                Tier Sort
                <span className={`sort__arrow--active`}>▲</span>
                <span className={`sort__arrow`}>▼</span>
              </div>
            )}
          </div>

          {currentMonstersToDisplay.map(
            (
              {
                name,
                statBlock,
                tier,
                threat,
                role,
                description,
                tactics,
                secondaryMonster,
              },
              index,
            ) => (
              <Accordion
                key={index}
                title={name}
                content={
                  <div>
                    <p className="monsters-content__description">
                      {description}
                    </p>
                    <p className="monsters-content__tactics">{tactics}</p>
                    <div>{statBlock}</div>
                    {secondaryMonster && (
                      <div style={{ marginTop: "20px" }}>
                        {secondaryMonster}
                      </div>
                    )}
                  </div>
                }
                monster
                tier={tier}
                threat={threat === "Standard" ? "" : threat}
                role={role}
              />
            ),
          )}
        </div>

        <Pagination
          content={currentMonsters}
          count={20}
          curPage={currentPage}
          setPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Monsters;
