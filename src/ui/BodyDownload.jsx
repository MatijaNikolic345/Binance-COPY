import IconStyles from "./IconStyles";
import NavHeading from "./NavHeading";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { PiSquaresFourBold } from "react-icons/pi";
import HoverField from "./HoverField";
import QrCodeDescription from "./QrCodeDescription";
import QrCode from "./QrCode";
import ButtonYellow from "./ButtonYellow";

function BodyDownload() {
  return (
    <div className="flex gap-20 mt-4">
      <div className="flex flex-col gap-3">
        <NavHeading text="text-sm">Or Connect With</NavHeading>
        <div className="flex gap-3">
          <IconStyles size="large" shape="square">
            <FcGoogle className="w-7 h-7 bg-inherit" />
          </IconStyles>
          <IconStyles size="large" shape="square">
            <AiFillApple className="w-7 h-7 dark:text-zinc-200 bg-inherit" />
          </IconStyles>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <NavHeading text="text-sm">App Download</NavHeading>
        <div className="flex gap-3">
          <div className="group relative flex pr-4">
            <IconStyles size="large" shape="square-hover">
              <PiSquaresFourBold className="w-7 h-7 text-yellow-500 bg-inherit" />
            </IconStyles>
            <HoverField position="right" className="rounded-lg">
              <div className="px-3 py-4 flex gap-4 flex-col items-center w-48">
                <QrCodeDescription mb="mb-0" />
                <QrCode type="2" />
                <ButtonYellow type="QrCode">More Download Options</ButtonYellow>
              </div>
            </HoverField>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyDownload;
