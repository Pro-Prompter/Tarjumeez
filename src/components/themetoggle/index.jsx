import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="nav_ac"
      onClick={themetoggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      type="button"
    >
      <WiMoonAltWaningCrescent4 />
    </button>
  );
};

export default Themetoggle;
