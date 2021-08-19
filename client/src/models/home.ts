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
  contentList: IExpertiseContentList[]
}

export interface IIndustryContent {
  heading: string,
  mainText: string,
  contentList: IIndustryExpertiseContentList[]
}

export interface IExpertiseContentList {
    heading: string,
    subHeading: string,
    panel: string,
    icon: string,
    list: string[],
}

export interface IIndustryExpertiseContentList {
  heading: string,
  id: number,
  list: string[],
}

export interface IService{
  id: string,
  imageUrl: string,
  name: string,
  description: string
}