export interface IHome {
  bannerContent: IBannerContent,
  expertiseContent: IExpertiseContent,
  industryExpertise: IIndustryContent
}

interface IBannerContent {
  heading: string,
  mainText: string,
  bottomText: string
}

interface IExpertiseContent {
  heading: string,
  mainText: string,
  contentList: IExpertiseContentList[]
}

interface IIndustryContent {
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