import type { ServiceData } from "../registerService/companyIncorporation";

export const attestationAuditAssuranceData: ServiceData = {
  title: "Attestation, Audit & Assurance",
  slug: "attestation-audit-assurance",
  category: "Attestation, Audit & Assurance",
  categoryUrl: "/attestation-audit-assurance/",

  heroDescription:
    "Comprehensive attestation, audit, and assurance services tailored to help businesses ensure financial accuracy, maintain compliance, and build stakeholder trust.",

  heroImage:
    "/src/assets/images/serviceSection/attestation-audit-assurance/close-up-businessman-sitting-table-filling-document-768x513.webp",

  image:
    "/src/assets/images/serviceSection/attestation-audit-assurance/close-up-businessman-sitting-table-filling-document-768x513.webp",

  images: [
    "/src/assets/images/serviceSection/attestation-audit-assurance/close-up-businessman-sitting-table-filling-document-768x513.webp",
    "/src/assets/images/serviceSection/attestation-audit-assurance/close-up-businessman-sitting-table-filling-document-768x513.webp",
  ],

  introTitle: "Attestation, Audit & Assurance",

  intro:
    "Ensuring financial transparency, regulatory compliance, and operational efficiency is essential for any organization. Our Attestation, Audit & Assurance Services provide independent, reliable evaluations of financial records, internal controls, and business processes. With a comprehensive approach covering statutory audits, compliance audits, internal audits, and specialized investigative reviews, we help businesses uphold industry standards, mitigate risks, and enhance stakeholder confidence.",

  sections: [
    {
      title: "Audit & Compliance Solutions",
      text:
        "Maintain financial integrity and regulatory compliance with our tailored audit services. From statutory audits to compliance audits, our team ensures accuracy, transparency, and adherence to industry standards, helping businesses mitigate risks and meet legal obligations.",
    },
    {
      title: "Internal & Operational Audits",
      text:
        "Enhance efficiency and strengthen internal controls with our internal audit, concurrent audit, and revenue audit services. We provide in-depth evaluations of financial operations, risk management practices, and revenue processes to drive operational excellence.",
    },
    {
      title: "Specialized & Investigative Audits",
      text:
        "Gain critical insights with targeted audit solutions such as payroll audits, inventory audits, and investigative audits. Whether assessing payroll accuracy, verifying stock records, or conducting forensic investigations, our experts deliver precise reports.",
    },
  ],

  rightPanel: {
    accordions: [
      {
        title: "Compliance & Risk Management",
        text:
          "Ensure adherence to legal and regulatory requirements with our expert audit and attestation services. By identifying compliance gaps and potential risks, we help businesses implement corrective measures, avoid penalties, and maintain trust.",
      },
      {
        title: "Financial Transparency & Accuracy",
        text:
          "Gain confidence in your financial reporting with thorough audits that verify accuracy and integrity. Our services provide independent validation of financial statements, internal controls, and operational processes.",
      },
      {
        title: "Operational Efficiency & Cost Control",
        text:
          "Optimize business performance with insights from internal, inventory, and revenue audits. By uncovering inefficiencies, fraud risks, and financial discrepancies, our team helps organizations enhance productivity.",
      },
    ],
  },

  benefits: [
    "Independent Financial Audits",
    "Regulatory Compliance Assessments",
    "Internal Control Evaluations",
    "Risk Identification & Mitigation",
    "Revenue & Expense Analysis",
    "Fraud Detection & Investigation",
    "Payroll & Inventory Audits",
    "Customized Audit Reports",
    "Data-Driven Business Insights",
  ],
};

export const attestationAuditAssuranceSidebar = [
  { slug: "compliance-audit", title: "Compliance Audit" },
  { slug: "concurrent-audit", title: "Concurrent Audit" },
  { slug: "internal-audit", title: "Internal Audit" },
  { slug: "inventory-audit", title: "Inventory Audit" },
  { slug: "investigative-audit", title: "Investigative Audit" },
  { slug: "revenue-audit", title: "Revenue Audit" },
  { slug: "statutory-audit", title: "Statutory Audit" },
  { slug: "payroll-audit", title: "Payroll Audit" },
];

