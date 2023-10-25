import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import BodyHeading from "./BodyHeading";
import DownloadStore from "./DownloadStore";
import { BsApple, BsGooglePlay } from "react-icons/bs";

function DeviceSizing() {
  const [isVersion, setIsVersion] = useState("light");
  const [imgSrc, setImgSrc] = useState("/images/binance-light.jpg");
  const { theme } = useContext(DarkModeContext);
  useEffect(
    function () {
      if (theme === "dark") {
        if (isVersion === "desktop")
          setImgSrc("/images/download-desktop-dark-en.png");
        if (isVersion === "light") setImgSrc("/images/binance-light.jpg");
        if (isVersion === "pro") setImgSrc("/images/binance-pro.webp");
      }
      if (theme === "light") {
        if (isVersion === "desktop")
          setImgSrc("/images/download-desktop-light-en.png");
        if (isVersion === "light") setImgSrc("/images/binance-light-lite.png");
        if (isVersion === "pro") setImgSrc("/images/binance-pro-lite.png");
      }
    },
    [theme, isVersion]
  );
  function handleClick(e) {
    const value = e.target.value;
    if (theme === "dark") {
      if (value === "desktop")
        setImgSrc("/images/download-desktop-dark-en.png");
      if (value === "light") setImgSrc("/images/binance-light.jpg");
      if (value === "pro") setImgSrc("/images/binance-pro.webp");
    }
    if (theme === "light") {
      if (value === "desktop")
        setImgSrc("/images/download-desktop-light-en.png");
      if (value === "light") setImgSrc("/images/binance-light-lite.png");
      if (value === "pro") setImgSrc("/images/binance-pro-lite.png");
    }
    setIsVersion(value);
  }
  const imgStyle = `lg:h-[35rem] h-[23rem] object-fit dark:border-zinc-700 border-zinc-300 ${
    isVersion === "light" || isVersion === "pro"
      ? "p-2 border-2  rounded-[2rem] self-center"
      : "w-full"
  }`;
  return (
    <div className="flex flex-col  gap-8 md:w-1/2 justify-center">
      <div className="md:hidden flex justify-center text-center">
        <BodyHeading type="large">
          Trade on the go. Anywhere, anytime.
        </BodyHeading>
      </div>
      <img className={imgStyle} src={imgSrc} alt="app-image" />
      <div className="flex gap-6 border-b dark:border-zinc-500 border-zinc-400 w-fit self-center">
        {isVersion === "desktop" ? (
          <button
            onClick={handleClick}
            value="desktop"
            className="dark:text-zinc-200 hidden md:block text-zinc-800 border-b-2 border-yellow-500  font-semibold pb-4 lg:text-md text-sm mb-[-1px]"
          >
            Desktop
          </button>
        ) : (
          <button
            onClick={handleClick}
            value="desktop"
            className="dark:text-zinc-500 hidden md:block text-zinc-400 dark:hover:text-zinc-200 hover:text-zinc-800 lg:text-md text-sm  font-semibold pb-4"
          >
            Desktop
          </button>
        )}
        {isVersion === "light" ? (
          <button
            onClick={handleClick}
            value="light"
            className="dark:text-zinc-200 text-zinc-800 border-b-2 border-yellow-500 font-semibold pb-4 lg:text-md text-sm mb-[-1px]"
          >
            Light
          </button>
        ) : (
          <button
            onClick={handleClick}
            value="light"
            className="dark:text-zinc-500 text-zinc-400 dark:hover:text-zinc-200 hover:text-zinc-800 lg:text-md text-sm  font-semibold pb-4"
          >
            Light
          </button>
        )}
        {isVersion === "pro" ? (
          <button
            onClick={handleClick}
            value="pro"
            className="dark:text-zinc-200 text-zinc-800 border-b-2 border-yellow-500 font-semibold lg:text-md text-sm pb-4 mb-[-1px]"
          >
            Pro
          </button>
        ) : (
          <button
            onClick={handleClick}
            value="pro"
            className="dark:text-zinc-500 text-zinc-400 dark:hover:text-zinc-200 hover:text-zinc-800 lg:text-md text-sm font-semibold pb-4"
          >
            Pro
          </button>
        )}
      </div>
      <div className="flex self-center gap-6 flex-wrap xs:flex-nowrap justify-center ">
        <DownloadStore
          text="Download on the"
          icon={<BsApple className=" w-8 h-8" />}
          name="App Store"
        />
        <DownloadStore
          text="GET IT ON"
          icon={<BsGooglePlay className=" w-8 h-8" />}
          name="Google Play"
        />
      </div>
    </div>
  );
}

export default DeviceSizing;
