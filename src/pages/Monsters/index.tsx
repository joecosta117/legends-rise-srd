import "./index.scss";
// import { Link } from "react-router-dom";
import UndeadMonsters from "./AllMonsters/undead";
import Accordion from "../../components/Accordion";
import HumanoidMonsters from "./AllMonsters/humanoids";
import DragonMonsters from "./AllMonsters/dragons";
import Dropdown from "../../components/Dropdown";
import { useState, useEffect, JSX } from "react";

interface MonsterListProps {
  name: string;
  tier: string;
  type: string;
  description: string;
  role: string;
  tactics: string | JSX.Element;
  threat: string;
  statBlock: JSX.Element;
}

function Monsters() {
  const MonsterList = [
    ...DragonMonsters,
    ...HumanoidMonsters,
    ...UndeadMonsters,
  ].sort((a, b) => a.name.localeCompare(b.name));
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [roleFilter, setRoleFilter] = useState("");
  const [tierFilter, setTierFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [threatFilter, setThreatFilter] = useState("");
  const [currentMonsters, setCurrentMonsters] =
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
    { label: "Beast", onClick: handleTypeFilter },
    { label: "Celestial", onClick: handleTypeFilter },
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
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    setCurrentMonsters(sortedMonsters);
  }
  function handleSort() {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }
  useEffect(() => {
    sortMonsters();
  }, [sortOrder]);

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
        !typeFilter || typeFilter === "-" || monster.type === typeFilter;
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
    setSortOrder("asc");
    setCurrentPage(1); // Reset to the first page after filtering
  }

  function resetFilters() {
    setTierFilter("-");
    setRoleFilter("-");
    setThreatFilter("-");
    setTypeFilter("-");
    setCurrentPage(1); // Reset to the first page after filtering
  }

  // Pagination Controls
  const totalPages = Math.ceil(currentMonsters.length / monstersPerPage);

  return (
    <div className="monsters">
      <div className="monsters-content">
        <h1>Monsters</h1>
        <p>
          When building encounters, carefully consider how many enemies to use
          as well as the type and class of your chosen enemies.
        </p>

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
          <div className="sort" onClick={handleSort}>
            Sort
            <span
              className={`sort__arrow${sortOrder === "asc" ? "--active" : ""}`}
            >
              ▲
            </span>
            <span
              className={`sort__arrow${sortOrder === "desc" ? "--active" : ""}`}
            >
              ▼
            </span>
          </div>

          {currentMonstersToDisplay.map(
            (
              { name, statBlock, tier, threat, role, description, tactics },
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

        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="pagination__pages">
            {currentPage} of {totalPages}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Monsters;
