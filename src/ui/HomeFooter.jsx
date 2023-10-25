import {
  AboutUsArr,
  BusinessArr,
  LearnArr,
  ProductsArr,
  ServiceArr,
  SupportArr,
} from "../utils/helper";
import Footer from "./Footer";

import CommunityFooter from "./CommunityFooter";
function HomeFooter() {
  return (
    <div className="w-full ">
      <Footer>
        <Footer.Column type="community1">
          <Footer.ColumnSection header="Community">
            <CommunityFooter />
          </Footer.ColumnSection>
        </Footer.Column>
        <Footer.Column>
          <Footer.ColumnSection id="aboutUs" header="About Us">
            {AboutUsArr.map((item) => (
              <Footer.TextItem key={item}>{item}</Footer.TextItem>
            ))}
          </Footer.ColumnSection>
        </Footer.Column>
        <Footer.Column>
          <Footer.ColumnSection id="products" header="Products">
            {ProductsArr.map((item) => (
              <Footer.TextItem key={item}>{item}</Footer.TextItem>
            ))}
          </Footer.ColumnSection>
        </Footer.Column>
        <Footer.Column>
          <Footer.ColumnSection id="business" header="Business">
            {BusinessArr.map((item) => (
              <Footer.TextItem key={item}>{item}</Footer.TextItem>
            ))}
          </Footer.ColumnSection>
          <Footer.ColumnSection id="learn" header="Learn">
            {LearnArr.map((item) => (
              <Footer.TextItem key={item}>{item}</Footer.TextItem>
            ))}
          </Footer.ColumnSection>
        </Footer.Column>
        <Footer.Column>
          <Footer.ColumnSection id="service" header="Service">
            {ServiceArr.map((item) => (
              <Footer.TextItem key={item}>{item}</Footer.TextItem>
            ))}
          </Footer.ColumnSection>
          <Footer.ColumnSection id="support" header="Support">
            {SupportArr.map((item) => (
              <Footer.TextItem key={item}>{item}</Footer.TextItem>
            ))}
          </Footer.ColumnSection>
        </Footer.Column>
        <Footer.Column type="community2">
          <Footer.ColumnSection type="community2" header="Community">
            <CommunityFooter />
          </Footer.ColumnSection>
        </Footer.Column>
      </Footer>
      <div className="flex justify-center gap-5 mt-4 mb-14">
        <div className="text-zinc-400 text-sm font-medium">Binance© 2023</div>
        <div className="text-zinc-400 text-sm font-medium hover:text-yellow-500 cursor-pointer">
          Cookie Preferences
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
