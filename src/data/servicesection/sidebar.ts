import { sidebarServices as directTaxationSidebar } from "./direct-taxation-sidebar";
import { sidebarServices as attestationAuditAssuranceSidebar } from "./attestation-audit-assurance-sidebar";
import { sidebarServices as managementConsultancySidebar } from "./management-consultancy-sidebar";
import { sidebarServices as indirectTaxationSidebar } from "./indirect-taxation-sidebar";
import { sidebarServices as consultancyServicesSidebar } from "./other-consultancy-services-sidebar";

export {
  directTaxationSidebar,
  attestationAuditAssuranceSidebar,
  managementConsultancySidebar,
  indirectTaxationSidebar,
  consultancyServicesSidebar,
};

export const servicesSidebar = [
  {
    slug: "attestation-audit-assurance",
    title: "Attestation, Audit & Assurance",
  },
  {
    slug: "direct-taxation",
    title: "Direct Taxation",
  },
  {
    slug: "indirect-taxation",
    title: "Indirect Taxation",
  },
  {
    slug: "management-consultnacy",
    title: "Management Consultancy",
  },
  {
    slug: "other-consultancy-services",
    title: "Other Consultancy Services",
  },
  {
    slug: "registration-services",
    title: "Registration Services",
  },
];