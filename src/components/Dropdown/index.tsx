import React, { useState, useEffect } from "react";
import "./index.scss";

interface DropdownProps {
  items: { label: string; onClick: (label?: any) => void }[];
  startLabel: string;
  selected?: string;
  type: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  startLabel,
  selected,
  type,
}) => {
  const [dropdownLabel, setDropdownLabel] = useState(startLabel);
  useEffect(() => {
    selected && setDropdownLabel(selected);
  }, [selected]);

  function toggleDropdown() {
    const arrow = [
      ...document.querySelectorAll(".dropdown-button__dropdown-arrow"),
    ].find(
      (arrow) => (arrow as HTMLElement).dataset.type === type,
    ) as HTMLElement;
    const content = [...document.querySelectorAll(".dropdown-content")].find(
      (content) => (content as HTMLElement).dataset.type === type,
    ) as HTMLElement;

    arrow.dataset.active === "false"
      ? (arrow.dataset.active = "true")
      : (arrow.dataset.active = "false");

    content.dataset.active === "false"
      ? (content.dataset.active = "true")
      : (content.dataset.active = "false");
  }

  const handleItemClick = (label: string, onClick: (label: any) => void) => {
    return () => {
      setDropdownLabel(label);
      onClick(label);
      const arrow = [
        ...document.querySelectorAll(".dropdown-button__dropdown-arrow"),
      ].find(
        (arrow) => (arrow as HTMLElement).dataset.type === type,
      ) as HTMLElement;
      const content = [...document.querySelectorAll(".dropdown-content")].find(
        (content) => (content as HTMLElement).dataset.type === type,
      ) as HTMLElement;
      arrow.dataset.active = "false";
      content.dataset.active = "false";
    };
  };

  // useEffect to make dropdown go away when hover away
  useEffect(() => {
    const content = [...document.querySelectorAll(".dropdown")].find(
      (content) => (content as HTMLElement).dataset.type === type,
    ) as HTMLElement;

    content.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      content.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function handleMouseLeave() {
    const arrow = [
      ...document.querySelectorAll(".dropdown-button__dropdown-arrow"),
    ].find(
      (arrow) => (arrow as HTMLElement).dataset.type === type,
    ) as HTMLElement;
    const content = [...document.querySelectorAll(".dropdown")].find(
      (content) => (content as HTMLElement).dataset.type === type,
    ) as HTMLElement;

    arrow.dataset.active = "false";
    content.dataset.active = "false";
  }

  return (
    <div className="dropdown" data-type={type}>
      <div className="dropdown-button" onClick={toggleDropdown}>
        <p>{dropdownLabel}</p>
        <button
          className="dropdown-button__dropdown-arrow"
          data-active="false"
          data-type={type}
        ></button>
      </div>
      <div className="dropdown-content" data-active="false" data-type={type}>
        {items.map((item, index) => (
          <div
            key={index}
            className="dropdown-item"
            onClick={handleItemClick(item.label, item.onClick)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