export const attestationSubServicesMap: Record<string, Partial<ServiceData>> = {
  "compliance-audit": {
    title: "Compliance Audit",
    heroDescription:
      "Comprehensive compliance audit services tailored to help organizations verify statutory adherence, identify regulatory gaps, and avoid legal penalties.",
    introTitle: "Statutory & Regulatory Compliance Auditing",
    intro:
      "Our compliance audits evaluate your business operations against applicable local, state, and central laws to ensure full regulatory alignment and risk protection.",
  },
  "concurrent-audit": {
    title: "Concurrent Audit",
    heroDescription:
      "Real-time concurrent audit services tailored to help financial institutions and enterprises monitor transactions, prevent errors, and ensure operational integrity.",
    introTitle: "Real-Time Transactional Auditing",
    intro:
      "Concurrent auditing involves ongoing financial verification to catch discrepancies at the point of occurrence, enhancing internal controls and compliance security.",
  },
  "internal-audit": {
    title: "Internal Audit",
    heroDescription:
      "Independent internal audit services tailored to help key management evaluate risk management frameworks, operational efficiency, and internal control systems.",
    introTitle: "Internal Control & Risk Evaluation",
    intro:
      "We perform rigorous internal reviews to identify process bottlenecks, safeguard organizational assets, and recommend sustainable operational improvements.",
  },
  "inventory-audit": {
    title: "Inventory Audit",
    heroDescription:
      "Accurate inventory and stock verification audit services tailored to help businesses maintain inventory precision, prevent leakage, and optimize working capital.",
    introTitle: "Physical Stock & Asset Verification",
    intro:
      "Our inventory audit teams verify physical stock counts against ledger records, assess valuation accuracy, and establish robust warehouse management controls.",
  },
  "investigative-audit": {
    title: "Investigative Audit",
    heroDescription:
      "Forensic investigative audit services tailored to help corporations detect financial anomalies, uncover fraud, and prepare evidence for legal proceedings.",
    introTitle: "Forensic & Fraud Risk Investigation",
    intro:
      "When financial irregularities or suspected fraud occur, our investigative audit specialists conduct thorough forensic analysis to uncover root causes and financial impact.",
  },
  "revenue-audit": {
    title: "Revenue Audit",
    heroDescription:
      "Specialized revenue audit services tailored to help commercial enterprises verify income streams, detect billing leakages, and maximize revenue collection.",
    introTitle: "Income Verification & Leakage Prevention",
    intro:
      "Revenue audits analyze sales channels, contract terms, and billing cycles to ensure all earned revenue is accurately recorded and collected without loss.",
  },
  "statutory-audit": {
    title: "Statutory Audit",
    heroDescription:
      "Independent statutory audit services tailored to help companies meet mandatory Companies Act guidelines, verify annual statements, and ensure compliance.",
    introTitle: "Mandatory Financial Statement Audit",
    intro:
      "We provide impartial, thorough statutory auditing services to verify financial reports, ensuring true and fair representation for shareholders and regulators.",
  },
  "payroll-audit": {
    title: "Payroll Audit",
    heroDescription:
      "Detailed payroll audit services tailored to help organizations verify salary calculations, statutory deductions, PF/ESI compliance, and tax withholdings.",
    introTitle: "Payroll & Compensation Compliance",
    intro:
      "Payroll audits examine employee compensation records, benefit disbursements, and statutory withholdings to eliminate errors and ensure full labor law compliance.",
  },
};

export function getAttestationServiceData(slug: string): ServiceData {
  const custom = attestationSubServicesMap[slug];
  if (!custom) {
    return attestationAuditAssuranceData;
  }
  return {
    ...attestationAuditAssuranceData,
    title: custom.title || attestationAuditAssuranceData.title,
    slug: slug,
    heroDescription: custom.heroDescription || attestationAuditAssuranceData.heroDescription,
    introTitle: custom.introTitle || attestationAuditAssuranceData.introTitle,
    intro: custom.intro || attestationAuditAssuranceData.intro,
  };
}