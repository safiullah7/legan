import mongoose, { mongo } from "mongoose";
import { IHome } from "../types/home.type";

const BannerContentSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    mainText: { type: String, required: true },
    bottomText: { type: String, required: true },
});
const ServiceSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
});
const BriefAboutUsContentSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    mainText: { type: String, required: true },
    services: [ServiceSchema]
});
const ExpertiseContentListItemSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    subHeading: { type: String, required: true },
    panel: { type: String, required: true },
    icon: { type: String, required: true },
    content: { type: String, required: true },
    _id: { type: String }
});
const ExpertiseContentSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    mainText: { type: String, required: true },
    expertiseContentList: [ExpertiseContentListItemSchema]
});
const IndustryExpertiseContentListSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    content: { type: String, required: true },
    _id: { type: String }
})
const IndustryExpertiseContentSchema = new mongoose.Schema({
    heading: { type: String, required: true },
    mainText: { type: String, required: true },
    industryExpertiseContentList: [IndustryExpertiseContentListSchema]
});
const SocialLinksSchema = new mongoose.Schema({
    facebook: { type: String, required: true },
    linkedIn: { type: String, required: true }
})
const FooterContentSchema = new mongoose.Schema({
    socialLinks: { type: SocialLinksSchema, required: true },
    underLogoText: { type: String, required: true }
})
const GeneralContentSchema = new mongoose.Schema({
    whitepaperLink: { type: String, required: true }
})

const HomeSchema = new mongoose.Schema(
    {
        bannerContent: { type: BannerContentSchema, required: true },
        briefAboutUsContent: { type: BriefAboutUsContentSchema, required: true },
        expertiseContent: { type: ExpertiseContentSchema, required: true },
        industryExpertise: { type: IndustryExpertiseContentSchema, required: true },
        footerContent: { type: FooterContentSchema, required: true },
        generalContent: { type: GeneralContentSchema, required: true }
    },
    { timestamps: true }
);

const Home = mongoose.model<IHome>("Home", HomeSchema)

export default Home;