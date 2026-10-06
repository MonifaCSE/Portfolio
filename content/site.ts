export const siteConfig = {
  name: "Monifa Sultana",
  title: "Monifa Sultana — Web Developer & IT Lecturer",
  tagline: "Web applications, built carefully — and explained clearly.",
  subline: "I build database-driven web applications — e-commerce, training-institute and agency platforms — and have taught software development at university and academy level.",
  eyebrow: "WEB DEVELOPER · IT LECTURER · CHATTOGRAM",
  
  // Current Active Professional Roles (driven by per-field confirmed flags)
  currentRoles: [
    {
      id: "sevix-global",
      title: "Web Developer",
      organization: "Sevix Global",
      category: "professional",
      isCurrent: true,
      confirmedTitle: true,
      confirmedOrg: true,
      startDate: null, // [NEEDS USER CONFIRMATION]
      employmentType: null, // [NEEDS USER CONFIRMATION]
      platformRelationConfirmed: false, // [NEEDS USER CONFIRMATION]
    },
    {
      id: "aims-academy",
      title: "IT Lecturer",
      organization: "AIMS Academy",
      category: "teaching-academic",
      isCurrent: true,
      startDate: "May 2026",
      confirmedTitle: true,
      confirmedOrg: true,
    },
  ],

  // Navigation
  navLinks: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ],
  
  cvLink: {
    label: "Download CV",
    href: "/public/cv/Monifa-Sultana-CV-public.pdf", // alias served as /cv.pdf
    confirmed: false, // NEEDS_CONFIRMATION (D-06: file to be supplied)
  },

  // Contact details & socials - strictly follow placeholder policy D-05
  socials: {
    github: { value: null, url: "https://github.com", confirmed: false },
    linkedin: { value: null, url: "https://linkedin.com", confirmed: false },
    email: { value: null, address: "mailto:contact@placeholder.com", confirmed: false },
  },

  location: {
    city: "Chattogram", // NEEDS_CONFIRMATION Q-04
    country: "Bangladesh",
  },
};

