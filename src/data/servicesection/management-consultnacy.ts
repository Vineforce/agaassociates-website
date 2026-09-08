import type { ServiceData } from "../registerService/companyIncorporation";

export const managementConsultancyData: ServiceData = {
  title: "Management Consultancy",
  slug: "management-consultnacy",
  category: "Management Consultancy",
  categoryUrl: "/management-consultnacy/",

  heroDescription:
    "Strategic management consultancy services tailored to help businesses optimize operational workflows, identify market opportunities, and achieve sustainable corporate growth.",

  heroImage:
    "/src/assets/images/serviceSection/management-consultnacy/coin-pile-near-glasses-scaled.jpg",

  image:
    "/src/assets/images/serviceSection/management-consultnacy/coin-pile-near-glasses-scaled.jpg",

  images: [
    "/src/assets/images/serviceSection/management-consultnacy/coin-pile-near-glasses-scaled.jpg",
    "/src/assets/images/serviceSection/management-consultnacy/stacks-coins-arranged-bar-graph-scaled.jpg",
  ],

  introTitle: "Management Consultancy",

  intro:
    "With our Management Consultancy services, we provide the strategic guidance and operational insights needed to drive growth, efficiency, and transformation. Whether you're looking to refine your business strategy, optimize operations, or navigate change, our expert team is here to help you achieve your goals.",

  sections: [
    {
      title: "Strategy for Business Growth",
      text:
        "Our management consultancy services help businesses identify growth opportunities and develop strategic plans to achieve long-term success. We work closely with you to understand your goals and challenges, creating tailored solutions that drive performance.",
    },
    {
      title: "Operational Excellence and Efficiency",
      text:
        "We focus on optimizing your business processes for maximum efficiency and effectiveness. Our team helps streamline operations, improve resource management, and reduce costs, ensuring that your business runs smoothly.",
    },
    {
      title: "Shaping Your Business for Tomorrow",
      text:
        "Our consultancy services provide insights and strategies to navigate change and adapt to the evolving business landscape. Whether it's digital transformation, market expansion, or restructuring, we support you in future-proofing your enterprise.",
    },
  ],

  rightPanel: {
    accordions: [
      {
        title: "Strategic Growth",
        text:
          "Our management consultancy services help businesses identify growth opportunities and innovative solutions. By leveraging expert insights and strategies, we enable your business to scale efficiently and stay ahead.",
      },
      {
        title: "Improved Operational Efficiency",
        text:
          "We streamline your business processes to enhance productivity and reduce costs. With our expertise, you'll be able to optimize resources, minimize waste, and improve overall performance.",
      },
      {
        title: "Resilience in a Changing Market",
        text:
          "We guide you through market shifts, industry changes, and emerging trends, ensuring your business remains adaptable and future-ready. Our consultancy helps you build a resilient business model.",
      },
    ],
  },

  benefits: [
    "Strategic Guidance for Growth",
    "Enhanced Operational Efficiency",
    "Risk Mitigation and Compliance",
    "Improved Decision-Making",
    "Adaptability to Market Changes",
    "Enhanced Customer Satisfaction",
    "Improved Business Processes",
  ],
};

export const managementConsultancySidebar = [
  { slug: "business-planning", title: "Business Planning" },
  { slug: "accounting-outsourcing", title: "Accounting Outsourcing" },
  { slug: "business-valuation", title: "Business Valuation" },
  { slug: "financial-report-analysis", title: "Financial Report Analysis" },
  { slug: "compliance-outsourcing", title: "Compliance Outsourcing" },
  { slug: "due-diligence", title: "Due Diligence" },
  { slug: "strategic-consulting", title: "Strategic Consulting" },
  { slug: "strategic-planning", title: "Strategic Planning" },
];

export const managementSubServicesMap: Record<string, Partial<ServiceData>> = {
  "business-planning": {
    title: "Business Planning",
    heroDescription:
      "Strategic business planning services tailored to help founders and corporate leaders outline growth roadmaps, financial projections, and operational strategies.",
    introTitle: "Comprehensive Business Plan Development",
    intro:
      "A well-crafted business plan serves as the blueprint for organizational success, investor pitching, and strategic decision-making.",
  },
  "accounting-outsourcing": {
    title: "Accounting Outsourcing",
    heroDescription:
      "End-to-end accounting outsourcing services tailored to help enterprises reduce overhead costs, maintain immaculate ledgers, and access financial expertise.",
    introTitle: "Professional Managed Financial Accounting",
    intro:
      "Outsource your routine bookkeeping, payroll, and financial reporting to experienced accountants for enhanced accuracy and operational freedom.",
  },
  "business-valuation": {
    title: "Business Valuation",
    heroDescription:
      "Objective business valuation services tailored to help companies determine accurate financial worth for mergers, acquisitions, fundraising, and taxation.",
    introTitle: "Data-Driven Enterprise Valuation",
    intro:
      "We utilize recognized valuation methodologies (DCF, Market Multiples, Asset-based) to deliver defendable valuation reports for strategic transactions.",
  },
  "financial-report-analysis": {
    title: "Financial Report Analysis",
    heroDescription:
      "In-depth financial report analysis services tailored to help management understand profitability metrics, cash flow trends, and financial health.",
    introTitle: "Diagnostic Financial Performance Insights",
    intro:
      "Our analysts transform raw balance sheet data into actionable executive insights, empowering leaders to make confident capital allocation choices.",
  },
  "compliance-outsourcing": {
    title: "Compliance Outsourcing",
    heroDescription:
      "Full-spectrum compliance outsourcing services tailored to help organizations manage corporate statutory filings, tax deadlines, and regulatory obligations.",
    introTitle: "Managed Regulatory & Legal Compliance",
    intro:
      "Delegate your ROC, GST, tax, and labor compliance workflows to our legal experts, ensuring zero penalty risks and 100% statutory alignment.",
  },
  "due-diligence": {
    title: "Due Diligence",
    heroDescription:
      "Rigorous financial, legal, and operational due diligence services tailored to help investors and buyers evaluate transaction risks before acquisition.",
    introTitle: "M&A & Investment Risk Assessment",
    intro:
      "Our due diligence reviews investigate target company records, liabilities, tax positions, and operational risks to protect your capital investment.",
  },
  "strategic-consulting": {
    title: "Strategic Consulting",
    heroDescription:
      "Executive strategic consulting services tailored to help C-suite decision-makers navigate market disruptions, expansion plans, and organizational change.",
    introTitle: "Executive Strategic Leadership Advisory",
    intro:
      "Partner with experienced management advisors to formulate sustainable corporate strategies, competitive advantages, and long-term value creation.",
  },
  "strategic-planning": {
    title: "Strategic Planning",
    heroDescription:
      "Actionable strategic planning frameworks tailored to help organizations align leadership vision, set key performance indicators, and execute goals.",
    introTitle: "Organizational Alignment & Execution",
    intro:
      "We facilitate strategic planning workshops and establish monitoring frameworks that transform high-level goals into measurable daily execution.",
  },
};

export function getManagementServiceData(slug: string): ServiceData {
  const custom = managementSubServicesMap[slug];
  if (!custom) {
    return managementConsultancyData;
  }
  return {
    ...managementConsultancyData,
    title: custom.title || managementConsultancyData.title,
    slug: slug,
    heroDescription: custom.heroDescription || managementConsultancyData.heroDescription,
    introTitle: custom.introTitle || managementConsultancyData.introTitle,
    intro: custom.intro || managementConsultancyData.intro,
  };
}