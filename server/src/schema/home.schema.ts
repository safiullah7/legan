import { object, string, array } from 'yup';


export const createHomeContentSchema = object({
    body: object({
        bannerContent: object({
            heading: string().required("Banner's heading is required"),
            mainText: string().required("Banner's mainText is required"),
            bottomText: string().required("Banner's bottomText is required"),
        }),
        briefAboutUsContent: object({
            heading: string().required("briefAboutUsContent's heading is required"),
            mainText: string().required("briefAboutUsContent's mainText is required"),
            services: array()
                .of(
                    object({
                        imageUrl: string().required("AboutUs ImageUrl is required"),
                        name: string().required("AboutUs heading is required"),
                        description: string().required("AboutUs heading is required"),
                    })
                )
        }),
        expertiseContent: object({
            heading: string().required("expertiseContent's heading is required"),
            mainText: string().required("expertiseContent's mainText is required"),
            expertiseContentList: array()
                .of(
                    object({
                        heading: string().required("expertiseContentList's heading is required"),
                        subHeading: string().required("expertiseContentList's subHeading is required"),
                        panel: string().required("expertiseContentList's panel is required"),
                        icon: string().required("expertiseContentList's icon is required"),
                        content: string().required("expertiseContentList's content is required"),
                    })
                )
        }),
        industryExpertise: object({
            heading: string().required("Banner's heading is required"),
            mainText: string().required("Banner's mainText is required"),
            industryExpertiseContentList: array()
                .of(
                    object({
                        heading: string().required("industryExpertiseContentList's heading is required"),
                        content: string().required("industryExpertiseContentList's content is required"),
                    })
                )
        }),
    })
});

export const updateHomeContentSchema = object({
    body: object({
        bannerContent: object({
            heading: string().required("Banner's heading is required"),
            mainText: string().required("Banner's mainText is required"),
            bottomText: string().required("Banner's bottomText is required"),
        }),
        briefAboutUsContent: object({
            heading: string().required("briefAboutUsContent's heading is required"),
            mainText: string().required("briefAboutUsContent's mainText is required"),
            services: array()
                .of(
                    object({
                        imageUrl: string().required("AboutUs ImageUrl is required"),
                        name: string().required("AboutUs heading is required"),
                        description: string().required("AboutUs heading is required"),
                    })
                )
        }),
        expertiseContent: object({
            heading: string().required("expertiseContent's heading is required"),
            mainText: string().required("expertiseContent's mainText is required"),
            expertiseContentList: array()
                .of(
                    object({
                        heading: string().required("expertiseContentList's heading is required"),
                        subHeading: string().required("expertiseContentList's subHeading is required"),
                        panel: string().required("expertiseContentList's panel is required"),
                        icon: string().required("expertiseContentList's icon is required"),
                        content: string().required("expertiseContentList's content is required"),
                    })
                )
        }),
        industryExpertise: object({
            heading: string().required("Banner's heading is required"),
            mainText: string().required("Banner's mainText is required"),
            industryExpertiseContentList: array()
                .of(
                    object({
                        heading: string().required("industryExpertiseContentList's heading is required"),
                        content: string().required("industryExpertiseContentList's content is required"),
                    })
                )
        }),
    })
})