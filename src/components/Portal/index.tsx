import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

function Portal({ children }: PortalProps) {
  const portal = document.getElementById("portal-root");
  const el = document.createElement("div");

  //@ts-ignore
  useEffect(() => {
    if (portal) {
      portal.appendChild(el);
      return () => portal.removeChild(el);
    }
  }, [el, portal]);

  return createPortal(children, el);
}

export { Portal };
