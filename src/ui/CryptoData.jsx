import { useEffect, useState } from "react";
import { formatCurrency, getCryptoPriceAnd24hChange } from "../utils/helper";
import { MdKeyboardArrowRight } from "react-icons/md";
import BodyHeading from "./BodyHeading";
/*useEffect(function () {
    const timer = setInterval(async function () {
      try {
        const newBtc = await getCryptoPriceAnd24hChange("bitcoin");
        const newEth = await getCryptoPriceAnd24hChange("ethereum");
        const newBnb = await getCryptoPriceAnd24hChange("binancecoin");
        const newXrp = await getCryptoPriceAnd24hChange("ripple");
        setDataBtc(newBtc);
        setDataBnb(newBnb);
        setDataEth(newEth);
        setDataXrp(newXrp);
      } catch (err) {
        clearInterval(timer);
      }
    }, 120000);
    return () => clearInterval(timer);
  }, []);*/
function CryptoData() {
  const [dataBtc, setDataBtc] = useState({});
  const [dataBnb, setDataBnb] = useState({});
  const [dataEth, setDataEth] = useState({});
  const [dataXrp, setDataXrp] = useState({});
  useEffect(function () {
    const timer = setTimeout(async function () {
      const newBtc = await getCryptoPriceAnd24hChange("bitcoin");
      const newEth = await getCryptoPriceAnd24hChange("ethereum");
      const newBnb = await getCryptoPriceAnd24hChange("binancecoin");
      const newXrp = await getCryptoPriceAnd24hChange("ripple");
      setDataBtc(newBtc);
      setDataBnb(newBnb);
      setDataEth(newEth);
      setDataXrp(newXrp);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col lg:w-full md:w-[23rem] w-full">
      <div className="flex justify-center md:hidden w-full mb-6 mt-5">
        <BodyHeading type="large">Markets</BodyHeading>
      </div>
      <div className="flex justify-between dark:hover:bg-zinc-600 hover:bg-zinc-300 md:py-2.5 md:px-2.5 py-3.5 rounded-md items-center cursor-pointer">
        <div className="flex items-center gap-2 w-40">
          <img
            src="./node_modules/cryptocurrency-icons/32/color/btc.png"
            alt=""
          />
          <p className="dark:text-zinc-200 text-zinc-800 font-semibold">
            BTC{" "}
            <span className="dark:text-zinc-500 text-zinc-400 font-medium text-sm mr-2">
              Bitcoin
            </span>
          </p>
        </div>
        <div className="dark:text-zinc-200 text-zinc-800 font-semibold w-20">
          {formatCurrency(dataBtc?.usd)}
        </div>
        <div
          className={`${
            Number(dataBtc?.usd_24h_change) > 0
              ? " text-green-600"
              : "text-red-600"
          } font-semibold w-14`}
        >
          <span>{Number(dataBtc?.usd_24h_change) > 0 && "+"}</span>
          {Number(dataBtc?.usd_24h_change)?.toFixed(2)}%
        </div>
      </div>
      <div className="flex justify-between dark:hover:bg-zinc-600 hover:bg-zinc-300 md:py-2.5 md:px-2.5 py-3.5  rounded-md items-center cursor-pointer">
        <div className="flex items-center gap-2 w-40">
          {" "}
          <img
            src="./node_modules/cryptocurrency-icons/32/color/eth.png"
            alt=""
          />
          <p className="dark:text-zinc-200 text-zinc-800 font-semibold">
            Eth{" "}
            <span className="dark:text-zinc-500 text-zinc-400 font-medium text-sm mr-2">
              Ethereum
            </span>
          </p>
        </div>
        <div className="dark:text-zinc-200 text-zinc-800 font-semibold  w-20">
          {" "}
          {formatCurrency(dataEth?.usd)}
        </div>
        <div
          className={`${
            Number(dataEth?.usd_24h_change) > 0
              ? " text-green-600"
              : "text-red-600"
          } font-semibold w-14`}
        >
          <span>{Number(dataEth?.usd_24h_change) > 0 && "+"}</span>
          {Number(dataEth?.usd_24h_change)?.toFixed(2)}%
        </div>
      </div>
      <div className="flex justify-between dark:hover:bg-zinc-600 hover:bg-zinc-300 md:py-2.5 md:px-2.5 py-3.5  rounded-md items-center cursor-pointer">
        <div className="flex items-center gap-2 w-40">
          {" "}
          <img
            src="./node_modules/cryptocurrency-icons/32/color/bnb.png"
            alt=""
          />
          <p className="dark:text-zinc-200 text-zinc-800 font-semibold">
            BNB{" "}
            <span className="dark:text-zinc-500 text-zinc-400 font-medium text-sm mr-2">
              BNB
            </span>
          </p>
        </div>
        <div className="dark:text-zinc-200 text-zinc-800 font-semibold  w-20">
          {formatCurrency(dataBnb?.usd)}
        </div>
        <div
          className={`${
            Number(dataBnb?.usd_24h_change) > 0
              ? " text-green-600"
              : "text-red-600"
          } font-semibold w-14`}
        >
          <span>{Number(dataBnb?.usd_24h_change) > 0 && "+"}</span>
          {Number(dataBnb?.usd_24h_change)?.toFixed(2)}%
        </div>
      </div>
      <div className="flex justify-between dark:hover:bg-zinc-600 hover:bg-zinc-300 md:py-2.5 md:px-2.5 py-3.5  rounded-md items-center cursor-pointer">
        <div className="flex items-center gap-2 w-40">
          <img
            src="./node_modules/cryptocurrency-icons/32/color/xrp.png"
            alt=""
          />
          <p className="dark:text-zinc-200 text-zinc-800 font-semibold">
            XRP{" "}
            <span className="dark:text-zinc-500 text-zinc-400 font-medium text-sm mr-2">
              Ripple
            </span>
          </p>
        </div>
        <div className="dark:text-zinc-200 text-zinc-800 font-semibold  w-20">
          {formatCurrency(dataXrp?.usd)}
        </div>
        <div
          className={`${
            Number(dataXrp?.usd_24h_change) > 0
              ? " text-green-600"
              : "text-red-600"
          } font-semibold w-14`}
        >
          <span>{Number(dataXrp?.usd_24h_change) > 0 && "+"}</span>
          {Number(dataXrp?.usd_24h_change)?.toFixed(2)}%
        </div>
      </div>
      <div className="flex items-center md:justify-normal justify-center gap-2 w-50 p-3">
        <p className="text-zinc-500 font-medium text-sm cursor-pointer">
          View All 350+ Coins
          <MdKeyboardArrowRight className="inline w-4 h-4 bg-inherit" />
        </p>
      </div>
    </div>
  );
}

export default CryptoData;
