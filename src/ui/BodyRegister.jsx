import { AiFillGift } from "react-icons/ai";
import BodyHeading from "./BodyHeading";
import TextInput from "./TextInput";
import ButtonYellow from "./ButtonYellow";
import BodyDownload from "./BodyDownload";
function BodyRegister() {
  const iconsStyle = "bg-inherit text-yellow-500 w-8 h-8";
  return (
    <div className="flex flex-col gap-10 md:w-fit w-full">
      <div className="flex items-center gap-2">
        <AiFillGift className={iconsStyle} />
        <BodyHeading className="mt-2" type="smallest">
          Register now and get up to 100 USDT in rewards
        </BodyHeading>
      </div>
      <div className="flex items-center gap-1 md:gap-4 h-6 md:w-fit w-full">
        <div className="md:w-[28rem] w-full">
          <TextInput size="medium" placeholder="Email/Phone number" />
        </div>

        <div className="sm:w-[10rem] xs:w-[11.5rem] w-[12.5rem] md:w-full">
          <ButtonYellow type="medium">Get Started</ButtonYellow>
        </div>
      </div>
      <BodyDownload />
    </div>
  );
}

export default BodyRegister;
