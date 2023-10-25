import Container from "./Container";
import DeviceSizing from "./DeviceSizing";
import FreqAskQuest from "./FreqAskQuest";
import HomeFooter from "./HomeFooter";
import IntroLeft from "./IntroLeft";
import IntroRight from "./IntroRight";
import OpSystemDownload from "./OpSystemDownload";
import RegisterNow from "./RegisterNow";

function HomeBody() {
  return (
    <div className=" dark:bg-[#17171c] bg-zinc-50  h-fit relative flex flex-col justify-center items-center gap-10">
      <Container className="lg:flex-row flex-col lg:gap-0 gap-20">
        <IntroLeft />
        <IntroRight />
      </Container>
      <Container className="gap-20">
        <DeviceSizing />
        <OpSystemDownload />
      </Container>
      <Container>
        <FreqAskQuest />
      </Container>
      <RegisterNow />
      <Container>
        <HomeFooter />
      </Container>
    </div>
  );
}

export default HomeBody;
