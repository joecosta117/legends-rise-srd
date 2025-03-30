import "./index.scss";
import Accordion from "../../components/Accordion";
import Dropdown from "../../components/Dropdown";
import { useState, useEffect, JSX } from "react";
import Pagination from "../../components/Pagination";
import HazardList from "./hazardList";

interface SortedHazardsProps {
  name: string;
  tier: string;
  description: string;
  threat: string;
  statBlock: JSX.Element;
  secondaryMonster?: JSX.Element;
}

function Hazards() {
  const AllHazards = HazardList.sort((a, b) => a.name.localeCompare(b.name));
  const [sortNameOrder, setSortNameOrder] = useState<"asc" | "desc">("asc");
  const [sortTierOrder, setSortTierOrder] = useState<"asc" | "desc" | "">("");
  const [tierFilter, setTierFilter] = useState("");
  const [threatFilter, setThreatFilter] = useState("");
  const [currentHazards, setCurrentHazards] =
    //@ts-ignore
    useState<SortedHazardsProps[]>(AllHazards);

  const [currentPage, setCurrentPage] = useState(1);
  const hazardsPerPage = 20;
  // Calculate the hazards to display based on the current page
  const indexOfLastHazard = currentPage * hazardsPerPage;
  const indexOfFirstHazard = indexOfLastHazard - hazardsPerPage;
  const currentHazardToDisplay = currentHazards.slice(
    indexOfFirstHazard,
    indexOfLastHazard,
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

  // Threat Filter Logic
  function handleThreatFilter(label: string) {
    setThreatFilter(label);
  }
  const threatDropdownItems = [
    { label: "Standard", onClick: handleThreatFilter },
    { label: "Major", onClick: handleThreatFilter },
  ];

  // Sort Monsters Logic
  function sortHazards() {
    const sortedHazards = [...currentHazards].sort((a, b) =>
      sortNameOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
    if (sortTierOrder) {
      sortedHazards.sort((a, b) =>
        sortTierOrder === "asc"
          ? a.tier.localeCompare(b.tier)
          : b.tier.localeCompare(a.tier),
      );
    }

    setCurrentHazards(sortedHazards);
  }
  function handleNameSort() {
    setSortNameOrder(sortNameOrder === "asc" ? "desc" : "asc");
  }
  function handleTierSort() {
    setSortTierOrder(sortTierOrder === "asc" ? "desc" : "asc");
  }
  useEffect(() => {
    sortHazards();
  }, [sortNameOrder, sortTierOrder]);

  // FILTER functions
  function filterHazards() {
    const newHazardsList = AllHazards.filter((hazard) => {
      const matchesTierFilter =
        !tierFilter ||
        tierFilter === "-" ||
        hazard.tier === tierFilter.charAt(tierFilter.length - 1);
      const matchesThreatFilter =
        !threatFilter || threatFilter === "-" || hazard.threat === threatFilter;

      return matchesTierFilter && matchesThreatFilter;
    });

    setCurrentHazards(newHazardsList);
    setSortNameOrder("asc");
    setCurrentPage(1); // Reset to the first page after filtering
  }

  function resetFilters() {
    setTierFilter("-");
    setThreatFilter("-");
    setCurrentPage(1); // Reset to the first page after filtering
  }

  return (
    <div className="hazards">
      <div className="hazards-content">
        <h1>Hazards</h1>
        <p>
          When building encounters, carefully consider how many enemies to use
          as hazards are best alongside regular monsters.
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
            <div className="filters__section__title">Threat</div>
            <Dropdown
              items={threatDropdownItems}
              startLabel="–"
              type="threat"
              selected={threatFilter}
            />
          </div>

          <div className="filters__button-container">
            <button className="filters__button" onClick={filterHazards}>
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

          {currentHazardToDisplay.map(
            (
              { name, statBlock, tier, threat, description, secondaryMonster },
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
                    <div>{statBlock}</div>
                    {secondaryMonster && (
                      <div style={{ marginTop: "20px" }}>
                        {secondaryMonster}
                      </div>
                    )}
                  </div>
                }
                hazard
                tier={tier}
                threat={threat === "Standard" ? "" : threat}
              />
            ),
          )}
        </div>

        <Pagination
          content={currentHazards}
          count={20}
          curPage={currentPage}
          setPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Hazards;
