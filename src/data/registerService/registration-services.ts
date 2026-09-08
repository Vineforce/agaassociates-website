import type { ServiceData } from "./companyIncorporation";
import { companyIncorporationData } from "./companyIncorporation";
import { fssaiLicenseData } from "./fssai-license-registration";
import { hufRegistrationData } from "./huf-registration";

export const registrationServicesData: ServiceData = {
  title: "Registration Services",
  slug: "registration-services",
  category: "Registration Services",
  categoryUrl: "/registration-services/",
  heroDescription:
    "Comprehensive business registration and statutory compliance services tailored to help startups and enterprises establish legal validity and scale operations.",
  heroImage:
    "/src/assets/images/serviceSection/register-service/team-work-process-young-business-managers-crew-working-with-new-startup-project-labtop-wood-table-typing-keyboard-texting-message-analy.jpg",
  image:
    "/src/assets/images/serviceSection/register-service/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept-sca.jpg",
  images: [
    "/src/assets/images/serviceSection/register-service/team-work-process-young-business-managers-crew-working-with-new-startup-project-labtop-wood-table-typing-keyboard-texting-message-analy.jpg",
    "/src/assets/images/serviceSection/register-service/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept-sca.jpg",
  ],
  introTitle: "Simplifying Compliance",
  intro:
    "Starting a business involves more than just a vision. It requires compliance with various legal and regulatory frameworks. We provide end-to-end solutions, including Private Company Registration, Partnership Firm Registration, and PAN Applications, ensuring your business starts on a strong foundation.",
  sections: [
    {
      title: "Hassle-Free Registrations",
      text: "Navigating business registration complexities is simpler than ever with our expert services. We specialize in making the entire process efficient and stress-free.",
    },
    {
      title: "Our Services Include",
      text: "Private Company Registration, Partnership Firm Registration, PAN Applications, Registration for Jewelers, and Society Registrations.",
    },
    {
      title: "Why Choose Us",
      text: "We bring expertise across diverse registration types, comprehensive compliance support, quick turnaround time, and a dedicated team of professionals committed to your success.",
    },
  ],
  rightPanel: {
    accordions: [
      {
        title: "Private Company Registration",
        text: "Seamlessly register your private limited company with expert guidance through every legal and administrative step.",
      },
      {
        title: "Partnership Firm Registration",
        text: "Establish a legally compliant partnership firm with clearly defined roles, responsibilities, and profit-sharing agreements.",
      },
      {
        title: "PAN Applications",
        text: "Get your PAN application processed quickly and accurately for individuals, firms, and companies.",
      },
      {
        title: "Registration for Jewelers",
        text: "Industry-specific compliance registration to help jewelers meet all regulatory requirements with ease.",
      },
      {
        title: "Society Registrations",
        text: "Register your society or non-profit organization under the applicable acts with complete documentation support.",
      },
    ],
  },
  benefits: [
    "Private Company Registration",
    "Partnership Firm Registration",
    "PAN Applications",
    "Registration for Jewelers",
    "Society Registrations",
  ],
};

