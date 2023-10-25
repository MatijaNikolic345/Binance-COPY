import { createContext, useContext, useState } from "react";
import BodyHeading from "./BodyHeading";

const QnaContext = createContext();

function QnA({ children }) {
  const [currId, setCurrId] = useState("");
  return (
    <div className="w-full flex flex-col gap-4">
      <QnaContext.Provider value={{ currId, setCurrId }}>
        {children}
      </QnaContext.Provider>
    </div>
  );
}
function Question({ children, opens, question }) {
  const { setCurrId, currId } = useContext(QnaContext);
  let styles = "";
  if (currId === opens) {
    styles = `w-full group flex flex-col gap-3.5 justify-between md:p-4 p-2 md:dark:bg-zinc-800 md:bg-zinc-200 cursor-pointer rounded-xl`;
  }
  if (currId !== opens) {
    styles = `w-full group flex gap-3.5 justify-between md:p-4 p-2 md:dark:hover:bg-zinc-800 md:hover:bg-zinc-200 cursor-pointer rounded-xl`;
  }
  function handleClick() {
    if (currId !== opens) setCurrId(opens);
    else {
      setCurrId("");
    }
  }
  return (
    <div onClick={handleClick} className={styles}>
      <div className="flex justify-between items-center font-semibold w-full">
        <div className="flex gap-4">
          <div className="self-center">
            <div className="text-lg flex items-center justify-center border  text-zinc-800 dark:border-zinc-700 border-zinc-300 rounded-xl w-9 h-9 dark:text-zinc-200 ">
              {opens}
            </div>
          </div>
          <div className="self-center mr-3">
            <BodyHeading type="medium-2">{question}</BodyHeading>
          </div>
        </div>
        <div>
          <div
            className={`text-[2rem] font-normal md:w-9 md:h-9 w-7 h-7 flex items-center justify-center dark:text-zinc-200 text-zinc-900 rounded-full group-hover:bg-yellow-300 group-hover:text-zinc-900 ${
              currId === opens ? "bg-yellow-300 text-zinc-900" : ""
            }`}
          >
            {currId === opens ? <span>-</span> : <span>+</span>}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
function Answer({ children, name }) {
  const { currId } = useContext(QnaContext);
  return (
    <div
      className={`${
        currId === name ? "block" : "hidden"
      } md:text-md text-sm text-zinc-500   self-center md:px-14 flex flex-col gap-8`}
    >
      {children}
    </div>
  );
}
QnA.Question = Question;
QnA.Answer = Answer;
export default QnA;
