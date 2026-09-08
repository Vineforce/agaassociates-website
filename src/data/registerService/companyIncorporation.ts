export interface ContentSection {
  title: string;
  text: string;
  icon?: string;
}

export interface AccordionItem {
  title: string;
  text?: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  category: string;
  categoryUrl: string;
  heroDescription: string;
  heroImage: string;
  image: string;
  images?: string[];
  introTitle: string;
  intro: string;
  sections: ContentSection[];
  quote?: string;
  rightPanel: {
    title?: string;
    description?: string;
    accordions: AccordionItem[];
  };
  benefits: string[];
}

export const companyIncorporationData: ServiceData = {
  title: "Company Incorporation Services",
  slug: "company-incorporation-services",
  category: "Registration Services",
  categoryUrl: "/registration-services/",
  heroDescription:
    "Streamlined and hassle-free company incorporation services tailored to help businesses establish a strong legal foundation and scale with confidence.",
  heroImage:
    "/src/assets/images/serviceSection/register-service/companyIncorporation/business-man-working-office-desktop-1-scaled.jpg",
  image:
    "/src/assets/images/serviceSection/register-service/companyIncorporation/business-man-working-office-desktop-scaled.jpg",
  images: [
    "/src/assets/images/serviceSection/register-service/companyIncorporation/business-man-working-office-desktop-scaled.jpg",
    "/src/assets/images/serviceSection/register-service/companyIncorporation/business-man-working-office-desktop-1-scaled.jpg",
  ],
  introTitle: "Efficient and Stress-Free Setup",
  intro:
    "Starting your business has never been easier. Our company incorporation services handle all legal and administrative steps, from filing registration documents to ensuring every requirement is met seamlessly.",
  sections: [
    {
      title: "Streamlined Setup",
      text: "Starting your business has never been easier. Our company incorporation services handle all the legal and administrative steps, from filing registration documents to ensuring that every requirement is met. We make sure the entire process is smooth, saving you time and reducing the stress of navigating the complexities of business formation.",
      icon: "building",
    },
    {
      title: "Expert Business Structure Guidance",
      text: "Choosing the right business structure is crucial for your company’s success. We provide personalized advice on whether an LLC, LLP or private limited company is the best fit for your goals. Our experts will guide you through the pros and cons of each option, helping you understand tax implications, liability protection, and long-term growth potential.",
      icon: "document",
    },
    {
      title: "Comprehensive Compliance Support",
      text: "Our team ensures your business remains compliant with all relevant regulations, giving you peace of mind. We take care of obtaining the necessary business permits, licenses, and registrations required at local, state, and national levels. This reduces your risk of penalties and ensures you can focus on scaling your business with confidence.",
      icon: "compliance",
    },
  ],
  rightPanel: {
    accordions: [
      {
        title: "Efficient and Streamlined Company Setup",
        text: "Fast-track your incorporation process with expert filing and name approval support without administrative delays.",
      },
      {
        title: "Customized Business Structure Guidance",
        text: "Select the ideal entity structure—Private Limited, OPC, LLP, or Partnership—aligned with your long-term growth goals.",
      },
      {
        title: "Complete Legal Compliance",
        text: "Stay 100% compliant with MCA, Income Tax, and GST mandates from day one of your business operations.",
      },
   
    ],
  },
  benefits: [
    "Complete Company Registration Assistance",
    "Business Structure Advisory (Pvt Ltd, LLP, OPC)",
    "Name Approval & DIN/DSC Assistance",
    "PAN, TAN & Bank Account Setup Support",
    "Post-Incorporation Compliance Guidance",
  ],
};
