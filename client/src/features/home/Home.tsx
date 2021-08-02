import React from "react";
import BrandingBannerSection from "./BrandingBannerSection";
import BriefAboutUsSection from "./BriefAboutUsSection";
import Expertise from "./expertise/Expertise";
import IndustryExpertise from "./industryExpertise/IndustryExpertise";
import { defaultBannerContent, defaultIndustryExpertise, defaultExpertiseContent } from '../../models/home'


const Home = () => {
  return (
    <div>
      <BrandingBannerSection
        heading={defaultBannerContent.heading}
        mainText={defaultBannerContent.mainText}
        bottomText={defaultBannerContent.bottomText}
      />
      <BriefAboutUsSection />
      <Expertise
        heading={defaultExpertiseContent.heading}
        mainText={defaultExpertiseContent.mainText}
        contentList={defaultExpertiseContent.contentList}
      />
      <IndustryExpertise
        mainHeading={defaultIndustryExpertise.mainHeading}
        text={defaultIndustryExpertise.text}
        contentList={defaultIndustryExpertise.contentList}
      />
    </div>
  );
};

export default Home;
