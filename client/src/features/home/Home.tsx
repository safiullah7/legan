import React from "react";
import { useSelector } from "react-redux";
import BrandingBannerSection from "./BrandingBannerSection";
import BriefAboutUsSection from "./BriefAboutUsSection";
import Expertise from "./expertise/Expertise";
import { getHomeContentSelector, updateSplash } from "./home.slice";
import IndustryExpertise from "./industryExpertise/IndustryExpertise";
import HomeLoader from './HomeLoader';
import { useAppDispatch } from "../../store.hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState<true | false>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
    setTimeout(() => {
      dispatch(
        updateSplash()
      );
    }, 4000)
  }, [dispatch])
  const { bannerContent, briefAboutUsContent, expertiseContent, industryExpertise, splash } = useSelector(getHomeContentSelector);
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
      }} aria-label="legan-logo" data="/logo-leganix.svg" type="image/svg+xml" ></object> : loading ? <HomeLoader /> :
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
