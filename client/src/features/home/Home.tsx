import React from "react";
import { useSelector } from "react-redux";
import BrandingBannerSection from "./BrandingBannerSection";
import BriefAboutUsSection from "./BriefAboutUsSection";
import Expertise from "./expertise/Expertise";
import { getHomeContentAsync, getHomeContentSelector } from "./home.slice";
import IndustryExpertise from "./industryExpertise/IndustryExpertise";
import HomeLoader from './HomeLoader';
import { useAppDispatch } from "../../store.hooks";

const Home = () => {

  const dispatch = useAppDispatch();
  const { homeContent, loadingContent, splash } = useSelector(getHomeContentSelector);

  React.useEffect(() => {
    dispatch(getHomeContentAsync());
  }, [dispatch])


  return (<>
    {
      splash.loadSplash ? <object style={{
        width: '100%',
        height: '100%',
        position: "fixed",
        top: '0px',
        left: '0px',
        zIndex: 1500,
        backgroundColor: 'white'
      }} aria-label="legan-logo" data="/logo-leganix.svg" type="image/svg+xml" ></object> : loadingContent ? <HomeLoader /> :
        <div>
          <BrandingBannerSection
            bannerContent={homeContent.bannerContent}
          />

          <BriefAboutUsSection briefAboutUsContent={homeContent.briefAboutUsContent} />

          <Expertise
            heading={homeContent.expertiseContent.heading}
            mainText={homeContent.expertiseContent.mainText}
            contentList={homeContent.expertiseContent.expertiseContentList!}
          />

          <IndustryExpertise
            mainHeading={homeContent.industryExpertise.heading}
            text={homeContent.industryExpertise.mainText}
            contentList={homeContent.industryExpertise.industryExpertiseContentList!}
          />
        </div>
    }
  </>
  );
};

export default Home;