// Unique registration service data tailored for each sub-service page matching exact reference length
export const subServicesDataMap: Record<string, Partial<ServiceData>> = {
  "fssai-license-registration": {
    title: "FSSAI License Registration",
    heroDescription:
      "Hassle-free FSSAI food safety license registration services tailored to help food operators meet statutory hygiene compliance and operate with confidence.",
    introTitle: "Food Safety & Compliance Licensing",
    intro:
      "Every food business operator in India requires an FSSAI registration or license to operate legally. Our team handles complete document preparation, online application submission, and follow-ups with food safety authorities.",
  },
  "huf-registration": {
    title: "HUF Registration",
    heroDescription:
      "Professional Hindu Undivided Family registration services tailored to help family businesses optimize tax savings, manage assets, and pool investments.",
    introTitle: "Tax Optimization via HUF Setup",
    intro:
      "A Hindu Undivided Family is recognized as a separate tax entity under the Income Tax Act. Creating an HUF allows families to build joint assets, claim separate tax deductions, and manage family inheritances seamlessly.",
  },
  "gem-registration": {
    title: "GeM Registration",
    heroDescription:
      "Government e-Marketplace vendor registration services tailored to help businesses sell products directly to public sector entities and win tenders.",
    introTitle: "Direct Procurement Access for Suppliers",
    intro:
      "The Government e-Marketplace is India's primary procurement portal for government buyers. We streamline your vendor onboarding, catalog management, and compliance verification to help you win public tenders.",
  },
  "niti-udyog-registration": {
    title: "Niti Aayog (NGO Darpan) Registration",
    heroDescription:
      "Official Niti Aayog NGO Darpan portal registration services tailored to help trusts and non-profits access government grants and scheme funding.",
    introTitle: "Official Portal Recognition for NGOs",
    intro:
      "Registration on NGO Darpan is mandatory for any trust, society, or non-profit seeking government grants and scheme implementations. We assist in verifying your documentation and completing registration swiftly.",
  },
  "registration-for-jewelers": {
    title: "Registration for Jewelers",
    heroDescription:
      "Mandatory BIS hallmarking and jeweler business registration services tailored to help bullion merchants ensure legal compliance and consumer trust.",
    introTitle: "BIS Hallmarking & Legal Compliance",
    intro:
      "Selling precious metals and jewelry requires strict adherence to BIS hallmarking standards and statutory trade regulations. We provide end-to-end guidance to keep your jewelry business compliant and trusted.",
  },
  "partnership-firm-registration": {
    title: "Partnership Firm Registration",
    heroDescription:
      "Seamless partnership firm registration services tailored to help business partners draft legally binding deeds, allocate profits, and operate smoothly.",
    introTitle: "Legal Setup for Business Partners",
    intro:
      "A registered partnership firm offers legal protection, clarity in business contracts, and easy banking capabilities. We handle deed drafting, notary attestations, and official ROF filing.",
  },
  "society-registration": {
    title: "Society Registration",
    heroDescription:
      "Comprehensive society and welfare trust registration services tailored to help non-profit organizations establish legal status and transparent governance.",
    introTitle: "Non-Profit & Welfare Governance",
    intro:
      "Registering a society gives your organization legal status to accept donations, own property, and execute welfare activities. Our advisors assist with governance bylaws and registration clearance.",
  },
  "shop-act-registration": {
    title: "Shop & Establishment Act Registration",
    heroDescription:
      "Fast-track Shop and Establishment Act license registration services tailored to help commercial businesses operate legally and open bank accounts.",
    introTitle: "Commercial Premises Licensing",
    intro:
      "Every shop, office, or commercial establishment must register under the local Shop & Establishment Act. We handle municipal submissions so you can operate without regulatory hassle.",
  },
  "trademark-registration": {
    title: "Trademark Registration",
    heroDescription:
      "Comprehensive trademark filing and brand protection services tailored to help business owners secure intellectual property rights and brand value.",
    introTitle: "Intellectual Property & Brand Security",
    intro:
      "A registered trademark grants you exclusive ownership of your brand name and logo across India. Our IP specialists assist from preliminary availability checks to final registration certification.",
  },
  "pan-application": {
    title: "PAN Application Services",
    heroDescription:
      "Fast Permanent Account Number and TAN application processing services tailored to help individuals and corporate entities establish tax identity.",
    introTitle: "Tax Identification Setup",
    intro:
      "PAN is mandatory for conducting any commercial transaction and filing tax returns in India. We manage new PAN applications, corrections, and TAN registration for businesses of all scales.",
  },
  "setting-up-company": {
    title: "Setting Up Company Services",
    heroDescription:
      "End-to-end company setup and business launch consultancy services tailored to help new entrepreneurs establish legal operations in India.",
    introTitle: "Comprehensive Corporate Setup",
    intro:
      "From selecting the right corporate structure to securing post-incorporation licenses, we provide a complete launchpad for entrepreneurs setting up operations in India.",
  },
  "start-up-certificate": {
    title: "Start Up Certificate (DPIIT)",
    heroDescription:
      "Official DPIIT Startup India scheme recognition services tailored to help innovative ventures unlock tax exemptions and government scheme benefits.",
    introTitle: "Startup India Scheme Recognition",
    intro:
      "DPIIT recognition unlocks a 3-year tax holiday, capital gains exemptions, and fast-tracked patent filings. Our team helps eligible startups put together strong application packages for instant approval.",
  },
  "gst-registration": {
    title: "GST Registration Services",
    heroDescription:
      "Hassle-free Goods and Services Tax registration services tailored to help commercial businesses maintain full tax compliance and claim credits.",
    introTitle: "Seamless GST Onboarding",
    intro:
      "GST registration is mandatory for businesses exceeding turnover thresholds or conducting inter-state commerce. We ensure fast GSTIN generation with complete documentation accuracy.",
  },
  "private-company-registration": {
    title: "Private Company Registration",
    heroDescription:
      "Streamlined private limited company incorporation services tailored to help founders establish an investor-ready corporate structure with limited liability.",
    introTitle: "Private Limited Incorporation",
    intro:
      "Private Limited companies remain the preferred structure for scalable startups and growing businesses. We handle name approval, SPICe+ filings, and certificate of incorporation issuance.",
  },
};

export function getRegistrationServiceData(slug: string): ServiceData {
  if (slug === "company-incorporation-services" || slug === "company-incorporation") {
    return companyIncorporationData;
  }
  if (slug === "fssai-license-registration") {
    return fssaiLicenseData;
  }
  if (slug === "huf-registration") {
    return hufRegistrationData;
  }
  const custom = subServicesDataMap[slug];
  if (!custom) {
    return registrationServicesData;
  }
  return {
    ...registrationServicesData,
    title: custom.title || registrationServicesData.title,
    slug: slug,
    heroDescription: custom.heroDescription || registrationServicesData.heroDescription,
    introTitle: custom.introTitle || registrationServicesData.introTitle,
    intro: custom.intro || registrationServicesData.intro,
  };
}