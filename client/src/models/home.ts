export const AboutUsArray = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40];
export interface IHome {
  bannerContent: IBannerContent,
  briefAboutUsContent: IBriefAboutUsContent
  expertiseContent: IExpertiseContent,
  industryExpertise: IIndustryContent
}

export interface IBannerContent {
  heading: string,
  mainText: string,
  bottomText: string
}

export interface IBriefAboutUsContent {
  heading: string,
  mainText: string,
  services: IService[]
}

export interface IExpertiseContent {
  heading: string,
  mainText: string,
  contentList: IExpertiseContentListItem[]
}

export interface IIndustryContent {
  heading: string,
  mainText: string,
  contentList: IIndustryExpertiseContentList[]
}

export interface IExpertiseContentListItem {
  id: string,
  heading: string,
  subHeading: string,
  panel: string,
  icon: string,
  content: string,
}

export interface IIndustryExpertiseContentList {
  heading: string,
  id: string,
  list: string,
}

export interface IService{
  id: string,
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
