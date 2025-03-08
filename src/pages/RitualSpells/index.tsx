import "./index.scss";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { getHash, removeHash } from "../../utils/getPath";
import Accordion from "../../components/Accordion";
import { useNavigate } from "react-router-dom";
import { ritualSpells } from "./ritual-spells";
import removeParenthesisPart from "../../utils/removeParenthesisPart";

function RitualSpells() {
  const [isT1, setT1] = useState(true);
  const [isT2, setT2] = useState(false);
  const [isT3, setT3] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState("");
  const spellRefs = useRef<{
    [key: string]: HTMLDivElement | null | undefined;
  }>({});

  function handleT1() {
    setT1(true);
    setT2(false);
    setT3(false);
  }
  function handleT2() {
    setT1(false);
    setT2(true);
    setT3(false);
  }
  function handleT3() {
    setT1(false);
    setT2(false);
    setT3(true);
  }

  useEffect(() => {
    const hash = getHash();
    const hashArr = hash.trim().split("-") as Array<String>;

    if (hashArr.length === 1) {
      openTierSpells(hashArr[0].toLocaleLowerCase());
    } else if (hashArr.length > 1) {
      openTierSpells(hashArr[0].toLocaleLowerCase());
      hashArr.shift();
      const spellName = hashArr.join(" ");
      setSelectedSpell(spellName);
    }
  }, []);

  useLayoutEffect(() => {
    if (selectedSpell) {
      Object.entries(spellRefs.current).forEach(([key, ref]) => {
        if (ref && key.includes(selectedSpell.toLowerCase())) {
          setTimeout(() => {
            ref.scrollIntoView({ behavior: "smooth", block: "center" });
            removeHash();
          }, 500);
        }
      });
    }
  }, [selectedSpell]);

  const openTierSpells = (tier: String) => {
    switch (tier) {
      case "tier1":
        handleT1();
        break;
      case "tier2":
        handleT2();
        break;
      case "tier3":
        handleT3();
        break;
    }
  };

  const isOpen = (name: string) => {
    if (selectedSpell) {
      const spellName = removeParenthesisPart(name).toLocaleLowerCase();
      return selectedSpell === spellName;
    }
  };

  const navigate = useNavigate();
  function handleRules() {
    navigate("/rules/magic");
  }

  return (
    <div className="spells">
      <div className="spells-content">
        <h1>Ritual Spells</h1>
        <p>
          Scrying on a distant foe or speaking with animals are examples of
          ritual spells. These spells tend to take a long time to cast and might
          cost gold in order to produce powerful and lasting magical effects.
          Like battle spells, ritual spells are ranked by tier.
        </p>
        <button className="link-button" onClick={handleRules}>
          MAGIC RULES
        </button>

        <div className="tab-items">
          <div
            className="tab-items__tab"
            onClick={handleT1}
            data-selected={isT1}
          >
            <p>Tier 1</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleT2}
            data-selected={isT2}
          >
            <p>Tier 2</p>
          </div>
          <div className="tab-items__divider">|</div>
          <div
            className="tab-items__tab"
            onClick={handleT3}
            data-selected={isT3}
          >
            <p>Tier 3</p>
          </div>
        </div>

        {isT1 && (
          <div id="tier1">
            <h2>Tier 1 Ritual Spells</h2>
            <p>Below are all ritual spells of this spell tier.</p>
            {ritualSpells[0].map(({ title, spell, actType }, index) => (
              <Accordion
                open={isOpen(title)}
                key={index}
                stacked
                title={title}
                content={spell}
                type="spell"
                actType={actType}
                //@ts-ignore
                ref={(el) =>
                  (spellRefs.current[title.toLowerCase()] = el?.querySelector(
                    ".accordion__content",
                  ))
                }
              />
            ))}
          </div>
        )}
        {isT2 && (
          <div id="tier2">
            <h2>Tier 2 Ritual Spells</h2>
            <p>Below are all ritual spells of this spell tier.</p>
            {ritualSpells[1].map(({ title, spell, actType }, index) => (
              <Accordion
                open={isOpen(title)}
                key={index}
                stacked
                title={title}
                content={spell}
                type="spell"
                actType={actType}
                //@ts-ignore
                ref={(el) =>
                  (spellRefs.current[title.toLowerCase()] = el?.querySelector(
                    ".accordion__content",
                  ))
                }
              />
            ))}
          </div>
        )}
        {isT3 && (
          <div id="tier3">
            <h2>Tier 3 Ritual Spells</h2>
            <p>Below are all ritual spells of this spell tier.</p>
            {ritualSpells[2].map(({ title, spell, actType }, index) => (
              <Accordion
                open={isOpen(title)}
                key={index}
                stacked
                title={title}
                content={spell}
                type="spell"
                actType={actType}
                //@ts-ignore
                ref={(el) =>
                  (spellRefs.current[title.toLowerCase()] = el?.querySelector(
                    ".accordion__content",
                  ))
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RitualSpells;
