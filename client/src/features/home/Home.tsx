import React from "react";
import BrandingBannerSection from "./BrandingBannerSection";
import BriefAboutUsSection from "./BriefAboutUsSection";
import Expertise from "./expertise/Expertise";

const defaultBannerContent = {
  heading: 'Legal for Creative Minds',
  mainText: 'The legal expertise combined with tech savviness comes to offer a variety of tech law solutions. We pride ourselves on our international-mindedness. ',
  bottomText: 'You can submit your case for a free assessment.We will get back to you shortly',
};
const defaultExpertiseContent = {
  heading: 'LEGAL EXPERTISE',
  mainText: 'Our niche is tech-law and fields of law focusing on information technology. We have tech-savvy legal consultants who understand your technology and its legal implications and offer hands-on solutions.',
  contentList: [
    {
      heading: 'DATA PROTECTION',
      subHeading: 'GDPR | ePrivact | CCPA | PIPEDA',
      panel: 'panel1',
      list: [
        'GDPR end-to-end compliance (Data mapping)',
        'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
        'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
        'Data Processing Impact Assessment',
        'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
        'Canada Data Privacy Law(PIPEDA) compliance',
      ],
    },
    {
      heading: 'TECH CONTRACTS',
      subHeading: 'EULA | T&Cs | Licensing | SaaS | NDA | SLA',
      panel: 'panel2',
      list: [
        'GDPR end-to-end compliance (Data mapping)',
        'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
        'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
        'Data Processing Impact Assessment',
        'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
        'Canada Data Privacy Law(PIPEDA) compliance',
      ],
    },
    {
      heading: 'INTELLECTUAL PROPERTY',
      subHeading: 'Trademark | Copyright | Software Licensing | Patent',
      panel: 'panel3',
      list: [
        'GDPR end-to-end compliance (Data mapping)',
        'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
        'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
        'Data Processing Impact Assessment',
        'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
        'Canada Data Privacy Law(PIPEDA) compliance',
      ],
    },
    {
      heading: 'INTERNET LAW',
      subHeading: 'Website Take-Downs | DMCA | UDRP',
      panel: 'panel4',
      list: [
        'GDPR end-to-end compliance (Data mapping)',
        'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
        'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
        'Data Processing Impact Assessment',
        'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
        'Canada Data Privacy Law(PIPEDA) compliance',
      ],
    },
  ]
};

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
    </div>
  );
};

export default Home;
