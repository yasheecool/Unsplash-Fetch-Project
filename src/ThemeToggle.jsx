import { useGlobalContext } from "./context";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { toggleTheme, isDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="toggle-icon dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </section>
  );
};
export default ThemeToggle;
