import React from "react";
import misfortune from "../../assets/misfortune-icon-v2.png";
import fortune from "../../assets/fortune-icon-v2.png";
import "./index.scss";

interface ModifierProps {
  type: string;
  count?: string;
}

const Modifier: React.FC<ModifierProps> = ({ type, count }) => {
  const finalCount = count ? `+${count} ` : '';

  return (
    <span id="modifier">
      <b>{finalCount}<img className="icon" src={type === 'f' ? fortune : misfortune} alt="modifier icon" /></b>
    </span>
  );
}

export default Modifier;