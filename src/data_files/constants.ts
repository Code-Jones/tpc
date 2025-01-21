import ogImageSrc from "@images/new/two-men-inspecting-pipeline.jpg";

export const SITE = {
  title: "Terrace Point Consulting Group",
  tagline: "Top-quality Hardware Tools",
  description: "At Terrace Point Consulting Group, we specialize in delivering top-tier project management, inspection, and consulting services for the pipeline, structural, process piping, and civil construction industries. With over 25 years of experience, our team has partnered with leading companies like TC Energy, Enbridge, and Cenovus, ensuring every project meets the highest standards of quality, safety, and efficiency.",
  description_short: "At Terrace Point Consulting Group, we specialize in delivering top-tier project management, inspection, and consulting services for the pipeline, structural, process piping, and civil construction industries.",
  url: "https://terracepointconsultinggroup.com",
  author: "Code Jones",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Top-tier Project Management, Inspection, and Consulting Services`,
  description: "At Terrace Point Consulting Group, we specialize in delivering top-tier project management, inspection, and consulting services for the pipeline, structural, process piping, and civil construction industries.",
  image: ogImageSrc,
};
