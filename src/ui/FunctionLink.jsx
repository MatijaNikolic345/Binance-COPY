import { NavLink } from "react-router-dom";

function FunctionLink({ children, icon, to = "/not-added" }) {
  return (
    <NavLink
      to={to}
      className="group/functionLink w-full dark:bg-zinc-700 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-800 dark:text-zinc-200 flex items-center gap-2 py-3.5 px-4 rounded-sm text-sm  font-medium"
    >
      {icon} <span>{children}</span>
    </NavLink>
  );
}

export default FunctionLink;
