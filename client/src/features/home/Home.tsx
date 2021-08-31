import React from "react";
import { useSelector } from "react-redux";
import BrandingBannerSection from "./BrandingBannerSection";
import BriefAboutUsSection from "./BriefAboutUsSection";
import Expertise from "./expertise/Expertise";
import { getHomeContentSelector } from "./home.slice";
import IndustryExpertise from "./industryExpertise/IndustryExpertise";
import HomeLoader from './HomeLoader';

const Home = () => {
  const [loading, setLoading] = React.useState<true | false>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])
  const { bannerContent, briefAboutUsContent, expertiseContent, industryExpertise } = useSelector(getHomeContentSelector);
  return (<>
    {
      loading ? <HomeLoader /> :
        <div>
          <BrandingBannerSection
            bannerContent={bannerContent}
          />

          <BriefAboutUsSection briefAboutUsContent={briefAboutUsContent} />

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
    }
  </>
  );
};

export default Home;
