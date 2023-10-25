import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonNav1 from "./ButtonNav1";
import HoverField from "./HoverField";
import IconStyles from "./IconStyles";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

const NavContext = createContext();

function Nav({ children }) {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const open = () => setIsOpenSearch(true);
  const close = () => setIsOpenSearch(false);
  return (
    <nav className="w-full h-16 dark:bg-zinc-900 bg-zinc-50 flex justify-between items-center px-6">
      <NavContext.Provider value={{ isOpenSearch, open, close }}>
        {children}
      </NavContext.Provider>
    </nav>
  );
}
function Logo({ imageSrc }) {
  return (
    <div className="w-[7.5rem]">
      <img src={imageSrc} alt="logo" />
    </div>
  );
}
function Seperator({ children, gap, className }) {
  const styles = `flex gap-${gap} items-center h-full ${className}`;
  return <div className={styles}>{children}</div>;
}

function Link({
  isSelect = false,
  children,
  linkName,
  isIcon,
  position = "center-down-right",
  icon,
  isSearch,
  hiddenAt = "",
}) {
  const { isOpenSearch, open, close } = useContext(NavContext);

  if (!isSelect)
    return (
      <ButtonNav1
        className={`${
          hiddenAt === "md" && "md:block hidden"
        } dark:hover:text-yellow-500 hover:text-yellow-500`}
      >
        <NavLink to="/en">{linkName}</NavLink>
      </ButtonNav1>
    );
  if (isIcon && isSearch) {
    const styles = `${isOpenSearch && "group relative"} h-full pl-4   ${
      hiddenAt === "md" && "md:block hidden"
    }`;
    return (
      <div onMouseEnter={open} onMouseLeave={close} className={styles}>
        <ButtonNav1 className="px-2 dark:hover:text-yellow-500 hover:text-yellow-500 ">
          <IconStyles size="semi-large">{icon}</IconStyles>
        </ButtonNav1>
        {isOpenSearch && (
          <HoverField
            transition2={`transition-all duration-1000 ease-in-out ${
              isOpenSearch && "animate-appear"
            }`}
            position={position}
          >
            {children}
          </HoverField>
        )}
      </div>
    );
  }

  if (isIcon) {
    const styles = `group relative h-full ${
      hiddenAt === "xl" && "xl:block hidden"
    }`;
    return (
      <div className={styles}>
        <ButtonNav1 className="px-2 ">
          <IconStyles size="semi-large">{icon}</IconStyles>
        </ButtonNav1>
        <HoverField className="animate-appear" position={position}>
          {children}
        </HoverField>
      </div>
    );
  }
  return (
    <div className="group relative h-full">
      <ButtonNav1 className="group relative dark:hover:text-yellow-500 hover:text-yellow-500 ">
        {linkName}
        <span className="hidden group-hover:block">
          <RiArrowDropUpLine className="w-5  h-5 bg-inherit" />
        </span>
        <span className="block group-hover:hidden">
          <RiArrowDropDownLine className="w-5  h-5 bg-inherit" />
        </span>
      </ButtonNav1>
      {children}
    </div>
  );
}
function Options({ optionsType = "single", children }) {
  let isDouble = false;
  if (optionsType === "double" || optionsType === "double-right") {
    isDouble = true;
  }
  return (
    <HoverField
      position={
        optionsType === "double-right" ? "center-down-right" : "center-down"
      }
      isDouble={isDouble}
    >
      {children}
    </HoverField>
  );
}
function Option({ children: icon, heading, text, gridHeading, isEmpty }) {
  if (isEmpty)
    return (
      <div className="w-[21rem] flex items-center gap-3 py-6 px-5 h-20 last-of-type:pb-3"></div>
    );
  if (gridHeading)
    return (
      <header className="dark:text-zinc-600 text-zinc-400 w-[21rem] flex items-center gap-3 mb-[-1.5rem] py-6 px-5 text-sm font-semibold">
        {gridHeading}
      </header>
    );
  return (
    <div className="group/option relative w-[21rem] h-20 flex items-center first-of-type:pt-8 last-of-type:pb-10 gap-4 py-6 px-5 dark:text-zinc-200 text-sm text-zinc-800 tracking-tighter font-semibold cursor-pointer">
      <IconStyles shape="circle">{icon}</IconStyles>
      <div>
        <p className="group/option ">
          {heading}{" "}
          <span className="group/option">
            <BsArrowRightShort className=" text-zinc-800 inline w-5 h-5 transition-all duration-300 group-hover/option:inline bg-inherit group-hover/option:translate-x-1 group-hover/option:text-yellow-500 scale-125" />
          </span>
        </p>
        <p className=" text-xs text-zinc-500 ">{text}</p>
      </div>
    </div>
  );
}
function Option2({
  children,
  gap = 3,
  paddingY = 3,
  width = "w-[23rem]",
  flexCol,
  paddingX,
}) {
  let styles = `flex gap-${gap} py-${paddingY} items-center h-full ${width} ${flexCol} ${paddingX}`;
  return <div className={styles}>{children}</div>;
}

Nav.Link = Link;
Nav.Logo = Logo;
Nav.Option = Option;
Nav.Option2 = Option2;
Nav.Options = Options;
Nav.Seperator = Seperator;

export default Nav;
export { NavContext };
