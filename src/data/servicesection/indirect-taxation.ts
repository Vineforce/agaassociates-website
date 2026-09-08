import type { ServiceData } from "../registerService/companyIncorporation";

export const indirectTaxationData: ServiceData = {
  title: "Indirect Taxation",
  slug: "indirect-taxation",
  category: "Indirect Taxation",
  categoryUrl: "/indirect-taxation/",

  heroDescription:
    "Expert indirect taxation and GST advisory services tailored to help businesses streamline regulatory compliance, optimize supply chain duties, and minimize risks.",

  heroImage:
    "/src/assets/images/serviceSection/indirect-taxation/asian-woman-working-through-paperwork-scaled.jpg",

  image:
    "/src/assets/images/serviceSection/indirect-taxation/asian-woman-working-through-paperwork-scaled.jpg",

  images: [
    "/src/assets/images/serviceSection/indirect-taxation/asian-woman-working-through-paperwork-scaled.jpg",
    "/src/assets/images/serviceSection/indirect-taxation/close-up-female-hand-counting-with-calculator-scaled.jpg",
  ],

  introTitle: "Indirect Taxation",

  intro:
    "Indirect taxation affects almost every commercial transaction. Our Indirect Taxation Services provide comprehensive support for Goods and Services Tax (GST), customs duties, and cross-border trade logistics. We ensure your supply chain operates smoothly, tax liabilities are accurately calculated, and all reporting requirements are met on time.",

  sections: [
    {
      title: "Maximize Tax Savings",
      text:
        "Take advantage of expert tax strategies to reduce your liability. Learn about deductions under various sections, exemptions for eligible taxpayers, and credits that can lower your tax burden. Our resources offer practical advice on tax planning to help you maximize your financial situation.",
    },
    {
      title: "Tax Updates & Filing Deadlines",
      text:
        "Stay informed about critical updates to tax laws, regulations, and filing deadlines. This section ensures you're aware of any changes that could affect your tax filing or financial planning, keeping you compliant.",
    },
    {
      title: "Empowering Your Tax Journey",
      text:
        "Managing taxation can seem daunting, but it doesn't have to be. By grasping core principles, staying updated on essential tax laws, and leveraging the right tools, you can handle your tax obligations with confidence.",
    },
  ],

  rightPanel: {
    accordions: [
      {
        title: "Tailored Tax Solutions",
        text:
          "Indirect taxation services offer personalized strategies designed to optimize your tax position based on your individual or business circumstances.",
      },
      {
        title: "Expert Guidance for Filing",
        text:
          "Benefit from professional tax assistance to navigate complex filing requirements and claim eligible input credits.",
      },
      {
        title: "Stay Compliant with Tax Laws",
        text:
          "Keep your business fully compliant with the latest GST rules, invoice formatting, e-way bill protocols, and statutory return schedules.",
      },
    ],
  },

  benefits: [
    "Personalized Tax Strategies",
    "Accurate and Timely Tax Filing Services",
    "Maximized Deductions and Exemptions",
    "Complete Tax Law Compliance Assurance",
    "Expert Audit Protection and Support",
    "Long-Term Strategic Tax Planning Advice",
    "Minimized Tax Liabilities with Expertise",
    "Comprehensive Tax Support for All Needs",
  ],
};

export const indirectTaxationSidebar = [
  { slug: "gst-return", title: "GST Return" },
  { slug: "gst-audit", title: "GST Audit" },
  { slug: "gst-refund", title: "GST Refund" },
  { slug: "gst-planning", title: "GST Planning" },
  { slug: "gst-consultancy", title: "GST Consultancy" },
];

export const indirectTaxSubServicesMap: Record<string, Partial<ServiceData>> = {
  "gst-return": {
    title: "GST Return Filing",
    heroDescription:
      "Timely and accurate GST return filing services (GSTR-1, GSTR-3B, GSTR-9) tailored to ensure input tax credit reconciliation and zero late fee penalties.",
    introTitle: "Monthly & Annual GST Return Filings",
    intro:
      "We handle GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C filings for businesses, ensuring full 2B credit matching and invoice compliance.",
  },
  "gst-audit": {
    title: "GST Audit",
    heroDescription:
      "Comprehensive GST audit & annual reconciliation services tailored to verify turnover classifications, ITC eligibility, and departmental audit readiness.",
    introTitle: "Statutory & Departmental GST Audits",
    intro:
      "Our GST audit specialists reconcile portal data with financial books, resolve ITC mismatches, and prepare your business for departmental reviews.",
  },
  "gst-refund": {
    title: "GST Refund",
    heroDescription:
      "Hassle-free GST refund filing services tailored for exporters, inverted duty structure businesses, and unutilized ITC claimants to expedite cash payout.",
    introTitle: "Export & Inverted Duty GST Refunds",
    intro:
      "We prepare and track GST refund applications on the portal for zero-rated export supplies and inverted duty structures until direct bank credit.",
  },
  "gst-planning": {
    title: "GST Planning",
    heroDescription:
      "Strategic GST supply chain & transaction planning services tailored to optimize tax structuring, valuation rules, and cross-border trade duties.",
    introTitle: "Supply Chain GST & Tax Optimization",
    intro:
      "Optimize inter-state transfers, contractual terms, and input tax credit workflows to prevent cash flow blockage and reduce overall tax incidence.",
  },
  "gst-consultancy": {
    title: "GST Consultancy",
    heroDescription:
      "Expert GST advisory, classification & advance ruling consultancy services tailored to resolve complex tax queries, notices, and legal compliance.",
    introTitle: "Advisory & GST Litigation Defense",
    intro:
      "Our GST consultants offer legal opinion on HSN/SAC classification, taxability of transactions, and represent your business before GST authorities.",
  },
};

export function getIndirectTaxServiceData(slug: string): ServiceData {
  const custom = indirectTaxSubServicesMap[slug];
  if (!custom) {
    return indirectTaxationData;
  }
  return {
    ...indirectTaxationData,
    title: custom.title || indirectTaxationData.title,
    slug: slug,
    heroDescription: custom.heroDescription || indirectTaxationData.heroDescription,
    introTitle: custom.introTitle || indirectTaxationData.introTitle,
    intro: custom.intro || indirectTaxationData.intro,
  };
}