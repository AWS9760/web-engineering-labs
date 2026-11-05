import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

// Read the theme index.html already applied (saved choice, or the system setting)
function getInitialTheme() {
  return document.documentElement.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  // Bootstrap 5.3 switches every component's colours from this one attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    try {
      localStorage.setItem("shopkit-theme", theme);
    } catch {
      // storage can be blocked (private mode); the toggle still works for this visit
    }
  }, [theme]);

  return (
    <Button
      variant="chrome"
      className="theme-toggle rounded-pill"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill"} />
      <span className="ms-2">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}

export default ThemeToggle;
