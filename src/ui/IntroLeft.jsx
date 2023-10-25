import BitcoinHalvingTimer from "./BitcoinHalvingTimer";
import BodyHeading from "./BodyHeading";
import BodyRegister from "./BodyRegister";

function IntroLeft() {
  return (
    <div className="lg:w-3/5 w-full flex flex-col items-center md:items-start gap-12">
      <BodyHeading type="largest">
        <span className="text-yellow-500">150M+</span> Users Chose Us Register
        Today
      </BodyHeading>
      <BodyRegister />
      <BitcoinHalvingTimer />
    </div>
  );
}

export default IntroLeft;
