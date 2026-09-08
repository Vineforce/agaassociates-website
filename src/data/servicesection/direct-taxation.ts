import type { ServiceData } from "../registerService/companyIncorporation";

export const directTaxationData: ServiceData = {
  title: "Direct Taxation",
  slug: "direct-taxation",
  category: "Direct Taxation",
  categoryUrl: "/direct-taxation/",

  heroDescription:
    "Strategic direct taxation and income tax advisory services tailored to help businesses optimize tax liabilities, maintain compliance, and maximize profitability.",

  heroImage:
    "/src/assets/images/serviceSection/direct-taxation/front-view-young-attractive-lady-working-with-documents-front-table-with-calculators-cup-phone-light-background-work-business-technologies-s.jpg",

  image:
    "/src/assets/images/serviceSection/direct-taxation/finance-accounting-paper-desk-using-scaled.jpg",

  images: [
    "/src/assets/images/serviceSection/direct-taxation/front-view-young-attractive-lady-working-with-documents-front-table-with-calculators-cup-phone-light-background-work-business-technologies-s.jpg",
    "/src/assets/images/serviceSection/direct-taxation/finance-accounting-paper-desk-using-scaled.jpg",
  ],

  introTitle: "Direct Taxation",

  intro:
    "Direct taxation plays a vital role in shaping the economy by collecting revenue directly from individuals and entities. This section provides an in-depth explanation of what direct taxes are, their importance in governance, and their role in equitable wealth distribution. Learn about the legislative framework governing direct taxation and how these taxes are levied, monitored, and enforced in your region.",

  sections: [
    {
      title: "Overview of Direct Taxation",
      text:
        "Explore direct taxes, including income tax, corporate tax, and capital gains tax. Understand tax brackets, deductions, exemptions, and filing requirements, staying updated on tax law changes that impact your financial planning.",
    },
    {
      title: "Key Components of Direct Taxes",
      text:
        "Understand the full spectrum of direct taxes, including income tax for individuals, corporate tax for businesses, and capital gains tax for profits from asset sales. This section covers essential topics such as tax brackets, available deductions, and exemptions.",
    },
    {
      title: "Resources and Tools for Taxpayers",
      text:
        "Simplify your tax process with tailored tools and resources, including interactive calculators, filing guides, downloadable forms, and the latest updates. Access FAQs and connect with experts for personalized advice.",
    },
  ],

  rightPanel: {
    accordions: [
      {
        title: "Simplified Tax Filing",
        text:
          "Streamline the process of filing taxes with step-by-step guidance and intuitive tools tailored to meet your unique needs. Save valuable time by minimizing paperwork and navigating the process effortlessly.",
      },
      {
        title: "Expert Resources and Insights",
        text:
          "Access up-to-date resources, guides, and tax planning strategies to help you understand your tax obligations better. Stay informed about law changes and leverage expert tips to maximize savings.",
      },
      {
        title: "Accurate Calculations and Compliance",
        text:
          "Ensure your filings are accurate and compliant with current regulations using smart calculation tools. Reduce the risk of errors and penalties while filing returns with full confidence.",
      },
    ],
  },

  benefits: [
    "Tailored Personalized Tax Planning",
    "Access to Expert Tax Guidance",
    "Ensured Compliance with Tax Laws",
    "Time-Saving with Streamlined Tax Process",
    "Maximizing Deductions, Credits & Exemptions",
    "Accurate and Error-Free Filing",
    "Long-Term Strategic Tax Planning",
    "Comprehensive Audit Support",
  ],
};

export const directTaxationSidebar = [
  { slug: "itr-filing", title: "ITR Filing" },
  { slug: "itr-audit", title: "ITR Audit" },
  { slug: "tax-planning", title: "Tax Planning" },
  { slug: "it-representation", title: "IT Representation" },
  { slug: "tax-compliances", title: "Tax Compliances" },
  { slug: "tds-return", title: "TDS Return" },
];

export const directTaxSubServicesMap: Record<string, Partial<ServiceData>> = {
  "itr-filing": {
    title: "ITR Filing",
    heroDescription:
      "Accurate Income Tax Return (ITR) filing services tailored for individuals, HUFs, and corporate entities to maximize deductions and ensure deadline compliance.",
    introTitle: "Personal & Corporate Income Tax Returns",
    intro:
      "We prepare and submit error-free Income Tax Returns for salaried individuals, professionals, and corporate organizations within statutory due dates.",
  },
  "itr-audit": {
    title: "ITR Audit",
    heroDescription:
      "Tax Audit under Section 44AB services tailored for businesses and professionals to audit financial accounts, verify deductions, and file Form 3CA/3CB/3CD.",
    introTitle: "Statutory Tax Auditing & Certification",
    intro:
      "Our tax audit experts examine books of accounts to ensure statutory compliance under Income Tax laws, minimizing scrutiny risks.",
  },
  "tax-planning": {
    title: "Tax Planning",
    heroDescription:
      "Proactive direct tax planning and restructuring services tailored to help taxpayers legally minimize liabilities, leverage deductions, and preserve wealth.",
    introTitle: "Strategic Income & Corporate Tax Minimization",
    intro:
      "We design strategic tax planning roadmaps that utilize applicable exemptions, capital gains structuring, and investment deductions.",
  },
  "it-representation": {
    title: "IT Representation",
    heroDescription:
      "Professional Income Tax litigation and assessment representation services tailored to represent taxpayers before IT officers, CIT(A), and appellate tribunals.",
    introTitle: "Income Tax Scrutiny & Appeals Defence",
    intro:
      "Our tax advocates handle scrutiny notices, draft detailed response submissions, and represent your case before Income Tax authorities.",
  },
  "tax-compliances": {
    title: "Tax Compliances",
    heroDescription:
      "Comprehensive direct tax compliance management services tailored to ensure timely advance tax payments, SFT disclosures, and statutory filings.",
    introTitle: "Ongoing Income Tax Compliance Management",
    intro:
      "We manage routine direct tax obligations, advance tax calculations, and compliance monitoring to keep your enterprise penalty-free.",
  },
  "tds-return": {
    title: "TDS Return",
    heroDescription:
      "End-to-end Tax Deducted at Source (TDS) & TCS return filing services tailored to ensure accurate quarterly computations, challan generation, and Form 16 issuance.",
    introTitle: "Quarterly TDS/TCS Return Processing",
    intro:
      "We assist businesses with quarterly TDS returns (Form 24Q, 26Q, 27Q), TRACES portal corrections, and timely TDS certificate issuance.",
  },
};

export function getDirectTaxServiceData(slug: string): ServiceData {
  const custom = directTaxSubServicesMap[slug];
  if (!custom) {
    return directTaxationData;
  }
  return {
    ...directTaxationData,
    title: custom.title || directTaxationData.title,
    slug: slug,
    heroDescription: custom.heroDescription || directTaxationData.heroDescription,
    introTitle: custom.introTitle || directTaxationData.introTitle,
    intro: custom.intro || directTaxationData.intro,
  };
}