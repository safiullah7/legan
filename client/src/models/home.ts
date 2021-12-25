export const AboutUsArray = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40];
export interface IHome {
  _id: string,
  createdAt: Date | null,
  updatedAt: Date | null,
  __v: number | null,
  bannerContent: IBannerContent,
  briefAboutUsContent: IBriefAboutUsContent
  expertiseContent: IExpertiseContent,
  industryExpertise: IIndustryContent,
  footerContent: IFooterContent
  generalContent: IGeneralContent
}

export interface IGeneralContent {
  whitepaperLink: string
}

export interface ISplash {
  loadSplash: true | false
}

export interface IBannerContent {
  heading: string,
  mainText: string,
  bottomText: string
}

export interface IBriefAboutUsContent {
  heading: string,
  mainText: string,
  services: IService[] | null
}

export interface IExpertiseContent {
  heading: string,
  mainText: string,
  expertiseContentList: IExpertiseContentListItem[] | null
}

export interface IIndustryContent {
  heading: string,
  mainText: string,
  industryExpertiseContentList: IIndustryExpertiseContentList[] | null
}

export interface IExpertiseContentListItem {
  _id: string,
  heading: string,
  subHeading: string,
  panel: string,
  icon: string,
  content: string,
}

export interface IIndustryExpertiseContentList {
  heading: string,
  _id: string,
  content: string,
}

export interface IService {
  _id: string,
  imageUrl: string,
  name: string,
  description: string
}
export interface Iid {
  id: string,
}
export interface IExpertiseHead {
  heading: string,
  description: string,
}
export interface IIndutryHead {
  heading: string,
  description: string,
}
export interface ISocialLinks {
  facebook: string,
  linkedIn: string
}

export interface IFooterContent {
  socialLinks: ISocialLinks,
  underLogoText: string
}