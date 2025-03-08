import React, { useState, useEffect, useRef, JSX } from "react";
import "./index.scss";
import { Portal } from "../Portal";

interface TooltipProps {
  text?: string;
  tooltipText?: string;
  preset?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, tooltipText, preset }) => {
  const [visible, setVisible] = useState(false);
  const [initText, setInitText] = useState<string | JSX.Element>(text || "");
  const [toolText, setToolText] = useState<string | JSX.Element>(
    tooltipText || "",
  );
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showToolTip = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setCoords({
      left: rect.left + window.scrollX + rect.width / 2,
      top: rect.top + window.scrollY + rect.height,
    });
    setVisible(true);
  };

  const hideToolTip = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (preset) {
      switch (preset) {
        case "shaken":
          setInitText("shaken");
          setToolText("Half or less than maximum hit points");
          break;
        case "shakenVal":
          setInitText("shaken value");
          setToolText("Half maximum hit points");
          break;
        case "regen":
          setInitText("regeneration");
          setToolText("Heal stated amount at the start of each of your turns");
          break;
        case "heal":
          setInitText("heal");
          setToolText("Regain stated amount of hit points");
          break;
        case "heals":
          setInitText("heals");
          setToolText("Regain stated amount of hit points");
          break;
        case "night":
          setInitText("night vision");
          setToolText(
            "You can see in mundane darkness, but not magical darkness",
          );
          break;
        case "blind":
          setInitText("blind vision");
          setToolText(
            "You can sense your environment perfectly without sight.",
          );
          break;
      }
    }
  }, [preset]);

  useEffect(() => {
    if (visible && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      const boundingRect = tooltip.getBoundingClientRect();

      // Adjust horizontal position if tooltip is cut off
      if (boundingRect.left < 0) {
        setCoords((prev) => ({
          ...prev,
          left: prev.left - boundingRect.left + 10,
        }));
      } else if (boundingRect.right > window.innerWidth) {
        setCoords((prev) => ({
          ...prev,
          left: prev.left - (boundingRect.right - window.innerWidth) - 10,
        }));
      }

      // Adjust vertical position if tooltip is cut off
      if (boundingRect.top < 0) {
        setCoords((prev) => ({
          ...prev,
          top: prev.top - boundingRect.top + 10,
        }));
      } else if (boundingRect.bottom > window.innerHeight) {
        setCoords((prev) => ({
          ...prev,
          top: prev.top - (boundingRect.bottom - window.innerHeight) - 10,
        }));
      }
    }
  }, [visible]);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        if (tooltipRef.current) {
          const tooltip = tooltipRef.current;
          const boundingRect = tooltip.getBoundingClientRect();

          // Adjust horizontal position if tooltip is cut off
          if (boundingRect.left < 0) {
            setCoords((prev) => ({
              ...prev,
              left: prev.left - boundingRect.left + 10,
            }));
          } else if (boundingRect.right > window.innerWidth) {
            setCoords((prev) => ({
              ...prev,
              left: prev.left - (boundingRect.right - window.innerWidth) - 10,
            }));
          }

          // Adjust vertical position if tooltip is cut off
          if (boundingRect.top < 0) {
            setCoords((prev) => ({
              ...prev,
              top: prev.top - boundingRect.top + 10,
            }));
          } else if (boundingRect.bottom > window.innerHeight) {
            setCoords((prev) => ({
              ...prev,
              top: prev.top - (boundingRect.bottom - window.innerHeight) - 10,
            }));
          }
        }
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <span
      className="tooltip-container"
      onMouseEnter={showToolTip}
      onMouseLeave={hideToolTip}
      onTouchStart={showToolTip}
      onTouchEnd={hideToolTip}
    >
      <span className="initial-text">{initText}</span>
      {visible && (
        <Portal>
          <div
            ref={tooltipRef}
            style={{ position: "absolute", left: coords.left, top: coords.top }}
            className="tooltip"
          >
            {toolText}
            {/* <div className="tooltip-arrow" /> */}
          </div>
        </Portal>
      )}
    </span>
  );
};

export default Tooltip;
