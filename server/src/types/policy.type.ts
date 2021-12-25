export interface IPolicy {
    _id: string,
    privacyPolicy: IPolicyDetails,
    cookiePolicy: IPolicyDetails,
    termsAndConditions: IPolicyDetails,
    websiteTermsOfUse: IPolicyDetails
}

export interface IPolicyDetails {
    name: string,
    effectiveDate: Date,
    content: string
}