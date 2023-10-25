import BodyHeading from "./BodyHeading";
import QnA from "./QnA";

function FreqAskQuest() {
  return (
    <div className="w-full flex flex-col gap-14 items-center">
      <BodyHeading type="large">Frequently Asked Questions</BodyHeading>
      <QnA>
        <QnA.Question question="What is a cryptocurrency exchange?" opens="1">
          <QnA.Answer name="1">
            <span>
              <span className="text-yellow-500">Cryptocurrency</span> exchanges
              are digital marketplaces that enable users to buy and sell
              cryptocurrencies like{" "}
              <span className="text-yellow-500">Bitcoin</span>,{" "}
              <span className="text-yellow-500">Ethereum,</span> and{" "}
              <span className="text-yellow-500">Tether</span>. The Binance
              exchange is the largest crypto exchange by trade volume.
            </span>
          </QnA.Answer>
        </QnA.Question>
        <QnA.Question question="What products does Binance provide?" opens="2">
          <QnA.Answer name="2">
            <span className="flex-col flex gap-5">
              <span>
                Binance is the world&#39;s leading cryptocurrency exchange,
                catering to 150 million registered users in over 180 countries.
                With low fees and over 350 cryptocurrencies to trade, Binance is
                the preferred exchange to trade Bitcoin, Altcoins, and other
                virtual assets.
              </span>

              <ul className="list-disc list-inside text-inherit ">
                <span>With Binance users can:</span>
                <li>
                  Trade hundreds of cryptocurrencies on{" "}
                  <span className="text-yellow-500">Spot</span>,{" "}
                  <span className="text-yellow-500">Margin</span>, and{" "}
                  <span className="text-yellow-500">Futures </span>
                  markets.
                </li>
                <li>
                  Buy and sell cryptocurrencies with{" "}
                  <span className="text-yellow-500">Binance P2P</span>.
                </li>
                <li>
                  Earn interest on your crypto with{" "}
                  <span className="text-yellow-500">Binance Earn</span>.
                </li>
                <li>
                  Buy or earn new tokens on{" "}
                  <span className="text-yellow-500">Binance Launchpad</span>.
                </li>
                <li>
                  Trade, stake, and loan NFTs on{" "}
                  <span className="text-yellow-500">Binance NFT</span>{" "}
                  marketplace.
                </li>
              </ul>
            </span>
          </QnA.Answer>
        </QnA.Question>
        <QnA.Question
          question="How to buy Bitcoin and other cryptocurrencies on Binance?"
          opens="3"
        >
          <QnA.Answer name="3">
            <span>
              There are several ways to buy cryptocurrencies on Binance. You can
              use a credit/debit card, cash balance, or Apple Pay/Google Pay to{" "}
              <span className="text-yellow-500">purchase crypto</span> on
              Binance. Before getting started, please make sure you&#39;ve
              completed{" "}
              <span className="text-yellow-500">Identity Verification</span> for
              your Binance account.
            </span>
          </QnA.Answer>
        </QnA.Question>
        <QnA.Question
          question="
          How to track cryptocurrency prices"
          opens="4"
        >
          <QnA.Answer name="4">
            <span>
              The easiest way to track the latest cryptocurrency prices, trading
              volumes, trending altcoins, and market cap is the{" "}
              <span className="text-yellow-500">
                Binance Cryptocurrency Directory
              </span>
              . Click on the coins to know historical coin prices, 24-hour
              trading volume, and the price of cryptocurrencies like{" "}
              <span className="text-yellow-500">Bitcoin</span>,{" "}
              <span className="text-yellow-500">Ethereum</span>,{" "}
              <span className="text-yellow-500">BNB</span> and others in
              real-time.
            </span>
          </QnA.Answer>
        </QnA.Question>
        <QnA.Question
          question="
          How to trade cryptocurrencies on Binance"
          opens="5"
        >
          <QnA.Answer name="5">
            <span>
              You can trade hundreds of cryptocurrencies on Binance via the{" "}
              <span className="text-yellow-500">Spot</span>,{" "}
              <span className="text-yellow-500">Margin</span>,{" "}
              <span className="text-yellow-500">Futures</span>, and{" "}
              <span className="text-yellow-500">Options</span> markets. To{" "}
              <span className="text-yellow-500">begin trading</span>, users need
              to register an account, complete identity verification,
              buy/deposit crypto, and start trading.
            </span>
          </QnA.Answer>
        </QnA.Question>
        <QnA.Question
          question="
          How to earn from crypto on Binance"
          opens="6"
        >
          <QnA.Answer name="6">
            <span>
              Users can earn rewards on more than 180+ cryptocurrencies by using
              one of the products offered on{" "}
              <span className="text-yellow-500">Binance Earn</span>. Our
              platform offers dozens of digital assets like{" "}
              <span className="text-yellow-500">Bitcoin</span>,{" "}
              <span className="text-yellow-500">Ethereum</span>, and
              stablecoins.
            </span>
          </QnA.Answer>
        </QnA.Question>
      </QnA>
    </div>
  );
}

export default FreqAskQuest;
