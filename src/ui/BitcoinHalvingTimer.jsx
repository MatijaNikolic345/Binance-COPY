import { useEffect, useState } from "react";
import { getTimeUntilDate } from "../utils/helper";
import BodyHeading from "./BodyHeading";
import HoverField from "./HoverField";

function BitcoinHalvingTimer() {
  const [time, setTime] = useState("");
  useEffect(function () {
    setInterval(() => setTime(getTimeUntilDate()), 1000);
  }, []);
  return (
    <div className="flex flex-col self-start gap-4">
      <div className="flex gap-2 items-center">
        <BodyHeading className="mt-2" type="smallest-2">
          Next Bitcoin Halving Countdown
        </BodyHeading>
        <div className="group relative text-xs pr-3">
          <span className="dark:bg-zinc-600 bg-zinc-300 rounded-full  flex items-center justify-center w-4 h-4 pr-0.5 mt-2 cursor-pointer hover:bg-yellow-500 font-bold  scale-90 dark:text-zinc-900 text-zinc-100">
            ?
          </span>

          <HoverField position="right-2" className="rounded-lg animate-appear">
            <p className="text-zinc-900 dark:text-zinc-400   w-[19rem] p-3 ">
              The next Bitcoin halving is expected to take place in April 2024.
              It is difficult to predict the exact date as it depends on the
              block height. Since halving happens every 210,000 blocks, the next
              Bitcoin halving is expected to occur in April 2024.{" "}
              <span className="text-yellow-500 cursor-pointer">Learn more</span>
            </p>
          </HoverField>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="font-bold text-3xl text-zinc-900 dark:text-zinc-200">
          {time.days} <span className="text-lg">D</span>
        </div>
        <div className="font-bold text-3xl text-zinc-900 dark:text-zinc-200">
          {time.hours} <span className="text-lg">H</span>
        </div>
        <div className="font-bold text-3xl text-zinc-900 dark:text-zinc-200">
          {time.minutes} <span className="text-lg">M</span>
        </div>
        <div className="font-bold text-3xl text-zinc-900 dark:text-zinc-200">
          {time.seconds} <span className="text-lg">S</span>
        </div>
      </div>
    </div>
  );
}

export default BitcoinHalvingTimer;
