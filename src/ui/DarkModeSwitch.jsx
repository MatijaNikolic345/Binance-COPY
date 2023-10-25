import { useContext, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { DarkModeContext } from "../contexts/DarkModeContext";

function DarkModeSwitch() {
  const { theme, setTheme } = useContext(DarkModeContext);
  useEffect(
    function () {
      if (theme === "dark") document.documentElement.classList.add("dark");
      else {
        document.documentElement.classList.remove("dark");
      }
    },
    [theme]
  );
  function handleThemesSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <label className="relative inline-flex items-center mb-5 cursor-pointer w-fit">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleThemesSwitch}
          checked={theme === "dark"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
        {theme === "dark" ? (
          <BsMoonFill
            className={`absolute w-3.5 h-3.5 bg-inherit top-[0.3rem] z-10 translate-x-[25px] rounded-full`}
          />
        ) : (
          <BsSunFill
            className={`absolute w-3.5 h-3.5 bg-inherit top-[0.3rem] z-10 left-[0.3rem] rounded-full`}
          />
        )}
      </label>
    </div>
  );
}

export default DarkModeSwitch;
