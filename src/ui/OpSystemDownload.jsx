import { FaLinux } from "react-icons/fa";
import BodyHeading from "./BodyHeading";
import IconStyles from "./IconStyles";
import OpSystemButton from "./OpSystemButton";
import QrCode from "./QrCode";
import QrCodeDescription from "./QrCodeDescription";
import { BsWindows, BsXCircleFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
function OpSystemDownload() {
  return (
    <div className="md:flex hidden  flex-col lg:gap-16 gap-7 w-1/2">
      <BodyHeading className="mb-6" type="large">
        Trade on the go. Anywhere, anytime.
      </BodyHeading>
      <div className="flex gap-6 items-center">
        <div className="p-5 border border-zinc-700 rounded-[1.4rem] lg:block hidden">
          <QrCode type="3" />
        </div>
        <div className="p-5 border border-zinc-700 rounded-[1.4rem] lg:hidden block">
          <QrCode type="2" />
        </div>
        <QrCodeDescription textPosition="text-start" type="large" />
      </div>
      <div className="flex lg:gap-20 gap-10">
        <OpSystemButton
          icon={
            <IconStyles size="large">
              <BsXCircleFill className="bg-inherit w-10 h-10" />
            </IconStyles>
          }
        >
          MacOs
        </OpSystemButton>
        <OpSystemButton
          icon={
            <IconStyles size="large">
              <BsWindows className="bg-inherit w-10 h-10" />
            </IconStyles>
          }
        >
          Windows
        </OpSystemButton>
        <OpSystemButton
          icon={
            <IconStyles size="large">
              <FaLinux className="bg-inherit w-10 h-10" />
            </IconStyles>
          }
        >
          Linux
        </OpSystemButton>
      </div>
      <div className="flex gap-2 items-center cursor-pointer p-3 focus:bg-yellow-500">
        <FaDownload className="w-4 h-4 text-zinc-500 bg-inherit" />
        <BodyHeading type="smallest">More Download Options</BodyHeading>
      </div>
    </div>
  );
}

export default OpSystemDownload;
