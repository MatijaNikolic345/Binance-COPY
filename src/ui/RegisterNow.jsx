import BodyHeading from "./BodyHeading";
import ButtonYellow from "./ButtonYellow";

function RegisterNow() {
  return (
    <div className="w-full lg:py-16 py-10 flex flex-col lg:gap-5 gap-2 justify-center items-center dark:bg-zinc-800 bg-zinc-100">
      <BodyHeading type="medium">For Verified Users</BodyHeading>
      <BodyHeading className="mb-5" type="large">
        Get up to <span className="text-yellow-500">100 USDT</span> in rewards
      </BodyHeading>
      <ButtonYellow type="medium-2">Register Now</ButtonYellow>
    </div>
  );
}

export default RegisterNow;
