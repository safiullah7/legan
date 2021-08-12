import { useSelector } from "react-redux";
import BrandingBannerSection from "./BrandingBannerSection";
import BriefAboutUsSection from "./BriefAboutUsSection";
import Expertise from "./expertise/Expertise";
import { getHomeContentSelector } from "./home.slice";
import IndustryExpertise from "./industryExpertise/IndustryExpertise";

const Home = () => {
  const {bannerContent, expertiseContent, industryExpertise} = useSelector(getHomeContentSelector);
  return (
    <div>
      <BrandingBannerSection
        heading={bannerContent.heading}
        mainText={bannerContent.mainText}
        bottomText={bannerContent.bottomText}
      />
      <BriefAboutUsSection />
      <Expertise
        heading={expertiseContent.heading}
        mainText={expertiseContent.mainText}
        contentList={expertiseContent.contentList}
      />
      <IndustryExpertise
        mainHeading={industryExpertise.heading}
        text={industryExpertise.mainText}
        contentList={industryExpertise.contentList}
      />
    </div>
  );
};

export default Home;
