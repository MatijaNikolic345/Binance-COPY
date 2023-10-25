import { createContext, useContext, useState } from "react";
import BodyHeading from "./BodyHeading";

const FooterContext = createContext();

function Footer({ children }) {
  const [currId, setCurrId] = useState("");
  return (
    <div className="w-full flex md:gap-6 gap-4 justify-between border-b dark:border-zinc-700 border-zinc-300 pb-14 px-5 flex-wrap">
      <FooterContext.Provider value={{ currId, setCurrId }}>
        {children}
      </FooterContext.Provider>
    </div>
  );
}
function Column({ children, type }) {
  if (type === "community1")
    return <div className=" flex-col gap-8 lg:flex hidden">{children}</div>;
  if (type === "community2")
    return <div className=" gap-8 lg:hidden block basis-full">{children}</div>;
  return (
    <div className="md:w-fit w-full flex flex-col md:gap-8 gap-4">
      {children}
    </div>
  );
}
function ColumnSection({ children, header, type, id }) {
  const { currId, setCurrId } = useContext(FooterContext);
  const style = `md:flex md:w-full flex-col md:pl-0 pl-5 ${
    currId === id ? "flex" : "hidden"
  }`;
  function handleClick() {
    if (currId !== id) setCurrId(id);
    else setCurrId("");
  }
  if (type === "community2")
    return (
      <div className="flex flex-col  gap-4 mt-5 md:mt-0">
        <BodyHeading type="smallest-3">{header}</BodyHeading>
        <div className="flex flex-col ">{children}</div>
      </div>
    );
  return (
    <div className="flex flex-col gap-4 lg:max-w-[10.3rem] md:w-full">
      <div className="w-full flex justify-between" onClick={handleClick}>
        <BodyHeading type="smallest-3">{header}</BodyHeading>
        <div
          className={`text-[2rem] md:hidden  font-normal w-9 h-9 flex items-center justify-center dark:text-zinc-400 text-zinc-500 rounded-full `}
        >
          {currId === id ? <span>-</span> : <span>+</span>}
        </div>
      </div>

      <div className={style}>{children}</div>
    </div>
  );
}
function TextItem({ children }) {
  return (
    <div className="text-[0.8rem]  font-medium dark:text-zinc-200 text-zinc-800 cursor-pointer py-[0.4rem] dark:hover:text-yellow-500 hover:text-yellow-500 w-fit md:w-full z-10">
      {children}
    </div>
  );
}

Footer.Column = Column;
Footer.ColumnSection = ColumnSection;
Footer.TextItem = TextItem;
export default Footer;
