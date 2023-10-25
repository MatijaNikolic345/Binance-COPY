import { createContext, useContext, useState } from "react";
import ButtonNav1 from "../ui/ButtonNav1";
import IconStyles from "../ui/IconStyles";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const ModalContext = createContext();

function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");
  const [currOptions, setCurrOptions] = useState("");
  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal, currOptions, setCurrOptions }}
    >
      {children}
    </ModalContext.Provider>
  );
}
function Open({ icon, opens }) {
  const { setOpenModal } = useContext(ModalContext);
  return (
    <div onClick={() => setOpenModal(opens)} className="h-full xl:hidden block">
      <ButtonNav1 className="px-2">
        <IconStyles size="semi-large">{icon}</IconStyles>
      </ButtonNav1>
    </div>
  );
}
function Window({ name, children }) {
  const { openModal, setOpenModal } = useContext(ModalContext);
  if (openModal !== name) document.body.classList.remove("overflow-hidden");

  if (openModal === name) {
    document.body.classList.add("overflow-hidden");
    return (
      <>
        <div className="z-40 fixed top-0 bottom-0 left-0 right-0 opacity-30 bg-zinc-900"></div>
        <div className="z-[100] fixed right-0 bottom-0 top-0   md:w-[24rem] w-full  dark:bg-[#22222a] bg-zinc-50 animate-appearLeft">
          <div className="w-full h-full flex flex-col overflow-y-scroll scrollbar2">
            <div className="self-end pr-4 pt-4 dark:text-zinc-200 text-zinc-800 mb-4">
              <AiOutlineClose
                onClick={() => setOpenModal("")}
                className="w-6 h-6"
              />
            </div>
            <div className="w-[90%] md:hidden flex items-center justify-center self-center px-3 py-4  dark:text-zinc-200 text-zinc-800">
              <span className="font-medium text-sm">Log In</span>
            </div>
            <div className="w-[90%] md:hidden mb-5 flex items-center rounded-lg justify-center self-center px-3 py-2.5 bg-yellow-300 hover:bg-yellow-500  text-zinc-800">
              <span className="font-medium text-sm">Register</span>
            </div>
            {children}
          </div>
        </div>
      </>
    );
  }
}
function Link({ children, isSelect, icon, linkName, opens = "0" }) {
  const { currOptions, setCurrOptions } = useContext(ModalContext);
  function handleClick() {
    if (currOptions !== opens) setCurrOptions(opens);
    else setCurrOptions("");
  }
  if (isSelect)
    return (
      <>
        <div
          className={`w-full flex flex-col px-6 py-4 items-center justify-center dark:text-zinc-200 text-zinc-800 ${
            currOptions === opens
              ? "dark:bg-zinc-700 bg-zinc-300"
              : "dark:hover:bg-zinc-700 hover:bg-zinc-300 "
          }`}
        >
          <div
            onClick={handleClick}
            className="flex items-center justify-between w-full"
          >
            <div className="flex">
              <span
                className={`${
                  currOptions === opens
                    ? "text-yellow-500"
                    : "dark:text-zinc-400 text-zinc-500"
                } w-10`}
              >
                {icon}
              </span>
              <span>{linkName}</span>
            </div>
            {currOptions === opens ? (
              <RiArrowDropUpLine className="w-5  h-5 bg-inherit" />
            ) : (
              <RiArrowDropDownLine className="w-5  h-5 bg-inherit" />
            )}
          </div>
        </div>
        {currOptions === opens && (
          <div className="animate-appearDropDown">{children}</div>
        )}
      </>
    );
  return (
    <div className="w-full flex items-center px-6 py-4  dark:hover:bg-zinc-700 hover:bg-zinc-300 dark:text-zinc-200 text-zinc-800">
      <span className="w-10 dark:text-zinc-400 text-zinc-500">{icon}</span>
      <span>{linkName}</span>
    </div>
  );
}
function SelectOption({ children, type }) {
  if (type === "heading")
    return (
      <div className=" w-full ml-10 text-sm px-6 py-4  dark:text-zinc-600 text-zinc-400 ">
        {children}
      </div>
    );

  return (
    <div className=" w-full ml-10 text-sm px-6 py-4  dark:text-zinc-200 text-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-300">
      {children}
    </div>
  );
}
Modal.Open = Open;
Modal.Window = Window;
Modal.Link = Link;
Modal.SelectOption = SelectOption;

export default Modal;
