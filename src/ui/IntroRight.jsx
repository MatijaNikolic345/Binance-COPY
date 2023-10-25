import CryptoData from "./CryptoData";
import CryptoNews from "./CryptoNews";

function IntroRight() {
  return (
    <div className="flex lg:flex-col md:flex-row flex-col lg:w-5/12 w-full lg:gap-10 justify-between">
      <CryptoData />
      <CryptoNews />
    </div>
  );
}

export default IntroRight;
