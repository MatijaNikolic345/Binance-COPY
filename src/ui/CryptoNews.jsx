import BodyHeading from "./BodyHeading";
import { MdKeyboardArrowRight } from "react-icons/md";
function CryptoNews() {
  return (
    <div className="flex flex-col gap-7 p-2.5 lg:w-full md:w-[20rem] w-full">
      <div className="flex justify-center md:hidden w-full mt-5">
        <BodyHeading type="large">Latest News</BodyHeading>
      </div>
      <BodyHeading
        className="cursor-pointer dark:hover:text-zinc-400 hover:text-zinc-600"
        type="smallest-2"
      >
        Web3 Infrastructure Spheron Raises $7 Million To Improve User
        Experience, Security, And Reliability{" "}
        <div className="text-xs dark:text-zinc-500 text-zinc-400 ml-1 inline-block">
          2 hours ago
        </div>
      </BodyHeading>
      <BodyHeading
        className="cursor-pointer dark:hover:text-zinc-400 hover:text-zinc-600"
        type="smallest-2"
      >
        Ethereum Co-Founder Vitalik Buterin Denies Selling ETH for Personal Gain{" "}
        <div className="text-xs dark:text-zinc-500 text-zinc-400 inline-block">
          3 hours ago
        </div>
      </BodyHeading>
      <BodyHeading
        className="cursor-pointer dark:hover:text-zinc-400 hover:text-zinc-600"
        type="smallest-2"
      >
        Orbs Network Team Reportedly Sells Tokens After Price Surge{" "}
        <div className="text-xs dark:text-zinc-500 text-zinc-400 ml-1 inline-block">
          3 hours ago
        </div>
      </BodyHeading>
      <BodyHeading
        className="cursor-pointer dark:hover:text-zinc-400 hover:text-zinc-600"
        type="smallest-2"
      >
        Winds Of Yawanawa NFT Project Generates $3.9 Million In Sales Within A
        Week{" "}
        <div className="text-xs dark:text-zinc-500 text-zinc-400 ml-1 inline-block">
          4 hours ago
        </div>
      </BodyHeading>
      <div className="flex items-center md:justify-normal justify-center gap-2 w-50">
        <p className="text-zinc-500 font-medium text-sm cursor-pointer ">
          View All News
          <MdKeyboardArrowRight className="inline w-4 h-4 bg-inherit" />
        </p>
      </div>
    </div>
  );
}

export default CryptoNews;
