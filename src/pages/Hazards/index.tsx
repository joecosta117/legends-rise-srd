import "./index.scss";
import Accordion from "../../components/Accordion";
import Dropdown from "../../components/Dropdown";
import { useState, useEffect, JSX } from "react";
import Pagination from "../../components/Pagination";
import HazardList from "./hazardList";
import Hazard from "../../components/Hazard";
import { Link } from "react-router-dom";

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

        <Accordion
          title="Reading Hazard Entries"
          content={
            <div>
              <p>
                Each hazard entry begins with its name, tier, and threat level.
                Each hazard also has a brief description of the danger. Their
                stat block provides essential information such as their TN and
                special abilities.
              </p>
              <Hazard
                name="Hazard Example"
                countdown="d6"
                tier="1"
                threat="Standard"
                consequence="4 necrotic damage"
                actions={[
                  {
                    basic: true,
                    name: "Siphon Life",
                    keywords: "magical",
                    target: <span>1d4+1 enemies within the hazard's zone</span>,
                    defense: "Spirit",
                    damage: "2 necrotic damage",
                    success: (
                      <span>
                        <Link
                          className="internal-link"
                          to="/conditions#hindered"
                        >
                          hindered
                        </Link>{" "}
                        (next turn ends)
                      </span>
                    ),
                  },
                ]}
              />
              <h3 className="header" style={{ marginTop: "15px" }}>
                General Statistics
              </h3>
              <p>
                In the top section of a hazard's entry, you will find general
                information on the hazard:
              </p>
              <ul>
                <li>
                  <span>
                    <b>Countdown Die:</b> The size of the hazard's countdown die
                    before it is defeated.
                  </span>
                </li>
                <li>
                  <span>
                    <b>TN:</b> The TN for skill rolls made against the hazard.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Proficiency Bonus:</b> Will be abbreviated as PB. Add
                    this bonus to all attack rolls the hazard makes.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Consequence:</b> When a hero gets a failure or partial
                    success on a skill roll against the hazard, they take the
                    stated damage.
                  </span>
                </li>
              </ul>

              <h3 className="header">Special Abilities</h3>
              <p>
                On the bottom half of a hazard's entry, you'll find the hazard's
                special action they take on their turn. Remember hazards don't
                have maneuvers or reactions, and instead take a single action on
                their turn. Unlike monsters, hazards can't use basic actions.
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
