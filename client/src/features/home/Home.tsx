import React from "react";
import BrandingBannerSection from "./BrandingBannerSection";
import BriefAboutUsSection from "./BriefAboutUsSection";

const defaultContent = {
  heading: 'Legal for Creative Minds',
  mainText: 'The legal expertise combined with tech savviness comes to offer a variety of tech law solutions. We pride ourselves on our international-mindedness. ',
  bottomText: 'You can submit your case for a free assessment.We will get back to you shortly',
};

const Home = () => {
  return (
    <div>
      <BrandingBannerSection heading={defaultContent.heading} mainText={defaultContent.mainText} bottomText={defaultContent.bottomText} />
      <BriefAboutUsSection />
    </div>
  );
};

export default Home;
