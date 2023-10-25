import Nav, { NavContext } from "./Nav";

import {
  FaFileInvoiceDollar,
  FaNewspaper,
  FaFileContract,
  FaRobot,
  FaCopy,
  FaBookOpen,
  FaRegNewspaper,
  FaMicroscope,
  FaWallet,
  FaSearch,
  FaDownload,
  FaGlobe,
  FaUserPlus,
  FaPiggyBank,
  FaBitcoin,
} from "react-icons/fa";
import { IoIosPodium } from "react-icons/io";
import {
  BsArrowDownUp,
  BsArrowsAngleExpand,
  BsBoxArrowUpRight,
  BsFillBalloonHeartFill,
  BsFillCreditCardFill,
  BsFillRocketTakeoffFill,
  BsPeopleFill,
  BsWifi,
} from "react-icons/bs";
import {
  AiFillApi,
  AiFillDollarCircle,
  AiFillGift,
  AiFillHome,
  AiOutlineSlackSquare,
} from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { Tb3DCubeSphere, TbPick } from "react-icons/tb";
import { GiHamburgerMenu, GiPodiumWinner } from "react-icons/gi";
import { HiSquaresPlus } from "react-icons/hi2";

import ButtonYellow from "./ButtonYellow";
import TextInput from "./TextInput";
import ButtonNav1 from "./ButtonNav1";
import Heading from "./NavHeading";
import FunctionLink from "./FunctionLink";
import { useContext } from "react";
import QrCode from "./QrCode";
import QrCodeDescription from "./QrCodeDescription";
import CurrencyList from "currency-list";
import languages, {
  FuturesArr,
  MoreArr,
  SquareArr,
  TradeAdvancedArr,
  TradeBasicArr,
} from "../utils/helper";
import Modal from "../contexts/ModalContext";
function HomeNav() {
  const iconsStyle = "bg-inherit text-yellow-500 w-5 h-5";
  const iconsStyle2 = "w-5 h-5 hover:text-yellow-500 bg-inherit";
  const iconsStyle3 = "bg-inherit text-yellow-500 w-5 h-5";
  const iconsStyle4 = "bg-inherit w-5 h-5";

  const { close } = useContext(NavContext);

  return (
    <>
      <div className="flex items-center gap-5 h-full">
        <Nav.Logo imageSrc="\images\Binance-Logo.wine.png" />
        <Nav.Seperator className="gap-5 hidden lg:flex">
          <Nav.Link linkName="Buy Crypto"></Nav.Link>
          <Nav.Link linkName="Markets"></Nav.Link>
          <Nav.Link isSelect={true} linkName="Trade">
            <Nav.Options optionsType="double">
              <div className="flex flex-row">
                <div>
                  <Nav.Option gridHeading="Basic"></Nav.Option>
                  <Nav.Option
                    heading="Spot"
                    text="Buy and sell on the spot market with advanced tools"
                  >
                    <BsArrowDownUp className={iconsStyle} />
                  </Nav.Option>

                  <Nav.Option
                    heading="Margin"
                    text="Increase your profits with leverage"
                  >
                    <BsBoxArrowUpRight className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="P2P"
                    text="Buy and sell cryptocurrencies using bank transfer and 800+ options"
                  >
                    <BsPeopleFill className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="Convert & Block Trade"
                    text="The easiest way to trade at all sizes"
                  >
                    <BsArrowsAngleExpand className={iconsStyle} />
                  </Nav.Option>
                </div>
                <div>
                  <Nav.Option gridHeading="Advanced"></Nav.Option>
                  <Nav.Option
                    heading="Trading Bots"
                    text="Trade smarted with our various automated trading strategies - easy, fast and reliable"
                  >
                    <FaRobot className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="Copy Trading"
                    text="Follow the most popular traders"
                  >
                    <FaCopy className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="APIs"
                    text="Unlimited oprotunities with one key"
                  >
                    <AiFillApi className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option isEmpty={true}></Nav.Option>
                </div>
              </div>
            </Nav.Options>
          </Nav.Link>
          <Nav.Link isSelect={true} linkName="Futures">
            <Nav.Options>
              <Nav.Option
                heading="USD&#x24C8;-M Futures"
                text="Contracts settled in USDT"
              >
                <FaFileInvoiceDollar
                  className={iconsStyle}
                ></FaFileInvoiceDollar>
              </Nav.Option>
              <Nav.Option
                heading="COIN-M Futures"
                text="Contracts settled in cryptocurrency"
              >
                <FaNewspaper className={iconsStyle}></FaNewspaper>
              </Nav.Option>
              <Nav.Option
                heading="Options"
                text="USDT options with limited downside and affordable entry"
              >
                <FaFileContract className={iconsStyle}></FaFileContract>
              </Nav.Option>
            </Nav.Options>
          </Nav.Link>
          <Nav.Link linkName="Earn"></Nav.Link>
          <Nav.Link isSelect={true} linkName="Square">
            <Nav.Options>
              <Nav.Option
                heading="Square"
                text="Stay informed about everything crypto"
              >
                <BsWifi className={iconsStyle}></BsWifi>
              </Nav.Option>
              <Nav.Option
                heading="Academy (Learn & Earn)"
                text="Earn crypto by learning about blockchain"
              >
                <FaBookOpen className={iconsStyle}></FaBookOpen>
              </Nav.Option>
              <Nav.Option
                heading="Blog"
                text="Expand your knowledge and get the latest insigths"
              >
                <FaRegNewspaper className={iconsStyle}></FaRegNewspaper>
              </Nav.Option>
              <Nav.Option
                heading="Research"
                text="Institutional-grade analysis, in-depth insights, and more"
              >
                <FaMicroscope className={iconsStyle}></FaMicroscope>
              </Nav.Option>
            </Nav.Options>
          </Nav.Link>
          <Nav.Link isSelect={true} linkName="More">
            <Nav.Options optionsType="double-right">
              <div className="flex flex-row">
                <div>
                  <Nav.Option
                    heading="VIP & Institutional"
                    text="Your trusted digital platform for VIPs and institutions"
                  >
                    <AiFillHome className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option heading="Launchpad" text="Token launch platform">
                    <BsFillRocketTakeoffFill className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="Mining Pool"
                    text="Mine more rewards by connecting to the pool"
                  >
                    <TbPick className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option heading="Pay" text="Send, receive, spend crypto">
                    <BsFillCreditCardFill className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="Loan"
                    text="Get an instant loan secured by crypto assets"
                  >
                    <FaSackDollar className={iconsStyle} />
                  </Nav.Option>
                </div>
                <div>
                  <Nav.Option
                    heading="NFT"
                    text="Explore NFTs from creators worldwide"
                  >
                    <AiOutlineSlackSquare className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="Fan Token"
                    text="Discover an all-new fandom and unlock unlimited fandom experiences"
                  >
                    <GiPodiumWinner className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="Web3 Wallet"
                    text="Meet the next-generation Web3 wallet"
                  >
                    <FaWallet className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="BNB Chain"
                    text="The most popular blockchain to build your own dApp"
                  >
                    <Tb3DCubeSphere className={iconsStyle} />
                  </Nav.Option>
                  <Nav.Option
                    heading="Charity"
                    text="Blockchain empowers charity to be more transparent, efficient, and traceable"
                  >
                    <BsFillBalloonHeartFill className={iconsStyle} />
                  </Nav.Option>
                </div>
              </div>
            </Nav.Options>
          </Nav.Link>
        </Nav.Seperator>
      </div>
      <Nav.Seperator gap="3">
        <Nav.Link
          isSelect={true}
          isIcon={true}
          icon={<FaSearch className={iconsStyle2} />}
          isSearch={true}
          hiddenAt="md"
        >
          <Nav.Option2>
            <div className="px-4 pb-1 w-full flex items-center gap-4 flex-col">
              <div className="w-full flex items-center gap-1">
                <TextInput
                  size="medium"
                  icon={<FaSearch className={iconsStyle2} />}
                  placeholder="Coin, Function, Announcement"
                ></TextInput>
                <ButtonNav1
                  onClick={close}
                  className="px-1 hover:text-zinc-300"
                >
                  Cancel
                </ButtonNav1>
              </div>
              <Heading className="mt-3">Hot Function</Heading>
              <div className="flex items-center gap-3 w-full">
                <div className="flex items-center gap-3 w-full flex-col">
                  <FunctionLink icon={<BsPeopleFill className={iconsStyle3} />}>
                    P2P
                  </FunctionLink>
                  <FunctionLink
                    icon={<BsArrowsAngleExpand className={iconsStyle3} />}
                  >
                    Convert
                  </FunctionLink>
                  <FunctionLink
                    icon={<FaUserPlus className={iconsStyle3}></FaUserPlus>}
                  >
                    Refferal
                  </FunctionLink>
                  <FunctionLink icon={<FaRobot className={iconsStyle3} />}>
                    Trading bots
                  </FunctionLink>
                </div>
                <div className="flex items-center gap-3 w-full flex-col">
                  <FunctionLink icon={<FaPiggyBank className={iconsStyle3} />}>
                    Earn
                  </FunctionLink>
                  <FunctionLink icon={<TbPick className={iconsStyle3} />}>
                    Pool
                  </FunctionLink>
                  <FunctionLink
                    icon={<FaDownload className={iconsStyle3}></FaDownload>}
                  >
                    Deposit
                  </FunctionLink>
                  <FunctionLink
                    icon={<BsFillRocketTakeoffFill className={iconsStyle3} />}
                  >
                    Launchpad
                  </FunctionLink>
                </div>
              </div>
            </div>
          </Nav.Option2>
        </Nav.Link>

        <Nav.Link hiddenAt="md" linkName="Log In"></Nav.Link>
        <ButtonYellow ml="ml-2">
          <AiFillGift className="bg-yellow-300 group-hover:bg-yellow-500"></AiFillGift>
          <span>Register</span>
        </ButtonYellow>

        <Nav.Link
          isSelect={true}
          isIcon={true}
          icon={<FaDownload className={iconsStyle2} />}
          hiddenAt="xl"
        >
          <Nav.Option2
            gap="1"
            flexCol="flex-col"
            width="w-full"
            paddingX="px-4"
          >
            <QrCode />
            <QrCodeDescription />
            <ButtonYellow type="QrCode">More Download Options</ButtonYellow>
          </Nav.Option2>
        </Nav.Link>

        <Nav.Link
          isSelect={true}
          isIcon={true}
          icon={<FaGlobe className={iconsStyle2} />}
          hiddenAt="xl"
        >
          <Nav.Option2 paddingX="px-5">
            <div className="flex flex-col gap-2 w-3/5">
              <Heading className="mt-3" text="text-sm">
                Language
              </Heading>
              <TextInput placeholder="Search"></TextInput>
              <div className="h-80 w-full overflow-y-scroll flex flex-col gap-3 scrollbar2 mt-2">
                <ButtonNav1 className="py-1" textCol="text-yellow-500">
                  English
                </ButtonNav1>
                {languages.map((lang) => (
                  <ButtonNav1 className="py-1" key={lang.code}>
                    {lang.name}
                  </ButtonNav1>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-2/5">
              <Heading className="mt-3" text="text-sm">
                Currency
              </Heading>
              <TextInput placeholder="Search"></TextInput>
              <div className="h-80 w-full overflow-y-scroll flex flex-col gap-3 scrollbar2 mt-2">
                <ButtonNav1 className="py-1" textCol="text-yellow-500">
                  USD-$
                </ButtonNav1>
                {Object.entries(CurrencyList.getAll("en_US")).map(
                  ([key, value]) => (
                    <ButtonNav1 className="py-1" key={key}>
                      {key}-{value.symbol_native}
                    </ButtonNav1>
                  )
                )}
              </div>
            </div>
          </Nav.Option2>
        </Nav.Link>
        <Modal>
          <Modal.Open
            icon={<GiHamburgerMenu className={iconsStyle4} />}
            opens="main-menu"
          ></Modal.Open>
          <Modal.Window name="main-menu">
            <Modal.Link
              icon={<FaBitcoin className={iconsStyle4} />}
              linkName="Buy Crypto"
            ></Modal.Link>
            <Modal.Link
              icon={<IoIosPodium className={iconsStyle4} />}
              linkName="Markets"
            ></Modal.Link>
            <Modal.Link
              icon={<BsArrowDownUp className={iconsStyle4} />}
              linkName="Trade"
              isSelect={true}
              opens="trade"
            >
              <Modal.SelectOption type="heading">Basic</Modal.SelectOption>
              {TradeBasicArr.map((item) => (
                <Modal.SelectOption key={item}>{item}</Modal.SelectOption>
              ))}
              <Modal.SelectOption type="heading">Advanced</Modal.SelectOption>
              {TradeAdvancedArr.map((item) => (
                <Modal.SelectOption key={item}>{item}</Modal.SelectOption>
              ))}
            </Modal.Link>
            <Modal.Link
              icon={<FaFileInvoiceDollar className={iconsStyle4} />}
              linkName="Futures"
              isSelect={true}
              opens="future"
            >
              {FuturesArr.map((item) => (
                <Modal.SelectOption key={item}>{item}</Modal.SelectOption>
              ))}
            </Modal.Link>
            <Modal.Link
              icon={<FaPiggyBank className={iconsStyle4} />}
              linkName="Earn"
            ></Modal.Link>
            <Modal.Link
              icon={<FaBookOpen className={iconsStyle4} />}
              linkName="Square"
              isSelect={true}
              opens="square"
            >
              {SquareArr.map((item) => (
                <Modal.SelectOption key={item}>{item}</Modal.SelectOption>
              ))}
            </Modal.Link>
            <Modal.Link
              icon={<HiSquaresPlus className={iconsStyle4} />}
              linkName="More"
              isSelect={true}
              opens="more"
            >
              {MoreArr.map((item) => (
                <Modal.SelectOption key={item}>{item}</Modal.SelectOption>
              ))}
            </Modal.Link>
            <Modal.Link
              icon={<FaDownload className={iconsStyle4} />}
              linkName="Download"
            ></Modal.Link>
            <Modal.Link
              icon={<FaGlobe className={iconsStyle4} />}
              linkName="English"
            ></Modal.Link>
            <Modal.Link
              icon={<AiFillDollarCircle className={iconsStyle4} />}
              linkName="USD"
            ></Modal.Link>
          </Modal.Window>
        </Modal>
      </Nav.Seperator>
    </>
  );
}

export default HomeNav;
