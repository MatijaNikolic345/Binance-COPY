import {
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsReddit,
  BsSinaWeibo,
  BsTelegram,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import languages from "../utils/helper";

import { FaGlobe, FaVk, FaXTwitter } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiFillDollarCircle } from "react-icons/ai";
import HoverField from "./HoverField";

import ButtonNav1 from "./ButtonNav1";
import TextInput from "./TextInput";
import CurrencyList from "currency-list";
function CommunityFooter() {
  const iconStyle =
    "w-5 h-5 cursor-pointer dark:hover:text-zinc-400 hover:text-zinc-600 bg-inherit dark:text-zinc-200 text-zinc-800";
  const iconStyle2 =
    "w-5 h-5 cursor-pointer  bg-inherit dark:text-zinc-200 text-zinc-800";
  return (
    <>
      <div className="flex flex-wrap gap-7  w-full mt-3 ">
        <BsDiscord className={iconStyle} />
        <BsTelegram className={iconStyle} />
        <BsTiktok className={iconStyle} />
        <BsFacebook className={iconStyle} />
        <FaXTwitter className={iconStyle} />
        <BsReddit className={iconStyle} />
        <BsSinaWeibo className={iconStyle} />
        <BsInstagram className={iconStyle} />
        <SiCoinmarketcap className={iconStyle} />
        <FaVk className={iconStyle} />
        <BsYoutube className={iconStyle} />
      </div>
      <div className="flex lg:flex-col lg:gap-4 gap-10 mt-10">
        <div className="group flex gap-2 relative  pt-2">
          <FaGlobe className={iconStyle2} />
          <span className="dark:text-zinc-200 text-zinc-800 group-hover:text-yellow-500">
            English
          </span>
          <HoverField
            className="border dark:border-zinc-700 border-zinc-300 rounded-sm p-4 w-[14rem]"
            position="top"
            transition2="animate-appear"
          >
            <div className=" group flex flex-col gap-2 relative">
              <TextInput size="medium-2" placeholder="Search"></TextInput>
              <div className="h-[16.7rem] w-full overflow-y-scroll flex flex-col gap-3 scrollbar2 mt-2">
                <ButtonNav1 className="py-1" textCol="text-yellow-500">
                  English
                </ButtonNav1>
                {languages.map((lang) => (
                  <ButtonNav1 className="py-1" key={lang.code}>
                    {lang.name}
                  </ButtonNav1>
                ))}
              </div>
            </div>
          </HoverField>
        </div>
        <div className="group flex gap-2 relative  pt-2">
          <AiFillDollarCircle className={iconStyle2} />
          <span className="dark:text-zinc-200 text-zinc-800 group-hover:text-yellow-500">
            USD-$
          </span>

          <HoverField
            className="border dark:border-zinc-700 border-zinc-300 rounded-sm p-4 w-[14rem]"
            position="top"
            transition2="animate-appear"
          >
            <div className="flex flex-col gap-2">
              <TextInput size="medium-2" placeholder="Search"></TextInput>
              <div className="h-[16.7rem] w-full overflow-y-scroll flex flex-col gap-3 scrollbar2 mt-2">
                <ButtonNav1 className="py-1" textCol="text-yellow-500">
                  USD-$
                </ButtonNav1>
                {Object.entries(CurrencyList.getAll("en_US")).map(
                  ([key, value]) => (
                    <ButtonNav1 className="py-1" key={key}>
                      {key}-{value.symbol_native}
                    </ButtonNav1>
                  )
                )}
              </div>
            </div>
          </HoverField>
        </div>

        <div className="mt-2">
          <DarkModeSwitch />
        </div>
      </div>
    </>
  );
}

export default CommunityFooter;
