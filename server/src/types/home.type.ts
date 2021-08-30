export interface IHome {
    bannerContent: IBannerContent,
    briefAboutUsContent: IBriefAboutUsContent
    expertiseContent: IExpertiseContent,
    industryExpertise: IIndustryContent
}

// ----------------------------------------------

export interface IBannerContent {
    heading: string,
    mainText: string,
    bottomText: string
}

// -----------------------------------------------

export interface IBriefAboutUsContent {
    heading: string,
    mainText: string,
    services: IService[]
}

export interface IService{
    id: string,
    imageUrl: string,
    name: string,
    description: string
}

// -----------------------------------------------

export interface IExpertiseContent {
    heading: string,
    mainText: string,
    contentList: IExpertiseContentListItem[]
}

export interface IExpertiseContentListItem {
    heading: string,
    subHeading: string,
    panel: string,
    icon: string,
    content: string,
}

// -----------------------------------------------

export interface IIndustryContent {
    heading: string,
    mainText: string,
    contentList: IIndustryExpertiseContentList[]
}

export interface IIndustryExpertiseContentList {
    heading: string,
    content: string,
}

// -----------------------------------------------